# Changelog

Arcana rework for Sejr (Nimble 2, City of Arches). Branch `ccr-cae13937-ajbjcv`.

## Read this first

- **The working set is a rebuild.** The original `data/sejr_arcana.json` (44 cards, with statuses and notes) was never in the repo. `data/sejr_arcana.json` is rebuilt from `sources/class_arcana_v3.docx` (11 class cards) and `sources/sejr_arcana_perchance_original.txt` (25 found cards). The 7 other found cards, the one-per-arc card, and the original keep/review/cut notes are not here. If you send the original JSON I will merge it and re-run the audit.
- **Status:** 35 cards `keep`, 4 `cut`, 39 cards total. Cut cards keep their ids.
- **Drowning Scale is written.** `arches_homebrew.docx` arrived after the first pass and holds its full text; the card follows it (see below).

## What changed

### Step 1 and 2: analysis (no card text changed)
- `analysis/matrix.md`: the 36-card diversity matrix as it stood after the rebuild, with clusters and gaps. It is a Step 1 snapshot; `tools/make_matrix.py <path>` writes a fresh table elsewhere.
- `analysis/proposals.md`: keep, rework or replace per found card, class fixes, three replacement pitches.

### Step 3: rework

Class cards (all 11 reworked, ids unchanged):

| Card | Main fix |
|------|----------|
| Berserker, Ancestor's Knucklebone | Echo fills by retelling the ancestor's last fight, not from Fury Dice (double-dipping). Death's Door paid when you Rage, not after you drop. |
| Cheat, Loaded Die | Costly step and risk added. Passive that overlaps Insight left in place. |
| Commander, Battle Standard | Costly step and risk added. Resource unchanged (encounter-bound by design). |
| Hunter, Tracking Cord | Marks are one count with one clearing rule. Rest wipe removed. |
| Mage, Cracked Lens | Failure now matches the Mage rules (Control mages Lose Control, Chaos mages Invoke Chaos). Refill is a night at the Observatory. Unlock adds a week of study and a d6. |
| Oathsworn, Broken Verdict | Rewritten to the Radiant Judgment rules. "That All You Got?!" was a Berserker ability; dice persist while held. |
| Shadowmancer, Hollow Contract | Debt no longer marks on Pilfered Power. Reaver path and Reaver's Margin added. |
| Shepherd, Bell | Resonance fills by ringing over a sickbed or grave, not by healing. Searing Light does not heal; the unlock now says "heal". |
| Songweaver, Setlist | "Theatre" corrected to "Theater". Per-session cap replaced. Crowd clears by a full hour for a new audience. |
| Stormshifter, Mud | Self-sustaining loop removed (Apply gave the pips that paid for the powers). Uses Beastshift. |
| Zephyr, Wrappings | Escalation could not fire; it now triggers at 3 Wounds. "Cannot heal until Safe Rest" removed. |

Found cards (24 in the pool):

| Call | Cards |
|------|-------|
| Kept, light edits | Axe of Nine Eyes, Hourglass of Borrowed Time, Black Lotus Case, Tide-Coat, Seven-Leaf Bracelet, Arch-Watch Mirror, Apology Blade |
| Reworked | Forgotten Key, Oath-Band, Unpaid Favor, Valkyrie's Feather, Pitch-Sap Harness, Hellhide, Kettle Plate, Fairy Jar, Hexing Needles, Sown Teeth, Rune Fragment, Binding Linens, Rusted Spear |
| New | The Derelict Harpoon (Drendaan), The Seekers' Provenance Ledger, The Black Goat's Tally-Stick |
| Cut | Sul Hide, Ossuary Mail, Hollow Vessel (replaced by the three new cards), Bonded Relic |
| Written from the homebrew | Drowning Scale |

Common fixes: hero "Armor N+DEX" became Defense; "LV 5" became "level 5"; "Sylvan" became Elvish; em dashes removed everywhere; every active card has a risk; a free or passive power was added where a card had none.

**Change from the approved plan.** You said the ports from other systems are the point, so Valkyrie's Feather, Rune Fragment, Sown Teeth, Binding Linens and Rusted Spear keep their source flavor (Norse, Greek, Egyptian) instead of being reflavored into setting cultures. Each now has an origin: a world beyond an arch where one fits (Drakeholm, Arkus), the Blood Spears of Averost for the spear, an arrival the Archkeepers met for the runes. The valkyrie's world is unnamed.

**Unlock pass (your question about gimmes).** Stonetop unlocks name a labor, a time cost, something consumed, and a hazard. Most class-card risks were story only. Every active unlock risk now has a roll, save, check, clock or stated loss. The Mage lens gained a week of downtime study (Arcana check) and a d6 on its first cast that can fail the way the item fails. Songweaver, Zephyr, Shepherd, Rune Fragment and Oath-Band gained a quest or study step.

### Step 4: audit as code
- `tools/audit.py` checks: five parts present; one resource with a clearing rule; a refill that names a world action; one spend power and one free or passive power; no kill, slay or reduce-to-0 in resource lines; no em dash, en dash, "it's not" or "charges"; a risk with a mechanic; no capitalized term outside a vocabulary built from `rules/`, `setting/` and the cards' own names.
- Last run: 35 cards, 0 failing checks, 2 left with a reason (Commander refill, Black Lotus 'Stain') (`tools/audit_exceptions.json`).
- **Left, with reasons:**
  - Commander, refill: Authority fills from allies' damage and clears at encounter end. The spec uses this card as its Commander example.
  - Black Lotus, "Stain": the card's own escalation track, not a rules term.
- **Limit:** the term check catches words absent from the rules. An invented term made only of words that appear in the rules would pass. Read the rules-term list by eye.

### Step 5: outputs
- `data/sejr_arcana_perchance.txt`, generated by `tools/build_perchance.py`. Same structure as the original: `other_arcanum` (24 found cards), `arcana_data` (found plus class cards), `class_arcanum_name` (new), `arcanum_line`, the forge lists and functions (copied unchanged). Edit the JSON, not the .txt.
- `tools/test_perchance.js`: loads the file in node (it emulates Perchance list and function syntax), checks names against the JSON, rolls all 35 cards, rolls `curated_arcanum` and `forged_arcanum` 300 times each, and checks that all 11 generator classes map to a card. Last run: all checks passed. I broke the file on purpose to confirm it fails (5 failures), then restored it.
- Not tested: the module inside Perchance itself. Your campaign notes list that as open for the whole fork.
- **Hero card edit.** In `sejr_generator_lists.txt`, hero() still says `"the " + cls + " class arcanum"`. The module's header comment gives the replacement line (`class_arcanum_name()[cls]`). I did not edit your generator file.

### Other files
- `spec/arcana_design_spec.md`: the pasted spec; em dashes in it were replaced with commas and colons.
- `rules/`: text of the core rules, GM guide and all 11 class PDFs. `setting/`: your setting files. `sources/`: the originals this rebuild started from.
- `analysis/cards_review.md`: every reworked card in five-part form (regenerate with `tools/export_review.py`).
- `tools/`: `bootstrap_from_sources.py` (one-time rebuild), `patch_cards.py`, `show_card.py`, `make_matrix.py`.

### After the homebrew arrived
- **The Drowning Scale** follows `arches_homebrew.docx`: lunar-cycle unlock with a DC 14 STR save, Breath (pip, max 4) lost when the pendant comes off, cold immunity, an hour without air, Choke (STR DC 13), and the DC 12 WIL escalation. Kill-steal answer: Breath is drawn with a Reaction when any creature within Reach 2 drops to 0 HP, so nobody gains by landing the last blow. Mine: Choke's duration, and the Drowned Elvenya origin (the homebrew says "unknown origin").
- **The Forgotten Key** now names where it was found, from the homebrew (rubble beneath the Theater of Whispers). The homebrew clears Resonance on a Safe Rest; this version uses Hum and a world-action refill because the spec bans rest refills. Revert the resource line if you prefer yours.
- **Zephyr correction.** The homebrew defines Wound-cost as a Wound that cannot be healed until the item is rested. I had removed that wording as redundant, which was wrong. Strain Wounds now refuse Medical Kits and healing magic and heal only by Safe Rest, 1 per rest.
- The homebrew's unlock rule (2 to 4 requirements, at least one a risk, at least one session) matches what the cards use. Its own risk examples include story-only lines, so the audit's "risk has a mechanic" check is stricter than the homebrew.

### Reassessment pass
See `analysis/reassessment.md` (design traps, double-dipping, your table) and `analysis/power_levels.md` (every card against Nimble's rarity bands and printed items).
- **Origins flattened.** Axe of Nine Eyes moved to Graydust Keep (Deadlands); Pitch-Sap Harness moved to the Lost Cavern of the Sundering Saurians (Lower Reaches). Found-card origins: upper city 7, worlds beyond 7, Lower Reaches 3, Doorish Hills 3, Revlend Marshes 2, Deadlands 2.
- **Fixed:** Shepherd's Ring was a free bonus on the class's healing (double-dipping), now Ring Out. Hellhide's Terror lasted for good (memory tracking), now the encounter. Rusted Spear's Mend clashed with a Shepherd ability, now Scrape. Apology Blade could be refilled by wronging someone on purpose, now closed. Rune Fragment's Algiz carried a false Passive label I added to pass the audit; every rune now shows its true cost.
- **New audit check:** `name_clash`, no power may share its name with a class ability.
- **Recommended, not changed:** cut filler passives; vary the seven identical d6 risks; give open-ended escalations a d6 list; re-tier the Forgotten Key (campaign-shaping in Sejr) and rule on Hexing Needles' "attack rolls"; add an off-screen refill rule for in-city refills; re-price Wound-only costs for a table where nobody dies.

### Blind audit pass
A second model audited the deck from `analysis/blind_audit_prompt.md`. Triage in `analysis/blind_audit_triage.md`.
- **Fixed (20 cards):** Mage Chaos mages now gain Overcharge (the lens had no risk for them); Hellhide's Command has a save, range, duration and scope; Kettle Plate's crossbow has stats; Binding Linens states the wrapped target's condition; Tally-Stick, Songweaver, Commander and Pitch-Sap Harness contradictions removed; Hourglass and Axe reactions have triggers; Rune Fragment relabelled and its ninth rune bounded; accumulation trackers state their stopping rules; Sown Teeth warriors use the GM guide's minion rules; Berserker, Shepherd, Stormshifter, Rusted Spear, Unpaid Favor and Shadowmancer wording tightened.
- **Found while checking:** a level 1-3 Oathsworn knows no Sacred Decree, so a temple priest can now perform the one the Broken Verdict needs.
- **Prompt fixed:** it now quotes Lifebinding Spirit and Sacred Decree, which the auditor flagged as unverified.
- **Rejected:** six findings, with reasons in the triage. Their power scale was not adopted.
- **Open:** eight decisions, listed at the end of the triage.
- **Draft: class guilds** (`analysis/guilds.md`). Eleven one-card guilds in canon halls, as an alternative to the holding and the source of each class arcanum. Not applied to the data yet.
- **Decided: class arcana are faction rewards too.** All 11 move to `faction_reward_arcanum`; new heroes draw from the 23 found cards. Suggested giver for each card, and whether the reward is the item or a lead to it, in `analysis/faction_rewards.md`.
- **Decided: Forgotten Key is a faction reward.** Removed from the level 1 draw; each card now has a `pool` field (`class`, `draw`, `faction_reward`). The draw pool is 23 cards. The Perchance module gains a `faction_reward_arcanum` list, and the test fails if a faction reward reaches `other_arcanum`.

## Diversity, found pool: before and after

| | Before (25) | After (24) |
|---|---|---|
| Plain pip trackers | 18 | 16 |
| d6 accumulation | 1 | 2 |
| Toggle | 1 | 2 |
| Finite, never refills | 3 | 3 |
| Session-bound | 1 | 1 |
| Wound-cost | 1 | 0 |
| Armors | 6 | 4 |
| Cards with no place of origin | 21 | 0 |
| From worlds beyond the arches | 0 | 7 |

After the reassessment move: upper city 7, worlds beyond 7, Lower Reaches 3, Doorish Hills 3, Revlend Marshes 2, Deadlands 2. The city and the arches lead, which fits a campaign set in the City of Arches.

## Open items for you

- The original 44-card JSON, if it still exists.
- `[NEEDS CANON]` flags, each in a card's `notes`:
  - Mage: whether the Observatory of Infinite Skies lets a visitor leave a lens at its glass overnight.
  - Oathsworn: an old court in the ruins of Sunken Revvia (`setting/7_sunken_revvia.md` names none).
  - Valkyrie's Feather: which world holds the grave.
  - Kettle Plate: whether Vathrex's Forge sells coal to outsiders.
  - Black Goat's Tally-Stick: the stick carrying the tavern's peace elsewhere is new.
- Not in the repo and not reviewed: `Strongholds__Followers_v1.12.html`, and `wonders_of_the_arches.docx` (a catalog of standard magic items, not five-part arcana; nothing was converted). Its Table B of story-attunement deeds is a good source if you want more unlock ideas.

## Commands

```
python3 -I tools/audit.py
python3 -I tools/build_perchance.py && node tools/test_perchance.js
python3 -I tools/export_review.py
```
