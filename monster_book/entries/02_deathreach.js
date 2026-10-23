// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Deathreach",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Carrion Crawler",
    seb: true,
    core: "Deathreach's scavenger. It holds a crack near the dead and drags anything living through it.",
    description: "A pale, eyeless centipede the length of two men, gripping the ceiling. Its mouth " +
      "is a ring of eight tentacles, each tipped the colour of old bruise.",

    stats: { hp: 28, armor: "Medium", speed: "6 (climb 8)", dc: 12, stage: "7-10, 13+" },

    actions: [
      A("Lash", "1 Action, ×2, Reach 2", "1d6+2", "STR save or dragged 2 spaces toward it, Slowed and Grappled (escape DC 12)."),
      A("Withdraw", "Free, 1/encounter", "", "Climbs 6 into its crack, dragging whoever it holds. They are released there, Prone. Allies can follow."),
      A("Bite", "1 Action, Grappled target", "2d8+3", "Automatic crit if the target did not try to escape on its last turn."),
    ],

    tactics: "Guards food, not prey. Lashes from reach, bites only what it holds, withdraws when Bloodied.",
    sources: "Monster Vault: 4e MM, Lv 7 Controller. 4e slowed-to-stunned ratchet, stopped at Slowed and held; Ammann (carrion crawlers).",

    designNote:
      "A moray eel, not a paralysis trap: the venom only Slows, and the danger is where the held " +
      "hero ends up. Sluggish in an open room, a siege weapon at a two-space junction.",

    traits: [
      "Boots still on the meal half-dissolved in its gut.",
      "A pale slime trail on the walls, bright in torchlight.",
      "One tentacle a scarred stump. It leads with the others.",
      "Silent until the tentacles touch skin.",
      "Two legs freshly bitten off. Something down here eats crawlers.",
      "Its belly is translucent. Something angular moves inside."
    ],
    encounters: [
      "It fills the only way forward. Around is two hours; through is one hero at a time.",
      "A wounded duergar points, silently, at the ceiling above the party.",
      "It is backing into a low crack with someone in its grip, still moving.",
      "Three of them hold the climb the party needs. They have not noticed yet."
    ],
    lairs: [
      "A four-way junction roofed with moult-husks, the floor bone-white, every exit narrowing.",
      "An ankle-deep dark channel. Some shapes under the water are not rocks.",
      "A claw-scarred chimney with old gear wedged at every height.",
      "A duergar guardpost, the guards sorted into neat piles by something eyeless."
    ],
    rumours: [
      { true: true, text: "It's deaf. It feels footsteps and heat. Hold still and it may pass." },
      { true: true, text: "Once it drags prey through, it feeds for hours. It won't follow into the open." },
      { true: false, text: "One touch and you're paralysed until it lets go." },
      { true: false, text: "They hunt alone and kill each other on sight." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Stages 7-10 and Deathreach arches, already sitting in the only way forward. Pair with a duergar dig crew whose noise drew it.",
      patronHook: "The Archkeepers want an object back from a sealed vault under the Endless Warrens. Crawlers have bred there for thirty years.",
      cityName: "\"Warreners\": the duergar word, from the tunnels below the Lower Reaches."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Far Wanderer",
    seb: true,
    core: "The dungeon grows its own surveyor to walk new halls first. It measures the party as one more feature.",
    description: "A figure three spaces tall and thin as a coat on a hook, its face smooth worked " +
      "stone. It ties a knot in its cord at every junction.",

    stats: { hp: 60, armor: "Medium", speed: "6 (teleport 12, 1/round)", dc: 13, stage: "13+" },

    actions: [
      A("Displacing touch", "1 Action, ×2, Reach 2", "1d10+6", "Teleports the target up to 6 spaces, to a dead end or ledge."),
      A("Stretch the hall", "1 Action", "", "A 12-space line costs double movement until its next turn."),
      A("Fold away", "Reaction, 1/encounter, when Bloodied", "", "Teleports 12 spaces and stretches the hall behind it."),
    ],

    tactics: "Wants its survey finished. Moves whoever blocks the route, and leaves when Bloodied.",
    sources: "Monster Vault: Creature Codex, CR 3. Starlight gaze cut; face and origin rebuilt as Deathreach's own.",

    designNote:
      "Distance is the weapon: it splits the party and lengthens the walk back together. It need " +
      "not be hostile. The party is on its map either way.",

    traits: [
      "Its cords hold thousands of knots: halls that do not exist yet.",
      "Its stone face matches the walls of the newest tunnel.",
      "Its footprints are three strides apart.",
      "It hums one low note that changes when it lies.",
      "Fresh rock dust on its shoulders. It has come from somewhere new.",
      "This one is lost, retying the same knot at every junction."
    ],
    encounters: [
      "It stands at a junction knotting a cord. Each knot opens a tunnel, and one leads home.",
      "A one-minute corridor has taken an hour. Far ahead, a tall figure keeps walking.",
      "Lizardfolk mages hold it in a salt ring and question it. It looks at the party instead.",
      "A duergar crew offers it their foreman for a route. It weighs the party as a better trade."
    ],
    lairs: [
      "Alcoves of knotted cord, each a section of the dungeon. One bundle is labelled in Common.",
      "A hall carved with millions of tally marks, still counting.",
      "A chamber of raw stone, the walls still settling into shape.",
      "A dead end with adventurers' gear stacked by owner, every strap knotted."
    ],
    rumours: [
      { true: true, text: "It can't stretch what it can't see. Fight it around corners." },
      { true: true, text: "It trades. A map of somewhere new buys a way out." },
      { true: false, text: "It's one of the archmages who built Deathreach. Kill it and the halls stop growing." },
      { true: false, text: "Its touch sends you to the bottom of the dungeon for good." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Deathreach arches, when the map should change: after it, rooms are farther apart than drawn.",
      patronHook: "The University wants a length of its cord. If the knots predict new halls, someone can sell routes before they open.",
      cityName: "\"Surveyors\": duergar word, said with respect."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Lurker",
    level: 4,
    name: "Cave Fisher Angler",
    seb: true,
    core: "The crawler owns corridors; the angler owns height. It hangs over a drop and fishes.",
    description: "A crab-legged insect the size of a pony, clamped to the ceiling, snout down. " +
      "Its line is thin as hair and beaded like coins.",

    stats: { hp: 37, armor: "Medium", speed: "4 (climb 6)", dc: 12, stage: "13+" },

    actions: [
      A("Filament", "1 Action, Range 8", "", "DEX save or Restrained (escape DC 12). A hit or flame cuts it; the fall is 1d6 per 2 spaces."),
      A("Reel", "Free, start of its turn", "", "Pulls its catch 3 spaces toward it, straight up if need be."),
      A("Claws", "1 Action, ×2", "1d8+4", "Only within Reach 1."),
    ],

    tactics: "Lines the straggler, reels, claws. Fresh meat thrown under it buys passage. Climbs away when Bloodied.",
    sources: "Monster Vault: 4e MM3, Lv 3 Lurker. Line ends on a hit or teleport; baited with meat (4e).",

    designNote:
      "The question is when to cut the line: now, and they fall, or later, and they reach the " +
      "claws. Under a low ceiling it is a slow crab with nothing to reel.",

    traits: [
      "Gold flakes on its line. It fished near a vein.",
      "Three old lines nearby, each ending in a skeleton.",
      "One leg missing. It hangs crooked.",
      "Fungus on its shell glows when it moves.",
      "It clicks as it reels, slower as the load gets heavier.",
      "A duergar helmet has been stuck on its snout for years."
    ],
    encounters: [
      "Halfway across a ledge, a sticky line brushes a hero's cheek.",
      "A dwarf hangs ten spaces up the wall, alive, whispering that there are two.",
      "The only water is a still pool with lines hanging into it from the dark.",
      "Lizardfolk keep one tethered over their gate. The password is a hand sign nobody taught the party."
    ],
    lairs: [
      "A deep shaft curtained in old line, bones and coins drifting in the threads.",
      "A sloped cavern. It hangs at the top, and every approach climbs toward it.",
      "A floor of deep fungus. Falls land soft here, and it knows.",
      "A dead duergar post, the crossbow still aimed at the ceiling."
    ],
    rumours: [
      { true: true, text: "Fire cuts the line faster than steel." },
      { true: true, text: "It holds one line at a time. If it has someone, walk under it." },
      { true: false, text: "The line is poisoned. Touch it bare and you're sick for a week." },
      { true: false, text: "Knock it off the ceiling and it breaks like an egg." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Deathreach arches, in any room with height. Someone is already on the line.",
      patronHook: "A Black Hand smuggler lost a key down a shaft. The key glitters, and so does the line.",
      cityName: "\"Line-hangers\": duergar. \"Mind the line-hangers\" means look up."
    }
  },

  {
    world: "Deathreach",
    tier: "Elite",
    cost: 6,
    role: "Skirmisher",
    level: 5,
    name: "Grell",
    seb: true,
    core: "The Abhorrent Vats grew a brain to hunt from above. It grabs, rises, and eats out of reach.",
    description: "A floating brain the size of a barrel, with a hooked beak beneath and a skirt " +
      "of ten tentacles. It drifts without a sound.",

    stats: { hp: 80, armor: "None", speed: "Fly 6 (hover)", dc: 13, stage: "13+" },

    actions: [
      A("Tentacles", "1 Action, Reach 2", "2d6+6", "Slowed. DEX save or Grappled and lifted."),
      A("Beak", "1 Action, held target", "1d10+6", "Dazed on the target's next turn."),
      A("Rise", "Free, 1/round", "", "Moves 4 spaces, up if it likes, with its catch. A hero who breaks free falls."),
    ],

    tactics: "Takes the smallest hero, rises, eats. Drops its catch when Bloodied. Bargains with proven hunters.",
    sources: "Monster Vault: 4e MM, Lv 7 Elite Soldier. Slowing rake (4e); Ammann (grells). Paralysis rebuilt as Dazed.",

    designNote:
      "Paralysis becomes a one-turn Daze. The threat is height: breaking free means a fall of 1d6 " +
      "per 2 spaces. Under a low ceiling it is a brain with a beak.",

    traits: [
      "Old duergar rings on its tentacle tips.",
      "A crossbow bolt healed into its folds.",
      "It tilts toward whoever spoke last.",
      "Young and greedy. It grabs the biggest, not the weakest.",
      "It trails mucus that hardens into glassy threads.",
      "A cracked beak. It chews slowly, in pain."
    ],
    encounters: [
      "A laced boot drops from the dark and lands beside the party.",
      "Three smiths hang cocooned and alive from a ceiling, swaying.",
      "A wounded grell blocks the climb and bargains, in clicks, for a rival's death.",
      "Grell and lizardfolk fight over a pool of primordial fluid. Both want the party, and both want them in the pool."
    ],
    lairs: [
      "A dome with every exit near the ceiling, the floor soft with old mucus.",
      "A shaft hung with net-cocoons. Some move. Some are slit open from inside.",
      "A ruined watchtower top, the one place it can't reach, with a starved survivor and a crossbow.",
      "A Vats sinkhole where grell eggs float in warm fluid like boiled onions."
    ],
    rumours: [
      { true: true, text: "Walk soft and don't talk. It hunts by sound." },
      { true: true, text: "If it lifts you, wait for someone below before you break free." },
      { true: false, text: "Its beak turns you to wood for an hour." },
      { true: false, text: "Kill one and the whole colony hunts you." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Deathreach arches, in a room more than 4 spaces high. One grell, one tall chamber, one victim already hanging.",
      patronHook: "The Archkeepers lost an arrival to a grell before they could greet them. They want the arrival back and asked one question.",
      cityName: "\"Hooked brains\" in the Lower Reaches. Delvers greet each other with \"look up\"."
    }
  },

  {
    world: "Deathreach",
    tier: "Elite",
    cost: 5,
    role: "Brute",
    level: 3,
    name: "Ochre Jelly",
    seb: true,
    core: "The Vats' cleaner. It eats whatever stops moving, and splits once when hurt.",
    description: "A yellow-brown slick of living acid, flat as a spill or heaped as tall as a man. " +
      "It leaves stone polished and bones pitted.",

    stats: { hp: 62, armor: "None", speed: "4 (climb 4, through any gap)", dc: 12, stage: "9-10, 13+" },

    actions: [
      A("Pseudopod", "1 Action, ×2", "1d8+3", "Acid. Slowed."),
      A("Split", "Reaction, when first Bloodied", "", "Two jellies, each half its current HP, sharing one set of Pseudopods. Touching, they rejoin, HP up to 62."),
      A("Engulf", "1 Action, Prone target", "2d6+4", "Can't miss."),
    ],

    tactics: "Flows to the nearest warm body and stays on it. Never breaks off.",
    sources: "Monster Vault: 4e MM, Lv 3 Elite Brute. Split once when first Bloodied, halves rejoin (4e). The Core Bestiary Ochre Jelly is the everyday drain version.",

    designNote:
      "Two acts: one slow jelly, then two that flank. Leaving a half alive is a real choice, because " +
      "it rejoins. Use this one as the set piece, the Core Bestiary's for an ordinary drain.",

    traits: [
      "A sword hilt floats in it, the blade long gone.",
      "It smells of vinegar and old pennies.",
      "It steams in the cold of the deep.",
      "Darker and slower than most. Heavy with something.",
      "It pulses in time with a far-off forge hammer.",
      "A small bright stone circles inside it, refusing to dissolve."
    ],
    encounters: [
      "The drain in the party's safe room starts to bubble yellow.",
      "Duergar keep one penned in a channel to clean their tunnels. The gate is rusting through.",
      "The sealed coffer the party came for is inside it, the lock nearly eaten.",
      "It is on the wall, then the ceiling, then the path behind them."
    ],
    lairs: [
      "A polished floor ringed with bones pushed aside like crumbs.",
      "A basin of water too clear, the jelly at the bottom like a stain.",
      "The edge of the Vats, where new jellies rise from the primordial lake and crawl off.",
      "A duergar armoury with every blade gone and the shield bosses eaten to lace."
    ],
    rumours: [
      { true: true, text: "It splits once, when badly hurt. Kill both halves or they find each other." },
      { true: true, text: "It can't eat stone or clay. A mud-packed door stops it." },
      { true: false, text: "Every cut makes two. Never use a blade." },
      { true: false, text: "It's blind and deaf. Stand still and it flows past." }
    ],
    gigFit: {
      verb: "Stop / Steal",
      butPlus: "Stages 9-10, seeping up into the Lost Cisterns, and Deathreach arches near the Vats.",
      patronHook: "The Golden Council has posted a writ to reopen the cistern sluices before flood season. The jelly feeds at the gates.",
      cityName: "\"Mustard\": cistern workers' word. \"Mustard in the drain\" means drop your tools and go."
    }
  },
];
