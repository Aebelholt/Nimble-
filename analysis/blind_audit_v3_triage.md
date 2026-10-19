# Blind audit v3 triage

Source: `analysis/blind_audit_result.md` on branch `ccr-61edb5c2-15y1o4` (a separate session with full access to `rules/` and `setting/`). It audited commit 8dda80f, before the v2 fixes, so its armor-type finding was already fixed. Every rules claim below was checked against `rules/` and `setting/`.

This audit is the strongest of the three: it quotes the real text and found real rules errors.

## 1. Fixed now

| Card | Finding (verified) | Fix |
|------|-------------------|-----|
| Commander | Authority is 0 at every fight's start, so the first plant set off the Escalation every fight. | Fires on a second plant in one encounter, after the standard was pulled or knocked over, at 0 Authority. Dropped "Prepare it before the session" (the d6 table covers it). |
| Mage | Subclass comes at level 3; a level 1-2 holder had no safe-roll power and no Escalation. | Steady Glass (no subclass): one extra damage die. No-subclass Escalation: Dazed until the end of your next turn. Unlock fuse lasts an hour, not "until the encounter ends". |
| Shadowmancer | Patron's Margin had no cost; a level 1-2 Shadowmancer has no path yet. | Spends a use of Pilfered Power for a spell one tier up; the patron path covers levels 1-2 (Pilfered Power exists from level 1). |
| Oathsworn | Unclear when held dice are rolled; a priest cannot perform a Sacred Decree (a class feature). | Dice are rolled when held. At the temple you perform a Decree or a priest absolves you. |
| Berserker | "Dying applies as normal" clashed with Enduring Rage (level 4); the power's only effect also breaks the bone. | Fury Dice stay, Enduring Rage still applies, and the power says it is the bone's last act. |
| Cheat | Distracted is a board state, not a GM call. | Secret d6: on 1-3 Vicious Opportunist does nothing. |
| Songweaver | Protective Verse removed Crowd, lowering its own risk. | Counts as a Call: roll, then add 1. |
| Zephyr | "Martial weapon" is not a Nimble weapon group; "1 minute"; the 1-round lockout did nothing. | Melee weapon; rest of the encounter; lockout until your next Safe Rest. |
| Hunter | Confronting a quarry did not say what happens to its token. | Confronting frees the token; Cut burns it. |
| Axe | Monsters have no actions to lose; "checks against it" covered attacks. | Speak the Name makes it Dazed (monsters lose their move or 1 attack); advantage on skill checks only. |
| Black Lotus | Sleep is not a Nimble condition. | Incapacitated for 1d4 rounds or until it takes damage. |
| Fairy Jar | Ask was a WIL save (a defensive roll). | Influence check, DC 12. |
| Forgotten Key | Skill checks don't crit; "seven major arches" is not in setting/. | Natural 20; every arch in the Market Square. |
| Drowning Scale | Choke had no Solo clause, unlike the Axe and Hellhide. | Solo creatures save with advantage. |
| Pitch-Sap | Grapple escape was a repeated save, not the core escape. | Escape as from any grapple. |
| Rune Fragment | Fehu's +1 named no roll; "scene" is not a rules unit; duplicate runes. | +1 to rolls made with the item; encounter or an hour; reroll duplicates. |
| Rusted Spear | Spare used stabilising, which monsters don't have. | Left alive and Incapacitated at 0 HP; a hero falls Dying as normal. |
| Tally-Stick | The unlock risk wounded an NPC; "the Black Goat's wardens" are not canon. | Vynan Halfhorn wants the one who broke it, and sends someone. |
| Tide-Coat | Growth loss counted in days, which the episodic game doesn't track. | Lose 1 Growth for each episode with no time underwater. |
| Arch-Watch Mirror | Needs a holding; a guild hero has none. | Holding or guild hall. |
| Sown Teeth | "Struck by surprise" is not a rules state. | Hit by an attacker it could not see. |
| Guilds | 8 of 11 taught D&D skills. | Might, Finesse, Influence, Naturecraft, Examination. `test_perchance.js` now checks guild skills against the Nimble list. |
| Guilds | Lens, Bell and Cord had different backstories on the card and the guild. | University gives the pawn shop's name, Vigil says where the Bell is, Wardens took the Cord off the merchant's body. |

`[NEEDS CANON]` added: the Lower Reaches gambling house (Cheat) and pawn shop (Mage) are not named in `setting/`.

## 2. Your calls (power, not rules)

Ranked by how much they can break an episode. My recommendation is in the last column.

| # | Card | Finding | Recommendation |
|---|------|---------|----------------|
| 1 | Rusted Spear | At 0 Rust, one hit makes any creature "bleed out by the end of the scene": a Legendary boss or the patron. | Monsters take the spear's damage again at the end of each of their turns this encounter. Still brutal, no longer a guaranteed kill. |
| 2 | Hellhide | The risk (no spell affects you) is spell immunity for a martial. Thirst clears with any animal's blood. | Risk: spells cast on you fail, and each one adds 1 Thirst. Blood must come from a willing person. |
| 3 | Fairy Jar | Smash at any time for a permanent +1 stat, so the best play is to smash on day one. | Smashing frees the fairy, and it grants the stat only if you learned its name first. |
| 4 | Hexing Needles | An ally's hair, given off-screen, refills Thread every episode. | Refill from someone outside the party. The open hex itself stays, as you decided. |
| 5 | Oath-Band | A small Worthy oath each session farms +1 max HP. | Band HP cannot exceed your level. |
| 6 | Forgotten Key | Refill ("an Archkeeper records") fits the off-screen list: one Opening per episode forever. | Hum refills only from an arch reached on a gig. |
| 7 | Oathsworn | Lie sense lasts as long as dice are held; Release before a Safe Rest dodges the Escalation. | Keep. The price is no Radiant Judgment while held. |
| 8 | Kettle Plate | A free crossbow attack each turn. | Keep. Four shots per coal load. |
| 9 | Shadowmancer | Debt clears at 4, so uses never run out. | Keep. Each collection costs a permanent sentence. |

## 3. Table rules worth adding (your call)

- **Readings.** Six cards read lies, motives or history. Two at one table can solve a mystery gig in its first scene. Suggested rule: a reading is true, and can still point at the wrong person.
- **Thread board.** An Escalation writes a thread card only if a slot is free; otherwise it ticks an existing clock.
- **Long durations.** A week, a lunar cycle or a full moon happens off-screen between episodes, counted by the "last time" line.

## 4. Disagreed or already decided

| Finding | Why not |
|---------|---------|
| Tide-Coat is it armor | Fixed in v2 (Leather). |
| Black Lotus Stains are all buffs | You chose the bloom-roots ending. |
| Subjective gates, filler passives, "returns only this way" | House style you kept. |
| Commander aura too strong, Valkyrie beats Orc Relentless | Strong is the point at this table. |
| Zephyr Wound tracking | Kept in v1: the cost is only the annotation Wounds. |
| Drowning Scale refills from fighting | You kept the trigger. |
| Stormshifter "Deadlands adjacent to the Marshes" | The audit itself found the border in canon. |
