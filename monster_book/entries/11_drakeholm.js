// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Drakeholm",
    tier: "Elite",
    cost: 9,
    role: "Controller",
    level: 7,
    name: "Young Blizzard Dragon",
    seb: true,
    core: "Above Drakeholm's endless war, a dragon that has chosen no side. Its storm builds where everyone can see it.",
    description: "A pale blue dragon the size of a war-horse, scales rimed with frost, wings " +
      "ragged with icicles.",

    stats: { hp: 95, armor: "Medium", speed: "8 (fly 12, burrow 6 in snow)", dc: 13, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "2d8+8", "Cold. Restrained, frozen to the ground, until its next turn ends. The target still acts."),
      A("Claws", "1 Action", "1d8+6", "Slides the target 2. Its aura slides anyone ending a turn within 1 another space."),
      A("Rising winds", "1 Action", "4d8", "Telegraphed: aura grows to 3, then 5. Next turn, STR save or Slowed and Blind beyond 1; half on success."),
    ],

    tactics: "Slides heroes toward the edge, then winds up the storm. Bloodied, it takes wing out of reach, its storm ready again.",
    sources: "Monster Vault: 4e MM3, Lv 7 Elite Controller. Freezing Winds and Rising Winds (4e); telegraph in the spirit of MCDM villain actions.",

    designNote:
      "The storm is visible for two turns: run, hide behind rock, or pile on damage. Every turn " +
      "stays the heroes' own. On a cliff, every slide is a fall.",

    traits: [
      "Frost forms on weapons within 6. Bowstrings creak.",
      "A torn wing. It flies crooked, always banking left.",
      "It counts aloud in Draconic, and stops when hurt.",
      "Vain: polishes its scales with snow and hates mud.",
      "A Metallic herald's gold chain on one horn, kept as an answer.",
      "Thin. The armies have eaten its valleys bare."
    ],
    encounters: [
      "An army must cross its pass before the third snow. Two have fallen. The commander wants one more day.",
      "Heralds of both crowns wait at its cave with gifts. It wants a third offer, and the party walks in.",
      "Its egg is gone, and planted tracks lead to the party's camp.",
      "It followed an arch to the Ice World and took a bear lodge's valley."
    ],
    lairs: [
      "A hoard frozen into a waterfall: banners of both armies, a helm, a taut war-drum.",
      "The snowed-in top of a ruined tower, a dragon-shaped hollow in the drift.",
      "Glacier claw-furrows all pointing toward the World's Wound.",
      "A frozen lake's breathing hole, ringed with the armour of envoys."
    ],
    rumours: [
      { true: true, text: "When the wind rises around it, you have two breaths. Get behind rock." },
      { true: true, text: "Hurt it and it flies. Have bows ready." },
      { true: false, text: "Throw oil and fire and it melts." },
      { true: false, text: "It is sworn to the Chromatic Queen. Talking is wasted breath." }
    ],
    gigFit: {
      verb: "Escort / Prove",
      butPlus: "Drakeholm arches with mountains or snow. Use the storm with a Dusk result.",
      patronHook: "Galeos Titancowl wants its favour for the Metallic King, or at least its absence from the war.",
      cityName: "\"Storm-wings\": any dragon with no side. In the Black Goat, a patron who pays both crews."
    }
  },

  {
    world: "Drakeholm",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Drakkoth Faterager",
    seb: true,
    core: "A dracotaur of the nomad tribes who serve dragon patrons. It reads its fate in dragon bones and names whoever must fall.",
    description: "A four-legged drake's body with a scaled torso rising from its shoulders, a " +
      "battleaxe in both hands, a bandage over one eye.",

    stats: { hp: 49, armor: "Medium", speed: "7", dc: 13, stage: "13+" },

    actions: [
      A("Battleaxe", "1 Action, ×2", "1d10+5", "Bloodied: +4 damage, heals 5 on a hit once a round, and may cleave every adjacent enemy."),
      A("Name the doomed", "Free, start of combat", "", "One hero is Taunted by it until one of them falls. That hero's successful saves reroll, keeping the lower."),
      A("Venomous hiss", "1 Action, recharges when first Bloodied", "3d6+4", "Poison, cone 2. DEX save for half; failure also Poisoned until their next turn ends."),
    ],

    tactics: "Leaps into the party, names the strongest-looking hero, and fights only them. Never breaks off from its named foe.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 8. Dracotaur form, Raging Cleave, Venomous Hiss, Drakkoth Rage (4e MM2).",

    designNote:
      "One hero is pinned and their luck turns; everyone else gets free swings. Bloodied, it " +
      "becomes a brute. Lead a warband with it or run it as a duel.",

    traits: [
      "A rune on its armour for every named foe killed, and room for one more.",
      "It casts finger bones and won't fight until they agree.",
      "Old and grey, scales cracked like dry mud.",
      "One verse of a war-song per swing. The last verse is its own death.",
      "The bandaged eye is gold, a dragon's. It never lifts the cloth.",
      "A token from every hero it has named: a ring, a braid, a key."
    ],
    encounters: [
      "It casts its bones on a hero's table at the Black Goat, speaks their name, and waits outside.",
      "It holds a bridge with six outriders. The party passes if one of them fights it alone.",
      "Two fateragers from opposite armies duel over a young dragon's body.",
      "One arrives through an arch with a hero's face scratched on a bone. They have never met."
    ],
    lairs: [
      "A hollow under a dragon's ribs, floored with bone chips worn smooth by casting.",
      "A tent apart from the war camp: a mat, an axe stone, a wall of tokens.",
      "An unburied battlefield it walks each morning, reading one of the dead.",
      "A stable behind the Rusty Cutlass, paid a month ahead, a hero's name cut in the doorframe."
    ],
    rumours: [
      { true: true, text: "It picks one of you. The rest hit it while it's busy." },
      { true: true, text: "If it names you, your luck turns. Don't count on your saves." },
      { true: false, text: "Its bones never lie. If it named you, you're already dead." },
      { true: false, text: "Kill its named foe first and it loses heart." }
    ],
    gigFit: {
      verb: "Prove / Stop",
      butPlus: "Drakeholm arches near armies, or the city as a Twist: the bones named a hero before the episode.",
      patronHook: "Galeos Titancowl hears one has named her friend. She wants the fate proved wrong.",
      cityName: "\"Bone-readers\": gamblers use it for anyone too sure of a bet."
    }
  },
];
