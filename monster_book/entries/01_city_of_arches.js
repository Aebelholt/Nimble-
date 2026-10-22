// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "City of Arches",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Doppelganger Sneak",
    seb: true,
    core: "Vynan's replacement agents, loose in the city. It borrows a face and knifes whoever doubts it.",
    description: "A grey, hairless figure, its face smooth as a thumb until it decides to be someone. " +
      "The fingernails always grow back wrong, so it keeps its hands in its sleeves.",

    stats: { hp: 41, armor: "None", speed: "6", dc: 12, stage: "1-6" },

    actions: [
      A("Wear a face", "1 Action", "", "Copies a humanoid it saw this scene. Spotting it takes Examination DC 12."),
      A("Knife", "1 Action, ×2", "1d8+2", "+1d6 with advantage. Always advantaged against someone who doesn't know what it is."),
      A("Swap", "Reaction, 1/round", "", "When a melee attack targets it beside a bystander: swaps places and takes their face. The attack hits the bystander."),
    ],

    tactics: "Would rather not fight. Strikes first, at the hero who doubts it most. Bloodied, it walks into a crowd as someone else.",
    sources: "Monster Vault: 4e MM, Lv 3 Skirmisher. Feint folded into Knife (4e); targets the social threat (Ammann). Vynan origin is canon.",

    designNote:
      "Its armor is the crowd. Nothing in an empty alley, a nightmare at the festival. Give the " +
      "party a tell from Traits and let Examination find it.",

    traits: [
      "Every face it wears smells faintly of lamp oil.",
      "It blinks too rarely. Once noticed, impossible to stop counting.",
      "It moves its first victim's ring to whatever finger the new face would use.",
      "It hums a Vynan work song when it thinks it's alone.",
      "Its copies are a few years too young, learned from an old portrait.",
      "It refuses one face, a halfling woman's, and flinches when it sees her."
    ],
    encounters: [
      "The patron arrives early, friendly, and too pleased. The real one is twenty minutes behind.",
      "A Golden Knight asks for papers. Two streets back, the same Knight lies in a doorway in his smallclothes.",
      "A hero sees themself across the square, buying a pie. It waves, wearing their door key.",
      "An Archkeeper is processing a new arrival. The Archkeeper is the sneak, taking notes."
    ],
    lairs: [
      "An attic papered with charcoal portraits and notes: 'limps left', 'never in before noon'. One is a hero.",
      "A bath cubicle locked a week, six pressed sets of clothes folded inside, each a different size.",
      "An empty crypt niche on the Cliffs, its nameplate chiselled off.",
      "A dressing room mirror turned to the wall. On the back, a list of names, all crossed out but two."
    ],
    rumours: [
      { true: true, text: "It copies a face, not a memory. Ask what only the real one would know." },
      { true: true, text: "Cornered, it runs for the thickest crowd. Clear the street." },
      { true: false, text: "Silver burns them. Press a coin to someone's skin and a fake will scream." },
      { true: false, text: "They only copy the dead. If your friend is alive, they're real." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Stages 1-6, best at the festival or the Theater. Twist: whoever the party is escorting was replaced before the episode.",
      patronHook: "Roselyn Zeshe wants to know who sat in on a Council audit who was not on the list.",
      cityName: "\"Borrowers\": they borrow a face and return the body."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Artillery",
    level: 5,
    name: "Flameskull",
    seb: true,
    core: "A tomb-wizard who kept the job after death. It burns from above and is back in an hour.",
    description: "A skull wreathed in green fire, jaw clicking as it drifts. Old candle wax still " +
      "drips from its eye sockets.",

    stats: { hp: 49, armor: "Medium", speed: "Fly 8 (hover)", dc: 13, stage: "4, 13+" },

    actions: [
      A("Fire ray", "1 Action, ×2, Range 12", "1d10+5", "Fire, Smoldering. Once per encounter, spend both rays on a 2-space fireball, 3d6+4, DEX save for half."),
      A("Rise", "Reaction, 1/round", "", "When approached, flies 4 spaces up or back. Useless under a ceiling below 3."),
      A("Undying", "Passive", "", "Heals 5 each turn unless hit by radiant. Re-forms in an hour unless sealed in holy water or lead."),
    ],

    tactics: "Keeps its post and has no fear. Burns Shepherds and Mages first. Never breaks off.",
    sources: "Monster Vault: 4e MM, Lv 8 Artillery. Regeneration (4e); obedience and target choice (Ammann).",

    designNote:
      "Terrain decides it: a high vault makes it miserable, a low crypt makes it a skull in a box. " +
      "Killing it ends the fight, not the job: that is a Bury gig.",

    traits: [
      "Its fire is old-copper green and smells of hot pennies.",
      "It recites a list in a dead tongue. One name repeats.",
      "A gold tooth, the only thing in the room worth stealing.",
      "Its flames lean toward running water like a compass needle.",
      "A crack across the crown, packed with wax. Someone tried to mend it.",
      "It laughs when hit, and never stops counting the heroes."
    ],
    encounters: [
      "The seal breaks and the doorway fills with fire. It has waited two hundred years for this.",
      "A Black Hand crew sells it caged as a forge light. The cage is cracked; the buyer is a hero's neighbour.",
      "It drifts down a stairwell, dousing and relighting, firing between the turns.",
      "Two of them argue in a dead tongue over a sarcophagus. One is losing."
    ],
    lairs: [
      "A vault six spaces high, scorch marks spiralling up to one niche.",
      "A library of ash with one untouched shelf: the spellbook it died reading.",
      "A crypt where every other skull has been turned to face the wall.",
      "A lead-lined box on the floor, its lid torn off from inside."
    ],
    rumours: [
      { true: true, text: "Get it under a low roof. It hates having nowhere to rise." },
      { true: true, text: "Holy water or lead, or it's back by supper." },
      { true: false, text: "A bucket of water puts it out for good." },
      { true: false, text: "It can't cross its tomb's threshold. Step outside and you're safe." }
    ],
    gigFit: {
      verb: "Bury / Steal",
      butPlus: "Stage 4 and Threska or Arkus arches. Put it in the room with the goal.",
      patronHook: "The University wants one intact; the Archkeepers want the same one at rest. Both pay. Only one can be satisfied.",
      cityName: "\"Tomb-candles\": grave diggers won't work a crypt with green light under the door."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Lurker",
    level: 4,
    name: "Cavern Choker",
    seb: true,
    core: "The drains grew a hand. It takes whoever is talking, lifts them out of reach, and hides behind them.",
    description: "A knot of boneless grey limbs the size of a child, with spiny hands on arms " +
      "twice its length. It breathes through its skin and makes no sound.",

    stats: { hp: 37, armor: "Medium", speed: "4 (climb 6)", dc: 12, stage: "7-10" },

    actions: [
      A("Throat grab", "1 Action, Reach 3", "1d8+5", "Grappled (escape DC 12 at disadvantage), Silenced, hoisted 2 spaces. Escaping drops them, Prone."),
      A("Squeeze", "1 Action, held target", "1d6+8", "Can't miss."),
      A("Body shield", "Reaction, 1/round, while it holds someone", "", "An attack on the choker hits its catch instead, who may Defend."),
    ],

    tactics: "Takes the caster or the singer, then whoever comes to help. Bloodied, it drops its catch and leaves by any grate within 10.",
    sources: "Monster Vault: 4e MM, Lv 4 Lurker. Body Shield and the escape penalty (4e).",

    designNote:
      "The crawler drags you somewhere; the choker lifts you out of the fight. The hero still " +
      "acts but can't cast, and every rescue risks hitting them. A room with no openings kills it.",

    traits: [
      "Sewer moss on its skin, matched to the brick.",
      "A Golden Knight's signet worn as a bracelet.",
      "Old rope burns on its arms. Someone caught it once.",
      "It clicks two fingers twice before every grab.",
      "It hoards keys. None open anything nearby.",
      "Old and weak in the grip, but its reach is a space longer."
    ],
    encounters: [
      "A courier's satchel swings from a ceiling grate. The message inside is the party's next job.",
      "Every few spaces a drain gapes overhead. One of them is breathing.",
      "A fence's strongbox has a choker in the pipe above it. Open it without the signal and you're taken.",
      "A Kartan mage hangs Silenced in a shaft, alive. It is waiting to see who comes."
    ],
    lairs: [
      "A five-pipe junction littered with boots and no bones. It eats somewhere else.",
      "A dead cistern pump, its iron casing holed for windows.",
      "A crawlspace between tenement floors. The tenants above are missing pets.",
      "A walled-up alcove, bricks pushed out from inside and stacked neatly."
    ],
    rumours: [
      { true: true, text: "It goes for whoever talks. Keep your mouth shut in the drains." },
      { true: true, text: "Stuff the pipes and it has to fight on your ground." },
      { true: false, text: "Go limp and it lets go." },
      { true: false, text: "They hunt in pairs, one to grab and one to bite." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Stages 7-10, when the party is escorting someone. It takes the escort first.",
      patronHook: "A Black Hand fixer needs a package walked through the drains under a Council toll post. Three couriers have vanished on that route.",
      cityName: "\"Drainhands\": every Lower Reaches child is told never to put a hand in a drain."
    }
  },
];
