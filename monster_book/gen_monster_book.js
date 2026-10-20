// Sejr Monster Book generator.
// Usage: node monster_book/gen_monster_book.js [out.docx]
// Entry data lives in monster_book/entries/<world>.js, one array per world.

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, ShadingType, LevelFormat,
  PageBreak, VerticalAlign,
} = require("docx");

// ---------- Palette and fonts ----------

const WORLDS = {
  "City of Arches": { bg: "F5EDD3", ink: "7D6608", bar: "C9A84C" },
  "Deathreach":     { bg: "EAECEE", ink: "212F3D", bar: "2C3E50" },
  "Korax":          { bg: "EAFBF0", ink: "1A5631", bar: "196F3D" },
  "Eruwynd":        { bg: "F5EAF8", ink: "6C3483", bar: "884EA0" },
  "Threska/Arkus":  { bg: "FDEDEC", ink: "7B241C", bar: "B03A2E" },
  "Ice World":      { bg: "EAF3FB", ink: "154360", bar: "1F618D" },
  "Maphotar/Io":    { bg: "FAEEDA", ink: "633806", bar: "9A5A0A" },
  "Terrache":       { bg: "FDEBD0", ink: "7D4600", bar: "AA5E00" },
  "Drendaan":       { bg: "E1F5EE", ink: "085041", bar: "117A65" },
  "Vynan":          { bg: "EAECEE", ink: "212F3D", bar: "5B2C6F" },
  "Drakeholm":      { bg: "FEF9E7", ink: "7D6608", bar: "B7950B" },
};
const WORLD_ORDER = Object.keys(WORLDS);

const BODY = "Palatino Linotype";
const HEAD = "Georgia";
const ROW_EVEN = "FAF7F2";
const ROW_ODD = "FFFFFF";
const TEXT_W = 12240 - 2 * 1440; // content width in DXA

const pal = (world) => {
  const p = WORLDS[world];
  if (!p) throw new Error(`Unknown world: ${world}`);
  return p;
};

// ---------- Border helpers ----------

const bdr = (color, size = 4) => ({ style: BorderStyle.SINGLE, size, color });
const noBdr = () => ({ style: BorderStyle.NONE, size: 0, color: "FFFFFF" });
const allBorders = (b) => ({ top: b, bottom: b, left: b, right: b });
const NONE_ALL = { ...allBorders(noBdr()), insideHorizontal: noBdr(), insideVertical: noBdr() };

// ---------- Text helpers ----------

const run = (text, o = {}) => new TextRun({ text, font: BODY, size: 20, ...o });
const para = (children, o = {}) =>
  new Paragraph({ spacing: { after: 80 }, ...o, children: Array.isArray(children) ? children : [children] });

const sectionTitle = (text, worldKey) =>
  para(run(text.toUpperCase(), { font: HEAD, bold: true, size: 20, color: pal(worldKey).ink, characterSpacing: 30 }),
    { spacing: { before: 200, after: 80 }, keepNext: true });

const cell = (children, o = {}) =>
  new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, ...o, children });

const fill = (color) => ({ type: ShadingType.CLEAR, color: "auto", fill: color });

// ---------- Blocks ----------

function headerTable(d) {
  const p = pal(d.world);
  const kicker = [d.world, d.tier, d.role, `Level ${d.level}`].join("  ·  ").toUpperCase();
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: [TEXT_W],
    borders: NONE_ALL,
    rows: [new TableRow({ children: [cell([
      para(run(kicker, { font: HEAD, size: 16, bold: true, color: p.ink, characterSpacing: 40 }), { spacing: { after: 40 } }),
      para(run(d.name, { font: HEAD, size: 44, bold: true, color: p.ink }), { spacing: { after: 60 } }),
      para(run(d.description, { italics: true, size: 21 }), { spacing: { after: 40 } }),
    ], {
      shading: fill(p.bg),
      borders: { top: bdr(p.bar, 8), bottom: bdr(p.bar, 8), left: bdr(p.bar, 12), right: noBdr() },
      margins: { top: 140, bottom: 140, left: 220, right: 220 },
    })] })],
  });
}

function statTable(stats, worldKey) {
  const p = pal(worldKey);
  const items = [["HP", String(stats.hp)], ["Armor", stats.armor], ["Speed", stats.speed], ["Stage", stats.stage]];
  const w = Math.floor(TEXT_W / 4);
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: [w, w, w, TEXT_W - 3 * w],
    borders: { ...allBorders(bdr(p.bar, 4)), insideHorizontal: bdr(p.bar, 4), insideVertical: bdr(p.bar, 4) },
    rows: [new TableRow({ children: items.map(([k, v]) => cell([
      para(run(k.toUpperCase(), { font: HEAD, size: 15, bold: true, color: p.ink, characterSpacing: 30 }),
        { alignment: AlignmentType.CENTER, spacing: { after: 20 } }),
      para(run(v, { size: 20, bold: true }), { alignment: AlignmentType.CENTER, spacing: { after: 0 } }),
    ], { shading: fill(p.bg), verticalAlign: VerticalAlign.CENTER, width: { size: w, type: WidthType.DXA } })) })],
  });
}

function actionBullet(boldPart, rest) {
  return new Paragraph({
    numbering: { reference: "actions", level: 0 },
    spacing: { after: 80 },
    children: [run(boldPart, { bold: true }), run(rest)],
  });
}

function designNote(text) {
  return para([run("Designer note. ", { bold: true, italics: true, size: 19 }), run(text, { italics: true, size: 19 })],
    { spacing: { before: 120, after: 40 } });
}

const actionLine = (a) => {
  const head = `${a.name} (${a.cost})`;
  const dmg = a.damage && a.damage !== "—" ? ` ${a.damage}.` : "";
  return actionBullet(head + ":", dmg + " " + a.effect);
};

function bodyTable(d) {
  const p = pal(d.world);
  const kids = [statTable(d.stats, d.world), sectionTitle("Actions", d.world), ...d.actions.map(actionLine)];
  kids.push(para([run("In play. ", { bold: true }), run(d.tactics)], { spacing: { before: 120, after: 40 } }));
  kids.push(designNote(d.designNote));
  if (d.sources) kids.push(para(run("Sources: " + d.sources, { size: 16, color: "707070" }), { spacing: { before: 60, after: 0 } }));
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: [TEXT_W],
    borders: NONE_ALL,
    rows: [new TableRow({ children: [cell(kids, {
      borders: { top: noBdr(), bottom: noBdr(), right: noBdr(), left: bdr(p.bar, 12) },
      margins: { top: 120, bottom: 120, left: 220, right: 80 },
    })] })],
  });
}

// Numbered rollable table. rows: array of strings or { mark, text }.
function d6Table(title, rows, worldKey) {
  const p = pal(worldKey);
  const die = `d${rows.length}`;
  const numW = 700;
  const head = new TableRow({ tableHeader: true, children: [
    cell([para(run(die, { font: HEAD, bold: true, color: p.ink, size: 19 }), { alignment: AlignmentType.CENTER, spacing: { after: 0 } })],
      { width: { size: numW, type: WidthType.DXA }, borders: { ...allBorders(noBdr()), bottom: bdr(p.bar, 6) } }),
    cell([para(run(title.toUpperCase(), { font: HEAD, bold: true, color: p.ink, size: 19, characterSpacing: 30 }), { spacing: { after: 0 } })],
      { width: { size: TEXT_W - numW, type: WidthType.DXA }, borders: { ...allBorders(noBdr()), bottom: bdr(p.bar, 6) } }),
  ] });
  const body = rows.map((r, i) => {
    const shade = fill(i % 2 === 0 ? ROW_EVEN : ROW_ODD);
    const textRuns = typeof r === "string" ? [run(r)]
      : [run(r.mark + "  ", { bold: true, color: p.ink }), run(r.text)];
    return new TableRow({ cantSplit: true, children: [
      cell([para(run(String(i + 1), { bold: true, color: p.ink }), { alignment: AlignmentType.CENTER, spacing: { after: 0 } })],
        { shading: shade, borders: allBorders(noBdr()), width: { size: numW, type: WidthType.DXA } }),
      cell([para(textRuns, { spacing: { after: 0 } })],
        { shading: shade, borders: allBorders(noBdr()), width: { size: TEXT_W - numW, type: WidthType.DXA } }),
    ] });
  });
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: [numW, TEXT_W - numW],
    borders: NONE_ALL,
    rows: [head, ...body],
  });
}

function gigFitTable(g, worldKey) {
  const p = pal(worldKey);
  const labW = 1900;
  const rows = [["Verb", g.verb], ["But+", g.butPlus], ["Patron hook", g.patronHook], ["City of Arches name", g.cityName]];
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: [labW, TEXT_W - labW],
    borders: { ...allBorders(bdr(p.bar, 6)), insideHorizontal: bdr(p.bar, 2), insideVertical: noBdr() },
    rows: rows.map(([k, v]) => new TableRow({ cantSplit: true, children: [
      cell([para(run(k, { font: HEAD, bold: true, color: p.ink, size: 19 }), { spacing: { after: 0 } })],
        { shading: fill(p.bg), width: { size: labW, type: WidthType.DXA } }),
      cell([para(run(v), { spacing: { after: 0 } })], { width: { size: TEXT_W - labW, type: WidthType.DXA } }),
    ] })),
  });
}

const spacer = () => para(run(""), { spacing: { after: 120 } });

// ---------- Entry ----------

function monsterEntry(d) {
  const w = d.world;
  return [
    headerTable(d),
    spacer(),
    bodyTable(d),
    spacer(), d6Table("Traits", d.traits, w),
    spacer(), d6Table("Encounters", d.encounters, w),
    spacer(), d6Table("Lairs", d.lairs, w),
    spacer(), d6Table("Rumours (Lore check)", d.rumours.map((r) => ({ mark: r.true ? "⊤" : "⊥", text: r.text })), w),
    sectionTitle("Gig Fit", w), gigFitTable(d.gigFit, w),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ---------- Lint ----------

const VERBS = ["Find", "Stop", "Steal", "Escort", "Prove", "Bury"];
// Conditions that remove a hero's whole turn. Allowed only in the designer note,
// where we explain what they were converted from.
const BANNED_CONDITIONS = /\b(Paralyzed|Paralysed|Stunned|Unconscious|Incapacitated|Petrified)\b/;
const BANNED_TEXT = [
  [/—/, "em dash"],
  [/–/, "en dash"],
  [/\bit'?s not\b/i, "\"it's not\" framing"],
];

function lint(d) {
  const errs = [];
  const need = (cond, msg) => { if (!cond) errs.push(msg); };
  ["world", "tier", "role", "name", "level", "description", "stats", "actions", "tactics", "designNote",
    "traits", "encounters", "lairs", "rumours", "gigFit"].forEach((k) => need(d[k] !== undefined, `missing ${k}`));
  if (errs.length) return errs;
  need(WORLDS[d.world], `unknown world ${d.world}`);
  need(["Minion", "Standard", "Elite", "Boss"].includes(d.tier), `bad tier ${d.tier}`);
  need(d.traits.length === 6, `traits: ${d.traits.length}, want 6`);
  need(d.encounters.length === 4, `encounters: ${d.encounters.length}, want 4`);
  need(d.lairs.length === 4, `lairs: ${d.lairs.length}, want 4`);
  need(d.rumours.length === 4, `rumours: ${d.rumours.length}, want 4`);
  need(d.rumours.filter((r) => r.true).length === 2, "rumours: want 2 true, 2 false");
  d.gigFit.verb.split("/").map((v) => v.trim()).forEach((v) => need(VERBS.includes(v), `verb "${v}" not in gig table`));
  ["hp", "armor", "speed", "stage"].forEach((k) => need(d.stats[k] !== undefined, `stats.${k} missing`));
  const playerFacing = [...d.actions.map((a) => `${a.name} ${a.cost} ${a.damage} ${a.effect}`), d.tactics].join("\n");
  const m = playerFacing.match(BANNED_CONDITIONS);
  need(!m, `turn-removing condition in actions: ${m && m[0]}`);
  // "—" is the spec's placeholder for an action with no damage roll.
  const all = JSON.stringify({ ...d, actions: d.actions.map((a) => ({ ...a, damage: a.damage === "—" ? "" : a.damage })) });
  BANNED_TEXT.forEach(([re, label]) => need(!re.test(all), label));
  return errs;
}

// ---------- Document ----------

function titlePage(entries) {
  const kids = [
    para(run(""), { spacing: { before: 2400 } }),
    para(run("SEJR", { font: HEAD, size: 28, bold: true, color: "7D6608", characterSpacing: 120 }), { alignment: AlignmentType.CENTER }),
    para(run("Monster Book", { font: HEAD, size: 72, bold: true }), { alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
    para(run("A Nimble bestiary for the City of Arches and the worlds beyond its gates", { italics: true, size: 24 }),
      { alignment: AlignmentType.CENTER, spacing: { after: 600 } }),
  ];
  WORLD_ORDER.forEach((w) => {
    const names = entries.filter((e) => e.world === w).map((e) => e.name);
    if (!names.length) return;
    kids.push(para([run(w + "  ", { font: HEAD, bold: true, color: pal(w).ink }), run(names.join(", "))],
      { alignment: AlignmentType.CENTER, spacing: { after: 60 } }));
  });
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  return kids;
}

function readingGuide() {
  const lines = [
    ["Level", "Monster Builder level (GM Guide). Use it for encounter budget; HP, damage and save DC follow its row."],
    ["Stage", "Where the creature turns up on the Sejr Stage table. 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch. Arch-native monsters also appear on any Arch episode to their world."],
    ["Damage", "The leftmost die is the Primary Die. A 1 misses; a max roll crits and explodes. Crits ignore monster armor."],
    ["Armor", "Medium (M): dice only, no modifiers. Heavy (H): half the dice, rounded up, no modifiers."],
    ["Saves", "Monsters roll a plain d20 for saves. Heroes save against the DC printed in the action."],
    ["Agency", "No action in this book takes a hero's whole turn. Paralysis, stun and sleep from the source monsters are rebuilt as Dazed, Slowed, Grappled, forced movement or terrain."],
    ["Rumours", "⊤ is true, ⊥ is false. Give one per Lore success; a false one costs nothing to believe until it does."],
  ];
  const kids = [para(run("Reading an entry", { font: HEAD, size: 32, bold: true }), { spacing: { after: 200 } })];
  lines.forEach(([k, v]) => kids.push(para([run(k + ". ", { bold: true }), run(v)], { spacing: { after: 120 } })));
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  return kids;
}

function worldDivider(w) {
  const p = pal(w);
  return [
    para(run(""), { spacing: { before: 3600 } }),
    new Table({
      width: { size: TEXT_W, type: WidthType.DXA },
      columnWidths: [TEXT_W],
      borders: NONE_ALL,
      rows: [new TableRow({ children: [cell([
        para(run(w, { font: HEAD, size: 56, bold: true, color: p.ink }), { alignment: AlignmentType.CENTER, spacing: { after: 0 } }),
      ], { shading: fill(p.bg), borders: { top: bdr(p.bar, 8), bottom: bdr(p.bar, 8), left: bdr(p.bar, 12), right: noBdr() },
        margins: { top: 300, bottom: 300, left: 220, right: 220 } })] })],
    }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

function buildDoc(entries) {
  const children = [...titlePage(entries), ...readingGuide()];
  WORLD_ORDER.forEach((w) => {
    const group = entries.filter((e) => e.world === w);
    if (!group.length) return;
    children.push(...worldDivider(w));
    group.forEach((e) => children.push(...monsterEntry(e)));
  });
  return new Document({
    creator: "Sejr",
    title: "Sejr Monster Book",
    styles: { default: { document: { run: { font: BODY, size: 20 } } } },
    numbering: { config: [{
      reference: "actions",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 260 } } } }],
    }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children,
    }],
  });
}

// ---------- Main ----------

function loadEntries() {
  const dir = path.join(__dirname, "entries");
  return fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort()
    .flatMap((f) => require(path.join(dir, f)));
}

if (require.main === module) {
  const out = process.argv[2] || path.join(__dirname, "sejr_monster_book.docx");
  const entries = loadEntries();
  let bad = 0;
  entries.forEach((e) => {
    const errs = lint(e);
    if (errs.length) { bad++; console.error(`${e.name || "?"}:\n  ${errs.join("\n  ")}`); }
  });
  if (bad) { console.error(`${bad} entr${bad === 1 ? "y" : "ies"} failed lint`); process.exit(1); }
  Packer.toBuffer(buildDoc(entries)).then((buf) => {
    fs.writeFileSync(out, buf);
    console.log(`${entries.length} entries, ${WORLD_ORDER.filter((w) => entries.some((e) => e.world === w)).length} worlds -> ${out}`);
  });
}

module.exports = { WORLDS, monsterEntry, buildDoc, lint, statTable, d6Table, actionBullet, designNote };
