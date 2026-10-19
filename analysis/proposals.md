# Proposals

No data has been changed. `data/sejr_arcana.json` still holds the rebuilt cards, all at status `review`.

## Basis and limits

- The original 44-card JSON (statuses, notes) was not available. The working set is the 36 cards rebuilt from `sources/`: 11 class cards from the docx and 25 found cards from the Perchance file. The 7 other found cards and the one-per-arc card are missing, so this plan covers the 25 found cards I have.
- Because no notes exist, the audit flags below are my own, checked against `spec/arcana_design_spec.md` and `rules/`.
- Every place, faction and world named below exists in `setting/`. The file is cited in brackets. Anything that needs canon the files do not contain is marked [NEEDS CANON].
- Rules terms checked against `rules/`: heroes have Defense, not armor, and armor as a damage filter belongs to monsters (Medium -10, Heavy -20). Full Plate is Defense 18 (Req. 4 STR), Rusty Mail 6+DEX (max 2), Hard Leather 5+DEX (`rules/nimble_core_rules_3.2.txt`, Armor & Defense). "Enduring Wounds" (Hollow Vessel) appears in neither the core rules nor the GM guide.

## Result

Found pool goes from 25 to 24.

| Call | Count | Cards |
|------|-------|-------|
| Keep | 8 | Drowning Scale, Axe of Nine Eyes, Hourglass, Black Lotus Case, Tide-Coat, Seven-Leaf Bracelet, Arch-Watch Mirror, Apology Blade |
| Rework | 13 | Forgotten Key, Oath-Band, Unpaid Favor, Valkyrie's Feather, Pitch-Sap Harness, Hellhide, Kettle Plate, Fairy Jar, Hexing Needles, Sown Teeth, Rune Fragment, Binding Linens, Rusted Spear |
| Replace | 3 | Sul Hide, Ossuary Mail, Hollow Vessel |
| Cut | 1 | Bonded Relic |

Armors drop from six to four (Tide-Coat, Pitch-Sap Harness, Hellhide, Kettle Plate). Death and Wound cheating drops from six found cards to four (Valkyrie's Feather, Binding Linens, Rusted Spear, Hourglass). Real-world mythology is reflavored into setting cultures in six cards.

## A. Found cards

| Card | Call | Reason | Origin (setting) |
|------|------|--------|------------------|
| Forgotten Key | Rework | Refill is a Safe Rest, which the spec bans. Rename Resonance to Hum (the Bell uses Resonance). Regain 1 when you carry the key to an arch you have not tried and an Archkeeper records what it did. | Archkeepers, arches (3_gazetteer, Keys to the Arches; Archkeepers) |
| Drowning Scale | Keep, pending source | Card is a stub ("See the homebrew document"). The spec gives Breath (pip, max 4), refill by harvesting last breaths from dying creatures, failed roll costs a Condition, escalation drains you. I need the document to write it. Kill-steal check: the refill triggers on deaths, so I want your ruling (see question below). | Suggest Drowned Elvenya (10_the_revlend_marshes) |
| Axe of Nine Eyes | Keep | Finite, strong unlock, real escalation. Add one object clause naming a prior owner. Change "Solos" to "Solo creatures" (Solo is a GM guide term). | Sevelet's Throne rumors a magic axe possessed by warring souls (11_the_doorish_hills); alt: leave as Archkeeper records |
| Hourglass of Borrowed Time | Keep | Refill is a world action, escalation is an invitation. Object names no origin, add one. | Library of Vrassa (3_gazetteer) |
| Black Lotus Case | Keep | Two Wounds on a failed save is steep but the Stain escalation is the best slow burn in the pool. Fix "LV 5" to "level 5". | Oasis of Mother's Tears (12_the_deadlands) |
| Oath-Band | Rework | "Heal all Wounds" overrides the Safe Rest pace (1 Wound per rest). Failure is tied to reaching your next level, a table clock, not a world event. Fulfilled: heal 1 Wound and gain the max HP by grade. Failed: the Golden Council writes the broken oath on the record. | Citadel of the Golden Knights (3_gazetteer); Golden Council records (campaign overview, patrons) |
| Unpaid Favor | Rework | The patron is unnamed. Make the patron one of the twelve profane gods of the Temple of the Lower Twelve; keep the Debt and the d6 collection table. | Temple of the Lower Twelve (4_the_lower_reaches) |
| Valkyrie's Feather | Rework | Norse valkyrie lifted whole. Reflavor to a feather from a celestial of the Army of the Blue Star, laid in a grave. A Blue Star warden collects the spared life. Mechanic unchanged. | Army of the Blue Star, Astaria (3_gazetteer, History); Royal Tombs, Cliffs of the Dead |
| Tide-Coat | Keep | Best refill in the armor group (hours underwater beyond what the gig needs). Change "Armor 3+DEX" to Defense. Add makers. | Revlenders of Heron's Stride (10_the_revlend_marshes); Lost Cisterns, Sunken Revvia |
| Pitch-Sap Harness | Rework | "Armor 6+DEX (max 2)" is Rusty Mail's Defense, use that wording. Burden clears with a Safe Rest, a rest. Clear it by prying the weapons out and re-gluing with fresh sap from the tree. | Briarheart Forest (11_the_doorish_hills) |
| Hellhide | Rework | No Defense value, no power spends Thirst, and Thirst rises on its own each dawn, which is a passive trigger. Set a Defense (Half Plate 14 is the fit), make Command add 1 Thirst, drop the dawn gain. Name the demon's world. | Irax, reached by the Blood Spears' hidden archway (11_the_doorish_hills, Watchtower of Averost) |
| Kettle Plate | Rework | Refill is a ten-minute chore with no sourcing, so it is effectively free. Defense 18 with no STR requirement is Full Plate without its requirement, keep it. Make fuel come from the forge. | Vathrex's Forge, Erna Ironhorn (3_gazetteer). Whether Erna sells banked coal is [NEEDS CANON] |
| Fairy Jar | Rework | Mechanic is sound (the refill question is a good world action). Object names no origin. Source the fairy from the faerie archway. | Arch of Flowers, Briarheart Forest (11_the_doorish_hills) |
| Seven-Leaf Bracelet | Keep | Finite, clean, information-leaning. Change "speak Sylvan" to "speak Elvish" (core rules: Elvish covers Elves, Fey and Sylvan). | Sunset Grove, Graysen One-Eye (3_gazetteer) |
| Hexing Needles | Rework | Closed loop: unpicking a hex refills the Thread that paid for it. Regain 1 when someone gives you hair or cloth freely, knowing what it is for. | Sisters of Dusk, Elgrym, Castle Nightfall (11_the_doorish_hills) |
| Bonded Relic | Cut | Generic object, no deed to unlock ("It chose you"), refill is a Safe Rest. The forge already makes random arcana. | none |
| Sown Teeth | Rework | Cadmus and the Spartoi, lifted. Reflavor to teeth of Ovelek the Gray Worm. Object currently names no origin. | Ovelek the Gray Worm, Teeth of the Gray Worm (3_gazetteer, History) |
| Arch-Watch Mirror | Keep | Clean, information card, vigil is a real world action. Add the maker. | Observatory of Infinite Skies, Darven Malathond (3_gazetteer) |
| Apology Blade | Keep | Best social refill in the pool. Use "Knockback 3" and "Line 6" (rules terms). | Sea serpent from Terrache's cavern sea (13_worlds_beyond_the_arches) |
| Rune Fragment | Rework | Elder Futhark names lifted whole, refill is "once per episode" (passive), and the eight-power table is the most complex text in the pool. Make it a crystal shard with facets, rename every facet, and refill a spent facet by holding the shard to the Observatory's lens for a night. | Delenith, City of Towers, Shattered Teeth (3_gazetteer, History); Observatory of Infinite Skies. Shard provenance is [NEEDS CANON] |
| Binding Linens | Rework | Egyptian mummification lifted whole ("priest of the dead" is unplaced). Reflavor to the dead-keeping of Queen Sett's cult. Mechanic and refill stay. | Cenotaph of Queen Sett (5_the_cliffs_of_the_dead); Sett's Ziggurat, Lost City of Thryne (12_the_deadlands) |
| Rusted Spear | Rework | Achilles and Telephus, lifted. Make it a Blood Spear's weapon. Seawater is not named in the city, so tie the refill to the red water of Bloodrust Depths. | Watchtower of Averost, Blood Spears (11_the_doorish_hills); Bloodrust Cove (10_the_revlend_marshes) |
| Sul Hide | Replace | Armor with a beetle tank. Fifth armor in a pool that needs three or four, and "Sul" has no setting source. | Replacement R1 |
| Ossuary Mail | Replace | No power spends Rot, the "faction that hates the dead" is unnamed, and Dread overlaps Hellhide's Terror. | Replacement R2 |
| Hollow Vessel | Replace | Fifth Wound-avoidance card. Refill pours Wounds into a "bound person", and Enduring Wounds is not a rules term. | Replacement R3 |

## B. Replacements

- **R1, replaces Sul Hide. Derelict Harpoon (Drendaan).** A ship's harpoon with a coil of glowing strand-line cut from a derelict hull. Fills the gaps in ranged offense, mobility and worlds beyond the arches (13_worlds_beyond_the_arches, Drendaan: derelict ships hung in bioluminescent vine). Resource: Slack, d6 vs. accumulation, clears when you re-hang a length on a derelict hull in Drendaan (needs an arch key to get there).
- **R2, replaces Ossuary Mail. Seeker's Provenance Ledger.** A ledger of relics and their rightful owners, kept for the Seekers of the Sun (3_gazetteer, Museum of Worlds Beyond, Vinnic Longshanks). Fills information, ally support and a faction slot nothing else uses. Resource: Provenance, pip tracker (max 3). Fills when you return a relic to its rightful owner. Escalation: the Black Hand's informants learn which relics you can name (3_gazetteer, Seekers of the Sun).
- **R3, replaces Hollow Vessel. Black Goat's Tally-Stick.** A notched credit-stick from the one Lower Reaches tavern that pays no protection to the Black Hand and allows no violence (4_the_lower_reaches, Black Goat's Tavern, Vynan Halfhorn). Fills social and toggle resources. Resource: Truce, toggle. Spend it to hold a parley under the tavern's rule anywhere you stand. Refill: broker a meeting between two enemies. Escalation: Vynan's wardens collect from whoever breaks the truce under the stick's name. The stick's power beyond the tavern is [NEEDS CANON].

## C. Class cards

Mage rules are in `rules/classes/Mage.txt`; all 11 classes are checked.

Every class card lacks a risk in its unlock (the spec requires 1 to 2 requirements, 1 costly requirement, 1 risk). I will add one risk line to each in Step 3 and show it with the card. The flags below are the others.

**Berserker, Ancestor's Knucklebone.**
- Flags: double-dipping (Echo fills from rolling Fury Dice, the class's own move; Echo Strike adds a Fury Die on top of Rage). Peak-value lethality (Death's Door is paid after you drop to 0 HP, and the class already gets Deep Rage at level 18).
- Fix: Echo (max 3) comes from retelling the ancestor's last fight to a new listener (world action, e.g. a night at Sevenge and Gam's), persists until spent. Echo Strike costs 1 Echo for a free Fury Die. Death's Door becomes proactive: spend 3 Echo when you Rage and your Rage does not end if you drop to 0 HP this encounter. Identity kept: Rage extended, never replaced.

**Cheat, Loaded Die.**
- Flags: Loaded Odds replicates the Insight skill (detect lies) and costs nothing. Otherwise clean (refill is a gamble, no memory, no Vicious Opportunist link).
- Fix: keep the passive as written, since the spec treats it as free social utility. Add the risk line only. I will leave this flag unless you want it changed.

**Commander, Battle Standard of the Nameless King.**
- Flags: Authority fills from allies' damage and clears at encounter end, so there is no world refill. Spec praises this design (damage threshold, not kills).
- Fix: leave as the spec's own example. Add the risk line. The audit will list it as left, with that reason.

**Hunter, Borderlands Tracking Cord.**
- Flags: clearing is stated three ways (confront the quarry, Safe Rest, Cut the Mark) and it is unclear whether Marks are per quarry or one count. Spec constraints are met (the Cord works beyond sight, which Hunter's Mark does not).
- Fix: one count of Marks, one per quarry. Clears when you confront that quarry or Cut the Mark for it. Drop the Safe Rest wipe.

**Mage, Cracked Lens of Kartan.**
- Flags: narrative friction. The Control Table is not rolled (Control mages choose an option, and Lose Control is forced on the 4th Demand). Chaos mages have no Control Table and no Lose Control; they roll on the Chaos Table. Refill is "cast no tiered spells for a session, then Safe Rest": abstention plus a rest.
- Fix: Control mage on a failed d6: Lose Control as written. Chaos mage on a failed d6: Invoke Chaos with disadvantage. Overcharge clears when you hold the lens to the Observatory's glass for a night (3_gazetteer, Observatory of Infinite Skies).

**Oathsworn, Broken Verdict.**
- Flags: the card cites "That All You Got?!" as an Oathsworn reaction; that is a Berserker ability. Judgment Dice are not spent on reactions and expire at the end of the encounter, so "hold across a Safe Rest" contradicts the rules. Origin says "Sunken Revvia district", but Sunken Revvia is an ancient ruined city and the files name no Magistrate's Court there ([NEEDS CANON]).
- Fix: Hold Judgment (toggle). When Judgment Dice would be rolled, put them on the scales instead of expending them on your next Reach attack. They persist past the encounter. Release (Free, on a Reach attack, 1/encounter): expend them as normal and the radiant damage ignores armor. Drop the reaction clause. Escalation (held across a Safe Rest locks Lay on Hands until a Sacred Decree at the Temple of the Three Sisters) stands.

**Shadowmancer, Hollow Contract.**
- Flags: double-dipping (Debt marks on every Pilfered Power use, and the Safe Rest refill duplicates the class's own commune). Narrative friction (Reavers have no patron and cannot cast through Pilfered Power, so they have no class arcanum).
- Fix: Debt marks only on the contract's own powers (Read the Contract, Patron's Margin). Drop the Pilfered Power refill. Debt clears when the patron collects (escalation) or when you carry out a sentence you wrote. Add a Reaver path: the contract is a page stolen from the patron you left (Bonescythe is the Reaver's "stolen secret"); the escalation sends the patron's agent instead of a sentence.

**Shepherd, Bell of the Three Sisters.**
- Flags: double-dipping (Resonance fills each time Searing Light heals). Ring gives the Lifebinding Spirit an extra action on top of the class. Clears at Safe Rest.
- Fix: Resonance (max 4) fills by ringing the bell over a sickbed or grave for an hour at the Temple of the Three Sisters or the Cliffs of the Dead, and persists until spent. Keep Chain Heal and Toll. Toll still costs a Wound and breaks the handle.

**Songweaver, Setlist.**
- Flags: memory tracking ("max 1 per ally per session"). Crowd clears only at Safe Rest. "Theatre" should read "Theater" (3_gazetteer).
- Fix: Call the Song refunds Songweaver's Inspiration once per encounter instead of once per ally per session. Crowd clears when you play a full hour for a new audience (the unlock deed, repeated).

**Stormshifter, Mud from the Revlend Marshes.**
- Flags: self-sustaining loop (Apply gives Earthpulse, which pays for Extend and Mire). "Shift ability" and "storm form" are not rules terms; the class has Beastshift and Direbeast Form, which last until a condition ends, not for rounds.
- Fix: the jar holds 4 Earthpulse when filled. Apply costs 1 and no longer gives any. Extend the Beastshift: spend 2, Beastshift does not end when you cast a spell this encounter. Mire stays (all 4). Refill stays (return the jar to the Revlend Marshes overnight).

**Zephyr, Pain Teacher's Wrappings.**
- Flags: "cannot be healed until Safe Rest" restates the rules (Wounds heal 1 per Safe Rest), so the stated cost is no cost beyond the Wound itself. Deepest Annotation is 1/Safe Rest, but the escalation fires on three uses without a rest: impossible. "Study (Passive)" is an hour of work, not passive.
- Fix: keep Study the Form (proactive Wound). Escalation: using either annotation while you have 3 or more Wounds, from any source, tightens the wrappings (a value you can read now). Relabel Study as a downtime action.

## D. Mythology reflavored into the setting

| Was | Becomes | Source |
|-----|---------|--------|
| Norse valkyrie | Celestial of the Army of the Blue Star | 3_gazetteer, History |
| Elder Futhark runes | Delenith crystal facets | 3_gazetteer, History |
| Cadmus and the Spartoi | Teeth of Ovelek the Gray Worm | 3_gazetteer, History |
| Egyptian mummy rites | Queen Sett's dead-keepers | 5_the_cliffs_of_the_dead; 12_the_deadlands |
| Telephus and Achilles' spear | A Blood Spear's weapon | 11_the_doorish_hills |
| Generic fairy | Fey of the Arch of Flowers | 11_the_doorish_hills |
| Witch poppet | Sisters of Dusk's stitchwork | 11_the_doorish_hills |

## E. Origin spread after changes (24 found cards)

- Upper city: Forgotten Key, Hourglass, Mirror, Oath-Band, Kettle Plate, Seven-Leaf Bracelet, Ledger, Valkyrie's Feather (Cliffs).
- Lower Reaches: Unpaid Favor, Tally-Stick.
- Doorish Hills: Fairy Jar, Pitch-Sap Harness, Hexing Needles, Rusted Spear (Averost).
- Deadlands: Black Lotus, Binding Linens, Rune Fragment (Delenith).
- Revlend Marshes: Tide-Coat, Drowning Scale (suggested), Rusted Spear refill.
- Worlds beyond the arches: Derelict Harpoon (Drendaan), Hellhide (Irax), Apology Blade (Terrache).
- Axe of Nine Eyes keeps its Golden Order and Archkeeper records origin. Sown Teeth comes from the city's deep history.

## F. Still needed

- The Drowning Scale homebrew document.
- Your ruling on Drowning Scale's death trigger (it refills on deaths, which the audit checklist calls a kill-steal incentive, while the spec calls the card best-in-class).
- The original statuses and notes, if you still have the 44-card JSON. If you send it, I will merge them and re-check this list.

## Decision

Approve this plan, or tell me which calls to change. Nothing is edited until you say go.
