"""Winter Burrow fight odds: one mouse against one foe, fought to a finish (nobody runs).

Rules as written: attacks always hit; damage off HP, then STR (or DEX for bites "to DEX");
after STR/DEX damage, a save against that stat, fail = beaten / down. At 0 in the stat, beaten.
Initiative: mouse makes a DEX save to act first, unless she has a spear against a biter.
"In its web" = disadvantage on her saves. Set up = her first attack rolls d12.
"""
import random, sys

N = int(sys.argv[1]) if len(sys.argv) > 1 else 50_000

def d(n, rng): return rng.randint(1, n)

def save(stat, rng, dis=False):
    r = d(20, rng)
    if dis: r = max(r, d(20, rng))
    return r <= stat

def fight(m, f, rng, weapon=6, setup=False, spear_first=False, in_web=False):
    hp, st = m["hp"], {"STR": m["STR"], "DEX": m["DEX"]}
    fhp, fstr = f["hp"], f["STR"]
    first = spear_first or save(m["DEX"], rng, in_web)
    turn_m = first
    first_attack = True
    for _ in range(200):
        if turn_m:
            dmg = d(12 if (setup and first_attack) else weapon, rng)
            first_attack = False
            if dmg <= fhp: fhp -= dmg
            else:
                dmg -= fhp; fhp = 0; fstr -= dmg
                if fstr <= 0 or not save(fstr, rng): return "win"
        else:
            dmg = max(0, d(f["bite"], rng) - m.get("armour", 0))
            if dmg <= hp: hp -= dmg
            else:
                dmg -= hp; hp = 0; k = f["to"]; st[k] -= dmg
                if st[k] <= 0 or not save(st[k], rng, in_web): return "down"
        turn_m = not turn_m
    return "draw"

def odds(m, f, **kw):
    rng = random.Random(7)
    w = sum(fight(m, f, rng, **kw) == "win" for _ in range(N))
    return w / N

SOFIE = {"hp": 2, "STR": 9, "DEX": 8}
AVG = {"hp": 4, "STR": 8, "DEX": 8}
TOUGH = {"hp": 6, "STR": 12, "DEX": 12}
FOES = {
    "Web-weaver, in its web": ({"hp": 6, "STR": 8, "bite": 6, "to": "DEX"}, {"in_web": True}),
    "Web-weaver, lured out": ({"hp": 6, "STR": 8, "bite": 6, "to": "DEX"}, {}),
    "One wolf spider": ({"hp": 3, "STR": 6, "bite": 4, "to": "STR"}, {}),
    "Jay (STR 10 assumed)": ({"hp": 4, "STR": 10, "bite": 6, "to": "STR"}, {}),
    "Fox": ({"hp": 15, "STR": 15, "bite": 8, "to": "STR"}, {}),
}
LOADOUTS = [("stick", {"weapon": 6}), ("stick, set up", {"weapon": 6, "setup": True}),
            ("spear", {"weapon": 10, "spear_first": True})]

print(f"N = {N:,}. Chance she beats it, fighting to a finish.\n")
print("| Foe | Mouse | " + " | ".join(n for n, _ in LOADOUTS) + " |")
print("| --- | --- | " + " | ".join("---" for _ in LOADOUTS) + " |")
for fname, (f, fkw) in FOES.items():
    for mname, m in (("Sofie's (HP 2, STR 9, DEX 8)", SOFIE), ("Average (HP 4, STR 8, DEX 8)", AVG), ("Best case (HP 6, STR 12, DEX 12)", TOUGH)):
        cells = []
        for _, kw in LOADOUTS:
            spear_ok = kw.get("spear_first") and True
            cells.append(f"{100*odds(m, f, **{**kw, **fkw}):.0f}%")
        print(f"| {fname} | {mname} | " + " | ".join(cells) + " |")
