// Adopted from the City of Arches setting book (Golden Knights; arch guardians at gates throughout
// Chapter 9 and the Deadlands). Stats follow the GM Guide Monster Builder table by level. SEB.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "City of Arches",
    tier: "Minion / Standard",
    role: "Defender",
    name: "Golden Knights",
    seb: true,
    core: "The Golden Order's sword arm: gilt armour, writs and a whistle. They arrest first, and always call for more.",
    description: "Gilt plate catching the sun on patrol, tabards with the queen's sun, a manacle " +
      "ring at every belt.",

    roster: [
      { name: "Watch Guard", level: "Min", hp: "Minion",
        actions: [A("Halt!", "1 Action", "1d8", "A spear jab, shouted. Follows the GM Guide minion rules.")] },
      { name: "Golden Knight", level: 3, hp: 27, armor: "Medium",
        actions: [
          A("Halberd", "1 Action, ×2, Reach 2", "1d6+4", ""),
          P("Formation", "Armor one step heavier for each adjacent Knight, to Heavy."),
        ] },
      { name: "Knight Sergeant", level: 4, hp: 37, armor: "Medium",
        actions: [
          A("Longsword", "1 Action, ×2", "1d8+4", ""),
          A("Shackle", "1 Action, adjacent Prone or Grappled target", "—", "Restrained in manacles. Escape DC 12, or the key."),
          A("Whistle", "Free, 1/encounter", "—", "In 1d4 rounds, 1d4 Watch Guards arrive."),
        ] },
      { name: "Griffon Knight", level: 5, hp: 49, armor: "Medium", speed: "Fly 12",
        actions: [
          A("Lance charge", "1 Action, after 4+ spaces in a line", "2d8+6", "Prone."),
          A("Griffon talons", "Free, 1/round", "1d8+5", "Grappled, escape DC 12."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Want order, and credit for it. Shackle the downed, whistle early, kill only when a writ says so or a Knight falls.",
    sources: "Adopted from the setting: Golden Knights (Gazetteer, Citadel; Doorish Hills patrols; griffon riders). Formation from the GM Guide ability table.",

    designNote:
      "A fight with the Knights is a clock: the whistle brings more. Surrender gets a cell, not a " +
      "grave, which makes them the city's soft fail state.",

    traits: [
      "The gilt is flaking. Under it, plain city steel.",
      "A writ tucked in the gauntlet, already signed, name left blank.",
      "A dwarf veteran who served under Joslyn Halfcloak and says so.",
      "A new recruit whose ring has an oath scratched inside it.",
      "Knows a hero's face from an old wanted notice, and isn't sure.",
      "Tired, underpaid, and willing to look the other way, once."
    ],
    encounters: [
      "Knights demand papers. The papers are fine; the Knight wants a bribe.",
      "Knights in ill-fitting tabards demand tribute. They are bandits; the real Knights are tied up nearby.",
      "A patrol is losing a fight and asks the party for help, and for silence after.",
      "A Sergeant conscripts the party on the spot: something just came through an arch."
    ],
    lairs: [
      "The Citadel's three towers behind iron doors and the gold statue of Lord Salvana.",
      "A road outpost in the Doorish Hills: a stable, a cell, an evidence shelf with gaps.",
      "A griffon aerie on a Citadel tower, a rider polishing a lance.",
      "A watch-house at the Black Hand line, where the truce is kept with coin."
    ],
    rumours: [
      { true: true, text: "Surrender and you get a cell, not a grave." },
      { true: true, text: "Once the whistle goes, more are minutes away. Leave before then." },
      { true: false, text: "The Knights and the Black Hand are at war." },
      { true: false, text: "A Knight can't arrest you inside a temple." }
    ],
    gigFit: {
      verb: "Escort / Prove",
      butPlus: "Faction result 'the Golden Knights' at Stages 1-8, as patron muscle, obstacle, or the arrest after a loud job.",
      patronHook: "Commander Joslyn Halfcloak hires adventurers for what the Knights can't be seen doing.",
      cityName: "\"Gilt\": Lower Reaches slang. \"Gilt on the corner\" means take the long way home."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Defender",
    name: "Arch Guardians",
    seb: true,
    shared: [
      P("Keyed", "Ignores anyone carrying its arch's key, unless they attack it."),
      P("Bound", "Never moves more than 12 spaces from its arch."),
    ],
    core: "Whoever built the arches left them watched. A guardian wakes when its arch opens without the right key.",
    description: "Bone, clay, stitched flesh or carved stone, standing at a gate so long that dust " +
      "has drifted against its feet.",

    roster: [
      { name: "Skeletal Tomb Guardian", level: 2, hp: 31,
        actions: [
          A("Glaive", "1 Action, Reach 2", "1d4+7", ""),
          A("Bar the way", "Reaction, enemy moves within 2", "—", "Glaive them first."),
          P("Just bones!", "Resistant to piercing hits (not crits)."),
        ] },
      { name: "Flesh Guardian", level: 4, hp: 52,
        actions: [
          A("Fists", "1 Action, ×2", "1d8+4", "If both hit: Grappled and dragged 2 toward the arch."),
          P("Stitched", "Lightning heals it. Fire makes it lose its next Free action."),
        ] },
      { name: "Clay Guardian", level: 5, hp: 49, armor: "Medium",
        actions: [
          A("Slam", "1 Action, ×2", "1d8+6", "Knockback 2, away from the arch."),
          A("Rush", "Free, 1/encounter", "—", "Moves its full Speed and Slams once."),
          P("Kiln-fired", "Fire damage heals it."),
        ] },
      { name: "Stone Guardian", level: 8, hp: 60, armor: "Heavy",
        actions: [
          A("Fist", "1 Action, ×2", "2d6+8", ""),
          A("Slowing glare", "1 Action, 1/round, Range 6", "—", "WIL save DC 13 or Slowed until their next turn ends."),
          P("Spell-proof", "Half damage from spells."),
        ] },
    ],
    stats: { stage: "Any arch" },

    tactics: "Holds the threshold. Strikes whoever crosses without the key, pushes them back, never follows past 12 spaces.",
    sources: "Adopted from the setting: clay guardians at arches (Deathreach seed, Deadlands), skeletal tomb guardians (Threska seed), flesh and stone guardians. Keyed and Bound are this book's.",

    designNote:
      "Keys are Sejr's politics, and guardians enforce them. Steal the key and the fight never " +
      "happens. Fight the guardian and the gate still won't open.",

    traits: [
      "Dust drifted against its feet, undisturbed for centuries.",
      "The arch's sigil, carved into its chest, glows when a key comes near.",
      "One arm replaced, badly, by a later builder.",
      "It faces the arch, not the room. It guards what comes out.",
      "Old offerings at its feet: coins, flowers, a child's drawing.",
      "It knows one word, the arch's name, and says it when it wakes."
    ],
    encounters: [
      "The party has the right key. The guardian lets them pass, and stares at their companion who doesn't.",
      "Two clay guardians walk by carrying a relic to a master dead for centuries.",
      "A rival crew is pinned at a gate by a guardian, their forged key smoking.",
      "The arch opens from the far side. The guardian turns to face whatever is coming through."
    ],
    lairs: [
      "An arch of knotted rock under Sunken Revvia, a guardian at each foot.",
      "A tomb on the Cliffs of the Dead with a basalt arch and a skeletal guard.",
      "A Kartan vault where a stone guardian stands at a sealed arch, its key in a locked case.",
      "A Market Square arch with a guardian everyone mistakes for a statue."
    ],
    rumours: [
      { true: true, text: "It ignores whoever carries the key. Steal the key, not the fight." },
      { true: true, text: "It won't follow past twelve paces from its arch." },
      { true: false, text: "The Archkeepers built them, and can call them off." },
      { true: false, text: "Break the arch and the guardian falls." }
    ],
    gigFit: {
      verb: "Steal / Prove",
      butPlus: "Any arch episode, at the gate in or out. The opening fight of an Arch direction.",
      patronHook: "A guardian can tell a true key from a forged one. The University wants to know how.",
      cityName: "\"Doorstones\": arch porters' word. \"Ask the doorstone\" means test a key."
    }
  },
  {
    world: "City of Arches",
    tier: "Standard",
    role: "Defender",
    name: "The Steel Hands",
    seb: true,
    core: "Lady Kalya's hired knights. Her bodyguard Asher will die for her; the rest can be bought.",
    description: "Matched steel plate with the gilt sanded off, a merchant lady in the middle, and " +
      "a quiet woman with a longsword who never leaves her side.",

    roster: [
      { name: "Lady Kalya", level: 1, hp: 21,
        actions: [
          A("Paid in full", "Free, 1/round", "—", "A Steel Hand within 8 moves and attacks."),
          P("No fighter", "Never attacks. Asher Interposes for her whenever she can."),
        ] },
      { name: "Steel Hand", level: 3, hp: 27, armor: "Medium",
        actions: [
          A("Longsword", "1 Action, ×2", "1d8+3", ""),
          P("Mercenary", "Offered more than Kalya pays (Influence DC 12, and the coin), it walks away."),
        ] },
      { name: "Steel Hand Crossbow", level: 2, hp: 24, armor: "Medium",
        actions: [
          A("Heavy crossbow", "1 Action, Range 12", "2d6+3", ""),
          P("Mercenary", "Offered more than Kalya pays (Influence DC 12, and the coin), it walks away."),
        ] },
      { name: "Silent Asher", level: 5, hp: 64, armor: "Medium",
        actions: [
          A("Longsword", "1 Action, ×2", "1d10+5", "Advantage against anyone who struck Kalya this round."),
          A("Run through", "1 Action, 1/encounter", "2d10+10", "Against a Prone or Grappled target. Can't be Interposed."),
          P("Sworn", "Never breaks off while Kalya lives. Can't be bought."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Asher shadows Kalya, the Hands form a line, the crossbows shoot whoever talks. The Hands leave when the coin runs out.",
    sources: "Adopted from the setting: Lady Kalya, Silent Asher and the Steel Hands (Appendix A, Children of Ibraxus).",

    designNote:
      "A rival crew the party can dismantle without a fight: outbid the Hands and only Asher is " +
      "left. Kalya is a low-level villain with a deep purse and no sense of danger.",

    traits: [
      "Kalya wears a merchant lord's chain and a cult sigil under her collar.",
      "Asher hasn't spoken in years. She answers with her eyes.",
      "One Hand keeps a ledger of what Kalya owes him.",
      "The Hands' armour is Golden Knight surplus with the gilt sanded off.",
      "A crossbow Hand with a Black Hand debt mark on his wrist.",
      "Kalya tips every servant twice what they're owed, and remembers their names."
    ],
    encounters: [
      "Kalya buys the building the party is standing in, then asks them to leave.",
      "A merchant who crossed Kalya is found run through. The Knights suspect Asher and can't prove it.",
      "Two Hands approach the party off-duty and ask what the party would pay.",
      "Kalya hires the party, through a cut-out, to find a lost arch ritual."
    ],
    lairs: [
      "Kalya's counting-house, ledgers on every wall, a cult shrine behind the safe.",
      "A barracks above a stable where the Hands dice for watch shifts.",
      "A Lower Reaches chamber being cleared for a gateway, Hands on guard.",
      "Asher's room: a bed, a whetstone, and nothing else."
    ],
    rumours: [
      { true: true, text: "The Hands are hired. Pay them more and they walk." },
      { true: true, text: "Asher will die for Kalya. Don't try to buy her." },
      { true: false, text: "Kalya is a harmless merchant the cult uses for money." },
      { true: false, text: "Asher works for the Golden Knights, undercover." }
    ],
    gigFit: {
      verb: "Stop / Prove",
      butPlus: "Faction result 'the Children of Ibraxus' at Stages 1-8, or the NPC-room rival crew once per episode.",
      patronHook: "The Golden Knights want proof Asher did the murders. Roselyn Zeshe wants Kalya's ledgers.",
      cityName: "\"Kalya's hands\": merchants' warning about who just bought the building next door.",
      extra: [
        ["Rival clock (6)", "1 Kalya buys a building the party needs. 2 A merchant dies. 3 The Hands hire the party's contact. 4 A ritual is found. 5 The Choul gateway room is cleared. 6 The gate opens. Moved by choices, never But+ alone."],
        ["Campaign ladder", "Prove Asher's murders. Steal Kalya's ledgers. Stop the gateway. Buying off the Hands skips a fight at any rung."],
      ],
    },
  },
];
