# Winter Burrow, kinks audit

Source: `winter-burrow.md`, read against Mausritter 2.3 where the hack defers to it.

**Status:** all 32 fixes approved and applied to `winter-burrow.md`. Where a fix offered two options, the first was taken (K19 Door roll, K26 cat on every clear day, K31 keep spectacles and snuffer).

Simulation: `tools/warmth_sim.py`, 100,000 runs per cell, full output in `tools/sim_results.md`. Assumptions are listed at the end.

## The short version

1. **Long Field and the Weir can't both be right.** If Long Field's 5 already counts the deep snow, the Weir sits one hour past the middle of a field that costs two hours an hour. Fix in K1.
2. **The weather is harsher than it looks.** Sleet or Bitter cold comes up on 69% of mornings. With a d8 coat, a Shed trip comes home free of Chilled only 22% of the time (41% if every day were Overcast).
3. **The Brook is the biggest single lever.** A typical DEX 9 mouse gets wet on 55% of crossings. Tobben's stones lift the d8 Shed trip from 22% to 37%. A full belly lifts it to 50%, mostly by soaking up that wet.
4. **The crow already counts double on day one** if she carries the opening keepsake, because keepsakes count. It reaches rung 3 on 22% of Shed trips before she's picked up any Salvage.
5. **The mole tunnel works as intended.** It turns the Weir from 27% to 77% at d8 (one way, no Chilled) and keeps her off the Brook and the open field.

## Requested checks

### K1. Long Field: is the doubling already in the 5?

The table can't be read cleanly either way.

- **Doubling included:** Long Field (5) is the staff, halfway across. The far half of the field would then cost about 2 more hours, so the Weir can't be at 6.
- **Doubling on top:** Long Field's leg runs about 8 to 10 hours, and the Weir lands at 9 to 11. That's past a day, and the felted boots become essential rather than useful.

**Fix:** state that the Hours column already counts deep snow, then move the Weir out one hour. The geometry: the Brook at 1, the field's near edge at 3, two real hours of field (four marked), the staff halfway.

| Place | Hours | With felted boots |
| --- | --- | --- |
| Long Field (the staff) | 5 | 4 |
| The Weir | 7 | 5 |

Add one line to the Long Field entry: *Hours above count the deep snow. Felted boots take off 1 to the staff, 2 to the Weir.*

The tunnel's length is unwritten. **Fix:** *The tunnel runs 3 hours from the Gravel Pit, with no Warmth rolls, and comes out an hour from the Weir.* That puts the Weir 6 hours away by tunnel, only 3 of them outdoors, with no Brook crossing.

### K2. Lantern vs owl

As written, the lantern halves the number of Night rolls, so it also halves the owl. In the fiction a light at night should draw eyes, not hide her.

**Fix:** *With a lit lantern, roll Warmth once an hour at Night, but the owl comes on a 1 or 2.* Warmth gets the benefit and the owl stays at almost the same rate per hour:

| Die | No lantern | Lantern as written | Proposed |
| --- | --- | --- | --- |
| d8 | 23% | 12% | 25% |
| d10 | 19% | 10% | 20% |
| d12 | 16% | 8% | 17% |

Also undefined: what a lantern "use" is. **Fix:** *Mark a use each Night it's lit.*

### K3. Dice per outdoor hour

The load is lighter than it looks:

- **Warmth:** 1 die an hour (2 at Night or in a storm).
- **Crow:** no roll of its own. It reads the Warmth die.
- **Encounters:** a d6 on arrival only, not every hour, then a second d6 on the table if needed.
- **Brook:** a d20 save on each crossing.

So an ordinary hour is one die. **No merge needed.** One procedural fix for the GM sheet: *On arrival, throw the Warmth die and two different-coloured d6 together. The first d6 is the check, the second the table entry.* One throw per arrival.

The rolls also stack in a way the rules don't cover. **Fix:** *Night and a storm don't stack: twice an hour is the most.*

### K4. Pick and Salvage

Confirmed: **the Shed breaks the loop.** It gives Salvage with no tool. The chain is Workbench Simple (3 Wood, 1 Stone), then one Shed trip with 2 work hours (2 Salvage), then the Pick (1 Wood, 2 Salvage). After that, the Gravel Pit is a Salvage source on the near side with no Brook crossing, which is a good payoff.

Two loose threads:

- **Nibs "trades Salvage for Food"** reads both ways. **Fix:** *Gives 1 Salvage for 1 Food.*
- Coming home with 2 Salvage, the crow reaches rung 3 on 15% (reading A) or 53% (reading B) of Shed trips. See K12.

### K5. Forlorn Hearth, first night, Wood and Chilled

- **The opening contradicts the table.** It says "the Bramble Hedge is an hour away and has more" Wood, but the Hedge gathers only Fiber and Food. Without Wood at the Hedge, her only Wood is the roots (1 a day, burnt every night while the Hearth is Forlorn) and Larch twigs across the Brook. **Fix:** Hedge gathers *Wood (deadfall), Fiber, Food*.
- **With that fix the Forlorn Hearth is a one-day hurdle.** The first night costs 1 Wood from the roots. On day 1 she brings 2 Wood from the Hedge and 1 Stone from the Brook, and that night she Mends the Hearth to Simple. The roots' Wood pays for that night's fire, and fires are free from then on.
- **"Coming home to a lit hearth does both"** is unclear: is it one Chilled or all of them, and is a hearth she lights herself "lit"? **Fix:** *A fire puts you back at your top. Each hour beside it clears one Chilled, and a night beside it clears them all.* Then "coming home to a lit hearth" only matters with banked embers (Hearth Good), and the Door Good lamp covers the last hour.
- **"Without a fire she sleeps Chilled"** appears only in the opening. **Fix:** move it into the Hearth section: *No fire, you sleep Chilled.*
- **"Fires are free"** could be read as free everywhere. **Fix:** *Fires at home are free. A fire anywhere else costs 1 Wood.* Matches still need dry ground.

### K6. Hours from home vs a 10-hour day

Weather rolled, round trip plus 2 hours of work, chance of getting home with no Chilled:

| Place | Hours | Trip | d8 | d10 | d12 |
| --- | --- | --- | --- | --- | --- |
| Hedge, Brook, Underoak | 1 to 2 | 4 to 6 | 62% | 92% | 99% |
| Gravel Pit | 2 | 6 | 37% | 76% | 95% |
| Fallen Larch | 2, across | 6 | 22% | 59% | 88% |
| The Shed | 3, across | 8 | 22% | 59% | 88% |
| Long Field (staff) | 5, across | 10, no work | 6% | 27% | 60% |
| The Weir, back the same day | 6, across | 12, ends at Night | 2% | 11% | 34% |

What it says:

- **d8, the city coat:** the near side. The Shed is reachable but she usually comes home with one or two Chilled, and drops a bundle in the snow if the pack is full.
- **d10, the scarf:** the Shed becomes a fair bet. The scarf costs only 2 Fiber from the Hedge and can be knitted anywhere, so d8 should last a day or two.
- **d12, the mittens:** Long Field becomes a real choice.
- **The Weir:** never a day trip. It's a one-way walk and a night in the mill (one way at d8: 27% overland, 77% by tunnel).

The curve reads as intended. The one sharp edge is Long Field: at 10 hours it fills the whole day with nothing to gather, and it's a coin flip even at d12.

## Other kinks

| # | Where | Problem | Smallest fix |
| --- | --- | --- | --- |
| K7 | The day | "Mark one hour for every move between places" makes the Shed cost 1 hour | *Mark an hour for every hour of travel and every task* |
| K8 | The wood | Distances only from the beech. Larch to Shed is undefined | *Between two places, the difference in hours, at least 1. Crossing the Brook is always a save* |
| K9 | Warmth | Which places are shelter is never listed, yet it decides rolls and crow resets | Add a Shelter column: Underoak (if welcome), the Shed, the Larch hollow, the moles' tunnels, the mill loft. Everything else is open |
| K10 | Conditions | "Every slot" is 10, counting coat and stick. Going down then needs 10 conditions, which almost never happens, and a Chilled could push out her coat | *Conditions fill pack slots. When the pack is all conditions, you go down.* At 6, the Weir overland at d8 puts her down 55% of the time, Long Field 17%, the Shed 2% |
| K11 | Food | "2 Food", "3 Food", "1 Food a day", but how many Food fit in a slot? With one per slot, her starting pack is nearly full | *Food stacks 3 to a slot*, as Mausritter rations do |
| K12 | Crow | "Salvage and keepsakes count each roll twice" can mean any of them doubles it (A), or each one adds a rung (B). Under B, 2 Salvage gives 53% per Shed trip | Take A: *If the pack holds any Salvage or keepsake, each counting roll moves it two rungs.* Add: *After it drops, the ladder resets* |
| K13 | Crow | The opening keepsake counts, so carrying it doubles the crow from day one (22% to rung 3 on an empty Shed trip) | Keep it. It's a good tension: does she carry it or leave it home? Define keepsake: *a found or brought thing she keeps to Remember* |
| K14 | Crow, wet | "Getting wet counts as rolling a 1". Does that move the crow? | *Wet steps Warmth down. It's not a rolled 1 for the crow or owl* (as simulated) |
| K15 | Crow | "By day" doesn't say whether Dusk counts | *Morning to Dusk* |
| K16 | Hot drinks | Nothing says how to get one, so the tin cup and the first warming rule do nothing | *Brew one at the hearth for 1 Food. It takes a slot and stays hot until Dusk.* Add: *Never above your top die* |
| K17 | Clerk | "Mapped routes" is undefined, and Shed at 2 hours is the strongest trade by far | *A route you've walked and written down costs 1 hour less, never below 1* |
| K18 | Larch | "Twigs only without a Hatchet" doesn't say how much | *1 Wood an hour, 2 with a Hatchet* (the seasoned wood in the hollow still counts double) |
| K19 | Door | "Nights at home are safe" implies a danger that's never written | *While the Door is Forlorn, roll d6 each night: on a 1, something gets in.* Or cut the line and give Simple a different effect |
| K20 | Nest | What a Forlorn nest does is unwritten | *Forlorn: sleep restores d6 HP and clears Exhausted* |
| K21 | Back room | "Dig it out ☐" has no cost, and "restored" Hearth doesn't say which rung | *Needs a Shovel and a Mend. Wakes when the Hearth reaches Simple* |
| K22 | Rooms | "The first climb turns something up" could mean the first climb ever | *A room's first climb turns something up* |
| K23 | Cook | Is Cook's 1 Food the day's Food or extra? | *Cooking is the day's Food, eaten hot.* Copper pan: *one Food, two full bellies (hers and a guest's)* |
| K24 | Spear | "Keeps a bite at arm's length" has no mechanic | *Against anything that bites, you act first* |
| K25 | Spiders | "Bitter cold day or worse": is Sleet worse? | *On a Bitter cold or Snowstorm day* |
| K26 | Cat | Clear days come up on 1 in 36, and then 2-in-6, so the cat shows about 1 day in 108 | Drop the 2-in-6: *on a clear day the cat is on the step*. Or widen Clear to 11 to 12 if you want it seen |
| K27 | Owl | Encounter 6 puts the owl on a branch at Dusk, but the owl rule is Night only | *At Dusk it watches. At Night, the owl rule* |
| K28 | Storm | Is "routes cost an extra hour" per trip or per leg? | *Each leg* (as simulated) |
| K29 | Rask | "Half of each cache as Food": a cache's size is unwritten | *Each cache is 4 Food. He gives her 2* |
| K30 | Lantern | Marit's lantern and refills | *Marit's lantern has 3 uses. Refill: 1 Fiber at the workbench* |
| K31 | Starting kit | Spectacles and the brass snuffer do nothing | Leave them as things to Remember, or cut them (S.E.B.: succinct). Your call |
| K32 | Sled | "Can't climb" names no places | *Not into the Larch hollow, the Pit's lower cut, or the Shed rafters* |

## Simulation notes

**Hours outdoors before the first Chilled**

| Top | Overcast every day | Weather rolled |
| --- | --- | --- |
| d8 | 9.0 | 6.4 |
| d10 | 14.0 | 10.6 |
| d12 | 20.0 | 15.8 |

These match the closed form: on an Overcast day, a die of size n steps down after n/2 hours on average, so d8 takes 4 + 3 + 2 = 9.

**Trips without a Chilled, weather rolled**

| Trip | Rolled hours | d8 | d10 | d12 |
| --- | --- | --- | --- | --- |
| Shed (work sheltered, as written) | 6 | 22% | 59% | 88% |
| Shed, Tobben's stones | 6 | 37% | 76% | 95% |
| Shed, full belly | 6 | 50% | 83% | 97% |
| Shed, if the work rolls outdoors | 8 | 12% | 41% | 74% |
| Long Field round trip, 5 each way | 10 | 6% | 27% | 60% |
| Long Field, boots (4 each way, K1) | 8 | 12% | 41% | 74% |
| Weir one way, as written (6) | 6 | 27% | 65% | 91% |
| Weir one way, proposed (7) | 7 | 20% | 55% | 85% |
| Weir one way, boots (5) | 5 | 37% | 75% | 95% |
| Weir one way, mole tunnel | 3 | 77% | 97% | 100% |
| Weir same-day round trip, overland | 12 | 2% | 11% | 34% |
| Weir same-day round trip, tunnel | 6 | 21% | 57% | 86% |

The tunnel doesn't help with Long Field, since it runs under the staff. The Weir same-day trips run 2 hours into Night, and the owl comes in 54 to 64% of them.

**Crow reaches rung 3 on a Shed trip, top d8**

She walks out with nothing and comes home carrying k Salvage. The ladder resets at the Shed.

| Carried home | Reading A, weather | Reading B, weather | With keepsake packed, A | With keepsake, B |
| --- | --- | --- | --- | --- |
| 0 | 3% | 3% | 22% | 22% |
| 1 | 15% | 15% | 22% | 56% |
| 2 | 15% | 53% | 22% | 56% |

On Overcast days these run about 1 to 3 points lower. At rung 3 she still gets a DEX save (45% at DEX 9), so under A she actually loses something on about 8% of Salvage runs.

**Assumptions**

- Weather is rolled each morning. Snowstorm: rolls twice, each travel leg +1 hour. Sleet: the first outdoor hour is wet. Bitter cold: start one step below top.
- At d4, a step down is a Chilled and the die stays at d4.
- Wet replaces that hour's roll with a 1, and a full belly can cancel it.
- Brook crossings use a DEX 9 save (3d6, keep the two highest, averages about 8.5).
- Shed work is sheltered (spider places roll nothing), as are Underoak and the tunnel. The Hedge, Brook, Larch and Pit work hours roll.
- Open ground for the crow: the Brook hour, the Larch work hours, and Long Field. Encounters and fights aren't simulated (each fight adds one Warmth roll).
- She leaves at first light, and hours past 10 are Night.

## What I need from you

A yes or no on each fix, or just the ones you want changed. The ones that change numbers or add mechanics need a decision, the rest are wording:

- **Numbers:** K1 (Weir 7, boots, tunnel 3h), K11 (Food 3 to a slot), K26 (the cat), K29 (cache size)
- **Mechanics:** K2 (lantern, owl on 1 to 2), K10 (conditions in pack slots), K12 (crow reading A), K16 (hot drinks), K19 (Door danger), K20 (Forlorn Nest)
- **Calls:** K13 (the keepsake and the crow), K31 (spectacles and snuffer)
