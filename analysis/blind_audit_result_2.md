# Blind audit result, round 2: Sejr arcana deck (39 cards)

Source: the uploaded `blind_audit_prompt-2.md` and `blind_audit_cards-2.md` (card text is identical in both). Checked against `rules/nimble_core_rules_3.2.txt`, `rules/nimble_gmg_3.0.txt` and `rules/classes/*.txt`.

Not blind: I wrote `analysis/blind_audit_result.md` on the earlier draft, so I know what changed. I audited this version on its own terms; section E lists what carried over.

Power scale: U / R / VR / L / C. "Table" = whether the rating moves with a lenient GM who has never killed a player.

## A. Card table

| id | verdict | most important issue | cat | sev | power (baseline) · table |
|---|---|---|---|---|---|
| class_berserker | ship | Echo Strike is a free Fury Die, the class's own move made cheaper | checklist | minor | R (Orc Relentless; Grim Coronet for Death's Door) · down: 0 HP is rarely final |
| class_cheat | ship | "genuine winnings ... real chance": untested gate, house style | pattern | minor | U (Weapon of Wounding) · same |
| class_commander | fix | Free party-wide advantage every round; Authority barely matters next to it | power | minor | VR (above Button of Protection) · same |
| class_hunter | fix | Unlock has no costly requirement; Mark a Quarry still locates anyone within a mile | checklist | minor | R (Eyes of the Street) · up for pursuit gigs |
| class_mage | ship | Clean now; a week of study with restart on failure is slow but covered by the long-durations rule | play | minor | R (Trinket of Ill Omen) · same |
| class_oathsworn | ship | Indefinite private lie sense; the Readings rule now carries it | power | minor | VR · same with Readings rule |
| class_shadowmancer | fix | Pilfered Power and tiered spells start at level 2, so a level-1 holder has only Read the Contract | rules | minor | R · same |
| class_shepherd | fix | Clergy who lent the bell ask "who consecrated it" under an Influence check | play | minor | U (Grim Coronet, weaker) · down |
| class_songweaver | ship | First Call each encounter at Crowd 0 can never fail | rules | minor | U (Gnome Optimistic) · same |
| class_stormshifter | ship | Casting in Direbeast form is a strong class override, costed and refilled only by a gig | power | minor | R (Skitter Shoes) · same |
| class_zephyr | fix | Peak-value lethality: at 4 Wounds one annotation plus Escalation kills | checklist | major | R (Weapon of Wounding) · up: Wound cost soft |
| forgotten_key | ship | Refill now needs a gig; Tuning is filler | pattern | minor | C (Key of Doors, VR) · same, by design |
| drowning_scale | ship | Refill comes from fighting (kept by GM choice) | checklist | minor | R (Ball of Spiders, stronger) · same |
| axe_of_nine_eyes | fix | Named: nine permanent, rangeless trackers; nine creatures learn your heading daily | play | major | VR · up to C for pursuit gigs |
| hourglass_of_borrowed_time | ship | Unlock risk (1 Hit Die till Safe Rest) is a cost that only looks like a cost | pattern | minor | R (Halfling Elusive x3) · same |
| black_lotus_case | fix | Every Stain is a buff; the last one removes the only way to lose the petals | checklist | major | R (Skitter Shoes + teleport) · same |
| oath_band | ship | Unlock and resource are the same act (swear) | checklist | minor | U · same (HP capped at level) |
| unpaid_favor | fix | "small, specific impossibility" is an open wish; d6 table entries with no effect | play | major | R · same |
| valkyries_feather | fix | Escalation needs a GM willing to take a life; at this table Spared has no cost | power | major | R (Orc Relentless, 1/Safe Rest) · cost drops to nil |
| tide_coat | ship | Escalation "things start coming" hands work to the GM | pattern | minor | U (Wyrmhide) · same |
| pitch_sap_harness | fix | Natural-weapon attackers are Grappled for free (no Burden), every hit | checklist | minor | U (Rusty Mail + Handwraps) · same |
| hellhide | rethink | Risk is enemy-spell immunity; Thirst clears with an ally's blood | checklist | major | VR (Half Plate, free) · up |
| kettle_plate | fix | Free crossbow attack each turn; first unlock requirement is already met | power | major | VR (Full Plate, 2,000 gp) · same |
| fairy_jar | fix | Smash for a permanent +1 stat; the fey favour is a debt the GM must invent | power | major | VR via smash, else U · same |
| seven_leaf_bracelet | ship | Year-scale Escalation never lands | play | minor | U · same |
| hexing_needles | ship | Permanent, no-save disadvantage (kept by choice); refill now needs outsiders | power | minor | VR (Trinket of Ill Omen, inverted) · up |
| sown_teeth | fix | Weaker than the Bear-Lodge Horn but locked behind the legacy bonus | play | major | R · same |
| arch_watch_mirror | ship | Clarity refills off-screen, so Escalation rarely fires | checklist | minor | R · up to C (route intelligence) |
| apology_blade | fix | Sky needs past wrongs a drop-in hero may not have | play | minor | U (Handwraps of Force) · same |
| rune_fragment | ship | Ninth-rune retcon is campaign-scale but distant | power | minor | R; ninth rune L · same |
| binding_linens | ship | Second wrap lets the GM delete a PC's memory | play | minor | U (Grim Coronet, gentler) · same |
| rusted_spear | fix | Spare on a Legendary skips its Last Stand; bleed-out still kills Solo non-Legendary bosses | power | major | R; 0-Rust hit near L · up |
| derelict_harpoon | ship | Damage dice unstated | rules | minor | U (Handwraps of Force) · same |
| provenance_ledger | ship | Strong reader, real refill cost | play | minor | R · same |
| tally_stick | ship | Read the Notches is a strong reader; Readings rule covers it | play | minor | R · same |
| gate_chain | fix | "Hold the Line (Reaction)" costs the action it claims to save | rules | major | U (Button of Protection, cheaper) · same |
| bear_lodge_horn | fix | Horde gives 3 minions per 2 Call and refills; outclasses Sown Teeth | power | minor | VR · same |
| hen_legs_hut | rethink | A free Safe Rest holding anywhere plus fast travel; refill rides on gigs; Escalation never fires | power | major | C (no printed baseline; Key of Doors nearest) · same |
| crafters_codex | fix | Patch "until the encounter ends" undefined out of combat; repairs other arcana | rules | minor | U · same |

Tally: ship 19, fix 18, rethink 2.

## B. Findings

### 1. Rules accuracy (verifiable)

- **gate_chain.** "Hold the Line (Reaction, spend 1 Ward): When you Interpose, you also Defend without spending an action for it." Rules: "Reactions cost 1 action." Interpose is itself a reaction. As written you pay 1 action for Hold the Line to save the 1 action Defend costs: net zero. Fix: "(Free, spend 1 Ward)".
- **kettle_plate / hellhide.** "Plate armor, ... with no STR requirement." Only Oathsworn are proficient in plate ("Armor: All Armor"); for the other ten classes, "Defending while wearing armor without proficiency costs 1 additional action". Zephyrs also lose Iron Defense. Not an error, but these are two of the strongest level-1 draws and the card hides their main drawback. Fix: one clause naming the proficiency cost.
- **class_shadowmancer.** "Patron's Margin (... patron path or before level 3): Spend a use of Pilfered Power". Pilfered Power and tiered spells arrive at level 2, so at level 1 the holder has only Read the Contract. Fine if guild Journeyman rank cannot come before level 2; otherwise say so on the card.
- **rusted_spear.** "it is left alive and Incapacitated at 0 HP instead". GM guide: at 0 HP "legendary monsters are Dying and they gain dangerous new capabilities" (Last Stand). Spare skips the Last Stand. Fix: "A Legendary monster enters its Last Stand as normal."
- **crafters_codex.** "works again until the encounter ends": Patch can be used outside combat, where no encounter ends. "Things you make from the Codex sell for double": Craft has no price table to double. Fix: "until the encounter ends, or for an hour".
- **class_songweaver.** "roll ... equal to or below your Crowd before adding": at Crowd 0 no roll can fail, so the first Call after a clear is always safe. Probably intended; noting it.
- **hen_legs_hut.** "Run (spend 1 Hunger)" and "Home (Passive)" have no action cost; fine out of combat. "Each creature within 2 spaces of the hut": the hut's size is never given, and allies are hit too.
- **unpaid_favor.** "On a success it takes only your name for a week": no mechanical meaning. "5 Nemesis: someone is born who will hunt you": no effect for decades. "3 Salt ring: you cannot cross it until it breaks": what breaks it?
- **fairy_jar.** "On a natural 1 the fairy escapes and curses you": the curse is undefined. "stays silent for 2d6 days": day counting; the long-durations rule names weeks and months but not days.
- **valkyries_feather.** "within a day": same.
- **derelict_harpoon, apology_blade.** No weapon damage given. Use an existing weapon line (spear, longsword).
- **Header.** Prompt says "a deck of 35 magic items"; there are 39 (11 class, 20 draw, 3 legacy, 5 faction rewards).
- **Withdrawn from my earlier audit:** "martial" is a real Nimble weapon group (Commander: "All Martial Weapons"). The point is moot now that the Zephyr card says "melee".

### 2. Design standard (spec checklist)

- **Double-dipping.**
  - class_berserker: Echo Strike "Roll a Fury Die ... This does not use your Rage action". Spec: "Does spending the resource give a bonus on top of what the class already does?" Small, and it costs a retelling. Acceptable.
  - class_commander: Authority fills on "an ally ... deals damage ... equal to or greater than your level", which is most hits at levels 1-4.
  - hen_legs_hut: Hunger refills on "food ... from a world beyond an arch or a region outside the city". Any off-city gig brings back food, so the refill comes from playing normally.
  - drowning_scale: refill from fighting. Kept by GM choice.
- **Self-sustaining loops.**
  - hellhide: Thirst "clears only when you offer blood ... from a willing person". An ally offers blood after each fight. Cost becomes zero. Fix: "from someone outside the party" (as the Needles now say).
  - crafters_codex + other arcana: Patch can revive a broken arcanum, including a cracked knucklebone or a broken Mud jar (see C).
  - Fixed since the earlier draft: Songweaver Verse, Hexing Needles party hair, Forgotten Key off-screen Hum.
- **Win-win with no real risk.**
  - hellhide: "no spell can affect you, including your own and your allies' healing". For a martial hero this is immunity to enemy spells; the new Thirst on spells is cleared for free (above).
  - black_lotus_case: Stain 1 advantage on Finesse, 2 +1 Initiative, 3 darkvision with one Influence disadvantage, then "no one can take them from you". The Escalation is a reward track.
  - hen_legs_hut: Escalation "If no one sleeps in the hut for a whole episode, it walks off". With Home making it the party's best Safe Rest, someone always sleeps in it.
- **Peak-value lethality.**
  - class_zephyr: Study the Form is best against Heavy-armored bosses, paid with a Wound. Escalation at 3+ Wounds adds another. At 4 Wounds, one use takes you to 6: dead. Fix: Escalation threshold "4 or more Wounds" and the extra Wound becomes "cannot use annotations".
- **Memory tracking.** class_zephyr (which Wounds are Strain Wounds; Medical Kits cannot heal them). axe_of_nine_eyes (up to nine Named creatures, each learning your heading each dawn).
- **Narrative friction.**
  - class_shepherd: Vigil "lends it to the member who brings it in"; card risk: "the clergy ask who consecrated it ... On a failure they take the bell". The lender confiscates its own loan. Fix: the risk is a rival temple faction (the Market split) asking.
  - class_berserker object: "Taken from the body of a Berserker who died ... and was never retrieved" and "nobody knows which world it came from" after naming the Borderlands. Flavour contradiction, minor.
  - class_commander object: found in the Museum vault, yet "The curator is looking for it". Minor.
- **Automatic social override.** None. All readers are one-directional.
- **Five-part format.** Unlocks without a costly requirement: class_hunter (one requirement + risk), valkyries_feather, seven_leaf_bracelet, unpaid_favor. kettle_plate: "Find the workshop that built it" is already met by "stamped with the mark of Vathrex's Forge". oath_band: the unlock (swear) and the resource (Oath set when you swear) are the same act.
- **Clearing rules.** All clear now except fairy_jar ("At 0 Bargains it only bargains for its freedom" vs "It asks one each time it runs dry": both apply at 0).

### 3. Play in this campaign

- **Table rules close most earlier gaps.** Readings, the thread-board limit, long durations and the `[TABLE ROLL]` rule handle the info stack, Escalation load, and untracked time. I could not see which cards carry `[TABLE ROLL]` (the files say "No notes included").
- **hen_legs_hut deletes two campaign levers.** "a Safe Rest place ... wherever it stands" removes attrition from every off-city gig. "a day's overland travel in an hour" removes travel as a cost to the outer regions. It also hands a guild hero a holding, which the table rules make an either-or. Fix: Home costs 1 Hunger per Safe Rest.
- **Legacy faces mis-rank the deck.** "Faces 21-23 hold the three strongest": Hexing Needles, Sown Teeth, Axe. In the open draw, kettle_plate, hellhide, hen_legs_hut and bear_lodge_horn are each as strong as Sown Teeth or stronger. The Horn does what the Teeth do (minions with d10/d12/d20) and refills. Fix: swap Sown Teeth with the Hut.
- **Legacy bonus incentive.** "+1 per earlier hero ... who died, retired or was lost to an Escalation". With a GM who never kills, the bonus comes from retiring. A player who wants the Axe retires a hero. Minor, maybe intended.
- **bear_lodge_horn refill is a gig to an ice world each time.** Good: a ready-made stake. Same for rusted_spear, derelict_harpoon, class_stormshifter.
- **gate_chain refill.** "carry or lead someone who cannot get out alone to safety" needs a rescue scene, which the generator's interruptions supply. Good fit.
- **crafters_codex** leans on downtime (Craft, Mentor), which the episodic format runs off-screen. Fine under the long-durations rule.
- **Escalations that still hand work to the GM.** class_hunter "The threat is proportional"; tide_coat "things in the deep start coming"; class_zephyr "Finding one is the GM's hook"; unpaid_favor "a favor the GM presents"; fairy_jar "you owe the fey one favour, and they will collect". The board rule routes them, but the GM still writes each one.

### 4. Power (strength that deletes play)

- **hen_legs_hut (C).** See Play. The strongest card in the open draw for campaign shape, without a matching cost.
- **kettle_plate (VR).** "Wrist crossbow (Free, 1/turn): a ranged attack" is a fourth attack per turn, four times per coal load. Fix: "(1 Action)".
- **hellhide (VR).** Defense 14 free, Terror on every enemy, possible enemy-spell immunity, Thirst cleared by an ally.
- **class_commander (VR).** Advantage on every ally's first attack each round, free, from level 1. Table-positive; flagged only as the strongest class card.
- **axe_of_nine_eyes (VR, C for pursuit).** Named is permanent and rangeless. Legacy-gated, so rare.
- **rusted_spear.** The Legendary exception helps. A Solo boss that is not Legendary still "bleeds out by the end of the scene" from one hit. Breaks one boss fight per refill (acceptable) and still lets a hero kill a patron or noble with one stab (an episode break, via "the patron is the threat").
- **fairy_jar.** +1 stat for good at level 1 is a level-up's worth. The new cost (a fey favour, an eye colour) is real only if the GM collects.
- **valkyries_feather.** 1/encounter beats Orc Relentless (1/Safe Rest), and now prevents the Wound too. Its cost (a valkyrie claims the life) asks a GM who never kills to kill; at this table it will be argued away.
- **bear_lodge_horn (VR).** Hunting Call (+2 Speed and advantage, all allies in 12) and Horde (3 minions, Slowed aura) are both strong; the refill is a whole gig. Good design.
- **Table shift.** Anti-death cards (valkyries_feather, binding_linens, class_shepherd, Death's Door) lose value with a GM who never kills; Wound costs (class_zephyr, tally_stick, gate_chain unlock, drowning_scale) lose bite.

### 5. Generated-content patterns

- **"Regain 1 when X. Y returns only this way."** Now on 13 cards (the four new cards all use it).
- **Detector passives** ("glows/hums/clicks when Y is within N spaces"): Tuning, Gold Barbs, Fairy Light, Rustle, Dragon's Click, Warm, Margins, Overcast, Shimmer, plus Lodge-Kin. Gold Barbs and Dragon's Click do nothing narration would not.
- **"Solo creatures save with advantage"** now on Choke, Speak the Name, Command and Draw Fire: consistent, good.
- **"Make an Influence check, DC 14, to ..."** as the unlock risk on class_shepherd, apology_blade, binding_linens, rusted_spear.
- **d6 "or choose" tables** on 6 class cards and 3 found cards.
- **Subjective gates:** "genuinely" (class_cheat, drowning_scale), "must be genuine" (class_oathsworn, class_shepherd), "must be real" (class_commander), "something real, and you must mean it" (class_shadowmancer), "a real wrong" (apology_blade), "courage and negligence" (class_zephyr), "You will know if it did" (class_stormshifter), "a true offering" (unpaid_favor), "a hunt the lodge would be ashamed of" (bear_lodge_horn). House style from the spec's own exemplars; each is a GM ruling.
- **Costs that only look like costs:** Hourglass unlock (1 Hit Die till rest); Kettle unlock (1d6 fire, "a week of repairs"); Black Lotus Stain; Hut Escalation; Hellhide Thirst; drowning_scale Escalation (only if you use an empty pendant).
- **Canon.** The GM now treats unknowns as table rolls, so no canon findings. For reference: "seven major arches" was dropped; Lower Reaches gambling house and pawn shop remain unsourced, now covered by the rule.

## C. Exploits and combinations

| combo | what breaks | scope |
|---|---|---|
| hen_legs_hut + any off-city gig | Safe Rest anywhere, travel in an hour, Hunger refilled by the gig's food | campaign (removes attrition and travel cost) |
| rusted_spear 0-Rust hit on a patron, noble or Solo boss | one-hit delayed kill on anything not Legendary | episode |
| crafters_codex Patch + class_berserker cracked bone | Death's Door's "last act" undone each encounter, if Echo is refilled | fight; undercuts the card's one-shot |
| crafters_codex Patch + forgotten_key splintered / class_stormshifter broken jar | broken arcana work again "until the encounter ends", undefined out of combat | episode (a splintered key opening true) |
| hellhide + ally blood each night | Thirst never reaches 3; no dawn Wound | fight |
| hellhide risk + a Shepherd or Oathsworn ally | allies cannot heal the wearer; the wearer is immune to enemy casters | fight (a real cost here, good) |
| kettle_plate on a Cheat or Hunter | free ranged attack each turn on top of 3 actions | fight (acceptable) |
| bear_lodge_horn Horde + sown_teeth + drowning_scale | summons no longer refill Breath ("other than one you created or summoned") | none (fixed) |
| gate_chain Long Links + Draw Fire + class_commander Plant it | a tank pulls everything onto the standard's aura | fight (acceptable) |
| axe Named + class_hunter cord + Hunter's Mark | many creatures permanently located | episode (pursuit gigs); Readings rule does not cover location |
| class_oathsworn + tally_stick + provenance_ledger + Read the Contract | four readers at one table | episode, covered by the Readings rule |
| Red Sand bout / Muster ask / Sisters' Vigil ask | guild asks stage the Berserker, Commander and Shepherd unlocks and refills | none (good alignment) |
| Wardens' Lodge + gate_chain Escalation | the Hunter guild wants the chain back on its gate | episode hook (good cross-link) |
| Hollow Circle + class_shadowmancer Reaver Escalation | guild hunts members whose patrons come through; the patron's agent arrives | episode hook (good) |
| crafters_codex + Vathrex's Forge + kettle_plate | the Forge wants the Codex and sells the Plate's coal | episode hook (good) |

## D. Deck level

- **Resource types.** Pip tracker 27, d6 vs accumulation 5, toggle 3, finite 3, Wound-cost 1. Still pip-heavy; session-bound ritual unused.
- **Costs.** Wounds on 10+ cards; "a faction learns/wants it" on ~15. Money appears once as a refill (Kettle coal). Relationship costs (apology_blade, provenance_ledger, oath_band) remain the deck's best.
- **Function spread.** Better than before: the four new cards add tanking (Gate Chain), group buff and summons (Horn), base and travel (Hut), crafting (Codex). Moving the armor cards to rewards cuts armor substitutes in the draw from 4 to 2, both plate.
- **Origins and looks.** Good. Folk-tale sources now include Baba Yaga (Hut) beside Norse, Greek and Egyptian. Lower Reaches still hosts four class objects.

**Ten fixes, ranked**
1. hen_legs_hut: Home costs 1 Hunger per Safe Rest, or the hut cannot follow the party through arches.
2. gate_chain: Hold the Line should be Free, not a Reaction.
3. kettle_plate: crossbow costs an action; replace "Find the workshop" with a real requirement; name the plate-proficiency cost (also on hellhide).
4. hellhide: Thirst clears with blood from outside the party.
5. Legacy faces: put the Hut (or Kettle Plate) on a legacy face and move Sown Teeth into the open draw.
6. rusted_spear: Spare does not skip a Last Stand; bleed-out applies only to non-Solo creatures.
7. class_zephyr: move the Escalation threshold so one use cannot kill.
8. crafters_codex: define Patch outside combat and bar it from undoing an arcanum's own Escalation.
9. black_lotus_case: give each Stain a cost that bites (e.g. stage 2 Poisoned by smoke, stage 3 Frightened of sunlight).
10. unpaid_favor: define "your name for a week", Salt ring and Nemesis, or replace those table entries.

## E. Limits

- **Not blind.** I audited the earlier draft. Fixed since then and not re-flagged: Commander Escalation trigger, Rusted Spear on Legendaries (partly), guild skill names, Mage and Shadowmancer level 1-2 lines (Shadowmancer partly), Oathsworn dice timing, Cheat Distracted ruling, Axe Dazed wording, Lotus sleep, Fairy Influence check, Key natural 20, Rune Fehu, Tally-Stick NPC Wound, Tide-Coat days, Songweaver loop, Needles and Key refill loops, Oath-Band HP farm, guild/card contradictions for Lens, Cord and Mirror.
- **Rules accuracy: high** where quoted. Plate proficiency read from each class header line.
- **GM guide monster rules** (Legendary, Solo, Last Stand) checked by keyword: medium.
- **`[TABLE ROLL]` notes** were stripped from these files, so I could not check which cards rely on the rule: unverified.
- **Power ratings: medium-low.** Nine printed items as baselines, none at level 1.
- **Play judgements: medium.** I have not seen the generator tables or the board in use.
