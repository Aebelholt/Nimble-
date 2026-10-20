# Sejr arcana: blind audit of 39 cards

I’m treating the supplied cards as the complete deck under review, and the accompanying design brief and condensed Nimble 2 reference as the rules authority. I’m not treating deliberate high power, finite relics, loose canon, or the GM’s willingness to make fights dangerous as defects in themselves.

The important distinction is between **a powerful item that creates a good problem and an item whose wording, action economy, or campaign effects create a problem the table cannot resolve consistently**. I also distinguish hard rules problems from choices that are arguable but may be intentional.

## A. Card table

**Verdicts:** **Ship** = no major defect found; **Fix** = retain the concept but repair a material issue; **Rethink** = the current implementation undermines its own purpose or creates a structural problem.

**Severity:** **Blocker** = cannot be reliably adjudicated or causes a serious rules/campaign failure; **Major** = materially changes play or creates an exploitable interaction; **Minor** = clarification or limited design friction.

Rarity is an estimate against the supplied core examples, not a claim that these custom items have official prices. The “table rating” notes where the lenient GM and level-1 draw make an item more consequential than its nominal rarity suggests.

| ID                           | Verdict | Single most important issue                                                                                                                                                                                                                  | Category  | Severity | Power rating and nearest baseline                                                                                                    |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `class_berserker`            | Fix     | Death’s Door preserves Rage at 0 HP, but does not say whether the hero remains Dying or can still die during the encounter.                                                                                                                  | Rules     | Blocker  | **L** — Grim Coronet’s death-defying turn; higher survival ceiling, but still leaves Dying unresolved. Table: **L**                  |
| `class_cheat`                | Fix     | “Roll your Primary Die twice” does not define whether this means the attack’s damage die or the die in a check; it also needs to preserve one roll’s normal consequences.                                                                    | Rules     | Major    | **VR** — advantage-like reroll; strong but constrained to a resource and the Cheat’s turn economy. Table: **VR**                     |
| `class_commander`            | Ship    | Authority is encounter-bound and earned by damage, but the standard’s “first attack each round” advantage needs a clear reset point.                                                                                                         | Rules     | Minor    | **VR** — broad party-wide combat benefit; above most Rare examples. Table: **VR**                                                    |
| `class_hunter`               | Fix     | The d6 risk roll occurs before adding a new Mark, but the consequence refers to a quarry that may not yet be marked; the triggering quarry needs definition.                                                                                 | Rules     | Major    | **VR** — tracking beyond Hunter’s Mark plus movement control; unusually useful outside combat. Table: **VR**                         |
| `class_mage`                 | Fix     | Every safe cast adds Overcharge and gives a subclass benefit, while the next roll can trigger a failure that imposes a Wound and subclass penalty; the timing and stacking of benefits need to be explicit.                                  | Rules     | Major    | **L** — free upcast or Chaos advantage plus passive magic detection; more than a normal class accessory. Table: **L**                |
| `class_oathsworn`            | Fix     | Held Judgment can persist past encounters and suppress new Judgment Dice, with no defined limit on how long the pool can remain unavailable.                                                                                                 | Rules     | Major    | **VR** — armor-ignoring Radiant Judgment and lie detection; high value but gated by the class resource. Table: **VR**                |
| `class_shadowmancer`         | Fix     | `Patron's Margin` has an ambiguous eligibility clause and can push a spell above the normal maximum tier.                                                                                                                                    | Rules     | Blocker  | **L** — one-tier-above-maximum spellcasting is a substantial ceiling-breaker. Table: **L**                                           |
| `class_shepherd`             | Fix     | Ring Out lets a Dying hero take a full turn while they remain Dying, so its interaction with the one-action limit, attacks, and damage-induced Wounds must be resolved.                                                                      | Rules     | Major    | **VR** — emergency action restoration and multi-target recovery; stronger than typical Rare healing utility. Table: **VR**           |
| `class_songweaver`           | Fix     | The Crowd tracker can prevent all further Calls at 4, but the refill requires a full hour for a new audience; Protective Verse also consumes a Call and can lock itself out.                                                                 | Play      | Major    | **VR** — repeatable condition immunity for nearby allies; unusually broad for a free power. Table: **VR**                            |
| `class_stormshifter`         | Ship    | Earthpulse has a clear world refill, but “until the end of this encounter” needs to be reconciled with the Beastshift’s normal duration and any encounter transitions.                                                                       | Rules     | Minor    | **VR** — spellcasting without ending Beastshift and a multi-target Slow zone. Table: **VR**                                          |
| `class_zephyr`               | Fix     | The Wound-cost is clear, but the extra Wound at 3+ Wounds can bring a hero at 5 Wounds to the Dying threshold; the card needs to specify whether the power resolves before that consequence disables it.                                     | Rules     | Major    | **VR** — armor-ignoring attacks and level-scaled bonus damage at a lasting injury cost. Table: **VR**                                |
| `forgotten_key`              | Fix     | It opens dormant arches, but the setting says the holder of a key decides where an arch opens; the key’s inability to control its destination needs to be stated as an exception.                                                            | Rules     | Major    | **C** — access to other worlds and route control changes episode structure. Table: **C**                                             |
| `drowning_scale`             | Fix     | `Last Breath` triggers when any eligible creature within Reach 2 drops to 0 HP, including allies, so the wielder can deliberately turn allied knockouts into resource generation.                                                            | Checklist | Major    | **L** — reliable encounter resource from a frequent combat state, plus condition infliction. Table: **L**                            |
| `axe_of_nine_eyes`           | Fix     | “True Name” is not defined in the supplied rules; the item’s main information power depends on an undefined term.                                                                                                                            | Rules     | Major    | **L** — repeatable Daze on a named target, tracking, and advantage on skill checks; only nine uses, but each is strong. Table: **L** |
| `hourglass_of_borrowed_time` | Rethink | One reroll of “any die” after it is rolled can rewrite a decisive check, attack, save, or other resolution, including an opponent’s roll.                                                                                                    | Power     | Blocker  | **C** — broader than a normal reroll item; can invalidate a gig’s central twist or climax. Table: **C**                              |
| `black_lotus_case`           | Fix     | Smoke Step permits a free teleport every round for an encounter after one action to eat a petal, making the encounter’s mobility assumptions unreliable.                                                                                     | Power     | Major    | **L** — repeated encounter teleportation, plus other major movement effects. Table: **L**                                            |
| `oath_band`                  | Fix     | The permanent max-HP change is ambiguous because the card says max HP from the Band never exceeds level, but does not say whether that limit applies to the bonus or the character’s total max HP.                                           | Rules     | Major    | **VR** — permanent HP progression plus a reroll; unusually strong for a low-level draw. Table: **VR**                                |
| `unpaid_favor`               | Fix     | “Small, specific impossibility” has no stable boundary; the GM approves each effect, and the examples range from fiction changes to denying a creature an action.                                                                            | Rules     | Major    | **VR** — potentially broad reality alteration; power depends heavily on adjudication. Table: **L** under permissive rulings          |
| `valkyries_feather`          | Ship    | The save-or-consequence loop is clear, but Tally has no maximum, so the risk becomes automatic at 6+; this is an intentional escalation rather than a balance defect.                                                                        | Checklist | Minor    | **VR** — prevents a hero or ally from dropping to 0 HP, avoiding a Wound and Dying. Table: **VR**                                    |
| `tide_coat`                  | Fix     | Growth raises Defense without a maximum, while the armor’s Defense and Stealth penalty scale in opposite directions; its practical ceiling is not bounded by the card.                                                                       | Power     | Major    | **L** — Defense can reach or exceed exceptional armor tiers with enough Growth. Table: **L**                                         |
| `pitch_sap_harness`          | Fix     | The fourth weapon triggers an escalation even though Burden has a maximum of 3; this is a legitimate overflow trigger, but the rules need to say whether Burden can actually reach 4.                                                        | Rules     | Major    | **VR** — strong armor and weapon-disabling reaction; the fourth-hit trap is potentially fight-defining. Table: **VR**                |
| `hellhide`                   | Fix     | The unlock’s “magic-drinking” result creates a persistent state in which even allied healing cannot affect the wearer, but the card does not define whether that state can be removed or how Thirst from spells is tracked against the max.  | Rules     | Major    | **L** — heavy armor without STR requirement, encounter-long roll penalty aura, and demon/undead control. Table: **L**                |
| `kettle_plate`               | Fix     | Boiler Fire bundles three very different actions under “spend 1 Steam per use”; the cost and action timing of each mode need to be explicit, especially for the free ranged attack.                                                          | Rules     | Major    | **L** — Defense 18 without STR requirement plus a free ranged attack and utility mode. Table: **L**                                  |
| `fairy_jar`                  | Rethink | The unlock requires learning a name the fairy refuses to tell, and the refill question is explicitly unavailable during ordinary gigs.                                                                                                       | Play      | Blocker  | **R** — small charms and passive fey detection; not especially strong, but its economy is likely to stall. Table: **R**              |
| `seven_leaf_bracelet`        | Ship    | Seven permanent uses are intentionally finite; the main weakness is that the final-leaf escalation does not specify what happens if the player does not plant it.                                                                            | Rules     | Minor    | **R** — situational plant communication and Elvish; broadly comparable to utility-focused Rare items. Table: **R**                   |
| `hexing_needles`             | Fix     | The target’s disadvantage has no save, can affect attacks, and lasts until the cloth is unpicked or burned; that is a deliberately open-ended debuff, but its duration and removal conditions are too easy to exploit without a clear scope. | Power     | Major    | **L** — persistent attack/check debuff that can be applied out of combat. Table: **L**                                               |
| `bear_lodge_horn`            | Fix     | The Horde creates three minions with an hour-long duration, but there is no rule for what they do outside combat or how they behave if an encounter starts after the hour has passed.                                                        | Rules     | Major    | **VR** — three extra attackers and a nearby Slow aura; strong action economy. Table: **VR**                                          |
| `arch_watch_mirror`          | Fix     | “Anything beyond a watched arch can look into your holding” does not specify what it can see or do, and the mirror’s surveillance is too open-ended to adjudicate consistently.                                                              | Rules     | Major    | **VR** — persistent arch monitoring and advance destination questions; campaign utility is substantial. Table: **VR**                |
| `apology_blade`              | Fix     | Gust says “every creature in a Line 6 from you” but does not specify the line’s direction or whether the line originates from the wielder; it also explicitly affects allies.                                                                | Rules     | Major    | **VR** — multi-target repositioning and encounter-long ranged attack disruption. Table: **VR**                                       |
| `rune_fragment`              | Fix     | The ninth fragment can change a roll after its result has already been applied, which can invalidate downstream outcomes without a rollback procedure.                                                                                       | Rules     | Major    | **L** — broad once-only rewrite of an already-resolved roll, plus versatile runes. Table: **L**                                      |
| `binding_linens`             | Fix     | Hold Back suspends Dying but leaves the target at 0 HP, unable to act, and immune to Wounds from damage; the card does not say what happens if it is never unwrapped or the target is healed while wrapped.                                  | Rules     | Major    | **VR** — strong emergency delay of death, with a repeat-use memory consequence. Table: **VR**                                        |
| `rusted_spear`               | Rethink | The final Rust consequence inflicts a permanent, unhealable Wound and reduces max Wounds for heroes; against a Solo or Legendary creature it instead removes a third of max HP.                                                              | Power     | Blocker  | **L** — healing Wounds plus a potentially encounter-ending consequence; the catastrophic penalty is disproportionate. Table: **L**   |
| `derelict_harpoon`           | Fix     | Slack is a d6 accumulation tracker with a clear reset, but the hit effect says a pulled creature can save “to resist” without saying whether a successful save negates the pull, the Prone condition, or both.                               | Rules     | Major    | **VR** — forced movement, Prone, and a tether restriction with escalating risk. Table: **VR**                                        |
| `provenance_ledger`          | Fix     | Name the Owner can reveal a rightful owner and ownership history automatically, potentially bypassing the provenance investigation the episode is built around.                                                                              | Power     | Major    | **VR** — strong investigative shortcut, plus social advantage and stolen/cursed-object detection. Table: **VR**                      |
| `tally_stick`                | Fix     | A failed Truce save prevents an attack, but the card does not say whether the attacker loses its action or can choose another action; the Truce also ends after the first attempt.                                                           | Rules     | Major    | **VR** — powerful single-attempt violence prevention and debt awareness. Table: **VR**                                               |
| `gate_chain`                 | Fix     | Hold the Line gives a free Defend when Interposing, but the card does not clarify whether this is in addition to the normal Reaction cost or modifies the Interpose action itself.                                                           | Rules     | Major    | **VR** — stronger Interpose coverage and free damage reduction, with a meaningful mobility cost. Table: **VR**                       |
| `sown_teeth`                 | Fix     | The minions can be summoned repeatedly until the finite stock runs out, but the card does not define how their hour-long duration interacts with combat-only minion rules.                                                                   | Rules     | Major    | **VR** — extra attackers with no recurring resource cost once a tooth is spent; strong but finite. Table: **VR**                     |
| `hen_legs_hut`               | Rethink | It combines a Safe Rest for up to six people with a day of overland travel in an hour, undermining travel pressure and rest logistics in an episodic campaign.                                                                               | Play      | Blocker  | **C** — changes travel, recovery, and where the party can safely operate. Table: **C**                                               |
| `crafters_codex`             | Fix     | Patch makes a broken arcanum work again, but the exception only excludes damage caused by an arcanum’s Escalation; it does not define whether Patch restores depleted resources or reverses other permanent item states.                     | Rules     | Major    | **VR** — item repair on demand and doubled sale prices, with a downtime economy. Table: **VR**                                       |

**Rating caveat:** the “nearest baseline” is necessarily approximate where the core rules offer no direct equivalent. The biggest rating shifts at this table are not simply “the GM is lenient.” A lenient GM makes lasting consequences less credible, which can turn resource costs and escalating threats into paper barriers. That particularly affects items whose power is balanced by a Wound, a faction response, or a permanent consequence.

## B. Findings

### 1. Rules accuracy

These are the issues most likely to cause table disputes. I’m using the supplied condensed rules rather than assuming a mechanic works because it sounds familiar.

#### Survival, Dying, and Wounds

**`class_berserker` — Death’s Door**

> “For this encounter, your Rage does not end when you drop to 0 HP. Your Fury Dice stay, and Enduring Rage still applies once you have it.”

The reference says a hero at 0 HP gains a Wound and is Dying; Dying limits the hero to one action, makes attacks risky, and causes additional Wounds from damage. The new wording preserves Rage but does not override those restrictions. That may be intentional, but it needs to say whether the Berserker remains Dying, whether Enduring Rage changes any Dying rules, and what happens if the hero reaches six Wounds.

The escalation says the Rage still holds after the bone cracks, but does not explain what happens if the hero dies before the encounter ends. **Suggested fix:** State explicitly that Death’s Door preserves Rage only, not life or freedom from Dying, unless the item is meant to override those rules.

**`class_shepherd` — Ring Out**

> “On its next turn it acts as if it were not Dying: no 1-action limit, and no STR save to attack. It is still Dying, and still takes Wounds from damage.”

This explicitly overrides two Dying restrictions, which is clear as far as it goes. The unresolved edge is whether the target can be healed or stabilized before its next turn, and whether taking damage before then adds the normal two Wounds while it is still Dying. Those interactions matter because the item is intended to rescue a character during a lethal fight.

**`class_zephyr` — Strain**

> “If you use either annotation while you have 3 or more Wounds, from any source, the wrappings tighten around your hands: take 1 additional Wound…”

The card correctly recognizes that five Wounds is already the point at which a hero falls Dying, rather than allowing the sixth Wound to be treated as an ordinary cost. But the sequence remains ambiguous: does the annotation resolve and then the extra Wound apply, or does the escalation cancel the annotation? This matters when the character is at five Wounds and attempts to use it.

**`rusted_spear` — Spare and the last Rust**

> “At 0 Rust the blade is clean and bright. The next creature it hits takes a wound that never closes…”

The card distinguishes heroes, ordinary creatures, and Legendary monsters, but its consequences are not equivalent. A hero suffers an unhealable Wound and permanently loses one maximum Wound; a creature bleeds out; a Legendary or Solo monster loses a third of its maximum HP. That is not just a dangerous resource cost: it can impose a permanent character penalty or remove a large portion of a major enemy’s health. The hero consequence is especially severe under a ruleset where six Wounds means death.

The wording also says “the next creature it hits,” which appears to include a harmless target or an ally. If that is intentional, it creates a grim but potentially abusable way to choose who suffers the effect. **Suggested fix:** Make the target and consequence explicit, and avoid permanent character damage as an automatic by-product of using the final resource.

#### Action economy and attack resolution

**`class_cheat` — Fix**

> “Roll your Primary Die twice and take whichever result you prefer.”

The rules define the Primary Die as the main damage die, the leftmost die in an attack expression. That makes the phrase plausible for attacks, but the power says “before you roll” rather than “before you make an attack.” If it applies to skill checks, saves, or other rolls, the terminology does not fit. If it applies to an attack, the card should say whether it rerolls only the Primary Die or rolls the entire attack expression twice.

The escalation triggers on the next Vicious Opportunist use after depletion, but the supplied rules say Vicious Opportunist is limited to once per turn. The item does not state whether its failed use consumes that limit; that should be explicit.

**`class_commander` — Plant it**

> “While it stands, allies within 4 spaces who can see it have advantage on their first attack each round.”

The effect is straightforward, but “first attack each round” requires a reset point. The cleanest interpretation is once per ally per round, on that ally’s first attack, but it should not depend on the GM remembering when each ally last attacked. Authority is explicitly encounter-bound, so the resource-clearing rule is sound.

**`class_mage` — Overcharge**

> “Roll 1d6 each time you cast a tiered spell while wearing the lens. The spell takes effect either way.”

This is a useful timing statement: the spell resolves before the lens fails. The missing piece is whether the safe-roll benefit is chosen before or after the roll, and whether Overcharge is added before checking the threshold on subsequent casts. The intended order appears to be: roll against current Overcharge, resolve the spell, then on a safe result add one Overcharge and use the appropriate power; on a triggering result, resolve the spell and then apply the failure.

There is a second ambiguity:

> “On a safe roll, add 1 Overcharge and use the one safe-roll power that fits you…”

This appears to allow only one benefit per safe roll, which is good. The wording should nevertheless make the sequence and limit unmistakable, especially because Controlled Upcast and Chaos Bloom can change the value of a spell considerably.

**`class_oathsworn` — Held Judgment**

> “Held dice stay on the scales past the end of the encounter. The toggle clears when you Release the dice on an attack, or when you bring the scales to the Temple of the Three Sisters to be cleared…”

This makes the item’s cost meaningful, but it leaves the Oathsworn’s core resource unavailable indefinitely if the player chooses not to release the dice. It also leaves unclear whether the player can hold dice across multiple encounters and then release them all at once. The reference says Judgment Dice are rolled on specific triggers, so the card should define exactly which dice are held, how many can accumulate, and whether a release can exceed the normal spend.

**`class_shadowmancer` — Patron’s Margin**

> “Spend a use of Pilfered Power to cast a spell from your schools one tier above your current maximum.”

The supplied rules say a Reaver has no patron and cannot exceed Pilfered Power; this card correctly provides a separate Reaver’s Margin. The phrase “patron path or before level 3” is still ambiguous: it seems to let a Reaver use Patron’s Margin before level 3, despite the Reaver path being defined as patronless. If that is not the intent, the eligibility clause should distinguish subclass path from character level.

There is also no definition of what happens if Debt rises above four. The card says excess Debt is lost, but its escalation triggers at “4 or more.” That works if escalation happens immediately when a power pushes the tracker to four, but the sequence should say so.

**`class_hunter` — Marks**

> “Roll 1d6 each time you use a cord ability (Mark a Quarry or Cord Pull), before any new Mark is added. If you roll equal to or below your current Mark count, something near the quarry noticed you.”

The order of operations is clear, but the consequence is not. When marking a new quarry, “the quarry” may refer to the new target or an existing one. When using Cord Pull, the marked quarry is clear; on a new Mark, the card should specify which quarry can notice the hunter. Also, if a quarry is confronted and its Mark clears, does the resulting token become immediately reusable? The resource text implies yes.

**`class_songweaver` — Crowd**

> “Each time you Call the Song in combat, roll 1d6 against your current Crowd, then add 1 Crowd.”

This is a proper accumulation mechanic. The issue is that Protective Verse is both a Call and a separate once-per-encounter power, and it explicitly rolls against Crowd before adding one. That means using it at Crowd 3 can trigger the escalation to Crowd 4 and lock out future Calls. This is coherent, but the card should clarify whether a failed Crowd roll has any immediate effect beyond recognition and social disadvantage; the current wording implies it does.

**`class_stormshifter` — Extend the Beastshift**

> “Until the end of this encounter, casting spells does not end your Beastshift.”

The effect is comprehensible, but the item should specify whether this overrides only the spell-ending clause or also any other normal Beastshift ending condition. The card does say it still ends at 0 HP or when the player ends it, which is helpful. The encounter boundary should be treated consistently if the gig’s scenes flow directly into one another without a clear break.

**`apology_blade` — Gust**

> “A wind throws every creature in a Line 6 from you, in a direction you choose, back 3 spaces…”

The reference defines Line X as a straight line and Knockback X as movement by X spaces. The card still needs to define the line’s direction and origin, whether the target is moved away from the wielder or in a chosen direction, and what happens if the target hits an obstacle. Because allies are affected too, this is a tactical power with real positioning consequences; it needs a map-ready procedure.

**`derelict_harpoon` — Haul**

> “On a hit, choose one: pull yourself to the target, or pull a Medium or smaller target up to 6 spaces toward you. A pulled creature falls Prone and can make a STR save, DC 13, to resist.”

The save’s scope is unclear. If the target succeeds, is it not pulled and not Prone, or does it resist only the pull while still falling Prone? Also, “pull yourself to the target” needs to specify whether this movement is blocked by intervening terrain or creatures. The tether and Restrained escalation make those details matter.

**`tally_stick` — Call a Truce**

> “On a failure the attack does not happen. Either way, the Truce ends.”

A failed save clearly prevents the attack, but it is unclear whether the attacker spends the action, can choose another action, or can attack a different target. Since the Truce ends after the first attempt, the timing is important: the power could otherwise become either a very strong action denial or merely a way to redirect an attack.

**`gate_chain` — Hold the Line**

> “When you Interpose: You also Defend against that attack without spending an action for it.”

The reference defines Defend as a Reaction. The card appears to grant the Defend effect for free alongside Interpose, but it should state whether the normal Defend Reaction is waived, whether the same attack is reduced by both Interpose and Defense, and whether the effect can be used once per round under the normal Reaction limit. This is a meaningful defensive bonus, not a reason to remove the item.

#### Armor, equipment, and item states

**`tide_coat` — Growth**

> “Leather armor, Defense 3+DEX, plus 1 per Growth. Each Growth also gives -1 to Stealth.”

A correction to the table above: **Growth is capped at 4**, so the armor is not mechanically unbounded. Its maximum is Defense 7+DEX, with a −4 Stealth penalty, assuming all four Growth are retained. That is still unusually high for a wearable armor bonus, especially when the penalty is irrelevant in many encounters. The main issue is not an infinite ceiling; it is whether the growth-scaled Defense is intended to exceed the usual armor benchmarks without a STR requirement.

**`pitch_sap_harness` — Burden**

> “Burden (pip tracker, max 3)… When a fourth weapon would stick, the sap seals you in…”

This can work as an overflow consequence: the tracker never records four, but the event that would exceed three triggers the escalation. The text should say that the fourth successful stick triggers the effect without increasing Burden, and whether the stuck weapon remains stuck after the harness seals the wearer in. The armor itself is otherwise clear.

**`hellhide` — magic-drinking risk**

> “No spell can affect you, including your own and your allies’ healing, while you wear it, and each spell cast on you gives the hide 1 Thirst.”

The risk is severe, but it is not self-contradictory: the hide can prevent spell effects while still tracking that a spell was cast. The ambiguity is whether “each spell cast on you” includes spells that cannot affect you, and whether Thirst from that source is subject to the max-3 cap and the same escalation as Command. The persistent Wound “that cannot heal while you wear it” is also much more punishing than a normal temporary penalty, because the armor cannot be willingly removed.

**`kettle_plate` — Boiler Fire**

> “Boiler Fire (spend 1 Steam): Choose one. Wrist crossbow (Free, 1/turn)… Hidden blade (Action)… Boiler surge (Free)…”

This mixes a free attack, an action attack, and a free check bonus under a shared resource cost. It needs a common activation procedure: does choosing the crossbow use the Steam and then permit a free attack, or is the attack itself the power’s action? Can Boiler Surge be used outside the wearer’s turn? Can the crossbow attack be made in addition to other free attacks? These are not cosmetic questions when the item also grants Defense 18.

**`binding_linens` — Hold Back**

> “It stays at 0 HP but is no longer Dying: it takes no Wounds from damage, and it cannot act.”

This creates a suspended state that is not part of the supplied conditions. It is potentially a useful rescue mechanic, but needs rules for healing, damage, unwrapping, and death. If the creature is healed while wrapped, does it remain unable to act until unwrapped? If the linens are never removed, does the target stay suspended indefinitely after dawn, or is it automatically unwrapped? The card says it is Dying again at dawn, but does not define what happens to a creature who is no longer at 0 HP by then.

**`sown_teeth` and `bear_lodge_horn` — minion duration**

> “An armored warrior rises from the ground beside you and obeys you for an hour.”

> “Three spirit bears rise within 6 spaces and fight as minions… until the encounter ends.”

The two cards use minions differently. Sown Teeth gives an hour of existence, which suggests the warriors can persist outside combat; the Horn’s bears last only for the encounter. The supplied reference says shadow minions are combat-only and not tracked on the character sheet, but these are physical/spirit summons, not shadow minions. That means the reference does not directly forbid their duration; the cards still need to define what they do outside combat and how long their effects last if a fight begins late in the hour.

**`crafters_codex` — Patch**

> “A broken weapon, shield, armor or arcanum object you touch works again until the encounter ends, or for an hour outside one. Patch cannot mend what an arcanum’s Escalation broke.”

This is a useful emergency repair effect, but “broken” is not a sufficiently precise item state. The exception suggests Patch cannot undo an Escalation, but it does not say whether it can restore a depleted item, repair an ordinary broken item, reverse a jammed state, or temporarily restore a passive power. Define what qualifies as broken and whether the effect restores function only, not spent resources.

#### Resource clearing and timing

**`class_berserker` — Fury Echo**

> “Echo never clears at a rest or when combat ends. Spent Echo returns only by telling it again to a new listener.”

This is unambiguous. The concern is practical rather than mechanical: the player must find a new listener and deliver a ten-minute account for every Echo spent. That is a valid fictional refill, but the campaign should not assume every session gives the player an opportunity to refill it.

**`class_shepherd` — Resonance**

> “Gain 1 Resonance by ringing the bell for an hour over a sickbed or a grave… and staying with whoever it is for until the hour ends.”

The condition is concrete and in-world, and it is not a passive refill. It does, however, demand an hour of downtime and a qualifying person or grave in one of two locations. In a one-gig-per-session format, that can be a substantial opportunity cost. It is not broken, but the GM should treat it as a resource that may remain depleted for multiple episodes.

**`class_stormshifter` — Earthpulse**

> “Spent Earthpulse returns only when you carry the jar back to the Revlend Marshes and leave it there overnight.”

This is a clear world-based refill and a strong link to the setting. It may be inconvenient for a character who has left the marsh region, but the card intentionally makes the resource a relationship with a place rather than a rest-based pool. The escalation table also makes each return a world-state event, which fits the campaign.

**`class_zephyr` — Study**

> “Study (downtime, 1 hour per Safe Rest): Spend an hour reading the annotations during rest.”

This is the only power on the card that is not an immediate combat benefit, but it is not filler: it supplies a true detail about the current adventure arc. The timing could be clearer. If a Safe Rest is not a full hour longer because the character studies during it, say whether the hour is part of the rest or additional downtime.

**`forgotten_key` — Hum**

> “Regain 1 when you carry the key, during a gig, to an arch you have not yet tried it on and an Archkeeper records what the arch did.”

This refill fits the campaign’s premise and prevents off-screen refilling. The issue is the word “tried”: does an arch count as tried if the key merely hums near it, if Open the Way fails, or only after an opening attempt? Define the event once so the GM can track it without inventing a new criterion mid-gig.

**`arch_watch_mirror` — Clarity**

> “Regain all after someone keeps a full night's vigil before the mirror without sleeping.”

This is clear and deliberately requires a world action. The problem is that the mirror’s power can cover multiple arches, but the refill is all-or-nothing and can be performed by “someone,” not necessarily the owner. That is not a rules flaw, but it means the cost may be negligible if the guild hall has a reliable volunteer. If the vigil is meant to be a personal cost, say who must keep it.

**`black_lotus_case` — Petals and Stain**

> “Each time the case empties, the Stain advances for good.”

The permanent escalation is clear. Because the bloom roots in the wielder’s palm after the third Stain, however, the last escalation also removes the possibility of losing or confiscating the petals. That is a significant reward as well as a consequence. This is not an exploit by itself, but it means the third emptying should feel like a permanent transformation, not simply another refill cycle.

**`valkyries_feather` — Tally**

> “Tally has no maximum, so at 6 or more every Spared calls her.”

This is mechanically clear. The item becomes increasingly dangerous in a predictable way and eventually guarantees the valkyrie’s arrival. Because the GM is lenient about player death, the risk may feel more like a recurring NPC encounter than a threat to the character’s survival. That may be the desired result; it should not be mistaken for a meaningful deterrent if the GM routinely lets the spared life survive the encounter.

**`derelict_harpoon` — Slack**

> “If you roll equal to or below your Slack before adding, the line snarls…”

This is a clear accumulation rule. With no maximum, a Slack count of six or more means every future Haul triggers the consequence until the line is spliced. That is fine for a risk engine, but it means the player may effectively lose access to Haul after repeated use. The card should say whether Slack can be reduced or reset by anything other than splicing the line into a derelict hull.

**`rune_fragment` — Runes**

> “A dark rune relights when you carve it into a gravestone or a standing stone and speak aloud the name of someone who died for something.”

This is a good world-action refill, but it allows a rune to be reused repeatedly so long as the character can find a suitable stone and a qualifying name. The card does not specify whether the same death-name can be used repeatedly. If not, the refill needs a one-use-per-name rule; if yes, the cost is primarily time and fiction, not a finite resource.

**`oath_band` — Oath**

> “One oath at a time, and a new one only after the last has cleared.”

This is clear, but the item’s escalation leaves the Band shut until penance after a failed oath. It does not say whether the failed oath has technically cleared, so the player cannot know whether they may swear a new oath after penance or must fulfil the old one. The narrative intent is sound; the state transition needs one sentence.

### 2. Design checklist and generated-content patterns

These are design judgments, not necessarily rules errors. The brief explicitly allows very strong items and finite relics. I’m flagging cases where the chosen cost, trigger, or payoff produces a result different from the card’s apparent intent.

**Correction to the table:** `tide_coat` has a hard Growth cap of 4, so its Defense is capped at 7+DEX, not unbounded. For `seven_leaf_bracelet`, the final escalation *does* say what happens if the player fails to plant the bracelet: their fingertips start to leaf. Its remaining issue is mainly that the new bracelet can be grown beside a door to elsewhere, which is a potentially significant long-term world consequence.

#### Double-dipping and self-sustaining resources

**`class_berserker` — Fury Echo**

> “Gain 1 Fury Echo each time you tell a listener who has not heard it how the ancestor fought and fell, in full, over at least ten minutes.”

This avoids refilling from Rage itself, which is good. The risk is that the player can repeatedly tell the same story to successive listeners in a hub and refill without meaningfully engaging a new problem. The new-listener requirement prevents literal repetition against one person, but it does not guarantee the retelling changes the fiction. The more interesting cost is whether the story spreads and affects the ancestor’s reputation or attracts what hunted them.

**`class_commander` — Authority**

> “Gain 1 Authority whenever an ally within 4 spaces of the planted standard deals damage in a single attack equal to or greater than your level…”

This is not a kill trigger, so it avoids kill-stealing incentives. But the resource refills through the same combat behavior the standard rewards, and its spend extends the aura that helps generate more Authority. That is a combat feedback loop, not a self-sustaining campaign loop, and is acceptable under the GM’s stated preference for strong fights.

**`class_mage` — Overcharge**

> “On a safe roll, add 1 Overcharge and use the one safe-roll power that fits you…”

The item has a strong built-in risk curve: each safe use makes later uses more dangerous, and the lens cannot be reset by a rest. That is a better cost structure than a simple charge pool. The weakness is the win-win concern: both subclasses get a benefit on safe rolls, while a failed roll produces a different class-specific drawback. Whether that is a true downside depends on the Control Table and Chaos Table; the supplied card alone does not prove that the failure is worse than the benefit. The Wound and delayed faction response help make it costly.

**`class_shadowmancer` — Debt**

> “Debt above 4 is lost.”

This is an unusual but workable rule. It means a power that takes Debt from 3 to 5 triggers collection and loses the excess, rather than preserving a debt overflow. That should be resolved immediately and consistently. The bigger issue is whether Patron’s Margin is intended to be a one-time break of the spell tier cap or a repeatable ability every encounter; with a max-4 Debt track and patron collection at four, it can be used often enough to matter.

**`class_songweaver` — Crowd**

> “The first safe roll each encounter returns 1 spent use of Songweaver’s Inspiration.”

This is a notable resource refund attached to the class’s signature Call. It is not infinite, because Crowd rises and eventually locks the power, but it does reward repeated use of the class’s normal combat behavior. That is precisely the kind of double-dipping the design guide asks the author to inspect. It may be acceptable because the risk is cumulative and the payoff is limited to one refund per encounter, but it is not a neutral accessory.

**`drowning_scale` — Breath**

> “When a creature within Reach 2 drops to 0 HP, other than one you created or summoned, you draw its last breath and gain 1 Breath.”

The card intentionally includes allies. That means it can reward a party for letting an ally fall to 0 HP, or for timing an allied knockout to generate Breath. The exclusion for summoned creatures blocks one obvious minion loop, but does not block a deliberate allied knockdown. Since this trigger is explicitly retained by the GM, I would not remove it automatically; I would treat it as a deliberate moral and tactical hazard, and ensure the party understands that the scale can turn a rescue situation into a resource opportunity.

**`valkyries_feather` — Spared**

> “You or an ally within 6 spaces stays at 1 HP instead of dropping to 0. It takes no Wound and is not Dying.”

This is a strong prevention effect. The Tally makes every use increasingly risky and eventually guarantees the valkyrie’s arrival, so the resource is not free. But the trigger is most useful at the moment of greatest danger, and the consequence is delayed. With a lenient GM, the valkyrie’s claim may become a negotiable scene rather than a serious price. That does not make the item weak; it means its cost relies on the GM actually following through.

**`black_lotus_case` — Stain**

> “Each time the case empties, the Stain advances for good.”

This is a strong example of a cost that remains after the resource is replenished. The three Stain stages contain real trade-offs, and the third stage permanently changes how the bloom is carried. The main concern is that Stage 1 grants advantage on Finesse, which could outweigh the loss of tactile sensation in many situations. The Stain is not consistently a penalty; it is a character transformation with a mixed benefit-cost profile.

**`tide_coat` — Growth**

> “Each Growth also gives -1 to Stealth. Without leather armor proficiency, Defend costs 1 extra action, as normal.”

The penalty is meaningful in a stealth-focused episode but nearly irrelevant in an open fight. At maximum Growth, the coat offers Defense 7+DEX with a −4 Stealth penalty; that can be a good trade for a character who rarely sneaks. It is also a strong example of an item whose upkeep competes with the campaign format: every hour spent underwater costs a scene, and Growth decays if the character skips underwater activity for an episode. That creates an ongoing obligation to seek submerged locations, which can be useful if it drives play rather than becoming mandatory maintenance.

**`pitch_sap_harness` — Snare**

> “When a melee weapon hits you, the attacker makes a STR save, DC 13, or the weapon sticks.”

The risk does not trigger from a kill, and the burden cost is a real tactical choice. But because the attacker must let go of the weapon or remain adjacent, the harness can be much more effective against weapon users than against creatures using natural attacks. The explicit natural-weapon exception is useful. The fourth-hit escalation is also dramatic, though it can be triggered by a sequence of attacks from weak enemies as easily as by a major foe.

**`hellhide` — Thirst**

> “Thirst clears only when you offer blood to the hide outside combat, from a willing person outside your party.”

This is a world-action refill, but the item’s power costs are not fully aligned. Command adds Thirst, yet the armor’s most dangerous state is reached by ending a day at three Thirst. If the character uses Command only once per encounter, the player may reach the threshold through a handful of episodes, then suffer an unhealable Wound while wearing the armor. The price of obtaining blood from a willing non-party member is a good fiction hook; it becomes a problem if the GM treats that person as an endlessly available resource.

**`kettle_plate` — Steam**

> “Regain all by stoking the boilers with a load of forge coal drawn from Vathrex’s Forge…”

This has a clear world-based refill, and the inventory slot makes the fuel a concrete cost. The drawback at 0 Steam is also meaningful. The problem is that the plate’s free crossbow attack and Defense 18 are passive benefits even when the Steam pool is empty; the item therefore never becomes inert. That may be deliberate, but the escalation is a movement and DEX penalty, not a shutdown of its most valuable feature. In practice, the resource mostly governs its extra attacks and utility modes, not the armor’s core value.

**`unpaid_favor` — Tithe**

> “Name one small, specific impossibility, and the GM approves it before you take the Tithe.”

The approval step is important, but the effect’s power varies enormously with the GM’s interpretation of “small.” Opening a door may bypass an obstacle; making a lie believed may alter a social encounter; removing a creature’s next action may swing a fight. These are different power classes. The card needs either a bounded list of effect types or a consistent ceiling. As written, the player’s best strategy is to negotiate for the strongest effect the GM will permit each time.

**`hexing_needles` — Thread**

> “They have disadvantage on one kind of roll you name until the cloth is unpicked or burned.”

This is deliberately broad and is stated as a retained design choice, so the absence of a save is not itself an accidental rules error. The unresolved issue is scope: can the victim be penalized on all attacks, all saves, all checks, or every roll involving a broad ability? The fact that the victim feels each stitch makes the effect narratively visible, but does not constrain its mechanical reach. It is also an out-of-combat effect with no duration limit, which can let the player prepare a major enemy before the fight begins.

#### Unlocks, refill friction, and episodic play

**`class_hunter` — unlock**

> “Track a single creature across at least two sessions without losing the trail…”

This is a strong class-specific unlock, but it conflicts with the campaign’s one-gig-per-session format unless the GM deliberately keeps the quarry alive across episodes. The absent-player rule lets progress tick, but it does not solve the underlying problem that a two-session pursuit can compete with the next gig. It is a better fit if the quarry can appear as a recurring thread without making the entire session about tracking it.

**`class_zephyr` — unlock**

> “Then take a hit in combat that you could have Defended but deliberately chose not to, in order to observe how the attack was made.”

This is a compelling deed because the player chooses to accept a hit for information. The risk clause, however, says a hit that drops the hero to 0 HP does not count, forcing them to repeat the ordeal. That creates a strange incentive to take a dangerous hit but not a lethal one, which the player may not be able to judge accurately. The card should make clear that the player can choose a safer attack or that the hit need not be a major blow.

**`class_shepherd` — Resonance**

> “Ring the bell for an hour over a sickbed or a grave…”

The refill is specific and fictionally meaningful, but it asks the player to find a suitable sickbed or grave at a particular location and stay there for an hour. It can create an excellent scene of care and mourning; it can also be dead text during a fast-moving gig. Because the resource does not clear on a rest, a Shepherd who cannot make time for this ritual can be locked out of the bell’s strongest effects for several sessions.

**`class_songweaver` — refill**

> “Crowd clears when you play a full uninterrupted hour for a new audience of 20 or more.”

This is a coherent fictional refill, but it asks for a large audience and an uninterrupted performance. The item is strongest in combat and its recharge is a staged performance scene, so the player is encouraged to seek out venues between gigs. That is appropriate if the Theater of Whispers is meant to be a recurring hub. It becomes friction if the GM treats a full hour of performance as mandatory bookkeeping before the character can use their class arcanum again.

**`fairy_jar` — unlock and refill**

> “Learn the fairy’s name, which it will not tell you; the fey beyond the Arch of Flowers in Briarheart Forest know it.”

> “It asks one each time it runs dry, and the answer is never found on the way to a gig.”

The unlock is a deliberately blocked path: the fairy will not tell its own name, so the player must find a separate source. That can be a good quest, but it needs a discovery path or it risks becoming a dead end. The refill is worse for this campaign: the card explicitly states that the answer is never found on the way to a gig. That is not merely inconvenient; it guarantees that the resource competes with the campaign’s episodic structure. **Suggested fix:** Let a gig reveal a clue to the fairy’s home, or allow the answer to be discovered as part of an ordinary arch trip.

**`forgotten_key` — route politics**

> “A natural 20 lets you sense the destination first.”

The key’s uncontrolled destination is an effective limit, but the setting’s rule says whoever holds a key decides where an arch opens. The card needs to establish that this key is a special exception, or specify that the user controls the arch only if the Lore check succeeds. Otherwise it contradicts one of the campaign’s central rules about route politics. Its refill is otherwise well suited to play: an Archkeeper records what happened at a previously untried arch, which gives the GM a concrete episode-facing action.

**`hen_legs_hut` — Hunger and Home**

> “The hut is a holding wherever it stands: a Safe Rest place for you and up to five guests.”

> “The hut carries everyone inside at a run: a day’s overland travel in an hour.”

The hut solves two major campaign logistics problems at once: safe recovery and travel time. This is not just a powerful item in a fight; it changes how the party chooses gigs, whether it risks the wilderness, and how much time pressure matters. Because Major cards intentionally appear in the level-1 draw, that may be the intended kind of cataclysmic discovery. But the hut’s value is not fully controlled by Hunger: it remains a Safe Rest place while empty of Hunger, and the day-travel power costs only one pip. The card should decide whether the hut can provide Safe Rest while walking, whether it can move through dangerous terrain without consequence, and whether its occupants can be interrupted.

**`arch_watch_mirror` — Watch and Foresee**

> “Before you go through, ask the GM one question about where the arch leads.”

The power is a useful investigation tool, but it can answer the central question of a gig if the adventure’s uncertainty is about the destination or what lies beyond it. Since the GM’s generator may use an arch or key as the twist, this card can erase that twist before the party enters. The once-per-episode limit on Foresee helps, but the question should be framed as a clue rather than a complete answer if the campaign depends on the destination remaining uncertain.

**`provenance_ledger` — Name the Owner**

> “The ledger writes its maker, its last three owners, and its rightful owner, if it has one.”

This is a potent investigative shortcut. It can bypass the ordinary process of interviewing collectors, tracing a stolen relic, or discovering who has a claim to it. That is not automatically bad; the item is about provenance. The problem is that its output is guaranteed and specific, so it can resolve a whole investigative thread with one action. The six-step Black Hand clock is a suitable cost, but the card should not let the GM’s central question disappear without a consequential choice.

**`seven_leaf_bracelet` — Listen**

> “Plants tell you who passed and may move aside or tangle.”

The first effect is information, the second is utility, and the third is control. “Who passed” needs a limit on how far back the plants remember and how precise their answers are; otherwise the power can reconstruct a whole route from a single plant. The item has only seven uses, so the issue is not that it is infinite, but that its information scope is not defined.

**`crafters_codex` — Consult**

> “On a success, your next Craft downtime takes half the time and half the materials.”

This is a clear benefit, but the card does not define whether “half” rounds down or up, or whether the reduction can lower a Craft activity below its minimum duration. That is a minor procedural issue. More importantly, the payoff depends on there being a Craft downtime activity in the campaign. It is a good fit if the group routinely makes equipment or commissions objects; otherwise it is a utility power that may rarely see play.

#### Social override, escalation, and GM workload

**`class_cheat` — Loaded Odds**

> “Once per session, you may ask the GM whether a creature you can see is bluffing. The die rolls and the GM answers truthfully, but only yes or no.”

This is one-directional information: the target does not know that the Cheat learned the answer, so it avoids the automatic social-override problem in the design checklist. Its yes/no format also leaves room for interpretation—whether the creature is bluffing about something in particular or is generally deceptive—but it does not force the GM to reveal a motive or expose a lie to everyone.

**`class_oathsworn` — Hold Judgment**

> “While the scales hold dice, you see the remaining pan tilt when a creature within 6 spaces lies to you, visible only to you.”

This is also one-directional detection. It tells the Oathsworn that a lie has occurred, but does not announce that fact to the liar or automatically force them to confess. The cost is the unavailable Judgment Dice, which is meaningful. The main risk is that the passive can make social scenes too easy if the player can keep the scales loaded through an entire session without paying any further cost.

**`class_shadowmancer` — Read the Contract**

> “You see one true fact about a creature you can see: its most urgent want, its deepest fear, or the name of someone it has wronged.”

The power gives one true fact, but the GM must decide which fact is available and what counts as “most urgent” or “deepest.” This is not an automatic social override, because the item does not make the creature admit anything or know the fact has been discovered. The risk is that the GM is asked to invent intimate information about any visible creature on demand. That is a heavier prep demand than the card’s wording suggests, especially for a prep-light game.

**`class_commander` — escalation**

> “The GM reads what it says aloud. It goes dark again immediately. What it says is the GM’s tool: a name, a title, a command.”

This is an effective escalation because it supplies a prompt rather than a fixed punishment. The danger is that the table has to treat the result as meaningful without knowing what the inscription means. The d6 table helps, but results like “your own name” or “the next Final Rest of the Nameless King” require the GM to connect the reveal to an existing thread. That is a good invitation, but only if the GM can tie it to one of the six active threads rather than inventing a new subplot.

**`class_shadowmancer` — permanent sentence**

> “The GM decides what it says and reads it aloud.”

This escalation is a strong example of the deck’s intended style: a permanent consequence with a concrete fictional object. It also has a high GM burden. A sentence such as “They will refuse help once, when it matters most” needs a fair trigger; “They owe me the name of someone they love” needs a procedure for collection. The table gives inspiration, but not an adjudication standard. The risk is not that the GM has to invent a consequence, but that the consequence is permanent while its actual trigger is undefined.

**`class_songweaver` — escalation**

> “The GM decides who and what they want.”

The table gives six possible people who might recognize the setlist. That is enough to start a scene, but it does not specify how recognition changes the active thread board. The best outcomes are the apprentice, creditor, thief, or missing Songweaver because they imply an immediate question or demand. The weakest is a fan who simply wants the performance finished unless that desire becomes a concrete conflict.

**`class_hunter` — escalating quarry**

> “The GM introduces this threat within 1 to 2 sessions.”

This is appropriate as an escalation, but the threat is generated in a very broad proportional way: a rat sends a rat; a warlord sends soldiers. The GM must still decide how the threat appears, what it wants, and how it connects to the gig. It is a useful prompt, but not a complete consequence.

**`hexing_needles` — victims know the stitcher**

> “Every victim knows the shape of your hands, and the Sisters of Dusk hear who is stitching in their style.”

This creates consequences for using the power, but it is unclear whether victims know the wielder’s identity, merely recognize their hands, or can identify them in a disguise. The faction response is also broad: the Sisters “hear who is stitching” without a trigger or timeframe. This can work as a threat clock, but the current wording delegates all the actual consequences to the GM.

**`arch_watch_mirror` — reciprocal sight**

> “Anything beyond a watched arch can look into your holding until the mirror is refilled.”

This is a strong escalation because the tool that gives the party information also exposes their base. But “look into your holding” is not a stable game effect. Can the other side see the room around the mirror, hear conversations, see the whole holding, or communicate through the glass? It also does not say whether the effect stops if the mirror is covered or moved. This is a rules problem because it governs information and security, not merely narrative flavor.

**`black_goat's tally-stick` — Truce**

> “Once off, it cannot be turned on again until you have brokered a meeting between two enemies who would not otherwise have met, and settled the tab for it at the Black Goat’s Tavern.”

This is a good world-action refill: the player must create a new peace rather than simply rest. But the conditions are subjective. What counts as “would not otherwise have met,” and what counts as a settled tab? The card could be used to broker a harmless meeting between two people who already have a reason to cooperate, then claim the resource is back. The GM should judge whether the act actually satisfies the fiction, but the card would benefit from a more concrete standard.

**`bear_lodge_horn` — Lodge-Kin and ownership**

> “If the horn leaves your hands without the lodge’s leave, the bears hunt whoever carries it: each dawn, 1d4 bears find the carrier.”

The escalation is specific enough to generate pressure. However, “the bears” could mean ordinary bears, spirit bears summoned by the horn, or the lodge’s hunters. That ambiguity matters because the power itself creates spirit bears, while the escalation seems to describe a larger outside force. The horn’s ownership condition is also strong: it can turn a theft into a daily pursuit. This is good narrative pressure, provided the GM does not treat the 1d4 bears as a fresh combat encounter every dawn regardless of the current episode.

**`sown_teeth` — command binding**

> “The first warrior asks whom it must guard. Your answer binds every warrior after it, and the GM holds you to the letter.”

This is an evocative risk, but it creates an ongoing obligation whose scope is decided by the GM. If the answer is “the guild,” does the warrior protect all guild members, the building, or the current leadership? If the answer is “my family,” who counts as family? Since the player’s answer binds all future warriors, the first answer should be treated as a deliberate character decision and recorded on the card or thread board. Otherwise it becomes a memory burden.

**`hen_legs_hut` — escalation**

> “If no one sleeps in the hut for a whole episode, it walks off toward the nearest arch, and you must find it again.”

This is a useful way to keep the hut from becoming a permanent, effortless base. But “whole episode” is tracked by the campaign, whereas “nearest arch” may be a location the GM has not prepared. Since the hut can be a Safe Rest place, losing it may abruptly remove the party’s recovery option. That is an acceptable consequence if it is telegraphed and the hut’s departure creates a thread rather than merely punishing the party for missing a session.

### 3. Power and rarity

The ratings in the card table reflect the effects as written. The campaign’s deliberate level-1 draw of Major items is an explicit design choice, so I have not marked a card down merely because a level-1 hero can find it. I have marked cards where the effect is likely to erase a meaningful decision or where the stated cost does not actually constrain the strongest benefit.

The clearest **campaign-shaping** items are:

* **`forgotten_key`** — route access is power in this setting. Even with unreliable destinations, the key changes which worlds the party can reach and who controls that access.
* **`hourglass_of_borrowed_time`** — rerolling any die, including a die from an opponent’s roll, can change the result of the event that defines a gig. This is not merely a powerful combat item.
* **`hen_legs_hut`** — Safe Rest plus rapid overland travel removes two of the campaign’s main constraints. Hunger limits its movement ability, but does not remove the Safe Rest benefit.
* **`tide_coat`** — the Defense ceiling is 7+DEX, so it is not limitless. Even so, it can outperform normal armor benchmarks in exchange for a Stealth penalty that may not matter in a given encounter.

The strongest **Legendary** items are not all strong for the same reason:

* **`rusted_spear`** has a potentially catastrophic consequence at zero Rust, including a permanent reduction to a hero’s maximum Wounds. Its high rating reflects the severity and encounter impact of the effect, not an endorsement of the design.
* **`hexing_needles`** can impose disadvantage on an open-ended category of rolls without a save and without a fixed duration. Its power depends on how broadly the GM interprets the category, so its rating is partly a measure of adjudication risk.
* **`drowning_scale`** can generate Breath from a frequent combat state and turn that into strong control. Because the trigger includes allies, its resource economy can also create perverse incentives.
* **`axe_of_nine_eyes`** can Daze a named target every encounter, subject to a save, while providing tracking and advantage on skill checks against it. Nine finite uses make this less persistent than the other Legendary items.
* **`black_lotus_case`** gives free teleportation every round for an encounter, plus other major movement effects. Its permanent Stain is a genuine cost, but also provides benefits.
* **`class_mage`** combines a free upcast or Chaos advantage with passive detection of auras and invisible creatures. The escalating risk is substantial, but the passive utility remains.
* **`class_shadowmancer`** can exceed the normal spell-tier ceiling, which is a more direct break of the progression model than an ordinary numerical bonus.
* **`hellhide`** has unusually strong armor, a penalty aura, and control over demons or undead. Its inability to be willingly removed means its consequence can become a permanent character problem.

The other **Very Rare** items are generally strong because they add tactical options, ally support, information, or extra actors. In a campaign that explicitly wants high-powered arcana, those effects are not inherently problems. The main tests are whether their rules can be applied quickly and whether their costs create meaningful decisions.

The **Rare** items are less powerful in direct combat, but they can still be structurally important. `fairy_jar` is the clearest case: its issue is not raw strength but an unlock and refill loop that can leave the item dormant. `seven_leaf_bracelet` is a limited-use utility item whose power is easier to bound. Neither needs to be made stronger just to match the more explosive items.

**Effect of the lenient GM:** A consequence is only a real balancing cost if it changes what the player is willing to do. If the GM reliably softens permanent injury, lets pursuers be negotiated away, or treats faction clocks as background color, then the following items become substantially stronger in practice: `rusted_spear`, `hourglass_of_borrowed_time`, `valkyries_feather`, `hellhide`, `hexing_needles`, and `class_mage`. Conversely, a very strict GM could make `fairy_jar`, `class_shepherd`, and `class_zephyr` feel worse than their ratings imply because their refill or use conditions require specific scenes.

The practical conclusion is not to weaken the whole deck. It is to make the biggest effects **specific, legible, and consistently consequential**.

## C. Exploits and combinations

I distinguish a **fight-breaking** interaction, which the GM explicitly accepts, from an **episode-breaking** interaction, which erases the question, obstacle, or consequence that the gig was meant to explore. “Campaign-breaking” here means a structural problem with the campaign’s premise, not a claim that the game becomes unplayable.

### 1. Hourglass + the gig generator

**Cards:** `hourglass_of_borrowed_time` + any gig with a decisive roll.

> “One die, yours or anyone’s, from any roll, is rerolled. The new result stands.”

**Result:** Potentially episode-breaking.

The hourglass can reroll a key die after it has been rolled but before the result is applied. That could reverse a failed attempt to close an arch, change whether a target escapes, or undo the roll that makes a patron the actual threat. The problem is not that rerolls are too powerful; it is that the item has no boundary around what kind of uncertainty it may rewrite.

**Fix:** Define the eligible rolls and exclude rolls whose result has already generated further consequences. If the unrestricted rewrite is intentional, treat it as a campaign-shaping power and build its consequences into the gig generator.

### 2. Forgotten Key + Hut on Hen’s Legs

**Cards:** `forgotten_key` + `hen_legs_hut`

**Result:** Campaign-shaping; potentially episode-breaking.

The key provides access to dormant arches, while the hut offers Safe Rest and rapid overland travel. Together, they can remove the two most obvious constraints on expedition play: getting somewhere and finding somewhere safe to recover. The key’s destination uncertainty remains a constraint, but it is not necessarily enough to preserve the pressure of a journey.

The campaign’s route politics also become more complicated. If the party has a key that can open dormant arches and a mobile Safe Rest base, patrons may lose much of their leverage over access and travel.

**Fix:** Decide which constraints the hut and key are allowed to bypass. The hut need not be weakened across the board, but the campaign should have a clear rule for Safe Rest while travelling, dangerous terrain, and access through arches controlled by patrons.

### 3. Drowning Scale + Binding Linens

**Cards:** `drowning_scale` + `binding_linens`

**Result:** Fight-breaking; the resource loop is not automatic, but it encourages questionable tactics.

The Scale gains Breath when a creature within Reach 2 drops to 0 HP, including allies. Binding Linens can suspend a Dying creature at 0 HP, preventing it from taking further Wounds from damage until unwrapped or dawn.

That combination does not, by itself, produce infinite Breath: the Scale triggers when a creature drops to 0 HP, not every round it remains there. But the party can potentially use an allied knockout to generate Breath, then preserve the ally in a suspended state while continuing the fight. The interaction creates an incentive to treat an ally’s near-death as a resource opportunity.

Because the Scale’s ally trigger is deliberately retained, this is a consequence of that design choice rather than an accidental reading.

**Fix:** Make the table’s intent explicit: does the Scale reward the wielder for witnessing any creature’s fall, or is it meant to reward the taking of an enemy’s life? The current card supports the former, including deliberate allied knockouts.

### 4. Sown Teeth + Bear-Lodge Horn

**Cards:** `sown_teeth` + `bear_lodge_horn`

**Result:** Fight-breaking, with potential action-economy distortion.

Sown Teeth can create a finite number of warriors, while the Horn creates three spirit bears for two Call. Both sets of minions attack on the owner’s turn, and their attacks use scaling dice. This is a large increase in the number of attacks available to one character.

The finite resources prevent an infinite loop, and the items have different fictional costs. The risk is that the character’s turn becomes a second party’s turn, especially if the minions can be summoned before combat and remain active for an hour.

**Fix:** Specify whether the summons can exist outside combat and whether pre-summoned minions persist into the next encounter. If they can, the GM should account for the additional actors when building encounters rather than treating them as ordinary item bonuses.

### 5. Cracked Lens + Control Mage

**Cards:** `class_mage` + Control Mage subclass

**Result:** Fight-breaking, depending on the Control Table.

On a safe roll, Controlled Upcast provides a free Upcast. When the lens fails, the Control Mage “Lose[s] Control, doing every option on the Control Table, with the GM choosing each time.”

This is a deliberately volatile combination, but the downside cannot be evaluated from the card alone. If the Control Table’s effects can be harmful, the lens has a meaningful failure state; if the table’s options include useful outcomes or minor inconveniences, the failed roll may not adequately offset the free Upcast and the extra spell utility.

**Fix:** Make sure the Control Table has consequential outcomes, and state whether Overcharge is added before the next spell’s roll. Do not balance this card on the assumption that a Control failure is necessarily a penalty without checking the actual table.

### 6. Loaded Die + Vicious Opportunist

**Cards:** `class_cheat`

**Result:** Fight-breaking, acceptable.

The die gives a reroll-like benefit, and its escalation can make Vicious Opportunist do nothing on a 1–3 after depletion. Because Vicious Opportunist is limited to once per turn, the consequence can waste a valuable attack opportunity, but it does not appear to create extra uses or a self-sustaining loop.

The important point is whether the failed use consumes Vicious Opportunist’s once-per-turn allowance. If it does, the consequence is a real tactical risk. If it does not, the player can attempt the move again and the penalty becomes much weaker.

**Fix:** State whether the failed use consumes the normal Vicious Opportunist limit.

### 7. Broken Verdict + Oathsworn’s Lay on Hands

**Cards:** `class_oathsworn`

**Result:** Campaign friction rather than a fight exploit.

The scales can preserve Judgment Dice across encounters, but doing so through a full Safe Rest fuses them with the Lay on Hands pool and prevents spending from that pool until the Temple of the Three Sisters clears them. The interaction means the player can accidentally disable a major class resource while attempting to preserve another.

This is an interesting consequence if it is an informed choice. It is frustrating if the player is not told what the fusion means before taking a Safe Rest.

**Fix:** Make the Safe Rest consequence explicit at the point the player chooses to retain the dice. The Temple visit is a strong story hook, but it should be a known danger, not a surprise rules trap.

### 8. Hellhide + Oath-Band

**Cards:** `hellhide` + `oath_band`

**Result:** Fight-breaking in the wearer’s favor; potentially punishing in the long term.

Hellhide supplies heavy armor without the usual STR requirement and can weaken nearby enemies. Oath-Band adds advantage on checks that directly advance an oath, and its reaction can reroll a failed check or save. The combination makes a character who commits to an oath particularly resilient and effective at pursuing it.

That is not inherently a problem. The risk is that Hellhide’s inability to be willingly removed and its unhealable Wound at maximum Thirst can make the wearer’s future survival depend on the GM’s interpretation of the hide’s compulsion and the availability of willing donors.

**Fix:** Keep the combination powerful, but define how the hide’s compulsion behaves when the character tries to fulfill an oath that requires removing or surrendering it.

### 9. Provenance Ledger + Forgotten Key

**Cards:** `provenance_ledger` + `forgotten_key`

**Result:** Potentially episode-breaking for an arch-investigation gig.

The Ledger can identify an object’s maker, previous owners, and rightful owner. The Key can open dormant arches. Together, they can help the party identify a relic’s route history and then travel through arches to investigate it. That is a strong combination for a campaign about ownership and route politics.

The danger is that the Ledger can answer an investigation question automatically while the Key supplies the means to act on the answer. If the gig is about discovering who owns a relic or where it came from, the party may skip most of the investigative process.

**Fix:** Let the Ledger reveal provenance, not every fact needed to complete the gig. The rightful owner can be a lead rather than the end of the investigation.

### 10. Black Lotus Case + Valkyrie’s Feather

**Cards:** `black_lotus_case` + `valkyries_feather`

**Result:** Fight-breaking, with a cumulative long-term cost.

Smoke Step offers repeated free teleportation during an encounter, while Spared prevents a hero or ally from dropping to 0 HP. Together, they make it easier to escape dangerous positioning and prevent a catastrophic fall. The items are not self-sustaining: the Lotus has finite petals and permanent Stain, and the Feather accumulates Tally until the valkyrie arrives.

The combination is strong, but its risks are delayed. Under a lenient GM, the valkyrie’s claim and the Lotus’s Stain may become manageable story complications rather than deterrents.

**Fix:** No mechanical change is required solely for this combination. The GM should follow through on the escalating consequences, while leaving the players room to negotiate or redirect them.

### 11. The House + Loaded Die

**Guild:** The House, led by Gleaming Guildred, seeks a Council license for games of chance; it blacklists sharps who cheat its members. The guild also knows the Black Hand card sharp and the Golden Knights shelf the die came from.

**Cards:** `class_cheat`

**Result:** Strong guild play, with a useful internal conflict.

The Loaded Die’s refill requires genuine winnings against an opponent with a real chance of winning. But the House has a split between honest odds and the guild’s own cheats. That means the refill can create a meaningful choice: does the character play honestly to restore the resource, or exploit the die and risk being blacklisted?

The issue is that “genuine winnings” and “real chance of winning” are subjective. The card sharp and House can provide the fiction needed to adjudicate those terms, but the GM should not have to invent a different standard every time.

**Fix:** Define the minimum conditions for a qualifying game once, then let the House’s reaction to the player’s behavior be a separate consequence.

### 12. The Red Sand + Ancestor’s Knucklebone

**Guild:** The Red Sand, led by Sytheria Redsong, keeps the Bout Rolls and knows the fallen Borderlands fighter’s record and collector.

**Cards:** `class_berserker`

**Result:** Strong thematic synergy; acceptable combat power.

The Knucklebone’s replacement table explicitly includes the Red Sand’s Bout Rolls as a source for another relic. The guild can therefore become the practical route to replacing a broken bone, rather than forcing the GM to invent a location from scratch. The guild’s split between fights to the death and first-blood bouts also gives the Berserker a meaningful choice about what kind of combat proves worthiness.

The risk is that “single combat” for the unlock and the Red Sand’s first-blood faction may not agree. If the player defeats an opponent in a bout that ends at first blood, does that count as defeating an enemy in single combat? The unlock’s requirement should decide this, not the GM’s mood.

**Fix:** Specify whether a sanctioned bout can satisfy the unlock, and whether a first-blood victory qualifies.

### 13. The Muster + Battle Standard

**Guild:** The Muster, led by Joslyn Halfcloak, can provide a writ to retrieve the standard from the Museum of Worlds Beyond.

**Cards:** `class_commander`

**Result:** Strong, coherent faction integration.

The guild already has a reason to send the Commander after the standard, and the item’s escalation can reveal a name, title, command, place, or date. This makes the item an engine for guild play rather than an isolated power. The standard’s faction risk is also tied to the same setting material that makes the guild useful.

The remaining problem is procedural: the standard’s escalation requires the player to plant it a second time in the same encounter while Authority is 0. That is a narrow trigger, and the GM must remember that the second planting matters even if the standard was pulled voluntarily.

**Fix:** Make the trigger explicit in the encounter procedure, so the inscription reveal is not missed during a busy fight.

### 14. The Wardens’ Lodge + Borderlands Tracking Cord

**Guild:** The Wardens’ Lodge controls road tracking and has the Track Book. The Tracking Cord is already part of its history.

**Cards:** `class_hunter`

**Result:** Strong, coherent faction integration.

The Cord’s ability to track a quarry independently of Hunter’s Mark gives the Hunter something distinct from their class feature, and the Lodge can provide quarry leads or help interpret the cord’s tokens. The Lodge’s split between road-keeping Wardens and bounty-takers also creates a useful conflict around whether the quarry should be captured, killed, or left alone.

The main concern is that the Cord can track several quarries at once, while its risk roll becomes more dangerous as the number of Marks grows. The GM should make sure the tracking consequence is not just a random ambush but a change to the quarry’s behavior.

**Fix:** Tie each escalation to the particular quarry or to the Lodge’s road politics, rather than introducing an unrelated threat.

### 15. The Whisper Company + Setlist

**Guild:** The Whisper Company, led by Kaylex Thren, keeps performance records and has a split between the Players and Whisperers.

**Cards:** `class_songweaver`

**Result:** Strong faction play; potentially episode-breaking if the setlist shortcut resolves the guild’s main question.

The guild knows the name of whoever stole the Setlist, while the item’s escalation can bring the thief, apprentice, creditor, or missing Songweaver into play. This gives the GM multiple ways to make the Setlist’s history matter.

The risk is that the guild’s reward can collapse the investigation into a single lead if the identity of the thief is the central question of the gig. That is not inherently wrong, but the reward should open the next question rather than answer every question about the Setlist.

**Fix:** Use the thief’s identity as a lead into the guild’s internal conflict, not as the automatic conclusion to the whole storyline.

### 16. The Grove Circle + Mud from the Revlend Marshes

**Guild:** The Grove Circle, led by Graysen One-Eye, wants a voice for the outer lands and is split between the Grove and the Revlender-born Marsh.

**Cards:** `class_stormshifter`

**Result:** Strong, coherent world engagement.

The jar’s refill requires a return to the marshes, and each return changes the region. That is exactly the kind of resource loop that can turn an item into a relationship with a place. The Grove Circle’s conflict gives those changes a political context, and the marsh’s Neglect clock supplies an existing tracker the GM can update without inventing a new one.

The risk is that the item can pull the Stormshifter away from the party’s current gig simply to refill Earthpulse. That is appropriate if the return changes the world or advances a thread, but repetitive if the GM treats it as mandatory maintenance.

**Fix:** Make each refill a meaningful choice about the marsh, rather than a routine journey whose only outcome is restoring four pips.

### 17. The Last Studio + Pain Teacher’s Wrappings

**Guild:** The Last Studio has no master; it wants one, and its two senior students claim different lines of the last teacher’s tradition.

**Cards:** `class_zephyr`

**Result:** Strong story integration; risk of a permanent injury spiral.

The Wrappings’ annotations, missing final technique, and the Studio’s succession conflict fit together. Studying the form and accepting Wounds can reveal martial knowledge, while the guild’s split provides a source of teachers and rivals.

The concern is mechanical rather than thematic: the Wrappings can cause Wounds that heal only by Safe Rest, and using an annotation at three or more Wounds adds another Wound and disables the powers until the next Safe Rest. With a lenient GM, the risk may be ignored; with a strict GM, the Zephyr may be unable to use the item for much of a session. The unlock itself also asks the player to take a hit for information, which can create pressure to risk a dangerous attack.

**Fix:** Keep the injury cost, but make the threshold and timing of the additional Wound explicit. The guild should provide a route to re-inking the annotations without requiring the GM to invent an entirely new martial artist.

---

## D. Deck level

### 1. Diversity of resource types

The deck uses a useful variety of resource types:

* **Pip trackers:** Fury Echo, Authority, Resonance, Earthpulse, Hum, Breath, Petals, Tithe, Growth, Burden, Steam, Bargains, Thread, Call, Clarity, Sky, Runes, Strips, Rust, Provenance, Ward, Hunger, Patience, and others.
* **Accumulation dice:** Marks, Overcharge, Crowd, Tally, and Slack.
* **Wound-cost:** the Pain Teacher’s Wrappings.
* **Toggles:** Held Judgment, Oath, and Truce.
* **Finite, never-refilling resources:** Eyes, Leaves, and Teeth.

That is enough variety for the deck to feel mechanically diverse. The more important distinction is how each resource behaves. Some are earned by an action in the world, some are spent in combat, some accumulate risk, and some are simply a limited number of uses. The deck’s best resources make the item’s fiction obvious from the tracker.

**The strongest resource designs:**

* **Fury Echo:** the resource is literally the story of a dead fighter, and each refill requires telling it to someone new.
* **Authority:** combat performance fuels the standard, but the resource is encounter-bound.
* **Held Judgment:** the Oathsworn can preserve information and damage potential at the cost of temporarily losing access to new Judgment Dice.
* **Earthpulse:** the Stormshifter must return to a changing place.
* **Slack:** every use makes the next use more dangerous until the player repairs the line in the world.
* **Oath:** the resource is a commitment, and the reward or consequence depends on fulfilling it.

These resources are easy to remember because their fiction explains the procedure.

**The weaker resource designs:**

* **Bargains:** the fairy’s questions are explicitly not found during ordinary gigs, so the resource may become dormant for structural reasons unrelated to the player’s choices.
* **Growth:** it is both a power resource and an armor scaling mechanism, so the player is encouraged to maintain it for passive Defense as well as spend it on Eel Slip.
* **Steam:** the armor retains its strongest defensive benefit when the resource is empty, which makes the escalation primarily a penalty to mobility and DEX rather than a meaningful shutdown.
* **Patience:** the Codex can disappear at zero, but the player’s use of Patch and Consult does not create a particularly distinctive resource loop. It is serviceable, but the relationship between crafting, teaching, and temporary repair could be tighter.

### 2. Diversity of costs and origins

The origins are generally varied: Borderlands combat relics, guild property, arch-travelled objects, marsh materials, temple objects, a sea-serpent sword, a cursed suit of armor, and a living hut. The cards often give the object a prior owner or a place that can be visited, which helps the GM turn the item into a thread.

The most distinctive origins are those that make the item’s present function feel like a continuation of its history: the knucklebone remembers a fighter’s last battle; the standard has an erased name; the scales retain a broken verdict; the Wrappings preserve four centuries of annotations; and the Ledger records rightful ownership.

The weaker origins are not necessarily bad prose. They are cases where the object’s origin is mostly a label and does not shape the mechanics. A few cards have the same structure: an item came through an arch, was stolen from an institution, and now draws attention from a faction. That is appropriate for the City of Arches, but if too many cards use the same pattern, the faction response becomes predictable.

The deck also uses real-world myth and other-system inspirations. The campaign brief explicitly permits that because arches lead to other worlds, so I would not treat a Norse, Greek, Egyptian, or fairy-inspired item as a canon error. The relevant question is whether each item has a distinct role in this setting, not whether its inspiration originated here.

### 3. Repetition across cards

The largest repeated structure is:

1. The object has a prior owner or institution.
2. The player performs a specific unlock deed.
3. The item has a named resource.
4. The resource is restored through a world action.
5. Spending or depleting it attracts a faction, creates a permanent cost, or reveals a new piece of history.

That structure is not inherently a problem. It is the deck’s core design identity. The issue is that several cards lean on the same consequence—“the GM introduces someone within a session or two”—without specifying what the arrival wants or how the new threat connects to an existing thread.

The powers also repeat certain functions:

* **Information detection:** Loaded Die, Cracked Lens, Broken Verdict, Tracking Cord, Axe of Nine Eyes, Fairy Jar, Seven-Leaf Bracelet, and Provenance Ledger.
* **Emergency survival or rescue:** Death’s Door, Ring Out, Spared, Hold Back, and the Rusted Spear’s healing.
* **Movement and positioning:** Smoke Step, Gust, Haul, Eel Slip, the hut’s Run, and the Forgotten Key.
* **Extra actors:** Sown Teeth and Bear-Lodge Horn.
* **Persistent debuffs:** Hexing Needles, Hellhide’s Terror, and the control effects from several other cards.

These are not redundant simply because they share a category. The question is whether each card creates a different decision. The best examples do: the Tracking Cord adds multi-target tracking and a risk of being tracked in return; the Lens combines magic perception with escalating spell risk; the Ledger answers provenance questions but attracts factions; and the Broken Verdict gives information while sacrificing access to Judgment Dice.

The weakest examples are where the card offers a broad automatic answer with few constraints. The Hourglass can rewrite any roll, the Ledger can name a rightful owner, and the Hexing Needles can impose a very broad disadvantage. Those powers are not merely strong; they can bypass the play that would otherwise make their subjects interesting.

### 4. Costs that only look like costs

The lenient GM is a major factor. A cost is not meaningful just because it sounds severe; it matters only if the player expects it to change their options.

* **Permanent costs that also grant power:** Black Lotus Stain, Oath-Band’s permanent max-HP change, and the ninth Rune Fragment’s final effect all alter the character or campaign permanently. These are meaningful because the player cannot simply rest them away, though the Lotus’s stages include real benefits as well as drawbacks.
* **Costs that depend on the GM following through:** Hellhide’s compulsion, the Valkyrie’s claim, the Hourglass Echo, and the faction clocks attached to several items. If the GM consistently softens these consequences, the item becomes much stronger than its printed risk suggests.
* **Costs that depend on access to a specific place:** Earthpulse, Growth, Steam, Rust, and Slack. These are good when the return trip is a meaningful episode, but become maintenance chores if the only objective is to refill a tracker.
* **Costs that are not fully under the player’s control:** the Lens’s Wound, the Wrappings’ injury cost, and the Rusted Spear’s catastrophic final hit. These can be dramatically effective, but the player should understand what is at stake before taking the action.

### 5. The ten fixes I would make first

Ranked by how much they improve clarity, agency, and campaign function rather than by how much raw power they remove.

1. **`hourglass_of_borrowed_time`: bound Turn Back.** Define eligible rolls and whether a reroll can reverse consequences already triggered by the original result. This is the most direct threat to the structure of a gig.

2. **`hen_legs_hut`: define the limits of Home and Run.** State whether it can provide Safe Rest while moving, how it handles dangerous terrain, and what happens when its occupants are interrupted. The hut should remain extraordinary without making travel and recovery irrelevant.

3. **`rusted_spear`: revise the zero-Rust consequence.** The permanent unhealable Wound and max-Wound loss are disproportionately severe, while the one-third max-HP reduction for a major monster is an encounter-ending effect. Keep the clean blade’s danger, but make the target and consequence consistent.

4. **`hexing_needles`: define the scope of disadvantage.** The open category is a deliberate choice, but the card needs to specify whether a category can include all attacks, all saves, or all checks, and what exactly ends the effect. That preserves the power without leaving every use to broad negotiation.

5. **`class_berserker`: clarify Death’s Door and Dying.** State whether the Berserker remains Dying, whether the normal Wound rules still apply, and what happens if the hero reaches six Wounds. This is a high-stakes survival power and should not depend on improvisation.

6. **`class_shadowmancer`: fix Patron’s Margin eligibility.** Distinguish patron-path characters from Reavers, and define how the spell-tier exception works with Pilfered Power. The card should not leave a subclass eligibility question inside its most powerful ability.

7. **`class_oathsworn`: define the Held Judgment pool.** State how many dice can be held, whether they can be accumulated across encounters, and what exactly Release consumes. Preserve the Temple consequence, but make the cost of retaining the dice legible.

8. **`class_mage`: formalize Overcharge timing.** State the order of the roll, spell resolution, Overcharge increase, safe-roll benefit, and failure effect. This is a repeated mechanic, so a clear procedure will save time every session.

9. **`fairy_jar`: make the unlock and refill playable in the episodic format.** Provide a route to learning the fairy’s name and a way for ordinary gigs to reveal clues about its home. The current card itself says its resource refill is not found on the way to a gig.

10. **`crafters_codex`: define Patch’s target state.** Say what “broken” means, whether it restores an item’s powers or resources, and which states it cannot reverse. The existing exclusion for escalation damage is useful but insufficient on its own.

These ten are the highest-priority repairs. The remaining cards mostly need narrower clarifications: exact timing, target scope, the meaning of a failed save, or a more explicit trigger for their escalation.

---

## E. Limits

### What this audit can verify

* **Rules accuracy:** High confidence where the supplied condensed Nimble 2 reference explicitly defines the term or procedure, including Dying, Wounds, actions, armor benchmarks, skills, conditions, and the normal spell Upcast mechanic.
* **Design checklist:** High confidence in identifying double-dipping, unclear clearing rules, overly broad powers, and resource loops visible in the text. Some judgments depend on the GM’s intended level of permissiveness.
* **Campaign play:** High confidence where a card clearly conflicts with the stated format, such as the Fairy Jar’s refill condition or the Hut’s combined travel and Safe Rest effects. Medium confidence where the GM may intend a recurring faction thread or a special exception to the campaign’s normal rules.
* **Power and rarity:** Medium confidence. The supplied core examples provide useful anchors, but they are not a complete balance model for custom arcana. The ratings are estimates, not playtest findings.
* **Combinations:** Medium confidence. I have identified interactions that follow directly from the cards and the supplied class constraints. The exact combat impact depends on class progression, monster design, and rules not reproduced in the condensed reference.

### What I could not verify

1. **Full class rules.** I do not have the complete class features, the complete Control Table, or the complete Chaos Table in the supplied reference. The Cracked Lens and some class-arcanum interactions therefore cannot be fully evaluated.
2. **Full minion procedure.** The reference mentions minions and shadow-minion limitations, but does not provide the complete GM guide procedure. The extra-actor risk from Sown Teeth and Bear-Lodge Horn is clear; the exact action-economy impact is not.
3. **True Names.** The supplied rules do not define a general True Name mechanic. The Axe’s information and control effects need a local definition.
4. **Unspecified equipment and object states.** The reference does not define every state that a custom arcanum can occupy, such as a broken arcanum object, a fused item, or an item that is temporarily restored. Those need local rules.
5. **Guild masters and faction responses.** The campaign brief deliberately leaves some guild masters blank and allows loose canon. I have not treated unresolved canon as an error. I have assessed whether the cards give the GM enough to create a usable scene.
6. **Actual table balance.** The GM’s stated preference is for powerful items and dangerous, supercharged encounters, with a lenient attitude toward player death. I can estimate how that changes the practical cost of a card, but I cannot establish the actual balance without playtest outcomes.

### Final assessment

The deck’s main problem is **not that its items are too powerful**. The stated campaign wants powerful objects that pull players into the setting, and many of these cards do that through memorable unlocks, specific places, and world-based refills.

The main problems are concentrated in three areas:

1. **Resolution gaps:** a few cards leave important combat or resource procedures undefined.
2. **Episode bypass:** a small number of powers can answer the question the gig is built around, especially the Hourglass, Hut, Key, and some information effects.
3. **Consequences that depend on GM follow-through:** several items have serious-looking costs that will become negligible if the GM does not consistently apply their consequences.

Fix those areas rather than sanding down the deck’s overall power. The cards that most need structural attention are the Hourglass, Hut, Rusted Spear, Hexing Needles, Fairy Jar, and the class arcana whose effects interact directly with Dying, spell progression, or Judgment Dice. The rest are largely clarification work or deliberate high-powered choices.
