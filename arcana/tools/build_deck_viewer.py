#!/usr/bin/env python3
"""Write analysis/deck_viewer.html: a phone-friendly page to browse the deck, the guilds and the table rules.

Data comes from data/sejr_arcana.json, data/sejr_guilds.json and data/sejr_table_rules.md.
Draw faces match tools/build_perchance.py: the regular draw cards in JSON order are faces 1-20,
legacy cards sit at their legacy_slot.
"""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
cards = [c for c in json.loads((ROOT / "data/sejr_arcana.json").read_text()) if c["status"] != "cut"]
guilds = json.loads((ROOT / "data/sejr_guilds.json").read_text())["guilds"]
rules_md = (ROOT / "data/sejr_table_rules.md").read_text()

face = 0
for c in cards:
    if c["kind"] == "found" and c.get("pool", "draw") == "draw" and not c.get("legacy_slot"):
        face += 1
        c["_face"] = face
    elif c.get("legacy_slot"):
        c["_face"] = c["legacy_slot"]

KEEP = ["id", "name", "kind", "class", "tier", "object", "unlock", "risk", "resource", "powers", "escalation", "escalation_table", "pool", "legacy_slot", "_face"]
deck = []
for c in cards:
    x = {k: c[k] for k in KEEP if c.get(k) is not None}
    x["role"] = c.get("matrix", {}).get("power", "")
    x["region"] = c.get("matrix", {}).get("region", "")
    deck.append(x)
deck.sort(key=lambda c: (c["kind"] != "found", c.get("_face") or 99, c["name"]))

# Table rules: "## Heading" sections with "- " bullets.
sections = []
for block in rules_md.split("\n## ")[1:]:
    head, _, body = block.partition("\n")
    items = [re.sub(r"`([^`]+)`", r"\1", l[2:].strip()) for l in body.split("\n") if l.startswith("- ")]
    sections.append({"title": head.strip(), "items": items})

gkeys = ["name", "cls", "hall", "master", "wants", "teeth", "teaches", "keeps", "split", "asks", "gives", "rival"]
by_id = {c["id"]: c["name"] for c in cards}
glist = [dict({k: g[k] for k in gkeys}, arcanum=by_id.get(g["arcanum"], "")) for g in guilds]

data = json.dumps({"deck": deck, "guilds": glist, "rules": sections}, ensure_ascii=False).replace("</", "<\\/")
html = (ROOT / "tools/deck_viewer_template.html").read_text().replace("__DATA__", data)
out = ROOT / "analysis/deck_viewer.html"
out.write_text(html)
print(out, len(deck), "cards,", len(glist), "guilds,", len(sections), "rule sections")
