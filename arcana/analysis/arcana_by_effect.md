# Arcana by effect: folds 1 to 3

**Status: proposed, not canon.** New items, none in the deck or the rule book. Worlds and factions named are canon; the objects are inventions.

**Method.** The katana way: start from a rough bar and fold it, each fold burning off the weak. Fold 1 looks for holes in the deck by effect, not by item. Fold 2 asks what object would produce each effect. Fold 3 runs the tests and cuts. Fold 4 (not done) turns the survivors into five-part cards with a Cracker line, then scores them with `tools/audit.py` and `tools/power_curve.py`.

## Fold 1: the holes

Six sweeps over the current deck (39 cards).

| Sweep | What it found |
|---|---|
| Conditions | Never produced by any card: Poisoned, Silenced, Weakened/Empowered X, Hampered, Smoldering, Charged, Distracted. Blind and Invisible appear once each (Sowilo, and a detection power). Dazed, Slowed and Incapacitated appear four times each. |
| Curve | Only 9 cards rise with level. Weakened/Empowered X is a rules-native number that scales with the monster's damage. |
| Absence | After waking, an absent hero's arcanum does nothing. The long assessment flagged this. |
| Worlds | 7 of the 11 named worlds have no card: Eruwynd, Io, Korax, Maphotar, Threska, Vynan, Deathreach. |
| Downtime | Core downtime activities used as refills: Craft, Mentor, Perform, Serve (guild ask), Socialize (Tally-Stick). Never used: Invest, Build. |
| Resource types | 21 of 28 found cards are plain pip trackers. The spec's session-bound ritual type is unused, and found Wound-cost cards number zero. |

## Fold 2: concept, effect, object

| # | Concept | Effect (Nimble terms) | Object | Source |
|---|---|---|---|---|
| 1 | Muzzling magic | Silenced on casters; a zone where nobody speaks or casts | The Lich's Muzzle | Vynan |
| 2 | Measuring a foe | Assess, then Weakened X on its next attack, X = your level | Iverundian Calipers | Io |
| 3 | Venom that fights healing | Poisoned; healing ends it | The Dead-God's Vial | Threska |
| 4 | Light with an appetite | Hidden and Invisible things revealed; light costs Hit Dice | The Veles-Lamp | Korax |
| 5 | A bond that grows | A companion built from the Monster Builder at your level | The Worldtree Whistle | Eruwynd |
| 6 | Working while absent | Absent, the item invests for you and sends back a hook | The Silent Partner's Chop | Market Square |
| 7 | Standing in | A mannequin plays you at the table when you are away | The Understudy | Theater of Whispers |
| 8 | Access, not persuasion | Entry to a gathering a faction holds | The Standing Invitation | Golden Order court |
| 9 | Editing the dungeon | Draw a doorway through a wall, or seal one | Deathreach Chalk | Deathreach |
| 10 | Setting up a spell | Hampered, Smoldering, Charged on foes, for casters | The Grenneth Cinder | Maphotar |
| 11 | Unseen | Invisible granted for a scene | The Unlit Lantern | Deathreach |
| 12 | Heating an item | A weapon one die step up for an encounter | Iverundian Tongs | Io |
| 13 | Memory as fuel | Burn a memory to power a spell | The Tinderbox | Maphotar |

## Fold 3: the tests

Costs (the bearer feels it), Connects (a named place, faction or tracker), Clean (one resource, no new subsystem), Ockham (adds play the deck lacks), Spread (a goal in the middle act), plus a claimant with a case and a Cracker end state.

| # | Result | Why |
|---|---|---|
| 1 | **Keep** | Counters casters, which no card does. Toggle type. Kartan wants it. |
| 2 | **Keep** | Rises with level. Uses Assess, an action no card touches. |
| 3 | **Keep** | Counters healers. Threska is the Nameless King's council's world, so his Knights have a claim. |
| 4 | **Keep** | Light and dark are missing. Hit Dice are on the sheet, so the cost is real and trackable. |
| 5 | **Keep** | The only card whose power rises with the Monster Builder. The hunters of Eruwynd have a case. |
| 6 | **Keep** | The only absence-after-waking card. Invest is an unused refill. A gold sink. |
| 7 | Cut | The table would play someone else's hero: consent and GM load. Item 6 does the job. |
| 8 | **Keep** | Social access without a persuasion override. Uses the unused session-bound ritual type. |
| 9 | **Keep, flagged** | Private doors cut against "keys are power". Needs a GM ruling on a cap before it is a card. |
| 10 | Cut | Helps only casters, only with certain spells. Fails Clean. |
| 11 | Cut | Stealth is crowded (Mask, Coat, Robe in the old list). |
| 12 | Cut | Overlaps the Codex and the Kettle Plate. |
| 13 | Cut | Overlaps the Unpaid Favor, which already takes memories. |

## The eight survivors

| Object | Resource | Unlock deed | Refill deed | Claimant | Cracker | Curve |
|---|---|---|---|---|---|---|
| **Lich's Muzzle** (Vynan) | toggle | Take it from a caster it still holds, and hear what they would have said | Not needed; removing it ends it | Mages of Kartan | Unlock Ivextus's last word, and silence one Solo caster without a save once per arc | Flat |
| **Iverundian Calipers** (Io) | pip (3) | Measure a creature no one has recorded, and give the reading to the Library of Vrassa | Measure another new kind of creature and hand over the reading | The Iverundians, who want the standard back | The Calipers set a standard: Weakened X becomes level plus STR | Rises |
| **Dead-God's Vial** (Threska) | d6 vs accumulation | Take a vial from a petrified god's vein, and carry it back across the desert | Milk another dead god on a gig; clears there only | Knights of the Nameless King | Taint stops climbing, and Poisoned ends healing even on Solo creatures | Flat |
| **Veles-Lamp** (Korax) | Wound-cost (Hit Dice) | Light it at the Red Star's skull-mouth cave and walk out | Cost is paid, not refilled; Hit Dice return on a Safe Rest | The primeval people of Kor | Carry the flame to the star: the lamp burns free of Hit Dice | Flat |
| **Worldtree Whistle** (Eruwynd) | pip (3) | Hunt something with an airship hunter, then call a beast of your own | Train it a full day of downtime (Mentor) | The dwarven hunters who lost it | Release it to lead the herd, or take it home and plant a Worldtree seed | Rises |
| **Silent Partner's Chop** (Market Square) | pip (3), gold-fed | Seal a contract with a merchant who will not say who they work for | Invest gold in a business; the price scales with your level | The Black Hand, who tax it | The partner comes due, in person | Story |
| **Standing Invitation** (Golden Order court) | session-bound ritual | Be invited to a gathering by someone who never sent it | Host or attend a gathering each Safe Rest | The host who never sent it | Host your own: the houses owe you a seat | Story |
| **Deathreach Chalk** (Deathreach) | pip (3) | Draw a door in a wall of the Dead Fingers and walk through it | Build: add a room to the dungeon | Deathreach itself, which grows toward the chalk | The door stays: a route, and a Key-level risk | Story, flagged |

**What the eight fix:**
- **Conditions:** Silenced, Weakened X, Poisoned and the light/Invisible gap.
- **Worlds:** 6 of the 7 unused (Maphotar left over).
- **Types:** one each of toggle, d6, Wound-cost and session-bound ritual, plus four pip.
- **Curve:** two Rises and three Story.
- **Absence:** one card (the Chop).
- **Unused downtime refills:** Invest, Build.

**Flags.** Companion actions (Whistle) need a rule for who plays the creature. The Chalk's door needs a cap. Both are fold 4 questions.

## Fold 4: done

The eight are written as five-part cards with a Cracker line in `arcana_fold4_cards.md` (data in `data/sejr_arcana_draft_fold4.json`, outside the live deck and draw). Checks run:

- `python3 -I tools/audit.py data/sejr_arcana_draft_fold4.json`: 8 cards, 0 failing. The live deck still audits at 0 failing.
- `python3 -I tools/power_curve.py --draft`: the eight lift the deck's mean at levels 15-20 (1.95 to 1.99 at 20) and slightly lower it at level 1 (2.03 to 1.99).
- A hand read against the rules found seven fixes, all applied: Assess options on the Calipers, the Whistle's companion cut from level minus 2 to minus 4, Bought Time paying directly so it cannot fund the Invest refill, the Seat's Safe Rest wording, the Chalk's rooms (plain, no upgrade slot, a clock to tick), a duplicated Chalk limit, and the Lamp's Hit Dice variant of Wound-cost.

Round 8: the Worldtree Whistle is in the live deck on d20 face 18 (Sown Teeth moved to faction rewards). Open for fold 5: the Chalk's door cap and which of the other seven to put in the draw.
