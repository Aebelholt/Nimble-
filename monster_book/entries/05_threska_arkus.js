module.exports = [
  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Necrophage Ghast",
    description: "A gaunt corpse with grey-green skin pulled tight over its ribs and a jaw " +
      "unhinged like a snake's. It is swollen in the belly with what it has eaten, and " +
      "the stench arrives a full room before it does.",

    stats: { hp: 64, armor: "None", speed: "6", stage: "4, 13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d4+8",
        effect: "On hit: STR save DC 13 or Dazed on the target's next turn."
      },
      {
        name: "Stench",
        cost: "Passive, Reach 2",
        damage: "—",
        effect: "A creature that starts its turn within 2 spaces makes a STR save DC 13 " +
          "or is Poisoned until the start of its next turn. Undead are immune."
      },
      {
        name: "Feast",
        cost: "1 Action, adjacent corpse",
        damage: "—",
        effect: "The ghast heals 2d8 HP. At the end of its turn the corpse rises as a " +
          "ghoul minion (GM Guide minion rules, Claws 1d4+2) under its command."
      },
      {
        name: "Drive the pack",
        cost: "Free, 1/round",
        damage: "—",
        effect: "One ghoul minion within 12 spaces moves and attacks."
      }
    ],

    designNote:
      "Ghoul and ghast claws paralyse in 5e. Here they Daze for one turn, with undead " +
      "d4 dice and big flat bonuses as the GM Guide suggests. The necrophage makes the " +
      "battlefield worse over time: every corpse it reaches is a heal and a new minion. " +
      "Clearing bodies, burning them, or killing the ghast before it eats is the " +
      "tactical problem. Fight it among the dead of Threska's bastion walls and the " +
      "fight snowballs.",

    traits: [
      "It wears a priest's stole from a temple that no longer has a god.",
      "Its tongue is black and too long, and it licks the air like a dog.",
      "It giggles when it eats.",
      "One arm is withered and useless. It fights one-handed and leads with its teeth.",
      "This one remembers being a man and mutters his name between bites.",
      "Its eyes glow faint green in darkness, the same green as a lich-tower's lamps."
    ],

    encounters: [
      "A Threskan bastion's dead have been laid in rows for burning. Something is " +
        "moving between the rows, and the pyre wood is wet.",
      "The party hears a feast before they see it: three ghouls and a ghast around " +
        "a fallen titan's carcass in the Red Wastes.",
      "A ghast leads ghouls up out of a tomb on the Cliffs of the Dead and is heading " +
        "for the grave diggers' camp.",
      "A lich of Threska keeps a ghast as a pet and lets it loose in its tower's lower " +
        "halls to deal with intruders."
    ],

    lairs: [
      "A charnel pit under an obsidian tower where bones are sorted into neat heaps " +
        "by size.",
      "A plundered temple where the god's statue has had its face eaten away.",
      "A collapsed crypt on the Cliffs of the Dead where every niche is empty and the " +
        "floor is paved with gnawed bone.",
      "A dry riverbed in the Red Wastes lined with half-buried skeletons, all facing " +
        "the same way, all with their legs broken."
    ],

    rumours: [
      { true: true,
        text: "Burn the dead before you fight it. Every corpse it reaches is a new " +
          "ghoul and a full belly." },
      { true: true,
        text: "The stink is the worst of it. Hold your breath, step back, step in. It " +
          "fades fast." },
      { true: false,
        text: "Ghast claws freeze you solid. One scratch and you're stone until " +
          "morning." },
      { true: false,
        text: "Holy water burns them like acid. A flask will kill one outright." }
    ],

    gigFit: {
      verb: "Bury / Stop",
      butPlus:
        "But+ Monster at Stage 4 (Cliffs of the Dead) and on any Threska or Arkus arch. " +
          "Pair with a room full of bodies.",
      patronHook:
        "A priest from the Temple of the Three Sisters needs a graveyard on the Cliffs " +
          "of the Dead cleansed before a funeral. The dead there have stopped staying " +
          "buried, and the priest suspects a ghast came through an arch.",
      cityName:
        "\"Gravebellies\": grave diggers' name, from the swollen gut. If a dig crew " +
          "finds the tombs gnawed open, they say a gravebelly passed through."
    }
  },

  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Skirmisher",
    level: 4,
    name: "Iron Cobra",
    description: "A mechanical serpent of black iron plates, jointed at every handspan, " +
      "with a reservoir of green venom visible through a glass panel in its neck. It " +
      "was built to guard a temple, and the temple is gone.",

    stats: { hp: 37, armor: "Medium", speed: "8", stage: "13+" },

    actions: [
      {
        name: "Bite",
        cost: "1 Action",
        damage: "1d10+6",
        effect: "On hit, it may spend a venom dose (3 per encounter). The target makes a " +
          "STR save DC 12 or suffers one of: Poisoned, Slowed, or Dazed on their next " +
          "turn. The cobra picks."
      },
      {
        name: "Strike and recoil",
        cost: "Free, after a Bite",
        damage: "—",
        effect: "It moves up to 4 spaces without provoking Opportunity Attacks."
      },
      {
        name: "Ward-word",
        cost: "Passive",
        damage: "—",
        effect: "It obeys a command word cut into its temple's walls. A hero who reads it " +
          "(Lore DC 14) and speaks it as an Action halts the cobra for a round."
      },
      {
        name: "Construct",
        cost: "Passive",
        damage: "—",
        effect: "Immune to Poisoned, Frightened and Charmed."
      }
    ],

    designNote:
      "A hit-and-run guardian with a small venom budget. Three doses per encounter " +
      "means the GM picks when to spend them, and the heroes can count. Its paralysing " +
      "dose from 5e is now Dazed for a turn. The ward-word rewards heroes who read the " +
      "room. Put cobras in Arkus temples, among half-buried statues and long halls where " +
      "it can strike and slither back into the dark.",

    traits: [
      "Its venom panel is cracked and leaks a thin green trail.",
      "A priest's name is etched on its head in tiny letters.",
      "It ticks like a clock when it waits.",
      "This one's tail is broken and drags, scraping a groove in the sand.",
      "Its eyes are rubies. Someone has already pried one out.",
      "It coils around a god's statue, its iron rubbed smooth from centuries of the " +
        "same patrol."
    ],

    encounters: [
      "A temple door in Arkus is ajar. On the threshold lies a dwarf thrall, dead, with " +
        "two tiny holes in his ankle. Something clicks inside.",
      "Clan scavengers have captured a cobra and are trying to rewire it to serve them. " +
        "They need a reader for the ward-word.",
      "The party must cross a temple courtyard ringed by fallen statues. Two cobras " +
        "patrol in opposite directions and will meet in the middle.",
      "A Black Hand crew has smuggled a cobra into the city, and someone has spoken " +
        "the wrong word to it."
    ],

    lairs: [
      "A step-pyramid shrine with walls carved in looping script. The ward-word is " +
        "there, three times, each one different.",
      "A sand-choked hall where the cobra's coils have worn a figure-eight in the stone " +
        "floor.",
      "A vault with a broken reliquary, its relic long gone and the cobra still guarding " +
        "the empty case.",
      "A dead warlock's workshop under a planet-killing spire, full of half-built cobras " +
        "and one finished one."
    ],

    rumours: [
      { true: true,
        text: "They obey a word. Find it on the temple walls and you can stop one cold." },
      { true: true,
        text: "It only carries so much venom. Make it waste three bites and the rest is " +
          "iron and teeth." },
      { true: false,
        text: "Iron cobras rust in water. Splash it and it seizes up." },
      { true: false,
        text: "Destroy the temple's god-statue and the cobras that guard it fall apart." }
    ],

    gigFit: {
      verb: "Steal / Find",
      butPlus:
        "But+ Monster on any Arkus or Threska arch, inside temples and tombs.",
      patronHook:
        "The University wants a working cobra and its command word to study the old " +
          "temple guardians. The Black Hand wants the venom reservoir intact to sell.",
      cityName:
        "\"Temple-snakes\": what the clans of Arkus call them. The few who have reached " +
          "the City of Arches flinch at the ticking of any clock."
    }
  },

  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Hitched Scarecrow",
    description: "A straw man tied to a ward-pole by a rope of braided hair, its sackcloth " +
      "face painted with a single wide eye. The pole stands at the edge of a clan's " +
      "dead field. The clan is gone. The scarecrow is still watching.",

    stats: { hp: 41, armor: "None", speed: "6 (tethered)", stage: "13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d6+4",
        effect: "Advantage against a Frightened target."
      },
      {
        name: "Terrifying glare",
        cost: "1 Action, Range 6",
        damage: "—",
        effect: "WIL save DC 12 or Frightened until the end of the target's next turn. " +
          "A target already Frightened of it is Dazed instead."
      },
      {
        name: "Hitched",
        cost: "Passive",
        damage: "—",
        effect: "It cannot move more than 6 spaces from its ward-pole. Any creature can " +
          "cut the rope (1 Action, adjacent to the pole). Freed, it loses the limit and " +
          "its glare's Range doubles."
      },
      {
        name: "Straw",
        cost: "Passive",
        damage: "—",
        effect: "Fire deals double damage. While burning it deals 1d6 fire to adjacent " +
          "creatures at the start of its turn."
      }
    ],

    designNote:
      "In 5e the scarecrow's glare frightens and paralyses. Here it Frightens and then " +
      "Dazes on a second fail: one action lost, never the whole turn. The rope is the " +
      "encounter. Tethered, the scarecrow guards a circle the heroes can avoid or " +
      "fight at the edge of. Cutting the rope to get past it, or to reach what it " +
      "guards, sets it loose. Put something the heroes want just inside the circle.",

    traits: [
      "Its rope is braided from the hair of every clan member who planted the field.",
      "It turns its head to follow the party, a slow creak of straw.",
      "Crows will not land within 6 spaces of it.",
      "Its painted eye has been touched up recently. Someone still tends it.",
      "A child's doll is stuffed into its chest.",
      "It wears a dead warlock's robe, too fine for straw."
    ],

    encounters: [
      "The only well for a day's walk stands inside a scarecrow's circle.",
      "Three scarecrows ring an old clan field in Arkus. One of them has already been " +
        "cut loose and is somewhere nearby.",
      "A clan elder pleads with the party: their child cut a scarecrow loose on a dare " +
        "and it is now walking toward the cave where the clan hides.",
      "A Threskan bastion has hitched scarecrows along its walls as wards against the " +
        "dead. One is facing inward."
    ],

    lairs: [
      "A field of dead stalks in Arkus with a single ward-pole and a frayed rope at its " +
        "foot. The scarecrow is not here.",
      "A clan graveyard ringed by scarecrows, each tied with a different coloured rope.",
      "A barn inside an Arkus fissure where the clan made scarecrows. Half-stuffed " +
        "sacks hang from the rafters, and one painted eye looks at the door.",
      "A Threskan tower stair lined with scarecrows, tied to the banisters, their eyes " +
        "freshly painted."
    ],

    rumours: [
      { true: true,
        text: "It can't leave its pole. Six paces out and it's just a voice in your head." },
      { true: true,
        text: "Don't cut the rope. Whatever you want past it, there's a way round." },
      { true: false,
        text: "Look it in the eye and you're frozen till sunrise." },
      { true: false,
        text: "Scarecrows only move at night. Cross by day and you're fine." }
    ],

    gigFit: {
      verb: "Steal / Bury",
      butPlus:
        "But+ Monster on any Arkus or Threska arch, in fields and at clan sites.",
      patronHook:
        "The Archkeepers want to bring an Arkus clan through an arch to the City of " +
          "Arches. The clan won't leave without their dead, and their dead are guarded " +
          "by scarecrows that no longer know who tied them.",
      cityName:
        "\"Watchmen\": Arkus arrivals call them that, with respect, and won't walk past " +
          "a scarecrow in a city garden."
    }
  },
];
