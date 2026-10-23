# Review handoff: what was done, how it was checked, what is open

Sources read for this pass: the SEJR book (this repo), Nimble Core Rules 3.2 and GM Guide 3.0 from `reference/rules/`, and Draw Steel Monsters v1 (uploaded in the second pass). Every Draw Steel claim in the handoff was checked against the book; all held. Where a number below differs from the source, that is this book's rebuild.

How each claim was checked: R = rules inspection against the Core or GM Guide text, M = arithmetic against the Monster Builder table, S = scenario walk-through on paper, P = playtest. No playtest has been run.

## 1. Monster turns (R)
- GM Guide: monsters do not get three actions; they move, use the actions on the block, and end their turn; Speed can replace one attack to move again. The reading guide's Turns rule now says that, defines x2, 2 Actions and chained "then/after" abilities, and says a Reaction fires off-turn once a round and never triggers another Reaction.
- Every creature with a choice of actions now has a Turn line (`member_meta.js`, 89 lines). The build fails if one is missing. The Core Packleader and Fanatic conflict is resolved by the chain rule, not by editing the printed block.

## 2. Reactions (R, S)
- Reaction triggers and caps were inspected for every entry. Capped as printed: Sway, Swap, Body shield, Bar the way, Familiar crow, Shut (1/round); Smoke and mirrors, Sanctuary, Molt, Fold away, Split (once). Overreach was uncapped and is now 1/round. Ethereal repulsion is now once per enemy per encounter, so it cannot loop.
- **Phase Spider (S):** the old Phase vanished it until its own next turn, so heroes never had a turn to hit it. Now it Phases only after a Bite on a turn it did not just appear. Cycle: appears and Bites with advantage, stays exposed through the heroes' turns, Bites again, Phases out. The GM marks the shimmer, and heroes beside it strike first. This keeps the ambush and gives an attack window every other round. Unresolved: whether advantage on the first Bite plus Poison is too much for a lone back-liner.
- **Slaad Tadpole (S):** the old Bite gave disadvantage until its next turn on top of Chaos shift, which was two defenses for one price. Bite now ends with a 4-space hit-and-run move; Chaos shift is 1/round. No recursion: shifts do not provoke and no Reaction triggers a Reaction.

## 3. Damage and encounter cost
- **Hell Hound (R, M):** Core Knockback is 5 damage per space cut short. Knockback equal to a d10 primary die could add up to 50. Now Knockback 2: at most 10 extra, so the bite tops out near 25 against Builder 20. The GM Guide's own Giant Zombie and Hill Giant use Knockback by a d4 (up to 20 extra); those are printed Core and left as printed. The collision rule is now in the reading guide.
- **Elite (R, M):** Nimble has no Elite tier. This book's rule: cost = level x HP / Builder HP at its armor, rounded. Grell: 5 x 80/64 = 6.25, cost 6. Ochre Jelly: 3 x 62/41 = 4.5, cost 5. Young Blizzard Dragon: 7 x 95/72 = 9.2, cost 9. Costs print in the header. Deep Horrors was labelled Standard / Elite with only printed blocks, so it is Standard now.
- Healing, revival, armor, advantage and summons are not folded into the cost formula. They are noted per entry (Jelly's shared attacks and rejoin, Dragon's telegraphed storm). Unresolved: whether 30 percent extra HP is the right price for revival (see Giant Zombie).

## 4. Roles (R)
Each family member now has a battlefield role shown beside its name. The Rank-and-File Dead are Artillery, Defender, Controller and two Brutes; their family header reads "Mixed roles". Roles are my classification, not tested.

## 5. Source clarity (R)
The Sources line now states: official Nimble blocks (numbers machine-checked; wording reformatted, not verbatim), SEJR variant, SEJR conversion, adaptation from the setting book, or SEJR original. A check against the GM Guide found that about half the Core ability texts are reformatted (for example "Choose twice from Claws and Bite" became a Turn line), so "unchanged" claims were removed from the guide, README and Core notes.

## Giant Zombie prototype: Rotbound Giant (R, M, S; not playtested)
Level 8, Elite, cost 10, HP 100, variant of the GM Guide's Giant Zombie.
- **Rotten smash** (2 Actions, replaces attacks): seizes up to two creatures or objects, STR save DC 14 or Grappled, escape DC 14. No damage yet.
- **Slam** (Free at the start of its next turn, replaces attacks): one held creature takes 4d8+8 and Prone; two held are knocked together for 3d8+8 each and Dazed (Knocking Heads without Malice). A held object is hurled: DEX save for half.
- **The delay is this book's change.** Between grab and slam every hero acts. Rescue paths: escape (action, STR/DEX save), a crit on either creature, an ally's help, or 20+ damage from one attack, which makes it drop one held creature.
- **Rises again:** once, at 0 HP, rising with 30 HP two rounds later unless fire or radiant damage dealt the killing blow or a hero spends an action to burn or bless the body. This is a finishing-blow rule, not a fire weakness.
- Math: pair-turn damage is 26 on one target or 43 across two, over two turns, against Builder 30 per turn at level 8. Swipe x2 averages 25. Effective HP 130, ratio 1.3, cost 10.
- Alternatives and tradeoff: an immediate slam is closer to the source but gives no rescue window and is a one-turn 43 on two heroes. The delayed slam is recommended. The other option, a revival at full HP, makes cost 16 and is not recommended.
- Open: whether 20+ damage is too easy a release at level 8, whether two rounds is the right revival delay, and how it plays for one or two heroes.

## Other adaptations: recommendation for the roster
In scope (levels 1-4), recommended next, in order:
1. **Kobold Artifex** for the Kobold Trapper: real mechanisms (hook pulls, levers) heroes can disable or use. The roster's early levels need trap play.
2. **Radenwight Piper** for Goblins or the Scabbards: follow-up attacks with a per-round cap and no recursion. Needs a crew identity first.
3. **Hobgoblin Grandguard** for a Golden Knight protector: a limited protective Reaction with positional counterplay.

Parked, above level 4 or needing a decision: Lightbender (avoid stacking defenses), Basilisk rescue (Core item, level 7: a book ruling, not a stat edit), Troll mutations (Hill Brutes, level 10), War Dog collars (needs an origin and consequences before importing: which faction fields disposable detonating soldiers?).

Needed from you: upload Draw Steel Monsters v1 so page references and the Giant Zombie numbers can be checked, and say which faction should own the War Dog collars.


## Second pass: checked against Draw Steel Monsters v1
- **Giant Zombie (p.266):** level 4 Elite Brute, 140 Stamina. Rotten Smash is a strike that does 9, 14 or 17 damage and grabs on tiers 2 and 3. Knocking Heads (1 Malice) is a triggered second smash with a double edge when it grabs two or starts its turn holding two. Endless Knight is an immediate return at 50 Stamina, prone, unless the killing damage was fire or holy or the body is destroyed. It also carries fire weakness 5 and Negative Nerves, neither adopted. Correction to the prototype: Rotten smash now deals damage (2d6+6 to each of up to two targets) as well as grabbing. Slam is 3d8+8 on one held creature or 2d8+8 each on two. Two-turn damage is 26 on the grab turn plus 34 or 21.5, about 30 a turn against Builder 30. Cost 10 stands. The delay and the two-round revival are still this book's change.
- **Kobold Artifex (p.192):** built as a Controller variant of the Core Kobold Trapper, "Kobold Artifex", level 2, cost 3. Chain hook pulls toward a rigged space and fires it at disadvantage, as the source's double edge. Pull the cord is Activate Trap. Three one-use mechanisms (net, hive cart, oil and spark) are terrain the party can cut, disarm or fire themselves. Open: two Artifex fire six mechanisms; cap at three.
- **Radenwight Piper (p.227):** built as the "Goblin Drum-Band", a level 2 Support. The source's recursion is real: Ready Rodent follow-ups deal damage, and Vivace! refreshes them. Pester is capped at once a round with a Goblin Minion, never triggers itself, and Drumroll allows one extra Pester once an encounter. Open: strong with many minions; cap at three.
- **Hobgoblin Grandguard (p.174):** added as the "Shieldward Knight" in the Golden Knights (level 4, Defender). The source's Wide Guard is a passive bane on every strike against nearby allies. The Nimble version is a Reaction once a round that gives one attack disadvantage, and fails if the Shieldward is Grappled, Restrained or Prone or the attacker is adjacent to it.
- **Basilisk (p.49):** the source lets the target or a neighbor spend a main action to cut away the stone for 8 unreducible damage. Added as a book ruling on the Core Basilisk's note: one action removes one Lithify for 1d8 damage that ignores armor.
- **Lightbender (p.197), Troll mutations (p.254), War Dog collars (pp.299-300):** all match the handoff. The Lightbender's Afterimage halves damage, ignores nondamaging effects and teleports 5, and Avoidance ends saves automatically, which is the stacking to avoid. Troll mutation text is a GM-discretion rule. War Dog collars explode for 1d3 on death. Not built; the War Dog still needs a faction and origin.
