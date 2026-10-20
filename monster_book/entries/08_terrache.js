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
    tier: "Minion",
    role: "Lurker",
    level: 1,
    name: "Slaad Tadpole",
    description: "A slick, finger-long tadpole with a mouth full of needle teeth and " +
      "bulging eyes that glow faintly red. They swim in shoals in the warm volcanic " +
      "pools of Terrache, and slaadi lay them in living hosts.",

    stats: { hp: "Minion", armor: "None", speed: "4 (swim 6)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "1d6+1",
        effect: "Can't crit. Advantage against a Prone or Grappled target."
      },
      {
        name: "Burrow",
        cost: "Free, after a Bite hits a Prone or Grappled target",
        damage: "—",
        effect: "The tadpole vanishes into the wound. The host feels nothing yet. Start " +
          "a 4-segment clock: one tick each rest. At 4, a slaad bursts free. A cure " +
          "needs a Lore check DC 14 and a priest, an alchemist or a Mage of Kartan."
      },
      {
        name: "Slither",
        cost: "Passive",
        damage: "—",
        effect: "It can move through other creatures' spaces."
      }
    ],

    designNote:
      "A minion with a long tail. Tadpoles die to any hit, but one that gets into a " +
      "wound starts a clock instead of an immediate effect. The hero keeps playing; " +
      "the party gets a new gig. Use shoals of 4 to 6 in warm pools, with something " +
      "bigger in the water to knock heroes Prone.",

    traits: [
      "The shoal moves as one, like a cloud of red sparks.",
      "This tadpole is twice the size of the others and leads them.",
      "Their skin shimmers with every colour, like oil on water.",
      "They chirp like crickets when they swarm.",
      "Their eyes glow brighter as they get closer to prey.",
      "One of them has a tiny Violet Eye sigil scratched into its skin."
    ],

    encounters: [
      "A warm volcanic pool, the first clean water in days. Under the steam, the " +
        "pool is thick with red sparks.",
      "A shadow elf soldier staggers out of a cave clutching his belly, begging for " +
        "a priest. He has two days left and knows it.",
      "A Violet Eye warlock keeps tadpoles in a glass tank and is looking for a " +
        "volunteer. The pay is very good.",
      "A Terrache traveller came through an arch with a bandaged wound and has been " +
        "soaking at the Public Baths for three days. The water in that pool is warm."
    ],

    lairs: [
      "A steaming volcanic pool with egg-strings along the rim like beaded necklaces.",
      "A slaad nest in a cave, littered with burst ribcages, all opened from inside.",
      "A Violet Eye laboratory with tanks of tadpoles, each labelled with a name, and " +
        "a chalkboard of days remaining.",
      "A shadow elf barracks where every bed is empty, every blanket torn from " +
        "underneath, and one cot still warm."
    ],

    rumours: [
      { true: true,
        text: "If one gets in a wound, find a cure fast. You have a few days, no more." },
      { true: true,
        text: "They're weak. Any blow kills them. The danger is the one you miss." },
      { true: false,
        text: "Drink salt water and the tadpole comes out." },
      { true: false,
        text: "Slaad tadpoles can't survive outside Terrache. Go through an arch and " +
          "it dies." }
    ],

    gigFit: {
      verb: "Find / Stop",
      butPlus:
        "But+ Monster on any Terrache arch near water. A tadpole in a hero turns the " +
          "next episode into a Find gig for a cure.",
      patronHook:
        "A priest from the Temple of the Three Sisters has a patient with a slaad " +
          "tadpole inside them. The cure is in Terrache.",
      cityName:
        "\"Gut-guests\": Public Baths attendants' name for anything that comes out of " +
          "a traveller that shouldn't."
    }
  },
];
