"""Beetle swarm (minion) odds for Winter Burrow.

Swarm rules modelled:
- Each hit downs one beetle per 2 damage, rounded up (halve the die, round up).
- The swarm acts as one: 1 damage for each beetle on her, at most CAP at once.
- When half the swarm is down, the rest scatter (she wins).
- Damage to her: HP, then STR with a STR save, fail = down.
Initiative: DEX save to go first (spear: always first).
"""
import random, sys
N = int(sys.argv[1]) if len(sys.argv) > 1 else 40_000

def fight(m, n, cap, rng, weapon=6, setup=False, spear=False):
    hp, st = m["hp"], m["STR"]
    left = n; kills_total = 0
    mine = spear or rng.randint(1, 20) <= m["DEX"]
    first = True
    for _ in range(100):
        if mine:
            dmg = rng.randint(1, 12 if (setup and first) else weapon); first = False
            k = min(left, (dmg + 1) // 2); left -= k; kills_total += k
            if left <= n // 2: return "win", kills_total
        else:
            dmg = min(left, cap)
            if dmg <= hp: hp -= dmg
            else:
                dmg -= hp; hp = 0; st -= dmg
                if st <= 0 or rng.randint(1, 20) > st: return "down", kills_total
        mine = not mine
    return "draw", kills_total

def odds(m, n, cap, **kw):
    rng = random.Random(5); w = 0; k = 0
    for _ in range(N):
        r, kt = fight(m, n, cap, rng, **kw); w += r == "win"; k += kt
    return w / N, k / N

SOFIE = {"hp": 2, "STR": 9, "DEX": 8}
AVG = {"hp": 4, "STR": 8, "DEX": 8}
print(f"N = {N:,}. Chance she drives the swarm off (and beetles downed on average).\n")
for cap in (3, 2):
    print(f"\n### Swarm bites for 1 per beetle on her, at most {cap}\n")
    print("| Swarm | Mouse | Stick | Stick, set up | Spear |")
    print("| --- | --- | --- | --- | --- |")
    for n in (6, 8, 10, 12):
        for mname, m in (("Sofie (HP 2)", SOFIE), ("HP 4", AVG)):
            cells = []
            for kw in ({}, {"setup": True}, {"weapon": 10, "spear": True}):
                w, k = odds(m, n, cap, **kw); cells.append(f"{100*w:.0f}% ({k:.1f})")
            print(f"| {n} | {mname} | " + " | ".join(cells) + " |")
