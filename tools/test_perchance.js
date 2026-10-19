#!/usr/bin/env node
// Load data/sejr_arcana_perchance.txt in node, roll every card and the forge 300 times,
// and check that every class name from the generator maps to a card.
//
// Perchance syntax is not plain JavaScript, so this loader emulates the two forms the module
// uses: a list ("name" followed by indented items, read as an object with .evaluateItem) and
// a function ("name(args) =>" followed by an indented body). d() and sec() mirror the fork's.
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "data/sejr_arcana_perchance.txt"), "utf8");
const cards = JSON.parse(fs.readFileSync(path.join(root, "data/sejr_arcana.json"), "utf8"));
const genLists = fs.readFileSync(path.join(root, "sources/sejr_generator_lists.txt"), "utf8");

function parse(text) {
  const lists = {}, fns = {};
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; ) {
    const l = lines[i];
    if (!l.trim() || l.startsWith("//") || /^\s/.test(l)) { i++; continue; }
    const body = [];
    let j = i + 1;
    while (j < lines.length && (/^\s/.test(lines[j]) || !lines[j].trim())) { body.push(lines[j]); j++; }
    const fm = l.match(/^([A-Za-z_]\w*)\(([^)]*)\)\s*=>\s*$/);
    if (fm) fns[fm[1]] = { args: fm[2], body: body.join("\n") };
    else if (/^[A-Za-z_]\w*\s*$/.test(l)) lists[l.trim()] = body.map(s => s.trim()).filter(Boolean);
    i = j;
  }
  return { lists, fns };
}

function load() {
  const { lists, fns } = parse(src);
  let code = "const d = n => Math.floor(Math.random() * n) + 1;\n" +
    "const sec = (t, b) => '<section class=\"sec\"><h2>' + t + '</h2>' + b + '</section>';\n";
  for (const [n, items] of Object.entries(lists)) {
    code += `const ${n} = { items: ${JSON.stringify(items)}, get evaluateItem() { return this.items[Math.floor(Math.random() * this.items.length)]; } };\n`;
  }
  for (const [n, f] of Object.entries(fns)) code += `function ${n}(${f.args}) {\n${f.body}\n}\n`;
  code += "return { " + [...Object.keys(lists), ...Object.keys(fns)].join(", ") + " };";
  return { api: new Function(code)(), lists, fns };
}

let failures = 0;
const fail = m => { failures++; console.log("FAIL  " + m); };
const ok = m => console.log("ok    " + m);

const { api, lists, fns } = load();
for (const n of ["other_arcanum", "arcana_data", "class_arcanum_name", "arcanum_line", "forged_arcanum", "curated_arcanum"]) {
  (n in api) ? ok(`${n} loaded`) : fail(`${n} missing`);
}
const data = api.arcana_data();
const classMap = api.class_arcanum_name();
const bad = s => /undefined|\[object|NaN|\bRES\b|—/.test(s);

// Names line up with the JSON (cut cards excluded).
const active = cards.filter(c => c.status !== "cut");
for (const c of active) if (!(c.name in data)) fail(`${c.id}: "${c.name}" missing from arcana_data`);
for (const c of cards.filter(c => c.status === "cut")) if (c.name in data) fail(`${c.id}: cut card is still in arcana_data`);
for (const n of lists.other_arcanum) {
  if (!(n in data)) fail(`other_arcanum "${n}" has no arcana_data entry`);
  if (cards.find(c => c.name === n && c.kind !== "found")) fail(`class card "${n}" is in other_arcanum`);
}
for (const c of active.filter(c => c.kind === "found")) {
  const pool = c.pool || "draw";
  const inDraw = lists.other_arcanum.includes(c.name);
  const inReward = (lists.faction_reward_arcanum || []).includes(c.name);
  if (pool === "draw" && !inDraw) fail(`${c.id}: drawable card not in other_arcanum`);
  if (pool === "faction_reward" && (inDraw || !inReward)) fail(`${c.id}: faction reward must be in faction_reward_arcanum and not in other_arcanum`);
}
for (const n of lists.faction_reward_arcanum || []) if (!(n in data)) fail(`faction_reward_arcanum "${n}" has no arcana_data entry`);
for (const c of active.filter(c => c.kind === "class")) {
  if (lists.other_arcanum.includes(c.name)) fail(`${c.id}: class card in the hero-creation draw`);
  if ((c.pool || "class") === "faction_reward" && !(lists.faction_reward_arcanum || []).includes(c.name)) fail(`${c.id}: class card missing from faction_reward_arcanum`);
}
ok(`${active.length} active cards, ${lists.other_arcanum.length} in other_arcanum, ${(lists.faction_reward_arcanum || []).length} faction rewards`);

// Every class in the generator maps to a class card.
const heroClasses = genLists.split("\nhero_class\n")[1].split("\n\n")[0].split("\n").map(s => s.trim()).filter(Boolean);
for (const cls of heroClasses) {
  const name = classMap[cls];
  if (!name) { fail(`class ${cls} has no class_arcanum_name`); continue; }
  if (!data[name]) { fail(`class ${cls} -> "${name}" not in arcana_data`); continue; }
  const card = cards.find(c => c.kind === "class" && c.class === cls);
  if (!card || card.name !== name) fail(`class ${cls} -> "${name}" does not match the JSON card`);
}
ok(`${heroClasses.length} generator classes checked: ${heroClasses.join(", ")}`);
for (const k of Object.keys(classMap)) if (!heroClasses.includes(k)) fail(`class_arcanum_name has "${k}", not in hero_class`);

// Roll every card.
for (const name of Object.keys(data)) {
  const out = api.arcanum_line(name);
  if (!out.includes(name) || bad(out) || out.length < 200) fail(`arcanum_line(${name}) looks wrong`);
  const a = data[name];
  for (const f of ["tier", "obj", "unlock", "risk", "res", "power", "esc"]) {
    if (!a[f] || (Array.isArray(a[f]) && !a[f].length)) {
      fail(`${name}: empty ${f}`);
    }
  }
}
ok(`arcanum_line rolled for all ${Object.keys(data).length} cards`);

// Curated and forge, 300 rolls each.
const N = 300;
const seen = new Set();
for (let i = 0; i < N; i++) {
  const o = api.curated_arcanum();
  if (bad(o) || !o.includes("Arcanum")) fail(`curated_arcanum roll ${i} looks wrong`);
  const m = o.match(/<b>Arcanum:<\/b> (.+?) \(/); if (m) seen.add(m[1]);
}
ok(`curated_arcanum x${N}, ${seen.size} distinct cards seen`);
for (let i = 0; i < N; i++) {
  const o = api.forged_arcanum();
  if (bad(o) || !o.includes("Resource:") || !o.includes("Escalation:") || !o.includes("Ritual:")) { fail(`forged_arcanum roll ${i} looks wrong`); break; }
}
ok(`forged_arcanum x${N}`);

console.log(failures ? `\n${failures} failure(s)` : "\nall checks passed");
process.exit(failures ? 1 : 0);
