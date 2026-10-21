// New to this book (not in the GM Guide). Stats follow the GM Guide Monster Builder table by level.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "City of Arches",
    tier: "Standard",
    role: "Skirmisher",
    name: "The Gilded Hands",
    description: "Four professionals in good boots who look a lot like the party in a mirror. They " +
      "are paid on time, they are polite, and they got to the job before you did.",

    roster: [
      { name: "Maren Vale, Commander", level: 3, hp: 41, armor: "Medium",
        actions: [
          A("Rapier", "1 Action, ×2", "1d8+3", ""),
          A("Form up!", "Free, 1/round", "—", "Two allies within 8 spaces move up to 4 spaces."),
          P("Contract", "The Hands do not die for coin. When Maren calls the retreat, every member disengages for free and leaves."),
        ] },
      { name: "Tobin Quill, Cheat", level: 2, hp: 24,
        actions: [
          A("Dirty knife", "1 Action, ×2", "1d6+2", "Advantage against a target adjacent to one of the crew."),
          A("Pick pocket", "1 Action, adjacent", "—", "Finesse contest. On a win, takes one unsecured item. Never a held item."),
          A("Smoke and mirrors", "Reaction, 1/encounter, when Bloodied", "—", "Invisible until he attacks, and moves 4 spaces."),
        ] },
      { name: "Ysolde Rook, Hunter", level: 2, hp: 27,
        actions: [
          A("Longbow", "1 Action, Range 12", "2d6+3", ""),
          A("Mark quarry", "Free, 1/round", "—", "One creature in sight is Marked until the end of the encounter. The first attack each round by a crew member against a Marked creature has advantage."),
          A("Snare", "1 Action, 1/encounter, Range 8", "—", "2-space radius. DEX save DC 11 or Restrained (escape DC 11)."),
        ] },
      { name: "Brother Anselm, Shepherd", level: 2, hp: 31,
        actions: [
          A("Mace", "1 Action", "1d8+3", ""),
          A("Searing light", "1 Action, Range 8", "1d8+2", "Radiant. Double against undead."),
          A("Mend", "1 Action, Range 6", "2d6+4", "Heals an ally."),
          A("Sanctuary", "Reaction, 1/encounter, Range 6", "—", "When an ally would drop to 0 HP, they are at 1 HP instead."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Wants the job done first, cleanly, with nobody dead and nobody able to say who did it. Marks the best hero, snares " +
      "the best escape, and takes what they came for. Breaks off the moment Maren calls it, usually after one clear win.",
    sources: "Original to this book. Crew roll: Neutral; wealthy; locally known; secret 'In debt to the Black Hand'; tactics 'Buy information' and 'Cache resources', per the Sejr rival-crew tables.",

    designNote:
      "A rival party built to be met more than once. They are not villains: they take the same jobs, " +
      "for the same patrons, and they are slightly better at it. They fight when cornered or paid, and " +
      "run when they are not winning, so the party never gets the clean kill that ends the thread. " +
      "That is the point. Put them on the faction tracker the second time they are met, and let the " +
      "heroes' choices, not the dice, move the clock. Levels 2 and 3 suit a party of level 1-3; for " +
      "higher parties, add a level to each member and a level to the damage.",

    traits: [
      "Maren has a matched pair of rapiers and uses only one, and pretends not to notice.",
      "Tobin counts his coins in front of everyone, loudly, then forgets one on purpose.",
      "Ysolde has a fine bow and no arrows of her own. She buys every arrow she shoots, fresh.",
      "Anselm wears the holy symbol of a god nobody has heard of, and will not say which.",
      "The crew shares a single tattoo, a gilded hand, in different places on each of them.",
      "One of them (roll to see) is quietly terrified of the Black Hand, and everyone else knows it."
    ],
    encounters: [
      "The crew is already at the door the party came to open, resting in a neat row, as if it were a bus stop. They nod and offer to share information, for a price.",
      "The Hands approach with a proposal: split the job, split the pay. Tobin's smile says there is a trap somewhere. Maren's says there isn't.",
      "The party finds a wounded Hand, abandoned, bleeding. The rest of the crew has gone ahead and left her behind, deliberately.",
      "The crew is in the middle of being robbed by someone worse. They are very polite about asking for help."
    ],
    lairs: [
      "A rented upper room in the Market Square with a map of the city pinned flat on the table, three jobs circled, and one of them is the party's.",
      "A safe-house cache: a locked chest with spare kit, a coded ledger, and a note, in Maren's handwriting, addressed to the party by name.",
      "A tavern table the crew has made their own: the same four chairs, the same time, every evening, and the barman has orders about what to tell strangers.",
      "A Black Hand fixer's back room, where the crew goes on the first of the month to pay down what they owe."
    ],
    rumours: [
      { true: true, text: "They don't fight to the death. Show them it will cost more than the job is worth and they walk." },
      { true: true, text: "They owe the Black Hand. Whatever the crew does, someone in the Lower Reaches is watching." },
      { true: false, text: "The Hands are a Golden Council front. Every job they take is on Roselyn Zeshe's list." },
      { true: false, text: "The Hands only work alone. If you see one, the others aren't far, and you are about to be robbed." }
    ],
    gigFit: {
      verb: "Find / Prove / Steal",
      butPlus: "Faction result at Stages 1-8, or the NPC-room 'Rival crew', at most once per episode. The second meeting puts them on the tracker.",
      patronHook: "Whatever patron the party works for, the Hands have been hired to do the same job. The patron knows. The patron wants to see who is better.",
      cityName: "\"The Hands\": Market Square shorthand. A Hand job is one that has already been done properly.",
      extra: [
        ["Rival clock (6)", "1 Hands reach the objective first. 2 They offer a split. 3 They take a job the party was promised. 4 The Black Hand calls their debt. 5 The party is offered the debt, or the crew's names. 6 The Hands disband, switch sides, or die. The party's choices move it, never But+ alone."],
        ["Campaign ladder", "Find: trace the crew's buyer. Steal: lift their cache before the Black Hand does. Prove: win the same contract in the open, or refuse it. Each rung can end with the crew allied, owned, or buried."],
      ],
    },
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Hedge Casters",
    description: "Low-level magic, city-grown: a witch in a back alley, a masquer from the Theater of " +
      "Whispers, a clerk with a seal, and a Kartan student a few years from being good at it.",

    roster: [
      { name: "Hedge Witch", level: 1, hp: 18,
        actions: [
          A("Pinch of spite", "1 Action, Range 6", "1d6+2", "Psychic."),
          A("Hex of clumsy feet", "1 Action, Range 8", "—", "WIL save DC 10 or Slowed until the end of the target's next turn."),
          A("Familiar crow", "Reaction, 1/round", "—", "When an enemy within 6 attacks, the crow flaps in their face and the attack is disadvantaged."),
        ] },
      { name: "Masquer", level: 2, hp: 24,
        actions: [
          A("Flash powder", "1 Action, Range 6", "—", "DEX save DC 11 or Blinded until the end of the target's next turn."),
          A("Stage fright", "1 Action, 1/round, Range 8", "—", "WIL save DC 11 or Frightened of the Masquer until the end of the target's next turn."),
          A("Mirror masks", "1 Action, 1/encounter", "—", "Two decoys appear within 4 spaces. Each is a 1 HP minion that deals no damage. While a decoy is adjacent, attacks against the Masquer have disadvantage."),
        ] },
      { name: "Writ-Binder", level: 3, hp: 38, armor: "Medium",
        actions: [
          A("Writ of seizure", "1 Action, Range 8", "—", "DEX save DC 12 or Restrained by glowing script (escape DC 12, or an ally touching it breaks it). The target still acts."),
          A("Writ of silence", "1 Action, 1/encounter, Range 6", "—", "WIL save DC 12 or Silenced until the end of the target's next turn."),
          A("Writ of citation", "Free, 1/round", "—", "A target in sight is Taunted until the end of their next turn: disadvantage on attacks against anyone but the Writ-Binder."),
        ] },
      { name: "Kartan Hedge-Mage", level: 4, hp: 42,
        actions: [
          A("Slowing bolt", "1 Action, Range 12", "2d6+5", "On damage, Slowed until the end of the target's next turn."),
          A("Gravity well", "2 Actions, 1/encounter, Range 8", "—", "2-space radius. STR save DC 13 or pulled 3 spaces toward the centre and knocked Prone."),
          A("Overreach", "Reaction, when crit by a hero", "1d8", "Backlash: it takes the damage and loses its next Free action."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Wants to win without being touched. Casters hang back behind whoever is nearest, the Masquer blinds the first hero to close, " +
      "the Writ-Binder pins the strongest, and the Hedge-Mage puts the party in one heap. Breaks off when out of tricks.",
    sources: "Original to this book. Fills a gap in low-level control: below level 8 the GM Guide has only the Bandit Mage and the Cultists as casters, and nothing at low level that Blinds, Frightens, Taunts or pulls.",

    designNote:
      "Four early controllers, each with a different verb: Slowed, Blinded and Frightened, Restrained " +
      "and Silenced and Taunted, Slowed and pulled. None takes a turn: the Restrained hero still acts, " +
      "the Blinded one still moves, the Taunted one still attacks. They are fragile (glass cannons: HP of a level lower, " +
      "a control rider of a level higher) and need a front line in front of them, which means " +
      "the party's own tactic is to reach them. Pair with Bandits or Cultists for a front rank, or run " +
      "one alone as a cheap, memorable duel.",

    traits: [
      "The Hedge Witch's charms rattle like seeds, and each one has a name.",
      "The Masquer is never in the same face twice, and the last one is always a hero's.",
      "The Writ-Binder stamps everything, including the floor, when nervous.",
      "The Kartan student has ink on both hands, and the ink is still moving.",
      "One of them (roll to see) is a better person than the work suggests, and knows it.",
      "A spell goes slightly wrong, harmlessly, every fight. They are a little embarrassed."
    ],
    encounters: [
      "A woman in an alley offers a hero a charm 'for free'. It is a hex. She wants to see whether it works.",
      "A masquer is selling tickets to a show that is clearly a distraction. The real show is happening three doors away.",
      "A Golden Council clerk arrives with a writ, a scroll, and two guards, to confiscate something from the party. The writ is genuine.",
      "A Kartan student has botched a spell and is trying to hide it. The spell is still in the room."
    ],
    lairs: [
      "A back-alley shop with a window of dried herbs and a counter of tiny bottles, each one labelled in a child's hand.",
      "A dressing room of the Theater of Whispers with a hundred masks on the wall and one blank.",
      "A clerk's office in a Council annexe, every surface stamped, and a locked drawer of writs.",
      "A rented room near the Laboratories of Kartan, a pile of failed experiments in the corner, one still smoking."
    ],
    rumours: [
      { true: true, text: "They are all squishy. Rush them and they fold, but mind the first spell." },
      { true: true, text: "The writ breaks if you touch the script. An ally can free you in one action." },
      { true: false, text: "Hedge casters can't do real magic. It's all tricks and smoke." },
      { true: false, text: "A Council writ is binding on anyone it touches. Don't fight it, just wait." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster or Faction result at Stages 1-8. A good first caster fight, and the rival crew's natural opposition.",
      patronHook: "The University wants a hedge witch's grimoire, and the Black Hand wants her kept quiet about who is buying.",
      cityName: "\"Back-door mages\": Kartan students' word for anyone good without a degree. Not kind."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Children of Ibraxus",
    description: "Pale, cheerful, damp, and coughing politely into a sleeve. They follow the Fetid " +
      "Prince, who is sure that the whole world will be better when everyone is a little unwell.",

    roster: [
      { name: "Mire Acolyte", level: 1, hp: 20,
        actions: [
          A("Rotten blade", "1 Action", "1d6+4", "On damage, Poisoned until the end of the target's next turn."),
          P("Carrier", "A Poisoned creature that starts its turn adjacent to a Child takes 1d4 damage."),
        ] },
      { name: "Censer-Bearer", level: 2, hp: 28,
        actions: [
          A("Censer swing", "1 Action", "1d6+3", ""),
          A("Fetid smoke", "1 Action, Range 6", "—", "2-space radius. STR save DC 11 or Poisoned until the end of the target's next turn. The smoke stays for 2 rounds as Difficult Terrain."),
        ] },
      { name: "Pestilent Preacher", level: 4, hp: 46,
        actions: [
          A("Plague sermon", "1 Action, 1/round", "—", "Every enemy within 8 who can hear: STR save DC 12 or Poisoned until the end of their next turn. Enemies already Poisoned are also Slowed."),
          A("Fever touch", "1 Action", "2d6+4", "On damage, a Poisoned target is Slowed."),
          P("Share the fever", "When an ally within 6 takes damage, the Preacher takes half of it instead (1/round)."),
        ] },
    ],
    stats: { stage: "7-10, 13+" },

    tactics: "Wants the world a little sicker. Smoke first, then the sermon on whoever breathes it, and the blades on whoever is Slowed. " +
      "Never breaks off: sickness is a gift, and they are glad to give it.",
    sources: "Original to this book. The Children of Ibraxus are the faction named in the Sejr faction table; Ibraxus is the Fetid Prince of the setting (Choul).",

    designNote:
      "A rot cult built as a ratchet: Poisoned makes every roll worse, Slowed makes it harder to leave, " +
      "and the Carrier ticks 1d4 on anyone Poisoned beside them. Nothing takes a turn. The party's " +
      "answer is distance and healing: Shepherds end Poisoned, wind and fire disperse the smoke. The " +
      "Preacher's Share the fever means the cult wins by attrition if the party goes after the " +
      "wrong target. Use as the cult at the end of a Lower Reaches drain, or the arriving " +
      "edge of Ibraxus's army.",

    traits: [
      "A faint buzz of flies that follows them, politely, never landing.",
      "Their robes are damp even in dry weather and smell of green water.",
      "They offer a cup of tea. The tea is warm, and the cup is always chipped.",
      "A boil on the neck of every one, tied off with a ribbon, a mark of favour.",
      "They hum a three-note lullaby when they walk, and do it slightly flat.",
      "A hanging tag on the wrist, listing the date they were infected, and the date they hope to be 'blessed'."
    ],
    encounters: [
      "A sick child is carried through the party's path by a smiling cultist. The child is genuinely ill. The cult would like the party to take her somewhere.",
      "A group of Children offer free bowls of soup at a crossroads. The soup is good, and the pot is the same one they use for their rites.",
      "A Censer-Bearer walks the street ringing a bell, calling the sick to follow. A line of the unwell follows, quietly, in their nightclothes.",
      "A Preacher stands on a barrel and talks about the beauty of being a vessel. Half the audience is infected, and happy."
    ],
    lairs: [
      "A drain-mouth chapel in the Lower Reaches where candles burn green, and every wall is damp to the touch.",
      "A converted hospice, where the beds are full, the nurses are cultists, and everyone is being kind.",
      "A cistern where the water is the wrong colour, and the cult has built a baptistery in its middle.",
      "An abandoned apothecary with every bottle opened, and a back room set up as a feast."
    ],
    rumours: [
      { true: true, text: "Poisoned means everything is harder, and worse next to a cultist. Fight them at range." },
      { true: true, text: "The Preacher takes half the damage meant for the others. Go for the preacher first." },
      { true: false, text: "The disease is catching. Touch one and you'll be infected for life." },
      { true: false, text: "They are harmless, just sick people with strange habits." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result with 'the Children of Ibraxus' at Stages 7-10, and the cult's influence rising at Stage 13+. Pairs with Oozes and Stenchlings.",
      patronHook: "A priest from the Temple of the Three Sisters asks the party to find the source of a new fever in the Lower Reaches. The fever has a pulpit.",
      cityName: "\"The Damp\": Lower Reaches name, and a threat: \"Keep that up and the Damp'll have you.\""
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Serpent Cult of Vithra",
    description: "Fanatics who bathe in the blood that runs from a stone idol's mouth, and the ones " +
      "who survive come back different: scaled at the wrists, still, and watchful.",

    roster: [
      { name: "Blade-Dancer", level: 2, hp: 28,
        actions: [
          A("Twin blades", "1 Action, ×2", "1d6+3", "On crit, Slowed (a deep cut)."),
          A("Sway", "Reaction, 1/round, when targeted by a melee attack", "—", "Moves 2 spaces first. If that takes it out of reach, the attack misses."),
        ] },
      { name: "Serpent-Charmer", level: 3, hp: 38,
        actions: [
          A("Call the coil", "1 Action, Range 8", "—", "2-space radius. DEX save DC 12 or Restrained by writhing snakes (escape DC 12, or any fire or slashing damage). The target still acts."),
          A("Snake swarm", "1 Action, 1/encounter", "—", "Summon 2 snake minions (size d6)."),
          A("Flute", "Reaction, 1/round", "—", "A snake within 6 moves to an adjacent space for free."),
        ] },
      { name: "Voice of the Idol", level: 5, hp: 66,
        actions: [
          A("Serpent-King's kiss", "1 Action", "2d6+8", "Poison. On damage, the target is Poisoned until the end of their next turn."),
          A("Hiss of Vithra", "1 Action, 1/round, Range 8", "—", "Every enemy who can hear: WIL save DC 13 or Frightened of the Voice until the end of their next turn."),
          P("Venom-bathed", "Immune to Poisoned. Resists poison damage."),
        ] },
    ],
    stats: { stage: "7-12" },

    tactics: "Wants blood for the idol. Dancers go for the dangerous melee hero, the Charmer pins the next, and the Voice frightens " +
      "whoever has the most friends. Never breaks off before the Voice falls, then all scatter.",
    sources: "Original to this book. Vithra, the Idol of the Serpent King and the Night of Vithra's Kiss are canon (Chapter 8, the Deadlands).",

    designNote:
      "A blade-and-coil cult: it works by Restrained and Frightened rather than Poisoned, so it " +
      "plays differently from the Children of Ibraxus. The Charmer's snakes pin without " +
      "removing actions, and the Voice's hiss makes heroes approach slowly. Fire frees the coil. " +
      "Pair with Snakemen, who treat the Voice as a prophet, and Giant Constrictors from the setting.",

    traits: [
      "Scales at the wrists and ankles, bright green and fresh, as if recently shed.",
      "A tattoo of a serpent that moves, very slightly, whenever a heart beats near.",
      "Their eyes shine in the dark, just a little, like a cat's.",
      "They hold their blades loosely, like dancers.",
      "A pet snake around the Charmer's neck. It watches the heroes, and nods.",
      "Their voices have a slight hiss on the S sounds, noticeable only when angry."
    ],
    encounters: [
      "A procession of the cult walks through the street at dusk, singing softly. At the back, a covered cart drips something dark.",
      "A young man in a plain robe begs the party to help him leave the cult. His arms are scaled to the elbow. He has until the next ceremony.",
      "The Charmer sits in the market, playing a flute for a crowd of children. A line of small snakes follows the melody out of a drain.",
      "A Blade-Dancer challenges the party's best fighter to a duel, 'for the honour of the Serpent King'. It's a distraction."
    ],
    lairs: [
      "A hall of serpent statues in a dry cistern, each one with a bowl of dark liquid at its feet, drained a little at a time.",
      "A bathhouse closed for repairs, steam still rising from the main pool, and the water is the wrong red.",
      "A cellar temple with a double-headed serpent on the altar, and a ring of coiled rope around the room, still warm.",
      "A caravan, parked in a warehouse, where the cult moves its idols from city to city, always one step ahead of the Knights."
    ],
    rumours: [
      { true: true, text: "Fire or an axe cuts the coil. Carry a torch." },
      { true: true, text: "The Voice is the head of the cell. Silence or kill it, and the rest lose their nerve." },
      { true: false, text: "Their blood is poisonous. Don't let it touch your skin." },
      { true: false, text: "Every cultist has a snake inside. Cut one open and it comes out." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result with 'cultists' at Stages 7-12, or at any Stage as a Deadlands Neglect payoff. Pairs with Snakemen.",
      patronHook: "Adel Rosethorn, a Black Hand fence in the Lower Reaches, has a buyer for the Idol's blood. He wants someone who doesn't mind being bathed.",
      cityName: "\"Kissers\": Lower Reaches name, as in 'they've been kissed'."
    }
  },
];
