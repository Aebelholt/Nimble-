"""Winter Burrow: Monte Carlo for the Warmth die, the crow ladder and the routes.

Rules as modelled (winter-burrow.md, plus the readings flagged in audit.md):
- Warmth is d4..d12. Roll every outdoor hour, twice an hour at Night or in a snowstorm
  (the two don't stack). On 1-2, step down. At d4, a step down is a Chilled instead.
- Shelter and tunnels roll nothing and reset the crow.
- Getting wet replaces that hour's first roll with a 1. It steps Warmth but is not a
  rolled die, so it doesn't move the crow.
- Brook crossings: DEX save (d20 <= DEX) or wet. Tobben's stones skip the save.
- Weather (2d6 each morning): 2 storm (double rolls, +1 hour per travel leg),
  3-5 sleet (first outdoor hour wet), 6-8 bitter (start one step below top),
  9-11 overcast, 12 clear.
- Crow: by day, each rolled 1 moves it; on open ground a 2 counts too. Carried Salvage
  or keepsakes multiply: reading A, any = x2; reading B, x(1 + items). At rung 3 it
  drops and the ladder resets.
- Day is 10 hours (Morning 4, Afternoon 4, Dusk 2); later hours are Night.

Hour codes: o outdoor, g open ground, B Brook crossing (open ground plus save),
s sheltered, t tunnel.
"""
import random
import sys

SIZES = [4, 6, 8, 10, 12]
TOP = {8: 2, 10: 3, 12: 4}
DAY_HOURS = 10
N = int(sys.argv[1]) if len(sys.argv) > 1 else 100_000


def weather(rng):
    r = rng.randint(1, 6) + rng.randint(1, 6)
    if r == 2:
        return "storm"
    if r <= 5:
        return "sleet"
    if r <= 8:
        return "bitter"
    if r <= 11:
        return "overcast"
    return "clear"


class Mouse:
    def __init__(self, rng, top, wx, belly=0, dex=9, stones=False, items=0, reading="A"):
        self.rng, self.wx, self.dex, self.stones = rng, wx, dex, stones
        self.idx = TOP[top] - (1 if wx == "bitter" else 0)
        self.chilled = 0
        self.belly = belly
        self.sleet_pending = wx == "sleet"
        self.rung = 0
        self.crow_drops = 0
        self.owl = 0
        self.clock = 0
        self.set_items(items, reading)

    def set_items(self, items, reading):
        self.mult = 1 if items == 0 else (2 if reading == "A" else 1 + items)

    def step_down(self):
        if self.idx == 0:
            self.chilled += 1
        else:
            self.idx -= 1

    def hour(self, kind):
        rng = self.rng
        night = self.clock >= DAY_HOURS
        self.clock += 1
        if kind in "st":
            self.rung = 0
            return
        rolls = 2 if (night or self.wx == "storm") else 1
        wet = False
        if kind == "B" and not self.stones and rng.randint(1, 20) > self.dex:
            wet = True
        if self.sleet_pending:
            wet, self.sleet_pending = True, False
        for r in range(rolls):
            if r == 0 and wet:
                face = 1
            else:
                face = rng.randint(1, SIZES[self.idx])
                if not night and (face == 1 or (face == 2 and kind in "gB")):
                    self.rung += self.mult
                    if self.rung >= 3:
                        self.crow_drops += 1
                        self.rung = 0
                if night and face == 1:
                    self.owl += 1
            if face <= 2:
                if self.belly > 0:
                    self.belly -= 1
                else:
                    self.step_down()
            elif self.belly > 0:
                self.belly -= 1

    def walk(self, legs):
        for kind_list, is_travel in legs:
            hours = list(kind_list)
            if is_travel and self.wx == "storm" and hours:
                hours.append("o")
            for k in hours:
                self.hour(k)


def T(s):
    return (s, True)


def W(s):
    return (s, False)


def run_trip(legs, top, wx_mode, n=N, seed=1, items_back=0, items_out=0, reading="A",
             stones=False, belly=0):
    rng = random.Random(seed)
    ok = crow = owl = down = 0
    chill_sum = 0
    for _ in range(n):
        wx = weather(rng) if wx_mode == "avg" else "overcast"
        m = Mouse(rng, top, wx, belly=belly, stones=stones, items=items_out, reading=reading)
        half = len(legs) // 2
        for i, leg in enumerate(legs):
            if i == half + (len(legs) % 2) and items_back != items_out:
                m.set_items(items_back, reading)
            m.walk([leg])
        ok += m.chilled == 0
        chill_sum += m.chilled
        crow += m.crow_drops > 0
        owl += m.owl > 0
        down += m.chilled >= 6
    return dict(ok=ok / n, chill=chill_sum / n, crow=crow / n, owl=owl / n, down=down / n)


def hours_to_chilled(top, wx_mode, n=N, seed=2):
    rng = random.Random(seed)
    total = 0
    for _ in range(n):
        wx = weather(rng) if wx_mode == "avg" else "overcast"
        m = Mouse(rng, top, wx)
        h = 0
        while m.chilled == 0:
            m.hour("o")
            m.clock = 0  # daylight only: we want hours outdoors, not Night
            h += 1
        total += h
    return total / n


# Routes. Travel legs grow by an hour in a storm; work legs don't.
SHED = [T("Boo"), W("ss"), T("ooB")]
SHED_WORK_OUT = [T("Boo"), W("oo"), T("ooB")]
LONG_FIELD_5 = [T("Boogg"), T("ggooB")]
LONG_FIELD_BOOTS_4 = [T("Boog"), T("gooB")]
WEIR_6 = [T("Booggg")]
WEIR_7 = [T("Boogggg")]
WEIR_BOOTS_5 = [T("Boogg")]
WEIR_TUNNEL = [T("oo"), W("ttt"), T("g")]
WEIR_6_RT = [T("Booggg"), T("gggooB")]
WEIR_TUNNEL_RT = [T("oo"), W("ttt"), T("g"), T("g"), W("ttt"), T("oo")]

DESTS = [
    ("Bramble Hedge", 1, [T("o"), W("oo"), T("o")]),
    ("The Brook (stone)", 1, [T("o"), W("gg"), T("o")]),
    ("Underoak", 2, [T("oo"), W("ss"), T("oo")]),
    ("Fallen Larch", 2, [T("Bo"), W("gg"), T("oB")]),
    ("Gravel Pit", 2, [T("oo"), W("oo"), T("oo")]),
    ("The Shed", 3, SHED),
    ("Long Field (staff)", 5, [T("Boogg"), T("ggooB")]),
    ("The Weir, there and back", 6, WEIR_6_RT),
]


def pct(x):
    return f"{100 * x:.0f}%"


def main():
    out = []
    p = out.append
    p(f"N = {N:,} runs per cell. DEX 9 for Brook saves (45% to stay dry).\n")

    p("## Hours outdoors before the first Chilled\n")
    p("| Top | Overcast every day | Weather rolled |")
    p("| --- | --- | --- |")
    for top in (8, 10, 12):
        p(f"| d{top} | {hours_to_chilled(top, 'over'):.1f} | {hours_to_chilled(top, 'avg'):.1f} |")

    p("\n## Trips without a Chilled (weather rolled)\n")
    p("| Trip | Rolled hours | d8 | d10 | d12 |")
    p("| --- | --- | --- | --- | --- |")
    trips = [
        ("Shed, Brook save, work sheltered", SHED, {}),
        ("Shed, Tobben's stones", SHED, {"stones": True}),
        ("Shed, work rolled outdoors", SHED_WORK_OUT, {}),
        ("Shed, full belly", SHED, {"belly": 1}),
        ("Long Field round trip (5 each way)", LONG_FIELD_5, {}),
        ("Long Field round trip, boots (4 each way, proposed)", LONG_FIELD_BOOTS_4, {}),
        ("Weir one way, as written (6)", WEIR_6, {}),
        ("Weir one way, proposed (7)", WEIR_7, {}),
        ("Weir one way, boots (5, proposed)", WEIR_BOOTS_5, {}),
        ("Weir one way, mole tunnel", WEIR_TUNNEL, {}),
        ("Weir same-day round trip, overland (12h)", WEIR_6_RT, {}),
        ("Weir same-day round trip, tunnel (12h)", WEIR_TUNNEL_RT, {}),
    ]
    for name, legs, kw in trips:
        rolled = sum(1 for leg, _ in legs for k in leg if k not in "st")
        cells = [pct(run_trip(legs, t, "avg", **kw)["ok"]) for t in (8, 10, 12)]
        p(f"| {name} | {rolled} | " + " | ".join(cells) + " |")

    p("\n## Same trips, overcast every day (the floor of the weather)\n")
    p("| Trip | d8 | d10 | d12 |")
    p("| --- | --- | --- | --- |")
    for name, legs, kw in trips[:1] + trips[4:5] + trips[6:7] + trips[9:10]:
        cells = [pct(run_trip(legs, t, "over", **kw)["ok"]) for t in (8, 10, 12)]
        p(f"| {name} | " + " | ".join(cells) + " |")

    p("\n## Reach and return in a 10-hour day (weather rolled, 2h work)\n")
    p("| Place | Hours | Round trip + work | Fits | No Chilled d8 | d10 | d12 | Mean Chilled d8 |")
    p("| --- | --- | --- | --- | --- | --- | --- | --- |")
    for name, h, legs in DESTS:
        hrs = sum(len(l) for l, _ in legs)
        fits = "yes" if hrs <= DAY_HOURS else "no, Night"
        r = {t: run_trip(legs, t, "avg") for t in (8, 10, 12)}
        p(f"| {name} | {h} | {hrs} | {fits} | {pct(r[8]['ok'])} | {pct(r[10]['ok'])} | "
          f"{pct(r[12]['ok'])} | {r[8]['chill']:.2f} |")

    p("\n## Crow reaches rung 3 on a Shed trip (top d8)\n")
    p("Out with nothing, home carrying k Salvage or keepsakes. Ladder resets at the Shed.\n")
    p("| Carried home | A: any doubles, overcast | A, weather | B: +1 per item, overcast | B, weather |")
    p("| --- | --- | --- | --- | --- |")
    for k in (0, 1, 2):
        cells = []
        for reading in ("A", "B"):
            for wx in ("over", "avg"):
                cells.append(pct(run_trip(SHED, 8, wx, items_back=k, reading=reading)["crow"]))
        p(f"| {k} | " + " | ".join(cells) + " |")
    p("\nWith the opening keepsake packed both ways (one more item on each leg):\n")
    p("| Carried home | A, weather | B, weather |")
    p("| --- | --- | --- |")
    for k in (0, 1, 2):
        a = run_trip(SHED, 8, "avg", items_out=1, items_back=k + 1, reading="A")["crow"]
        b = run_trip(SHED, 8, "avg", items_out=1, items_back=k + 1, reading="B")["crow"]
        p(f"| {k} Salvage + keepsake | {pct(a)} | {pct(b)} |")

    p("\n## Owl chance per Night hour in the open\n")
    p("| Die | No lantern (2 rolls) | Lantern as written (1 roll) | Proposed: lantern, owl on 1-2 |")
    p("| --- | --- | --- | --- |")
    for n in SIZES:
        p(f"| d{n} | {pct(1 - (1 - 1 / n) ** 2)} | {pct(1 / n)} | {pct(2 / n)} |")

    print("\n".join(out))


if __name__ == "__main__":
    main()
