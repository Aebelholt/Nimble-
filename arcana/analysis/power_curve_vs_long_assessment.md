# Power curve vs the long assessment

Compares `power_curve.md` (numbers against level) with *Sejr Arcana Assessment, long* (`Sejr_Arcana_Assessment_long.md`: meaning and loop against session count). They measure different things. On the structure they agree, and on most cards they complement each other.

## The one assumption that decides how much the curve matters

The long assessment plans for a **thirteen-session campaign**. The power curve assumed a full 1-20 run. Nothing in the repo fixes the length; the campaign overview gives only "milestone levelling every two to three episodes".

- **At thirteen sessions** heroes finish around **level 5-7**. The curve's crossover (level 8-10) never arrives. Every card stays at or above its band to the end, and the long assessment's middle-act plateau is the real problem.
- **One power finding still lands inside thirteen sessions:** Medium armor from level 3 (around sessions 5-8) zeroes minion and flat-damage hits. The Horn, Sown Teeth, Kettle crossbow and Hut Stamp lose most of their combat value in the campaign's second half.
- **At a full run** both problems stack: the arcanum stops giving the player a goal around session 4, and stops out-powering standard items around session 20-25.

## Where they agree

| Finding | Long assessment | Power curve |
|---|---|---|
| The deck is front-loaded, with nothing past the first stage | "After waking, most cards become upkeep"; Wielder and Cracker ranks are empty | Every class arcanum is 1st echelon; the spec's 2nd-4th echelons have no cards |
| Same fix | "A Cracker line for each card", tied to rank and post-wake absent ticks | "Echelon deepening": a second, third and fourth unlock on the held card at levels 5, 9 and 13 |
| Flat-number cards are the weakest | Kettle Plate "reads as technology"; Tide-Coat and Pitch-Sap are chores | The same three, plus Sown Teeth, are in the Falls group |
| Sown Teeth is the worst card | Finite, no arc, "just a bag" | Falls, finite, and spent while it is strong |
| Rune Fragment is too big | Nine fragments in thirteen sessions | Its power rises with fragments found, so a short campaign never sees its peak |

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
- **The thirteen-session length** is not in the repo. If it is decided, put it in the campaign overview, because it changes which of these findings matter.

## Combined next steps (not done)

1. Decide the campaign length. It sets whether the power curve matters beyond armor.
2. One Cracker or echelon stage per card: a deed, a goal past waking, and a numeric step.
3. One d6-against-accumulation procedure for all five cards.
4. One ruling for hero minions against monster armor.
5. Shared refill gigs (the long assessment's idea), which also share out the later-level stages.
