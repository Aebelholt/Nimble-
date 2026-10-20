module.exports = [
  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Yeti Howler",
    description: "A white-furred ape twice a man's height, with a blue-black face and " +
      "breath that freezes in the air. Its howl carries for miles across the ice. When " +
      "it stops, the snow on the slopes above has started to slide.",

    stats: { hp: 64, armor: "None", speed: "8 (ignores snow)", stage: "13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d10+5",
        effect: "Cold."
      },
      {
        name: "Chilling howl",
        cost: "1 Action, 1/round",
        damage: "—",
        effect: "Every hero within 8 spaces who can hear it makes a WIL save DC 13 or " +
          "is Frightened and Slowed until the end of their next turn."
      },
      {
        name: "Bring down the slope",
        cost: "2 Actions, 1/encounter, on a slope",
        damage: "2d6+4",
        effect: "A 3-space-wide line of snow 10 spaces long. DEX save DC 13 or take the " +
          "damage, get pushed 4 spaces downhill, and be Restrained in snow. A hero or " +
          "ally can dig them out with an action."
      },
      {
        name: "Carry off",
        cost: "1 Action",
        damage: "—",
        effect: "Against a Frightened, Prone or Dazed creature of Medium size or smaller: " +
          "STR save DC 13 or the yeti Grapples them and moves its full Speed. It does not " +
          "come back to finish the fight."
      },
      {
        name: "Snow camouflage",
        cost: "Passive",
        damage: "—",
        effect: "Advantage on Stealth on snow. Its first attack from hiding has " +
          "advantage."
      }
    ],

    tactics: "Wants a meal, not a fight. Picks off the small, the slow and the stragglers from hiding, then carries one off. Breaks off as soon as it has a victim in its arms, or when Bloodied.",
    sources: "Monster Vault: 4e MM3, Lv 4 Controller. 4e MM3 Yeti Howler (Chilling Wail aura); Ammann (yetis).",

    designNote:
      "The 5e yeti's gaze can freeze a creature in place. Here the howl Frightens and " +
      "Slows: heroes still act, but approaching costs more and the fear is a tax on " +
      "every roll. Carry off follows Ammann's " +
      "reading of the yeti: a predator that grabs a meal and leaves. The fight's real " +
      "question is whether the party can catch it in the snow. The slope is the encounter. On flat ice the yeti is a strong beast. " +
      "On a hillside, with the snow above, it is a weather event. Put a trail " +
      "below a ridge and let it howl.",

    traits: [
      "Its fur is matted with old blood, none of it its own.",
      "It carries a bear-lodge hunting spear in its fist like a toothpick.",
      "Its howl has a crack in it, a high wobble like a child's cry.",
      "This one is old and grizzled grey. Others follow it.",
      "Icicles hang from its brow and chin.",
      "It has a bear-lodge tally cut into its shoulder, an old scar. A lodge hunter " +
        "once claimed it."
    ],

    encounters: [
      "A bear lodge's hunters are pinned at the bottom of a valley by a yeti howling " +
        "from the ridge. Every howl brings a little more snow down.",
      "A yeti has taken a lodge child up into the ice caves. The lodge will pay with " +
        "a favour, but none of their hunters will go.",
      "The party's path crosses a frozen lake. Halfway across, a howl comes from the " +
        "shore, and the ice cracks in answer.",
      "A yeti has been driven into the low passes by something larger, and it is " +
        "hungry and frightened."
    ],

    lairs: [
      "An ice cave with walls of blue glass, the floor strewn with cracked bones and " +
        "chewed bear-lodge spears.",
      "A ledge high on a mountain with a nest of furs and a view down three valleys.",
      "A frozen waterfall with a hollow behind it, and a yeti's nest full of glittering " +
        "trinkets.",
      "A bear-lodge hunting camp, abandoned, with every tent flattened and footprints " +
        "the size of shields."
    ],

    rumours: [
      { true: true,
        text: "Stay off the slopes. Its howl doesn't hurt you, but the snow it brings " +
          "down will." },
      { true: true,
        text: "It can't hide on rock. Find bare ground and you'll see it coming." },
      { true: false,
        text: "One look into a yeti's eyes freezes your blood solid." },
      { true: false,
        text: "Yetis are afraid of fire. Wave a torch and it runs." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on any arch to the Ice World, on mountain or valley maps.",
      patronHook:
        "A bear lodge has come through the arch to ask the Archkeepers for help. Their " +
          "hunting grounds are cut off by a yeti, and their own tradition forbids them " +
          "from killing it.",
      cityName:
        "\"Avalanche-callers\": Ice World arrivals use the word for the yeti and for " +
          "anyone in the city who talks too loud in the wrong room."
    }
  },

  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Snow Golem",
    description: "A lumbering figure packed from snow and ice, eyes of black stone, a " +
      "carrot-shaped icicle for a nose. It was made by children of the bear lodges as " +
      "a joke. Something in the cold took the joke seriously.",

    stats: { hp: 52, armor: "None", speed: "4", stage: "13+" },

    actions: [
      {
        name: "Slam",
        cost: "1 Action",
        damage: "1d10+6",
        effect: "Cold."
      },
      {
        name: "Snowball volley",
        cost: "1 Action, Range 10",
        damage: "1d8+4",
        effect: "On hit: the target is Slowed."
      },
      {
        name: "Packed snow",
        cost: "Reaction, when hit by a melee weapon",
        damage: "—",
        effect: "The weapon sticks. The attacker's next attack with it has disadvantage."
      },
      {
        name: "Frost field",
        cost: "Passive",
        damage: "—",
        effect: "Spaces within 2 of it are icy Difficult Terrain. It heals 5 HP at the " +
          "start of its turn while standing on snow. Fire deals double damage."
      }
    ],

    tactics: "Wants to keep doing what a child once told it to. Pelts intruders from range and high ground, and rushes in to slam whoever hurts it with magic. Never breaks off while it stands on snow.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 3.",

    designNote:
      "A slow controller that makes the ground work for it. The frost field turns the " +
      "area around it into a slog, the snowballs Slow anyone trying to close, and its " +
      "healing on snow means the party needs fire, or to drag it onto bare rock. It is " +
      "a puzzle with a body. Children made it: let that be a clue for how to unmake it.",

    traits: [
      "It wears a bear-lodge scarf, knitted and patched.",
      "Its face is a child's drawing in pebbles, slightly lopsided.",
      "This one is melting. It leaves a trail of slush and is slowly shrinking.",
      "A child's mitten is frozen into its fist.",
      "It hums a lodge lullaby in a crackle of ice.",
      "It has a smaller golem with it, half-finished, that follows it like a child."
    ],

    encounters: [
      "A snow golem guards a lodge's empty village, keeping strangers out. The lodge " +
        "left two days ago and it doesn't know.",
      "Three golems are building a fourth on the frozen lake. The fourth will be much " +
        "bigger.",
      "Lodge children beg the party not to hurt their golem. It is sitting on the " +
        "party's sled.",
      "A golem has wandered through an arch into the City of Arches in winter and is " +
        "standing in Market Square, getting bigger with every snowfall."
    ],

    lairs: [
      "A courtyard in a lodge village, packed with snow sculptures. One of them " +
        "moves.",
      "A frozen pond where the golem stands in the centre, motionless, with snow " +
        "drifts like a moat around it.",
      "A snow-filled ravine full of half-built golems, made over generations of " +
        "children's games.",
      "A cave of ice under a glacier, glittering, with a single throne carved from " +
        "snow at its heart."
    ],

    rumours: [
      { true: true,
        text: "Get it off the snow and it stops mending. Lure it onto rock or ice." },
      { true: true,
        text: "The child who made it can unmake it. Find them." },
      { true: false,
        text: "Snow golems melt in the sun. Wait for noon and it's a puddle." },
      { true: false,
        text: "Take its nose and it falls apart." }
    ],

    gigFit: {
      verb: "Escort / Stop",
      butPlus:
        "But+ Monster on any arch to the Ice World, and in the City of Arches during " +
          "winter episodes.",
      patronHook:
        "The Golden Council has a snow golem standing in the middle of the market, and " +
          "the merchants want it gone without anyone looking foolish. The Archkeepers " +
          "want it returned, gently.",
      cityName:
        "\"Lodge-men\": what market children call them, and they build their own every " +
          "winter, hoping."
    }
  },

  {
    world: "Ice World",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Coldlight Walker",
    description: "A frozen corpse in lodge furs, its face white as snow and its eyes " +
      "gone to blue light. It walks a straight line across the ice, carrying a lantern " +
      "that burns cold. Whoever it is looking for, it hasn't found them yet.",

    stats: { hp: 75, armor: "None", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Frozen touch",
        cost: "1 Action, ×2",
        damage: "1d8+8",
        effect: "Cold."
      },
      {
        name: "Glare",
        cost: "1 Action, Range 8",
        damage: "—",
        effect: "One creature makes a DEX save DC 13 or is Blind until the end of its " +
          "next turn."
      },
      {
        name: "Coldlight",
        cost: "Passive, Reach 4",
        damage: "—",
        effect: "Creatures within 4 spaces are lit. They can't hide and its allies have " +
          "advantage against them. A hero adjacent to it can smother the lantern (1 " +
          "Action, Finesse DC 13) to end this until its next turn."
      },
      {
        name: "Walk the line",
        cost: "Passive",
        damage: "—",
        effect: "It never leaves its path, unless fire damages it: then it hunts that " +
          "creature until one of them falls. A creature standing in its way is walked " +
          "through: 2d6+4 cold and pushed 2 spaces."
      }
    ],

    tactics: "Wants to finish walking. Glares at the nearest hero until one stays Blind, then strikes them. Never leaves its path, unless burned: then it hunts whoever burned it until one of them falls.",
    sources: "Monster Vault: Conflux Creatures: NPCs & Undead, CR 5.",

    designNote:
      "The 5e coldlight walker blinds with its light. Here Blind lasts a turn and the " +
      "light's real job is to mark the heroes for everything else on the ice. The " +
      "walker is a hazard that fights back: it walks a fixed line, and the party can " +
      "simply get out of its way, unless what they need is on the line. Smothering " +
      "the lantern rewards a hero who closes in.",

    traits: [
      "Its furs bear the badge of a lodge that no longer exists.",
      "It calls a single name, softly, as it walks.",
      "Its lantern has a tiny figure of a bear inside, glowing.",
      "Frost spreads under its feet in a fern pattern.",
      "This one walks in a circle, endlessly.",
      "Its body is so old that the furs have grown through its skin."
    ],

    encounters: [
      "A walker's line runs straight across the only bridge in the pass.",
      "Lodge hunters have built a hide on the walker's path to see who it seeks. " +
        "They've been waiting for days and want the party to ask it.",
      "The party's guide is from the lodge the walker belonged to. It stops when it " +
        "sees them.",
      "A walker has come through an arch to the City of Arches and is walking a straight " +
        "line down the Villas of the Second Rise."
    ],

    lairs: [
      "A path of blue ice across a frozen sea, perfectly straight, with nothing at " +
        "either end.",
      "A collapsed lodge hall with a single lantern hook, empty, by the door.",
      "A grave in the ice with the walker's name carved on it, and the body missing.",
      "A circle of standing stones in the snow, where every walker's line crosses."
    ],

    rumours: [
      { true: true,
        text: "Step off its path. It won't chase you, it only walks." },
      { true: true,
        text: "Cover the lantern and it goes blind as you do." },
      { true: false,
        text: "Its light freezes you to the spot. Don't look at it." },
      { true: false,
        text: "Find who it seeks and bring them to it, and it'll lie down and rest." }
    ],

    gigFit: {
      verb: "Find / Bury",
      butPlus:
        "But+ Monster on any arch to the Ice World, at Dusk or Dark results.",
      patronHook:
        "The Archkeepers have learned a coldlight walker's line runs straight through " +
          "an Ice World arch and into the City of Arches. They want it laid to rest " +
          "before it walks through.",
      cityName:
        "\"Lantern-men\": lodge arrivals say the name with a shiver and won't use a " +
          "lantern after dark."
    }
  },
];
