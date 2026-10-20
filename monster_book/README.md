# Sejr Monster Book

Nimble bestiary for the City of Arches: 33 entries across 11 worlds, each with a stat block, d6 Traits, d4 Encounters, d4 Lairs, d4 Rumours (2 true, 2 false) and a Gig Fit block.

- Build: `node monster_book/gen_monster_book.js [out.docx]` (needs the `docx` npm package). Default output is `monster_book/sejr_monster_book.docx`.
- Data: `monster_book/entries/<nn>_<world>.js`, one array per world. Edit the data, not the docx.
- Lint runs before every build and fails the build on: missing sections or wrong table sizes, rumours not 2 true / 2 false, a gig verb outside Find / Stop / Steal / Escort / Prove / Bury, Paralyzed, Stunned, Unconscious, Incapacitated or Petrified in any action text, em or en dashes, "it's not" framing.

## Conventions

- Stats follow the GM Guide Monster Builder row for the entry's level (HP by armor, damage per round, save DC). Elite entries take HP from about two levels up.
- Stage uses the Sejr table: 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch.
- No action takes a hero's whole turn. Source paralysis, stun and sleep become Dazed (one action, one turn), Slowed, Grappled/Restrained, forced movement or a terrain problem.
- Ranges use hyphens (7-10), never en dashes.

## Known exceptions

- **Carrion Crawler** is the proof-of-concept entry, kept as supplied apart from dashes. Its verb line ("Find / Escape / Protect") uses verbs outside the gig table, and its Stage (7-10) and But+ text call 7-10 a "Deathreach stage", where the Sejr table puts 7-10 in the Lower Reaches and Lost Cisterns. The lint skips its verb check.
- **Level** is printed in each header line. The spec's header did not include it; it is there for encounter budgeting.
- **Ice World** has no chapter in the setting book. Its entries lean on the bear lodges from the Bear-Lodge Horn arcanum and invent little else.
