# Blind audit v2 triage

The second audit ran on `analysis/blind_audit_prompt.md` as committed. Each finding was checked against the card text that prompt carried and against the full rules in `rules/`.

**The audit is weak evidence.** Most of its blockers quote text that is not on the cards ("Order undead or a demon to obey one command", "Free wrist crossbow shots", "Any die roll you can see is rerolled"). The prompt held the current wording, so the auditor worked from paraphrase. It also invents two card ids (`seekers_provenance_ledger`, `black_goats_tally_stick`) and says its Spear and Harpoon rows are unverified. Its useful output is a handful of small clarifications.

## 1. Fixed now

| Card | Finding | Fix |
|------|---------|-----|
| Berserker | Do Echo Strike dice follow the Fury Die rules? | Stated: they do, and are lost when Rage ends. |
| Hunter | When does Cord Pull's Slowed apply? | Slowed is "Speed halved during your next turn" (core rules), so the card now says so. |
| Shadowmancer | Reaver's Margin: one die or the whole damage roll? | One extra d12 (Bonescythe is 2d12+DEX). |
| Stormshifter | Does Extend the Beastshift protect against 0 HP? | No: it still ends at 0 HP or when you end it. |
| Drowning Scale | Summons farm Breath (Sown Teeth). | Last Breath ignores creatures you created or summoned. Dying allies still count, as you decided. |
| Valkyrie's Feather | Does Spared still cause a Wound or Dying? | No: it never drops to 0. |
| Tide-Coat, Pitch-Sap, Hellhide, Kettle Plate | Do they count as armor (Zephyr Iron Defense, Swift Feet, proficiency, Hollow Bones)? | Armor type named after the core armor table they match: Leather (3+DEX, like Cheap Hides), Mail (6+DEX max 2, like Rusty Mail), Plate (14, Half Plate), Plate (18, Full Plate). |

## 2. Stale: the card already says it

Hellhide Command (WIL DC 14, 6 spaces, five words, next turn, no self-harm, Solo advantage), Kettle crossbow (Free, 1/turn, 1d8+DEX), Hourglass timing (before the result is applied), Rune ninth rune (one roll this session), Binding Linens (at 0 HP, not Dying, no Wounds, cannot act), Shepherd Ring Out (still Dying), Hunter Mark cap (six tokens), Mage roll order (roll, then add on a safe roll), Songweaver roll order and cap, Oath-Band grade criteria, Black Lotus stage 3, Sown Teeth (an hour, minion rules), Tally-Stick clearing, Sacred Decree (quoted in the prompt), Tide-Coat cap (max 4), Zephyr ("these Wounds" means the annotation Wounds), Fairy Jar (small charms only, no compulsion).

## 3. Already decided by you

Forgotten Key route power (faction reward only), Hexing Needles open-ended, Oathsworn held dice across encounters (the card's design), information powers and Majors staying strong, subjective unlock gates (Stonetop style), GM-improvised escalations, finite relics.

## 4. Disagreed

| Their finding | Why not |
|---------------|---------|
| Death's Door copies Deep Rage (level 18) | It costs all 3 Echo, works one encounter, and cracks the bone the first time it matters. Enduring Rage (level 3) already keeps a Dying Berserker raging. |
| Cheat's secret Distracted is retroactive | That is the escalation: the die stops being trustworthy for one use. The player knows the price when the last Fix is spent. |
| Commander aura stacks without limit | Nimble stacks advantage by rule (one extra die each, drop lowest), and the aura gives one advantaged attack per ally per round. |
| Songweaver refund can exceed the class maximum | It returns a spent use, which cannot exceed the maximum. |
| Hunter unlock across two sessions breaks the episode format | A quarry that survives two sessions is a thread card, which the board already handles. |
