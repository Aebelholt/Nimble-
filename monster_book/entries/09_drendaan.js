module.exports = [
  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Water Myrmidon",
    description: "A warrior-shape of living seawater in coral-plated armour, a trident " +
      "of the same water in its fist. Small fish swim through its chest. It was bound " +
      "to guard a level of Gorvund's Spindle, and the binding has outlived the djinni.",

    stats: { hp: 60, armor: "Medium", speed: "6 (swim 8)", stage: "13+" },

    actions: [
      {
        name: "Trident",
        cost: "1 Action, ×2, Reach 2",
        damage: "1d8+7",
        effect: "Cold. On hit: the target is Slowed."
      },
      {
        name: "Whirlpool",
        cost: "2 Actions, 1/encounter, in or next to water",
        damage: "—",
        effect: "Every creature within 3 spaces makes a STR save DC 13 or is pulled 2 " +
          "spaces toward it and Restrained until the start of its next turn, spinning. " +
          "A Restrained hero can still act."
      },
      {
        name: "Riptide",
        cost: "Free, 1/round",
        damage: "—",
        effect: "It moves 4 spaces through water without provoking. A creature in water " +
          "that it passes is pushed 2 spaces."
      },
      {
        name: "Waterform",
        cost: "Passive",
        damage: "—",
        effect: "It can move through gaps an inch wide. Cold doesn't hurt it; lightning " +
          "deals double damage."
      }
    ],

    designNote:
      "The 5e myrmidon's freezing strikes slow; this one keeps that, and adds water as " +
      "the battlefield. In open sea or flooded halls the myrmidon pulls heroes into its " +
      "reach and holds them spinning in place, still acting. On dry stone it is a solid " +
      "soldier with a trident. Use it on the Spindle, in Barthen, and in the half-sunk " +
      "levels where the sea gets in.",

    traits: [
      "A small octopus lives in its helm and watches the party with more interest " +
        "than the myrmidon does.",
      "It hums a sea-shanty in a voice like a breaking wave. The words are djinni.",
      "Its coral armour is cracked. Water sheets out of the gaps when it swings.",
      "Old and murky, clouded with silt. It has not been relieved of duty in centuries.",
      "It bows to anyone carrying Gorvund's seal, then attacks them anyway.",
      "A token of Queen Nora of Barthen hangs from its trident on a kelp cord."
    ],

    encounters: [
      "A myrmidon guards the stair between two levels of Gorvund's Spindle and asks " +
        "for a password in dead djinni. A drowned scholar's notebook nearby has three " +
        "guesses crossed out.",
      "Witch queen Thrancev's sahuagin hold a merfolk envoy in a flooded hall, with " +
        "a myrmidon on the door. Queen Nora wants the envoy back before the treaty " +
        "meeting.",
      "The party's skiff drifts past a vine tower at slack tide. The water beside it " +
        "stands up, takes a trident's shape, and steps aboard.",
      "A myrmidon has come through an arch into the Lost Cisterns and taken a sluice " +
        "gate as its post. It lets water through on its own schedule."
    ],

    lairs: [
      "A Spindle level holding a slice of some drowned world: a flooded market " +
        "square, stalls still standing, and one dry island where the post once stood.",
      "A derelict ship wrapped in vines, its hold flooded to the deck. The myrmidon " +
        "walks the hold from bow to stern, always the same number of steps.",
      "A vault in Barthen with an empty plinth. Whatever it guarded was stolen and " +
        "it has not been told.",
      "A Lost Cisterns chamber where the water is suddenly cold, clear and full of " +
        "sea fish that should not be there."
    ],

    rumours: [
      { true: true,
        text: "Get it out of the water and it's just a soldier." },
      { true: true,
        text: "Lightning boils it. Bring a storm." },
      { true: false,
        text: "Its trident freezes you solid. One cut and you're ice until someone " +
          "thaws you." },
      { true: false,
        text: "Say Gorvund's name and it'll let you pass." }
    ],

    gigFit: {
      verb: "Steal / Escort",
      butPlus:
        "But+ Monster on any Drendaan arch, and at Stages 9-10 in the Lost Cisterns.",
      patronHook:
        "The Golden Council has a myrmidon standing in a flood gate in the Lost " +
          "Cisterns, and the flooding season is coming.",
      cityName:
        "\"Sea-soldiers\": dockhands' name. The Lost Cisterns crews call the one in " +
          "the sluice \"the Sergeant\" and leave it bread."
    }
  },

  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 7,
    name: "Spirit Naga",
    description: "A serpent twenty feet long with a human face, scaled in midnight blue " +
      "and silver, a crest of fins along its spine. It speaks softly and sings spells. " +
      "If killed, it returns, and it remembers everyone.",

    stats: { hp: 87, armor: "None", speed: "8 (swim 8)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "1d12+10",
        effect: "Poison. STR save DC 13 or Poisoned."
      },
      {
        name: "Command the body",
        cost: "1 Action, Range 8",
        damage: "—",
        effect: "WIL save DC 13 or the naga moves the target up to 4 spaces. This costs " +
          "the target nothing; they keep their actions."
      },
      {
        name: "Lightning song",
        cost: "2 Actions, 1/encounter",
        damage: "3d8+5",
        effect: "Lightning, 10-space line. DEX save DC 13 for half."
      },
      {
        name: "Rejuvenation",
        cost: "Passive",
        damage: "—",
        effect: "Destroyed, it re-forms in 1d6 days unless its heart-pearl is found and " +
          "crushed."
      }
    ],

    designNote:
      "Nagas in 5e cast Hold Person. Here the naga moves heroes instead: Command the " +
      "body puts a hero on the wrong side of the fight, or in front of the lightning, " +
      "and they still take their full turn. Rejuvenation makes it a long-term enemy " +
      "with a weakness to find. Put it in Gorvund's Spindle among the stolen worlds.",

    traits: [
      "It sings in the voice of a hero's old friend, and gets the friend's words right.",
      "Its scales pulse in the same rhythm as the bioluminescent vines.",
      "It wears a crown of sea-silver from Barthen and claims it was a gift.",
      "A scar runs down its human face, a djinni's lightning, never healed.",
      "It keeps a library of shells, each holding a whisper. One is a hero's voice.",
      "Lonely. It talks too much, asks about the city, and remembers every answer."
    ],

    encounters: [
      "On a Spindle level holding a slice of a desert world, a naga has crowned itself " +
        "queen of the sand and wants subjects. The party will do.",
      "A naga is negotiating with the three queens of Barthen over a heart-pearl. " +
        "Each queen privately offers the party a reward to make the talks fail.",
      "The party finds a black pearl in a derelict ship's strongbox. Three days later " +
        "they hear singing from the water below their boat.",
      "A naga has come through an arch and asked the Archkeepers for asylum. It " +
        "names an old enemy in the city and asks the party to keep them away."
    ],

    lairs: [
      "A Spindle level holding an entire sea-palace, lifted whole from another world. " +
        "Its throne room is set for a feast no one has eaten.",
      "A sunken temple of Barthen, its altar carved with coiled snakes, and a fresh " +
        "pearl-sized hollow pressed into the stone.",
      "A derelict ship wrapped in vines, the naga's coils worn into the mast. The " +
        "captain's log ends with a list of everyone it asked to stay.",
      "A shell-lined cave on a drifting island where every shell hums a different " +
        "voice. Two of the voices are arguing about the party."
    ],

    rumours: [
      { true: true,
        text: "You haven't killed it until you've crushed its pearl." },
      { true: true,
        text: "It can move you, but it can't make you swing. Keep fighting." },
      { true: false,
        text: "It can't hurt anyone who has heard it sing. Let it sing first." },
      { true: false,
        text: "It can't lie. Ask it anything." }
    ],

    gigFit: {
      verb: "Find / Bury",
      butPlus:
        "But+ Monster on any Drendaan arch, best on the Spindle or near Barthen.",
      patronHook:
        "The Archkeepers want to grant a naga asylum. The Golden Council wants proof " +
          "it's safe. The naga's heart-pearl would be proof.",
      cityName:
        "\"Pearl-keepers\": Drendaan arrivals' term, from the stories of nagas who " +
          "guard their own hearts."
    }
  },

  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 2,
    name: "Swarm of Flying Snakes",
    description: "A cloud of bright, winged snakes, each the length of a forearm, " +
      "shimmering green and gold in the light of the vines. They ride the wind in " +
      "loops and dive in a hissing rush.",

    stats: { hp: 24, armor: "None", speed: "Fly 8", stage: "13+" },

    actions: [
      {
        name: "Bites",
        cost: "1 Action",
        damage: "2d4+3",
        effect: "Poison. One creature in or adjacent to the swarm's space."
      },
      {
        name: "Coiling mass",
        cost: "Passive",
        damage: "—",
        effect: "A creature that starts its turn in the swarm's space is Slowed."
      },
      {
        name: "Ride the wind",
        cost: "Free, 1/round",
        damage: "—",
        effect: "In open air it moves 4 spaces with the wind and can carry a Small " +
          "creature with it."
      },
      {
        name: "Swarm",
        cost: "Passive",
        damage: "—",
        effect: "It occupies other creatures' spaces. Single-target attacks deal half " +
          "damage; AoE deals double."
      }
    ],

    designNote:
      "A low-level controller that turns the air into Difficult Terrain with teeth. It " +
      "Slows anyone it covers and makes aerial fights messy. AoE is the answer. Pair it " +
      "with something bigger, a sahuagin raid or a djinni's elementals, so the swarm is " +
      "a nuisance that changes the shape of a larger fight.",

    traits: [
      "Their scales flash like thrown coins in the vine-light.",
      "The swarm makes shapes in the air: a fish, a ship, then a hero's face.",
      "One red snake leads. Kill it and the rest wheel, confused, for a round.",
      "They hiss in rhythm, a three-beat pattern sailors use to row.",
      "They carry vine seeds in their mouths, and new shoots sprout where they nest.",
      "Tame, or once were. They wear thin silver bands from Irathas."
    ],

    encounters: [
      "The party's skiff passes a vine tower at dusk. The vines peel off the tower " +
        "and come down the wind toward them.",
      "Verosa's people mine a crystal island while a swarm circles overhead. Every " +
        "time a miner looks up, the swarm dives.",
      "Kesset's air elementals herd a swarm into the party's sails, then wait to " +
        "see what lands in the water.",
      "A swarm has nested in the spray of the falls above the City of Arches, by " +
        "the crystal arch. Pilgrims to the Falls of the Three Gods are being bitten."
    ],

    lairs: [
      "A vine tower around a derelict ship, hung with nests like paper lanterns, " +
        "each one glowing with the vine-light it was woven from.",
      "Kesset's collapsed crystal garden, the shards draped with shed snake-skins " +
        "that rattle in the wind like chimes.",
      "A wind-cave in the side of Gorvund's Spindle where a djinni's aviary once " +
        "stood. The perches are still there, and the cages are open.",
      "The underside of a cloud bank, where the swarm hangs in the mist and a " +
        "missing birdfolk scout's satchel hangs with it."
    ],

    rumours: [
      { true: true,
        text: "Fire and wind break them up. One blade won't do much." },
      { true: true,
        text: "They nest in the vines. Burn the nest and the swarm leaves." },
      { true: false,
        text: "Their venom kills in an hour unless you suck it out." },
      { true: false,
        text: "They won't attack anyone in the water. Jump overboard and you're safe." }
    ],

    gigFit: {
      verb: "Escort / Stop",
      butPlus:
        "But+ Monster on any Drendaan arch, in the air or on ships.",
      patronHook:
        "Verosa the birdfolk asks the party to escort her family from their island. " +
          "The swarm is between them and the arch.",
      cityName:
        "\"Sky-eels\": dockhands' term for anything that swims in the air."
    }
  },
];
