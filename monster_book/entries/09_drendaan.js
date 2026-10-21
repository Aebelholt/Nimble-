// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Water Myrmidon",
    seb: true,
    core: "Gorvund the djinni bound seawater soldiers to guard his Spindle. He is gone; the binding is not.",
    description: "A warrior-shape of living seawater in coral plate, a trident of the same water in " +
      "its fist, small fish swimming through its chest.",

    stats: { hp: 60, armor: "Medium", speed: "6 (swim 8)", dc: 13, stage: "13+" },

    actions: [
      A("Trident", "1 Action, ×2, Reach 2", "1d8+7", "Cold. Slowed."),
      A("Whirlpool", "2 Actions, 1/encounter, near water", "", "Everyone within 3: STR save or pulled 2 toward it and Restrained, spinning, until their next turn."),
      A("Waterform", "Passive", "", "Flows through any gap. Immune to cold; lightning deals double."),
    ],

    tactics: "Holds its post as ordered. Drags the nearest swimmer into reach and holds the line.",
    sources: "Monster Vault: Conflux Creatures: Elementals & Fiends, CR 7. Freezing strikes kept as Slowed.",

    designNote:
      "In the water it pulls heroes in and spins them in place, still acting. On dry stone, just a " +
      "good soldier with a trident.",

    traits: [
      "An octopus lives in its helm and watches the party.",
      "It hums a sea-shanty in djinni.",
      "Cracked coral plate. Water sheets out when it swings.",
      "Murky with silt. Not relieved of duty in centuries.",
      "It bows to Gorvund's seal, then attacks anyway.",
      "Queen Nora's token on its trident, on a kelp cord."
    ],
    encounters: [
      "It guards a stair and asks for a password in dead djinni. A drowned scholar's notes cross out three guesses.",
      "It holds the door where sahuagin keep a merfolk envoy. Queen Nora wants her back before the treaty.",
      "The water beside the skiff stands up, takes a trident's shape, and steps aboard.",
      "One has taken a Lost Cisterns sluice as its post. It opens on its own schedule."
    ],
    lairs: [
      "A Spindle level holding a drowned market square, one dry island where the post once stood.",
      "A flooded derelict hold it paces, bow to stern, the same steps every time.",
      "An empty plinth in Barthen. What it guarded was stolen; nobody told it.",
      "A cistern chamber suddenly cold, clear and full of sea fish."
    ],
    rumours: [
      { true: true, text: "Get it out of the water and it's just a soldier." },
      { true: true, text: "Lightning boils it. Bring a storm." },
      { true: false, text: "One cut from the trident freezes you solid." },
      { true: false, text: "Say Gorvund's name and it lets you pass." }
    ],
    gigFit: {
      verb: "Steal / Escort",
      butPlus: "Drendaan arches, and Stages 9-10 in the Lost Cisterns.",
      patronHook: "The Council has one standing in a cistern flood gate, and flood season is coming.",
      cityName: "\"Sea-soldiers\". The cistern crews call theirs \"the Sergeant\" and leave it bread."
    }
  },

  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 7,
    name: "Spirit Naga",
    seb: true,
    core: "A naga crowned in one of the Spindle's stolen worlds. It returns from death unless its heart-pearl is crushed.",
    description: "A serpent twenty feet long with a human face, scaled midnight blue and silver. It " +
      "sings its spells softly, and it remembers everyone.",

    stats: { hp: 87, armor: "None", speed: "8 (swim 8)", dc: 13, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "1d12+10", "Poison. STR save or Poisoned."),
      A("Command the body", "1 Action, Range 8", "", "WIL save or it moves the target 4 spaces. They keep their actions."),
      A("Lightning song", "2 Actions, 1/encounter", "3d8+5", "Lightning, 10-space line. DEX save for half."),
    ],

    tactics: "Moves heroes into the lightning's line, then talks. Never truly flees; it will be back in 1d6 days.",
    sources: "Monster Vault: Monster Manual (2024), CR 8. Hold Person rebuilt as forced movement; never flees (Ammann).",

    designNote:
      "It puts a hero on the wrong side of the fight, and they still take their whole turn. The " +
      "pearl makes it a long enemy with a weakness to find.",

    traits: [
      "It sings in an old friend's voice and gets the words right.",
      "Its scales pulse in time with the vines.",
      "A crown of Barthen sea-silver it calls a gift.",
      "A djinni's lightning scar down its human face.",
      "A library of whispering shells. One holds a hero's voice.",
      "Lonely. It talks too much and remembers every answer."
    ],
    encounters: [
      "It has crowned itself queen of a stolen desert and wants subjects. The party will do.",
      "It bargains with Barthen's three queens. Each pays the party, privately, to make the talks fail.",
      "A black pearl in a strongbox. Three nights later, singing under the boat.",
      "It asks the Archkeepers for asylum, and the party to keep an old enemy away."
    ],
    lairs: [
      "A whole sea-palace lifted into the Spindle, its feast set and never eaten.",
      "A snake-carved Barthen altar with a fresh pearl-sized hollow.",
      "A derelict ship, its coils worn into the mast, a log listing everyone it asked to stay.",
      "A cave of humming shells. Two voices argue about the party."
    ],
    rumours: [
      { true: true, text: "It isn't dead until its pearl is crushed." },
      { true: true, text: "It can move you, not make you swing. Keep fighting." },
      { true: false, text: "It can't hurt anyone who heard it sing." },
      { true: false, text: "It can't lie. Ask it anything." }
    ],
    gigFit: {
      verb: "Find / Bury",
      butPlus: "Drendaan arches, best on the Spindle or near Barthen.",
      patronHook: "The Archkeepers would grant it asylum; the Council wants proof it's safe. Its pearl would be proof.",
      cityName: "\"Pearl-keepers\": they guard their own hearts."
    }
  },

  {
    world: "Drendaan",
    tier: "Standard",
    role: "Controller",
    level: 2,
    name: "Swarm of Flying Snakes",
    seb: true,
    core: "Flying snakes nest in Drendaan's vine towers. Alone they strike once and flee; over a nest they swarm.",
    description: "A cloud of bright winged snakes, each a forearm long, green and gold in the " +
      "vine-light, looping on the wind and diving in a hissing rush.",

    stats: { hp: 24, armor: "None", speed: "Fly 8", dc: 11, stage: "13+" },

    actions: [
      A("Bites", "1 Action", "2d4+3", "Poison. One creature in or beside its space."),
      A("Swarm", "Passive", "", "Anyone starting a turn in its space is Slowed. Single targets half, AoE double."),
      A("Ride the wind", "Free, 1/round", "", "Moves 4 with the wind in open air, carrying a Small creature."),
    ],

    tactics: "Defends its nest. Scatters when the nest burns or the swarm is Bloodied.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 5. Solitary unless nesting (Ammann).",

    designNote:
      "Difficult Terrain with teeth. Pair it with something bigger, a sahuagin raid or Kesset's " +
      "elementals, so it changes the shape of a larger fight.",

    traits: [
      "Scales flash like thrown coins.",
      "The swarm makes shapes: a fish, a ship, a hero's face.",
      "One red snake leads. Kill it and the rest wheel for a round.",
      "They hiss in a three-beat rowing rhythm.",
      "Vine seeds in their mouths. Shoots sprout where they nest.",
      "Thin silver bands from Irathas. Tame, once."
    ],
    encounters: [
      "The vines peel off a tower at dusk and come down the wind.",
      "Miners work a crystal island under a circling swarm. Every miner who looks up gets dived.",
      "Air elementals herd a swarm into the sails, then wait to see what falls.",
      "A swarm nests in the spray of the falls above the city. Pilgrims are being bitten."
    ],
    lairs: [
      "Nests hung like paper lanterns on a vine tower, glowing.",
      "A collapsed crystal garden draped in shed skins that rattle like chimes.",
      "A djinni's old aviary in the Spindle's side, the cages open.",
      "The underside of a cloud, a missing scout's satchel hanging with the swarm."
    ],
    rumours: [
      { true: true, text: "Fire and wind break them. A blade won't." },
      { true: true, text: "Burn the nest and the swarm leaves." },
      { true: false, text: "Their venom kills in an hour unless you suck it out." },
      { true: false, text: "Jump in the water and they won't follow." }
    ],
    gigFit: {
      verb: "Escort / Stop",
      butPlus: "Drendaan arches, in the air or on ships.",
      patronHook: "Verosa asks the party to escort her family off their island. The swarm sits between them and the arch.",
      cityName: "\"Sky-eels\": anything that swims in the air."
    }
  },
];
