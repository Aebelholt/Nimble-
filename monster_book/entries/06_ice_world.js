// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Yeti Howler",
    seb: true,
    core: "The bear lodges' rival for every hunt. It howls the snow down, then carries off whoever fell.",
    description: "A white-furred ape twice a man's height, blue-black face, breath freezing in the " +
      "air. When its howl stops, the slope above has started to slide.",

    stats: { hp: 64, armor: "None", speed: "8 (ignores snow)", dc: 13, stage: "13+" },

    actions: [
      A("Claws", "1 Action, ×2", "1d10+5", "Cold. A Frightened, Prone or Dazed target: STR save or carried off at full Speed."),
      A("Chilling howl", "1 Action, 1/round", "", "Heroes within 8 who hear it: WIL save or Frightened and Slowed until their next turn ends."),
      A("Bring down the slope", "2 Actions, 1/encounter, on a slope", "2d6+4", "3 by 10 line downhill: DEX save or pushed 4 and Restrained in snow until dug out."),
    ],

    tactics: "Wants a meal, not a fight. Hunts the slow and the stragglers from hiding, then leaves with one.",
    sources: "Monster Vault: 4e MM3, Lv 4 Controller. Chilling Wail (4e); grab and run (Ammann). Freezing gaze rebuilt as Frightened and Slowed.",

    designNote:
      "On flat ice, a strong beast. Under a ridge, a weather event. The real question is whether " +
      "the party can catch it in the snow once it has someone.",

    traits: [
      "Its fur is matted with old blood, none of it its own.",
      "It carries a lodge hunting spear like a toothpick.",
      "Its howl cracks into a high wobble, like a child's cry.",
      "Old and grizzled grey. Others follow it.",
      "Icicles hang from its brow and chin.",
      "A lodge tally scar on its shoulder. A hunter once claimed it."
    ],
    encounters: [
      "Lodge hunters are pinned below a ridge. Every howl brings more snow down.",
      "It has taken a lodge child. The lodge will pay a favour; none of its hunters will go.",
      "A howl from the shore, and the ice underfoot cracks in answer.",
      "Driven down by something larger, it is hungry and afraid."
    ],
    lairs: [
      "An ice cave of blue glass, floor strewn with bones and chewed spears.",
      "A high ledge nest of furs overlooking three valleys.",
      "A hollow behind a frozen waterfall, full of glittering trinkets.",
      "An abandoned hunting camp, tents flattened, footprints the size of shields."
    ],
    rumours: [
      { true: true, text: "Stay off the slopes. The howl won't hurt you; the snow will." },
      { true: true, text: "It can't hide on bare rock. Find stone and watch." },
      { true: false, text: "One look in its eyes freezes your blood solid." },
      { true: false, text: "It fears fire. Wave a torch and it runs." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Ice World arches, on mountain or valley maps.",
      patronHook: "A bear lodge asks the Archkeepers for help: a yeti cuts off their hunting grounds, and their law forbids them to kill it.",
      cityName: "\"Avalanche-callers\": also said of anyone who talks too loud in the wrong room."
    }
  },

  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Snow Golem",
    seb: true,
    core: "Lodge children pack snow-wards against the long cold. Some winters the cold fills one and it keeps watch.",
    description: "A lumbering figure of packed snow and ice, pebble eyes set in a child's lopsided " +
      "drawing of a face.",

    stats: { hp: 52, armor: "None", speed: "4", dc: 12, stage: "13+" },

    actions: [
      A("Slam", "1 Action", "1d10+6", "Cold. A melee weapon that hits it sticks: the golem's next attack is disadvantaged."),
      A("Snowball volley", "1 Action, Range 10", "1d8+4", "Slowed."),
      A("Frost field", "Passive", "", "Within 2 is icy Difficult Terrain. Heals 5 a turn on snow. Fire deals double."),
    ],

    tactics: "Pelts intruders from high ground, then slams whoever hurts it with magic. Never breaks off while on snow.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 3. Tactics from the Vault note.",

    designNote:
      "A puzzle with a body: fire, or drag it onto bare rock. Children made it, and that is the " +
      "clue to unmaking it.",

    traits: [
      "A patched lodge scarf around its neck.",
      "A face drawn in pebbles, slightly lopsided.",
      "Melting. It leaves slush and shrinks a little each hour.",
      "A child's mitten frozen into its fist.",
      "It hums a lodge lullaby in a crackle of ice.",
      "A smaller, half-finished golem follows it."
    ],
    encounters: [
      "It guards a village the lodge left two days ago. It doesn't know.",
      "Three are building a fourth, much bigger.",
      "Lodge children beg the party not to hurt it. It is sitting on the party's sled.",
      "One came through an arch in winter and grows in the Market Square with every snowfall."
    ],
    lairs: [
      "A courtyard of snow sculptures. One of them moves.",
      "A frozen pond, the golem motionless at the centre, drifts around it like a moat.",
      "A ravine of half-built golems from generations of children.",
      "An ice cave under a glacier, a snow throne at its heart."
    ],
    rumours: [
      { true: true, text: "Get it off the snow and it stops mending." },
      { true: true, text: "The child who made it can unmake it." },
      { true: false, text: "Wait for noon and it melts." },
      { true: false, text: "Pull out its eyes and it falls apart." }
    ],
    gigFit: {
      verb: "Escort / Stop",
      butPlus: "Ice World arches, and the City of Arches in winter episodes.",
      patronHook: "The Council wants one out of the market without anyone looking foolish. The Archkeepers want it sent home, gently.",
      cityName: "\"Lodge-men\": market children build their own every winter, hoping."
    }
  },

  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Coldlight Walker",
    seb: true,
    core: "A lodge hunter froze searching for someone and kept walking. Its cold lantern marks everyone it passes.",
    description: "A frozen corpse in lodge furs, eyes gone to blue light, walking a straight line " +
      "across the ice with a lantern that burns cold.",

    stats: { hp: 75, armor: "None", speed: "6", dc: 13, stage: "13+" },

    actions: [
      A("Frozen touch", "1 Action, ×2", "1d8+8", "Cold. Anything standing in its path is walked through: same damage, pushed 2."),
      A("Glare", "1 Action, Range 8", "", "DEX save or Blind until the end of the target's next turn."),
      A("Coldlight", "Passive, Reach 4", "", "Everyone within 4 is lit and can't hide. Smother the lantern (1 Action, Finesse DC 13): dark for a round."),
    ],

    tactics: "Never leaves its line, unless burned: then it hunts whoever burned it until one of them falls.",
    sources: "Monster Vault: Conflux Creatures: NPCs & Undead, CR 5. Hunts whoever burns it (Vault note).",

    designNote:
      "A hazard that fights back. The party can step off its line, unless what they need is on it. " +
      "Its light marks heroes for everything else on the ice.",

    traits: [
      "Furs bearing the badge of a lodge that no longer exists.",
      "It calls one name, softly, as it walks.",
      "A tiny glowing bear inside its lantern.",
      "Frost ferns spread under its feet.",
      "This one walks a circle, endlessly.",
      "So old the furs have grown into its skin."
    ],
    encounters: [
      "Its line runs straight across the only bridge.",
      "Lodge hunters have waited days in a hide on its path. They want the party to ask it who it seeks.",
      "It stops dead when it sees the party's guide, who is from its lodge.",
      "One walks a straight line down the Villas of the Second Rise."
    ],
    lairs: [
      "A straight path of blue ice across a frozen sea, nothing at either end.",
      "A collapsed lodge hall, an empty lantern hook by the door.",
      "A grave in the ice with its name on it, and no body.",
      "A ring of standing stones where every walker's line crosses."
    ],
    rumours: [
      { true: true, text: "Step off its path. It won't chase you, unless you burn it." },
      { true: true, text: "Cover the lantern and it goes as blind as you." },
      { true: false, text: "Its light freezes you to the spot." },
      { true: false, text: "Bring it the one it seeks and it will lie down." }
    ],
    gigFit: {
      verb: "Find / Bury",
      butPlus: "Ice World arches, at Dusk or Dark results.",
      patronHook: "A walker's line runs through an Ice World arch and into the city. The Archkeepers want it laid to rest first.",
      cityName: "\"Lantern-men\": lodge arrivals won't carry a lantern after dark."
    }
  },
];
