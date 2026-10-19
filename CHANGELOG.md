# Changelog

Arcana rework for Sejr (Nimble 2, City of Arches). Branch `ccr-cae13937-ajbjcv`.

## Read this first

- **The working set is a rebuild.** The original `data/sejr_arcana.json` (44 cards, with statuses and notes) was never in the repo. `data/sejr_arcana.json` is rebuilt from `sources/class_arcana_v3.docx` (11 class cards) and `sources/sejr_arcana_perchance_original.txt` (25 found cards). The 7 other found cards, the one-per-arc card, and the original keep/review/cut notes are not here. If you send the original JSON I will merge it and re-run the audit.
- **Status:** 34 cards `keep`, 1 `review` (Drowning Scale), 4 `cut`, 39 cards total. Cut cards keep their ids.
- **The Drowning Scale is still a stub.** The card text lives in a homebrew document that was not provided. It sits in the Perchance output as it did in the original (object and one unlock line only).

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
| Waiting | Drowning Scale |

Common fixes: hero "Armor N+DEX" became Defense; "LV 5" became "level 5"; "Sylvan" became Elvish; em dashes removed everywhere; every active card has a risk; a free or passive power was added where a card had none.

**Change from the approved plan.** You said the ports from other systems are the point, so Valkyrie's Feather, Rune Fragment, Sown Teeth, Binding Linens and Rusted Spear keep their source flavor (Norse, Greek, Egyptian) instead of being reflavored into setting cultures. Each now has an origin: a world beyond an arch where one fits (Drakeholm, Arkus), the Blood Spears of Averost for the spear, an arrival the Archkeepers met for the runes. The valkyrie's world is unnamed.

**Unlock pass (your question about gimmes).** Stonetop unlocks name a labor, a time cost, something consumed, and a hazard. Most class-card risks were story only. Every active unlock risk now has a roll, save, check, clock or stated loss. The Mage lens gained a week of downtime study (Arcana check) and a d6 on its first cast that can fail the way the item fails. Songweaver, Zephyr, Shepherd, Rune Fragment and Oath-Band gained a quest or study step.

### Step 4: audit as code
- `tools/audit.py` checks: five parts present; one resource with a clearing rule; a refill that names a world action; one spend power and one free or passive power; no kill, slay or reduce-to-0 in resource lines; no em dash, en dash, "it's not" or "charges"; a risk with a mechanic; no capitalized term outside a vocabulary built from `rules/`, `setting/` and the cards' own names.
- Last run: 35 cards, 0 failing checks, 7 left with a reason (`tools/audit_exceptions.json`).
- **Left, with reasons:**
  - Commander, refill: Authority fills from allies' damage and clears at encounter end. The spec uses this card as its Commander example.
  - Drowning Scale (five checks): stub, no card text.
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
| Cards with no place of origin | 21 | 1 (Drowning Scale) |
| From worlds beyond the arches | 0 | 7 |

Honest read: origins are now placed, but they lean on the Doorish Hills (5 cards) and the upper city (7). The Revlend Marshes and the Deadlands have one card each as their primary origin. I can move the Axe and the Pitch-Sap Harness if you want a flatter spread.

## Open items for you

- Drowning Scale: the homebrew document, and a ruling on its death trigger (the audit checklist calls refilling on deaths a kill-steal incentive; the spec calls the card best-in-class).
- The original 44-card JSON, if it still exists.
- `[NEEDS CANON]` flags, each in a card's `notes`:
  - Mage: whether the Observatory of Infinite Skies lets a visitor leave a lens at its glass overnight.
  - Oathsworn: an old court in the ruins of Sunken Revvia (`setting/7_sunken_revvia.md` names none).
  - Valkyrie's Feather: which world holds the grave.
  - Kettle Plate: whether Vathrex's Forge sells coal to outsiders.
  - Black Goat's Tally-Stick: the stick carrying the tavern's peace elsewhere is new.
- Not in the repo and not reviewed: `Strongholds__Followers_v1.12.html`.

## Commands

```
python3 -I tools/audit.py
python3 -I tools/build_perchance.py && node tools/test_perchance.js
python3 -I tools/export_review.py
```
