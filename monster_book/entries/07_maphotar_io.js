// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Eye of Fear and Flame",
    seb: true,
    core: "A watcher from Klamas's fortress, still keeping watch for a master who left. It frightens first and burns second.",
    description: "A floating eye the size of a shield, the iris ringed in fire, the lids iron " +
      "plates bolted shut and pried open again.",

    stats: { hp: 60, armor: "Medium", speed: "Fly 4 (hover)", dc: 13, stage: "13+" },

    actions: [
      A("Fear ray", "1 Action, Range 12", "", "WIL save or Frightened until the end of the target's next turn. Already Frightened, Dazed."),
      A("Flame ray", "1 Action, Range 12", "2d8+6", "Fire, Smoldering. Advantage against a Frightened target."),
      A("Shut", "Reaction, 1/round, when targeted", "", "Iron lids slam: the attack is disadvantaged, and no rays until its next turn."),
    ],

    tactics: "Hangs back behind its servants. Frightens whoever is in melee, burns the Frightened, and fixes on whoever hurt it last.",
    sources: "Monster Vault: Conflux Creatures: NPCs & Undead, CR 9 (tactics note). Fear-paralysis rebuilt as Dazed.",

    designNote:
      "Its grudge is predictable, so the party can pass its attention around like a hot coal. Shut " +
      "is a choice: hit it and let it hide, or hold off and let it burn.",

    traits: [
      "Its iris is the colour of a forge at full heat.",
      "Rivets popped from one lid. It squints.",
      "A thin trail of black smoke from the Grenneth.",
      "A crack across the pupil. Its rays sometimes misfire.",
      "It hisses Klamas's name in steam.",
      "Triset scavengers have painted a prayer on its lids."
    ],
    encounters: [
      "It hovers over a wreck, watching a scavenger crew who haven't seen it.",
      "Three eyes in a hall, each turning to follow a different hero.",
      "A Black Hand fence auctions one in a lead box. The lid is loose.",
      "Iverundians have one chained to power a forge. It is trying to look at them."
    ],
    lairs: [
      "An empty iron socket in an Agulon watchtower wall.",
      "An Io forge with an eye fused into the furnace door.",
      "A crater of scorched glass in the bone-sand, one iron lid half buried.",
      "A Triset shrine where eyes are caged and fed with prayer."
    ],
    rumours: [
      { true: true, text: "It watches whoever hurt it last. Take turns." },
      { true: true, text: "When it shuts, it's blind. Close in then." },
      { true: false, text: "Its stare turns you to ash." },
      { true: false, text: "Say Klamas's name and it obeys." }
    ],
    gigFit: {
      verb: "Steal / Stop",
      butPlus: "Maphotar or Io arches, near ruins or watchtowers.",
      patronHook: "A Kartan mage thinks an eye's last sight is Klamas's true name. She wants one alive.",
      cityName: "\"Klamas's lamps\": Triset arrivals spit after saying it."
    }
  },

  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Inferno Spider Moltling",
    seb: true,
    core: "Io's forges never cool, and something learned to live in the heat. It webs prey in burning silk.",
    description: "A spider the size of a hound, carapace cooling from orange to black, light " +
      "leaking at every joint. Its webs glow like forge wire.",

    stats: { hp: 27, armor: "Medium", speed: "6 (climb 6)", dc: 12, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "1d10+5", "Fire, Smoldering."),
      A("Molten web", "1 Action, Range 6", "", "DEX save or Restrained, taking 1d6 fire each turn. Escape DC 12, or cool it with water."),
      A("Molt", "Reaction, 1/encounter, would drop to 0", "", "Sheds its shell, stays at 1 HP, moves 6. The shell burns 1d6 to anyone ending a turn beside it."),
    ],

    tactics: "Hunts in groups, hidden in heat: one webs, the others knock prey in and swarm the Restrained. Leaves when half are dead.",
    sources: "Monster Vault: Conflux Creatures: Elementals & Fiends, CR 4 (tactics note).",

    designNote:
      "The webbed hero still acts, and the party's job is clear: cool it or break free. Molt means the " +
      "first kill doesn't count.",

    traits: [
      "A cracked carapace leaking light.",
      "It ticks like cooling metal when it rests.",
      "Fresh from a molt: pale, soft and furious.",
      "A ring of melted coins fused to its abdomen.",
      "Its web glows brighter when it's hungry.",
      "A half-melted Iverundian tool caught in one leg."
    ],
    encounters: [
      "It has nested in the party's only exit, a forge chimney.",
      "A scavenger screams in a molten web. The spider is in the machine above.",
      "Iverundian overseers want three out of a foundry without harming the work.",
      "One came through in a crate of Io scrap and nests in Vathrex's Forge."
    ],
    lairs: [
      "A forge vent lined with glowing silk, too hot to breathe.",
      "A war machine's warm belly, full of shed shells.",
      "Foundry molds strung with web, one holding an egg sac.",
      "A furnace gone out, and a spider starving beside it."
    ],
    rumours: [
      { true: true, text: "Water on the web. It cools and snaps like wax." },
      { true: true, text: "The shed shell stays hot. Don't stand near it." },
      { true: false, text: "Its bite sets your blood on fire." },
      { true: false, text: "Bring ice and they curl up and die." }
    ],
    gigFit: {
      verb: "Stop / Steal",
      butPlus: "Io or Maphotar arches, near forges and machines.",
      patronHook: "Erna Ironhorn wants one out of her chimney before her next commission burns. She pays in keys.",
      cityName: "\"Forge-wives\": smiths' name, for the way they tend the fire."
    }
  },

  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Brute",
    level: 5,
    name: "Hell Hound",
    seb: true,
    core: "Bred to run down souls that escape the Grenneth. It can track anyone who has been to Maphotar, anywhere.",
    description: "A black dog the size of a pony, coals for eyes, smoke curling from its mouth, an " +
      "iron collar stamped with a Grenneth number.",

    stats: { hp: 64, armor: "None", speed: "10", dc: 13, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "1d10+10", "Fire. Knockback equal to the Primary Die. Advantage if an ally is beside the target."),
      A("Fire breath", "2 Actions, 1/encounter", "3d6+4", "Fire, cone 3. DEX save for half."),
      A("Fire shield", "Passive", "", "Anyone starting a turn beside it takes 1d6 fire."),
    ],

    tactics: "Bites the lone hero, breathes when two stand close, harries runners. A feral pack quits when half is down.",
    sources: "Monster Vault: 4e MM, Lv 7 Brute. Fire Shield (4e); pack logic (Ammann).",

    designNote:
      "The bite throws heroes apart; the pack gangs up on whoever lands alone. Soul-scent makes it " +
      "a thread: whoever has been to Maphotar is being hunted.",

    traits: [
      "Its collar number scratched off. A runaway.",
      "Brimstone and cooked meat on its breath.",
      "It wags its tail low and slow when it hunts.",
      "A nicked ear and a limp that never slows it.",
      "A scrap of Triset robe it won't let go.",
      "Grenneth ash in its coat that screams faintly when it shakes."
    ],
    encounters: [
      "Baying, getting closer. Every hero who has been to Maphotar feels it in their teeth.",
      "A scavenger trapped on a wreck holds up an arch key: a way home, if they save her.",
      "One tracks someone through the Arena crowd. The crowd thinks it's the next act.",
      "A devil handler offers to call off the pack for one hero's true name, in their own hand."
    ],
    lairs: [
      "Sprung kennel cages in Agulon, each with a hook for a soul-lantern. The lanterns are gone.",
      "A steaming pit by a black river, pups asleep in a heap, no mother.",
      "A Triset shrine with a hound asleep on the altar, fed and prayed to.",
      "A cave floored with broken collars the pack chewed off each other."
    ],
    rumours: [
      { true: true, text: "Keep together. They split you and take the lone one." },
      { true: true, text: "If you've been to Maphotar, they can find you. Even here." },
      { true: false, text: "Ford a river and they lose your scent." },
      { true: false, text: "Their bite drags your soul back to the Grenneth." }
    ],
    gigFit: {
      verb: "Escort / Stop",
      butPlus: "Maphotar arches, and anywhere after for heroes who have been there.",
      patronHook: "A Black Hand fixer hides a Triset defector in the Lower Reaches. The hounds have found him.",
      cityName: "\"Grenneth dogs\": anyone who keeps coming back however often you send them away."
    }
  },
];
