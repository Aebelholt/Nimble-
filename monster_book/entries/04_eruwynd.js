// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Dream Squire",
    seb: true,
    core: "Celevis's sentinels fell asleep at their posts a thousand years ago and kept guarding in the dream.",
    description: "An elf in tarnished half-plate, eyes open and unfocused, moss in the seams of its " +
      "armour. It bows before every fight to a knight who is not there.",

    stats: { hp: 27, armor: "Medium", speed: "6", dc: 12, stage: "13+" },

    actions: [
      A("Ceremonial blade", "1 Action", "1d8+6", "Advantage against a Slowed target."),
      A("Drowse", "Passive, Reach 3", "", "Heroes starting a turn near it: WIL save or Slowed. Already Slowed, Dazed instead."),
      A("Stand for the knight", "Reaction, 1/round", "", "Takes a hit meant for an ally within 2. The attacker: WIL save or Prone with sleep."),
    ],

    tactics: "Holds its post against whoever approaches it. Never breaks off; dropped, it wakes at dawn unless its dream is broken.",
    sources: "Monster Vault: Creature Codex, CR 2. Rebuilt as Celevis's sentinel elves (canon).",

    designNote:
      "The sleep ratchets: one failed save Slows, a second Dazes, never more. Its weakness is the " +
      "dreamer. Put the sleeping knight in the room.",

    traits: [
      "Its eyes move under the lids, reading.",
      "It murmurs one name, Kalasar, over and over.",
      "A dried flower in its gauntlet, still faintly sweet.",
      "The Celevis crest on its armour, scratched out and redrawn by hand.",
      "Very young. The armour is too big.",
      "It weeps silently the whole fight."
    ],
    encounters: [
      "Two squires at a door bow to the party and draw. The door hums with sleep.",
      "A squire walks at night under a cloud of moths. Everyone it passes falls asleep standing.",
      "Bluesteel hunters have caught one as a trophy. The crew is nodding off.",
      "The party wakes with their gear laid out neatly. A squire guards them and won't say who ordered it."
    ],
    lairs: [
      "A guardhouse with beds made, a cup on the table, a sentinel asleep at every post.",
      "Trees grown into a hall, a figure in white asleep on a stone seat at the end.",
      "A root-wrapped vault door, a groove worn in the moss by footsteps to it and back.",
      "An abandoned hunting camp, every hunter asleep in their bedroll."
    ],
    rumours: [
      { true: true, text: "They serve a dream. Wake the dreamer and they go out like candles." },
      { true: true, text: "The sleep comes slow. Keep moving and keep talking." },
      { true: false, text: "Fall asleep near one and you never wake." },
      { true: false, text: "They can't strike anyone who bows to them." }
    ],
    gigFit: {
      verb: "Steal / Prove",
      butPlus: "Eruwynd arches near Celevis, when the goal is guarded by someone else's dream.",
      patronHook: "A Council member with a private key wants the Immortal's Blade, or proof it exists. The squires have held that door a thousand years.",
      cityName: "\"Sleepwalkers\": after an arrival who stood guard at the Arch of Kings for three days, still dreaming."
    }
  },

  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Red Hag",
    seb: true,
    core: "The Endless Forest feeds on hunters' blood, and she collects it. Once she has yours, she can call it.",
    description: "A tall, stooped woman with skin like rust-red bark and hair matted with someone " +
      "else's blood. She smells of iron and crushed berries.",

    stats: { hp: 75, armor: "None", speed: "6 (climb 6)", dc: 13, stage: "13+" },

    actions: [
      A("Claws", "1 Action, ×2", "1d8+7", "She keeps the target's blood under her nails for the encounter."),
      A("Blood calls", "1 Action, Range 12", "", "A creature whose blood she has: STR save or pulled 4 spaces to her and Slowed."),
      A("Bramble ring", "2 Actions, 1/encounter", "", "Within 3 of her, thorns: 1d6+2 per space moved."),
    ],

    tactics: "Bargains first. Then claws one hero and reels them in through the thorns. Bloodied with no blood to call, she vanishes.",
    sources: "Monster Vault: Grim Hollow: Monster Grimoire, CR 1/2. Scaled up as a mid-level controller; Drink deep cut.",

    designNote:
      "Every hit sets up the next pull, so range and cover are the answer. Deadly in a thicket, " +
      "weak in the open.",

    traits: [
      "A necklace of finger bones, each tied with a different thread.",
      "She laughs like a crow, and crows answer.",
      "A small, well-loved cat that hisses at the party.",
      "One hand is carved wood, cut with runes.",
      "A soft, kind voice, like a grandmother's.",
      "A Bluesteel pilot's coat, too big, still bloodstained."
    ],
    encounters: [
      "A red-skinned woman tends a garden of thorny roses and offers tea.",
      "A Bluesteel sister bleeds in a thicket, and something red moves toward her.",
      "Dreadroot hobgoblin scouts pay her for passage, in prisoners.",
      "A trail of blood droplets that never dry leads deeper in."
    ],
    lairs: [
      "A hollow tree, its door painted with small red handprints.",
      "A pond of thick dark water around a stone table caked in wax and blood.",
      "Bramble tunnels taller than a man, bones hanging from the thorns.",
      "A fallen Celevis chapel, the altar a butcher's block, fresh flowers beside it."
    ],
    rumours: [
      { true: true, text: "Once she draws your blood she can call it. Stay out of reach." },
      { true: true, text: "Her briars are only plants. Fire clears them." },
      { true: false, text: "She can't cross running water." },
      { true: false, text: "Give her your true name and she'll let you go." }
    ],
    gigFit: {
      verb: "Stop / Escort",
      butPlus: "Eruwynd forest arches. Pair with a wounded NPC: she can call blood, and they are bleeding.",
      patronHook: "A Bluesteel sister wants the hag's head for her trophy wall. The University wants her blood-craft written down first.",
      cityName: "\"Mother Rust\": said quietly, and never while bleeding."
    }
  },

  {
    world: "Eruwynd",
    tier: "Standard",
    role: "Skirmisher",
    level: 5,
    name: "Phase Spider",
    seb: true,
    core: "Where Celevis wore the world thin, a spider learned to step through it. It hunts from the other side.",
    description: "A spider the size of a pony, shimmering blue-violet like oil on water. It flickers " +
      "as it walks, and the air where it was smells of ozone.",

    stats: { hp: 49, armor: "None", speed: "6 (climb 6)", dc: 13, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "2d8+6", "STR save or Poisoned until healed."),
      A("Phase", "Free, 1/round", "", "Vanishes; reappears within 8 at the start of its next turn, its first attack advantaged."),
      A("Ethereal repulsion", "Reaction, enemy moves adjacent", "", "WIL save or that enemy is teleported 4 spaces."),
    ],

    tactics: "Blinks in on the biggest hero, bites, blinks away. Bloodied, it simply stops coming back.",
    sources: "Monster Vault: 4e MM2, Lv 8 Skirmisher. Ethereal Repulsion (4e); targets the large (Ammann). Paralysis rebuilt as Poisoned.",

    designNote:
      "Its trick is position: behind the backline, then gone, and whoever charges it lands somewhere " +
      "else. Strong in open forest, predictable in a corridor.",

    traits: [
      "Its legs spark when it phases.",
      "It leaves no tracks, but its webs glow faintly blue.",
      "A missing leg. It phases more to hide the limp.",
      "It hums at a pitch that sends small animals running.",
      "A hero's face already reflected in its eyes.",
      "Silver web from somewhere else caught on its fangs."
    ],
    encounters: [
      "A Bluesteel hunter hangs in a glowing web, barely breathing. No spider in sight.",
      "The guide vanishes mid-sentence. A scream eight spaces behind.",
      "A battered hobgoblin patrol will trade a map for help with what hunts them from the canopy.",
      "An egg sac flickering in and out of the world, and its mother nearby."
    ],
    lairs: [
      "Trees hung with blue webs and perfectly preserved birds.",
      "Pillars of a Celevis ruin strung with web, the air shimmering thin.",
      "A fallen trunk, hollow, with one strand leading nowhere.",
      "A creek whose water flickers in and out of sight."
    ],
    rumours: [
      { true: true, text: "It always comes back within eight strides. Stand back to back." },
      { true: true, text: "Charge it and you'll land somewhere else. Make it come to you." },
      { true: false, text: "Its venom drives you mad. You'll see the grey world forever." },
      { true: false, text: "It can only phase when no one is looking at it." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Eruwynd and Vynan arches, when the party is spread out or guarding someone fragile.",
      patronHook: "A Kartan mage thinks phase silk can steady a failing arch key. She wants an egg sac, unbroken.",
      cityName: "\"Blinkers\": the Lower Reaches word for anything that appears and disappears."
    }
  },
];
