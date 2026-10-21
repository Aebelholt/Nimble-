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

Original additions in the City of Arches section: **The Gilded Hands** (an early rival crew with a six-step clock and a three-gig ladder), **Hedge Casters** (four low-level controllers, each with a different verb), **Children of Ibraxus** (a rot cult built on Poisoned then Slowed) and **Serpent Cult of Vithra** (a blade-and-coil cult built on Restrained and Frightened). The GM Guide's own Cultists, Fanatics and Doomsayers are the rank and file for both.

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

## Backlog

- **Detailing index (clarity watch).** Some printed action names don't say what physically happens: the Bandit's "Hand it over!" (1d8, "or Shoot") is a weapon swing made while demanding the purse, but the name reads like a robbery. Core text stays as printed, so the fix is an auxiliary index at the back: one gloss line per named move (what it is, melee or ranged, what the fiction looks like). A lint warning could flag any action whose name is an exclamation and whose text names no weapon or means.
- **Setting monsters worth adopting** (from the City of Arches book, Appendix A and F). Done: Arch Guardians and Golden Knights (`01c_city_adopted.js`). Still open: the Steel Hands (Lady Kalya's buyable mercenaries) as a second rival crew, duergar dig crews (already cited by Deathreach entries), gibbering mouthers, grimlocks, lizardfolk mages.
