// Parses the GM Guide Monster Builder table out of rules/nimble_gmg_3.0.txt.
// Returns [{ lvl, hp: [none, M, H], dpr: [1, 2, 3 attacks], dice: [1, 2, 3 attacks], dc, cr }].
const fs = require("fs");
const path = require("path");

function parse() {
  const t = fs.readFileSync(path.join(__dirname, "..", "rules", "nimble_gmg_3.0.txt"), "utf8")
    .replace(/\r?\n/g, " ").replace(/’/g, "'").replace(/\s+/g, " ");
  const i = t.indexOf("Monster Level HP & Armor");
  const j = t.indexOf("+ +20 |", i);
  const body = t.slice(t.indexOf("CR Equiv.", i) + 9, j).trim();
  const want = ["1/3", "1/2", ...Array.from({ length: 20 }, (_, k) => String(k + 1))];
  const starts = [];
  let from = 0;
  for (const lvl of want) {
    const re = new RegExp(`(?:^| )(${lvl.replace("/", "\\/")}) (\\d+) \\| `, "g");
    re.lastIndex = from;
    const m = re.exec(body);
    if (!m) throw new Error("Builder table: level " + lvl + " not found");
    const at = m.index + (m[0].startsWith(" ") ? 1 : 0);
    starts.push({ at, lvl });
    from = at + 2;
  }
  const rows = starts.map((s, k) => {
    const txt = body.slice(s.at, k + 1 < starts.length ? starts[k + 1].at : body.length).trim();
    const r = /^(\S+) (\S+) \| (\S+) \| (\S+) (\S+(?: \(can't crit\))?) \| (\S+) \| (\S+) (.+?) \| (.+?) \| (.+?) (\d+) (\S+)$/.exec(txt);
    if (!r) throw new Error("Builder table row: " + txt);
    return { lvl: r[1], hp: [r[2], r[3], r[4]], dpr: [r[5], r[6], r[7]], dice: [r[8], r[9], r[10]], dc: r[11], cr: r[12] };
  });
  return rows;
}

function markdown(rows) {
  const out = ["| Lvl | HP none | HP Medium | HP Heavy | Dmg/round, 1 atk | 2 atks | 3 atks | Sample dice, 1 atk | 2 atks | 3 atks | Save DC | CR |", "|---|---|---|---|---|---|---|---|---|---|---|---|"];
  rows.forEach((r) => out.push(`| ${r.lvl} | ${r.hp.join(" | ")} | ${r.dpr.join(" | ")} | ${r.dice.join(" | ")} | ${r.dc} | ${r.cr} |`));
  return out.join("\n");
}

module.exports = { parse, markdown };
if (require.main === module) console.log(markdown(parse()));
