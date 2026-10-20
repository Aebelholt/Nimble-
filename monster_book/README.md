# Sejr Monster Book

Nimble bestiary for the City of Arches: 33 entries across 11 worlds, each with a stat block, d6 Traits, d4 Encounters, d4 Lairs, d4 Rumours (2 true, 2 false) and a Gig Fit block.

- Build: `node monster_book/gen_monster_book.js [out.docx]` (needs the `docx` npm package). Default output is `monster_book/sejr_monster_book.docx`.
- Data: `monster_book/entries/<nn>_<world>.js`, one array per world. Edit the data, not the docx.
- Lint runs before every build and fails the build on: missing sections (including the In play line) or wrong table sizes, rumours not 2 true / 2 false, a gig verb outside Find / Stop / Steal / Escort / Prove / Bury, Paralyzed, Stunned, Unconscious, Incapacitated or Petrified in any action text, em or en dashes, "it's not" framing.

## Conventions

- Stats follow the GM Guide Monster Builder row for the entry's level (HP by armor, damage per round, save DC). Elite entries take HP from about two levels up.
- Stage uses the Sejr table: 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch.
- No action takes a hero's whole turn. Source paralysis, stun and sleep become Dazed (one action, one turn), Slowed, Grappled/Restrained, forced movement or a terrain problem.
- Ranges use hyphens (7-10), never en dashes.

- Every entry has an **In play** line (what it wants, whom it targets first, when it breaks off), after Keith Ammann's method in *The Monsters Know What They're Doing* and *Making Enemies*, and a **Sources** line naming where its mechanics came from. Entries with no source on hand say so.
- **Source rule.** Where a source has the monster, its mechanics and lore win over memory unless the entry's design note says why not. Levels follow the Sejr Stage curve, not 4e levels.
- **Telegraphs over lockdowns.** Big attacks build up where they can (Young Blizzard Dragon's Rising winds), in the spirit of MCDM's villain actions: the heroes see it coming and spend their own turns answering it.

## Source coverage

Of the 33, 4e Monster Manuals 1-3 cover about 20 (the list's names and roles mostly come from there), the Tales of the Valiant Monster Vault covers the Necrophage Ghast, and Ammann covers about a dozen with tactics. No text was on hand for Far Wanderer, Dream Squire, Red Hag, Snow Golem, Coldlight Walker, Eye of Fear and Flame, Inferno Spider Moltling, Voidwracked Mage, Water Myrmidon, Common Feyr or the Vynan Alchemist-Mage. *Flee Mortals!*, *Where Evil Lives* and *Forge of Foes* are method references; none of them stats these monsters.

## Known exceptions

- **Carrion Crawler** is the proof-of-concept entry. Its verb, Stage and But+ were aligned with the Sejr tables (they had drifted); the rest is as supplied.
- **Necrophage Ghast** follows the Tales of the Valiant Monster Vault: a spellcaster ghast that cannot spread ghoul hunger.
- **Level** is printed in each header line. The spec's header did not include it; it is there for encounter budgeting.
- **Ice World** has no chapter in the setting book. Its entries lean on the bear lodges from the Bear-Lodge Horn arcanum and invent little else.
