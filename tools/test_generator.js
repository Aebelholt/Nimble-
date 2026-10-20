#!/usr/bin/env node
// Load data/sejr_generator_lists.txt (the merged lists panel) in node and roll the hero card 300 times.
//
// Emulates the Perchance features the hero card uses: nested lists (npc_name.Human),
// .evaluateItem, .selectAll, [list] and [list.lowerCase] references inside items, and
// "name(args) =>" functions. Checks that every hero has a drawn arcanum card, a guild option,
// no legacy face without a bonus, and no undefined output.
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "data/sejr_generator_lists.txt"), "utf8");
const cards = JSON.parse(fs.readFileSync(path.join(root, "data/sejr_arcana.json"), "utf8"));

const indent = l => l.match(/^ */)[0].length;
const lists = {}, fns = {};
const lines = src.split("\n");
for (let i = 0; i < lines.length; ) {
  const l = lines[i];
  if (!l.trim() || l.startsWith("//") || /^\s/.test(l)) { i++; continue; }
  const body = [];
  let j = i + 1;
  while (j < lines.length && (/^\s/.test(lines[j]) || !lines[j].trim())) { body.push(lines[j]); j++; }
  const fm = l.match(/^([A-Za-z_]\w*)\(([^)]*)\)\s*=>\s*$/);
  if (fm) fns[fm[1]] = { args: fm[2], body: body.join("\n") };
  else if (/^[A-Za-z_]\w*\s*$/.test(l)) lists[l.trim()] = body.filter(s => s.trim() && !s.trim().startsWith("//"));
  i = j;
}

// Build a nested list from indented lines.
let ctx;
function resolve(text) {
  return text.replace(/\[([A-Za-z_][\w.]*)\]/g, (m, ref) => {
    const [name, ...rest] = ref.split(".");
    if (name in ctx && ctx[name] && ctx[name].evaluateItem !== undefined) {
      let v = ctx[name].evaluateItem;
      if (rest.includes("lowerCase")) v = v.toLowerCase();
      return v;
    }
    if (name in ctx && typeof ctx[name] === "function") return String(ctx[name]());
    return m;
  });
}
function makeList(rows) {
  const base = rows.length ? indent(rows[0]) : 0;
  const items = [], subs = {};
  for (let k = 0; k < rows.length; k++) {
    if (indent(rows[k]) !== base) continue;
    const name = rows[k].trim(), child = [];
    let m = k + 1;
    while (m < rows.length && indent(rows[m]) > base) { child.push(rows[m]); m++; }
    if (child.length) subs[name] = makeList(child);
    items.push(name);
  }
  const L = {
    items,
    get evaluateItem() {
      const pick = items[Math.floor(Math.random() * items.length)];
      return subs[pick] ? subs[pick].evaluateItem : resolve(pick);
    },
    get selectAll() { return items.slice(); },
  };
  Object.assign(L, subs);
  return L;
}

ctx = {};
for (const [n, rows] of Object.entries(lists)) ctx[n] = makeList(rows);
const names = Object.keys(fns);
const factory = new Function(...Object.keys(ctx), "window", "document",
  names.map(n => `function ${n}(${fns[n].args}) {\n${fns[n].body}\n}`).join("\n") + `\nreturn { ${names.join(", ")} };`);
const api = factory(...Object.values(ctx), {}, { getElementById: () => null });
Object.assign(ctx, api);

let failures = 0;
const fail = m => { failures++; console.log("FAIL  " + m); };
const ok = m => console.log("ok    " + m);

if (lists.other_arcanum.some(n => /\(minor arcanum\)/.test(n))) fail("old other_arcanum items are still in the merged file");
if (Object.keys(lists).filter(n => n === "other_arcanum").length !== 1) fail("other_arcanum defined more than once");
const top = new Set(lists.legacy_arcanum_top.map(s => s.trim()));
const data = api.arcana_data();
const seen = new Set();
const N = 300;
for (let i = 0; i < N; i++) {
  let out;
  try { out = api.hero(); } catch (e) { fail(`hero() threw: ${e.message}`); break; }
  const m = out.match(/<b>Arcanum:<\/b> (.+?) \((Minor|Major)\), unexamined\./);
  if (!m) { fail(`hero ${i}: no drawn arcanum line`); break; }
  if (!(m[1] in data)) fail(`hero ${i}: "${m[1]}" is not a card`);
  if (top.has(m[1])) fail(`hero ${i}: drew legacy face "${m[1]}" with no bonus`);
  if (!out.includes("Or, instead of the holding, a guild:")) fail(`hero ${i}: no guild option`);
  if (/undefined|\[object|NaN/.test(out)) { fail(`hero ${i}: bad output`); break; }
  seen.add(m[1]);
}
ok(`hero() x${N}: ${seen.size} of ${lists.other_arcanum.length} draw cards seen, none from legacy faces`);
const ep = (() => { try { return api.episode(); } catch (e) { return "THREW " + e.message; } })();
if (/THREW/.test(ep)) fail(`episode() ${ep}`); else ok("episode() still runs");

console.log(failures ? `\n${failures} failure(s)` : "\nall checks passed");
process.exit(failures ? 1 : 0);
