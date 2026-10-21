// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Korax",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Meenlock Stalker",
    seb: true,
    core: "Korax's long twilight bred something that hates light. It takes victims to the burrow and remakes them.",
    description: "A child-sized thing, insect-headed and moss-furred, with claws like split reeds. " +
      "It waits at the edge of the torchlight and whispers that you are alone.",

    stats: { hp: 30, armor: "None", speed: "6", dc: 12, stage: "13+" },

    actions: [
      A("Claws", "1 Action, ×2", "1d6+4", "STR save or Dazed next turn; already Dazed, Slowed. Two adjacent meenlocks drag a Dazed hero 3 spaces."),
      A("Horrid link", "Free, 1/round, Range 10", "", "Links one hero until its next turn: Frightened, and 1d6+2 psychic whenever the meenlock is hurt."),
      A("Shadow step", "1 Action", "", "Teleports 8 spaces, dark to dark, never into bright light. Again only after it is hit or a round passes."),
    ],

    tactics: "Links one hero, Dazes them, drags them toward the dark. Breaks off in bright light, then trails the party for days.",
    sources: "Monster Vault: 4e MM3, Lv 9 Controller. Dimension Step, Horrid Link, corruption (4e). Paralysis rebuilt as Dazed.",

    designNote:
      "Hurting it hurts your friend, so the party chooses whether to swing. Light is the answer: " +
      "keep torches lit and a horror hunt becomes a fair fight. Victims turn unless the meenlock that marked them burns.",

    traits: [
      "Red clay in its fur. Fresh up from the Red Deeps.",
      "It whispers in a hero's mother's voice. Only that hero hears.",
      "It carries a stone knife it never uses.",
      "Bigger and older. The others defer to it.",
      "Its eyes catch the red star: two crimson pinpricks.",
      "It hums a Kor lullaby with one wrong note."
    ],
    encounters: [
      "The party's lights go out one by one, snuffed from the dark.",
      "A Kor hunter's brother came back at dawn, smiling, and won't stand in light.",
      "Two meenlocks drag a shouting orc of Veles toward a burrow.",
      "Every hero dreams the same voice: your friends will leave you."
    ],
    lairs: [
      "Child-sized burrows in red clay. Deep inside, someone is slowly growing fur.",
      "A mammoth's ribcage packed with moss and stolen blankets.",
      "A half-flooded ruin of the Sundered Vaults, tiny handprints on every wall.",
      "A hollow where every lantern ever brought has been smashed and set in a ring."
    ],
    rumours: [
      { true: true, text: "Keep a fire burning. They can't step into bright light." },
      { true: true, text: "One alone only whispers. It takes two to drag you off." },
      { true: false, text: "If one touches you, you're already turning, and nothing brings you back." },
      { true: false, text: "They fear iron. Wear a horseshoe." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Korax arches, at Dusk or Dark results: the light is going and they were waiting.",
      patronHook: "A Temple novice came back from Korax silent and furred at the wrists. The priest wants the burrow found first.",
      cityName: "\"Lamp-thieves\": Arch of Kings porters' name, after arrivals who begged for oil."
    }
  },

  {
    world: "Korax",
    tier: "Standard",
    role: "Skirmisher",
    level: 2,
    name: "Dark Creeper",
    seb: true,
    core: "The Red Deeps' thieves. They put out your light, take what they can, and sell it in Kor.",
    description: "A small figure in layers of filthy black rag, nothing showing but grey fingers " +
      "and a stolen blade. It smells of smoke and cave water.",

    stats: { hp: 24, armor: "None", speed: "6", dc: 11, stage: "7-8, 13+" },

    actions: [
      A("Stolen blade", "1 Action", "1d8+3", "Advantage if unseen. Swap damage for an unsecured item, then move 4 without provoking."),
      A("Snuff", "1 Action, 1/encounter", "", "Every flame within 6 goes out. Heroes without darkvision are Blind until they relight one."),
      A("Flare", "Passive, on death", "", "Burns away in a flash: DEX save or Blind a turn within 2. Its loot drops."),
    ],

    tactics: "Wants loot, not blood. Darkness, steal, gone. Breaks off with anything worth fencing, or when Bloodied.",
    sources: "Monster Vault: 4e MM, Lv 4 Skirmisher. Dark Step and Killing Dark (4e).",

    designNote:
      "Success is measured in what the party still owns at the end. Run three to five, fast and " +
      "annoying, with one bigger creeper leading.",

    traits: [
      "Rags stitched from stolen cloaks. One bears a Council badge.",
      "It giggles when it steals and can't stop.",
      "Three left boots, one tied over the other two.",
      "Its blade is a broken arch key, sharpened.",
      "A candle stub behind its ear, lit only to talk.",
      "A bad cough and an almost friendly manner."
    ],
    encounters: [
      "Every light goes out at once. When they relight, a pack is gone.",
      "A one-lamp market selling stolen goods, including the party's.",
      "A Kor hunter's totem is missing, and he thinks the party took it.",
      "A creeper is working the crowd at the Arena of Blood."
    ],
    lairs: [
      "A cave hung with stolen goods: belts, a saddle, a Kor war-drum, a stranger's portrait.",
      "A cold pit holding a half-burned map of the Sundered Vaults.",
      "A crawlspace behind Adel's Curio Shop. Adel knows, and takes a cut.",
      "A burrow around one bright lamp, guarded like a shrine."
    ],
    rumours: [
      { true: true, text: "They burn up in a flash when they die. Close your eyes." },
      { true: true, text: "Offer lamp oil and they'll tell you anything about the Red Deeps." },
      { true: false, text: "Their blades are poisoned. One cut costs an arm." },
      { true: false, text: "They see in the dark like cats, so fighting without light is hopeless." }
    ],
    gigFit: {
      verb: "Steal / Find",
      butPlus: "Korax arches, and Stages 7-8 for one that came through. The reason the key or map goes missing mid-episode.",
      patronHook: "A Black Hand fixer wants to buy the creepers' Red Deeps route. They would rather steal his purse.",
      cityName: "\"Rag-pickers\": also an insult for anyone who fences drain-finds."
    }
  },

  {
    world: "Korax",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Neogi Hatchling Swarm",
    seb: true,
    core: "Neogi slavers breed their young in Korax's dead giants. The hatchlings eat, and herd prey for their parents.",
    description: "A tide of spider-legged eels, each the size of a hand, climbing over one another " +
      "and shouting orders nobody follows.",

    stats: { hp: 40, armor: "None", speed: "6 (climb 6)", dc: 12, stage: "13+" },

    actions: [
      A("Bites", "1 Action", "2d6+5", "One creature in or beside its space. Half damage once Bloodied."),
      A("Swarm", "Passive", "", "Its space is Difficult Terrain; starting a turn in or beside it costs 1d6. Single targets half, AoE double."),
      A("Mind leash", "1 Action, 1/round, adult neogi within 12", "", "WIL save or the swarm chooses where the target moves next turn. Never their actions."),
    ],

    tactics: "Pours over the nearest body. With an adult watching, it herds prey instead. Scatters when the adult falls.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 1. Swarm aura (4e MM2 Neogi Spawn Swarm). Death scream cut.",

    designNote:
      "The leash needs an adult nearby, so the adult is the real target. When it works, it walks " +
      "heroes into the pit while they keep swinging. AoE is the answer.",

    traits: [
      "An adult's dye marks on the swarm. It belongs to someone.",
      "A few have learned one word of Common: 'mine'.",
      "Half the swarm is dead, dragged by the other half.",
      "They fight each other whenever no hero is closest.",
      "Tiny collars of braided hair, the colour of a hero's.",
      "A slime trail that hardens into a glassy path."
    ],
    encounters: [
      "A clutch hatches in the only shelter from the storm, a dead beast's carcass.",
      "An adult neogi rides a captured hulk, its hatchlings herding prey ahead.",
      "Kor hunters walled a nest in. They want it burned. The wall is cracking.",
      "A leashed orc of Veles stumbles at the party, apologising with every swing."
    ],
    lairs: [
      "Egg sacs in a webbed cave. Several are empty and still warm.",
      "An old slave-pen with collars on the walls, one sized for a dragon.",
      "A slick fissure scratched with tiny marks like a ledger.",
      "A shrine of stolen weapons, fed with bones."
    ],
    rumours: [
      { true: true, text: "Fire or oil. A blade does nothing against the tide." },
      { true: true, text: "They turn your feet, not your hands. Keep fighting while you walk." },
      { true: false, text: "They lay eggs in your ears. Stuff them with wax." },
      { true: false, text: "Kill the biggest and the rest scatter." }
    ],
    gigFit: {
      verb: "Stop / Bury",
      butPlus: "Korax arches, in caves and dead forests. Add a hazard for the leash to walk heroes into.",
      patronHook: "The University has one hatchling in a jar and wants a live clutch. The Archkeepers call this a terrible idea.",
      cityName: "\"Leash-eels\": porters' name for the first crate that came through, before the Knights burned it."
    }
  },
];
