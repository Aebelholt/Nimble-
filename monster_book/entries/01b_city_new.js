// New to this book (not in the GM Guide). Stats follow the GM Guide Monster Builder table by level.
// SEB pass: one core line; each member at most three one-clause actions.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "City of Arches",
    tier: "Standard",
    role: "Skirmisher",
    name: "The Sterling Scabbards",
    seb: true,
    core: "The party in a mirror: four professionals who take the same jobs for the same patrons, and got there first.",
    description: "Good boots, clean kit, polite manners, paid on time. They owe the Black Hand, and " +
      "everyone in the Lower Reaches knows it.",

    roster: [
      { name: "Maren Vale, Commander", level: 3, hp: 27, armor: "Medium",
        actions: [
          A("Rapier", "1 Action, ×2", "1d8+1", ""),
          A("Form up!", "Free, 1/round", "—", "Two allies within 8 move up to 4 spaces."),
          P("Contract", "When Maren calls a retreat, each Scabbard moves away without provoking. Blocked, held or bargained with, they stay."),
        ] },
      { name: "Tobin Quill, Cheat", level: 2, hp: 24,
        actions: [
          A("Dirty knife", "1 Action, ×2", "1d6+2", "Advantage against a target beside another Scabbard."),
          A("Pick pocket", "1 Action, adjacent", "—", "Finesse contest: takes one unsecured item, never a held one."),
          A("Smoke and mirrors", "Reaction, 1/encounter, when Bloodied", "—", "Invisible until he attacks, and moves 4."),
        ] },
      { name: "Ysolde Rook, Hunter", level: 2, hp: 27,
        actions: [
          A("Longbow", "1 Action, Range 12", "2d6+3", ""),
          A("Mark quarry", "Free, 1/round", "—", "One creature is Marked for the encounter. Each round the first Scabbard attack on it has advantage."),
          A("Snare", "1 Action, 1/encounter, Range 8", "—", "2-space radius. DEX save DC 11 or Restrained (escape DC 11)."),
        ] },
      { name: "Brother Anselm, Shepherd", level: 2, hp: 31,
        actions: [
          A("Searing light", "1 Action, Range 8", "1d8+2", "Radiant. Double against undead."),
          A("Mend", "1 Action, Range 6", "2d6+4", "Heals an ally."),
          A("Sanctuary", "Reaction, 1/encounter, Range 6", "—", "An ally who would drop to 0 HP stays at 1."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Gets the job done first and cleanly. Marks the best hero, snares the exit, takes the prize, and leaves on Maren's word.",
    sources: "Original. Built from the Sejr rival-crew tables: Neutral, wealthy, locally known, in debt to the Black Hand.",

    designNote:
      "Rivals, not villains. They run when losing, but a crew that cannot run can be taken. Two Scabbards suit one hero; all four suit a party of three. Put them on the tracker at the second meeting.",

    traits: [
      "Maren carries a pair of rapiers and uses only one.",
      "Tobin counts coins aloud, then leaves one behind on purpose.",
      "Ysolde buys every arrow fresh and never owns a spare.",
      "Anselm's holy symbol belongs to a god nobody has heard of.",
      "All four wear a sterling scabbard-tip, each on a different weapon.",
      "One of them (roll) is terrified of the Black Hand, and the rest know."
    ],
    encounters: [
      "They are already at the door the party came to open, resting in a row. Information is for sale.",
      "They offer to split the job and the pay. Tobin's smile says trap; Maren's says not.",
      "A wounded Scabbard, left behind on purpose by the others.",
      "They are being robbed by someone worse, and ask politely for help."
    ],
    lairs: [
      "A rented room with a city map and three jobs circled. One is the party's.",
      "A cache chest: spare kit, a coded ledger, and a note to the party by name.",
      "Their tavern table: the same four chairs every evening, and a barman with orders.",
      "A fixer's back room where they pay down the debt on the first of the month."
    ],
    rumours: [
      { true: true, text: "They don't die for coin. Make it cost more than the job and they walk." },
      { true: true, text: "They owe the Black Hand. Someone below is always watching them." },
      { true: false, text: "They are a Council front. Every job is on Zeshe's list." },
      { true: false, text: "They always work alone. One Scabbard means you're about to be robbed." }
    ],
    gigFit: {
      verb: "Find / Prove / Steal",
      butPlus: "Faction result at Stages 1-8, or the NPC-room rival crew, once per episode. The second meeting goes on the tracker.",
      patronHook: "The party's patron hired the Scabbards for the same job, to see who is better.",
      cityName: "\"Tips\": a tip job is one already done properly.",
      extra: [
        ["Rival clock (6)", "1 First to the objective. 2 Offer a split. 3 Take a promised job. 4 The Black Hand calls the debt. 5 The party is offered the debt, or the names. 6 Resolve: allied (the party took the debt), owned (the Black Hand holds them), or buried (captured, dead or disbanded). Step on when the party loses a scene to them or ignores a clue they left; step back when it outbids, exposes or helps them. Capturing or killing Maren jumps to 6."],
        ["Campaign ladder", "Find their buyer. Steal their cache before the Black Hand does. Prove it in the open, or refuse. Each rung can end with the crew allied, owned, or buried."],
      ],
    },
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Hedge Casters",
    seb: true,
    core: "City-grown magic without a degree: a back-alley witch, a Theater masquer, a Council clerk, a Kartan dropout.",
    description: "Four low-level casters, each a different way of being in your way. They need " +
      "someone in front of them.",

    roster: [
      { name: "Hedge Witch", level: 1, hp: 18,
        actions: [
          A("Pinch of spite", "1 Action, Range 6", "1d6+2", "Psychic."),
          A("Hex of clumsy feet", "1 Action, Range 8", "—", "WIL save DC 10 or Slowed until their next turn ends."),
          A("Familiar crow", "Reaction, 1/round, attacked within 6", "—", "A crow in the face: the attack on the Witch is disadvantaged."),
        ] },
      { name: "Masquer", level: 2, hp: 24,
        actions: [
          A("Flash powder", "1 Action, Range 6", "—", "DEX save DC 11 or Blinded until their next turn ends."),
          A("Stage fright", "1 Action, 1/round, Range 8", "—", "WIL save DC 11 or Frightened of it until their next turn ends."),
          A("Mirror masks", "1 Action, 1/encounter", "—", "Two harmless 1 HP decoys within 4. While one is adjacent, attacks on the Masquer are disadvantaged."),
        ] },
      { name: "Writ-Binder", level: 3, hp: 34,
        actions: [
          A("Writ of seizure", "1 Action, Range 8", "—", "DEX save DC 12 or Restrained until an ally touches the script, or escape DC 12."),
          A("Writ of silence", "1 Action, 1/encounter, Range 6", "—", "WIL save DC 12 or Silenced until their next turn ends."),
          A("Writ of citation", "1 Action, Range 8", "—", "WIL save DC 12 or Taunted by the Writ-Binder until their next turn ends."),
        ] },
      { name: "Kartan Hedge-Mage", level: 4, hp: 42,
        actions: [
          A("Slowing bolt", "1 Action, Range 12", "2d6+5", "Slowed until their next turn ends."),
          A("Gravity well", "Replaces its attacks, 1/encounter, Range 8", "—", "2-space radius: STR save DC 13 or pulled 3 to the centre and Prone."),
          A("Overreach", "Reaction, 1/round, when a hero crits it", "1d8", "Backlash on the attacker; its own next attack is disadvantaged."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Hang back behind the nearest body. Blind the first hero to close, pin the strongest, heap the rest. Leave when out of tricks.",
    sources: "Original. Fills a gap: below level 8 the GM Guide has no caster that Blinds, Frightens, Taunts or pulls.",

    designNote:
      "Each one is a different verb, and none takes a turn. Frail and harmless alone: they need a front rank " +
      "of Bandits or Cultists, and the party's job is to reach them.",

    traits: [
      "The witch's charms rattle like seeds, each with a name.",
      "The masquer never wears the same face twice. The last one is a hero's.",
      "The clerk stamps everything, the floor included, when nervous.",
      "The Kartan dropout's ink is still moving on their hands.",
      "One of them (roll) is better than the work they do, and knows it.",
      "A spell goes harmlessly wrong every fight. They are embarrassed."
    ],
    encounters: [
      "A woman offers a hero a free charm. It is a hex; she wants to see if it works.",
      "A masquer sells tickets to a distraction. The real show is three doors down.",
      "A Council clerk arrives with a genuine writ and two guards to confiscate something.",
      "A student has botched a spell and is hiding it. The spell is still in the room."
    ],
    lairs: [
      "A back-alley shop of dried herbs and tiny bottles labelled in a child's hand.",
      "A dressing room with a hundred masks on the wall and one blank.",
      "A Council annexe office, every surface stamped, a locked drawer of writs.",
      "A rented room near Kartan, failed experiments in the corner, one still smoking."
    ],
    rumours: [
      { true: true, text: "They fold if you reach them. Mind the first spell." },
      { true: true, text: "An ally's touch breaks the writ." },
      { true: false, text: "Hedge magic is all tricks and smoke." },
      { true: false, text: "A Council writ binds anyone it touches. Don't resist it." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster or Faction result at Stages 1-8. A first caster fight, and natural opposition for the rival crew.",
      patronHook: "The University wants a hedge witch's grimoire. The Black Hand wants her quiet about who buys from her.",
      cityName: "\"Back-door mages\": Kartan students' word for anyone good without a degree."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Children of Ibraxus",
    seb: true,
    core: "The Fetid Prince's faithful: cheerful, damp, and sure the world is better when everyone is a little sick.",
    description: "Pale, smiling, coughing politely into a sleeve, trailed by a polite buzz of flies.",

    roster: [
      { name: "Mire Acolyte", level: 1, hp: 20,
        actions: [
          A("Rotten blade", "1 Action", "1d6+4", "Poisoned until the target's next turn ends."),
          P("Carrier", "A Poisoned creature starting its turn beside any Child takes 1d4, once, however many Children."),
        ] },
      { name: "Censer-Bearer", level: 2, hp: 28,
        actions: [
          A("Censer swing", "1 Action", "1d6+3", ""),
          A("Fetid smoke", "1 Action, Range 6", "—", "2-space radius: STR save DC 11 or Poisoned a turn. The smoke lingers 2 rounds as Difficult Terrain."),
        ] },
      { name: "Pestilent Preacher", level: 4, hp: 46,
        actions: [
          A("Plague sermon", "1 Action, 1/round", "—", "Enemies within 8 who hear: STR save DC 12 or Poisoned a turn. Already Poisoned, also Slowed."),
          A("Fever touch", "1 Action", "2d6+4", "A Poisoned target is Slowed."),
          P("Share the fever", "When an ally within 6 is damaged, once a round, the Preacher takes half of it."),
        ] },
    ],
    stats: { stage: "7-10, 13+" },

    tactics: "Smoke first, then the sermon on whoever breathed it, then blades on the Slowed. Never breaks off.",
    sources: "Original. The Children of Ibraxus are a Sejr faction; Ibraxus, the Fetid Prince, is setting canon.",

    designNote:
      "A ratchet: Poisoned, then Slowed, then 1d4 beside a cultist. No turn is lost. Distance and " +
      "healing answer it, and the Preacher dies first.",

    traits: [
      "Flies follow them, politely, never landing.",
      "Robes damp in dry weather, smelling of green water.",
      "They offer tea in a chipped cup.",
      "A boil on each neck, tied off with a ribbon of favour.",
      "A three-note lullaby, hummed slightly flat.",
      "A wrist tag: date infected, and date hoped to be 'blessed'."
    ],
    encounters: [
      "A smiling Child carries a genuinely sick girl and asks the party to take her somewhere.",
      "Free soup at a crossroads, from the pot they use for their rites.",
      "A bell-ringer leads a quiet line of the sick, in their nightclothes.",
      "A Preacher on a barrel praises being a vessel. Half the crowd is infected, and happy."
    ],
    lairs: [
      "A drain-mouth chapel lit by green candles, every wall damp.",
      "A hospice where every bed is full and every nurse is kind.",
      "A wrong-coloured cistern with a baptistery in the middle.",
      "An apothecary with every bottle open and a feast laid in back."
    ],
    rumours: [
      { true: true, text: "Poisoned beside them gets worse. Fight from range." },
      { true: true, text: "The Preacher takes the others' wounds. Kill it first." },
      { true: false, text: "Touch one and you're infected for life." },
      { true: false, text: "They're harmless, just sick people with odd habits." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result 'the Children of Ibraxus' at Stages 7-10. Pairs with Oozes and Stenchlings.",
      patronHook: "A Temple priest wants the source of a new Lower Reaches fever. It has a pulpit.",
      cityName: "\"The Damp\": \"keep that up and the Damp'll have you.\""
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Controller",
    name: "Serpent Cult of Vithra",
    seb: true,
    core: "They bathe in the blood that runs from the Serpent King's idol. Survivors come back scaled, still, and watchful.",
    description: "Scaled at the wrists, eyes that catch the light, voices with a hiss on the S.",

    roster: [
      { name: "Blade-Dancer", level: 2, hp: 28,
        actions: [
          A("Twin blades", "1 Action, ×2", "1d6", "On crit, Slowed."),
          A("Sway", "Reaction, 1/round, targeted in melee", "—", "Moves 2 first. Out of reach, the attack misses."),
        ] },
      { name: "Serpent-Charmer", level: 3, hp: 38,
        actions: [
          A("Call the coil", "1 Action, Range 8", "—", "2-space radius: DEX save DC 12 or Restrained by snakes: escape DC 12, or fire or slashing damage frees."),
          A("Snake swarm", "1 Action, 1/encounter", "—", "Summons 2 snake minions (d6)."),
        ] },
      { name: "Voice of the Idol", level: 5, hp: 66,
        actions: [
          A("Serpent-King's kiss", "1 Action", "2d6+8", "Poison. Poisoned until the target's next turn ends."),
          A("Hiss of Vithra", "1 Action, 1/round, Range 8", "—", "Enemies who hear: WIL save DC 13 or Frightened of the Voice a turn."),
          P("Venom-bathed", "Immune to Poisoned; resists poison."),
        ] },
    ],
    stats: { stage: "7-12" },

    tactics: "Dancers take the best melee hero, the Charmer pins the next, the Voice frightens the rest. Scatter when the Voice falls.",
    sources: "Original. Vithra, the Idol and the Night of Vithra's Kiss are setting canon (the Deadlands).",

    designNote:
      "Coils and fear, with poison only from the Voice: it plays differently from the Children of Ibraxus. Fire frees " +
      "the coil. Snakemen treat the Voice as a prophet.",

    traits: [
      "Fresh green scales at wrists and ankles.",
      "A serpent tattoo that shifts when a heart beats near.",
      "Eyes that shine a little in the dark.",
      "Blades held loose, like dancers.",
      "A snake on the Charmer's shoulder, nodding at the heroes.",
      "A hiss on every S, louder when angry."
    ],
    encounters: [
      "A dusk procession sings softly. The covered cart at the back drips.",
      "A young man scaled to the elbow begs for help leaving before the next ceremony.",
      "The Charmer plays for children in a Lower Reaches square. Small snakes follow the tune out of a drain.",
      "A Dancer challenges the party's best fighter to a duel. It's a distraction."
    ],
    lairs: [
      "A dry cistern of serpent statues, a bowl of dark liquid at each one's feet.",
      "A bathhouse 'closed for repairs', steam rising, the water the wrong red.",
      "A cellar temple with a two-headed serpent altar and a ring of warm rope.",
      "A caravan of idols in a warehouse, always one step ahead of the Knights."
    ],
    rumours: [
      { true: true, text: "Fire or an axe cuts the coil." },
      { true: true, text: "Silence the Voice and the rest lose their nerve." },
      { true: false, text: "Their blood is poison. Don't let it touch you." },
      { true: false, text: "Cut one open and a snake comes out." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result 'cultists' at Stages 7-12, or a Deadlands Neglect payoff. Pairs with Snakemen.",
      patronHook: "Adel Rosethorn has a buyer for the Idol's blood and wants someone who doesn't mind being bathed.",
      cityName: "\"Kissers\": as in, they've been kissed."
    }
  },
];
