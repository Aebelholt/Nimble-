module.exports = [
  {
    world: "Drakeholm",
    tier: "Elite",
    role: "Controller",
    level: 7,
    name: "Young Blizzard Dragon",
    description: "A pale blue dragon the size of a war-horse, its scales rimed with " +
      "frost and its wings ragged with icicles. It breathes snowstorms. It nests in the " +
      "mountains above the battlefields and has not chosen a side.",

    stats: { hp: 95, armor: "Medium", speed: "8 (fly 12, burrow 6 in snow)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "2d8+8",
        effect: "Cold."
      },
      {
        name: "Claws",
        cost: "1 Action",
        damage: "1d8+6",
        effect: "On hit: STR save DC 13 or Prone."
      },
      {
        name: "Blizzard breath",
        cost: "2 Actions, 1/encounter",
        damage: "4d8",
        effect: "Cold, cone 6. STR save DC 13 for half. On a failure, the target is also " +
          "Slowed and pushed 3 spaces."
      },
      {
        name: "Whiteout",
        cost: "Free, 1/round",
        damage: "—",
        effect: "A sphere of blinding snow, 3-space radius, within 12 spaces. Creatures " +
          "inside are Blind beyond 1 space. The whiteout moves each round."
      },
      {
        name: "Second wind",
        cost: "Passive, when first Bloodied",
        damage: "—",
        effect: "It takes to the air and its breath recharges."
      }
    ],

    designNote:
      "An Elite controller. The whiteout splits the party, the breath Slows and pushes, " +
      "and the claws knock heroes Prone. None of it takes a turn away. Second wind " +
      "gives the fight two acts: on the ground, and then in the air. Fight it in the " +
      "mountains, where the snow helps it, and on cliff edges, where the breath's push " +
      "is a fall.",

    traits: [
      "Frost forms on every weapon within 6 spaces of it, and bowstrings creak.",
      "One wing is torn and it flies crooked, always banking left.",
      "It counts aloud in Draconic as it fights, and stops counting when it is hurt.",
      "Vain: it polishes its scales with fresh snow and hates being muddied.",
      "A gold chain of the Metallic King hangs from one horn. It took it from a " +
        "herald and kept it as an answer.",
      "Thin and hungry. The armies have eaten everything in its valleys."
    ],

    encounters: [
      "A Metallic army must cross a pass the dragon claims by the third snowfall. " +
        "Two snows have fallen. The army's commander asks the party to buy one more day.",
      "Heralds of both the Chromatic Queen and the Metallic King wait in the dragon's " +
        "cave mouth with gifts. It wants a third offer, and the party just walked in.",
      "The dragon's egg is missing. The tracks in the snow lead to the party's camp, " +
        "and someone put them there.",
      "The dragon has followed an arch from Drakeholm to the Ice World and taken a " +
        "bear lodge's hunting valley. The lodge cannot kill it without starting a war " +
        "they do not understand."
    ],

    lairs: [
      "A cave behind a frozen waterfall, its hoard locked in the ice like flies in " +
        "amber: banners of both armies, a dragonborn's helm, a war-drum still taut.",
      "The upper floors of a ruined mile-high tower, snow drifted to the windowsills, " +
        "and a dragon-shaped hollow in the drift where it sleeps.",
      "A glacier field scored with claw-furrows. Every furrow points toward the World's " +
        "Wound, as if it practises flying there and turns back.",
      "A frozen lake with a single breathing hole. Around the hole, the ice is " +
        "littered with the armour of soldiers who came to parley."
    ],

    rumours: [
      { true: true,
        text: "Its storm moves. Keep moving and you'll find clear air." },
      { true: true,
        text: "When it's hurt, it flies. Have bows ready." },
      { true: false,
        text: "Blizzard dragons melt if they take fire. Throw oil and it's done." },
      { true: false,
        text: "It has already sworn to the Chromatic Queen. Talking to it is a waste " +
          "of breath." }
    ],

    gigFit: {
      verb: "Escort / Prove",
      butPlus:
        "But+ Monster on any Drakeholm arch with mountains or snow. Use the whiteout " +
          "with a Dusk result: light and visibility close at once.",
      patronHook:
        "Galeos Titancowl wants the party to win the blizzard dragon's favour for the " +
          "Metallic King, or at least keep it out of the war.",
      cityName:
        "\"Storm-wings\": Drakeholm arrivals' word for any dragon that has not picked " +
          "a side. In the Black Goat it means a patron who pays both crews."
    }
  },

  {
    world: "Drakeholm",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Drakkoth Faterager",
    description: "A dragonborn warrior in battered scale armour, a greataxe in both " +
      "hands and a bandage over one eye. They follow a fate they read in the bones of " +
      "the dead and they believe it says they cannot die today.",

    stats: { hp: 49, armor: "Medium", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Greataxe",
        cost: "1 Action, ×2",
        damage: "1d10+5",
        effect: "Slashing."
      },
      {
        name: "Name the doomed",
        cost: "Free, 1/encounter, start of combat",
        damage: "—",
        effect: "It names one hero. That hero is Taunted by it until it dies or the " +
          "encounter ends."
      },
      {
        name: "Twist fate",
        cost: "Reaction, 1/round",
        damage: "—",
        effect: "When a hero within 6 spaces succeeds on a save, they reroll and take the " +
          "lower result."
      },
      {
        name: "Lightning breath",
        cost: "2 Actions, 1/encounter",
        damage: "3d6+4",
        effect: "Lightning, 6-space line. DEX save DC 13 for half."
      },
      {
        name: "Fate rage",
        cost: "Passive",
        damage: "—",
        effect: "While Bloodied, it gains +2 Speed and its Greataxe deals +4 damage."
      }
    ],

    designNote:
      "A controller in a berserker's body. The faterager picks one hero at the start " +
      "of the fight and pins them as its opponent with Taunt. Twist fate makes every " +
      "save near it a gamble. Its rage turns it into a brute when Bloodied. Use it to " +
      "lead a squad of dragonborn soldiers or as a duellist.",

    traits: [
      "Its armour is painted with a rune for every foe it named and killed. There " +
        "is space left for exactly one more.",
      "It casts finger bones before each fight and will not start until they agree.",
      "Old and grey, scales cracked like dry mud. It has outlived every fate it read.",
      "It sings the same war-song every swing, one verse per blow, and the last " +
        "verse is about its own death.",
      "The bandaged eye is gold, a dragon's eye, and it never lifts the cloth.",
      "It carries a token from each hero it has named: a ring, a braid, a key."
    ],

    encounters: [
      "A faterager walks into the Black Goat, casts its bones on a hero's table, " +
        "speaks their name, and goes outside to wait.",
      "A faterager and six dragonborn hold the only bridge across a chasm. It will let " +
        "the party pass if one of them fights it alone.",
      "Two fateragers from opposite armies duel over the body of a young dragon. " +
        "Each one's bones said the other would lose.",
      "A faterager has come through an arch into the City of Arches with a drawing " +
        "of a hero's face scratched on a bone. It has never met them."
    ],

    lairs: [
      "A hollow under a fallen dragon's ribs, floored with bone chips worn smooth " +
        "by generations of casting.",
      "A war camp's edge, where the faterager's tent stands apart. Inside: a sleeping " +
        "mat, an axe stone, and a wall of tokens from the named.",
      "A battlefield of the endless war where the dead were never buried. The " +
        "faterager reads them, walking slowly, one each morning.",
      "A rented room above the Rusty Cutlass, paid a month ahead, with a hero's name " +
        "cut into the doorframe."
    ],

    rumours: [
      { true: true,
        text: "It picks one of you. The rest can hit it while it's busy." },
      { true: true,
        text: "Its fate-reading is real. It can turn your luck. Don't rely on saves near it." },
      { true: false,
        text: "Its bones never lie. If it named you, you're already dead. Run." },
      { true: false,
        text: "Kill its named foe first and it loses heart and leaves." }
    ],

    gigFit: {
      verb: "Prove / Stop",
      butPlus:
        "But+ Monster on any Drakeholm arch near armies or battlefields, or in the " +
          "city as a Twist: the bones named a hero before the episode started.",
      patronHook:
        "Galeos Titancowl has heard a faterager has named one of her friends. She " +
          "wants the party to prove the fate wrong.",
      cityName:
        "\"Bone-readers\": Drakeholm arrivals' term. Lower Reaches gamblers use it " +
          "for anyone too sure of a bet."
    }
  },
];
