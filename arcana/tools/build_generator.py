#!/usr/bin/env python3
"""Write data/sejr_generator_lists.txt: the GM's generator lists panel with the arcana module merged in.

Starts from reference/sources/sejr_generator_lists.txt (the GM's original, left untouched) and:
- removes its old two-card other_arcanum list,
- makes hero() roll the level 1 draw with legacy_arcanum(0) and show the card with arcanum_line(),
- adds the guild option after the Holding line,
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

# The module's hero-edit instructions are done here, so drop that comment block from the merged file.
module = re.sub(r"// =+\n// HERO CARD EDIT.*?(?=\n[^/\n]|\Z)", "", module, flags=re.S)

out = ROOT / "data/sejr_generator_lists.txt"
out.write_text(gen.rstrip("\n") + "\n\n" + module.lstrip("\n"))
print(out, len(out.read_text().splitlines()), "lines")
