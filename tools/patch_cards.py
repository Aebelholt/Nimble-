"""Helper for Step 3 patches: load, update cards by id, scrub em dashes, save."""
import json, pathlib, re
ROOT = pathlib.Path(__file__).resolve().parent.parent
P = ROOT / "data/sejr_arcana.json"

def scrub(v):
    if isinstance(v, str):
        return v.replace(" — ", ", ").replace("—", ", ").replace("–", "-")
    if isinstance(v, list):
        return [scrub(x) for x in v]
    if isinstance(v, dict):
        return {k: scrub(x) for k, x in v.items()}
    return v

def apply(updates):
    d = json.loads(P.read_text())
    byid = {c["id"]: c for c in d}
    for cid, u in updates.items():
        c = byid[cid]
        mat = u.pop("matrix", {})
        for k, v in u.items():
            c[k] = scrub(v)
        c["matrix"].update(mat)
        c["status"] = "keep"
    P.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")

def res(name, rtype, mx, text):
    return {"name": name, "type": rtype, "max": mx, "text": text}
