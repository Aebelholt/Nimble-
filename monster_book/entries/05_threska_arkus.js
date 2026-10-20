module.exports = [
  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Controller",
    level: 7,
    name: "Necrophage Ghast",
    description: "A ghast that was a wizard once, and still dresses like one: robes gone " +
      "stiff with old blood, ink stains under the grave-dirt on its fingers. It crawls " +
      "the ceiling of a library it has eaten its way into, reading by the light of its " +
      "own green eyes.",

    stats: { hp: 72, armor: "Medium", speed: "6 (climb 6)", stage: "4, 13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d4+9",
        effect: "On hit: STR save DC 13 or Dazed on the target's next turn."
      },
      {
        name: "Arcane blast",
        cost: "1 Action, ×2, Range 12",
        damage: "2d6+4",
        effect: "Force. It uses this from the ceiling while heroes look for a way up."
      },
      {
        name: "Command",
        cost: "1 Action, 1/round, Range 8",
        damage: "—",
        effect: "WIL save DC 13. Failure: the ghast chooses where the target spends its " +
          "movement on its next turn. The target chooses its own actions."
      },
      {
        name: "Necrophage stench",
        cost: "Passive, Reach 6",
        damage: "—",
        effect: "A hero who starts their turn within 6 spaces makes a STR save DC 13. " +
          "Failure: disadvantage on saves against Claws and Command until the encounter " +
          "ends. Success: immune to the stench until the next Safe Rest."
      },
      {
        name: "Ghoul-master",
        cost: "Free, 1/round",
        damage: "—",
        effect: "One ghoul within 12 spaces moves and attacks. Ghouls follow a ghast " +
          "by instinct."
      }
    ],

    designNote:
      "Rebuilt from the Tales of the Valiant Monster Vault. A necrophage rises from a " +
      "spellcaster, hungers for magic as much as meat, and cannot pass on ghoul " +
      "hunger, which is why some mages will trade with it. Its claws and its hold " +
      "spell paralyse in the source; here both Daze for one turn, and its command " +
      "steers a hero's feet, never their hands. The stench is a set-up: it makes " +
      "every save after it harder, so the party's first decision is whether to close " +
      "in or back off and shoot. Use it as a librarian and a broker, not just a " +
      "monster: it knows things, and it wants to know more.",

    traits: [
      "Ink, not blood, under its claws. It has been copying something.",
      "It still wears its University ring and turns it while it thinks.",
      "It speaks politely, in a dry lecturer's voice, between bites.",
      "One hand is wrapped in clean linen. It burned it on a ward and is studying " +
        "the scar.",
      "It keeps a bookmark in every book on its shelves, and knows where each one is.",
      "Two ghouls follow it everywhere, carrying its lamp and its stool."
    ],

    encounters: [
      "A necrophage has made a lich-tower library in Threska its larder. The party " +
        "needs one book. It will trade the book for a spell they know.",
      "A Kartan mage is meeting a necrophage in a tomb on the Cliffs of the Dead to buy " +
        "a page. The mage has brought too few guards and the ghast has brought too " +
        "many ghouls.",
      "Ghouls are carrying a living scholar up a Threskan bastion stair. The ghast " +
        "walking behind them wants what the scholar knows, not the body.",
      "A necrophage clings to the ceiling of a plundered temple, reading the god's " +
        "name off the vault. Every word it reads aloud, the floor cracks."
    ],

    lairs: [
      "A lich-tower library with the books shelved by how good they tasted. The " +
        "catalogue is in the ghast's own hand.",
      "A Cliffs of the Dead tomb fitted out as a study: a desk, a chair for a guest, " +
        "and a ledger of every mage who came to trade.",
      "An Arkus temple vault where every wall glyph has been scraped off and copied " +
        "into a stack of skin-bound notebooks.",
      "A sand-buried scriptorium in the Red Wastes where ghouls sit at the desks, " +
        "copying, slowly, because it told them to."
    ],

    rumours: [
      { true: true,
        text: "It can't give you the hunger. Its bite is all magic, no sickness. That's " +
          "why the mages deal with it." },
      { true: true,
        text: "Don't stand in its stink. Back off a dozen paces before you close in, " +
          "or every spell it throws will land." },
      { true: false,
        text: "One scratch from a ghast and you're stone-stiff until dawn, while it eats." },
      { true: false,
        text: "It's only hungry for books. Throw it a spellbook and it'll let you pass." }
    ],

    gigFit: {
      verb: "Steal / Find",
      butPlus:
        "But+ Monster at Stage 4 (Cliffs of the Dead) and on any Threska or Arkus arch. " +
          "Best in a library, scriptorium or archive, with ghouls as the room's mob.",
      patronHook:
        "The University has been buying pages from a necrophage through a cut-out and " +
          "wants the party to find out what the ghast has been buying in return.",
      cityName:
        "\"The Reader\": grave diggers' name for the one on the Cliffs, said the way " +
          "you would name a landlord. Kartan students say it with a nervous laugh."
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
