module.exports = [
  {
    world: "Terrache",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Star Spawn Mangler",
    description: "A thin, too-long humanoid with six arms jointed at angles that hurt to " +
      "look at, skin the grey of wet slate and a face with no features but a mouth. It " +
      "folds itself into shadows that should be too small.",

    stats: { hp: 64, armor: "None", speed: "8 (climb 8)", stage: "13+" },

    actions: [
      {
        name: "Flurry",
        cost: "1 Action",
        damage: "3d6+4",
        effect: "Six arms at once. On a crit, the target is also Slowed."
      },
      {
        name: "Wrong angle",
        cost: "Free, after a hit",
        damage: "—",
        effect: "It pushes or pulls the target 2 spaces in any direction, including " +
          "sideways along a wall."
      },
      {
        name: "Shadow fold",
        cost: "Passive",
        damage: "—",
        effect: "In dim light or darkness it is Invisible until it attacks."
      },
      {
        name: "Psychic static",
        cost: "Passive, Reach 2",
        damage: "—",
        effect: "Heroes within 2 spaces can't use Reactions, and roll Concentration " +
          "saves with disadvantage."
      }
    ],

    tactics: "Wants to tear apart what its star hates. Alone, it comes from shadow; in a group, its claws clatter long before it is seen. Shreds one hero, throws them, scuttles off, and comes again. Never breaks off while its star is in the sky.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 5. 4e MM2 star spawn lore (baleful stars); mechanics original.",

    designNote:
      "A melee controller. Its push-pull on every hit means a mangler fight is a fight " +
      "over where you stand, and the static shuts off Reactions and weakens " +
      "Concentration without costing any actions. Light is its weakness. Put it on the " +
      "narrow bridges of Terrache, where every push is a fall.",

    traits: [
      "One of its arms is broken and hangs wrong, wronger than the others.",
      "It hums in a key that makes teeth ache.",
      "It is wearing a Violet Eye warlock's sash.",
      "This one moves in fits, like a puppet with tangled strings.",
      "Its mouth is full of tiny violet stones.",
      "It has a shard of a Pillar of Sin embedded in its chest, still whispering."
    ],

    encounters: [
      "A mangler squats mid-span on the bridge between Qinroris's and Kraketen's " +
        "stalactites. Each side swears it belongs to the other, and neither will " +
        "open its gate until it's gone.",
      "A shadow elf patrol has cornered a mangler in a glowing grotto. Two soldiers " +
        "are already on the ceiling, held there at angles that should drop them.",
      "A Violet Eye warlock offers to call a mangler off the party's only route, in " +
        "exchange for one hero describing their worst dream, in full, for the record.",
      "The party's lamp gutters on a spidery walkway over the Seas of Madness. Ahead, " +
        "six grey hands close around the rail, one after another."
    ],

    lairs: [
      "A hollow stalactite tip with walls scratched in spirals that tighten toward a " +
        "hole too small for anything with arms to pass. Something passes.",
      "A ledge above the Seas of Madness where the Pillars of Sin can be heard. The " +
        "mangler sits facing the water, rocking in time with the screams.",
      "A shadow elf watchtower with every door bent outward and every guard's armour " +
        "folded neatly, the bodies nowhere.",
      "A grotto of violet crystal near Vestellis where the Violet Eye left offerings: " +
        "lamp oil, mirrors, and a scroll asking it to stay away from the tower."
    ],

    rumours: [
      { true: true,
        text: "Bring light. It can't hide in it." },
      { true: true,
        text: "Stay off the bridges when it's near. It throws people." },
      { true: false,
        text: "Its touch scrambles your thoughts. One hit and you won't be able to " +
          "act for the rest of the fight." },
      { true: false,
        text: "It can't climb. Get above it on the stalactites and it can't follow." }
    ],

    gigFit: {
      verb: "Escort / Stop",
      butPlus:
        "But+ Monster on any Terrache arch, on bridges, walkways and ledges.",
      patronHook:
        "The University wants a mangler's arm to study its joints, and has a stalactite " +
          "map and a Violet Eye contact to sell.",
      cityName:
        "\"Six-hands\": shadow elf arrivals' name, used as a curse."
    }
  },

  {
    world: "Terrache",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Voidwracked Mage",
    description: "A shadow elf in the remains of a Violet Eye robe, one half of their " +
      "body hollowed out into star-speckled black. They speak in two voices, one theirs, " +
      "one from the Seas of Madness. Neither voice agrees.",

    stats: { hp: 40, armor: "None", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Void lash",
        cost: "1 Action, Range 8",
        damage: "1d10+6",
        effect: "On hit: the target is pulled 2 spaces toward the mage or toward the " +
          "nearest Pillar of Sin."
      },
      {
        name: "Unravel",
        cost: "1 Action, 1/round, Range 8",
        damage: "—",
        effect: "WIL save DC 12 or Dazed on the target's next turn."
      },
      {
        name: "Leak",
        cost: "Passive",
        damage: "—",
        effect: "Each time it takes damage, everything within 1 space takes 1d6 void " +
          "damage, allies included."
      },
      {
        name: "Collapse",
        cost: "Passive, on death",
        damage: "2d6",
        effect: "The void inside it folds in. Creatures within 2 spaces make a DEX save " +
          "DC 12 or take the damage, are pulled to its space, and are knocked Prone."
      }
    ],

    tactics: "Wants the void to stop hurting, and cannot make it stop. Targets whoever is closest, because closest is loudest. Breaks off only by dying, and that hurts everyone.",
    sources: "Monster Vault: Creature Codex, CR 8.",

    designNote:
      "A glass cannon controller. It has the HP of a lower-level monster and the damage " +
      "of a level higher, and it hurts everyone near it, including itself, every time " +
      "it's hit. Melee heroes pay for closing in. Unravel Dazes for a turn, never more. " +
      "Collapse gives the fight a final beat: kill it carefully or eat the implosion.",

    traits: [
      "Their eyes are two holes with stars in them, and the stars move.",
      "A Violet Eye tattoo on the wrist, half eaten away by the black.",
      "They mutter the names of Vestellis's five spires, always skipping the fourth.",
      "They weep tiny black stones that roll uphill.",
      "Their spellbook is blank. They still read from it, and still cast.",
      "A signet from Qinroris's court on the hand that remains."
    ],

    encounters: [
      "A wracked mage preaches on a stalagmite bridge to goblins and bugbears of " +
        "Vettex's band. They are listening, and two have started to go dark at the " +
        "fingertips.",
      "The Violet Eye contact who sold the party their map shows up to the meeting " +
        "with one hand gone black to the wrist, and asks them to look at it.",
      "A wracked mage has the myconid sage who holds the party's one-way key, and " +
        "is feeding it a shard of a Pillar of Sin.",
      "A Violet Eye warlock pays for a wracked mage brought back to Vestellis alive. " +
        "Alive is the hard part: every blow makes it worse to stand near."
    ],

    lairs: [
      "A tower room in Vestellis, walls scorched black, the floor a mosaic of stars " +
        "that do not match any sky the party knows.",
      "A volcanic island cave where the rock has gone thin as paper, and stars show " +
        "through it.",
      "A shrine at the waterline near a Pillar of Sin, heaped with Violet Eye robes. " +
        "Each robe is empty and folded.",
      "A library in Kraketen's city with every book open and every page blank. The " +
        "librarian is still at the desk, writing nothing."
    ],

    rumours: [
      { true: true,
        text: "Hit it from range. It hurts everyone who's close." },
      { true: true,
        text: "When it dies, it pulls in. Step back before the last blow." },
      { true: false,
        text: "The void is contagious. Touch one and you'll hollow out too." },
      { true: false,
        text: "The void hates water. Push it into the sea and it unravels." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on any Terrache arch, near Vestellis or the Seas of Madness.",
      patronHook:
        "The University's star lecturer has started speaking in two voices after a " +
          "Terrache trip. They want to know what happened before it spreads.",
      cityName:
        "\"Hollowed\": University term, used for any scholar who goes too deep, in " +
          "any subject."
    }
  },

  {
    world: "Terrache",
    tier: "Standard",
    role: "Lurker",
    level: 5,
    name: "Slaad Tadpole",
    description: "A slick, dog-sized tadpole with a mouth full of needle teeth and " +
      "bulging eyes that glow faintly red. It came out of someone's skull a few days " +
      "ago. In a few more it will be a slaad.",

    stats: { hp: 49, armor: "None", speed: "6 (swim 8)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "2d8+6",
        effect: "After biting it slips half out of the world: until the start of its next " +
          "turn, attacks against it have disadvantage."
      },
      {
        name: "Chaos shift",
        cost: "Reaction, when attacked in melee",
        damage: "—",
        effect: "It moves 2 spaces without provoking before the attack is rolled. If that " +
          "takes it out of reach, the attack misses."
      },
      {
        name: "Grow",
        cost: "Passive",
        damage: "—",
        effect: "It becomes an adult slaad 1d4+3 days after it emerged. Every day it " +
          "eats well, take one day off."
      }
    ],

    tactics: "Wants to grow up. Fresh from its host, it hides, feeds on anything small, " +
      "and bites only what corners it. Breaks off at once if it can, every time.",
    sources: "Monster Vault: 4e MM, Lv 5 Lurker. 4e MM Slaad Tadpole (Lurker, Chaos Shift, insubstantial after a bite); Ammann, The Monsters Know What They're Doing (slaadi).",

    designNote:
      "The first draft made tadpoles minions that burrowed into heroes. That was " +
      "backwards: adult slaadi plant the embryos, and a tadpole is what bursts out of " +
      "the host's skull. Rebuilt from 4e as a slippery lurker, it is hard to pin down " +
      "and keeps running. The real job is the clock: find it before it grows. The host " +
      "story belongs to the encounters, not the stat block.",

    traits: [
      "A strip of its host's scalp still clings to its back, hair and all.",
      "It chirps like a cricket, faster when it is hungry.",
      "Its skin shimmers every colour, like oil on water.",
      "It is already growing claws. Two days, maybe less.",
      "It drags a silver earring on a thread of skin. The host's.",
      "One of its eyes is a human eye, brown and frightened."
    ],

    encounters: [
      "A warm volcanic pool, the first clean water in days. Under the steam, " +
        "something dog-sized turns over and looks at the party.",
      "A shadow elf soldier staggers out of a cave clutching his head, begging for a " +
        "priest. He has two days left, and he knows what will come out.",
      "A Violet Eye warlock keeps tadpoles in a glass tank, each one labelled with " +
        "its host's name. One label is in a hero's handwriting.",
      "A Terrache traveller came through an arch complaining of headaches and has " +
        "not been seen at the Public Baths since Tuesday. The drain in the warm pool " +
        "is chewed open."
    ],

    lairs: [
      "A steaming volcanic pool with a cracked skull on the rim, the crack from " +
        "the inside.",
      "A slaad nest in a cave, littered with empty skulls and one tadpole too young " +
        "to leave.",
      "A Violet Eye laboratory with a chalkboard of hosts and days remaining, most " +
        "crossed out.",
      "A Lost Cisterns overflow chamber, warm from the baths above, with fish bones " +
        "stacked by size."
    ],

    rumours: [
      { true: true,
        text: "It wants to hide and grow, not fight. Corner it or it's gone." },
      { true: true,
        text: "The slaad that laid it is still around. Tadpoles don't come alone." },
      { true: false,
        text: "Kill the tadpole and the host's madness lifts." },
      { true: false,
        text: "Slaad tadpoles die outside Terrache. Through an arch they're harmless." }
    ],

    gigFit: {
      verb: "Find / Stop",
      butPlus:
        "But+ Monster on any Terrache arch near water, or at Stages 9-10 for one that " +
          "came through in a host. Run it as a hunt with a clock.",
      patronHook:
        "A priest from the Temple of the Three Sisters has a patient with the slaad " +
          "embryo in them and three days left. The cure is in Terrache. So, probably, " +
          "is the slaad that planted it.",
      cityName:
        "\"Headaches\": Public Baths attendants' word for any Terrache arrival who " +
          "complains of one. They are told to report it."
    }
  },
];
