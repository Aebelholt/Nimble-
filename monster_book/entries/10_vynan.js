// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Vynan",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Common Feyr",
    seb: true,
    core: "The Yondoth's ghost-engine whispers into Vynan's sleepers, and their nightmares climb out. Wake the dreamer and it ends.",
    description: "A floating knot of grey flesh, eyes and mouths. It smells of cold sweat and burnt " +
      "sugar.",

    stats: { hp: 41, armor: "None", speed: "Fly 6", dc: 12, stage: "13+" },

    actions: [
      A("Lash of fears", "1 Action, ×2, Reach 2", "1d6+4", "Psychic."),
      A("Nightmare", "1 Action, Range 6", "", "WIL save or Frightened of it until their next turn ends. The player names what they see."),
      A("Born of a dreamer", "Passive", "", "Its dreamer sleeps within 30. Waking them (1 Action, Influence DC 12) ends it at once."),
    ],

    tactics: "Strikes whoever moves toward its dreamer. Ends the moment the dreamer wakes.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 3. Origin rebuilt from Vynan canon (the Yondoth).",

    designNote:
      "A nightmare with a plug. The fight becomes a race to find and wake the dreamer, and naming " +
      "the fear gives the table a story beat without costing a turn.",

    traits: [
      "One mouth says a hero's name in a voice that used to say it often.",
      "A child's eyes, wet and frightened. Its dreamer is young.",
      "Grey ash smelling of a kitchen nobody in Vynan remembers.",
      "Newborn, cat-sized, still deciding what to be.",
      "Its mouths sing an out-of-tune lullaby that leads to the dreamer.",
      "It drifts toward lamps and flinches from blue light."
    ],
    encounters: [
      "A street gone silent, everyone asleep mid-task, shapes drifting between them. One sleeper is the party's contact.",
      "A mother asks the party to guard her child's sleep. At midnight the air over the cot knots.",
      "The engine crew works in their sleep, feyr clustered around them.",
      "A Vynan arrival sleeps upstairs at the hostel. The cat won't go up."
    ],
    lairs: [
      "Forty twitching sleepers in a barracks, a feyr over each like breath on a cold morning.",
      "The engine room, whispering names of people not yet born.",
      "A corner worn in circles by years of pacing, a blanket and bowl at the centre.",
      "An attic of tally marks, one per night slept, that smells of burnt sugar."
    ],
    rumours: [
      { true: true, text: "Wake the dreamer and it goes out like a candle." },
      { true: true, text: "The fear is yours. Name it and you can face it." },
      { true: false, text: "Fall asleep near one and you never wake." },
      { true: false, text: "They can't follow through an arch." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Vynan arches, and anywhere a Vynan arrival sleeps.",
      patronHook: "An arrival at the Archkeepers' hostel won't stop dreaming, and the other guests are seeing things.",
      cityName: "\"Night-sweats\": hostel staff say it with a nervous laugh."
    }
  },

  {
    world: "Vynan",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Vynan Alchemist-Mage",
    seb: true,
    core: "Vynan's survivors have spent generations repairing a crashed ship. This one will melt anyone between it and the engine.",
    description: "A survivor in a patched leather coat hung with vials and retorts, goggles pushed " +
      "up on a scarred forehead.",

    stats: { hp: 49, armor: "None", speed: "6", dc: 13, stage: "13+" },

    actions: [
      A("Retort flask", "1 Action, Range 8", "2d6+5", "Acid, 1-space radius, DEX save for half. Everyone hit is Slowed."),
      A("Smoke of forgetting", "2 Actions, 1/encounter, Range 8", "", "2-space cloud: Blind inside. Ending a turn there: WIL save or Dazed."),
      A("Transmute ground", "1 Action, Range 8", "", "A 3 by 3 floor turns to mud, or to glass that breaks and drops whoever stands on it."),
    ],

    tactics: "Splits the party with mud and glass from behind its flesh guardian. Fights for its notes. Bloodied, it trades.",
    sources: "Monster Vault: Drow Deepmage, Conflux Creatures: Giants & Monstrosities, CR 7. Reskinned as a Vynan survivor.",

    designNote:
      "Terrain and smoke split the party. It has nothing against the heroes and wants the ship to " +
      "fly, so it is a good target for a deal.",

    traits: [
      "One cracked goggle lens. It tilts its head to see.",
      "Burn scars to both elbows, shaped like retort stands.",
      "It mutters the same three numbers, over and over.",
      "A Kartan student's pin it can't explain.",
      "A grey rat in its pocket, wearing its own tiny goggle.",
      "No memory before the ship, and no wish to find one."
    ],
    encounters: [
      "It needs one part to finish a coupling, and the part is in a hero's pack.",
      "Uzul's flesh guardians are breaking in. It would rather blow the workshop than lose the notes.",
      "One shops for reagents in Kartan, paying in Vynan glass that whispers.",
      "Stranded, the party is offered a way home for three nights' work. On the second, the engine whispers their names."
    ],
    lairs: [
      "A workshop under a fallen bridge, a ship model with one piece missing.",
      "The engine room, every fitting stamped by a different alchemist, most of them dead.",
      "A tank-room with a half-built guardian it talks to at night.",
      "A storeroom in Kartan under a false name. The University reads its notes."
    ],
    rumours: [
      { true: true, text: "It wants the ship to fly. Help it and it helps you." },
      { true: true, text: "The guardian is its shield. Pull them apart first." },
      { true: false, text: "Breathe its smoke and you forget your own name for good." },
      { true: false, text: "They all work for the lich Ivextus." }
    ],
    gigFit: {
      verb: "Escort / Steal",
      butPlus: "Vynan arches, near workshops or the ship.",
      patronHook: "A Kartan mage wants a copy of its engine notes, taken without it knowing.",
      cityName: "\"Engine-folk\": Kartan students say it half admiring, half afraid."
    }
  },
];
