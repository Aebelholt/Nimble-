# Blind audit triage

The second model audited the deck from `analysis/blind_audit_prompt.md` alone. Each finding below was checked against the full rules in `rules/`, not just the condensed reference it saw.

## 1. Agreed and fixed now

| Card | Finding | Fix |
|------|---------|-----|
| Mage, Lens | Chaos mages never gained Overcharge (safe rolls reduced it), so the lens had no risk for them. **The most important catch.** | Every safe roll now adds 1 Overcharge for both subclasses. Chaos reward: Chaos Bloom, advantage on Invoke Chaos (Mage rules already use advantage there, at Master of Chaos). |
| Hellhide | Command had no save, range, duration or scope. | WIL DC 14, within 6 spaces, obeys one command of five words or fewer on its next turn, will not harm itself; Solo creatures save with advantage. |
| Kettle Plate | Crossbow had no attack or damage; surge had no action cost. | Wrist crossbow (Free, 1/turn): Range 8, 1d8+DEX, set below the core Crossbow (4d4+DEX, load 1 action). Hidden blade 1d8+STR. Surge is Free. |
| Binding Linens | "Stops dying" did not give the target's state. | At 0 HP, not Dying, takes no Wounds, cannot act; Dying again when unwrapped or at dawn. The second-wrap escalation is per creature. |
| Tally-Stick | Power and resource disagreed on whether a successful save ends the Truce. | Any attempt ends it. |
| Hourglass | Turn Back had no timing window. | After the roll and before its result is applied. |
| Axe of Nine Eyes | Speak the Name was a Reaction with no trigger. | When a Named creature you can see starts its turn; it loses one action. |
| Rune Fragment | Labelled session-bound, but refills by a world ritual. The ninth rune could rewrite any past event. | Labelled pip tracker. The ninth rune changes one roll made this session. |
| Songweaver | "1/round" and "once per encounter" conflicted; no rule at 4 Crowd. | One call per round, one refund per encounter; at 4 Crowd you cannot call until it clears. |
| Hunter, Valkyrie, Harpoon | Accumulation trackers had no stopping rule. | Hunter: capped at the cord's unburned tokens (six to start). Valkyrie and Harpoon: stated that 6 or more makes the trigger certain. Harpoon says who can cut the line. |
| Rusted Spear | "The next wound it gives" was ambiguous; Scrape did not say whom it heals. | "The next creature it hits"; Scrape heals any creature you touch, yourself included. |
| Shepherd, Ring Out | Did not say the ally stays Dying. | Stated: still Dying, still takes Wounds from damage. |
| Stormshifter | Extend the Beastshift's scope was unclear. | Any number of spells, this encounter. |
| Commander | Could one attack give more than 1 Authority? | At most 1 per attack. |
| Unpaid Favor | "Small impossibility" was unbounded; "tiny and actionless" is not a condition. | The GM approves the impossibility before the Tithe is taken. Newt is Tiny and Incapacitated for 3 rounds. |
| Pitch-Sap Harness | No procedure for a stuck weapon; the trigger said "would pass 3" on a tracker that stops at 3. | The attacker lets go or stays adjacent; an action and a Might check, DC 13, pries it free. Escalation fires when a fourth weapon would stick. |
| Sown Teeth | "A soldier stat block of your level" does not exist in the rules. | Warriors fight as GM-guide minions: a d8 attack (d10 from level 5, d12 from level 9), destroyed by any damage, moving and attacking together. **This lowers the card's power. See question 8.** |
| Berserker | "Without any ally's assistance" was undefined; the escalation's timing was unclear. | Assistance means no ally attacks it, heals you, or gives either of you a condition or advantage. The bone cracks at once, and Rage still holds. |
| Shadowmancer, Reaver path | The escalation assumed a patron that collects. | The contract still answers to the patron the Reaver left, which writes the sentence and sends an agent. |

**Found while checking (neither audit had it):** the Oathsworn learns its first Sacred Decree at about level 4, so a level 1-3 Oathsworn could never clear the Broken Verdict's escalation. A priest at the Temple of the Three Sisters can now perform it.

## 2. Agreed, already in my reassessment, waiting on you

- Forgotten Key is campaign-shaping (question 1).
- Information powers can skip a gig's twist: Axe, Mirror, Ledger, Hunter's Cord. Both audits recommend true-but-partial answers, not nerfs.
- Hexing Needles has no save and no limit on the roll kind (question 4).
- Drowning Scale triggers on deaths (question 2).
- Escalations that hand the work to the GM, and pursuer saturation against a six-card thread board.

## 3. Disagreed

| Their finding | Why not |
|---------------|---------|
| Lifebinding Spirit and Sacred Decree are unverified | Both exist in the class rules (Shepherd "My Buddy!", Oathsworn "Sacred Decree"). My prompt left them out; it now quotes both. |
| Invoking Chaos "with disadvantage" is undefined | The Mage rules roll Invoke Chaos with advantage at level 15 (Master of Chaos), so disadvantage is the same mechanic reversed. |
| Fix duplicates Vicious Opportunist | Fix acts before the roll and helps land the hit; Vicious Opportunist acts after a hit on a Distracted target. They overlap only when both apply to one attack. |
| Tide-Coat should state whether Growth can pass 4 | It does: "Growth (pip tracker, max 4)". |
| Zephyr's escalation is peak-value lethality | The player chooses to use an annotation at 3 or more Wounds and knows the price in advance. That makes the cost proactive, which is what the checklist asks for. |
| Holding Judgment Dice past the encounter is an exploit | That is the card's design. Its price is that no new dice roll while dice are held. |
| Their filler-passive examples (Kettle venting, the Songweaver's social penalty) | Neither is a passive; those are escalation and resource text. My filler list in `reassessment.md` stands. |
| Power ratings | They rated no card below Rare and used weak baselines (Grim Coronet and Button of Protection stand in for a dozen unrelated cards). I would not adopt their scale; `power_levels.md` keeps its bands. |

## 4. Decisions for you

1. **Forgotten Key.** Re-tier it to Major, or make every opening uncontrolled and noticed by the patron who holds that arch?
2. **Drowning Scale.** Breath comes from any creature dropping to 0 HP within Reach 2, which includes Dying allies. Keep it as the spec's best-in-class example, limit it to enemies, or change the trigger?
3. **Black Lotus Case.** What does "After 3, the bloom no longer needs the case" mean in play? Is stage 3 the end of the Stain?
4. **Hexing Needles.** Limit "one kind of roll" to a skill or a save (not attacks), and give the victim a WIL save at each Safe Rest?
5. **Oath-Band.** Grades have no criteria. Proposal: Worthy, a session and a risk to you; Mighty, an arc and a risk to someone or something you love; Legendary, it changes the city.
6. **Finite resources.** Axe, Seven-Leaf Bracelet and Sown Teeth never refill, which the spec's resource list does not allow. Add "finite, never refills" to the spec?
7. **Cheat, Fix.** I kept it (see section 3). Change it anyway?
8. **Sown Teeth.** Minion warriors make it far weaker. Keep minions, or give each warrior a GM-guide monster build of your level and accept the prep?
