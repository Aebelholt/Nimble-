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
        effect: "Cold. The target is Restrained, frozen to the ground, until the end of " +
          "the dragon's next turn. They can still act."
      },
      {
        name: "Claws",
        cost: "1 Action",
        damage: "1d8+6",
        effect: "On hit: the dragon slides the target 2 spaces."
      },
      {
        name: "Freezing winds",
        cost: "Passive, aura 1",
        damage: "—",
        effect: "The dragon slides any enemy that ends its turn in the aura 1 space."
      },
      {
        name: "Rising winds",
        cost: "1 Action, when the aura is 1",
        damage: "4d8",
        effect: "Telegraphed. The aura grows to 3 now, and to 5 at the start of its next " +
          "turn. At the start of the turn after that, everyone in the aura makes a STR " +
          "save DC 13: cold damage, half on a success; on a failure also Slowed and " +
          "Blind beyond 1 space until the end of their next turn. The aura drops back " +
          "to 1."
      },
      {
        name: "Take wing",
        cost: "Passive, when first Bloodied",
        damage: "—",
        effect: "It flies up out of reach, and Rising winds is ready again."
      }
    ],

    tactics: "Wants to stay out of the war and keep its valleys fed. Slides heroes to the cliff edge, then winds up its storm. Breaks off into the sky when Bloodied, then comes back with the storm ready.",
    sources: "Monster Vault: 4e MM3, Lv 7 Elite Controller. 4e MM3 Young Blizzard Dragon (Freezing Winds aura, Rising Winds).",

    designNote:
      "An Elite controller built on 4e's young blizzard dragon. Its big attack is " +
      "telegraphed over two turns: the wind visibly builds, and the heroes decide " +
      "whether to run, hide behind something, or pile on damage before it lands. That " +
      "is the same idea as MCDM's villain actions, and it keeps every turn the heroes' " +
      "own. The slides on its claws and aura walk heroes toward cliff edges. Take wing " +
      "gives the fight two acts: on the ground, and then in the air. Fight it in the " +
      "mountains, where the snow helps it, and on cliff edges, where every slide " +
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
        text: "When the wind starts rising around it, you've two breaths. Get out or " +
          "get behind rock." },
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
    description: "A dracotaur: the body of a four-legged drake, and a scaled torso " +
      "rising where a drake's neck would be, a battleaxe in both hands and a bandage " +
      "over one eye. It reads its fate in dragon bones and believes they say it " +
      "cannot die today.",

    stats: { hp: 49, armor: "Medium", speed: "7", stage: "13+" },

    actions: [
      {
        name: "Battleaxe",
        cost: "1 Action, ×2",
        damage: "1d10+5",
        effect: "Slashing. While Bloodied, it may instead swing at every adjacent enemy " +
          "with one roll (Raging cleave)."
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
        name: "Venomous hiss",
        cost: "1 Action, recharges when first Bloodied",
        damage: "3d6+4",
        effect: "Poison, cone 2. DEX save DC 13 for half. On a failure, the target is " +
          "also Poisoned until the end of its next turn."
      },
      {
        name: "Fate rage",
        cost: "Passive",
        damage: "—",
        effect: "While Bloodied, its Battleaxe deals +4 damage, and once per round it " +
          "heals 5 HP when it hits."
      }
    ],

    tactics: "Wants to prove its bones right. Leaps into the thick of the party, names the strongest-looking hero, and fights only them until one of them falls. Ignores spellcasters unless they get in the way. Never breaks off from its named foe.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 8. 4e MM2 drakkoth (dracotaur form, Raging Cleave, Venomous Hiss, Drakkoth Rage).",

    designNote:
      "Drakkoths are 4e's dracotaurs, not dragonborn; the first draft got the body " +
      "wrong. A controller in a berserker's body. The faterager picks one hero at the start " +
      "of the fight and pins them as its opponent with Taunt. Twist fate makes every " +
      "save near it a gamble. Its rage turns it into a brute when Bloodied. Use it to " +
      "lead a drakkoth warband or as a lone duellist.",

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
      "A faterager shoulders into the Black Goat, hooves on the floorboards, casts its bones on a hero's table, " +
        "speaks their name, and goes outside to wait.",
      "A faterager and six drakkoth outriders hold the only bridge across a chasm. It will let " +
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
      "A stable behind the Rusty Cutlass, rented as lodging and paid a month ahead, with a hero's name " +
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
