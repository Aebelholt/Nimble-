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
      A("Rotten smash", "2 Actions, replaces its attacks, Reach 2", "2d6+6",
        "Up to two creatures or objects within Reach. STR save DC 14 or Grappled (escape DC 14), held until its next turn."),
      A("Slam", "Free, start of its next turn, replaces its attacks", "3d8+8",
        "Smashes one held creature down, Prone. If it holds two, they are knocked together instead: 2d8+8 each and both Dazed. A held object is hurled at a target within 6: DEX save DC 13 for half."),
      P("Wrench free", "20 or more damage from one attack makes it drop one held creature, chosen by the attacker."),
      P("Rises again", "Once. At 0 HP it lies still. At the start of the second round after, it rises with 30 HP, unless fire or radiant damage dealt the killing blow, or a hero spends an action to burn or bless the body."),
    ],

    tactics: "Takes the two biggest threats, holds them while the others scramble, then smashes them together. Finish it with fire or a blessing, or it gets up.",
    sources: "Draw Steel Monsters v1, Giant Zombie (p.266, level 4 Elite Brute, 140 Stamina): Rotten Smash grabs two on a strike, Knocking Heads (1 Malice) smashes them together, Endless Knight rises once at 50 Stamina unless fire or holy damage or a destroyed body. The delay, damage and numbers are this book's own. Base block: the GM Guide's Giant Zombie, level 8.",

    designNote:
      "The slam waits a turn, and that is the point: two heroes are held, everyone sees the smash coming, " +
      "and the party spends a round on rescue, wrenching or killing it. Cost 10: level 8, plus 30 HP of revival. The source smashes at once and rises at once at 36 percent; this version waits a turn and rises after two rounds at 30 percent. " +
      "The revival is a finishing-blow problem, not a fire weakness. Fire or a blessing ends it for good. " +
      "Unresolved: the delay and the 30 HP are untested. Best at 3-4 heroes of level 4 or higher; against fewer " +
      "it holds one and the Slam is 3d8+8.",

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

  {
    world: "City of Arches",
    tier: "Standard",
    cost: 3,
    role: "Controller",
    level: 2,
    name: "Kobold Artifex",
    variantOf: "the Core Kobold Trapper",
    prototype: true,
    core: "The kobold who builds the trap, picks the spot, and then drags you onto it with a hook on a chain.",
    description: "A kobold in a leather apron hung with hooks and cord, standing beside a rigged corner " +
      "with a lever in one hand and a chain-hook in the other.",

    stats: { hp: 28, armor: "None", speed: "6", dc: 11, stage: "7-10" },

    actions: [
      A("Chain hook", "1 Action, Range 6", "1d6+6", "Pulls the target up to 2 spaces toward it. If the pull ends on a rigged space, the mechanism fires at once and the save is at disadvantage."),
      A("Pull the cord", "Free, 1/round, Range 10", "—", "Fires one rigged mechanism, whoever is standing in it."),
      P("Rigging", "Three mechanisms are rigged before the fight, each with a visible cord. Net: 2-space radius, DEX save DC 11 or Restrained (escape DC 11). Hive cart: 2d6 to a 2-space radius, DEX save DC 11 for half. Oil and spark: 2d6 fire to a 2-space radius, Smoldering. Each fires once. An action and DEX DC 11, or any hit on the cord, disarms one. Any creature beside a cord may fire it instead, as a Free action."),
      P("Shield wall", "Beside another kobold with this trait, both have cover."),
    ],

    tactics: "Stays behind the rig and drags the biggest hero onto it. Two Artifex fire the traps in turn. A Denwarden holds the front. Flee when the rig is spent.",
    sources: "Draw Steel Monsters v1, Kobold Artifex (p.192): Chain Hook, Activate Trap, Shield? Shield!. Built on the Core Kobold Trapper (GM Guide). Numbers are the Builder row for level 2; the rigging is this book's.",

    designNote:
      "The traps are terrain the party can read, cut, or turn on the kobolds. The hook is a forced move, never a lost turn. " +
      "Cost 3: level 2, plus about 30 damage of one-use rigging. Unresolved: two Artifex fire six mechanisms in a fight; " +
      "cap at three in total if it drags. Not playtested.",

    traits: [
      "Every cord is dyed a different colour, and the kobold knows each by heart.",
      "A chain-hook carved with the names of everything it has caught.",
      "Its apron is full of bee stings, healed over.",
      "It hums while it works, and stops when you walk in.",
      "Spare cord looped around its neck like a scarf.",
      "One cord is white and is not connected to anything. It is for show."
    ],
    encounters: [
      "The corridor floor is too clean. A kobold waves from the far end, holding a lever.",
      "A tunnel crew argues over which cord does what. One of them is a hero's snare, copied.",
      "Kobolds have rigged a market stall. The crowd is the audience.",
      "A single Artifex is trapped in its own net and offers to disarm the rest for a fee."
    ],
    lairs: [
      "A tunnel of three trapped chambers, a lever room above them.",
      "A workshop of half-built traps, one for each of the party's likely routes.",
      "A pit lined with old hooks, a scrap of heroic cloak on each.",
      "A kobold shrine to a trap that works every time. It has been oiled."
    ],
    rumours: [
      { true: true, text: "Cut the cord and the trap is dead. Pull it first and it is yours." },
      { true: true, text: "The hook pulls you toward the kobold. Stand on solid ground." },
      { true: false, text: "The cords are magic. Only a mage can cut them." },
      { true: false, text: "They only trap one corridor. Go around." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster result at Stages 7-10, in Lower Reaches tunnels. Sits behind a Denwarden front line.",
      patronHook: "A Black Hand fixer's courier route has been trapped from end to end. He wants the Artifex found, not hurt.",
      cityName: "\"Cord-men\": Lower Reaches word for anyone who works behind a lever."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Support",
    level: 2,
    name: "Goblin Drum-Band",
    variantOf: "the Core Goblins",
    prototype: true,
    core: "A goblin with a drum, and a mob that dives in on every hit.",
    description: "A goblin in a patched coat beating a skin drum with two bones, backed by a mob " +
      "of grinning minions who watch only for the beat.",

    stats: { hp: 27, armor: "None", speed: "6", dc: 11, stage: "7-10" },

    actions: [
      A("Rat-a-tat", "1 Action, Range 6", "1d6+6", "Sonic. Pushes the target 2."),
      A("Pester", "Reaction, 1/round, an ally damages a creature within 6", "—", "A Goblin Minion adjacent to that creature attacks it. A Pester attack never triggers another Pester."),
      A("Drumroll", "Free, 1/encounter", "—", "Each minion that Pestered this round may Pester once more this round."),
    ],

    tactics: "Hangs back behind the minions and beats time. Every hit on a hero brings a stab. Flees if the drum is silenced.",
    sources: "Draw Steel Monsters v1, Radenwight Piper (p.227): Ready Rodent and Vivace!, with the follow-up chain capped. Built on the Core Goblins (GM Guide). Numbers are the Builder row for level 2.",

    designNote:
      "The drum turns every goblin hit into two. It stops at one Pester a round, two with Drumroll, so it adds " +
      "a stab or two a round and cannot chain. Kill the drummer, or keep the minions off the target. Cost 2, the " +
      "minions extra. Unresolved: it is strong with many minions. Cap at 3 minions per drummer. Not playtested.",

    traits: [
      "The drum is a bucket with a skin stretched over it.",
      "The minions hum the tune and miss the beat.",
      "The drummer can't read. The tune is copied from a street musician.",
      "A bone drumstick, polished by use, with a name carved on it.",
      "The minions dance when the drummer hits an enemy.",
      "The drum has a hole in it where a heroic arrow went through."
    ],
    encounters: [
      "A beat from the next room. Goblins are coming in time.",
      "A street musician is playing for a goblin crowd. The drum is not his.",
      "A mob of goblins is halted by a drummer who has fallen asleep.",
      "The party's thief has joined the band, for the cut."
    ],
    lairs: [
      "A cistern echo-chamber with a drum on a plinth.",
      "A tunnel junction where the beat bounces to every minion.",
      "A pawn shop back room stacked with stolen instruments.",
      "A goblin hall with a stage, and no audience."
    ],
    rumours: [
      { true: true, text: "Kill the drummer and the minions stop diving in." },
      { true: true, text: "The beat only works near a hit. Keep your wounded away from the minions." },
      { true: false, text: "The drum is magic. Break it and they all die." },
      { true: false, text: "Goblins can't be taken by surprise while the drum plays." }
    ],
    gigFit: {
      verb: "Stop / Steal",
      butPlus: "Monster result at Stages 7-10, in cisterns and tunnels. Pairs with a Goblin Taskmaster.",
      patronHook: "A merchant's courier was stopped by a drumbeat. The cargo is a set of silver bells.",
      cityName: "\"Beaters\": Lower Reaches word for a goblin crew that hits as one."
    }
  },
];
