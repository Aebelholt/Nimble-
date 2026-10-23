// Core Bestiary: stat numbers are the Nimble GM Guide's, ability wording reformatted. Everything else is this book's.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);
const SRC = "Nimble GM Guide, Bestiary: ";

module.exports = [
  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Controller",
    name: "Briarbanes",
    description: "Soulless plant things, thorned and red-veined, fed on blood. Seedlings spit " +
      "thorns, pods burst, and the tanglers reach out from the dark with long arms of bramble.",

    roster: [
      { name: "Briarbane Seedling", level: "1/2", hp: 12,
        actions: [A("Thorn seed", "1 Action, Range 6", "1d6+2", "Can't crit.")] },
      { name: "Briarbane Acidpod", level: 1, hp: 18,
        actions: [
          A("Grab", "1 Action", "—", "Grapple, escape DC 12."),
          P("Caustic eruption", "On death, Reach 1, AoE: 4d6."),
        ] },
      { name: "Briarbane Tangler", level: 2, hp: 24, armor: "Heavy (peels)",
        actions: [
          P("Peeling bark", "Being hit degrades armor: Heavy, then Medium, then None."),
          A("Tangle", "1 Action, Reach 6", "1d6", "Grappled, escape DC 12 or any fire or slashing damage. Choose twice from Tangle and Pull."),
          A("Pull", "1 Action, vs a Grappled creature", "—", "Move them 4 spaces. Choose twice from Tangle and Pull."),
        ] },
      { name: "Briarbane Rootbreaker", level: 5, hp: 58, armor: "Heavy (peels)", speed: "6",
        actions: [
          P("Peeling bark", "Being hit degrades armor: Heavy, then Medium, then None."),
          A("Slam", "1 Action, ×2", "1d6+5", "On damage, Knockback 2 or Prone."),
        ] },
    ],
    stats: { stage: "7-8, 13+" },

    tactics: "Wants blood for the soil. Tanglers pull the lone hero toward the pods, the seedlings thin the rest from behind, " +
      "and the Rootbreaker holds the middle. Never breaks off: plants don't.",
    sources: SRC + "Forest Denizens, briarbanes.",

    designNote:
      "Official Nimble blocks. The Tangler is a 6-space reach Grapple plus a 4-space pull, " +
      "so a hero ends up standing next to an Acidpod that bursts for 4d6. Fire and slashing frees the " +
      "grapple, and every hit peels armor, so the party should hit first with what ignores it. " +
      "On the far side of Eruwynd, the Endless Forest, and any overgrown ruin.",

    traits: [
      "Its thorns are black at the tips, and sticky.",
      "It leans toward the nearest wound, like a flower to the sun.",
      "A scrap of cloth is snagged in its branches, a hero's, a colour the hero knows.",
      "A small white flower grows from one thorn, and it smells wrong.",
      "It creaks in a slow rhythm like a sleeper's breathing.",
      "Its roots are dug up, but still it walks."
    ],
    encounters: [
      "The path ahead is overgrown with bramble that was not there on the way in.",
      "A farmer's dead field has bloomed overnight with red-veined stalks. The farmer is somewhere in the middle.",
      "A Bluesteel hunter is caught in a thicket, bleeding, and the thicket is pulling her in.",
      "Seedlings have already taken a village well. The villagers want the water, and the party does not know why it has gone red."
    ],
    lairs: [
      "A glade where the grass is a perfect circle of red, and every tree in it is bent toward the middle.",
      "A cellar in the Lower Reaches overgrown with thorny vines, the owner's skeleton still sitting at the table.",
      "A greenhouse where every pane is broken and every pot is overflowing, and there is a faint sound of sucking.",
      "A corpse-fed grove, with a heap of bones at the centre like a fertiliser pile."
    ],
    rumours: [
      { true: true, text: "Fire or an axe frees you from the Tangler. Carry a lit torch." },
      { true: true, text: "Hit the bark and it peels. Hit it twice and it is flesh." },
      { true: false, text: "Briarbanes only grow where a murder was done." },
      { true: false, text: "Cut the main stem and the whole grove dies." }
    ],
    gigFit: {
      verb: "Stop / Bury",
      butPlus: "Monster result on Eruwynd and Drakeholm arches, in forest or ruin. Good with a hazard: a pod near a cliff.",
      patronHook: "A University botanist has found a 'cooperative' briarbane seedling and wants a root sample. The seedling disagrees.",
      cityName: "\"Red-weed\": Doorish Hills farmers' word, and nobody grows a garden near it."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Lurker",
    name: "Forest Keepers",
    description: "Every shadow hides a predator. A cat that shimmers where it walks, a many-legged " +
      "serpent with a stare like frost, and a druid who has become the forest's own hand.",

    roster: [
      { name: "Duskprowler", level: 6, hp: 70, speed: "8",
        actions: [
          P("Illusory aura", "Attacks against the Duskprowler have Disadvantage 2. Damage suppresses this effect until the end of the next hero's turn."),
          A("Ravage", "1 Action, ×2", "1d8+5", ""),
        ] },
      { name: "Basilisk", level: 7, hp: 60, armor: "Medium",
        actions: [
          A("Stone gaze", "1 Action, Reach 16", "—", "Lithify 1 creature who can see you. Lithify: max actions reduced by 1 (lasts 10 minutes, can stack). Lithified 3 times: Petrified."),
          A("Envenom", "1 Action", "d44", "Advantage against creatures with fewer than 3 actions. Use after Stone gaze."),
        ] },
      { name: "Druid", level: 8, hp: 90,
        actions: [
          A("Beastshift", "1 Action", "—", "Gain +4 Speed and Medium Armor until the beginning of your next turn. Then attack 2×, 1d4+10, with advantage."),
          A("Hurricane", "1 Action, Reach 3, AoE", "4d4+10", "To enemies. On damage, move targets anywhere within Reach. Use instead of Beastshift."),
        ] },
    ],
    allowConditions: ["Petrified"],
    stats: { stage: "13+" },

    tactics: "Wants intruders gone, or fed to the forest. The Duskprowler picks the one at the back, the Basilisk looks at the one with the " +
      "fewest actions, and the Druid moves the party where it wants them. Breaks off when Bloodied, into the trees.",
    sources: SRC + "Forest Denizens, forest keepers.",

    designNote:
      "Official Nimble blocks. The Basilisk is the one place this book keeps a printed " +
      "Petrified: three stacked Lithify gazes over 10 minutes. It is gradual, telegraphed, and costs " +
      "an action per stack rather than a turn, so it stays. If a Sejr table wants it gentler, cap Lithify at two " +
      "stacks and let the third only Slow. The Duskprowler wants area damage or a hero with " +
      "advantage to spare, and the Druid is a mobility controller who moves the party around its trees.",

    traits: [
      "The Duskprowler's coat shimmers, and the edge of it is always somewhere you did not look.",
      "The Basilisk's scales are lichen-grey. It is hard to tell where the stone ends and the snake begins.",
      "A stuffed owl sits on the Druid's shoulder, and speaks.",
      "A lantern hangs in its mane. The light is steady, and green.",
      "Its eyes are the colour of old bronze, and it blinks more slowly than anything alive.",
      "A thorny crown of deadwood, and every leaf on it is bright."
    ],
    encounters: [
      "A woodsman begs the party not to go further in. He is made of stone from the knees down, and still talking.",
      "A Druid greets the party with a smile, an offer of tea, and a polite request to leave the forest alone.",
      "A cat-shaped shimmer paces the party's flank for an hour, and always disappears when looked at.",
      "A row of statues in a clearing, each in a different pose, each with a hint of a surprised face."
    ],
    lairs: [
      "A clearing with a dozen life-sized statues, each facing the same tree. The tree has a hollow, and the hollow has eyes.",
      "A grove where every branch bends the same way, and a cottage in the middle, with the door open.",
      "A cave of stone figures, a camp turned to rock, the fire still burning.",
      "A shrine of antlers and leaves in the heart of the forest, where a Druid sits in perfect stillness, not seeing."
    ],
    rumours: [
      { true: true, text: "Don't look it in the eye. Look at its feet, and cover your face with a cloak." },
      { true: true, text: "The cat's shimmer fades when you hurt it. Strike once and the next blow lands." },
      { true: false, text: "A Druid will not harm anyone who brings a gift. Take flowers." },
      { true: false, text: "The statues are only artwork. Nothing living was ever turned to stone here." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Monster result at Stage 13+ on forest arches. A lone Druid is a negotiation; a Basilisk is a timer.",
      patronHook: "A mage of Kartan wants a Basilisk's eye intact, as a focus. Anyone fool enough to try has not come back.",
      cityName: "\"Stone-gazers\": University term, and used as an insult among hunters."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Controller",
    name: "Cultists",
    description: "The faithful of something that does not answer. They are cheerful, and bleed " +
      "for their god in the open, and every drop makes the room a little more miserable.",

    roster: [
      { name: "Cultist", level: 1, hp: 22,
        actions: [
          A("Fanatical offering!", "1 Action", "—", "Lose 2 HP, afflict adjacent enemies with Despair. Then Dreadful blade."),
          A("Dreadful blade", "1 Action", "1d6+4", ""),
          P("Despair", "Disadvantage on all rolls. Dealing or healing any damage ends it."),
        ] },
      { name: "Fanatic", level: 3, hp: 44,
        actions: [
          A("Fanatical offering!", "1 Action", "—", "Lose 2 HP, afflict adjacent enemies with Despair."),
          A("Whispers of madness", "1 Action, vs a Despairing creature", "3d6+6", "Psychic. Grapple, escape DC 13 or any radiant damage. Can't be Defended or Interposed."),
        ] },
      { name: "Doomsayer", level: 5, hp: 66,
        actions: [
          P("Feverish chant", "Reduce all damage done to allies who can hear you to 1."),
          P("Ecstatic outburst", "3d6 psychic damage to all Despairing enemies (ignoring Defense)."),
        ] },
    ],
    stats: { stage: "4, 7-12" },

    tactics: "Wants a gift for the god, and the heroes are it. Cultists spread Despair on whoever is adjacent, the Fanatic " +
      "grapples a despairing hero, and the Doomsayer chants until the room is theirs. Never breaks off; cultists die happy.",
    sources: SRC + "Cultists/Horrors, cultists.",

    designNote:
      "Official Nimble blocks. Despair is disadvantage on every roll until the afflicted " +
      "hero deals or heals any damage, which is a one-action fix and a reason to keep a Shepherd close. " +
      "The Doomsayer reduces damage to its allies to 1 for anyone who can hear, so killing it, silencing it, " +
      "or standing out of earshot is the whole fight. The setting's cults, Children of Ibraxus and " +
      "the Serpent Cult of Vithra, use these blocks as their rank and file.",

    traits: [
      "The sigil on their robes is drawn in what looks like old paint, and is not.",
      "Smiling, softly, the way a nurse does before bad news.",
      "A tray of tiny cuts on both forearms, healed and fresh.",
      "A rope of bells around the waist that rings at each step.",
      "Their eyes follow the party, but their lips are saying prayers.",
      "A tidy ledger of names, with a tick against each one they have 'saved'."
    ],
    encounters: [
      "A cheerful cult recruiter hands out leaflets at a Lower Reaches market. Several members of the crowd are plants.",
      "A Cultist begs the party for a swift death, saying the god told him they would be the ones. He is not lying.",
      "Cultists are digging up a grave in the dark, in a hurry, singing under their breath. The grave belongs to someone the party knew.",
      "A Doomsayer preaches in an alley to a crowd of children and street vendors, who are all listening very carefully."
    ],
    lairs: [
      "A basement chapel with a ring of kneeling cushions, a basin of dark water, and a ledger of the faithful.",
      "A rented warehouse lined with black candles and an altar made of a stolen door.",
      "A hidden room behind a temple's shrine where the real worshippers meet, and the ordinary priests don't know.",
      "A tomb on the Cliffs of the Dead, repurposed, the walls re-carved in a new tongue."
    ],
    rumours: [
      { true: true, text: "Despair ends the moment you hurt or heal someone. Land a blow and you are free." },
      { true: true, text: "The Doomsayer's chant makes the rest nearly immune. Silence it or stay out of earshot." },
      { true: false, text: "Cultists hate holy symbols. Show one and they flee." },
      { true: false, text: "The Black Hand pays them. They work for coin like anyone." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result with 'cultists' as the band kind, at Stage 4 or 7-12, or 'the Children of Ibraxus'. A cheap, readable early villain with a clear opening hook.",
      patronHook: "The Archkeepers have lost an arrival to a cult. The arrival may have joined willingly. They need the party to ask.",
      cityName: "\"The Smilers\": Lower Reaches name for any cult that looks too cheerful."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Brute",
    name: "Lesser Fiends",
    description: "Small, large, and in between, and all of them wrong: a stinking little thing " +
      "that bursts, a spined fiend that spits, and a four-armed horror whose claws want to tear.",

    roster: [
      { name: "Stenchling", level: "1/2", hp: 14,
        actions: [
          A("Bite", "1 Action", "1d6+1", "Can't crit."),
          P("Putrid cloud", "On death, Reach 2, AoE: 2d6 to enemies."),
        ] },
      { name: "Spiny Fiend", level: 4, hp: 48,
        actions: [
          P("Spines", "Melee attackers take 4 damage."),
          A("Claws", "1 Action, ×2", "1d6+4", ""),
          A("Shoot spine", "1 Action, Range 12", "1d6+4", "Use instead of Claws."),
        ] },
      { name: "Glabrezu", level: 14, hp: 120, armor: "Heavy",
        actions: [
          A("Doomclaw", "1 Action, ×2, Reach 2", "1d6+20", "On damage, Grappled, escape DC 16. If Grappled by both claws, you must escape from each."),
          A("Tear asunder", "1 Action, vs a creature Grappled by both claws", "50", "Unpreventable damage. Then, if the target is Dying: DC 16 STR save or be torn in two, dying instantly."),
        ] },
    ],
    stats: { stage: "9-12, 13+" },

    tactics: "Wants a mess. Stenchlings run at the nearest enemy and burst, Spiny Fiends shoot from behind them, and a Glabrezu " +
      "takes the toughest hero with both claws. Never breaks off while its summoner is watching.",
    sources: SRC + "Cultists/Horrors, fiends.",

    designNote:
      "Official Nimble blocks. Stenchlings are cheap bomb-carriers, and killing one adjacent " +
      "to a friend is worth thinking about. The Spiny Fiend punishes melee with 4 damage and shoots 12 spaces. " +
      "The Glabrezu is a level 14 fiend whose Tear Asunder ends a Dying hero outright, so " +
      "keep its victim out of two grips at once. Cultist rites can call the first two.",

    traits: [
      "It smells of boiled eggs and wet iron.",
      "Pale yellow pustules pulse on its back like second hearts.",
      "A broken pen sticks out from one of its spines. A scribe's.",
      "It hums the same off-key hymn, over and over.",
      "A bell around its neck, a cat's, that tinkles with each step.",
      "A crooked grin, with one tooth too many, and it is pleased."
    ],
    encounters: [
      "A crowd of tiny fiends carries a cauldron down the street. They stop, look at the party, and one of them bows.",
      "A summoner's botched ritual has left a Spiny Fiend in a locked cellar, sulking. It wants to go home. The summoner wants it gone.",
      "A shopkeeper begs the party to keep a Glabrezu at bay for an hour. He has a contract, a clause, and a pen.",
      "A stenchling has crawled into the party's pack and is waiting."
    ],
    lairs: [
      "A smoky cellar with sulfur stains in a perfect circle on the floor, and a half-burnt contract on a stand.",
      "A fountain in a ruined plaza that runs with black, oily water, and the surrounding stone is cracked.",
      "A room in an abandoned manor with a door that opens onto a different place every time.",
      "A Maphotar wreck, half-sunk in bone sand, where a Glabrezu keeps a pile of broken weapons."
    ],
    rumours: [
      { true: true, text: "Don't kill a stenchling next to a friend. It bursts." },
      { true: true, text: "Spiny Fiends are brutal in melee. Shoot them." },
      { true: false, text: "Fiends cannot cross a line of salt." },
      { true: false, text: "A Glabrezu can be bargained down. It will accept anything of value." }
    ],
    gigFit: {
      verb: "Stop / Bury",
      butPlus: "Monster result at Stages 9-12 for the small ones, and 13+ for a Glabrezu. Good as the summoned aftermath of a cult fight.",
      patronHook: "A mage of Kartan summoned something she should not have and has locked it in a cellar. She wants it sent home without the Golden Council finding out.",
      cityName: "\"Imps\": Market Square word for anything with horns, accurate or not."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Controller",
    name: "Spiders",
    description: "A web is never only a web. These spin their traps wide, sit at the centre, and " +
      "wait for something to touch a thread. Ettercaps do it with a wire.",

    roster: [
      { name: "Giant Spider", level: 2, hp: 30,
        actions: [
          A("Shoot web", "1 Action, Range 6", "1d8+2", "Restrained, escape DC 12 or any slashing or fire damage."),
          A("Bite", "1 Action, vs a Hampered creature", "1d8+5", "Poisoned (healing ends). Use instead of Shoot web."),
        ] },
      { name: "Ettercap", level: 4, hp: 50,
        actions: [
          A("Web garrote", "1 Action", "1d8+10", "Grappled, escape DC 12, and Silenced until escape."),
        ] },
      { name: "Nestweaver", level: 6, hp: 50, armor: "Medium",
        actions: [
          A("Swarm", "1 Action", "—", "Summon 3 spider minions (size d8). Then choose 1: Shoot web or Bite."),
          A("Shoot web", "1 Action, Range 6", "1d8+2", "Restrained, escape DC 12 or any slashing or fire damage."),
          A("Bite", "1 Action, vs a Hampered creature", "1d8+10", "Poisoned (healing ends)."),
        ] },
    ],
    stats: { stage: "7-12, 13+" },

    tactics: "Wants prey stuck first and eaten second. Webs the one who will not be missed, bites the Restrained, and the Ettercap " +
      "garrotes whoever is talking. Breaks off when Bloodied, up the web.",
    sources: SRC + "Underground, spiders.",

    designNote:
      "Official Nimble blocks. Everything here is Hampered bait: Restrained is a bite on a " +
      "plate. The Ettercap's Silence matters most against Mages, Songweavers, and Commanders, and the " +
      "Nestweaver's three minions make the room feel like a spider swarm. Fire and slashing are the keys, " +
      "and a hero with a torch changes the encounter. Lower Reaches cellars and Lost Cisterns beams.",

    traits: [
      "Its web has a hero's lost button caught in it, a long way up.",
      "The Ettercap wears a fine human coat, a size too small, with a hero's initials stitched inside.",
      "A neat little stack of cocoons hangs overhead, labelled with tiny knots.",
      "The web twangs a faint, musical note, which changes with the weight.",
      "It sings to its web, softly, in a human lullaby.",
      "Its legs are bright green in the torchlight, and its eyes are red."
    ],
    encounters: [
      "A hero touches a tripwire in an otherwise empty hall. Far above, something stirs.",
      "A woman hangs from the ceiling in a cocoon, alive, whispering for help. The spider is waiting for someone to cut her down.",
      "An Ettercap offers the party a deal: leave the passage, and it will leave them be. It has a very pleasant voice.",
      "A cellar door is stuck. Behind it, a perfect, silent web, shaped like a doorway."
    ],
    lairs: [
      "A cellar with a web across every surface, thick as cloth, and a large, dark shape in a corner, swaying.",
      "A ruined mine shaft hung with cocoons, some old, some fresh, some still moving.",
      "A drain junction whose ceiling is invisible under the webs. A single glint of metal marks a dropped sword.",
      "An abandoned inn, every bed made, every pillow wrapped in silk."
    ],
    rumours: [
      { true: true, text: "Slashing or fire frees you from a web. Keep a knife in your hand." },
      { true: true, text: "The Ettercap goes for whoever is giving orders. Don't be loud." },
      { true: false, text: "Spiders fear light. Open a window and they scatter." },
      { true: false, text: "The big one is the queen. Kill her and her children die." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Monster result at Stages 7-12 in a cellar or cistern, and any Deathreach or Terrache arch. Good with a rescue: someone is already in a cocoon.",
      patronHook: "A Black Hand fence lost a shipment in a Lower Reaches cellar, and three runners to the web. He wants the shipment, and the runners if they are alive.",
      cityName: "\"Weavers\": cellar-dwellers' word for the web-folk, and the first thing a hero learns in the Lower Reaches."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Brute",
    name: "Deep Horrors",
    description: "Nightmarish denizens of the deep, lurking in dark tunnels and cavernous depths, " +
      "ready to ensnare or devour any intruders: a chitin-plated tunneller, a living cloak, and a worm.",

    roster: [
      { name: "Umber Hulk", level: 10, hp: 80, armor: "Heavy", speed: "6",
        actions: [
          A("Confounding pheromones", "1 Action, Reach 3", "—", "Enemies make a DC 14 WIL save or become Confused. Each time they fail, gain advantage 1 on the save this encounter. Confused: the GM spends 1 action this round."),
          A("Mandible & claws", "1 Action, ×2", "1d10+10", "Use after Confounding pheromones."),
        ] },
      { name: "Cloaker", level: 13, hp: 110, speed: "Fly 10",
        actions: [
          P("Ambusher", "Cloakers always start first and heroes roll Initiative with disadvantage."),
          P("Mutual harm", "You take half damage from attacks while Grappling a creature (they take the other half)."),
          A("Wrap", "1 Action", "2d10+20", "Grappled, escape DC 15."),
          A("Horrifying wail", "1 Action, Reach 6, AoE", "—", "All others make a DC 15 WIL save, or become Frightened and must spend an Action to move as far away as possible. Use instead of Wrap."),
        ] },
      { name: "Great Worm", level: 16, hp: 140, armor: "Heavy", speed: "8 (burrow 8)",
        actions: [
          P("Tremor sight", "Advantage against targets who moved this round, Disadvantage otherwise."),
          A("Crush", "1 Action, Line 3×6, AoE", "d88", "Failed DC 18 DEX save. Creatures who fail can spend 1 Action to dive out of the way instead, moving half their speed and landing Prone."),
          A("Bite", "1 Action, Reach 6", "1d4+50", "On crit, Swallowed. Swallowed: you take 20 damage at the start of your turn. Your attacks cannot miss and ignore armor. Use instead of Crush."),
        ] },
    ],
    stats: { stage: "13+" },

    tactics: "The Hulk wants the tunnel. The Cloaker wants a meal in the dark. The Worm wants anything that moves. " +
      "All of them break off when Bloodied, into the rock or the dark.",
    sources: SRC + "Underground, deep horrors.",

    designNote:
      "Official Nimble blocks. Three solo-grade horrors. The Umber Hulk steals actions, " +
      "the Cloaker steals the first round, and the Great Worm punishes anyone who moves. Each is a high-level " +
      "threat and a terrain problem, so use one per episode and make the map do half the work. " +
      "They belong to Deathreach's Abhorrent Vats and Terrache's deep caves, not the city.",

    traits: [
      "Its carapace is the colour of wet slate, and scraped bright where it has been digging.",
      "A deep, rhythmic scraping can be heard long before it arrives.",
      "The Cloaker looks like a spare coat and smells like a wet dog.",
      "The Worm trails a train of loose stones and bones.",
      "It tilts its head to the side, listening, and moves only when it hears a step.",
      "Its eyes are blank and covered in a clear film."
    ],
    encounters: [
      "The party hears a grinding below. The walls are warm.",
      "A coat hangs on a hook in an empty hall. It was not there a moment ago.",
      "A hero's footsteps stop echoing. Nothing else in the cave moves.",
      "A tunneller bursts from the wall behind them, shouting, and every hero feels the world slip."
    ],
    lairs: [
      "A tunnel network of perfectly smooth, circular passages, with a polished floor and no sign of how they were cut.",
      "A cavern whose roof is hung with dark, motionless, cloak-like shapes.",
      "A pit in the earth miles deep, ringed with the carcasses of larger things.",
      "A long, straight, dry corridor, its floor a delicate sheet of dust. Nothing has crossed it in years."
    ],
    rumours: [
      { true: true, text: "The Worm hears feet. Stand still and it will lose you." },
      { true: true, text: "A cloaker takes half what you give it. Attack it from range." },
      { true: false, text: "Umber hulks are blind. Wear black." },
      { true: false, text: "A Great Worm that swallows you can be cut out of. It always lets go if you hurt it." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster result at Stage 13+ on Deathreach and Terrache arches. One per episode, with a map that matters.",
      patronHook: "A Black Hand fixer has a tunneller digging under a Golden Council vault. He says it is a coincidence, and he wants the party to stop it before the Council hears.",
      cityName: "\"Diggers\": duergar word, and the only thing a duergar will say to a stranger about one."
    }
  },
];
