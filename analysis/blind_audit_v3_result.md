# Blind audit result: Sejr arcana deck (35 cards)

Worked from `analysis/blind_audit_prompt.md`, checked against `rules/nimble_core_rules_3.2.txt`, `rules/nimble_gmg_3.0.txt`, `rules/classes/*.txt` and a name search of `setting/`. No earlier review files were opened.

Power scale: U / R / VR / L / C. "Table" = whether the rating moves with a lenient GM who has never killed a player.

## A. Card table

| id | verdict | most important issue | cat | sev | power (baseline) · table |
|---|---|---|---|---|---|
| class_berserker | fix | Death's Door's only effect (0 HP) destroys the bone; Echo Strike is extra Fury Dice, the class's own move | checklist | major | R (Orc Relentless / Grim Coronet) · down: 0 HP is rarely lethal here |
| class_cheat | fix | Escalation has the GM "decide whether the target was Distracted", which the rules define objectively | rules | minor | U (Weapon of Wounding) · same |
| class_commander | fix | Authority is 0 at every combat start, so the first plant of every fight triggers the Escalation | rules | blocker | VR (no printed party-wide aura; above Button of Protection) · same |
| class_hunter | fix | Mark a Quarry gives direction and distance of any creature from a footprint; answers manhunt episodes | play | major | R (Eyes of the Street) · up to C for pursuit gigs |
| class_mage | fix | Both spend powers need a subclass, which Mages get at level 3; a level 1-2 holder gets only a passive | rules | major | R (Trinket of Ill Omen) · same |
| class_oathsworn | rethink | Hold Judgment is an indefinite, private lie detector, cheaply kept by Releasing before a Safe Rest | power | major | VR · up to C for social/mystery gigs |
| class_shadowmancer | fix | Hitting 4 Debt clears Debt for a GM sentence, so uses are unlimited; "+1 tier" has no mana rule | checklist | major | R (Trinket of Ill Omen) · same |
| class_shepherd | fix | Guild lends the Bell, but the card's risk has clergy asking who consecrated it | play | minor | U (Grim Coronet, weaker) · down: Dying is rarely final |
| class_songweaver | fix | Protective Verse removes Crowd, so the power lowers its own risk (loop) | checklist | major | U (Gnome Optimistic) · same |
| class_stormshifter | ship | Casting while beast-shifted (incl. Direbeast) is a big class-rule override, but costed and finite | power | minor | R (Skitter Shoes) · same |
| class_zephyr | fix | "martial weapon" is not a Nimble weapon group; Wound-source tracking breaks the memory rule | rules | major | R (Weapon of Wounding) · up: Wounds are a soft cost here |
| forgotten_key | fix | Refill ("an Archkeeper records") is on the off-screen list, so one free Opening per episode forever | power | major | C (Key of Doors, VR) · same |
| drowning_scale | fix | Breath refills from creatures dropping in combat, i.e. from fighting; Choke has no Solo clause | checklist | major | R (Ball of Spiders, stronger) · same |
| axe_of_nine_eyes | fix | "loses one action" has no meaning for monsters; "True Name" is undefined | rules | major | VR · up to C: nine permanent trackers |
| hourglass_of_borrowed_time | ship | Unlock risk (1 Hit Die till Safe Rest) is a cost that only looks like a cost | pattern | minor | R (Halfling Elusive x3) · same |
| black_lotus_case | fix | Every Stain stage is a buff; the final stage removes the only loss condition | checklist | major | R (Skitter Shoes + teleport) · same |
| oath_band | fix | Repeated small Worthy oaths farm +1 max HP each session | checklist | minor | U · up over a long campaign |
| unpaid_favor | fix | "Small impossibility" is an open wish; d6 table has entries with no effect in play | play | major | R · same |
| valkyries_feather | fix | 1/encounter "stay at 1 HP" beats Orc Relentless; the valkyrie's claim is toothless at this table | power | major | R (Orc Relentless, 1/Safe Rest) · cost drops to nil |
| tide_coat | fix | Day tracking for Growth loss; unclear if it is armor (stacking, Zephyr) | rules | minor | U (Wyrmhide) · same |
| pitch_sap_harness | fix | Natural-weapon attackers are Grappled with no Burden: free repeatable grapple | rules | minor | U (Rusty Mail + Handwraps of Force) · same |
| hellhide | rethink | The "risk" (no spell can affect you) is spell immunity; Thirst clears with a chicken | checklist | major | VR (Half Plate, free) · up: the dawn Wound rarely matters |
| kettle_plate | fix | Free ranged attack each turn plus Defense 18 with no STR at level 1 | power | major | VR (Full Plate, 2,000 gp) · same |
| fairy_jar | fix | Smash "at any time" gives a permanent +1 stat with no unlock | power | major | VR via smash (Epic Boon-like), else U · same |
| seven_leaf_bracelet | ship | Fine; year-scale Escalation will never land in play | play | minor | U · same |
| hexing_needles | fix | Party members gift hair off-screen: endless Thread, permanent no-save disadvantage on a villain | checklist | major | VR (Trinket of Ill Omen, inverted) · up |
| sown_teeth | fix | "struck by surprise" is not a rules state | rules | minor | R · same |
| arch_watch_mirror | fix | Needs a holding, which guild heroes do not have; refill is a free off-screen vigil | play | major | R · up to C (route intelligence) |
| apology_blade | fix | Sky refill needs pre-existing wrongs, a pool a drop-in hero may not have | play | minor | U (Handwraps of Force) · same |
| rune_fragment | fix | "Fehu: +1 to its user" names no roll; "scene" is not a tracked unit | rules | major | R; ninth rune L · same |
| binding_linens | ship | Solid; wrapping a PC twice lets the GM delete a PC's memory | play | minor | U (Grim Coronet, gentler) · same |
| rusted_spear | rethink | At 0 Rust the next hit kills any creature, boss included, by end of scene | power | blocker | L at 0 Rust, else U · up |
| derelict_harpoon | ship | Clean; damage dice unstated | rules | minor | U (Handwraps of Force) · same |
| provenance_ledger | ship | Name the Owner ends "who stole it" gigs, but refill is costly and real | play | minor | R · same |
| tally_stick | fix | Unlock risk Wounds an NPC; monsters and NPCs do not take Wounds | rules | minor | R; Read the Notches near C socially · same |

Tally: ship 6, fix 26, rethink 3.

## B. Findings

### 1. Rules accuracy (verifiable)

- **class_commander.** "Authority is strictly encounter-bound: all unspent pips are lost when combat ends" + Escalation "When Authority is at 0 during combat and you plant the standard anyway". Authority always starts at 0, so planting in round one triggers the Escalation in every fight. Fix: trigger on spending the last Authority, or on planting after the standard was knocked over.
- **class_commander.** "Hold Ground (Reaction, spend 2 Authority)": reactions cost 1 action and are 1/round (rules §3), fine, but "cannot be moved by any force" overrides Knockback and teleport effects with no save. Minor.
- **class_berserker.** "your Rage does not end when you drop to 0 HP" duplicates Level 18 Deep Rage, and from level 4 Enduring Rage ("While Dying, you Rage automatically for free at the beginning of your turn, max of 2 actions") already covers most of it. "Dying applies as normal" contradicts Enduring Rage's 2 actions and no STR save. Fix: say Fury Dice are kept at 0 HP, and that Enduring Rage still applies.
- **class_cheat.** "the GM secretly decides whether the target was actually Distracted". Rules: "A target is Distracted if it is adjacent to (or Taunted by) an ally, or if it cannot see you." That is a board state, not a GM call. Fix: the next Vicious Opportunist requires a d6 4+ to apply.
- **class_mage.** Mage subclass is chosen at level 3 (Force of Will is a level-3 Control feature). Controlled Upcast and Chaos Bloom name subclasses, and the Escalation uses Lose Control, which only Control Mages have. A level 1-2 Journeyman gets Chaos Sight only, and the Escalation has no defined effect. "Chaos Sight" is also given to Control Mages. Fix: add a no-subclass line (spell gains +1 die).
- **class_mage.** Unlock risk: "the lens fuses to your face until the encounter ends", but the unlock cast may not be in an encounter. Minor.
- **class_oathsworn.** "you may put them on the scales instead" vs Release "Expend the held dice as Radiant Judgment normally does". Unclear whether held dice are rolled now or at Release. Escalation: "a Sacred Decree is performed ... by a priest there". Sacred Decrees are an Oathsworn class feature, not something priests do. Fix: dice are rolled when held; a temple priest "absolves" instead.
- **class_shadowmancer.** "Cast one tiered spell you know at +1 tier above your current maximum": you know no spells above your maximum, and no mana or Pilfered Power cost is given. The subclass (Patron vs Reaver) is chosen at level 3 ("THE PACT IS SEALED"), so at levels 1-2 neither path exists. Fix: "cast a tiered spell you know as if upcast once, without spending Pilfered Power."
- **class_zephyr.** "Your unarmed and martial weapon attacks". Zephyr weapons are "Melee, Unarmed Strikes"; Nimble has no martial group. "for 1 minute": use "this encounter". Strain: "A Medical Kit, healing magic ... cannot remove these Wounds" requires remembering which Wound came from where (spec memory rule). Escalation "cannot use either annotation for 1 round" does nothing, since both are already 1/encounter or 1/Safe Rest.
- **class_songweaver.** "Crowd (d6 vs. accumulation, max 4)" with a fixed max mixes two resource types, and "roll ... equal to or below your Crowd before adding" means the first Call at Crowd 0 can never fail. Minor.
- **class_stormshifter.** "the Deadlands adjacent to them": setting puts the Deadlands west and the Marshes north; the setting does mention a Deadlands–Marshes border (Graydust raiders), so this is defensible. No error.
- **class_hunter.** "A Mark clears when you confront that quarry directly or when you Cut its Mark": only Cut burns a token. Unstated whether a confronted quarry's token burns, so the six-quarry cap is ambiguous.
- **axe_of_nine_eyes.** "It loses one action this turn." Monsters do not have 3 actions; the rules give their loss as Dazed: "monsters lose their move or 1 attack". "True Name" is undefined, and "advantage on checks against it" leaves attacks unclear. Fix: "It is Dazed until the end of its turn"; "advantage on skill checks targeting it, not attacks".
- **black_lotus_case.** "falls asleep for 1d4 rounds": sleep is not a Nimble condition. Use Incapacitated, ending on damage. Monster "level 5 or lower" works with GMG levels.
- **drowning_scale.** Choke grants Incapacitated ("melee hits crit") with no Solo/Legendary clause, unlike the Axe and Hellhide. Not an error, an inconsistency.
- **fairy_jar.** "Ask (Action): Make a WIL save, DC 12": a save is a defensive roll. Use an Influence check.
- **forgotten_key.** "A crit lets you sense the destination first": skill checks do not crit; core only says "a 20 always succeeds". Use "a natural 20".
- **hellhide / kettle_plate.** "with no STR requirement" removes the requirement but not proficiency. Rules: "Defending while wearing armor without proficiency costs 1 additional action." Berserkers and Zephyrs have Armor: None. Worth one clause on the card.
- **pitch_sap_harness.** "Grappled to you until it passes the save": grappling is a core action, so this works, but the rules give escape as "an action and a STR or DEX save", not a repeated save. "Defense 6+DEX (max 2)" is Rusty Mail; fine.
- **rune_fragment.** "Fehu: An item you touch gives +1 to its user for an hour": +1 to which roll? "for the scene": scene is not a rules unit (the campaign uses scenes loosely). "rolled on a d8" with no rule for duplicate runes. Resource called "pip tracker" is really eight separate on/off states.
- **rusted_spear.** "it falls stable instead": monsters do not use Dying or stabilising rules. "a creature bleeds out by the end of the scene" turns any hit into a delayed kill (see Power).
- **tally_stick.** Unlock risk: "you take 1 Wound along with the one who broke it". Monsters (and by extension NPCs) "do not take Wounds".
- **tide_coat.** Unstated whether the coat is armor. If it is, Zephyr's Iron Defense ("as long as you are unarmored") stops; if not, does it stack with worn armor? "Grappled or Restrained": works with the grapple rules.
- **unpaid_favor.** Table entry "1 Newt: you are Tiny and Incapacitated for 3 rounds" is valid (Tiny is a core size) but does nothing outside combat. "takes only your name for a week": no mechanical meaning.
- **class guilds (section 7).** "Teaches" uses D&D skills: Athletics, Sleight of Hand, Persuasion, Survival, Medicine, Performance, Nature, Acrobatics. Nimble skills are Arcana, Examination, Lore, Finesse, Stealth, Might, Influence, Insight, Naturecraft, Perception. Only the University (Arcana) and Sworn Chapter (Insight) are valid. Blocker for the guild card "specialty" benefit.
- **Durations the campaign does not track** (episodic, no calendar): lunar cycle (drowning_scale), week (class_mage, class_zephyr, unpaid_favor, fairy_jar, black_lotus_case, tide_coat, kettle_plate), "each day after a week spent dry" (tide_coat), full moon (pitch_sap_harness), "end a day" (hellhide), 2d6 days (fairy_jar), month/year (seven_leaf_bracelet). Fix pattern: convert to sessions/episodes or Safe Rests.

### 2. Design standard (spec checklist)

- **Double-dipping.**
  - class_berserker: Echo Strike: "Roll a Fury Die and set it aside", the class's own Rage action, made free. Spec: "Does spending the resource give a bonus on top of what the class already does?"
  - class_commander: "Gain 1 Authority whenever an ally ... deals damage ... equal to or greater than your level". At levels 1-4 almost every hit qualifies; the refill is the party's normal play.
  - drowning_scale: Breath fills when "a creature within Reach 2 drops to 0 HP", which is fighting. The GM keeps this by choice; noting only that it breaks the spec's "refill through the world" rule.
  - class_shepherd + Sisters' Vigil: guild ask "one vigil per arc" is also the Bell's refill. Small and arguably good alignment.
- **Self-sustaining loops.**
  - class_songweaver: Protective Verse "remove 2 Crowd". The benefit also clears the risk. Call, Call, Verse keeps Crowd near 0 forever.
  - class_shadowmancer: Debt has no cap that stops use; reaching 4 clears it. The cost is one GM sentence per four Debt.
  - hexing_needles: Thread refills from "hair, blood, or cloth freely given". An ally's hair, off-screen, every episode. Cost becomes zero.
  - oath_band: Fulfilled oaths give permanent max HP; nothing stops a new small oath every session ("the GM may refuse one that matches your plans" is the only brake).
- **Kill-steal incentives.** drowning_scale (any 0 HP within Reach 2) and the Hunter's Thrill of the Hunt are the only death triggers; the Scale's is positional, not about who lands the blow, so the incentive is to stand near the front, not to steal kills. Acceptable.
- **Win-win with no real risk.**
  - black_lotus_case: Stain 1 advantage on Finesse, 2 +1 Initiative, 3 darkvision, then "no one can take them from you". The costs are flavour (no feeling heat, audible pulse) and one Influence disadvantage.
  - hellhide: Risk "no spell can affect you, including your own". For a martial hero this is immunity to every enemy spell.
  - rusted_spear: running dry makes the weapon lethal to whatever it hits next.
  - class_cheat: Escalation lasts "one use only" and at worst cancels a die change.
- **Peak-value lethality.**
  - class_zephyr: Study the Form is worth most against Heavy-armored bosses, paid in Wounds when the hero is already hurt; Escalation at 3+ Wounds adds another. A hero at 4 Wounds using it hits 6 and dies. Spec fix applies: pay before the fight.
  - drowning_scale: Escalation drops you to Dying "at once" exactly when you are out of Breath mid-fight. Mitigated: it only fires if you "try to use the pendant with no Breath", which nobody does on purpose.
- **Memory tracking.** class_zephyr (which Wounds are Strain Wounds), tide_coat (days dry), axe_of_nine_eyes (up to nine Named creatures forever), class_hunter (which token is which quarry, but the physical cord helps).
- **Narrative friction.**
  - class_shadowmancer and class_mage at levels 1-2 (no subclass yet).
  - arch_watch_mirror: "Install it in your holding". Table rules: "take a holding, or join your class guild". A guild hero can draw a card they cannot unlock.
  - class_shepherd: the guild lends the Bell; the card says the temple "never consecrated" it, wants it "for study", and will confiscate it on a failed Influence check.
  - class_mage: University "Gives: the Cracked Lens, lent"; card unlock: "Pay the pawn shop's price" and "The Mages report it stolen".
  - class_hunter: Wardens' Lodge "Gives: the Cord itself; it was a warden's"; card: traded to a merchant who "did not survive". Who recovered it?
  - class_berserker object: "Taken from the body ... and was never retrieved" (body taken from or not?), and "died fighting in the Borderlands" then "nobody knows which world it came from".
  - class_commander object: found in the Museum vault, yet "The curator is looking for it".
- **Automatic social override.** None found. Verdict, Tally-Stick, Contract, Ledger and Hourglass are all one-directional. The issue with them is volume (see Play).
- **Five-part format.** Unlocks missing the costly requirement: class_hunter (one requirement + risk), valkyries_feather ("Dig it", "Learn the story"), seven_leaf_bracelet, oath_band, unpaid_favor. kettle_plate "Find the workshop that built it": the plate is "stamped with the mark of Vathrex's Forge", so the requirement is already met. Powers lacking a spend: oath_band (toggle, fine by type), unpaid_favor and hellhide (gain on use, effectively spend).
- **Clearing rules.** Ambiguous: class_hunter (confront vs burn), tide_coat (days), fairy_jar ("sulks ... 2d6 days"; "At 0 Bargains it only bargains for its freedom", but Bargains refill on a question it asks "each time it runs dry"; both apply at 0), rune_fragment (scene), class_zephyr (none needed).

### 3. Play in this campaign

- **Info powers stack against the episode's question.** Twists like "wrong target", "the patron is the threat" assume heroes can be fooled. Lie and motive readers: class_oathsworn (every lie within 6 spaces, as long as dice are held), class_shadowmancer Read the Contract (want, fear, or a wronged name), tally_stick Read the Notches (who owes whom, and in blood), provenance_ledger (rightful owner, lies blot), hourglass Sand Sense (alibis by time), binding_linens Myrrh (time of death). Location: class_hunter cord (1 mile), axe Named (unlimited range, forever). Each is fine alone; two at one table answer a mystery gig in its first scene. Suggest the GM rule: a reading can be true and still point at the wrong person.
- **Off-screen refill makes several costs vanish.** The list allows "an Archkeeper's record", "a vigil", "a retelling to a new listener", "a burial on the Cliffs", "hair, blood or cloth freely given". That fully refills or nearly refills: forgotten_key (1 Hum/episode), class_berserker (1 Echo), arch_watch_mirror (all Clarity), binding_linens (1 Strip), hexing_needles (1 Thread), rune_fragment (one relight, if a city gravestone counts), class_shepherd (1 Resonance). Intended per the house rule, but these cards' Escalations will then rarely fire.
- **Refills that need a gig** (good: they generate Neglect-region stakes): class_stormshifter (Marshes), valkyries_feather (beyond an arch), tide_coat (drowned places, some in-city), pitch_sap_harness (Lost Cavern), rusted_spear (Bloodrust Depths), derelict_harpoon (Drendaan), fairy_jar ("never found on the way to a gig"). class_mage needs the Observatory (in-city, one night): fine.
- **Unlocks that need the GM to build the scene, not the player.** axe_of_nine_eyes "Let it name a creature in a room you thought was empty"; class_stormshifter "Something in the marshes must acknowledge you ... You will know"; valkyries_feather "1 in 20 the valkyrie comes"; apology_blade (player must already have wronged someone, NPC must give it back); class_oathsworn (needs a loved NPC and a verdict to give). In a drop-in game with unknown attendance, flag these as "pitch it to the generator as the episode's door".
- **Multi-session gates vs drop-in.** class_hunter (track across two sessions: a missing player breaks "without losing the trail", unless the absent tick covers it), class_mage (a week of study, retry on failure), drowning_scale (a lunar cycle of nightly answers: fine as an absent tick).
- **Escalations that create prep the GM said they will not do.** class_commander "Prepare it before the session" (the d6 table mostly covers it, so delete the line); class_hunter "The GM introduces this threat within 1 to 2 sessions"; axe "learn your name and heading each dawn" for up to nine creatures; tide_coat "things in the deep start coming"; unpaid_favor "a favor the GM presents"; class_zephyr "Finding one is the GM's hook". These want one thread-board card each, which a six-card board cannot carry if three heroes trigger at once. Suggest: Escalations write a thread card only if a slot is free, otherwise tick an existing clock.
- **arch_watch_mirror Foresee** previews "an arch or key intervenes". Once per episode it skips one twist; acceptable on a Major card.

### 4. Power (strength that deletes play)

- **rusted_spear (L at 0 Rust).** "a creature bleeds out by the end of the scene". One hit kills a Legendary monster or a political NPC. Breaks episodes ("the patron is the threat": stab the patron once). Fix: monsters take 1 extra damage die per round until the scene ends.
- **forgotten_key (C).** Keys "are power" and a party key is meant to offend a patron. With the off-screen refill, the party has one arch opening per episode on demand. As a faction reward this is on purpose; the problem is only that Hum never runs low. Fix: Hum refills only from an arch the party reaches on a gig.
- **kettle_plate (VR).** Full Plate Defense at level 1 with no STR, plus "Wrist crossbow (Free, 1/turn): a ranged attack" (a free attack each turn, four times per coal load). Fix: make the crossbow cost 1 action.
- **class_commander (VR).** "allies within 4 spaces ... have advantage on their first attack each round" for free, every fight, from level 1. Strong but table-positive; leave power, fix the Escalation trigger.
- **class_oathsworn (VR, C for social gigs).** Lie detection lasts as long as the hero is willing to skip Radiant Judgment. Release before a Safe Rest and re-hold next fight: the Escalation never fires.
- **hexing_needles (VR).** "disadvantage on one kind of roll you name" with no save and no expiry, on a recurring villain, refilled by a friend's hair. Breaks an arc villain, not just a fight.
- **fairy_jar.** "You may smash the jar at any time: it grants +1 to one stat for good". Optimal play is to smash on day one. +1 stat is Level-up or Epic Boon value.
- **axe_of_nine_eyes (VR, C).** Named is a permanent, rangeless tracker. Nine of them end chase gigs.
- **hellhide (VR).** Defense 14 free + Terror + possible total spell immunity; Thirst clears on "a creature that was not trying to harm you", any animal.
- **valkyries_feather (R).** 1/encounter is better than Orc Relentless (1/Safe Rest). At a table where death never happens, Spared turns 0 HP into 1 HP, mostly to save actions; its real cost (the valkyrie) needs a GM willing to take a life. Value drops; risk drops to nil.
- **Table shift, general.** Anti-death cards (valkyries_feather, binding_linens, class_shepherd, Death's Door) lose value with a GM who never kills. Wound costs (class_zephyr, tally_stick, drowning_scale, hellhide) lose bite for the same reason. Info cards gain relative value, since supercharged combats do not counter them.

### 5. Generated-content patterns

- **Template repetition.**
  - "Regain 1 when/by X. Y returns only this way." on 10 cards (forgotten_key, hourglass, black_lotus, kettle_plate, fairy_jar, hexing_needles, arch_watch_mirror, apology_blade, binding_linens, rusted_spear, plus the class Bell and Knucklebone variants).
  - Filler detector passives "X glows/hums/clicks when Y is within 6 spaces": Tuning, Gold Barbs (12), Fairy Light, Rustle, Dragon's Click, Warm, Margins, Overcast, Shimmer. Nine cards, added to satisfy "one passive". Gold Barbs and Dragon's Click do nothing a GM narration would not.
  - "Make an Influence check, DC 14, to ..." as the unlock risk on class_shepherd, apology_blade, binding_linens, rusted_spear.
  - "the GM starts a six-step clock" on class_oathsworn, axe_of_nine_eyes, provenance_ledger.
  - "Roll a d6 on the table below, or choose." on 6 class cards plus 3 found cards.
  - "within a session" as the Escalation's timing on 10+ cards.
  - "Solo creatures save with advantage" on two cards, missing on Choke and Speak-equivalents elsewhere.
  - Fixed DCs: every save is 12, 13 or 14, with no scaling.
- **Subjective gates with no test.** "genuinely believed" (class_cheat), "genuine winnings ... real chance" (class_cheat refill), "The refusal must be genuine. The Verdict will know" (class_oathsworn), "The expectation must be genuine. The bell listens" (class_shepherd), "genuinely risk drowning" (drowning_scale), "The victory must be real" (class_commander), "You must write something real, and you must mean it" (class_shadowmancer), "a real wrong" (apology_blade), "can tell the difference between courage and negligence" (class_zephyr), "You will know if it did" (class_stormshifter), "a true offering" (unpaid_favor). Several come from the spec's own exemplars, so this is house style; it still means the GM rules each one on the spot.
- **Plausible mechanics that do not work.** Fehu's "+1 to its user"; Zephyr's "cannot use either annotation for 1 round"; Speak the Name's "loses one action"; Patron's Margin "+1 tier"; Cheat's GM-decided Distracted; Commander's Escalation that fires every fight; Death's Door's self-destruct.
- **Costs that only look like costs.** Hourglass unlock (1 Hit Die till rest); Kettle unlock (1d6 fire and "a week of repairs"); Black Lotus Stain; Hexing Needles self-hex ("until you unpick it", which you can do at once); Drowning Scale Escalation (needs you to use an empty pendant); Unpaid Favor table "Nemesis: someone is born who will hunt you" (decades away); Valkyrie at this table.
- **Escalations that hand work to the GM.** "The GM decides who and what they want" (class_songweaver, then a table that helps); "The GM decides where it is and how long the search takes" (class_berserker); "The threat is proportional" (class_hunter); "things in the deep start coming" (tide_coat); "Finding one is the GM's hook" (class_zephyr).
- **New canon not in the setting list.** "seven major arches" (forgotten_key: not found in setting text); "the Lower Reaches gambling house" and "a Lower Reaches pawn shop" (class_cheat, class_mage: not found); "the Black Goat's wardens" and the stick being Vynan's (tally_stick: canon says violence there is fatal, no wardens named); "the Golden Council writes the broken oath on the record" (oath_band); the Hellhide's smith and Irax demon-hunt as an unlock (canon has the hidden arch only). Sevelet's Throne "warring souls", Cairn of the Last Titan, Mirewraith's Barrow and Eternal Blades do appear in setting files.

## C. Exploits and combinations

| combo | what breaks | scope |
|---|---|---|
| rusted_spear: spend 3 Rust on Scrape (heal party Wounds), then hit the boss or patron | delayed guaranteed kill on anything | episode (blocker) |
| hexing_needles + any ally's hair off-screen + a recurring villain's cloth | permanent no-save disadvantage on the villain's attacks, refilled every episode | arc / campaign |
| class_oathsworn + tally_stick + provenance_ledger + Read the Contract | every social twist read in one scene | episode |
| axe_of_nine_eyes Named + class_hunter cord + Hunter's Mark | 15+ creatures permanently located | episode (pursuit gigs) |
| forgotten_key + arch_watch_mirror (Watch + Foresee) | party picks and previews arch routes every episode, bypassing patrons | campaign (intended as a prize; the refill makes it permanent) |
| kettle_plate on a Cheat | free wrist-crossbow attack each turn on top of 3 actions | fight (acceptable) |
| kettle_plate / hellhide on Berserker or Zephyr | no proficiency: Defend costs 2 actions; Zephyr loses Iron Defense | fight; a trap for the player, not an exploit |
| class_songweaver Call + Protective Verse | Crowd held near 0, Inspiration refunded every fight | fight (acceptable) |
| valkyries_feather + binding_linens + class_shepherd Toll + hourglass on the death roll | 0 HP stops mattering | fight (acceptable; table already never kills) |
| drowning_scale Choke + party melee | Incapacitated: every melee hit crits, crits ignore armor | fight (acceptable) |
| class_stormshifter Extend the Beastshift + Direbeast Form | spellcasting Direbeast for an encounter | fight (acceptable) |
| oath_band small oath every session | +1 max HP per session | campaign creep (minor) |
| Sisters' Vigil ask + class_shepherd refill | guild duty also refills the Bell | none (good alignment) |
| Red Sand bout + class_berserker unlock | guild ask stages the single-combat unlock | none (good alignment) |
| Muster ask + class_commander unlock | muster supplies the five combatants | none (good alignment) |
| Hollow Circle "hunts members whose patrons come through" + class_shadowmancer Reaver Escalation (patron sends an agent) | guild turns on the hero at every collection | episode hook (good) |

## D. Deck level

- **Resource types.** Pip tracker ~23, d6 vs accumulation 5 (Cord, Lens, Setlist, Feather, Harpoon), toggle 3 (Verdict, Oath-Band, Tally-Stick), finite never-refill 3 (Axe, Bracelet, Teeth), Wound-cost 1 (Wrappings). Pip-heavy; session-bound ritual is unused.
- **Costs.** Wound costs on 8+ cards; "a faction learns" on ~12. Few costs touch money, reputation in numbers, or party relationships (apology_blade and provenance_ledger are the exceptions and the best of the deck).
- **Function overlap.** Armor substitutes: 4 (tide_coat, pitch_sap_harness, hellhide, kettle_plate). Lie/motive/history reading: 6. Anti-death: 5. Tracking: 3. Thin: mobility (lotus, harpoon), crowd control (gust, mire), crafting/economy (none).
- **Origins and looks.** Lower Reaches is overused for class objects (Cheat, Mage, Shadowmancer, Zephyr, plus Tally-Stick). Found arcana spread well across regions and worlds; Norse appears twice (Valkyrie, Runes), Egyptian once, Greek once (Teeth). Good visual range.
- **Repetition.** See §5: "returns only this way", detector passives, "within a session", fixed DC 12-14.

**Ten fixes, ranked**
1. class_commander: Escalation fires every fight; change the trigger.
2. rusted_spear: 0-Rust "bleeds out" kills any creature; bound it.
3. Guild skills: replace D&D skill names with Nimble skills (8 of 11 guilds).
4. class_mage, class_shadowmancer: add a level 1-2 (no subclass) line; define Patron's Margin's cost.
5. class_oathsworn: cap the lie sense (1/encounter or per Safe Rest) and say when held dice are rolled.
6. hexing_needles: hex lasts until the target's next Safe Rest, or refill excludes party members.
7. kettle_plate: crossbow costs an action; replace the empty "find the workshop" requirement.
8. class_berserker: Death's Door must survive its own use, or say it is one-shot; separate Echo Strike from Rage.
9. Narrative contradictions between guild "Gives" and card objects (Lens, Bell, Cord) and the Mirror's holding requirement.
10. Rules wording sweep: Axe "loses one action" to Dazed, Lotus "asleep" to Incapacitated, Fairy "WIL save" to Influence, Key "crit" to natural 20, Fehu's +1, Zephyr "martial", untracked durations to sessions.

Also worth a look: fairy_jar's smash-at-will, hellhide's risk that is a buff, class_songweaver's Verse loop, forgotten_key's off-screen Hum.

## E. Limits

- **Rules accuracy: high confidence** where quoted. Class feature levels read from a flattened class text; the level placement of Enduring Rage (I read it as level 4) is medium confidence.
- **Monster rules** (Solo/Legendary, sizes, NPC Wounds) checked by keyword in the GM guide, not read in full: medium.
- **Canon claims:** keyword search of `setting/` only. A name's absence means "not found", not "contradicts canon": medium.
- **Power ratings:** judgement against a thin printed baseline (nine items, three ancestries). Nimble has no level-1 magic items to compare; ratings are relative within the deck: medium-low.
- **Play-format judgements:** inferred from the context section; I have not seen the generator tables or the thread-board in use: medium.
- Not checked: the Perchance build, JSON data integrity, and whether the 23-card draw count matches the data file.
