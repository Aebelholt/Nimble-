# Monster book audit round 2 triage

Source: blind audit saved as `analysis/monster_audit_v2_result.md`. Scope: monsters up to level 4, party of level 3 (42 critiqued, 21 parked). Verdicts: ship 16, fix 25, rethink 1 (Meenlock Stalker). Nothing here is applied yet. The crew is now The Sterling Scabbards, so "Gilded Hands" and "Hand" in the audit mean the Scabbards.

## Fix now (real defects, in scope, cheap)
- **Open-ended holds (R1, P4, C3, C5, C12):** Dig Crew rubble, Serpent-Charmer coil and Cave Fisher line get an escape DC, a duration and an actor. Cave Fisher also states the fall damage. Highest priority: a solo hero can be stuck for good.
- **Dream Squire (R2):** drop "Prone with sleep" (agency rule); Drowse once per hero per round.
- **Meenlock (R11, P4):** remove "turns after two days" and the nonexistent marker; Horrid link gets a WIL save. This is the one "rethink", and the fix is to cut the endgame, not the monster.
- **Carrion Crawler (R12):** Withdraw says where the hero ends up and how the party recovers them; "Crits" is defined as the Primary Die maxed.
- **Steel Hands (R5, C9):** cap Paid in full (once per round, move only, or 1/encounter); put a number on Mercenary pay; define or remove "Choul gateway".
- **Hedge Casters (R3, C1):** Writ of citation gets a WIL save and Range 8; the crow names whose attack it hits; Overreach names whose crit; Masquer and Writ-Binder get damage or "glass cannons" is dropped.
- **Dark Creeper (C4):** Snuff gets a save or once per pack, and relighting is priced.
- **Golden Knights (R7, P4, P9):** arrest gets an exit (bail, a Zeshe favour, a short escape); Formation counts Knights only and scales; "Commander Joslyn" and "Lord Salvana" replaced with canon names (Lord Bianca Swifthand commands, Joslyn Halfcloak is second).
- **Arch Guardians (R6):** key immunity written into the block (one of the three abilities), Stitched healing amount given.
- **Choker Body shield (R4):** "an attack by someone else".
- **Ochre Jelly Split (R9):** halves share the attacks (one attack per round between them), rejoin trigger named, Engulf on a Dying hero stated, DC added to the stat row.
- **Mouther (R10):** the mush rule moves out of the Speed field; Gibbering gets a trigger (start of their turn) and fall damage is stated.
- **True rumours that lie (G10):** Skyhunters plate, Scarecrow six paces, Bandits and Goblins morale. Rewrite so each matches its block.
- **Small wording:** Bandits note ("fragile" reads backwards), Goblins note ("every miss"), Serpent Cult note ("not poison" vs the Voice), Voidwracked note ("higher-level damage"), Snow Golem and Scarecrow ambiguous subjects, Iron Cobra dose on a saved bite, Moltling "Smoldering" defined, Neogi "adult watching" removed, Flying Snakes "Poison." gets an effect.
- **Stage lines that contradict their hooks (P3):** Skyhunters, Cultists, Serpent Cult, Briarbanes. Align line and hooks.
- **Dangling references (S4):** Lesser Fiends "summon", Gnolls "priest", Flying Snakes "sahuagin raid", Grimlocks "Abhuman Effigy". Cut or ground each one.
- **Grimlocks:** Carry off needs a Prone target nothing creates; Waking clock step 4 needs a built result.

## Verify first (before I touch the text)
- **Reading guide vs Core (R13):** Gnoll Packleader's Bark orders then Ravage, and Fanatic's two 1-Action abilities, cannot be run by the Turns line. These are printed Core text, so the fix is a sentence in the Turns line (a ruling), not an edit to the entry.
- **Header says Minion / Standard with no Minion row (R14, pattern):** Stirges, Dead, Spiders, Briarbanes, Fiends. Check each against the Guide; if the Guide lists Minion members I keep them, otherwise the header changes.
- **Terms not in the rules reference (R8):** Hampered, Smoldering, Charmed, Bloodied, darkvision, Digested. Check against `rules/nimble_core_rules_3.2.txt`; the auditor only had the book's section 3.
- **Gig Fit cap (S2):** the rival clock lines run about 100 words. I read these as an accepted extension; confirm.

## Kept (decided or judged fine)
- Core numbers, printed conditions, the Ochre Jelly twice, Clay Guardian fire, Arch Guardians "Any arch" are all existing GM decisions.
- Medium armor density: the auditor's worry (Medium bodies stall a level-3 hero's single attack) is true for single-attack heroes, but crits ignore armor and the budget already accounts for it. Left as built.
- The "Share the fever" and "Gibbering" Passive labels: kept as Passive with a stated trigger line, not relabelled.
- Escalation templates (G1), "steers feet" (G2), low-ceiling notes (G3): pattern findings. Vary them in a later polish pass, not now.

## GM call (open)
1. **Stage reachability (P1, the largest finding).** With Stage = d6 + renown capped at level, a level-3 party only reaches Stages 4-9, so about 30 arch-native entries (Stage 13+) are reachable only through the Arch-episode clause. Do you want the book to label them "Arch", or state a rule for how an Arch episode picks its world? I did not touch the campaign tables.
2. **Arch Guardians vs patron keys (P5, C8).** If patrons hand out keys, the guardian fight is the failure case, not the default. Which is intended?
3. **Rival clocks (C9).** Two clocks step on "loses a scene" or "ignores a clue", which sits close to But+ alone. Tighten the triggers to player choices, or accept?
4. **New canon (P9):** Black Hand pays kobolds, Knights and Black Hand truce, Ibraxus as plague cult (canon says demon cult), Vithra, Choul, Kalya as merchant lady, lodge law, "citadel's three towers". Which stay? I can cut or soften each.
5. **Solo scaling (B2).** Only the Steel Hands says how to run one hero. Add a one-line solo set to the other crews, or leave to the GM guide?
6. **Patron hooks (P7).** Many hooks name sponsors outside the four returning patrons. Re-skin to the four, or keep as flavour?
7. **Stage 5-6 have no creatures at level 3 (P2).** Add a creature, or accept human crews there.

## Parked
- Role balance (no in-scope Artillery; Controllers 40%), hook-shape and cadence repetition (G4, G5), "1/round" noise on single-action creatures (G8), Lower Reaches crowding. Park for a polish pass.
