// Fidelity check: every Core Bestiary roster member must match the GM Guide text (level, name, HP),
// and every dice expression in its actions must appear in the Bestiary pages.
// Usage: node monster_book/check_core.js   (exit 1 on mismatch)
const fs = require("fs");
const path = require("path");

const raw = fs.readFileSync(path.join(__dirname, "..", "reference", "rules", "nimble_gmg_3.0.txt"), "utf8")
  .replace(/\r?\n/g, " ").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/−/g, "-");
const a = raw.indexOf("BESTIARY ARTIST: KEREM BEYIT");
const b = raw.indexOf("LEGENDARY MONSTERS", a + 100);
const seg = raw.slice(a, b).replace(/\s+/g, " ");

const dir = path.join(__dirname, "entries");
const entries = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort().flatMap((f) => require(path.join(dir, f)));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let bad = 0, n = 0;
const fail = (m) => { bad++; console.error("FAIL " + m); };

for (const e of entries.filter((x) => x.world === "Core Bestiary")) {
  for (const m of e.roster) {
    n++;
    if (m.hp === "Minion") {
      if (!new RegExp(`minion[^]{0,40}${esc(m.name.replace(/ Minion$/, ""))} Minion`, "i").test(seg)) fail(`${e.name}/${m.name}: minion header not found`);
      continue;
    }
    const re = new RegExp(`lvl\\s*${esc(String(m.level))}\\b[^\\[]{0,40}?\\b${esc(m.name)}\\s*(?:\\[[a-z]+\\][^\\[\\s]*\\s*){0,3}\\[hp\\]${m.hp}\\b`, "i");
    if (!re.test(seg)) fail(`${e.family || e.name}/${m.name}: no "lvl ${m.level} ... ${m.name} [hp]${m.hp}" in the GM Guide`);
    const armor = { Medium: "M", Heavy: "H" }[String(m.armor || "").split(" ")[0]];
    if (armor) {
      const hdr = new RegExp(`lvl\\s*${esc(String(m.level))}\\b[^\\[]{0,40}?\\b${esc(m.name)}\\s*(?:\\[[a-z]+\\][^\\[\\s]*\\s*){0,3}\\[hp\\]${m.hp}`, "i").exec(seg);
      if (hdr && !new RegExp(`\\[ar\\]${armor}`).test(hdr[0])) fail(`${m.name}: armor ${armor} not in its header`);
    }
  }
  for (const act of [...(e.shared || []), ...e.roster.flatMap((m) => m.actions)]) {
    for (const d of String(act.damage).match(/\d*d\d+(?:\+\d+)?/g) || []) {
      if (!seg.includes(d)) fail(`${e.name}/${act.name}: "${d}" not in the GM Guide`);
    }
  }
}
console.log(`${n} core members checked, ${bad} problem(s)`);
process.exit(bad ? 1 : 0);
