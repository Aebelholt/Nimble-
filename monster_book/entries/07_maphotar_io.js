module.exports = [
  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Controller",
    level: 6,
    name: "Eye of Fear and Flame",
    description: "A floating eye the size of a shield, its iris ringed in fire, its " +
      "lids made of hammered iron plates bolted shut and pried open again. It was a " +
      "watcher in Klamas's fortress once. It still watches for him.",

    stats: { hp: 60, armor: "Medium", speed: "Fly 4 (hover)", stage: "13+" },

    actions: [
      {
        name: "Fear ray",
        cost: "1 Action, Range 12",
        damage: "—",
        effect: "WIL save DC 13 or Frightened until the end of the target's next turn. " +
          "A target already Frightened of it is Dazed instead."
      },
      {
        name: "Flame ray",
        cost: "1 Action, Range 12",
        damage: "2d8+6",
        effect: "Fire. The target is Smoldering. A Frightened target takes the ray with " +
          "advantage."
      },
      {
        name: "Grudge",
        cost: "Passive",
        damage: "—",
        effect: "It always targets the last creature that damaged it, if it can see them."
      },
      {
        name: "Shut",
        cost: "Reaction, 1/round, when targeted",
        damage: "—",
        effect: "Its iron lids slam closed. The attack is made with disadvantage. Until " +
          "the start of its next turn it can't use rays."
      }
    ],

    tactics: "Wants to keep watch for a master who left. Hangs back behind its servants, frightens whoever is in melee with it or standing near others, and burns the Frightened. Fixes on whoever hurt it last. Never breaks off; it shuts, then opens again.",
    sources: "Monster Vault: Conflux Creatures: NPCs & Undead, CR 9.",

    designNote:
      "The 5e eye of fear and flame frightens to paralysis. Here fear steps up to " +
      "Dazed on a second ray, never further. Grudge makes it predictable: whoever hit " +
      "it last is the one it watches, so the party can pass its attention around like " +
      "a hot coal. Shut gives heroes a choice: hit it and let it hide, or hold off and " +
      "let it burn.",

    traits: [
      "Its iris is the colour of a forge at full heat.",
      "Rivets have popped from one lid, and it squints.",
      "It trails a thin line of black smoke from the Grenneth.",
      "This one has a crack across the pupil and its rays sometimes misfire.",
      "It mutters Klamas's name in a hiss of steam.",
      "Triset scavengers have painted a prayer on its lids."
    ],

    encounters: [
      "An eye hovers over a war-machine wreck in the Iron Reaches, watching a Triset " +
        "scavenger crew who don't know it's there.",
      "The party enters a hall in Agulon where three eyes keep watch, each turning to " +
        "follow a different hero.",
      "A Black Hand fence has an eye in a lead box and is auctioning it in the Lower " +
        "Reaches. The lid is loose.",
      "The Iverundians of Io have captured an eye to power a forge. It is trying to " +
        "look at them."
    ],

    lairs: [
      "A watchtower on Agulon with a single iron socket in the wall, empty.",
      "A forge in Io with an eye fused into the furnace door, staring out through the " +
        "flames.",
      "A crater in the bone-sands where an eye fell, scorched glass at the bottom and " +
        "a single iron lid half buried.",
      "A shrine of the Triset where eyes are kept in cages and fed with prayer."
    ],

    rumours: [
      { true: true,
        text: "It watches whoever hurt it last. Take turns and it can't settle." },
      { true: true,
        text: "When it shuts, it can't see. That's your moment to close in." },
      { true: false,
        text: "Its stare can turn you to ash where you stand." },
      { true: false,
        text: "Say Klamas's name and it will obey you." }
    ],

    gigFit: {
      verb: "Steal / Stop",
      butPlus:
        "But+ Monster on any Maphotar or Io arch, especially near ruins or watchtowers.",
      patronHook:
        "A mage of Kartan believes an eye's last sight is still in it, and that the " +
          "sight is of Klamas's true name. She wants one alive.",
      cityName:
        "\"Klamas's lamps\": Triset arrivals call them that and spit after saying it."
    }
  },

  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Inferno Spider Moltling",
    description: "A spider the size of a hound, its carapace cooling from orange to black " +
      "in patches, leaking light at every joint. It lives in vents and heat-cracks and " +
      "spins webs that glow like wire in a forge.",

    stats: { hp: 27, armor: "Medium", speed: "6 (climb 6)", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "1d10+5",
        effect: "Fire. On hit, the target is Smoldering."
      },
      {
        name: "Molten web",
        cost: "1 Action, Range 6",
        damage: "—",
        effect: "DEX save DC 12 or Restrained. A Restrained target takes 1d6 fire at the " +
          "start of each of its turns and can still act. Escape DC 12, or cool the web " +
          "with water or cold."
      },
      {
        name: "Molt",
        cost: "Reaction, 1/encounter, when it would drop to 0 HP",
        damage: "—",
        effect: "It sheds its shell, drops to 1 HP and moves 6 spaces. The shell stays " +
          "where it was, burning: 1d6 fire to anyone who ends a turn adjacent."
      },
      {
        name: "Heat shimmer",
        cost: "Passive",
        damage: "—",
        effect: "Near a heat source it has advantage on Stealth, and its first attack " +
          "from hiding has advantage."
      }
    ],

    tactics: "Wants heat and food. Hunts in groups, hidden in heat: one webs, the others knock prey into the web and gang up on whoever is Restrained. The group breaks off into the vents when half of it is dead.",
    sources: "Monster Vault: Conflux Creatures: Elementals & Fiends, CR 4.",

    designNote:
      "A lurker that hides in heat and binds prey in burning silk. The web is " +
      "Restrained with a ticking fire cost, so the trapped hero still acts and the " +
      "party has a clear job: cool it or cut it. Molt means the first kill doesn't " +
      "count. Put moltlings in forges, vents and machine guts, where heat hides them.",

    traits: [
      "Its carapace is cracked and leaking light.",
      "It ticks like cooling metal when it rests.",
      "This one is fresh from a molt, pale and soft, but furious.",
      "It has a ring of melted coins fused to its abdomen.",
      "Its web glows brighter when it's hungry.",
      "It has a half-melted Iverundian tool caught in its leg."
    ],

    encounters: [
      "A moltling has nested in the party's only exit, a forge chimney in Io.",
      "A Triset scavenger is caught in a molten web, screaming. The spider is in the " +
        "machine above.",
      "Three moltlings have taken over an Io foundry, and its Iverundian overseers want " +
        "them out without damaging the work.",
      "A moltling has come through an arch in a crate of Io scrap and is nesting in " +
        "Vathrex's Forge."
    ],

    lairs: [
      "A forge vent lined with glowing silk, the air too hot to breathe.",
      "A wrecked war machine in the Iron Reaches, its engine still warm, its belly full " +
        "of shed shells.",
      "A foundry in Io where the molds have been strung with webs, and one mold holds " +
        "an egg sac.",
      "A furnace room where the furnace has gone out and the moltling is starving."
    ],

    rumours: [
      { true: true,
        text: "Water on the web. It cools and snaps like old wax." },
      { true: true,
        text: "When it molts, the shell stays hot. Don't stand near it." },
      { true: false,
        text: "Their bite sets your blood on fire. You'll burn from inside." },
      { true: false,
        text: "They die in the cold. Bring ice and they curl up." }
    ],

    gigFit: {
      verb: "Stop / Steal",
      butPlus:
        "But+ Monster on any Io or Maphotar arch, near forges, machines and heat.",
      patronHook:
        "Erna Ironhorn's forge has a spider in its chimney, and she wants it out " +
          "before her next commission burns. She'll pay in keys.",
      cityName:
        "\"Forge-wives\": smiths' name for them, from the way they tend the fire."
    }
  },

  {
    world: "Maphotar/Io",
    tier: "Standard",
    role: "Brute",
    level: 5,
    name: "Hell Hound",
    description: "A black dog the size of a pony, with coals for eyes and smoke curling " +
      "from its mouth. Its iron collar is stamped with a Grenneth number. It was bred " +
      "to hunt escaped souls through the bone-sands.",

    stats: { hp: 64, armor: "None", speed: "10", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "1d10+10",
        effect: "Fire. On hit, the target is knocked back a number of spaces equal to the " +
          "Primary Die."
      },
      {
        name: "Fire breath",
        cost: "2 Actions, 1/encounter",
        damage: "3d6+4",
        effect: "Fire, cone 3. DEX save DC 13 for half."
      },
      {
        name: "Fire shield",
        cost: "Passive",
        damage: "—",
        effect: "A creature that starts its turn adjacent to it takes 1d6 fire."
      },
      {
        name: "Pack tactics",
        cost: "Passive",
        damage: "—",
        effect: "Advantage on attacks against a creature adjacent to one of its allies."
      },
      {
        name: "Soul-scent",
        cost: "Passive",
        damage: "—",
        effect: "It can track any creature that has passed through Maphotar, across any " +
          "distance, even through an arch."
      }
    ],

    tactics: "Wants to run its quarry down. Bites the lone hero, breathes when two stand close, and harries anyone who runs. A trained pack retreats only with its handler; a feral one breaks off when half the pack is down.",
    sources: "Monster Vault: 4e MM, Lv 7 Brute. 4e MM Hell Hound (Fire Shield aura); Ammann (hell hounds).",

    designNote:
      "A straight brute with knockback. The bite throws heroes across the field, which " +
      "is a positioning tool as much as damage. In packs, pack tactics makes the hounds " +
      "push heroes apart and then gang up on whoever is alone. Soul-scent makes them a " +
      "follow-up threat: whoever has been to Maphotar is being hunted.",

    traits: [
      "Its collar number is scratched off. A runaway, hunting for itself now.",
      "Its breath smells of brimstone and cooked meat, and the air shimmers above it.",
      "It wags its tail when it hunts, low and slow, like a happy dog.",
      "A nick in one ear and a limp that never slows it down.",
      "It carries a scrap of Triset robe in its teeth and won't drop it.",
      "Its coat is grey with ash from the Grenneth's smoke, and the ash screams " +
        "faintly when it shakes."
    ],

    encounters: [
      "Baying across the bone-sands, getting closer. Every hero who has been to " +
        "Maphotar before feels it in their teeth.",
      "A pack has a Triset scavenger trapped on top of a war-machine wreck. She is " +
        "holding up an arch key and shouting that it opens a way home.",
      "A hell hound has come through an arch into the Lower Reaches and is tracking " +
        "someone through the crowd at the Arena of Blood. The crowd thinks it is the " +
        "next act.",
      "A devil handler from Agulon offers to call off the pack in exchange for one " +
        "hero's true name, written in their own hand."
    ],

    lairs: [
      "A kennel block in Agulon, its iron cages sprung, each with a numbered plate " +
        "and a hook for a soul-lantern. The lanterns are gone.",
      "A warm pit in the Iron Reaches where black river water steams. Pups sleep in a " +
        "heap, and the mother is not here.",
      "A ruined Triset shrine where a hound sleeps on the altar. The scavengers leave " +
        "it meat and pray it stays.",
      "A cave under a war-machine wreck, its floor a drift of broken collars. The " +
        "pack chews them off one another."
    ],

    rumours: [
      { true: true,
        text: "They hunt in packs. Keep together and don't let them split you." },
      { true: true,
        text: "If you've been to Maphotar, they can find you anywhere. Even here." },
      { true: false,
        text: "Hell hounds can't cross running water. Ford a river and they lose " +
          "you." },
      { true: false,
        text: "Their bite drags your soul back to the Grenneth." }
    ],

    gigFit: {
      verb: "Escort / Stop",
      butPlus:
        "But+ Monster on any Maphotar arch, and anywhere afterward for heroes who have " +
          "been there.",
      patronHook:
        "A Black Hand fixer has a Triset defector hidden in the Lower Reaches. The " +
          "hounds have found him. The fixer wants him moved before they arrive.",
      cityName:
        "\"Grenneth dogs\": Lower Reaches term for anyone who keeps coming back no " +
          "matter how often you send them away."
    }
  },
];
