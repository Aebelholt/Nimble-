# Audit round 7 triage (levels 1-4)

Source: external audit of snapshot `52bdf6d`, saved as `analysis/blind_audit_v7_levels_1-4_result.md`. Scope: 39 active cards at hero levels 1-4. Verdicts: ship 15, fix 21, rethink 3. Nothing in the cards is changed yet; this note sorts the findings for a decision.

## Verified against the cards
- **Cracked Lens (blocker): real.** The resource text adds 1 Overcharge on a safe roll, and each safe-roll power repeats "+1 Overcharge". One increment is meant. Fix: say once that a safe roll adds 1, and drop the "+1" from the three powers. Also state that a failed lens stays fused but inert for the encounter, or keeps rolling; pick one.
- **Pain Teacher's Wrappings (blocker): real.** At 5 Wounds the activation cost itself is the sixth Wound, which is death, before the escalation exception is reached. Fix: no annotation can be used at 5 Wounds, and the escalation Wound resolves after payment. State that the Strain Wounds are marked apart on the Wound track.

## Fix now (small, local, uncontroversial): APPLIED
Applied with the two blockers; audit.py passes (0 failing), generator tests pass, print sheets still fit. Lens: one Overcharge per safe roll (the printed +1 on each power is that same point) and a fused lens is inert; Wrappings: no annotation at 5 Wounds, Dying at 0 HP. The choices below are still open.
Oath-Band grade floor; Broken Verdict fusion and what the Temple clears; Pitch-Sap Burden (count stuck weapons, sap clears the seal only); Tracking Cord confrontation vs Cord Pull; Harpoon miss and cut; Drowning Scale empty-state (named powers only, HP stated); Unpaid Favor (use Dazed for monsters); Fairy Jar release reward; Tally-Stick violence vs attack; Songweaver Protective Verse (one sentence); Cheat Fix vs advantage; Shadowmancer Patron's Margin keeps the spell's action cost and needs Pilfered Power; Horn and Sown Teeth get a shared minion profile (Speed 6, Medium, d10 attack).

## Fix now (decision needed on direction)
- **Shared start values:** state starting pips (full for expenditure pools, zero for accumulation, off for toggles) in the table rules. One paragraph, covers every card.
- **Rusted Spear:** audit calls it a bankable boss-damage engine ("rethink"). Earlier rounds kept it. Options: keep as a paid finisher with one armed hit per depletion (my recommendation), or cut the Solo/Legendary effect.
- **Black Lotus Case:** early Stain gives permanent gains for depletion. Option: give the first two Stains a reliable cost, or call it earned advancement.
- **Stormshifter Mud:** duplicates Creature of the Fey at level 3. Option: give the spellcasting subclass a different use, or call Mud a martial-form reward.
- **Hellhide:** Thirst cap does not stop Command. Option: full Thirst blocks Command until cleared.
- **Crafter's Codex:** one Consult per project; zero Patience blocks use; fix sale value.
- **Provenance Ledger:** "rightful owner" needs a defined perspective (chain of custody as fact, claims left to players).
- **Binding Linens, Rune Fragment:** add the destruction boundary and the rewind bound.

## Kept (already decided, auditor agrees or accepts)
Hut, Hexing Needles' scope, Valkyrie consequences, Forgotten Key politics, Axe of Nine Eyes, Commander's accepted exception, finite relics.

## Not a card edit
- Unlock scheduling, refill destinations, and escalation priority are table-rule or campaign-guide text, not card text. Fold into `data/sejr_table_rules.md`.
- Subjective gates ("genuine winnings", "something real", "you will know"): define the observable test at acquisition. Batch with the card fixes.
- Combination notes (Scale vs summoned creatures, Truce vs unnamed attackers, Lens plus Hourglass): fight-level, acceptable. Scale's "you created or summoned" wording gets a shared ruling.

## Pattern findings (parked)
Sensory proximity passives and the "stolen object, owner notices" scene shape repeat. Vary in a later polish pass.
