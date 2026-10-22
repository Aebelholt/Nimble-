// Adopted from the City of Arches setting book (Deathreach, Chapter 9). Stats follow the GM Guide
// Monster Builder table by level. SEB.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "Deathreach",
    tier: "Minion / Standard",
    role: "Brute",
    name: "Duergar Dig Crew",
    seb: true,
    core: "Deathreach's obsessed duergar dig toward halls the dungeon hasn't finished. Their noise draws everything else.",
    description: "Grey, bald, soot-black dwarves in leather aprons, hauling a steam drill on a sled " +
      "and arguing over a map scratched on a shovel.",

    roster: [
      { name: "Dig-Hand", level: "Min", hp: "Minion",
        actions: [A("Shovel", "1 Action", "1d6", "A flat-bladed swing. Follows the GM Guide minion rules.")] },
      { name: "Duergar Delver", level: 2, hp: 31,
        actions: [
          A("Pick", "1 Action, ×2", "1d6", ""),
          A("Swell", "Free, 1/encounter", "—", "Grows Large until its next turn ends: Reach 2, +2 damage."),
        ] },
      { name: "Drill-Wright", level: 4, hp: 37, armor: "Medium",
        actions: [
          A("Bore", "2 Actions, Line 4", "2d8+5", "DEX save for half. The wall at the end of the line opens."),
          A("Bring it down", "1 Action, 1/encounter, Range 8", "—", "2-space radius of ceiling falls: DEX save DC 12 or Prone and Restrained under rubble."),
          A("Wrench", "1 Action", "1d8+4", ""),
        ] },
    ],
    stats: { stage: "7-10, 13+" },

    tactics: "Want the next shaft dug and the party out of the way. Delvers hold, the Drill-Wright brings the roof down. Leave when the drill breaks.",
    sources: "Adopted from the setting: Deathreach's duergar forge-diggers (Chapter 9). Swell after the duergar's enlarge.",

    designNote:
      "A crew, not a monster: they will bargain, and their drill is a terrain weapon. Every fight " +
      "near them is loud enough to bring a crawler.",

    traits: [
      "Their map is scratched on a shovel blade, and keeps changing.",
      "The foreman counts every strike of the pick aloud.",
      "Ear-plugs of wax. They shout everything.",
      "A crawler fang on a cord, worn for luck.",
      "One is a surface dwarf, and the others never let him forget it.",
      "Their drill has a name, and they pray to it."
    ],
    encounters: [
      "A crew needs the party's route. Their drill will open a new one, for a price.",
      "A drill breaks through into the party's corridor, and the crew is as surprised as they are.",
      "A crew is pinned by crawlers their noise drew. Their foreman is already held.",
      "A crew has dug into a sealed vault and wants a partner who can read the door."
    ],
    lairs: [
      "A forge-camp of tents around a steaming drill, three shafts started, none finished.",
      "A fresh-cut hall, still warm from the drill, with no one in it.",
      "A collapsed shaft with tools sticking out of the rubble.",
      "A shrine where broken drill bits are kept like relics."
    ],
    rumours: [
      { true: true, text: "Their noise draws crawlers. Never fight near a working drill." },
      { true: true, text: "They'll sell you a route if you'll haul for a shift." },
      { true: false, text: "Duergar turn invisible whenever they like. You never see the whole crew." },
      { true: false, text: "They dig for gold. Offer gold and they stop." }
    ],
    gigFit: {
      verb: "Escort / Find",
      butPlus: "Faction result on Deathreach arches, and Stages 7-10 for a crew dug up under the city. Pairs with the Carrion Crawler.",
      patronHook: "A Black Hand fixer wants a duergar drill brought to the city. The crew wants it back.",
      cityName: "\"Diggers\": Lower Reaches word, and a warning to stay out of new tunnels."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Gibbering Mouther",
    seb: true,
    core: "The Abhorrent Vats spawn it from primordial fluid. It is mouths, eyes, and the noise of every adventurer it ate.",
    description: "A heap of flesh that flows like spilled porridge, studded with eyes and mouths, " +
      "all of them talking.",

    stats: { hp: 52, armor: "None", speed: "3 (ground within 2 turns to mush)", dc: 12, stage: "13+" },

    actions: [
      A("Bites", "1 Action, ×2", "1d6+5", "A Prone target is bitten with advantage."),
      A("Gibbering", "Passive, Reach 4", "", "WIL save DC 12 or the GM moves them up to 3 spaces; the hero keeps all their actions."),
      A("Blinding spittle", "1 Action, 1/encounter, Range 6", "", "2-space radius: DEX save or Blind until their next turn ends."),
    ],

    tactics: "Oozes at the nearest noise and keeps babbling. Never breaks off.",
    sources: "Adopted from the setting: gibbering mouthers spawned in the Abhorrent Vats (Chapter 9) and loose on the Dreamcaster. Confusion rebuilt as GM-chosen movement.",

    designNote:
      "The babble steers feet, never hands, so heroes walk into the mush while still swinging. " +
      "Kill it at range or fight with your ears stopped.",

    traits: [
      "One mouth speaks in a hero's voice.",
      "An adventurer's ring embedded in its flesh.",
      "It sings a drinking song in seven voices, badly.",
      "Its eyes all look the same way, except one.",
      "It smells of the Vats: brine and something sweet.",
      "It has eaten a duergar recently and knows their swear-words."
    ],
    encounters: [
      "A voice calls for help from a side passage. It is a mouth.",
      "A mouther blocks the only route, singing to itself.",
      "Lizardfolk mages are herding one toward the party.",
      "One has been trapped in a pit for years and has learned to bargain."
    ],
    lairs: [
      "The shore of the Vats, where new mouthers crawl out of the fluid.",
      "A cave floor turned to soft mush, armour half sunk in it.",
      "A pit with a ladder that ends just above the surface.",
      "A chamber of echoes where you can't tell which voices are real."
    ],
    rumours: [
      { true: true, text: "Stop your ears with wax and the babble can't move you." },
      { true: true, text: "It's slow. Never let it reach you on soft ground." },
      { true: false, text: "The voices are the souls it ate. Answer and you join them." },
      { true: false, text: "It can't see in the dark." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster result on Deathreach arches, near the Vats. Good with a pit or a ledge for the babble.",
      patronHook: "The University wants a live sample from the Vats. Mouthers are what crawls out.",
      cityName: "\"Chatterers\": duergar don't name them, only cover their ears."
    }
  },

  {
    world: "Deathreach",
    tier: "Standard",
    role: "Controller",
    name: "Lizardfolk of the Dungeon",
    seb: true,
    core: "Lizardfolk serve Deathreach itself. Every adventurer who dies in it feeds the god it is growing.",
    description: "Scaled, patient, painted with chalk maps of the dungeon, speaking to the walls " +
      "as if the walls answer. They do.",

    roster: [
      { name: "Lizardfolk Warden", level: 2, hp: 31,
        actions: [
          A("Spear", "1 Action, ×2, Reach 2", "1d6", ""),
          A("Hold breath", "Passive", "—", "Fights underwater as on land."),
        ] },
      { name: "Lizardfolk Mage", level: 5, hp: 49,
        actions: [
          A("Shift the wall", "1 Action, Range 8", "—", "A wall section moves 2 spaces: block a passage, or shove anyone in the way 2."),
          A("Stone tongue", "1 Action, Range 12", "2d8+6", "The floor bites. STR save DC 13 or Restrained until their next turn ends."),
          P("Feed the Hunger", "When a creature drops to 0 within 12, the mage heals 2d6."),
        ] },
    ],
    stats: { stage: "13+" },

    tactics: "Close the room around the party, then wear them down. The dungeon is on their side. Bloodied mages vanish through a wall.",
    sources: "Adopted from the setting: lizardfolk mages serving Deathreach, and Voor the Hunger (Chapter 9 adventure seed).",

    designNote:
      "Their magic is the dungeon's: walls move, floors bite. The fight is about exits, and the " +
      "longer it runs the more the dungeon gains.",

    traits: [
      "Chalk maps on their scales, redrawn every morning as the halls change.",
      "One carries a clay faceless idol.",
      "They speak to the walls, and wait for a reply.",
      "An adventurer's badge sewn into a robe.",
      "A tail-ring of carved bone for every death they witnessed.",
      "The youngest still flinches when the walls move."
    ],
    encounters: [
      "Lizardfolk mages hold a far wanderer in a salt ring and question it.",
      "A mage offers to show the party the way out, for a name.",
      "The room the party fled into closes behind them. A mage is waiting.",
      "Wardens escort an adventurer who doesn't know where they're being taken."
    ],
    lairs: [
      "A shrine where the walls breathe, and a faceless statue stands in a pool.",
      "A chamber of chalk maps, every one of the dungeon a day from now.",
      "A flooded hall where they sleep underwater.",
      "A hall of the dead, adventurers laid out in rows, feeding something below."
    ],
    rumours: [
      { true: true, text: "Every death in Deathreach feeds something. They count them." },
      { true: true, text: "They can move the walls. Note every exit." },
      { true: false, text: "They are prisoners of the dungeon and want rescue." },
      { true: false, text: "Kill their mage and the walls stop moving." }
    ],
    gigFit: {
      verb: "Stop / Find",
      butPlus: "Faction result on Deathreach arches. Pairs with the Far Wanderer and the Gibbering Mouther.",
      patronHook: "The Archkeepers have dreams of a faceless god rising. The lizardfolk know its name.",
      cityName: "\"Wall-talkers\": delvers' word for anyone a little too fond of the dark."
    }
  },
];
