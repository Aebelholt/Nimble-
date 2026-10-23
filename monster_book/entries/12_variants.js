// SEJR variants of official Nimble blocks, built for this book. Prototypes: rules inspection and
// arithmetic only, not playtested. Not SEB-trimmed, because a prototype carries its full rules.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "City of Arches",
    tier: "Elite",
    cost: 10,
    role: "Brute",
    level: 8,
    name: "Rotbound Giant",
    variantOf: "the GM Guide's Giant Zombie",
    prototype: true,
    core: "A giant that died on the Cliffs of the Dead and was never told to lie down. It grabs two at a time and decides later.",
    description: "Twice a man's height, grey-green and swollen, grave-cloth rotted into its skin. " +
      "One hand holds a lantern-post it tore from the road, and it does not look at what it holds.",

    stats: { hp: 100, armor: "None", speed: "6", dc: 13, stage: "13+" },

    actions: [
      A("Decaying swipe", "1 Action, ×2, Reach 2", "1d4+10", "On damage, Prone, or Knockback 2."),
      A("Rotten smash", "2 Actions, replaces its attacks, Reach 2", "—",
        "Seizes up to two creatures or objects within Reach: STR save DC 14 or Grappled (escape DC 14). It holds them until its next turn."),
      A("Slam", "Free, start of its next turn, replaces its attacks", "4d8+8",
        "Smashes one held creature down, Prone. If it holds two, they are knocked together instead: 3d8+8 each and both Dazed. A held object is hurled at a target within 6: DEX save DC 13 for half."),
      P("Wrench free", "20 or more damage from one attack makes it drop one held creature, chosen by the attacker."),
      P("Rises again", "Once. At 0 HP it lies still. At the start of the second round after, it rises with 30 HP, unless fire or radiant damage dealt the killing blow, or a hero spends an action to burn or bless the body."),
    ],

    tactics: "Takes the two biggest threats, holds them while the others scramble, then smashes them together. Finish it with fire or a blessing, or it gets up.",
    sources: "Draw Steel Monsters v1, Giant Zombie (p.266): Rotten Smash, Knocking Heads and conditional revival, from the review handoff. The Draw Steel book was not available when this was written, so the numbers and the delay are this book's own. Base block: the GM Guide's Giant Zombie, level 8.",

    designNote:
      "The slam waits a turn, and that is the point: two heroes are held, everyone sees the smash coming, " +
      "and the party spends a round on rescue, wrenching or killing it. Cost 10: level 8, plus 30 HP of revival. " +
      "The revival is a finishing-blow problem, not a fire weakness. Fire or a blessing ends it for good. " +
      "Unresolved: the delay and the 30 HP are untested. Best at 3-4 heroes of level 4 or higher; against fewer " +
      "it holds one and the Slam is 4d8+8.",

    traits: [
      "A lantern-post for a club, still lit.",
      "Grave-cloth sewn into its skin with fishing line.",
      "It sets what it holds down gently, then picks them up again.",
      "A cairn of stones trails behind it, dragged by a rope.",
      "Its jaw is wired shut. The wire is new.",
      "The names of the men who raised it are tattooed on its knuckles."
    ],
    encounters: [
      "It stands in the road with a cart in each hand, waiting for someone to ask it to put them down.",
      "Mourners flee a funeral procession. A coffin lid is on the ground, and the pall-bearer is in its fist.",
      "A necromancer's apprentice is frozen under its shadow, begging for the word to stop it.",
      "It walks toward the city gate carrying a priest who is calmly reciting the burial rites."
    ],
    lairs: [
      "A barrow mound torn open from inside, the door lying twenty paces away.",
      "A crypt hall with room for exactly one giant, the shelves around it smashed.",
      "A ferry landing, a dozen oars in a row, each one snapped in half.",
      "A quarry of unmarked graves, one trench dug deep enough to stand in."
    ],
    rumours: [
      { true: true, text: "Fire or a blessing on the body keeps it down. Nothing else does." },
      { true: true, text: "It lets go if it is hurt hard. One big hit frees whoever it holds." },
      { true: false, text: "It rises again every time you kill it." },
      { true: false, text: "It cannot hurt the dead, so skeletons are safe." }
    ],
    gigFit: {
      verb: "Stop / Bury",
      butPlus: "Monster result on an arch to the Cliffs of the Dead, or any world of ruins. A set-piece fight for a party that can split into rescuers and finishers.",
      patronHook: "A Temple priest has a funeral booked at the barrow in two days, and the guest of honor is already walking.",
      cityName: "\"Standing dead\": Cliffs of the Dead mourners' word for the ones that did not stay."
    }
  },
];
