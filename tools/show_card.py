#!/usr/bin/env python3
"""Print one card from data/sejr_arcana.json in the five-part format."""
import json, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
cards = json.loads((ROOT / "data/sejr_arcana.json").read_text())
c = next(x for x in cards if x["id"] == sys.argv[1])
r = c["resource"]
print(f"{c['name'].upper()}  [{c['id']}, {c['tier']}, status: {c['status']}]\n")
print("OBJECT\n" + c["object"] + "\n")
print("UNLOCK")
for u in c["unlock"]:
    print("- " + u)
if c["risk"]:
    print("Risk: " + c["risk"])
print(f"\nRESOURCE: {r['name']} ({r['type']}" + (f", max {r['max']}" if r.get("max") else "") + ")\n" + r["text"] + "\n")
print("POWERS")
for p in c["powers"]:
    print("- " + p)
print("\nESCALATION\n" + c["escalation"])
if c.get("design_note"):
    print("\nDesign note: " + c["design_note"])
print("\nNotes: " + c["notes"])
