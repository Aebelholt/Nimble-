module.exports = [
  // Proof-of-concept entry. Stage, verb and But+ aligned with the Sejr tables;
  // the stat block and tables are as supplied.
  {
    world: "Deathreach",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Carrion Crawler",
    description: "A pale, eyeless centipede the length of two men, " +
      "its dozen bristled legs barely touching the tunnel wall as it " +
      "holds itself horizontal by gripping the ceiling. The mouth is a " +
      "ring of eight tentacles, each tipped with something the colour " +
      "of old bruise.",

    stats: { hp: 28, armor: "Medium", speed: "6 (climb 8)", stage: "7-10, 13+" },

    actions: [
      {
        name: "Tentacle lash",
        cost: "1 Action, ×2",
        damage: "d6+2",
        effect: "On hit: the target must make a STR save DC 12 or be " +
          "dragged 2 spaces toward the crawler (even if this pulls them " +
          "through a bottleneck). The target is also Slowed until the end " +
          "of their next turn. If the target is already Grappled by the " +
          "crawler, this drag becomes 3 spaces instead."
      },
      {
        name: "Seize",
        cost: "Free, follows a successful Tentacle lash",
        damage: "—",
        effect: "The crawler attempts to Grapple the dragged target " +
          "(STR save DC 12 to resist). On failure: the target is Grappled. " +
          "The crawler can hold up to 1 creature Grappled at a time."
      },
      {
        name: "Withdraw",
        cost: "Free, 1/encounter",
        damage: "—",
        effect: "The crawler moves up to its full climb speed back " +
          "through the bottleneck it occupies, dragging any Grappled " +
          "creature with it. The Grappled creature moves with it; their " +
          "allies cannot follow without entering the bottleneck " +
          "(Difficult Terrain, 3 spaces wide or less). The Grapple " +
          "does not end."
      },
      {
        name: "Bite",
        cost: "1 Action, only against Grappled targets",
        damage: "2d8+3",
        effect: "Crits automatically against a Grappled target who " +
          "failed to break free this turn (they are Hampered)."
      }
    ],

    tactics: "Wants to keep the food it has already found; the heroes are rivals, not prey. Lashes at reach first and only closes to bite a held target. Fights hard and breaks off only when Bloodied, withdrawing through its bottleneck with whatever it holds.",
    sources: "Monster Vault: 4e MM, Lv 7 Controller. Proof of concept; 4e MM Carrion Crawler (slowed-to-stunned ratchet, stopped at Slowed and Grappled); Ammann (carrion crawlers).",

    designNote:
      "The carrion crawler is a moray eel, not a paralysis trap. " +
      "Its threat is geometric: it controls a crack, extends to " +
      "strike, grabs prey, retreats into inaccessible space. Tentacle " +
      "venom becomes Slowed (one step of action economy cost, not a " +
      "full stop). The real consequence of a successful lash is " +
      "repositioning, the grabbed hero ends up in the wrong place, " +
      "separated from the party by a bottleneck. They are still acting. " +
      "Their choices are just worse. " +
      "Deploy this creature at passage mouths, ceiling cracks, flooded " +
      "corridor ends, and stairwells. In an open room it is a sluggish " +
      "Brute. In a 2-space-wide tunnel junction it is a siege weapon. " +
      "Two crawlers working in concert, one holding the bottleneck, " +
      "one having already dragged a hero through, is the correct " +
      "terrifying encounter shape.",

    traits: [
      "Bloated with a recent meal, something with boots still on its " +
        "hind legs is half-dissolved in the midsection.",
      "Pale luminescent slime trails a metre behind it on walls and " +
        "floor. It catches torchlight.",
      "One tentacle is shorter, ending in a blunt scarred stump. An " +
        "old fight. It compensates by leading with the others.",
      "It makes no sound at all, no chittering, no rustling, until " +
        "the tentacles touch flesh.",
      "Moving slower than it should. Something has already bitten a " +
        "chunk from two of its legs, still fresh.",
      "Its underbelly is translucent in the torchlight. You can see " +
        "the outline of something dark and angular moving inside it."
    ],

    encounters: [
      "The crawler has wedged itself into the mouth of the only tunnel " +
        "forward, tentacles extended into the passage. It has been there " +
        "long enough that something is already wedged in its midsection. " +
        "Going around means a two-hour detour through flooded passages. " +
        "Going through means one hero in the front.",
      "A wounded duergar is pressed flat against the wall ten spaces " +
        "into a side passage, making no sound and pointing urgently at " +
        "the ceiling above the junction. The crawler is up there. It " +
        "hasn't seen the heroes yet.",
      "The crawler is retreating through a half-height passage with " +
        "something, someone, still in its grip. The passage is too " +
        "low to enter upright. The dragged figure is still moving.",
      "Three crawlers occupy the vertical chimney the party needs to " +
        "climb. The chimney is four spaces across. They are not aware " +
        "of the heroes yet."
    ],

    lairs: [
      "A junction where four tunnels meet, the ceiling thickly webbed " +
        "with old moult-husks and dried egg casings. The floor is bone-" +
        "white from years of digestion. Every tunnel narrows within ten " +
        "spaces.",
      "A flooded corridor, ankle-deep, the water slow and dark. The " +
        "crawler moves faster in water than the heroes. Several shapes " +
        "below the surface are not rocks.",
      "A natural chimney rising out of sight, its walls scarred with " +
        "claw marks in patterns too regular to be random. The crawler " +
        "has been using this as a roost for a long time. Old equipment " +
        "is lodged in crevices at various heights.",
      "A chamber that used to be a duergar guardpost. The stone " +
        "furniture is intact. What remains of the duergar has been " +
        "sorted into neat piles by something with eight limbs and no eyes."
    ],

    rumours: [
      { true: true,
        text: "They're deaf. They hunt by sensing the heat of blood and " +
          "the vibration of footsteps through stone. Stand still and hold " +
          "your breath and they will sometimes pass you by." },
      { true: true,
        text: "A crawler that drags prey through a bottleneck will feed " +
          "for hours before moving again. If you can hold the bottleneck " +
          "from the far side, it won't pursue into open ground." },
      { true: false,
        text: "The venom causes total paralysis. One touch and you cannot " +
          "move at all, not a finger, until someone cuts the tentacle " +
          "free or the thing decides to let go." },
      { true: false,
        text: "They're territorial and always hunt alone. Two in the same " +
          "tunnel will fight each other to the death." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "Natural But+ Monster result at Stages 7-10, where Warreners " +
          "have bred up into the tunnels under the Lower Reaches and the " +
          "Lost Cisterns, and on any Deathreach arch. " +
          "Best deployed at a chokepoint in a corridor map: the party " +
          "arrives at the junction and the crawler is already there, " +
          "occupying the only passage forward. Pair with a duergar dig " +
          "crew for a two-faction encounter: the noise of their work drew " +
          "the crawlers here, and now both are the party's problem.",
      patronHook:
        "The Archkeepers sent the party to retrieve something from a " +
          "sealed vault beneath the Endless Warrens. Carrion crawlers " +
          "have been breeding in the vault for thirty years. The object " +
          "is still there.",
      cityName:
        "\"Warreners\", the term used by duergar who tunnel below the " +
          "city. Any delver who has worked the levels below the Lower " +
          "Reaches knows what the word means and what it costs to ignore it."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Far Wanderer",
    description: "A figure three spaces tall and thin as a coat on a hook, walking with " +
      "a surveyor's patience. Where its face should be, a slow disc of starlight turns. " +
      "It carries a bundle of knotted cords and ties a new knot at every junction.",

    stats: { hp: 60, armor: "Medium", speed: "6 (teleport 12, 1/round)", stage: "13+" },

    actions: [
      {
        name: "Stretch the hall",
        cost: "1 Action",
        damage: "—",
        effect: "Choose a line up to 12 spaces long within sight. Until the start of the " +
          "wanderer's next turn, every space in it costs double movement for anyone but " +
          "the wanderer. The corridor looks no longer. It is."
      },
      {
        name: "Displacing touch",
        cost: "1 Action, ×2, Reach 2",
        damage: "1d10+6",
        effect: "On hit: the wanderer teleports the target up to 6 spaces to a space it " +
          "can see. It prefers dead ends, ledges and the far side of a door."
      },
      {
        name: "Starlight gaze",
        cost: "2 Actions, 1/encounter",
        damage: "—",
        effect: "Every creature within 8 spaces that can see its face makes a WIL save " +
          "DC 13. Failure: Dazed, and the hero sees the whole dungeon at once for a " +
          "moment. Success: Slowed."
      },
      {
        name: "Fold away",
        cost: "Reaction, 1/encounter, first time it is Bloodied",
        damage: "—",
        effect: "The wanderer teleports 12 spaces to a space it can see, and the corridor " +
          "between it and the heroes stretches as Stretch the hall."
      }
    ],

    tactics: "Wants to finish its survey. Targets whoever blocks its route or touches its cords. Breaks off the moment it is Bloodied; it has somewhere else to be.",
    sources: "Monster Vault: Creature Codex, CR 3.",

    designNote:
      "Distance is the far wanderer's weapon. It splits the party with teleports and " +
      "taxes their approach with stretched corridors, and the gaze converts the source " +
      "creature's stunning radiance to Dazed. It need not be hostile. It is surveying a " +
      "dungeon that will not stop growing, and the party may be just another feature on " +
      "its map. Fights against it should feel like the room itself is working against " +
      "the heroes, because in Deathreach it is.",

    traits: [
      "Its cords hold thousands of knots. Read right, they are a map of halls that " +
        "do not exist yet.",
      "It hums a single low note that makes teeth ache. The note changes when it lies.",
      "Its footprints are spaced wrong, three steps too far apart for its stride.",
      "A child's shoe hangs from its belt on a cord. It touches it when it pauses.",
      "Torches burn blue near it and flicker toward it, as if the light is being pulled.",
      "This one is lost. It stops at every junction, unties a knot, and ties it again."
    ],

    encounters: [
      "A far wanderer stands at a four-way junction knotting its cords. Each time it " +
        "ties one, a new tunnel opens in the wall behind it. One of them is the way home.",
      "The lizardfolk mages who serve Deathreach have trapped a far wanderer in a ring " +
        "of salt and are questioning it. It looks at the party over their heads.",
      "The party walks a corridor that should take a minute. It has taken an hour. " +
        "Far ahead, a tall figure turns and keeps walking.",
      "A duergar dig crew has offered a far wanderer their foreman in trade for the " +
        "route to an older hall. It is considering the party as a better offer."
    ],

    lairs: [
      "A chamber with no exits, only alcoves, each holding a bundle of knotted cord. " +
        "Every bundle is a different section of Deathreach. One is labelled in Common.",
      "A hall whose walls are carved with tally marks, millions of them, counting " +
        "something that has not finished.",
      "A circular room where the floor is a map of the city of Vynan, inlaid in black " +
        "stone, with one blue light still burning in the central spire.",
      "A dead end where seven sets of adventurers' gear lie stacked by owner, neatly, " +
        "each with a knot tied in its strap."
    ],

    rumours: [
      { true: true,
        text: "It cannot stretch what it cannot see. Fight it around corners and the " +
          "halls stay the size they ought to be." },
      { true: true,
        text: "They trade. Bring one a map of somewhere it has never been and it will " +
          "show you a way out." },
      { true: false,
        text: "Looking at the light in its face drives you mad for good. Go in " +
          "blindfolded." },
      { true: false,
        text: "They are the archmages who built Deathreach, still walking their " +
          "dungeon. Kill one and the halls stop growing." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on any Deathreach or Vynan arch. Use it when the map needs to " +
          "change: after the wanderer, rooms are farther apart than the party drew them.",
      patronHook:
        "The University wants a far wanderer's knotted cords, any length, to test a " +
          "theory that Deathreach and Vynan share architects. The Archkeepers want " +
          "to know whether it can be asked politely.",
      cityName:
        "\"Surveyors\": Archkeepers' term, after an early report that described one " +
          "measuring the Arch of Kings with a cord and leaving without a word."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Lurker",
    level: 4,
    name: "Cave Fisher Angler",
    description: "A crab-legged insect the size of a pony, clamped to a cavern ceiling with " +
      "its long snout pointed down. A filament thin as hair hangs from the snout, beaded " +
      "with sticky drops that catch the torchlight like coins.",

    stats: { hp: 37, armor: "Medium", speed: "4 (climb 6)", stage: "13+" },

    actions: [
      {
        name: "Filament",
        cost: "1 Action, Range 8",
        damage: "—",
        effect: "DEX save DC 12 or the target is Restrained by the filament. A Restrained " +
          "target can still act. Escaping takes an action and a STR save DC 12. Any ally " +
          "can cut the line with a slashing attack against it (it breaks on any hit); " +
          "fire burns it through instantly."
      },
      {
        name: "Reel",
        cost: "Free, start of each turn",
        damage: "—",
        effect: "Each creature Restrained by its filament is pulled 3 spaces toward the " +
          "angler, straight up if needed. A creature cut free while off the ground falls. " +
          "The line also breaks if its target teleports."
      },
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d8+4",
        effect: "Only against creatures within Reach 1, which mostly means the one it has " +
          "reeled in."
      },
      {
        name: "Sniper",
        cost: "Passive",
        damage: "—",
        effect: "While hidden, a missed Filament does not give away where it is. Its " +
          "beaded line glitters like coin, and a hero who stops to look is targeted with " +
          "advantage."
      },
      {
        name: "Appeased",
        cost: "Passive",
        damage: "—",
        effect: "Fresh meat thrown within 3 spaces of it: it lines and reels the meat " +
          "instead, for one round per hunk."
      }
    ],

    tactics: "Wants to eat without leaving its ceiling. Lines the isolated hero at the back, reels, and keeps lining. A hunk of fresh meat thrown under it buys passage. Breaks off when its line is cut twice or it is Bloodied, and it climbs out of reach.",
    sources: "Monster Vault: 4e MM3, Lv 3 Lurker. 4e MM3 Cave Fisher Angler (Sniper, filament ends on a hit or teleport, baited with meat).",

    designNote:
      "The crawler owns corridors. The angler owns height. Its filament is a Restrain " +
      "that keeps the hero acting while dragging them up the wall, and the party's " +
      "decision is when to cut the line: now, and the victim falls, or later, and they " +
      "arrive at the claws. Deploy it over chasms, in tall caverns and above pools. In " +
      "a low passage it is a slow, ugly crab with nothing to reel.",

    traits: [
      "Its filament is threaded with gold flakes. It has been fishing near a vein.",
      "Three old filaments hang from the ceiling nearby, each ending in a dangling " +
        "skeleton.",
      "It is missing a leg and clings crooked, its snout pointing off-centre.",
      "Its shell is crusted with pale fungus that glows faintly when it moves.",
      "It clicks like a counting-frame when it reels, slower as the load gets heavier.",
      "A duergar helmet is wedged on its snout. It has been unable to remove it for years."
    ],

    encounters: [
      "A rope bridge spans a chasm in the Shadowed Deeps. Halfway across, a filament " +
        "brushes a hero's cheek.",
      "A dwarf is dangling ten spaces up a cavern wall, alive, cocooned to the waist. " +
        "He whispers that there are two of them.",
      "The party needs to fill waterskins at an underground pool. The pool is perfectly " +
        "still, and lines hang into it from the dark above.",
      "Lizardfolk have tethered an angler over the gate to their hall as a guard. Their " +
        "password is a hand signal no one has told the party."
    ],

    lairs: [
      "A shaft forty spaces deep, its walls hung with old filament like a curtain, " +
        "bones and coins drifting in the threads.",
      "A cavern with a sloped ceiling, the angler at its highest point and every " +
        "approach downhill toward it.",
      "A chamber where the floor is a lake of fungus, soft and deep. Things that fall " +
        "here do not land hard, and the angler knows it.",
      "A dead duergar watch-post with a crossbow still loaded at the arrow slit, aimed " +
        "at the ceiling, where its owner last saw something."
    ],

    rumours: [
      { true: true,
        text: "Fire cuts its line faster than any blade. Carry a torch in your off hand." },
      { true: true,
        text: "It can only hold one line at a time. If it has someone, the rest of " +
          "you can walk straight under it." },
      { true: false,
        text: "The line is poisoned. Touch it bare-handed and you'll be sick for a week." },
      { true: false,
        text: "Anglers die if they fall. Knock one off its ceiling and it breaks like a " +
          "dropped egg." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on a Deathreach arch, in any room with height. Turn a crossing " +
          "into a rescue: someone is already on the line.",
      patronHook:
        "A Black Hand fixer lost a smuggler and the key she carried in a Deathreach " +
          "shaft. The key glitters. So does the angler's line, and that is not a " +
          "coincidence.",
      cityName:
        "\"Line-hangers\": duergar term, carried up into the Lower Reaches. Telling " +
          "someone to mind the line-hangers means look up."
    }
  },

  {
    world: "Deathreach",
    tier: "Elite",
    role: "Skirmisher",
    level: 5,
    name: "Grell",
    description: "A floating brain the size of a barrel, ridged and pink-grey, with a hooked " +
      "beak underneath and a skirt of ten long tentacles. It drifts with no sound but the " +
      "drip of whatever it ate last.",

    stats: { hp: 80, armor: "None", speed: "Fly 6 (hover)", stage: "13+" },

    actions: [
      {
        name: "Tentacles",
        cost: "1 Action, Reach 2",
        damage: "2d6+6",
        effect: "On hit: the target is Slowed, and makes a DEX save DC 13 or is Grappled. " +
          "It holds one creature at a time and can lift a Medium or smaller one."
      },
      {
        name: "Beak",
        cost: "1 Action, Grappled target only",
        damage: "1d10+6",
        effect: "Venom: the target is Dazed on their next turn. A target already Dazed " +
          "is Poisoned instead."
      },
      {
        name: "Lift",
        cost: "Free, when it moves",
        damage: "—",
        effect: "It carries its Grappled target with it, straight up if it likes. A target " +
          "who breaks free while aloft falls: 1d6 per 2 spaces, landing Prone."
      },
      {
        name: "Hit and rise",
        cost: "Free, 1/round, after an attack",
        damage: "—",
        effect: "It moves up to 4 spaces without provoking Opportunity Attacks."
      }
    ],

    tactics: "Wants a meal carried off to eat in peace. Targets the smallest hero it can lift, grabs, and rises. Can be bargained with by anyone who proves they are great hunters. Breaks off when Bloodied, dropping its catch from height.",
    sources: "Monster Vault: 4e MM, Lv 7 Elite Soldier. 4e MM Grell (Elite Soldier, slowing rake); Ammann (grells).",

    designNote:
      "The 5e grell's tentacles paralyse. Here the beak Dazes for one turn, per the GM " +
      "Guide, and the real threat moves to height: a grabbed hero is carried up toward " +
      "the ceiling and has to decide whether breaking free is worth the fall. Ranged " +
      "heroes matter, and catching a falling friend matters more. It has Elite HP so it " +
      "survives long enough to lift twice. Under a low ceiling it is a brain with a beak.",

    traits: [
      "Its tentacles are tipped with old duergar rings, worn like trophies.",
      "A crossbow bolt sticks out of its brain-folds, long healed over.",
      "It tracks by sound and tilts toward whoever spoke last.",
      "This one is young and greedy and grabs the biggest target, not the weakest.",
      "It trails a thin sheet of mucus that hardens into glassy threads on the floor.",
      "Its beak is cracked and it chews slowly, with obvious pain."
    ],

    encounters: [
      "A cavern so tall the torchlight doesn't reach the ceiling. Something drops a " +
        "boot from above. It lands beside the party, still laced.",
      "A grell colony has hung its larder on the ceiling of a duergar forge: three " +
        "smiths, cocooned and alive, swaying over the coals.",
      "A lone grell hovers in a narrow shaft the party must climb. It is wounded and " +
        "will bargain in clicks and gestures for the death of a rival.",
      "Grell and lizardfolk mages are at war over a pool of primordial fluid. Both want " +
        "the party on their side. Both want the party in the pool."
    ],

    lairs: [
      "A domed chamber with every exit near the ceiling. The floor is soft with " +
        "decades of shed mucus.",
      "A vertical shaft hung with net-cocoons. Some move. Some are empty and slit open " +
        "from inside.",
      "A ruined duergar watchtower inside a cavern, its top floor the only place a " +
        "grell can't reach, and a starved survivor up there with a crossbow.",
      "A sinkhole on the edge of the Abhorrent Vats where grell eggs float in warm " +
        "fluid like boiled onions."
    ],

    rumours: [
      { true: true,
        text: "They're half deaf to stone. Walk soft, don't talk, and a grell above you " +
          "may never drop." },
      { true: true,
        text: "If it grabs you high, don't break free until someone below is ready to " +
          "catch you. The fall kills more than the beak." },
      { true: false,
        text: "Their beak turns you to wood for an hour. You'll be awake the whole time " +
          "it eats you." },
      { true: false,
        text: "Grells serve the mind flayers. Find one and the squid-heads are close." }
    ],

    gigFit: {
      verb: "Find / Stop",
      butPlus:
        "But+ Monster on a Deathreach arch in any room over 4 spaces high. Works as an " +
          "Elite set piece: one grell, one tall chamber, one victim already hanging.",
      patronHook:
        "The Archkeepers lost an arrival to a grell before the Archkeepers could greet " +
          "them. They want the arrival found, alive, and asked one question about where " +
          "they came from.",
      cityName:
        "\"Hooked brains\" in the Lower Reaches. Archkeepers just say \"look up\", which " +
          "has become the delvers' greeting at the Black Goat."
    }
  },

  {
    world: "Deathreach",
    tier: "Elite",
    role: "Brute",
    level: 3,
    name: "Ochre Jelly",
    description: "A yellow-brown slick of living acid that can pour itself flat as a " +
      "spill or heap up as tall as a man. The stone under it is polished clean. Bones are " +
      "not, and it leaves them in its wake, bleached and pitted.",

    stats: { hp: 62, armor: "None", speed: "4 (climb 4)", stage: "9-10, 13+" },

    actions: [
      {
        name: "Pseudopod",
        cost: "1 Action, ×2",
        damage: "1d8+3",
        effect: "Acid. On hit: the target is Slowed as the acid sticks to their boots."
      },
      {
        name: "Split",
        cost: "Reaction, 1/encounter, when first Bloodied",
        damage: "—",
        effect: "Unless the hit that Bloodied it also killed it, the jelly splits into two, " +
          "each with half its current HP, in adjacent spaces. Each acts on its own turn. " +
          "Left alone after the fight, the halves crawl back together."
      },
      {
        name: "Seep",
        cost: "Free, 1/round",
        damage: "—",
        effect: "It flows 4 spaces without provoking, through any gap an inch wide: under " +
          "doors, through grates and up drains."
      },
      {
        name: "Engulf the fallen",
        cost: "1 Action",
        damage: "2d6+4",
        effect: "Only against a Prone or Dying creature in or adjacent to its space. " +
          "Can't miss."
      }
    ],

    tactics: "Wants to eat whatever stops moving. Flows toward the nearest warm body and stays on it. Never breaks off; once split, the halves crawl back together if left alone.",
    sources: "Monster Vault: 4e MM, Lv 3 Elite Brute. 4e MM Ochre Jelly (split once when first Bloodied, halves rejoin, flowing form); Ammann (oozes).",

    designNote:
      "A brute that doubles at the halfway mark. The first draft split on every " +
      "slashing hit, which buried the GM in jellies; 4e's version splits once, when " +
      "first Bloodied, and that is the one used here. The fight has two acts: one slow " +
      "jelly, then two that flank. The halves rejoining after the fight makes leaving " +
      "one alive a real choice. Deploy where it can seep in from below: drains, " +
      "grates, the Lost Cisterns.",

    traits: [
      "A sword hilt floats in it, the blade long dissolved.",
      "It smells of vinegar and old pennies.",
      "It is warm. Steam rises off it in the cold of the deep.",
      "This one is darker, nearly brown, and slower. Heavy with something.",
      "It pulses in time with a far-off hammer: a duergar forge somewhere below.",
      "A small bright stone circles inside it, refusing to dissolve."
    ],

    encounters: [
      "A drain in the floor of the party's safe room starts to bubble yellow.",
      "Duergar have penned an ochre jelly in a stone channel to clean their tunnels. " +
        "The gate is rusting through.",
      "The party's goal, a sealed coffer, is inside a jelly. It has been circling for " +
        "a century and the lock is almost gone.",
      "A Lost Cisterns walkway, two spaces wide. The jelly is on the wall. Then the " +
        "ceiling. Then the walkway behind them."
    ],

    lairs: [
      "A chamber with a polished floor and a ring of bones around the walls, pushed " +
        "out of the way like crumbs.",
      "A cistern basin whose water is clear, too clear. The jelly sits at the bottom " +
        "like a stain.",
      "The edge of the Abhorrent Vats, where new jellies rise from the primordial lake " +
        "in shivering lumps and crawl toward the tunnels.",
      "A duergar armoury where every blade is gone, and only shield bosses and helmet " +
        "rims remain, pitted to lace."
    ],

    rumours: [
      { true: true,
        text: "It only splits once, when you've hurt it bad. Be ready for two, and " +
          "don't leave either half alive, or they'll find each other." },
      { true: true,
        text: "It can't eat stone or clay. Seal yourself in behind a mud-packed door and " +
          "it will give up." },
      { true: false,
        text: "Every cut makes two. Use clubs and fire, never a blade." },
      { true: false,
        text: "They're blind and deaf. Stand still and they flow right past you." }
    ],

    gigFit: {
      verb: "Stop / Steal",
      butPlus:
        "But+ Monster at Stages 9-10 (seeping up into the Lost Cisterns) and on any " +
          "Deathreach arch near the Abhorrent Vats. Best when the room has drains and " +
          "the party has edged weapons.",
      patronHook:
        "The Golden Council wants the Lost Cisterns sluices reopened before the flood " +
          "season and has posted a writ. The sluice gates are where the jelly has been " +
          "feeding.",
      cityName:
        "\"Mustard\": Lost Cisterns workers' name. \"There's mustard in the drain\" means " +
          "leave your tools and go home."
    }
  },
];
