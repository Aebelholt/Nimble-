"""Broodmother odds: 12hp, STR 12, Armour 1, d8 bite to DEX. Fought to a finish.
Her side: HP then DEX, DEX save after DEX damage, fail = down. Spear: she acts first.
"""
import random, sys
N = int(sys.argv[1]) if len(sys.argv) > 1 else 40_000

def fight(m, rng, weapon, first_strike, setup=False):
    hp, dex = m["hp"], m["DEX"]; fhp, fstr = 12, 12
    mine = first_strike or rng.randint(1, 20) <= m["DEX"]; first = True
    for _ in range(200):
        if mine:
            dmg = max(0, rng.randint(1, 12 if setup and first else weapon) - 1); first = False
            if dmg <= fhp: fhp -= dmg
            else:
                dmg -= fhp; fhp = 0; fstr -= dmg
                if fstr <= 0 or rng.randint(1, 20) > fstr: return 1
        else:
            dmg = rng.randint(1, 8)
            if dmg <= hp: hp -= dmg
            else:
                dmg -= hp; hp = 0; dex -= dmg
                if dex <= 0 or rng.randint(1, 20) > dex: return 0
        mine = not mine
    return 0

print("| Mouse | Stick | Stick, set up | Spear | Spear, set up |\n| --- | --- | --- | --- | --- |")
for name, m in (("HP 2, DEX 8", {"hp": 2, "DEX": 8}), ("HP 4, DEX 8", {"hp": 4, "DEX": 8}), ("HP 4, DEX 10", {"hp": 4, "DEX": 10})):
    cells = []
    for w, fs, su in ((6, False, False), (6, False, True), (10, True, False), (10, True, True)):
        rng = random.Random(9)
        cells.append(f"{100 * sum(fight(m, rng, w, fs, su) for _ in range(N)) / N:.0f}%")
    print(f"| {name} | " + " | ".join(cells) + " |")
