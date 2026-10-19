#!/usr/bin/env python3
"""Audit data/sejr_arcana.json against spec/arcana_design_spec.md.

Checks, per card (cut cards are skipped):
  parts       all five parts present (object, unlock + risk, resource, powers, escalation)
  one_res     one resource with a name, a type and a stated clearing rule
  refill      the refill names a world action, never a rest or a passive trigger alone
  powers      at least one power spends the resource, at least one is free or passive
  banned_words  no kill / slay / reduce-to-0 in a resource line
  style       no em dash, en dash, "it's not", or "charges"
  risk_mech   the unlock risk has a mechanic: a roll, save, check, clock, Wound or stated loss (Stonetop
              unlocks name a hazard, not a mood)
  rules_terms no capitalized term outside a vocabulary built from rules/, setting/ and the
              cards' own names (resources, powers, items); plus a list of known-wrong terms

Exceptions live in tools/audit_exceptions.json as {"card_id": {"check": "reason"}}.
Exit status 1 if any check fails without an exception.
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CARDS = json.loads((ROOT / "data/sejr_arcana.json").read_text())
EXC_PATH = ROOT / "tools/audit_exceptions.json"
EXC = json.loads(EXC_PATH.read_text()) if EXC_PATH.exists() else {}

WORLD_ACTIONS = (
    r"tell|told|ring|carry|carried|return|leave|offer|swear|sworn|perform|play|splice|seed|bury|prepare|"
    r"pry|glue|stoke|carve|broker|write|written|hold the lens|hold the glass|vigil|game of chance|"
    r"confront|answer|record|signed|sign it|fulfil|brought|bring|draw|drawn|settle|given|gives you|"
    r"collect|spend an hour|spend hours|hours you spend|each hour|hour you spend|re-hang|coil|pour|feed|hunt|"
    r"forge coal|draw a creature|apologi|accepts your apology|keeps a full night|carry out|a favor|back to its stone"
)
BANNED_RES = [r"\bkill(s|ed|ing)?\b", r"\bslay\b|\bslain\b", r"reduc\w+ to 0\b"]
STYLE = [(r"—", "em dash"), (r"–", "en dash"), (r"\bit'?s not\b|\bit is not\b", "\"it's not\" pattern"),
         (r"\bcharges?\b", "'charges'")]
WRONG_TERMS = [(r"\bArmor \d", "hero armor value (use Defense)"), (r"\bAC\b", "AC"),
               (r"\bLV\b", "LV (use level)"), (r"Enduring Wounds", "Enduring Wounds (not in rules)"),
               (r"\bhit points\b", "hit points (use HP)")]
FIELDS = ["object", "risk", "escalation", "design_note"]


def text_of(c):
    parts = [c["object"], *c["unlock"], c["risk"], c["resource"]["text"], *c["powers"], c["escalation"],
             c.get("design_note", "")]
    return [p for p in parts if p]


def build_vocab():
    words = set()
    srcs = list((ROOT / "rules").rglob("*.txt")) + list((ROOT / "setting").glob("*.md"))
    for p in srcs:
        for w in re.findall(r"[A-Za-z][A-Za-z'’-]*", p.read_text(errors="ignore")):
            words.add(w.lower().replace("’", "'"))
    own = {"escalation", "unlock", "resource", "powers", "object"}
    for c in CARDS:
        for s in [c["name"], c["resource"]["name"]] + [re.split(r"[(:]", p)[0] for p in c["powers"]]:
            own.update(w.lower() for w in re.findall(r"[A-Za-z][A-Za-z'’-]*", s))
    return words, own


VOCAB, OWN = build_vocab()


def caps_outside_vocab(s):
    bad = set()
    for sent in re.split(r"(?<=[.!?:;])\s+|\n", s):
        toks = re.findall(r"\b[A-Za-z][A-Za-z'’]*\b", sent)
        for t in toks[1:]:
            if t[0].isupper():
                k = t.lower().replace("’", "'")
                base = k[:-2] if k.endswith("'s") else (k[:-1] if k.endswith("s") else k)
                if k not in VOCAB and k not in OWN and base not in VOCAB and base not in OWN:
                    bad.add(t)
    return bad


def check(c):
    r = c["resource"]
    out = {}
    miss = [k for k, v in [("object", c["object"]), ("unlock", c["unlock"]), ("risk", c["risk"]),
                           ("resource", r["text"]), ("powers", c["powers"]), ("escalation", c["escalation"])]
            if not v]
    out["parts"] = f"missing: {', '.join(miss)}" if miss else None

    rk = c["risk"]
    out["risk_mech"] = None if re.search(r"\d*d\d+\b|\bDC \d+|\bsave\b|\bcheck\b|\broll|\bclock\b|\bWound|\blose\b|\bacts first\b|\d in \d+|will not wake|won't|cannot|can't|binds|until you|ruined|disadvantage", rk, re.I) else "risk is story only: add a roll, save, clock or stated loss"

    n_types = len(re.findall(r"\((pip tracker|d6 vs\. accumulation|toggle|finite|Wound-cost|session-bound)", r["text"]))
    has_clear = re.search(r"\bclears?\b|never (comes back|returns|refills)|returns? only|nothing refills|heal(s)? (as|only|by)|"
                          r"lost when|goes dark|relights|expire|turns off|lose \d|never adds", r["text"], re.I)
    probs = []
    if not r["name"]:
        probs.append("no resource name")
    if n_types != 1:
        probs.append(f"{n_types} resource declarations")
    if not has_clear:
        probs.append("no clearing rule")
    out["one_res"] = "; ".join(probs) or None

    typ = r["type"]
    rt = r["text"]
    if typ in ("finite never-refill",):
        out["refill"] = None if re.search(r"never|nothing refills", rt, re.I) else "finite resource lacks a 'never refills' statement"
    elif typ == "Wound-cost":
        out["refill"] = None
    else:
        p = []
        rest = re.search(r"(clears?|regain|returns?|refill)[^.]*\b(Safe Rest|Field Rest|a rest|dawn|per episode|every episode|each session)",
                         rt, re.I)
        neg = re.search(r"(does not|do not|never|no)[^.]*(rest|refill)|rest(s)? (does|do) not|Safe Rest does not", rt, re.I)
        if rest and not neg:
            p.append("refill tied to a rest or passive timer")
        if "once per episode" in rt.lower() or re.search(r"each dawn", rt, re.I):
            p.append("passive timer in resource line")
        if not re.search(WORLD_ACTIONS, rt, re.I):
            p.append("no world action named in the refill")
        out["refill"] = "; ".join(p) or None

    heads = [re.split(r"\s*:\s", p, maxsplit=1)[0] for p in c["powers"]]
    spends = any(re.search(r"spend|\+\d|mark \d|add (1|one|\d)|remove (1|one|\d)|turn .* on|costs? |Wound|wilt|closes? |Sow|rune", p, re.I) for p in c["powers"]) \
        or typ in ("toggle", "session-bound") and bool(c["powers"])
    free = any(re.search(r"Passive|Free", h) for h in heads)
    pp = []
    if not spends:
        pp.append("no power spends the resource")
    if not free:
        pp.append("no free or passive power")
    out["powers"] = "; ".join(pp) or None

    hits = [b for b in BANNED_RES if re.search(b, rt + " " + r["name"], re.I)]
    out["banned_words"] = f"resource line matches {hits}" if hits else None

    sp = []
    for t in text_of(c) + [c["notes"]]:
        for pat, label in STYLE:
            if re.search(pat, t, re.I):
                sp.append(label)
    out["style"] = ", ".join(sorted(set(sp))) or None

    tp = []
    for t in text_of(c):
        for pat, label in WRONG_TERMS:
            if re.search(pat, t):
                tp.append(label)
        tp += ["'" + w + "'" for w in sorted(caps_outside_vocab(t))]
    out["rules_terms"] = ", ".join(sorted(set(tp))) or None
    return out


def main():
    active = [c for c in CARDS if c["status"] != "cut"]
    failed = excepted = 0
    names = {}
    for c in active:
        names.setdefault(c["resource"]["name"], []).append(c["id"])
    for c in active:
        res = check(c)
        lines = []
        for k, v in res.items():
            if v:
                reason = EXC.get(c["id"], {}).get(k)
                if reason:
                    excepted += 1
                    lines.append(f"    left  {k}: {v}\n          reason: {reason}")
                else:
                    failed += 1
                    lines.append(f"    FAIL  {k}: {v}")
        if lines:
            print(f"{c['id']} ({c['name']})\n" + "\n".join(lines))
    dup = {k: v for k, v in names.items() if k and len(v) > 1}
    for k, v in dup.items():
        reason = EXC.get("_duplicates", {}).get(k)
        if reason:
            excepted += 1
            print(f"duplicate resource name '{k}': {v}\n    left  reason: {reason}")
        else:
            failed += 1
            print(f"FAIL  duplicate resource name '{k}': {v}")
    print(f"\n{len(active)} cards audited, {failed} failing checks, {excepted} left with a reason.")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
