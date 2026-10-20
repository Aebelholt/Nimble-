#!/usr/bin/env python3
"""Write the cards-only blind audit files from the current deck.

analysis/blind_audit_cards.md is section 6 of analysis/blind_audit_prompt.md (run
tools/export_blind_audit.py first); analysis/blind_audit_cards.json is the same cards as data.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
KEYS = ["id", "name", "kind", "class", "tier", "pool", "object", "unlock", "risk", "resource", "powers", "escalation", "escalation_table", "legacy_slot"]
cards = [c for c in json.loads((ROOT / "data/sejr_arcana.json").read_text()) if c["status"] != "cut"]
cards.sort(key=lambda c: c["kind"] != "class")
prompt = (ROOT / "analysis/blind_audit_prompt.md").read_text()
body = prompt.split("\n## 6. The cards\n", 1)[1].split("\n## 7. ", 1)[0].strip("\n")
body = body.replace("Class arcana first, then found arcana. Each class arcanum belongs to the class named.", "Class arcana first, then found arcana. No notes or prior review included.", 1)
head = f"# Sejr arcana: {len(cards)} cards for blind audit\n\n"
(ROOT / "analysis/blind_audit_cards.md").write_text(head + body + "\n")
(ROOT / "analysis/blind_audit_cards.json").write_text(json.dumps([{k: c[k] for k in KEYS if c.get(k) is not None} for c in cards], indent=2, ensure_ascii=False) + "\n")
print("analysis/blind_audit_cards.md, .json:", len(cards), "cards")
