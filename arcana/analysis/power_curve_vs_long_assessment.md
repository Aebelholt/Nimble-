# Power curve vs the long assessment

Compares `power_curve.md` (numbers against level) with *Sejr Arcana Assessment, long* (`Sejr_Arcana_Assessment_long.md`: meaning and loop against session count). They measure different things. On the structure they agree, and on most cards they complement each other.

## Seasons decide which findings land when

Season 1 is 13 sessions; the campaign runs past it. At a level every two to three episodes:

| Season | Sessions | Levels reached | What bites |
|---|---|---|---|
| 1 | 1-13 | about 5-7 | The long assessment's plateau: most arcana are awake by session 4 and become upkeep. Medium armor (from level 3, around sessions 5-8) zeroes minion and flat-damage hits: Horn, Sown Teeth, Kettle crossbow, Hut Stamp. Every card is still at or above its band. |
| 2 | 14-26 | about 9-14 | The power curve's crossover (level 8-10, around sessions 18-27): most cards drop below band. Heavy armor from level 8. |
| 3 | 27-39 | about 13-20 | Only the Rises and Story cards, and the Mortal Coil, keep pace. |

So the two assessments describe the same deck one season apart. **The season break is the natural place for the Cracker or echelon stage:** it answers the season-1 plateau as season 2 opens, and gives the numbers a step just before the crossover.

## Where they agree

| Finding | Long assessment | Power curve |
|---|---|---|
| The deck is front-loaded, with nothing past the first stage | "After waking, most cards become upkeep"; Wielder and Cracker ranks are empty | Every class arcanum is 1st echelon; the spec's 2nd-4th echelons have no cards |
| Same fix | "A Cracker line for each card", tied to rank and post-wake absent ticks | "Echelon deepening": a second, third and fourth unlock on the held card at levels 5, 9 and 13 |
| Flat-number cards are the weakest | Kettle Plate "reads as technology"; Tide-Coat and Pitch-Sap are chores | The same three, plus Sown Teeth, are in the Falls group |
| Sown Teeth is the worst card | Finite, no arc, "just a bag" | Falls, finite, and spent while it is strong |
| Rune Fragment is too big | Nine fragments in thirteen sessions | Its power rises with fragments found, so season 1 never sees its peak; as a multi-season quest it fits |

The two fixes can be one design. A Cracker stage keyed to a level band gives the player a goal past waking (their lens) and a step up in numbers (mine). That fills the empty University ranks.

## Where they disagree, and why both are right

| Card | Long assessment | Power curve | Reconciled |
|---|---|---|---|
| Pain Teacher's Wrappings | weak: no refill by deed | rises: one of the best late cards (armor-ignore, +LVL) | Mechanically durable, narratively thin. Give it a deed (a re-inking or a student), not more power. |
| Battle Standard | weak: encounter-bound, hard unlock | VR at every level: the strongest class card | Same split. The aura is fine; the unlock and the carry-over between sessions need the work. |
| Oath-Band | best in deck | U, falling: +1 to +3 max HP vanishes on a 100 HP hero | The loop is right and the reward isn't. Make the fulfilment reward scale (heal all Wounds, or a level-band bonus). |
| Bear-Lodge Horn | strong | falls: bears do nothing to Medium armor from L3 | Keep the story; rule how hero minions meet armor. |
| Valkyrie's Feather | strong: the valkyrie gets a vote | falls: 1 HP buys little against multi-attack monsters; cost toothless at this table | The argument scene is the card. It works as long as the GM is willing to let her win sometimes. |
| Black Lotus Case | strong: model middle-act card | falls slightly: Drowsing Pollen dies around L7 | Agree on the card; the level cap on Pollen is the only number to move. |
| Hellhide | mid | falls: its Defense is bought by L5 | Agree it is heavy for what it carries late. |

## Card quadrants

Loop strength from the long assessment (strong and mid-strong counted as strong, mid-weak as weak), curve shape from mine.

| | Holds or rises | Falls |
|---|---|---|
| **Strong loop** | Hourglass, Fairy Jar, Apology Blade, Rune Fragment, Provenance Ledger, Tally-Stick, Gate Chain, Rusted Spear, Hut, Hexing Needles, Axe, Forgotten Key, Seven-Leaf, Mirror, Knucklebone, Broken Verdict, Hollow Contract, Bell, Mud | Black Lotus, Oath-Band, Valkyrie's Feather, Bear-Lodge Horn |
| **Weak loop** | Wrappings, Battle Standard | Kettle Plate, Sown Teeth, Tide-Coat, Pitch-Sap Harness, Cracked Lens |

- **Top left (19):** the deck's anchors. Leave them alone.
- **Top right (4):** fix the numbers, keep the story.
- **Bottom left (2):** fix the story, keep the numbers.
- **Bottom right (5):** the real problem cards. Three are already faction rewards or legacy-adjacent; Kettle Plate and Sown Teeth are open draws. Either rethink them or accept them as first-arc treats.
- Mid cards in both lenses (Drowning Scale, Unpaid Favor, Linens, Harpoon, Codex, Loaded Die, Tracking Cord, Setlist) carry the table without driving it.

## What each lens has that the other lacks

- **Only the long assessment:** absence after waking, University ranks, table size and spotlight, the Clean failure at deck level, five different d6-against-accumulation timings (checked: the Feather rolls after adding, the Harpoon, Setlist and Cord before, the Lens adds only on a safe roll), hoarding of finite cards, omen overload, and the player having no hand in authoring the object.
- **Only the power curve:** armor against minions and flat damage, fixed DCs holding against flat monster saves, Dazed losing value as monsters gain attacks, the minion dice running nine levels ahead of the GM Guide, the crossover level, and the 8 cards found only in the original JSON (not in the long assessment).

## Small corrections to the long assessment

- **Kettle Plate's "find the workshop" fetch** was replaced on branch `ccr-61edb5c2-15y1o4` (the unlock now asks whose measure the plate was built to). That branch is not on main yet, so the rule book appendix still shows the old line.
- **Hellhide's Terror** lasts the encounter, so its tracking is per fight, not across the campaign. The load is small.
- **Thirteen sessions is season 1**, not the whole campaign; now recorded in the campaign overview.

## Combined next steps (not done)

1. One Cracker or echelon stage per card, opened at the season 1 to 2 break: a deed, a goal past waking, and a numeric step.
2. Rule how hero minions meet armor before session 5 or so, when Medium armor can first appear.
3. One d6-against-accumulation procedure for all five cards.
4. Shared refill gigs (the long assessment's idea), which also share out the later-level stages.
