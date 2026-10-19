#!/usr/bin/env python3
"""Rebuild data/sejr_arcana.json from the uploaded sources.

Sources:
  sources/class_arcana_v3.docx            11 class arcana
  sources/sejr_arcana_perchance_original.txt   25 found arcana (arcana_data object)

The original working JSON (44 cards, statuses, notes) was not available, so every
card starts as status "review". The matrix block is hand-classified (see META).
Run once; later edits happen in the JSON directly.
"""
import json, re, subprocess, zipfile, html, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CLASSES = ["BERSERKER", "CHEAT", "COMMANDER", "HUNTER", "MAGE", "OATHSWORN",
           "SHADOWMANCER", "SHEPHERD", "SONGWEAVER", "STORMSHIFTER", "ZEPHYR"]


def slug(name):
    s = re.sub(r"[^a-z0-9]+", "_", name.lower().replace("'", "")).strip("_")
    return re.sub(r"^the_", "", s)


def sentences(text):
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z])", text.strip())
    return [p.strip() for p in parts if p.strip()]


def class_cards():
    z = zipfile.ZipFile(ROOT / "sources/class_arcana_v3.docx")
    x = z.read("word/document.xml").decode()
    x = re.sub(r"</w:p>", "\n", x)
    x = html.unescape(re.sub(r"<[^>]+>", "", x))
    lines = [l.strip() for l in x.split("\n")]
    lines = [l for l in lines if l and not re.fullmatch(r"\d+", l)]
    idx = {}
    for i, l in enumerate(lines):
        if l in CLASSES and l not in idx:
            idx[l] = i
    order = sorted(idx.items(), key=lambda kv: kv[1])
    cards = []
    for n, (cls, start) in enumerate(order):
        end = order[n + 1][1] if n + 1 < len(order) else len(lines)
        blk = lines[start + 1:end]
        name = blk[0]

        def section(head, stops):
            out, on = [], False
            for l in blk[1:]:
                if not on and (l == head or l.startswith(head)):
                    on = True
                    if l != head:
                        out.append(l[len(head):].strip(" :"))
                    continue
                if on and any(l == s or l.startswith(s) for s in stops):
                    break
                if on:
                    out.append(l)
            return out

        obj_lines = []
        for l in blk[1:]:
            if l == "Unlock":
                break
            obj_lines.append(l)
        unlock = section("Unlock", ["Resource"])
        res_head = next(l for l in blk if l.startswith("Resource"))
        m = re.match(r"Resource\s*[—-]\s*(.+?) \((.+)\)$", res_head)
        rname, rtype = m.group(1), m.group(2)
        mx = re.search(r"max (\d+)", rtype)
        res_body = section(res_head, ["Powers"])
        powers = section("Powers", ["Escalation"])
        esc = section("Escalation", ["Design note"])
        note = section("Design note", [])
        cards.append({
            "id": "class_" + cls.lower(),
            "name": name,
            "kind": "class",
            "class": cls.title(),
            "tier": "1st echelon",
            "object": " ".join(obj_lines),
            "unlock": sentences(" ".join(unlock)),
            "risk": "",
            "resource": {"name": rname, "type": rtype.split(",")[0].strip(),
                         "max": int(mx.group(1)) if mx else None,
                         "text": " ".join(res_body)},
            "powers": powers,
            "escalation": " ".join(esc),
            "design_note": " ".join(note),
        })
    return cards


def found_cards():
    src = (ROOT / "sources/sejr_arcana_perchance_original.txt").read_text()
    m = re.search(r"arcana_data\(\) =>\s*return (\{.*?\n  \});", src, re.S)
    js = "const o=" + m.group(1) + ";console.log(JSON.stringify(o));"
    raw = json.loads(subprocess.check_output(["node", "-e", js]))
    cards = []
    for name, c in raw.items():
        rm = re.match(r"([^(]+?) \(([^)]*)\)\.?\s*(.*)", c["res"]) if c["res"] else None
        cards.append({
            "id": slug(name),
            "name": name,
            "kind": "found",
            "class": None,
            "tier": c["tier"],
            "object": c["obj"],
            "unlock": c["unlock"],
            "risk": c["risk"],
            "resource": {"name": rm.group(1).strip() if rm else "",
                         "type": "", "max": None, "text": c["res"]},
            "powers": [c["power"]] if c["power"] else [],
            "escalation": c["esc"],
        })
    return cards


def main():
    cards = class_cards() + found_cards()
    meta = json.loads((ROOT / "tools/matrix_meta.json").read_text())
    for c in cards:
        c["status"] = "review"
        c["notes"] = ("Rebuilt from uploaded sources; original status and notes were "
                      "not available.")
        c["source"] = ("sources/class_arcana_v3.docx" if c["kind"] == "class"
                       else "sources/sejr_arcana_perchance_original.txt")
        c["matrix"] = meta[c["id"]]
        r = c["resource"]
        r["type"] = c["matrix"]["resource_type"]
        r["max"] = c["matrix"].get("max", r["max"])
    out = ROOT / "data/sejr_arcana.json"
    out.write_text(json.dumps(cards, indent=2, ensure_ascii=False) + "\n")
    print(len(cards), "cards written")


if __name__ == "__main__":
    main()
