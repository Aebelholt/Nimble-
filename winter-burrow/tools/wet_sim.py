"""Compare wet rules on the standard trips. Uses warmth_sim's routes and weather.

V0  as now: getting wet counts as rolling a 1 (one step), then it's over.
V1  Wet is a condition: while Wet, Warmth steps down on 1-3. No immediate step.
V2  As V1, and getting wet also steps Warmth down once.
Wet clears only by a fire, so on these trips it lasts until she's home.
"""
import random, sys
import warmth_sim as w

N = int(sys.argv[1]) if len(sys.argv) > 1 else 60_000

class WetMouse(w.Mouse):
    variant = "V1"
    def __init__(self, *a, **k):
        super().__init__(*a, **k)
        self.wet = False
    def get_wet(self):
        if self.variant == "V2" and not self.wet:
            self.step_down()
        self.wet = True
    def hour(self, kind):
        rng = self.rng
        night = self.clock >= w.DAY_HOURS
        self.clock += 1
        if kind in "st":
            self.rung = 0
            return
        if kind == "B" and not self.stones and rng.randint(1, 20) > self.dex:
            self.get_wet()
        if self.sleet_pending:
            self.sleet_pending = False
            self.get_wet()
        rolls = 2 if (night or self.wx == "storm") else 1
        for _ in range(rolls):
            face = rng.randint(1, w.SIZES[self.idx])
            if face <= (3 if self.wet else 2):
                if self.belly > 0: self.belly -= 1
                else: self.step_down()
            elif self.belly > 0:
                self.belly -= 1

def run(legs, top, wx_mode, variant, fixed_wx=None):
    rng = random.Random(11); ok = 0; chill = 0
    for _ in range(N):
        wx = fixed_wx or (w.weather(rng) if wx_mode == "avg" else "overcast")
        if variant == "V0":
            m = w.Mouse(rng, top, wx)
        else:
            WetMouse.variant = variant
            m = WetMouse(rng, top, wx)
        for leg in legs:
            m.walk([leg])
        ok += m.chilled == 0; chill += m.chilled
    return ok / N, chill / N

print(f"N = {N:,}. Chance of getting home with no Chilled, and mean Chilled.\n")
print("| Rule | Shed d8 | Shed d10 | Shed d12 | Sleet day, Shed d8 | Bitter day, Shed d8 |")
print("| --- | --- | --- | --- | --- | --- |")
for v, label in (("V0", "As now"), ("V1", "Wet condition, 1-3"), ("V2", "Wet condition, 1-3, plus a step")):
    cells = []
    for t in (8, 10, 12):
        ok, c = run(w.SHED, t, "avg", v); cells.append(f"{100*ok:.0f}% ({c:.1f})")
    for wx in ("sleet", "bitter"):
        ok, c = run(w.SHED, 8, "avg", v, fixed_wx=wx); cells.append(f"{100*ok:.0f}% ({c:.1f})")
    print(f"| {label} | " + " | ".join(cells) + " |")

# With a fire during the 2 sheltered work hours at the Shed (1 Wood carried):
# back to top die, Wet cleared, one Chilled cleared per hour.
def run_fire(top, variant, fixed_wx=None):
    rng = random.Random(11); ok = 0; chill = 0
    for _ in range(N):
        wx = fixed_wx or w.weather(rng)
        WetMouse.variant = variant
        m = WetMouse(rng, top, wx) if variant != "V0" else w.Mouse(rng, top, wx)
        m.walk([w.SHED[0]])
        m.idx = w.TOP[top]; m.chilled = max(0, m.chilled - 2)
        if hasattr(m, "wet"): m.wet = False
        m.clock += 2
        m.walk([w.SHED[2]])
        ok += m.chilled == 0; chill += m.chilled
    return ok / N, chill / N

print("\nSame, with a fire lit in the Shed while she works:\n")
print("| Rule | Shed d8 | Shed d10 | Shed d12 | Sleet day, Shed d8 | Bitter day, Shed d8 |")
print("| --- | --- | --- | --- | --- | --- |")
for v, label in (("V0", "As now"), ("V2", "Wet condition, 1-3, plus a step")):
    cells = [f"{100*a:.0f}% ({b:.1f})" for a, b in [run_fire(t, v) for t in (8, 10, 12)] + [run_fire(8, v, wx) for wx in ("sleet", "bitter")]]
    print(f"| {label} | " + " | ".join(cells) + " |")
