module.exports = [
  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Dream Squire",
    description: "An elf in tarnished half-plate, eyes open but unfocused, moving with the " +
      "slow care of a sleepwalker. Moss grows in the seams of its armour. It bows " +
      "before every fight, to a knight who is not there.",

    stats: { hp: 27, armor: "Medium", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Ceremonial blade",
        cost: "1 Action",
        damage: "1d8+6",
        effect: "Advantage against a Slowed target."
      },
      {
        name: "Drowse",
        cost: "Passive, Reach 3",
        damage: "—",
        effect: "A hero who starts their turn within 3 spaces makes a WIL save DC 12 or " +
          "is Slowed. A hero who fails while already Slowed is Dazed instead."
      },
      {
        name: "Stand for the knight",
        cost: "Reaction, 1/round",
        damage: "—",
        effect: "When an ally within 2 spaces is hit, the squire steps in and takes the " +
          "hit. The attacker makes a WIL save DC 12 or falls Prone, heavy with sleep."
      },
      {
        name: "Bound in dream",
        cost: "Passive",
        damage: "—",
        effect: "Dropped to 0 HP, it fades. It wakes again at its post at the next dawn " +
          "unless the dream it serves is broken."
      }
    ],

    tactics: "Wants to hold its post for a knight who is not there. Targets whoever moves toward what it guards. Never breaks off while the dream holds.",
    sources: "Original to this book; no source text on hand.",

    designNote:
      "Dream squires are defenders run as controllers. Drowse ratchets: one failed save " +
      "Slows, a second Dazes, never more than one action lost. Stand for the knight " +
      "punishes heroes who ignore the squire to hit what it guards. Its true weakness " +
      "is narrative: it serves a dream, and breaking the dream ends it for good. Put " +
      "that dream somewhere in the room.",

    traits: [
      "Its eyes move under the lids as if it is reading.",
      "It murmurs a name, Kalasar, over and over.",
      "A dried flower is tucked into its gauntlet, the petals still faintly sweet.",
      "Its armour bears the crest of Celevis, scratched out and redrawn by hand.",
      "This one is very young. Its armour is too big.",
      "It weeps silently, the whole fight."
    ],

    encounters: [
      "Two squires stand at a vault door in the ruins of Celevis. They bow to the " +
        "party and draw. The door hums with sleep.",
      "A squire walks the forest at night, followed by a cloud of moths. Everyone it " +
        "passes falls asleep where they stand.",
      "A Bluesteel airship has captured a squire and is taking it home as a trophy. " +
        "The crew is getting drowsy and the pilot has nodded off.",
      "The party wakes in a forest clearing. Their gear is laid out neatly around " +
        "them. A squire stands guard and will not say who ordered it."
    ],

    lairs: [
      "A moss-grown guardhouse in Celevis with beds still made, a cup still on the " +
        "table, and a sentinel elf asleep at every post.",
      "A clearing in Eruwynd where the trees have grown into the shape of a hall, and " +
        "a stone seat at the far end holds a sleeping figure in white.",
      "The base of a root-wrapped vault door. Footprints in the moss walk to the door " +
        "and back, wearing a groove.",
      "A dwarf hunting camp, abandoned in a hurry, with a squire's crested helm on a " +
        "spit as a trophy and every hunter asleep in their bedrolls."
    ],

    rumours: [
      { true: true,
        text: "They serve a dream, not a lord. Find the dreamer and wake them, and the " +
          "squires go out like candles." },
      { true: true,
        text: "The sleep comes slow. Keep moving and keep talking and you won't go under." },
      { true: false,
        text: "If you fall asleep near one, you never wake up." },
      { true: false,
        text: "Squires can't attack someone who bows to them. It's a point of honour." }
    ],

    gigFit: {
      verb: "Steal / Prove",
      butPlus:
        "But+ Monster on any Eruwynd arch near the ruins of Celevis. Best when the " +
          "party's goal is guarded, and the guard is someone else's dream.",
      patronHook:
        "A Golden Council member with a private key wants the Immortal's Blade, or " +
          "proof that it exists. The squires guarding the vault have kept that door " +
          "shut for a thousand years.",
      cityName:
        "\"Sleepwalkers\": Archkeeper term, from an Eruwynd arrival who came through " +
          "still dreaming and stood guard at the Arch of Kings for three days."
    }
  },

  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Red Hag",
    description: "A tall, stooped woman with skin like rust-red bark and hair matted with " +
      "dried blood, all of it someone else's. She smiles with long, stained teeth and " +
      "smells of iron and crushed berries.",

    stats: { hp: 75, armor: "None", speed: "6 (climb 6)", stage: "13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d8+7",
        effect: "On hit, the hag has the target's blood under her nails until the end of " +
          "the encounter."
      },
      {
        name: "Blood calls",
        cost: "1 Action, Range 12",
        damage: "—",
        effect: "One creature whose blood she has: STR save DC 13 or they are pulled 4 " +
          "spaces toward her and Slowed."
      },
      {
        name: "Bramble ring",
        cost: "2 Actions, 1/encounter",
        damage: "—",
        effect: "Every space within 3 of her becomes thorny Difficult Terrain. A creature " +
          "takes 1d6+2 damage for each space it moves through."
      },
      {
        name: "Drink deep",
        cost: "Passive",
        damage: "—",
        effect: "While Bloodied, she heals 10 HP the first time she damages a creature " +
          "each round."
      }
    ],

    tactics: "Wants blood, and to be paid in it. Claws one hero, then pulls that hero to her through the thorns, again and again. Bargains before she fights. Breaks off when Bloodied with no blood left to call, vanishing into the thicket.",
    sources: "Original to this book; no source text on hand.",

    designNote:
      "The red hag reels heroes in by blood. Once her claws land, she can pull that " +
      "hero toward her across the field, through her brambles, or away from the party. " +
      "She is a controller because every hit makes the next pull possible. Fight her " +
      "at range or keep the wounded behind cover. She is dangerous in a thicket and far " +
      "weaker in open ground, where the brambles have little to bind.",

    traits: [
      "She wears a necklace of finger bones, each tied with a different coloured thread.",
      "Her laugh is a crow's caw. Real crows answer it.",
      "She has a small, well-loved cat that hisses at the party.",
      "One of her hands is a gnarled wooden prosthetic carved with runes.",
      "Her voice is soft and kind, like a grandmother's.",
      "She is wearing a Bluesteel pilot's coat, too big, still bloodstained."
    ],

    encounters: [
      "A clearing with a single cottage, smoke rising, and a red-skinned woman tending " +
        "a garden of thorny roses. She offers tea.",
      "A Bluesteel sister is trapped in a thicket, bleeding, and something red moves " +
        "through the trees toward her.",
      "Hobgoblin scouts from Dreadroot pay the red hag in blood for safe passage. They " +
        "are paying her now, in prisoners.",
      "The party's tracker finds a trail of blood droplets that never dry, leading " +
        "deeper into the forest."
    ],

    lairs: [
      "A hollow tree with a rough door, the bark painted with red handprints, all small.",
      "A pond of dark, thick water with a stone table at its centre, covered in old " +
        "wax and dried blood.",
      "A thicket of brambles taller than a man, woven into tunnels. Bones hang from " +
        "the thorns.",
      "A collapsed elven chapel from Celevis, its altar used as a butcher's block, " +
        "with fresh flowers left beside it."
    ],

    rumours: [
      { true: true,
        text: "If she draws your blood, she can call it back to her. Stay out of her " +
          "reach and she has nothing to pull." },
      { true: true,
        text: "Her briars are thick and sharp, but they're plants. Fire clears them." },
      { true: false,
        text: "She can't cross running water. Get to a stream and you're safe." },
      { true: false,
        text: "If you give her your true name, she'll let you go." }
    ],

    gigFit: {
      verb: "Stop / Escort",
      butPlus:
        "But+ Monster on any Eruwynd arch with forest. Pair with a wounded NPC: she " +
          "can call blood, and they're bleeding.",
      patronHook:
        "A Bluesteel sister has come through an arch to the City of Arches to hire " +
          "help. She wants the red hag's head for her trophy wall and the University " +
          "wants the hag's blood-craft written down.",
      cityName:
        "\"Mother Rust\": what Eruwynd arrivals call her, always quietly, and never " +
          "while bleeding."
    }
  },

  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Skirmisher",
    level: 5,
    name: "Phase Spider",
    description: "A long-legged spider the size of a pony, its body shimmering blue-violet " +
      "like oil on water. It flickers as it walks, there and not there, and the air " +
      "where it was smells of ozone.",

    stats: { hp: 49, armor: "None", speed: "6 (climb 6)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "2d8+6",
        effect: "STR save DC 13 or Poisoned until healed or the end of the encounter."
      },
      {
        name: "Phase",
        cost: "Free, 1/round",
        damage: "—",
        effect: "It vanishes into the Ethereal and can't be targeted. At the start of its " +
          "next turn it reappears within 8 spaces of where it left. Its first attack " +
          "after reappearing has advantage."
      },
      {
        name: "Ethereal repulsion",
        cost: "Reaction, when an enemy moves adjacent to it",
        damage: "—",
        effect: "WIL save DC 13 or the spider teleports that enemy 4 spaces to a space it " +
          "can see."
      },
      {
        name: "Pull through",
        cost: "1 Action, 1/encounter, Poisoned target in Reach",
        damage: "—",
        effect: "The spider phases with the target. Both vanish until the start of the " +
          "spider's next turn, then reappear up to 8 spaces away, adjacent. While " +
          "between, the target sees grey fog and the spider, and can attack only it."
      }
    ],

    tactics: "Wants an easy kill from behind. Blinks in on the biggest hero, not the weakest, and blinks away. Breaks off when Bloodied; it simply stops coming back.",
    sources: "4e MM2 Phase Spider (Ethereal Repulsion); Ammann (phase spiders).",

    designNote:
      "In 5e the bite can leave a creature paralysed. Here it Poisons, so every roll " +
      "is harder but the hero still acts. The spider's real trick is position: it " +
      "vanishes, reappears behind the backline, and once per fight carries a hero off " +
      "into the fog for a private duel. Ethereal repulsion, from 4e, punishes the hero " +
      "who charges it: they arrive and are somewhere else. Use it in open forest or wide halls where the " +
      "8-space hop matters. In a corridor, where it can only appear in front or behind, " +
      "it is predictable.",

    traits: [
      "Its legs crackle with tiny sparks when it phases.",
      "It leaves no tracks, but every web it spins glows faintly blue.",
      "This one has a missing leg and phases more often to cover the limp.",
      "It hums at a pitch that makes small animals flee.",
      "It has a hero's face reflected in its eyes before it has ever seen them.",
      "A web of glittering silver is caught on its fangs. It came from somewhere else."
    ],

    encounters: [
      "A web hangs between two trees, glowing blue. A Bluesteel hunter is caught in " +
        "it, barely breathing, and the spider is nowhere to be seen.",
      "The party's guide vanishes mid-sentence. A moment later there's a scream from " +
        "behind them, eight spaces off.",
      "Phase spiders hunt in the canopy above a hobgoblin patrol. The hobgoblins are " +
        "in a bad way and will trade a map for help.",
      "A phase spider is guarding an egg sac in a ruined Celevis library. The eggs " +
        "are flickering in and out of reality."
    ],

    lairs: [
      "A clearing where the trees are hung with blue-glowing webs and the bodies of " +
        "birds, all perfectly preserved.",
      "A Celevis ruin with webs between the pillars and a faint shimmer in the air, " +
        "as if the world here is thin.",
      "A hollow inside a giant fallen tree with nothing inside but a single web strand " +
        "leading nowhere.",
      "A spot by a creek where the water flickers in and out of sight."
    ],

    rumours: [
      { true: true,
        text: "It can't stay gone. It always comes back within a breath and a stride or " +
          "eight. Turn your backs to each other." },
      { true: true,
        text: "If it drags you into the grey, hit it. That's all there is in there, and " +
          "it hurts it as much as you." },
      { true: false,
        text: "Phase spider venom drives you mad. You'll see the grey world forever." },
      { true: false,
        text: "They can only phase when you're not looking at them. Never take your " +
          "eyes off it." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on any Eruwynd or Vynan arch. Best when the party is spread out " +
          "or guarding someone fragile.",
      patronHook:
        "A mage of Kartan has a theory that phase spider silk can stabilise a failing " +
          "arch key. She wants a full egg sac, unbroken.",
      cityName:
        "\"Blinkers\": Lower Reaches name for any creature that appears and disappears. " +
          "Phase spiders are the reason the word came up through the arches."
    }
  },
];
