module.exports = [
  {
    world: "Vynan",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Common Feyr",
    description: "A writhing knot of grey flesh, eyes and mouths that floats a pace " +
      "above the ground, born from the nightmares the Yondoth's ghost-engine whispers " +
      "into Vynan's sleepers. It smells of cold sweat and burnt sugar.",

    stats: { hp: 41, armor: "None", speed: "Fly 6", stage: "13+" },

    actions: [
      {
        name: "Lash of fears",
        cost: "1 Action, ×2, Reach 2",
        damage: "1d6+4",
        effect: "Psychic."
      },
      {
        name: "Nightmare",
        cost: "1 Action, Range 6",
        damage: "—",
        effect: "WIL save DC 12 or Frightened until the end of the target's next turn. " +
          "The player names what they see. The feyr counts as the source of fear " +
          "wherever it is."
      },
      {
        name: "Born of a dreamer",
        cost: "Passive",
        damage: "—",
        effect: "Its dreamer sleeps within 30 spaces. Waking them (1 Action adjacent, " +
          "Influence DC 12) ends the feyr at once."
      }
    ],

    designNote:
      "A nightmare with a plug. The feyr is a straightforward fear controller until " +
      "the party realises it has a dreamer, and then the fight becomes a race to find " +
      "and wake them. Letting the player name their fear gives the table a story beat " +
      "without costing anyone their turn.",

    traits: [
      "One of its mouths keeps saying a hero's name, in the voice of someone who " +
        "used to say it often.",
      "It has a child's eyes, frightened and wet. Its dreamer is young.",
      "It sheds grey ash that smells of a kitchen nobody in Vynan remembers.",
      "Newly born and small, the size of a cat. It is still deciding what to be.",
      "All its mouths sing a lullaby, slightly out of tune, and the tune leads to " +
        "its dreamer.",
      "It drifts toward lamps like a moth and flinches back from blue light."
    ],

    encounters: [
      "A Vynan street gone silent: every survivor asleep at once, mid-task, and the " +
        "lanes full of drifting shapes. One sleeper is the party's contact.",
      "A survivor mother begs the party to guard her child's sleep for one night. " +
        "Around midnight the air above the cot starts to knot.",
      "Feyr cluster around the Yondoth's hull where the ghost-engine whispers " +
        "loudest. The repair crew are working in their sleep.",
      "A Vynan arrival sleeps in the Archkeepers' hostel. Two guests have moved out, " +
        "one is missing, and the hostel cat won't go upstairs."
    ],

    lairs: [
      "A barracks in Vynan with forty beds, all occupied, all twitching. A feyr " +
        "hangs over each like a cloud of breath on a cold morning.",
      "The Yondoth's engine room, where the whispering is loud enough to make out " +
        "words, and the words are names of people who have not been born.",
      "A street corner in Vynan where the cobbles are worn in circles by something " +
        "that has paced there for years. A blanket and a bowl sit in the middle.",
      "A Lower Reaches attic rented to a Vynan arrival. The walls are scratched with " +
        "tally marks, one per night slept, and the smell of burnt sugar never leaves."
    ],

    rumours: [
      { true: true,
        text: "Wake the dreamer and the thing goes out like a candle." },
      { true: true,
        text: "The fear's yours, not its. Name it and you can face it." },
      { true: false,
        text: "If you fall asleep near a feyr, it moves into your dreams and you never " +
          "wake up." },
      { true: false,
        text: "Feyr can't follow anyone through an arch. Get the dreamer to the city " +
          "and it's over." }
    ],

    gigFit: {
      verb: "Find / Stop",
      butPlus:
        "But+ Monster on any Vynan arch, and anywhere a Vynan arrival is sleeping.",
      patronHook:
        "The Archkeepers have a Vynan arrival in their hostel who won't stop dreaming, " +
          "and the other guests are starting to see things.",
      cityName:
        "\"Night-sweats\": Archkeeper hostel staff's term, with a nervous laugh."
    }
  },

  {
    world: "Vynan",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Vynan Alchemist-Mage",
    description: "A survivor of Vynan in a patched leather coat hung with vials, retorts " +
      "and glass, goggles pushed up on a scarred forehead. They've been working on the " +
      "Yondoth's engine for twenty years, and they'll kill anyone who gets in the way.",

    stats: { hp: 49, armor: "None", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Retort flask",
        cost: "1 Action, Range 8",
        damage: "2d6+5",
        effect: "Acid, 1-space radius. DEX save DC 13 for half. Everyone hit is Slowed."
      },
      {
        name: "Smoke of forgetting",
        cost: "2 Actions, 1/encounter",
        damage: "—",
        effect: "A cloud of grey smoke, 2-space radius within Range 8. Inside, creatures " +
          "are Blind. A creature that ends its turn in it makes a WIL save DC 13 or is " +
          "Dazed on its next turn."
      },
      {
        name: "Transmute ground",
        cost: "1 Action, Range 8",
        damage: "—",
        effect: "A 3×3 area of floor turns to mud (Difficult Terrain) or to brittle glass " +
          "that breaks under weight. Creatures standing on breaking glass fall to the level " +
          "below."
      },
      {
        name: "Flesh guardian",
        cost: "Passive",
        damage: "—",
        effect: "Usually guarded by a flesh guardian. While it stands adjacent, attacks " +
          "against the alchemist have disadvantage."
      }
    ],

    designNote:
      "A reskin of the drow deepmage as a Vynan survivor. Its tools are terrain and " +
      "smoke: mud and breaking glass split the party, the smoke blinds and threatens " +
      "Daze for one turn. It wants the Yondoth to fly and has nothing against the " +
      "heroes personally. That makes it a good target for negotiation.",

    traits: [
      "One goggle lens is cracked, and they tilt their head to see through the other.",
      "Burn scars to both elbows in the shape of retort-stands.",
      "They mutter sums under their breath, the same three numbers, over and over.",
      "A Kartan student's pin on their lapel. They don't know what it is.",
      "A grey rat rides in their coat pocket. It has a tiny goggle of its own.",
      "They remember nothing before the Yondoth, and have stopped trying."
    ],

    encounters: [
      "The alchemist needs one part to finish an engine coupling, and it is in a " +
        "hero's pack: an arch key, a lens, an arcanum.",
      "Uzul's flesh guardians are breaking down the alchemist's workshop door. The " +
        "alchemist would rather blow the workshop than lose the notes.",
      "An alchemist has come to the City of Arches to buy reagents from the " +
        "Laboratories of Kartan, and is paying with Vynan glass that whispers.",
      "Stranded in Vynan, the party is offered a way home: three nights' work on the " +
        "engine. On the second night the engine starts to whisper their names."
    ],

    lairs: [
      "A workshop under a collapsed bridge, shelves of vials labelled in a private " +
        "code, a cot, and a scale model of the Yondoth with one piece missing.",
      "The Yondoth's engine room, half-repaired, cables strung like vines, every " +
        "fitting stamped with a different alchemist's mark. Most of them are dead.",
      "A tank-room where a flesh guardian hangs half-built in green fluid, its " +
        "face unfinished. The alchemist talks to it at night.",
      "A storeroom in the Laboratories of Kartan rented under a false name. The " +
        "University has been reading its notes for a month."
    ],

    rumours: [
      { true: true,
        text: "They want the ship to fly. Help them and they'll help you." },
      { true: true,
        text: "Their guardian is their shield. Get it away from them first." },
      { true: false,
        text: "Their smoke wipes your memory. Breathe it and you'll forget your own " +
          "name for good." },
      { true: false,
        text: "All of them work for the lich Ivextus. The Yondoth is his idea." }
    ],

    gigFit: {
      verb: "Escort / Steal",
      butPlus:
        "But+ Monster on any Vynan arch, near workshops or the Yondoth.",
      patronHook:
        "A mage of Kartan wants an alchemist's notes on the Yondoth's ghost-engine, " +
          "and will pay well for a copy taken without the alchemist knowing.",
      cityName:
        "\"Engine-folk\": Kartan students' term, half admiring, half afraid."
    }
  },
];
