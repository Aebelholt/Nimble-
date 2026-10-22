# Sejr Monster Book

Nimble bestiary for the City of Arches: 33 entries across 11 worlds, each with a stat block, d6 Traits, d4 Encounters, d4 Lairs, d4 Rumours (2 true, 2 false) and a Gig Fit block.

- Build: `node monster_book/gen_monster_book.js [out.docx]` (needs the `docx` npm package). Default output is `monster_book/sejr_monster_book.docx`.
- Data: `monster_book/entries/<nn>_<world>.js`, one array per world. Edit the data, not the docx.
- Lint runs before every build and fails the build on: missing sections (including the In play line) or wrong table sizes, rumours not 2 true / 2 false, a gig verb outside Find / Stop / Steal / Escort / Prove / Bury, Paralyzed, Stunned, Unconscious, Incapacitated or Petrified in any action text, em or en dashes, "it's not" framing.

## SEB: the house style

**Succinct, Evocative, Built.** Find the core of the creature, or better the family, and cut the rest. Built means of the world: a monster is grown by its place (Deathreach grows its own surveyor; the Vats grow a hunter), not dropped in as gonzo. The frame is *Forge of Foes*' one-line enemy, translated to Nimble: one stat row (HP, Armor, Speed, DC, Stage, numbers from the GM Guide Monster Builder row) plus at most three abilities, each one clause.

Entries marked `seb: true` are linted to these limits: a `core` line (max 22 words), at most 3 actions of max 20 words each, table rows max 22 words, designer note max 45, In play max 25, Gig Fit lines max 30. All 37 non-core entries are through it: words per ability fell from 21.5 to 12.5 (the GM Guide core runs 8.5), and Deathreach entries went from 630-1,040 words to about 400. Each core line also states where the creature comes from in its world (Built).

## Conventions

- Stats follow the GM Guide Monster Builder row for the entry's level (HP by armor, damage per round, save DC). Elite entries take HP from about two levels up.
- Stage uses the Sejr table: 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch.
- No action takes a hero's whole turn. Source paralysis, stun and sleep become Dazed (one action, one turn), Slowed, Grappled/Restrained, forced movement or a terrain problem.
- Ranges use hyphens (7-10), never en dashes.

- Every entry has an **In play** line (what it wants, whom it targets first, when it breaks off), after Keith Ammann's method in *The Monsters Know What They're Doing* and *Making Enemies*, and a **Sources** line naming where its mechanics came from. Entries with no source on hand say so.
- **Source rule.** Where a source has the monster, its mechanics and lore win over memory unless the entry's design note says why not. Levels follow the Sejr Stage curve, not 4e levels.
- **Telegraphs over lockdowns.** Big attacks build up where they can (Young Blizzard Dragon's Rising winds), in the spirit of MCDM's villain actions: the heroes see it coming and spend their own turns answering it.

## Core Bestiary

The first section reproduces the Nimble GM Guide bestiary (19 families, about 60 stat blocks) in the book's format, unchanged. A family entry uses a `roster` (name, level, HP, armor, speed, actions) instead of the four-cell stat table, optional `shared` actions for traits every member has, and an optional `groups` line copied from the GM Guide's per-hero sample encounters. Printed conditions stand; an entry that keeps a banned one (the Basilisk's Petrified) names it in `allowConditions` and explains it in the designer note, or the lint fails.

Original additions in the City of Arches section: **The Sterling Scabbards** (an early rival crew with a six-step clock and a three-gig ladder), **Hedge Casters** (four low-level controllers, each with a different verb), **Children of Ibraxus** (a rot cult built on Poisoned then Slowed) and **Serpent Cult of Vithra** (a blade-and-coil cult built on Restrained and Frightened). The GM Guide's own Cultists, Fanatics and Doomsayers are the rank and file for both.

The book carries the Nimble 3rd Party Creator License attribution on its title page. Core stat blocks are Nimble Co.'s; the tables, tactics and gig lines are this book's.

## Source coverage

"Monster Vault" means the index spreadsheet (`Monster_Vault_DnD2.xlsx`, 6,514 rows across 4e, 5e, A5E and ToV books), not the Tales of the Valiant book. All 33 entries have a Vault row, and each Sources line cites it. Mechanics were checked against full text where it was on hand: 4e Monster Manuals 1-3, the ToV Monster Vault and Ammann. Rows from Creature Codex, Conflux Creatures, Grim Hollow and Ultimate Bestiary were used for their tactics notes only; their books were not consulted. Where a row had no tactics note, the entry's In play line is this book's own.

## Known exceptions

- **Carrion Crawler** is the proof-of-concept entry. Its verb, Stage and But+ were aligned with the Sejr tables (they had drifted); the rest is as supplied.
- **Necrophage Ghast** follows the Tales of the Valiant Monster Vault: a spellcaster ghast that cannot spread ghoul hunger.
- **Level** is printed in each header line. The spec's header did not include it; it is there for encounter budgeting.
- **Ice World** has no chapter in the setting book. Its entries lean on the bear lodges from the Bear-Lodge Horn arcanum and invent little else.

## Deferred: encounter rewrite

Not now. Making every encounter context-independent costs high-level play its tactics, since high-level fights lean on terrain. Revisit when high-level content is in use, probably as context-pivoting only (one generic terrain phrase) for Stages 9+ and fully context-independent for low levels. Current encounters stay as written.

## Blind audit

- `node monster_book/export_audit.js` writes `monster_book/analysis/monster_blind_audit_prompt.md`: the audit job, the five lenses (rules, design standard, play, power, generated-content patterns), the campaign excerpts, the design standard, the rules reference (conditions, monster rules, the Monster Builder table parsed from `rules/`), the canon list and the GM's decisions, then the whole book as a GM reads it, the move index, and a computed stat sheet (HP and DC against the builder row). It is about 63k tokens. Blind means no README, changelog, lint output or earlier review in it.
- Paste it into a fresh model session, save the answer as `monster_book/analysis/monster_audit_vN_result.md`, and triage with `monster_book/analysis/monster_audit_triage_template.md`. Regenerate the prompt after every fix so the next round audits the current book.
- `node monster_book/check_core.js` (also run by every build) checks every Core Bestiary member's level, name, HP and armor, and every dice expression, against the GM Guide text. The prompt tells the auditor the Core numbers are machine-checked, so it spends its attention elsewhere.

## Parked for play (not for now)

- **Hell Hound chase episode.** Soul-scent as an unlimited tracker is a hostile threat the party can outrun with a plea to celestial power or a proper religious ritual. A hound the party courts and breaks would make a Find gig easy, and the difficulty lands somewhere else. Revisit when a party reaches level 5.
- **Draw Steel oozes** (the "Time to Ooze" supplement): splitting that conserves Stamina, a malice-gated Congeal, ooze as dynamic terrain, and oozes born of place. Ideas to fold into the Oozes family if its level 4 and below members are revisited.

## Backlog

- **Detailing index: done.** `move_index.js` glosses about 75 printed Core moves (what it looks like, melee or ranged) and gives a marked Ruling where print is ambiguous (Specter's Deathly touch and Corrupt, Bandit's Inept, minion dice). It renders as an appendix. The build fails if a glossed move no longer exists, and warns (clarity watch) on any printed exclamation-named move without a gloss.
- **Setting monsters worth adopting** (from the City of Arches book, Appendix A and F). All adopted: Arch Guardians, Golden Knights and the Steel Hands (`01c_city_adopted.js`), duergar dig crew, gibbering mouther, lizardfolk (`02b_deathreach_adopted.js`), grimlocks (`05b_threska_adopted.js`). Originally listed: the Steel Hands (Lady Kalya's buyable mercenaries) as a second rival crew, duergar dig crews (already cited by Deathreach entries), gibbering mouthers, grimlocks, lizardfolk mages.

## Design priorities (GM decision)

Fun first, rules second, lore third. The campaign leans on discovery and exploration, so keys and arches are common and strong, and the setting books are a source to borrow from, not a canon to defend. The GM paraphrases canon on the day, so nothing exists until it hits the table. An entry is judged on whether it gives the party a clear next move, not on intrigue. The audit prompt carries this as a standing decision.
