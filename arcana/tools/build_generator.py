#!/usr/bin/env python3
"""Write data/sejr_generator_lists.txt: the GM's generator lists panel with the arcana module merged in.

Starts from reference/sources/sejr_generator_lists.txt (the GM's original, left untouched) and:
- removes its old two-card other_arcanum list,
- makes hero() roll the level 1 draw with legacy_arcanum(0) and show the card with arcanum_line(),
- adds the guild option after the Holding line,
- rebuilds the trap results for the agency rule and renames the Gilded Hands,
- appends data/sejr_arcana_perchance.txt (run tools/build_perchance.py first).
Paste the result into the Perchance lists panel in place of the old one.
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
REF = ROOT.parent / "reference"
gen = (REF / "sources/sejr_generator_lists.txt").read_text()
module = (ROOT / "data/sejr_arcana_perchance.txt").read_text()


def swap(text, old, new):
    assert text.count(old) == 1, f"expected exactly one: {old!r}"
    return text.replace(old, new)


# Old list: the comment line, the header, and its indented items.
gen, n = re.subn(r"// Extend with your own arcana;[^\n]*\nother_arcanum\n(?:  [^\n]*\n)+\n?", "", gen)
assert n == 1, "old other_arcanum block not found"

gen = swap(gen, '  let arc = d(6) <= 4 ? "the " + cls + " class arcanum" : other_arcanum.evaluateItem;\n',
           "  let arc = legacy_arcanum(0);\n")
gen = swap(gen, '  b += "<p><b>Arcanum:</b> " + arc + ", unexamined.</p>";\n',
           "  b += arcanum_line(arc);\n")
holding = '  b += "<p><b>Holding:</b> " + holding_place.evaluateItem + ", " + holding_quirk.evaluateItem + ".</p>";\n'
gen = swap(gen, holding, holding + "  b += guild_option(cls);\n")

# Traps follow the agency rule and the Monsters & More trap model: a Perception check spots a hidden
# trap, then a banded DEX save. No result takes a whole turn: Sleep, Paralyze, Unconscious and Petrify
# become Slowed, Restrained, Dazed and a stone hold that an ally can chip off.
gen = swap(gen, "<b>Damage and effect:</b> [trap_damage()]</div>",
           "<b>Damage and effect:</b> [trap_damage()]<br><b>Spot:</b> Perception DC 12, 13 or 14 by tier halts you. "
           "Otherwise DEX save: 1-9 full damage and the effect, 10-14 half, 15+ clear.</div>")
gen = swap(gen, "trap_damage_low\n  1d6\n  1d6, Sleep\n  1d6, Paralyze\n  1d6, Blind\n",
           "trap_damage_low\n  1d6\n  1d6, Slowed until the end of their next turn (drowsing gas)\n"
           "  1d6, Restrained (escape DC 12)\n  1d6, Blinded until the end of their next turn\n")
gen = swap(gen, "trap_damage_mid\n  2d8\n  2d8, Sleep\n  2d8, Paralyze\n  2d8, Confuse\n",
           "trap_damage_mid\n  2d8\n  2d8, Dazed until the end of their next turn (drowsing gas)\n"
           "  2d8, Restrained (escape DC 13)\n  2d8, Confused: the GM spends 1 of their actions next turn\n")
gen = swap(gen, "trap_damage_high\n  3d10\n  3d10, Paralyze\n  3d10, Unconscious\n  3d10, Petrify\n",
           "trap_damage_high\n  3d10\n  3d10, Restrained (escape DC 14)\n"
           "  3d10, Prone and Dazed until the end of their next turn\n"
           "  3d10, turning to stone: Restrained (escape DC 14); an ally can chip it free with an action, for 1d8 damage that ignores armor\n")
gen = swap(gen, "  Sleep-inducing spores\n", "  Drowsing spores\n")
# The campaign's own rival crew replaces the generic name that collided with the Black Hand and the Steel Hands.
gen = swap(gen, "  The Gilded Hands\n", "  The Sterling Scabbards\n")

# The module's hero-edit instructions are done here, so drop that comment block from the merged file.
module = re.sub(r"// =+\n// HERO CARD EDIT.*?(?=\n[^/\n]|\Z)", "", module, flags=re.S)

out = ROOT / "data/sejr_generator_lists.txt"
out.write_text(gen.rstrip("\n") + "\n\n" + module.lstrip("\n"))
print(out, len(out.read_text().splitlines()), "lines")
