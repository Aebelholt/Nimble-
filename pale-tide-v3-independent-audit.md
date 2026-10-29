# The Pale Tide, first night v3: independent audit

Basis: `pale-tide-first-night-v3.md` only. The pass-2 audit was read for context and none of its claims were assumed.

**Method and limits.** I read every section and traced the ten required cases by hand. A small script checked links, word counts and gated route lengths (a graph with HATCH, THORN, bed state and cemetery gating, not the prose rules). It found 52 sections and 8,607 numbered words, with no broken links. Of the 52, 51 are reachable in the gated model; section 42 sits outside it and is reachable only from the cellar carry (18) and the low-HP edge cases. There is no interpreter, no probability simulation and no playtest. Dice figures below are my arithmetic. I did no web research in this pass, so historical statements come from my own knowledge and are marked for verification.

Labels: **[Defect]** demonstrated in the text. **[Design]** a judgement about play. **[Untested]** a concern only players can settle.

---

## 1. Verdict

**Ready for a first playtest once three narrow route defects are patched (about an hour of editing).** The graph is sound: no stuck states, no duplicate ledger entries in my traces, and every codeword except RIBBON is read somewhere. The most consequential problem is not a bug. Several decisions collapse to one free dominant option (move Nell, hold Owen, give the coat), so a first playtest would mostly measure whether players follow the signposts. Fix the three defects, then watch for exactly that.

---

## 2. Findings

### Blocking route and rule defects

**B1 [Defect] Section 35 is wrong for most of the players who reach it.**
- It opens "At the cemetery... Van Helsing watches you read." It is reached from 28 (HATCH) by Wapping players who never met Van Helsing, and by hunters who are back at the hospital.
- On the 49 to 35 route the reader has never seen Nell or the admitted man (22 and 23 are skipped). The ledger line "Lost: Nell Frost... near the newly admitted man" cites "Hargreaves's other report", but no text conveys that report. This is the ledger requiring an offstage death before a source establishes it.
- Nothing says who decided the boats. "You were absent when their removal was decided" names no one.
- Repair: split the opening by origin. Add to the cemetery branch: *"Price's sheet is folded inside it. Nell Frost died a little after four, in the bed by the door. A man was admitted at midnight and put beside her. Hargreaves signed the launch list himself."*

**B2 [Defect] Section 16 failure at Blood 0 or 1 contradicts the zero-Blood principle.**
- Regular success offers HATCH (neighbours share the work). Failure offers only "spend 2 Blood", otherwise Jonas is Lost.
- Reachable: wharf rescue (2) plus self-donation (2) gives Blood 0 at 16. A Medicine failure there (30%) kills Jonas with the neighbours standing in the room.
- Repair: failure allows HATCH with an added cost (*neighbours who have already worked a shift*), or 2 Blood, whichever the player can pay.

**B3 [Defect] Forced-examination state is unreadable at 11 and 30.**
- Section 30 branches on "if you forced the examination". The only codeword on that path is BRAMBLE, recorded on a pushed failure. A pushed success records only TALLY.
- The pushed-success cost at 11 ("you made his refusal ineffective") and the Regular cost ("remaining observation time") name no ledger entry to attach to. Alice's Lost line is fixed.
- Repair: pushed success also records BRAMBLE, or a separate word, and the cost is copied to Owen's later entry.

**B4 [Defect, canon] Section 22 contradicts the register.** 22 is on the unburned hospital route and states "He has lost his lodging tonight." The register says no destroyed lodging is asserted there. Making it his claim fixes it: *"he says he has lost his lodging tonight."*

### Design concerns, most consequential first

**D1 [Design] Alice's death is certain and unforeshadowed (9 to 11).**
- Choosing 11 always yields "Lost: Alice Bell... she died while you examined a man who could still work". No roll and no warning.
- Section 9 gives Alice only "a shattered arm". The bleeding appears first in 10. The cost line also moralises ("a man who could still work").
- What it buys: TALLY (91% with a push, 100% with ASH). TALLY then changes Eli from Exiled to Saved at 28, a neutral label to a better one. The trade is a named death for a relabel.
- Repair: put the bleeding in 9 (*"a dressing already dark through"*) and have Hargreaves hold Alice's table, so her death needs a visible reason. Consider a First Aid roll so the loss is earned.

**D2 [Design] Dominant free options flatten the middle.**
- Nell: moving her (CLOCK, 26 or 27) is free and always saves her. Sitting the watch (Blood 1, SLATE) is strictly worse, and boarding afterwards loses her.
- The 25 test is optional and gates nothing ("need not precede that decision"), so the observation loop reads as a tutorial.
- Owen: "keep Owen under observation" (28, 30) is unconditional Saved at a minor cost. Recommending removal buys only the water ending.
- Eli: the coat (CANDLE, 32) is free ("does not spend Blood"). It gives the same 33 outcome as ROPE, so the Accounting roll (29) and Credit Rating roll (52) are decorative.
- Repair: give the annexe a real limit (a bed taken from someone else, or a night sister who cannot cover both rooms). Let ROPE and CANDLE differ: Swan staying with Eli yields Saved, the coat yields Exiled alive.

**D3 [Design] Unforeshadowed or thin-information losses.**
- Caleb is Lost on refusal (24), by report.
- Kitty is Lost on leaving or withdrawing (17, 18) although Mrs Dunn goes to fetch neighbours, which is the same help that saves her at 19. The faint-name rule would leave Kitty faint.
- Section 20's conditional lines never cover the "Kitty left" case, and Mrs Dunn's closing question ("who should be allowed to enter") has no choice attached.

**D4 [Design] Decorative costs and boxes.**
- Regular costs at 11, 18 ("time spent testing the boards") and 25 ("Price repeats the observations") have no state. 18's cost is not HATCH.
- Hard at 52 ("avoids an additional written surety") has no Regular counterpart, so Hard equals Regular.
- The six exposure boxes are read only as "any ticked" in 37, 38, 39.
- In 13, Persuade Regular's cost ("keep him from the shift") duplicates the fixed donor consequence in 14. Hard's "without delay" has no matching delay.

**D5 [Design] The home is a destination, not an inhabited place.**
- Julian appears in 1, 40 and 51. He keeps the fire in all night, takes the bag, heats water and lifts the blanket. His labour is the invisible, limitless resource the armature warns about. The doctor's rest is bought by his vigil.
- Nothing in the night touches him, and the exposure ticks pay off nowhere (40: "you show him any wound").
- Repair for 40: *"Julian is asleep in the chair with the fire low. He wakes when you set the bag down. You bank the fire yourself before he can."*

**D6 [Design] Pushes.**
- At 8 the push is dominated: Blood is always 4 there, so paying 2 Blood saves Rook for certain. Pushing saves one Blood at a 40% chance of death. It is also under-specified: "a dressing he has refused" is a refusal the narrative never set up. Add Rook's refusal to the section's narrative.
- At 11 the push yields an optional observation at the price of an overridden stated refusal. The cost is honest and BRAMBLE is a fair consequence, but nothing urgent justifies the coercion. That fits the "transgression remains in the cost line" rule well.
- At 13 the leverage push (BRIAR) is well built: explicit, refusable, with the refusal respected.
- Psychology Extreme at 13 reveals Ned's fear for his mother's care, but he donates as "volunteered" (FLINT) anyway. Add an option to reassure him, or the information has no use.
- At 21 asking Owen to hold the board is the armature's own bad case (an injured man who insists he is fine keeps working) with a trivial cost (*"wrist needs dressing again"*) and no later echo.

**D7 [Defect, minor] Dead gates and stray references.**
- RIBBON is recorded at 45 and never read. 48 tests "the packet", not the word.
- The papers on the no-fire route (45 to 23) have no payoff.
- 18's "no major wound" is unreachable (the only earlier damage is 1 HP). Zero-HP routing at 45 is unreachable (1D6 against HP of 11 or more), and 47 and 33 are reachable only at HP 1.
- 39 mentions a walking stick you never lent.
- 18's Spot Hidden has no use when Blood is under 2 (PLANK is read only by the carry).
- The header says total Sanity loss "does not reach one fifth of starting Sanity". The hunter-then-water route reaches exactly 13 at maximum rolls (12: 3, 45: 3, 49: 4, 33: 3).
- 42 tells a dead doctor to roll development and "keep the names... for a continuation".

---

## 3. Skill coverage

25 initial test sites: 12 skill, 13 other (Sanity 6, Luck 3, DEX 2, CON 2). Alternatives are counted once (25).

| Test (score) | Sites | Condition | Function | Genuine divergence? |
| --- | --- | --- | --- | --- |
| Medicine (70) | 11, 14, 16, 25 (alt. Spot Hidden) | 11: no ASH, chose bitten. 14: transfusion. 16: Wapping. 25: optional | Comparison, procedure, treatment, comparison | 11 and 25 give TALLY. 14 is binary. 16 forks cost (Blood or HATCH). |
| First Aid (60) | 8 | Optional stop | Bleed control | Failure offers three different responses. |
| Psychology (50) | 13 | Optional, no SEAL | Route to consent | Real alternative to pressure. Extreme information is not actionable. |
| Persuade (50) | 13, 27 | 13: no SEAL, no Psychology success. 27: no IVORY | Donor consent. Relief for porter | Push only at 13. |
| Spot Hidden (50) | 18, 25 (alt.) | Optional | PLANK. Bed arrangement | PLANK only helps the carry. |
| Accounting (40) | 29 | Optional | ROPE | Redundant with CANDLE. IVORY holders roll it uselessly. |
| Credit Rating (50) | 52 | No ROPE, no IVORY | ROPE through guarantee | Hard undefined. |
| Fighting (Brawl) (25) | 47 | Optional strike | Knock hook away | Four responses converge at 48. |
| APP (60) | none | | | See below. |

**Counts.** Manuscript-wide: 25 sites. Per run (by my hand count): as few as 2 initial tests (DEX at 7, Sanity at 12; the route in case 1 below) up to roughly 19.

**APP.** Do not add a test. The social moments here turn on status, trust and obligation, which Credit Rating, Persuade and Psychology already carry. Being blood-soaked or well-dressed is a described condition, not an APP roll.

**House-rule boundaries.**
- Best degree selects the benefit: consistent.
- Hard avoids the extra cost, not the fixed donation: consistent at 14, 52 (Hard equals Regular, see D4) and 8.
- Extreme gives precision only: GLASS has no mechanical weight. TALLY at Extreme-only sites (8, 16, 18, 27, 29) is also reachable at Regular elsewhere (11, 25), so essential signs remain inferable.
- Pushed success is capped at Regular benefits: consistent at 8, 11 and 13.
- No death-then-rescue reversals found. The one risk is Rook's push, which is explicitly final.

**Transfusion.** Medicine 70 then Luck 50 gives 0.70 × 0.50 = **35%** that Clara survives. Medicine degrees do not change survival. There is no push or rescue.
- Disclosure: the generic warning is at 13 ("may still fail"). The Luck test, the Blood 2 payment and the odds first appear at 14, after the donor choice.
- Verdict: 35% is historically defensible (before 1901 and Landsteiner's blood groups, transfusion was dangerous). Luck as a compatibility stand-in is reasonable. The double jeopardy is intended, not repetitive, but it is the only named patient with no agency lever.
- Repair: add one line at 13 (*"Transfusion in this decade fails more often than it succeeds."*). Optionally let Hard or Extreme Medicine allow stopping early to spare the donor.

---

## 4. Route traces

Blood starts at 4, HP at 12. "Tests" are initial test sites only.

| # | Route | Blood / HP | Codewords | Ledger | Ending | Untested or notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ASH; 7 DEX ok; 9 to 10; 13 decline; 15 to 21 (porters); 22 CUP; 24 to 25 (skip test) to 26 CLOCK; 28 keep Owen; 36 to 51 to 40 | 4 / 12 | ASH, CUP, CLOCK | Saved: Alice, Owen, Nell. Exiled: Eli. Lost: Clara. Faint: Rook, Jonas, Mrs Dunn, Kitty, Caleb | Home (40) | No required skill test. Clara cannot be saved here. |
| 2a | 8 First Aid fail; spend 2 Blood | 2 / 12 | LOAM | Saved: Rook (cost) | continues | Self-donation still possible at exactly 2. |
| 2b | 8 push fails | 4 / 12 | LOAM | Lost: Rook (restraint cost) | continues | Final, no rescue. Push success leaves Blood 3. |
| 3 | Rescue (2) + self-donation (2); Wapping | 0 / 12 | LOAM, REED | Jonas Lost if 16 fails (30%). Kitty Saved only through 19 | Ward or home. No water. | HATCH forces 28 to 35. B2 applies. |
| 4 | Cellar at Blood 0 or 1 | 0-1 | HATCH | Saved: Kitty, Mrs Dunn (19) | As 3 | Spot Hidden has no use. Carry closed. |
| 5 | Blood 2 at 18; carry | 1 / varies | PLANK or none | Saved both; or collapse + HATCH, Saved by neighbours; or death | As ledger | Death needs no PLANK, Luck fail, 2D6 ≥ HP (≈0.7% at HP 12, ≈2.1% at HP 11). Kitty stays faint. |
| 6 | COPPER; 27 sit (Blood 1); WATCH + SLATE; board at 32 | Blood −1 | SLATE erased | Lost: Nell at 34 | Water | With CLOCK instead: Saved: Nell, no cost. Sitting is dominated. |
| 7 | 29 Accounting fail; 52 Credit Rating fail | unchanged | none | alternatives at 30 | any | 30% chance with no IVORY. Hold Owen, TALLY-hold, or removal plus coat all remain. |
| 8 | Water with ROPE or CANDLE vs neither | unchanged | ROPE / CANDLE | Eli Exiled alive; or moved to Lost at 33 | 38 or 40 | Eli moves at 33. Nell's report arrives at 34, before the 38 vs 40 choice. Sanity + DEX at 33. |
| 9 | THORN; 15 to 43 to 44; papers (45) or not; fire (46) or not | Luck/Sanity at 45 | THORN, LOAM, RIBBON | Wapping names faint | 23 after no fire | Papers unused on the no-fire route. Sanity roll happens in the hold. |
| 10 | THORN; fire; 49 remain; 35 to 39 | n/a | none new | Exiled: Owen, Eli. Lost: Nell (see B1) | Graveyard (39) or home (40) | Hargreaves decided; text does not say so. Nell's death has no diegetic source. |

---

## 5. Scene density and size

**Size.** 8,607 words in 52 sections. A run is 16 to 33 sections and roughly 2,500 to 5,700 words, which is 29% to 66% of the book. By strand (including the shared opening of 9 to 11 sections):

| Strand | Sections | Words |
| --- | --- | --- |
| Hospital (21) | 16 to 27 | ≈2,500 to 4,900 |
| Wapping (16) | 21 to 31 | ≈3,300 to 5,600 |
| Hunter (43) | 18 to 33 | ≈2,700 to 5,700 |

These are model sums, not measured reading time.

**Hunters.** The hunter-exclusive material is 8 sections and 1,169 words: 43 to 49 plus 39. That is 15% of sections and 13.6% of numbered text, down from roughly a third in pass 2.

**Endings.** In the gated model the Wapping strand with HATCH reaches the ward (37) and home (40) but never the water (38). The graveyard (39) is reachable only from the hunter strand. The hospital strand without HATCH reaches 37, 38 and 40.

**What carries.**
- 13 (consent and the donor).
- 8 (the wharf stop).
- 18 and 19 (the neighbours and "you let them").
- 25 to 27 (observation, relief for the porter).
- 32 (the coat).
- 40 (home).

**What drags.**
- 20 and 50 are pass-throughs.
- 31 to 34 is four sections for one decision (the coat).
- 23 largely repeats 22.
- 29 and 52 together carry one rolled idea.
- 47 and 48 are two scenes for one handshake.

**A ten-section reduction.** Nine merges are defensible: 20+50, 25+26, 29+52, 31+32, 33+34, 43+44, 47+48, 35+39, 36+51. Together they give about 43 sections. They lose page turns, not decisions, but each needs actual prose cuts, not pasting. A tenth would fold 38 into 34, losing the quiet dawn on the water. I would stop at nine. Merging 18 and 19 would cost the book its best rest image.

**Three additions if expanding** (net size stays near 50 after the merges):
1. A real decision at 20: Mrs Dunn asks who may enter, but the question has no answer. Lodgers, rent and the cellar are the household's material stakes.
2. A bed decision with a capacity cost at 25 to 27 (a taken bed, a night sister who cannot cover both rooms), so the loop stops being a tutorial.
3. A Julian beat that gives him a decision: he has arranged cover for the practice, or sent a note through the hospital where it can be read.

**Recommended size.** About 50 sections, with 18 to 28 on a run. A 200-section book is not warranted by anything currently in the draft.

---

## 6. Historical and canon register

**Supported (from my own knowledge, confirm against sources).**
- Section 11 of the Criminal Law Amendment Act 1885 criminalised acts of gross indecency between men. Wilde's 1895 conviction makes written notes from a male companion in late 1896 a real risk.
- Blood groups were identified in 1901. Pre-1901 transfusion carried serious risk.
- Hong Kong plague, 1894, with organisms found in dead rats and human bodies.

**Plausible, needs verification.**
- Ward-level nursing staff at the London were "Sisters". "Nurse Price" in charge of assignments may need changing.
- The Metropolitan Asylums Board ran a Thames river ambulance and hospital ships for infectious cases in the 1890s. This may offer real precedent for the river transfer.
- The City of London Port Sanitary Authority had its own hospital at Denton, as the register notes.
- "Dr Fenwick" echoes the real physician Bedford Fenwick and his nursing-reform wife. Low risk, but consider a rename.
- A port officer, duty office and river watchman are fictional institutions needing a plausible grounding.

**Contradictions needing an author decision.**
- 22 states a destroyed lodging on a route where the register disclaims it (B4).
- 35 uses cemetery framing on hospital routes and a Nell entry the reader cannot have seen (B1).
- The ledger definition of Lost includes "left beyond your help", but Kitty is left while help is on its way, which the faint-name rule would not allow (D3).
- The register says the doctor's attending post is "as supplied" for a man. Nothing in the text conflicts with that.
- Price knowing Julian's name: does she know about the relationship, or only a friend who shares rooms? Both read.

---

## 7. Five prioritised changes

1. **Patch B1 to B4.** Include the replacement lines above for 35, 16 and 22.
2. **Break the dominant options (D2).** Give the annexe a cost. Let ROPE and CANDLE differ, or cut the Credit Rating roll and merge 29+52. Decide whether the Owen hold at 28 should lose something.
3. **Fix Alice and the other thin-information losses (D1, D3).** Foreshadow the bleeding, give Hargreaves a reason, and leave Kitty faint when Mrs Dunn goes for help.
4. **Make the pushes and consent honest (D6).** Establish Rook's refusal in 8. Make Psychology Extreme at 13 actionable. Give Owen's hold at 21 a downstream effect.
5. **Make the home inhabited (D5) and pay off the boxes.** Let Julian sleep and let the doctor tend the fire. Give exposure one visible consequence at 40 or 51.

---

## One question

**Should every named Lost be avoidable by some route the player can see coming, or is at least one unavoidable named death part of the design?** The answer decides how I repair Alice, Caleb, Kitty and the cemetery Nell.
