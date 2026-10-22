#!/usr/bin/env node
// Writes analysis/monster_blind_audit_prompt.md: a self-contained prompt for a blind audit of the
// Sejr Monster Book by another model.
//
// Blind means the auditor sees the book exactly as a GM would, plus the design standard, the rules
// and the campaign context, and none of the working history: no README, no changelog, no earlier
// review, no conversation, no lint output. Run: node monster_book/export_audit.js
const fs = require("fs");
const path = require("path");
const { parse: parseBuilder, markdown: builderMarkdown } = require("./builder_table");
const { WORLD_ORDER, GUIDE_LINES, SEB } = require("./gen_monster_book");

const ROOT = path.join(__dirname, "..");
const dir = path.join(__dirname, "entries");
const entries = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort().flatMap((f) => require(path.join(dir, f)));
const index = require("./move_index");
const builder = parseBuilder();

// ---------- helpers ----------

const section = (md, heading) => {
  const i = md.indexOf(`## ${heading}`);
  if (i < 0) throw new Error("overview section missing: " + heading);
  const j = md.indexOf("\n## ", i + 5);
  return md.slice(i, j < 0 ? md.length : j).replace(/&#91;embedded content[^\n]*/g, "").trim();
};
const overview = fs.readFileSync(path.join(ROOT, "setting", "sejr_campaign_overview.md"), "utf8");
const lvlNum = (l) => (typeof l === "number" ? l : /^\d+\/\d+$/.test(l) ? eval(l) : /^\d+$/.test(l) ? Number(l) : NaN);
const levelOf = (l) => builder.find((r) => String(r.lvl) === String(l));

// ---------- rules reference (from the repo's rules files, not from memory) ----------

const load = (f) => fs.readFileSync(path.join(ROOT, "rules", f), "utf8").replace(/\r?\n/g, " ").replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ");
const core = load("nimble_core_rules_3.2.txt");
const gmg = load("nimble_gmg_3.0.txt");
const between = (t, from, to) => {
  const i = t.indexOf(from);
  if (i < 0) throw new Error("rules text missing: " + from);
  return t.slice(i, t.indexOf(to, i + from.length)).trim();
};
const CONDITIONS = between(core, "• Blind. Can't see", "Other Minor/Rare Statuses").replace(/•/g, "\n-").replace(/[’]/g, "'");
const MONSTER_RULES = [
  between(gmg, "Running Monsters You, as the GM", "That's all you need"),
  between(gmg, "Creating Encounters Monster Budget.", "Resting & Recovery"),
  between(gmg, "Armor Variety Armored monsters", "ARTIST: JUSTIN GERARD Level Die Size"),
].join("\n\n").replace(/ARTIST: [A-Z ]+/g, "").replace(/([a-z])- ([a-z])/g, "$1$2").replace(/\s+([,.])/g, "$1");
const CONVERSION = "5e conversion (GM Guide): CON save becomes STR save. WIS and CHA saves become WIL. Paralyzed, Stunned, Unconscious: use the new Dazed condition instead (-1 action). A GM Guide monster rolls a plain d20 for saves.";
const DIE_SIZE = "Monster attack die by level (GM Guide): levels 1-3 d4; 2-5 d6; 4-10 d8; 10-13 d10; 12-17 d12; 15-20 d20. Thematic: d4 undead, d6 goblins, d8 humans, d10 beasts, d12 giants, d20 the mightiest.";

// ---------- render ----------

const mark = (r) => (r.true ? "⊤" : "⊥");
const act = (a) => `- **${a.name}** (${a.cost})${a.damage && a.damage !== "—" ? " " + a.damage + "." : ""} ${a.effect}`.replace(/\s+$/, "");
const numbered = (rows) => rows.map((t, i) => `${i + 1}. ${t}`).join("\n");

function levelLabel(e) {
  if (!e.roster) return `Level ${e.level}`;
  const ls = e.roster.map((m) => m.level).filter((l) => !Number.isNaN(lvlNum(l)));
  if (!ls.length) return "Minion";
  const lo = ls.reduce((a, b) => (lvlNum(b) < lvlNum(a) ? b : a));
  const hi = ls.reduce((a, b) => (lvlNum(b) > lvlNum(a) ? b : a));
  return lo === hi ? `Level ${lo}` : `Levels ${lo} to ${hi}`;
}

function renderEntry(e) {
  const o = [];
  o.push(`### ${e.name}`);
  o.push(`*${[e.world, e.tier, e.role, levelLabel(e)].join(" · ")}*`);
  if (e.core) o.push(`**Core:** ${e.core}`);
  o.push(`*${e.description}*`);
  if (e.roster) {
    o.push("", "| Member | Lvl | HP | Armor | Speed |", "|---|---|---|---|---|");
    e.roster.forEach((m) => o.push(`| ${m.name}${m.note ? " (" + m.note + ")" : ""} | ${m.level} | ${m.hp} | ${m.armor || "None"} | ${m.speed || "6"} |`));
    o.push("", `Stage ${e.stats.stage}.${e.groups ? " Groups per hero: " + e.groups : ""}`, "", "**Actions**");
    if (e.shared) { o.push("*All members*"); e.shared.forEach((a) => o.push(act(a))); }
    e.roster.forEach((m) => { o.push(`*${m.name}*`); m.actions.forEach((a) => o.push(act(a))); });
  } else {
    const s = e.stats;
    o.push("", `HP ${s.hp} · Armor ${s.armor} · Speed ${s.speed}${s.dc ? " · DC " + s.dc : ""} · Stage ${s.stage}`, "", "**Actions**");
    e.actions.forEach((a) => o.push(act(a)));
  }
  o.push("", `**In play.** ${e.tactics}`, `**Designer note.** ${e.designNote}`);
  if (e.sources) o.push(`**Sources.** ${e.sources}`);
  o.push("", "**Traits (d6)**", numbered(e.traits), "", "**Encounters (d4)**", numbered(e.encounters), "",
    "**Lairs (d4)**", numbered(e.lairs), "", "**Rumours (d4, Lore check)**",
    e.rumours.map((r, i) => `${i + 1}. ${mark(r)} ${r.text}`).join("\n"), "");
  const g = e.gigFit;
  o.push("**Gig Fit**", `- Verb: ${g.verb}`, `- But+: ${g.butPlus}`, `- Patron hook: ${g.patronHook}`, `- City of Arches name: ${g.cityName}`);
  (g.extra || []).forEach(([k, v]) => o.push(`- ${k}: ${v}`));
  return o.join("\n");
}

function renderBook() {
  const o = [];
  o.push("#### Reading an entry (printed in the book)", "", ...GUIDE_LINES.map(([k, v]) => `- **${k}.** ${v}`), "");
  WORLD_ORDER.forEach((w) => {
    const group = entries.filter((e) => e.world === w);
    if (!group.length) return;
    o.push(`---`, `## ${w}`, "");
    group.forEach((e) => o.push(renderEntry(e), ""));
  });
  o.push("---", "## Index of Named Moves (printed at the back of the book)", "",
    "Glosses add no rules; a Ruling is a suggested reading where the printed line is ambiguous.", "");
  [...new Set(index.map((i) => i.family))].forEach((f) => {
    o.push(`**${f}**`);
    index.filter((i) => i.family === f).forEach((i) => o.push(`- ${i.move}. ${i.gloss}${i.ruling ? " Ruling: " + i.ruling : ""}`));
    o.push("");
  });
  return o.join("\n");
}

// ---------- computed stat sheet ----------

function statSheet() {
  const rows = ["| Entry | Member | Lvl | Armor | HP | Builder HP (same armor) | HP / builder | DCs used | Builder DC |", "|---|---|---|---|---|---|---|---|---|"];
  entries.forEach((e) => {
    const members = e.roster ? e.roster : [{ name: e.name, level: e.level, hp: e.stats.hp, armor: e.stats.armor, actions: e.actions }];
    members.forEach((m) => {
      if (m.hp === "Minion") return;
      const r = levelOf(m.level);
      if (!r) return;
      const arm = String(m.armor || "None").split(" ")[0];
      const col = arm === "Medium" ? 1 : arm === "Heavy" ? 2 : 0;
      const tbl = r.hp[col];
      const tblNum = parseInt(tbl, 10);
      const dcs = [...new Set((m.actions || []).flatMap((a) => (a.effect.match(/DC (\d+)/g) || []).map((x) => x.slice(3))))].join(", ");
      const ratio = Number.isNaN(tblNum) ? "n/a" : (Number(m.hp) / tblNum).toFixed(2);
      rows.push(`| ${e.name} | ${m.name} | ${m.level} | ${arm} | ${m.hp} | ${tbl} | ${ratio} | ${dcs || "none"} | ${r.dc} |`);
    });
  });
  return rows.join("\n");
}

// ---------- the prompt ----------

const JOB = `# Blind audit: Sejr Monster Book

You are auditing a bestiary for a tabletop campaign. It has ${entries.length} entries: the Nimble Game Master's Guide monsters regrouped by family, plus converted and original creatures for a specific setting. You have not seen any earlier review of this book, and you should not try to guess what one said. Work from the material below only.

## Your job

Find what is wrong, weak, exploitable, inconsistent or unplayable, and say how strong each entry is for its level. You are an auditor, not a co-author: do not rewrite entries. A suggested fix may be at most two sentences per entry.

## How to judge

Use these lenses, in this order:
1. **Rules accuracy.** Every mechanic must work under the Nimble rules reference in section 3. Flag invented terms, wrong action economy, conditions used wrongly (for example a condition that the rules define for heroes only), saves other than STR, DEX, INT or WIL, durations the game does not track, armor handled against the rules, minions that break the minion rules, and numbers that contradict the Monster Builder table. Quote the entry and the rule. Also flag the book's own reading guide where it contradicts the rules.
2. **The design standard.** Check each entry against section 2: the entry format, the agency rule, and SEB (Succinct, Evocative, Built). Judge the spirit, not only the word counts. Is the core line evocative and specific to its world? Are the (at most three) abilities distinct and each one clause? Is the creature built from the setting rather than dropped in? Are the tables concrete and usable?
3. **Play in this campaign.** Episodic, drop-in, one gig per session, prep-light GM, solo-capable. Can a GM run the entry from its page? Does its Stage, But+ result, patron hook and verb agree with the campaign tables in section 1? Does it fit its patron's armature? Does it work for one player as well as a full table?
4. **Power and balance.** For each entry, compare HP, damage per round at full output, and save DCs against the Monster Builder row for its level and armor. Show the arithmetic briefly. Rate each entry under, on, or over its level. Note spikes that can delete a hero (large unpreventable damage, action-economy snowballs, damage-to-1 effects), and groupings that break the one-to-three monsters per hero guideline.
5. **Generated-content patterns.** Much of this book was drafted with an AI model. Look for what that produces: template repetition across entries (the same rider on many abilities, the same trait or encounter shapes, the same tactics sentence, the same gig-fit cadence), filler abilities, plausible-sounding mechanics that do not work, subjective gates, lore claims beyond the canon in section 4, invented names that clash with canon, and contradictions between entries.

Keep rules errors (verifiable) separate from design taste (arguable). Do not count strength as a flaw: the GM wants dangerous monsters. Do flag strength or structure that deletes play: a monster that answers the question an episode is built on, or one that cannot be run as written.

## Output

Use exactly these sections.

**A. Entry table.** One row per entry (family entries as one row, with a note if members differ): name, verdict (ship, fix, rethink), the single most important issue, category (rules, standard, play, power, pattern), severity (blocker, major, minor), and power (under, on, over) with the level used.

**B. Findings.** Grouped by lens. Each finding names the entry, quotes the text, and says what goes wrong in play, in one or two sentences. Add a suggested fix where it is short.

**C. Cross-entry.** Interactions that break something: stacked conditions, an ability that negates another entry's counterplay, two entries that cannot both be true, groupings (for example a front rank plus casters) that spike. Say whether each one breaks a fight (acceptable here) or breaks an episode (not acceptable). Include the rival crews and their clocks.

**D. Book level.** Coverage by Stage and by role; repetition; whether the SEB limits produced clarity or lost something needed; the ten fixes you would make first, ranked.

**E. Limits.** What you could not verify, and how confident you are in each section.
`;

const CAMPAIGN = () => `## 1. Campaign context

Sejr is an episodic, drop-in Nimble campaign in the City of Arches, a setting where thousands of ancient arches open onto other places and other worlds. The excerpts below come from the campaign overview.

${section(overview, "Pitch and premise")}

${section(overview, "Format and logistics")}

${section(overview, "Generators and tables")}

${section(overview, "Patrons and armatures")}

${section(overview, "Trackers")}

**How monsters enter play.** A monster appears as a But+ Monster result (d6 + scene number, so a 4), as a Faction result (3), inside an episode's rooms (solo, mob and boss rooms), or as a rival crew (at most once per episode, promoted to the tracker if met twice). Heroes start at level 1 and renown is capped at average group level, so low Stages are met first. The GM is very lenient: no player death across 4 systems and 7 groups. A dangerous monster is welcome; one that cannot be run, or that removes a player from the game, is not.
`;

const STANDARD = () => `## 2. Design standard

This is the GM's own design guide for the book. Use its rules as a lens, but judge outcomes at the table.

### Entry format

Every converted or original entry has: a header (world, tier, role, level), a **core line** (one sentence: where the creature comes from in its world and what it does), a one-or-two-sentence italic description, a stat row (HP, Armor, Speed, DC, Stage) or, for a family, a roster table with a per-member action list, an **In play** line (what it wants, whom it targets first, when it breaks off), a designer note, a sources line, six **Traits** (rollable details of this individual), four **Encounters** (specific scene hooks that imply a decision), four **Lairs** (what is found in its territory; at least one implies something already happened, at least one is a clue to behaviour), four **Rumours** (two true, two false, for Lore checks; true ones tactically useful, false ones plausible and sometimes dangerous), and a **Gig Fit** block: Verb (from Find, Stop, Steal, Escort, Prove, Bury), But+ (stage and context), Patron hook (which faction sends the party and why), and the City of Arches name (what locals call it).

Costs use Nimble language: 1 Action, 2 Actions, Free, Reaction, 1/round, 1/encounter. Damage uses Nimble dice; the leftmost die is the Primary Die. Tiers are Minion, Standard, Elite, Boss. Roles are Lurker, Controller, Brute, Artillery, Skirmisher, Defender.

### SEB: Succinct, Evocative, Built

Find the core of the creature, or better the family, and cut the rest, for maximum evocative succinct clarity. Built means of the world: grown by its place and history, less gonzo and more evolutionary. The model is one line per enemy: one stat row plus at most three abilities, each one clause. Limits applied to every non-Core entry: core line at most ${SEB.core} words; at most ${SEB.actions} abilities (per member for families); at most ${SEB.effect} words per ability effect; table rows at most ${SEB.row} words; designer note at most ${SEB.note}; In play at most ${SEB.tactics}; Gig Fit lines at most ${SEB.gig}.

### The agency rule

When a monster would take away agency from a hero (incapacitate, paralyze, petrify or stun), use Dazed instead (one action for one round), or express the threat through reduced action economy, movement restriction (Slowed, Grappled, Restrained, Prone), positioning (forced movement, drag, pull) or tactical disadvantage (Frightened, Hampered). Never: Incapacitated, Paralyzed, Stunned or Unconscious as a monster-dealt condition on a hero. Players dislike losing their turn, and the game's designers say so. A threat should be geometric, not temporal: the benchmark is the carrion crawler, built as a moray eel (it holds a crack, drags prey through a bottleneck, and retreats; the victim keeps acting but the choices are worse), not as a paralysis trap.

The rule applies to converted and original entries. The Core Bestiary reproduces the GM Guide's printed stat blocks (regrouped and lightly formatted), so printed conditions stand there.

### 5e conversion table

| 5e | Nimble |
|---|---|
| Paralyzed | Slowed plus Grappled, never Incapacitated |
| Stunned, Incapacitated | Dazed |
| Poisoned | Poisoned (disadvantage) or Slowed (movement) |
| CON save | STR save |
| WIS or CHA save | WIL save |
| Bonus action | Free if quick, else 1 Action |
| Legendary action | 1/round ability or a normal action |

${CONVERSION}

### Stat discipline

HP, damage per round and save DC follow the Monster Builder row for the entry's level (section 3). A glass cannon may use the HP of a lower level and the damage of a higher one; an Elite takes HP from roughly two levels up. Levels follow this table, not the levels in 4e or 5e source books. Medium Armor should not appear before level 3 and Heavy Armor not before level 8 (GM Guide); the Core Bestiary prints a few exceptions.

### House style

No em dashes or en dashes anywhere in the book (the author's rule); ranges use hyphens. Do not flag the absence of dashes.
`;

const RULES = () => `## 3. Rules reference

Source: the repository's copies of the Nimble Core Rules and Game Master's Guide. Where the book's own reading guide disagrees with this section, this section wins.

### Conditions (Core Rules)

${CONDITIONS}

Dying heroes have max 1 action. Heroes get 3 actions per turn; Reactions cost 1 action and are used off-turn, each 1/round; "Free" costs no action. A 1 on the Primary Die always misses; rolling the maximum on the Primary Die is a crit, roll it again and add, repeating. Crits ignore armor. Heroes' extra attacks in a turn are Rushed (cumulative disadvantage). Hero saves: STR, DEX, INT, WIL. When a hero's ability forces an enemy save, the enemy rolls with increasing advantage.

### Monster rules (GM Guide)

${MONSTER_RULES}

${DIE_SIZE}

### Monster Builder table (GM Guide)

Damage per attack is the damage a monster deals per attack when it makes 1, 2 or 3 attacks a turn. HP columns are by armor. An asterisk means armor is not recommended at that level. The sample dice show how to reach the damage.

${builderMarkdown(builder)}

For monsters with no ability, increase HP or damage one step. You may mix levels: a glass cannon has the HP of a lower level and the damage of a higher one. d44, d66 and d88 mean roll two dice of that size, the leftmost as tens and the second as ones.
`;

const CANON = `## 4. Canon and decisions

### Canon the book may rely on

Names below exist in the setting books. Treat them as canon. Treat any claim about them that goes beyond this list (who wants what, what a place sells or allows) as possibly new canon and say so.

- City: Archkeepers (greet arrivals through the arches; arrivals usually have no memory), Golden Order (Queen Karsara Aventus IV, the Golden Council, the Golden Knights: Lord Bianca Swifthand commands, Joslyn Halfcloak is second, Citadel of the Golden Knights with two dozen guards and nine veterans), Black Hand (criminal guild of the Lower Reaches), Mages of Kartan (Tower of the Arcane, laboratories below), Children of Ibraxus (demon cult; Lady Kalya Nightraven, her bodyguard Silent Asher and her mercenary Steel Hands), Temple of the Three Sisters, Theater of Whispers, Roselyn Zeshe (the queen's spymaster), Adel Rosethorn (Black Hand fence, Adel's Curio Shop), the Black Goat's Tavern, the Rusty Cutlass, Arena of Blood, Vathrex's Forge (Erna Ironhorn), Market Square, Villas of the Second Rise, Public Baths and the Falls of the Three Gods, Cliffs of the Dead, Lost Cisterns, Sunken Revvia, Arch of Kings, the Endless Warrens, the Doorish Hills, the Revlend Marshes, the Deadlands.
- Deathreach: a living dungeon; the Dead Fingers, the Shadowed Deeps, the Abhorrent Vats (spawn gibbering mouthers, black puddings, otyughs), duergar and dwarf forge cities, lizardfolk mages serving the dungeon, Voor the Hunger (a god fed by adventurers' deaths).
- Korax: a red star Veles over a petrified land; the city of Kor, the Red Deeps, mountain temple of Zyx, the Sundered Vaults of Athraxa.
- Eruwynd: the Endless Forest; the elven ruins of Celevis and the Immortal's Blade; Dreadroot (hobgoblin queen Tresiira, the Iron Six); the Bluesteel Armada (seven dwarf sisters).
- Threska and Arkus: Nameless King's ruined worlds; Teveron the Shadowed Mountain (grimlocks, ogres, giants, ogre mages chanting to keep primordials asleep); Averast.
- Maphotar and Io: the Grenneth war machine, Agulon, the Triset scavengers; Io's Forge of Creation, the Silent Watch, the Iverundians.
- Terrache: the Jaws of Chaos; shadow elf rulers Qinroris and Kraketen; the Violet Eye warlocks of Vestellis; the aboleth Zyn's Pillars of Sin.
- Drendaan: air and sea; Gorvund's Spindle, the city of Barthen (queens Varuel, Nora, Thrancev), Irathas, the djinni Kesset.
- Vynan: the Forgotten Laboratory; the lich Ivextus, storm giant Uzul, the crashed ship Yondoth, doppelganger replacement agents.
- Drakeholm: the Chromatic Dragon Queen and Metallic Dragon King, Galeos Titancowl, the World's Wound.
- The Ice World has no chapter in the setting books. The campaign's only canon for it is a world of ice with bear lodges whose hunters blow a bear-lodge horn.
- Slang names in each entry's Gig Fit (for example "Warreners", "Drainhands", "Gilt") are coined by this book, not canon. Flag any that clash with canon.

### Decisions the GM has made (do not flag as errors)

- Core Bestiary stat blocks are the GM Guide's, regrouped by family and lightly formatted, with every level, HP, armor value and dice expression machine-checked against the Guide text. Judge their presentation (family grouping, wording of abilities, Stage, tables, Gig Fit, the index) and internal consistency, not the printed numbers.
- Printed Core conditions stand, including the Basilisk's Petrified (three stacked Lithify gazes over 10 minutes) and the Specter's "set HP to 0".
- The agency rule applies to converted and original entries only.
- Stage assignments are by theme; the Guide gives none. Arch Guardians read "Any arch" on purpose. The Clay Guardian heals from fire on purpose. The Index of Named Moves rulings are accepted readings.
- Stat levels follow the Monster Builder table, not source levels. Entries cite a spreadsheet index of monster books; the text of 4e Monster Manuals 1 to 3, the Tales of the Valiant Monster Vault and Keith Ammann's tactics books was consulted for some entries, other books were not. Where a source line says original, no source text was used.
- The Ochre Jelly appears twice on purpose (Core Oozes, and a Deathreach Elite).
- Encounters at Stage 13 and above may depend on terrain; making every encounter context-independent was considered and deferred.
- Two rival crews exist (the Gilded Hands, the Steel Hands) with six-step clocks and campaign ladders; a clock moves by player choices, never by But+ alone.
- A Dolmenwood-style field set (number appearing, hoard, speech) and Elite lairs are not yet in the book.
- Scope for this round: critique only monsters up to level 4, a party of level 3. Entries wholly above level 4 are parked: do not critique them (you may list them as parked in section A). For a family that spans levels, critique members up to level 4 and the family's shared text.
- The reading guide's Turns, Saves and Holds lines are the book's rules for how a monster's costs, saves and escapes work; check entries against them, and flag a conflict with section 3.
`;

const out = [
  JOB,
  CAMPAIGN(),
  STANDARD(),
  RULES(),
  CANON,
  "## 5. The book",
  "",
  "Everything below is printed in the book as a GM would read it, in book order.",
  "",
  renderBook(),
  "",
  "## 6. Computed stat sheet",
  "",
  "Generated from the entries and the Monster Builder table. It compares each non-minion member's HP with the builder HP at its level and armor, and lists the save DCs its actions use against the builder DC. Treat it as data to check, not as a verdict.",
  "",
  statSheet(),
  "",
].join("\n");

if (/[–—]/.test(out.replace(/—/g, "").replace(/\|\s*—\s*\|/g, ""))) {
  // Builder-table cells use an em dash for "none"; entry text must not.
}
const dest = path.join(ROOT, "analysis", "monster_blind_audit_prompt.md");
fs.writeFileSync(dest, out);
const words = out.split(/\s+/).length;
console.log(`${dest}\n${entries.length} entries, ${words} words (about ${Math.round(words * 1.35)} tokens)`);
