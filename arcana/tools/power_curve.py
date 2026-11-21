#!/usr/bin/env python3
"""Power-curve scores behind analysis/power_curve.md: deck summary, then the card table (--table)."""
import sys, collections
R = {
 # id: (shape, [L1,L5,L10,L15,L20], C?)
 "class_berserker":("flat",[2,2,2,2,1],0),
 "class_cheat":("falls",[2,1.5,1,1,1],0),
 "class_commander":("flat",[3,3,3,3,3],0),
 "class_hunter":("flat",[2,2,2,2,2],0),
 "class_mage":("falls",[2,2,2,1.5,1],0),
 "class_oathsworn":("rises",[2,2,3,3,3],1),
 "class_shadowmancer":("flat",[1,2,2,2,1],0),
 "class_shepherd":("rises",[1,1.5,2,2,2],0),
 "class_songweaver":("falls",[1,1,1,0.5,0.5],0),
 "class_stormshifter":("rises",[2,2,2.5,3,3],0),
 "class_zephyr":("rises",[1.5,2,3,3,3],0),
 "forgotten_key":("story",[3,3,3,3,3],1),
 "drowning_scale":("rises",[2,2,3,3,3],0),
 "axe_of_nine_eyes":("story",[3,3,3,3,3],1),
 "hourglass_of_borrowed_time":("flat",[2,2,2,2.5,2.5],0),
 "black_lotus_case":("falls",[2,2,2,1.5,1.5],0),
 "oath_band":("falls",[1,1,1,1,0.5],0),
 "unpaid_favor":("flat",[2,2,2,2,2],0),
 "valkyries_feather":("falls",[2,2,1.5,1,1],0),
 "tide_coat":("falls",[1.5,1,1,0.5,0.5],0),
 "pitch_sap_harness":("falls",[1.5,1,1,1,1],0),
 "hellhide":("falls",[3,2.5,2,2,2],0),
 "kettle_plate":("falls",[3,2.5,2,1.5,1],0),
 "fairy_jar":("flat",[3,3,3,3,3],0),
 "seven_leaf_bracelet":("story",[1,1,1,1,1],0),
 "hexing_needles":("rises",[3,3,3,3.5,3.5],0),
 "bear_lodge_horn":("falls",[3,3,2,2,1.5],0),
 "arch_watch_mirror":("story",[2,2,2,2,2],1),
 "apology_blade":("flat",[1.5,1.5,1.5,1.5,1.5],0),
 "rune_fragment":("rises",[1.5,2,2.5,3,3],0),
 "binding_linens":("flat",[1,1,1,1,1],0),
 "rusted_spear":("flat",[2.5,2.5,2.5,2.5,2.5],0),
 "derelict_harpoon":("flat",[1,1,1,1,1],0),
 "provenance_ledger":("story",[2,2,2,2,2],0),
 "tally_stick":("story",[2,2,2,2,2],0),
 "gate_chain":("flat",[2,2,2,2,2],0),
 "sown_teeth":("falls",[3,2.5,2,1.5,1],0),
 "hen_legs_hut":("story",[3,3,3,2.5,2.5],1),
 "crafters_codex":("falls",[1,1,1,0.5,0.5],0),
 # upload-only
 "envious_torque":("rises",[2,2,3,3,3.5],0),
 "bloodbound_bands":("rises",[1,1.5,2,2,2],0),
 "key_of_inquiry":("story",[3,3,3,3,3],1),
 "mask_of_the_many":("story",[3,3,3,3,3],1),
 "paper_robe":("flat",[2,2,2,2,2],0),
 "liars_coat":("flat",[1.5,1.5,1.5,1.5,1.5],0),
 "quantum_brooch":("flat",[1,1,1,1,1],0),
 "mortal_coil":("flat",[4,4,4,4,4],0),
}
lab={0.5:"U−",1:"U",1.5:"U/R",2:"R",2.5:"R/VR",3:"VR",3.5:"VR/L",4:"L"}
why={
"class_berserker":"Echo Strike's Fury Die grows with the class (d4 to d12); Death's Door is redundant once Deep Rage arrives at 18.",
"class_cheat":"Fix rerolls only the Primary Die, a shrinking share of damage as bonuses grow.",
"class_commander":"Advantage on every ally's first attack each round is a probability, so it never ages.",
"class_hunter":"Location and a free Slowed: information and control, level-independent.",
"class_mage":"One free Upcast is a fixed step on ever larger spells.",
"class_oathsworn":"Release ignores armor on the radiant dice: worth little before L8, a lot against Heavy armor after.",
"class_shadowmancer":"Margin needs Pilfered Power (L2) and has no tier left above the cap late; Read the Contract never ages.",
"class_shepherd":"Chain Heal moves excess healing, and healing grows with level.",
"class_songweaver":"One Inspiration back from a pool of 2×WIL that grows.",
"class_stormshifter":"Casting in beast form gets better as the spells do.",
"class_zephyr":"+LVL damage and armor-ignore: weak at L1, strongest from L8 when Heavy armor appears. The Wound price never rises.",
"forgotten_key":"Route control: campaign-shaping at any level.",
"drowning_scale":"Incapacitated makes melee hits crit, and crits ignore armor, so Choke gains from L3 and again from L8.",
"axe_of_nine_eyes":"Named is permanent tracking (C); Dazed costs a monster 1 of its 2-3 attacks from L5, so Speak the Name fades.",
"hourglass_of_borrowed_time":"A reroll is a probability; late, it can reroll the tens die of a d66 or d88.",
"black_lotus_case":"Smoke Step holds; Drowsing Pollen's 'level 5 or lower' goes dead around L7.",
"oath_band":"+1 to +3 max HP vanishes against a 100 HP hero; oath advantage holds.",
"unpaid_favor":"An open small impossibility is level-free; the Dazed example fades with multi-attack monsters.",
"valkyries_feather":"Staying at 1 HP buys less when monsters make 2-3 attacks a turn.",
"tide_coat":"Defense 3+DEX+Growth is soon outbought; water breathing holds.",
"pitch_sap_harness":"Rusty Mail Defense (15 gp) on day one; Snare's flat DC holds.",
"hellhide":"Half Plate Defense with no STR at L1; gold buys it by L5. Spell immunity, if rolled, grows with enemy casters.",
"kettle_plate":"Full Plate (2,000 gp) at L1 and a free 1d8+DEX shot; the shot does nothing to Medium armor (L3+).",
"fairy_jar":"Smash gives +1 to a stat for good, the same size as each Key Stat Increase, so it never ages.",
"seven_leaf_bracelet":"Seven uses of utility; casters replicate it later.",
"hexing_needles":"No-save disadvantage on a boss's attacks matters more as bosses do.",
"bear_lodge_horn":"Bears roll d10 at L1, a die enemy minions only get at L10; Medium armor (−10 a hit) wipes them out from L3 unless their attack is combined.",
"arch_watch_mirror":"Route intelligence; level-free.",
"apology_blade":"Knockback and ranged disadvantage hold; nothing scales.",
"rune_fragment":"Grows with fragments found, not levels; Eihwaz (level+STR) scales.",
"binding_linens":"Stops Wounds from damage; same value at every level.",
"rusted_spear":"The armed hit takes a third of a Legendary's max HP, so it scales by definition.",
"derelict_harpoon":"Pull and Prone hold; 1d6+STR fades.",
"provenance_ledger":"Information; level-free.",
"tally_stick":"Social control and information; level-free.",
"gate_chain":"Taunt at a flat DC and a free Defend: action economy, which holds.",
"sown_teeth":"As the Horn, and finite, so most teeth are spent while they are strong.",
"hen_legs_hut":"Safe Rest anywhere and fast travel are campaign-shaping; Teleport (tier 6) catches Run late; Stamp's 2d6 fades.",
"crafters_codex":"Double sale price matters less as gold piles up.",
"envious_torque":"Echoes or halves damage up to 2×LVL: grows with monster damage. Envy rarely fills (needs a higher-level foe).",
"bloodbound_bands":"Shared Hit Dice grow; the 1-damage tax shrinks.",
"key_of_inquiry":"Three true answers, or 30 minutes erased: ends mystery episodes at any level.",
"mask_of_the_many":"A perfect, indefinite disguise: ends infiltration episodes at any level.",
"paper_robe":"Bypasses any door or bars; the 3d6 misfire becomes trivial.",
"liars_coat":"Escape teleport after damage; flat.",
"quantum_brooch":"Remote storage; flat utility.",
"mortal_coil":"A fourth action every turn is +33% of everything a hero does, at every level.",
}
LV = [1, 5, 10, 15, 20]
EXP = [0.5, 1.5, 2.5, 3.5, 4.0]  # core band expected at that level

if "--table" in sys.argv:
    print("| Card | Shape | L1 | L5 | L10 | L15 | L20 | Why |\n|---|---|---|---|---|---|---|---|")
    for k, (s, v, c) in R.items():
        print(f"| {k}{' (C)' if c else ''} | {s} | " + " | ".join(lab[x] for x in v) + f" | {why[k]} |")
    sys.exit()
for i, l in enumerate(LV):
    v = [r[1][i] for r in R.values()]
    above = sum(x > EXP[i] + 0.25 for x in v); on = sum(abs(x - EXP[i]) <= 0.25 for x in v)
    print(f"L{l:<3} expected {EXP[i]:.1f}  deck mean {sum(v)/len(v):.2f}  above {above:2} on {on:2} below {len(v)-above-on:2}")
for s in ("falls", "flat", "rises", "story"):
    ids = [k for k, r in R.items() if r[0] == s]
    print(s, len(ids), " ".join(f"{sum(R[k][1][i] for k in ids)/len(ids):.2f}" for i in range(5)))
