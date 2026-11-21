# Power curve: Sejr arcana, levels 1-20

Scope: the 39 active cards in `data/sejr_arcana.json`, plus the 8 cards that exist only in the original 44-card JSON (`../reference/sources/sejr_arcana_original_44.json`) (Envious Torque, Bloodbound Bands, Key of Inquiry, Mask of the Many, Paper Robe, Liar's Coat, Quantum Brooch, Mortal Coil), rated as written there. Yardsticks: the GM Guide 3.0 (Monster Builder, Legendary Monster Builder, minions, armor) and the core rules (rarity bands, HP, DCs). Scores and the card table come from `tools/power_curve.py` (`--table` prints the table).

## Headline

**The deck is flat; the game is not.** Averaged over all 47 cards, arcana sit at about Rare at every level (mean 2.0 on U=1, R=2, VR=3, L=4). The core rarity bands climb from nothing at level 1 to Legendary at level 20. The lines cross around **level 8-10**.

| Level | Core band expected | Deck mean | Cards above band | On band | Below band |
|---|---|---|---|---|---|
| 1 | below Uncommon | 2.0 | 47 | 0 | 0 |
| 5 | Uncommon-Rare | 2.0 | 33 | 5 | 9 |
| 10 | Rare-Very Rare | 2.1 | 13 | 3 | 31 |
| 15 | Very Rare-Legendary | 2.0 | 1 | 1 | 45 |
| 20 | Legendary | 1.95 | 0 | 1 | 46 |

With milestone levels every two to three episodes, level 10 lands around episodes 20-27: about six months of weekly play. The "stronger than standard items" promise holds for the first half-year and then quietly expires, unless the GM keeps adding power some other way. The campaign-shaping cards (marked C) are the exception: their value is not measured in bands, and they keep shaping episodes at any level.

## Why: four mechanisms in the GM Guide

1. **Flat numbers lose to monster growth.** A same-level monster has 21 HP at L1, 64 at L5, 126 at L10, 202 at L15, 292 at L20. Its damage per round runs 7, 20, 37, 52, 68. Hero HP (a d8 class) runs 13, 33, 58, 83, 108. A fixed 2d6 (the Hut's Stamp) is a third of a level-1 monster and 2% of a level-20 one. Defense 18 (Kettle Plate) absorbs all of a level-1 monster's round, half at L10 and a quarter at L20. That is true of bought armor too; the card's real edge is price and STR, and gold erodes both.
2. **Armor zeroes small hits.** Medium Armor (−10 per attack) arrives from level 3, Heavy (−20) from level 8; crits ignore it. Every flat-damage arcanum dies here: the Kettle crossbow and blade, the Harpoon, Stamp, and above all **minions, which cannot crit**. A Horn bear's d10 averages 5.5, which is 0 against Medium Armor. Even at d20, a bear does about 2.75 a hit against Medium and 0 against Heavy. The cards that ignore armor (Zephyr's Study the Form, the Verdict's Release, and Choke, whose Incapacitated makes melee hits crit) climb at exactly these levels.
3. **Fixed DCs do not decay against ordinary monsters.** Monsters roll a flat 1d20 on saves at every level, so DC 13 fails 60% of the time at L1 and at L20. Only advantaged saves bite: a "Solo creatures save with advantage" card drops to about 36%, and a Legendary with ++ saves to about 22%. Hero DCs (10+KEY) rise from about 13 to 18, so card DCs fall behind class DCs, but keep working. Control cards are the deck's most durable combat value.
4. **Actions denied are worth less as monsters gain attacks.** Monsters make two attacks from level 2 and three from level 5. Dazed costs a monster its move or one attack, so Speak the Name and Call In's Dazed go from a whole turn at L1 to a third of one by L5.

Two front-loaded designs stand out:
- **Hero minions are nine levels ahead of the GM Guide.** The Guide gives enemy minions d4 at levels 1-3, d6 at 2-5, d8 at 4-10, d10 at 10-13, d12 at 12-17 and d20 at 15-20. The Horn and Sown Teeth roll d10 from level 1, d12 from 5 and d20 from 9: three bears deal about 79% of a level-1 monster's HP per round. The two curves only meet at level 15, but armor (point 2) cuts them off long before.
- **Class arcana are all 1st echelon, and nothing follows.** The spec's echelon table (2nd at 5-8, 3rd at 9-12, 4th at 13+) has no cards behind it. The only card shaped like a 4th-echelon item is the Mortal Coil, which is not in the deck.

## Shapes

| Shape | Cards | Mean at L1 / 5 / 10 / 15 / 20 | What drives it |
|---|---|---|---|
| Falls | 13 | 2.0 / 1.8 / 1.5 / 1.2 / 1.0 | Flat Defense, flat damage, minion dice, small HP bonuses |
| Flat | 16 | 2.0 / 2.0 / 2.0 / 2.1 / 1.9 | Conditions, action economy, rerolls, anti-death |
| Rises | 9 | 1.8 / 2.0 / 2.7 / 2.8 / 2.9 | Level-scaled numbers, armor-ignore, scaling with healing or damage |
| Story | 9 | 2.4 / 2.4 / 2.4 / 2.4 / 2.4 | Routes, information, logistics, disguise (most are C) |

The draw pool's strongest level-1 cards (Kettle Plate, Hellhide, Bear-Lodge Horn, Sown Teeth) are all in **Falls**. A hero who draws one dominates the first arc and is ordinary by the third. A hero who draws a **Rises** card (Zephyr, Drowning Scale, Hexing Needles, Rusted Spear's armed hit) has the opposite arc. Late in the campaign, **Story** cards decide what episodes are about: the Forgotten Key, Mirror, Hut, Axe, and from the upload the Key of Inquiry and the Mask of the Many.

## Card by card

Ratings are absolute power at that level, in core bands (U, R, VR, L; "U/R" is between). C marks campaign-shaping cards, whose value sits outside the bands.

| Card | Shape | L1 | L5 | L10 | L15 | L20 | Why |
|---|---|---|---|---|---|---|---|
| class_berserker | flat | R | R | R | R | U | Echo Strike's Fury Die grows with the class (d4 to d12); Death's Door is redundant once Deep Rage arrives at 18. |
| class_cheat | falls | R | U/R | U | U | U | Fix rerolls only the Primary Die, a shrinking share of damage as bonuses grow. |
| class_commander | flat | VR | VR | VR | VR | VR | Advantage on every ally's first attack each round is a probability, so it never ages. |
| class_hunter | flat | R | R | R | R | R | Location and a free Slowed: information and control, level-independent. |
| class_mage | falls | R | R | R | U/R | U | One free Upcast is a fixed step on ever larger spells. |
| class_oathsworn (C) | rises | R | R | VR | VR | VR | Release ignores armor on the radiant dice: worth little before L8, a lot against Heavy armor after. |
| class_shadowmancer | flat | U | R | R | R | U | Margin needs Pilfered Power (L2) and has no tier left above the cap late; Read the Contract never ages. |
| class_shepherd | rises | U | U/R | R | R | R | Chain Heal moves excess healing, and healing grows with level. |
| class_songweaver | falls | U | U | U | U− | U− | One Inspiration back from a pool of 2×WIL that grows. |
| class_stormshifter | rises | R | R | R/VR | VR | VR | Casting in beast form gets better as the spells do. |
| class_zephyr | rises | U/R | R | VR | VR | VR | +LVL damage and armor-ignore: weak at L1, strongest from L8 when Heavy armor appears. The Wound price never rises. |
| forgotten_key (C) | story | VR | VR | VR | VR | VR | Route control: campaign-shaping at any level. |
| drowning_scale | rises | R | R | VR | VR | VR | Incapacitated makes melee hits crit, and crits ignore armor, so Choke gains from L3 and again from L8. |
| axe_of_nine_eyes (C) | story | VR | VR | VR | VR | VR | Named is permanent tracking (C); Dazed costs a monster 1 of its 2-3 attacks from L5, so Speak the Name fades. |
| hourglass_of_borrowed_time | flat | R | R | R | R/VR | R/VR | A reroll is a probability; late, it can reroll the tens die of a d66 or d88. |
| black_lotus_case | falls | R | R | R | U/R | U/R | Smoke Step holds; Drowsing Pollen's 'level 5 or lower' goes dead around L7. |
| oath_band | falls | U | U | U | U | U− | +1 to +3 max HP vanishes against a 100 HP hero; oath advantage holds. |
| unpaid_favor | flat | R | R | R | R | R | An open small impossibility is level-free; the Dazed example fades with multi-attack monsters. |
| valkyries_feather | falls | R | R | U/R | U | U | Staying at 1 HP buys less when monsters make 2-3 attacks a turn. |
| tide_coat | falls | U/R | U | U | U− | U− | Defense 3+DEX+Growth is soon outbought; water breathing holds. |
| pitch_sap_harness | falls | U/R | U | U | U | U | Rusty Mail Defense (15 gp) on day one; Snare's flat DC holds. |
| hellhide | falls | VR | R/VR | R | R | R | Half Plate Defense with no STR at L1; gold buys it by L5. Spell immunity, if rolled, grows with enemy casters. |
| kettle_plate | falls | VR | R/VR | R | U/R | U | Full Plate (2,000 gp) at L1 and a free 1d8+DEX shot; the shot does nothing to Medium armor (L3+). |
| fairy_jar | flat | VR | VR | VR | VR | VR | Smash gives +1 to a stat for good, the same size as each Key Stat Increase, so it never ages. |
| seven_leaf_bracelet | story | U | U | U | U | U | Seven uses of utility; casters replicate it later. |
| hexing_needles | rises | VR | VR | VR | VR/L | VR/L | No-save disadvantage on a boss's attacks matters more as bosses do. |
| bear_lodge_horn | falls | VR | VR | R | R | U/R | Bears roll d10 at L1, a die enemy minions only get at L10; Medium armor (−10 a hit) wipes them out from L3 unless their attack is combined. |
| arch_watch_mirror (C) | story | R | R | R | R | R | Route intelligence; level-free. |
| apology_blade | flat | U/R | U/R | U/R | U/R | U/R | Knockback and ranged disadvantage hold; nothing scales. |
| rune_fragment | rises | U/R | R | R/VR | VR | VR | Grows with fragments found, not levels; Eihwaz (level+STR) scales. |
| binding_linens | flat | U | U | U | U | U | Stops Wounds from damage; same value at every level. |
| rusted_spear | flat | R/VR | R/VR | R/VR | R/VR | R/VR | The armed hit takes a third of a Legendary's max HP, so it scales by definition. |
| derelict_harpoon | flat | U | U | U | U | U | Pull and Prone hold; 1d6+STR fades. |
| provenance_ledger | story | R | R | R | R | R | Information; level-free. |
| tally_stick | story | R | R | R | R | R | Social control and information; level-free. |
| gate_chain | flat | R | R | R | R | R | Taunt at a flat DC and a free Defend: action economy, which holds. |
| sown_teeth | falls | VR | R/VR | R | U/R | U | As the Horn, and finite, so most teeth are spent while they are strong. |
| hen_legs_hut (C) | story | VR | VR | VR | R/VR | R/VR | Safe Rest anywhere and fast travel are campaign-shaping; Teleport (tier 6) catches Run late; Stamp's 2d6 fades. |
| crafters_codex | falls | U | U | U | U− | U− | Double sale price matters less as gold piles up. |
| envious_torque | rises | R | R | VR | VR | VR/L | Echoes or halves damage up to 2×LVL: grows with monster damage. Envy rarely fills (needs a higher-level foe). |
| bloodbound_bands | rises | U | U/R | R | R | R | Shared Hit Dice grow; the 1-damage tax shrinks. |
| key_of_inquiry (C) | story | VR | VR | VR | VR | VR | Three true answers, or 30 minutes erased: ends mystery episodes at any level. |
| mask_of_the_many (C) | story | VR | VR | VR | VR | VR | A perfect, indefinite disguise: ends infiltration episodes at any level. |
| paper_robe | flat | R | R | R | R | R | Bypasses any door or bars; the 3d6 misfire becomes trivial. |
| liars_coat | flat | U/R | U/R | U/R | U/R | U/R | Escape teleport after damage; flat. |
| quantum_brooch | flat | U | U | U | U | U | Remote storage; flat utility. |
| mortal_coil | flat | L | L | L | L | L | A fourth action every turn is +33% of everything a hero does, at every level. |

## The 8 upload-only cards

- **Mortal Coil** is the only card that stays on band at level 20: a fourth action is +33% of everything a hero does. Its one-per-arc gate is right.
- **Key of Inquiry** and **Mask of the Many** are C at every level. The Readings rule covers the Key's answers (true, but maybe pointing at the wrong person); nothing yet covers a perfect, indefinite disguise.
- **Envious Torque** and **Bloodbound Bands** are two of only nine rising cards. The Torque's "proposed cut: heavy combat math" removes one of the few cards that keeps pace with monster damage.
- **Paper Robe, Liar's Coat, Quantum Brooch** are flat utility.
- All eight are in the old format (no mechanical risks, "Armor" for heroes in places, open refills) and would need the same format pass as the rest before joining the deck.

## Options, if you want the curve to bend (not applied)

1. **One shared die step for flat numbers.** The Horn and Teeth already step d10 → d12 (5) → d20 (9). Apply a step to every flat damage number (Stamp, crossbow, blade, Harpoon) and let it continue to L13 and L17.
2. **Rule how hero minions meet armor.** The GM Guide combines enemy minion attacks into one attack against a hero. Saying the same for hero minions against monster armor keeps the Horn and Teeth alive from L3 (three d20 bears: about 31 − 10 against Medium, instead of about 8).
3. **Echelon deepening instead of new cards.** At levels 5, 9 and 13, a second, third and fourth unlock on the card a hero already holds adds a pip, a die step or a new power. This is what the spec's echelon table asks for, and it keeps each hero's arcanum the centre of their story.
4. **Level caps that move.** "Level 5 or lower" (Drowsing Pollen) becomes "level no higher than yours".
5. **Leave the DCs alone.** Flat d20 saves keep them working; only Legendary ++ saves outpace them, which is how bosses should feel.

## Limits

- Ratings are judgement against the core's nine printed items and the GM Guide's tables; Nimble prints no items for levels 1-4 or 15-20 to compare. Confidence: medium on shapes, medium-low on exact bands.
- The deck-mean line treats every card as equally likely to be held. Class arcana and faction rewards arrive later than draws, so the real held curve starts a little lower and falls a little later.
- Minion damage against armor depends on the ruling in option 2; both readings are given.
- The upload's 8 cards are rated as written, unreworked.
- Hero DC assumes KEY +3 at level 1 and +1 at levels 4, 8, 12, 16 and 20.
