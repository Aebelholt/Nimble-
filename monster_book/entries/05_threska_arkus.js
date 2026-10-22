// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Controller",
    level: 7,
    name: "Necrophage Ghast",
    seb: true,
    core: "Threska's council wizards rotted into ghasts that still read. It hungers for magic first, meat second.",
    description: "A ghast in a wizard's robes gone stiff with blood, ink under the grave-dirt on " +
      "its fingers. It reads on the ceiling by the light of its own eyes.",

    stats: { hp: 72, armor: "Medium", speed: "6 (climb 6)", dc: 13, stage: "4, 13+" },

    actions: [
      A("Claws", "1 Action, ×2", "1d4+9", "STR save or Dazed next turn. From the ceiling: Arcane blast instead, Range 12, 2d6+4 force."),
      A("Command", "1 Action, 1/round, Range 8", "", "WIL save or it chooses where the target moves next turn. Never their actions."),
      A("Stench", "Passive, Reach 6", "", "Heroes starting a turn within 6: STR save or disadvantage on saves against it this encounter."),
    ],

    tactics: "Talks before it fights; its ghouls go first. Goes for spellcasters. Bloodied, it climbs out of reach to bargain later.",
    sources: "Monster Vault: Tales of the Valiant Monster Vault, CR 4 (spellcaster ghast, cannot spread ghoul hunger). Ammann (ghouls and ghasts).",

    designNote:
      "It can't spread the hunger, which is why mages trade with it. The stench decides the fight: " +
      "close in fast or back off and shoot. Play it as a broker first.",

    traits: [
      "Ink, not blood, under its claws.",
      "Its old University ring, turned while it thinks.",
      "A dry lecturer's voice between bites.",
      "One hand in clean linen, burned on a ward it is studying.",
      "A bookmark in every book. It knows where each one is.",
      "Two ghouls carry its lamp and its stool."
    ],
    encounters: [
      "The book the party needs is in its larder. It will trade it for a spell.",
      "A Kartan mage meets it to buy a page, with too few guards against too many ghouls.",
      "Ghouls carry a living scholar upstairs. It wants what she knows, not the body.",
      "It reads a dead god's name off a ceiling. Each word cracks the floor."
    ],
    lairs: [
      "A lich-tower library, books shelved by how good they tasted.",
      "A tomb fitted as a study, a guest chair, and a ledger of every mage who traded.",
      "A temple vault with every glyph scraped off and copied into skin-bound notebooks.",
      "A buried scriptorium where ghouls sit at the desks, copying slowly."
    ],
    rumours: [
      { true: true, text: "It can't give you the hunger. That's why mages deal with it." },
      { true: true, text: "Stay out of its stink, or every spell it throws lands." },
      { true: false, text: "One scratch and you're stiff until dawn while it eats." },
      { true: false, text: "Throw it a spellbook and it'll let you pass." }
    ],
    gigFit: {
      verb: "Steal / Find",
      butPlus: "Stage 4 and Threska or Arkus arches, in a library or archive with ghouls as the mob.",
      patronHook: "The University buys pages from one through a cut-out. What is the ghast buying in return?",
      cityName: "\"The Reader\": grave diggers name the one on the Cliffs like a landlord."
    }
  },

  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Skirmisher",
    level: 4,
    name: "Iron Cobra",
    seb: true,
    core: "The Nameless King's temples were built with guards that outlived the god. It strikes, recoils, and obeys one word.",
    description: "A serpent of jointed black iron with green venom showing through a glass panel " +
      "in its neck. It ticks while it waits.",

    stats: { hp: 37, armor: "Medium", speed: "8", dc: 12, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "1d10+6", "A failed STR save spends a dose (3, endless at home): Poisoned, Slowed or Dazed, its pick. Then moves 4."),
      A("Ward-word", "Passive", "", "Speak the word from the temple walls (Lore DC 14) to halt it a round, once."),
      A("Construct", "Passive", "", "Immune to Poisoned and Frightened. Never chases past its temple door."),
    ],

    tactics: "Strikes whoever crossed the threshold last, then slithers back. Never breaks off inside the temple.",
    sources: "Monster Vault: 4e MM, Lv 6 Skirmisher. Guard Area and Slithering Shift (4e). Paralysis dose rebuilt as Dazed.",

    designNote:
      "Three doses outside its room, so the heroes can count. Inside, the limit lifts. The word on the walls " +
      "rewards heroes who read the room.",

    traits: [
      "A cracked venom panel, leaking a thin green trail.",
      "A priest's name etched small on its head.",
      "It ticks like a clock while it waits.",
      "A broken tail that drags a groove in the sand.",
      "Ruby eyes. Someone has pried one out.",
      "Its iron is worn smooth from one patrol, centuries long."
    ],
    encounters: [
      "A dead thrall on a threshold, two tiny holes in his ankle. Something clicks inside.",
      "Clan scavengers are rewiring a captured cobra. They need someone to read the word.",
      "Two cobras patrol a courtyard from opposite ends and will meet in the middle.",
      "A smuggled cobra loose in the city, after someone said the wrong word."
    ],
    lairs: [
      "A shrine carved with the word three times, each one different.",
      "A sand-choked hall, a figure-eight worn into the floor.",
      "A broken reliquary, the relic long gone, still guarded.",
      "A dead warlock's workshop of half-built cobras, and one finished."
    ],
    rumours: [
      { true: true, text: "Find the word on the walls and you can stop it cold." },
      { true: true, text: "Make it waste three bites and the rest is iron and teeth." },
      { true: false, text: "Splash it with water and it rusts solid." },
      { true: false, text: "Break the god's statue and its guards fall apart." }
    ],
    gigFit: {
      verb: "Steal / Find",
      butPlus: "Arkus and Threska arches, inside temples and tombs.",
      patronHook: "The University wants a working cobra and its word. The Black Hand wants the venom reservoir intact.",
      cityName: "\"Temple-snakes\": Arkus arrivals flinch at any ticking clock."
    }
  },

  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Hitched Scarecrow",
    seb: true,
    core: "Arkus clans tied watchmen to their fields against the dead. The clans are gone; the watchmen still keep their last order.",
    description: "A straw man tied to a ward-pole by a rope of braided hair, its sackcloth face " +
      "painted with one wide eye.",

    stats: { hp: 41, armor: "None", speed: "6 (tethered)", dc: 12, stage: "13+" },

    actions: [
      A("Terrifying glare", "1 Action, Range 6", "", "WIL save or Frightened until the end of the scarecrow's next turn. Already Frightened, Dazed."),
      A("Claws", "1 Action, ×2", "1d6+4", "Advantage against a Frightened target."),
      A("Hitched", "Passive", "", "Tethered within 6 of its pole; cutting the rope frees it and doubles glare range. Fire deals it double damage."),
    ],

    tactics: "Glares at anyone in its circle, claws whoever reaches the pole. Never breaks off and never forgets a face.",
    sources: "Monster Vault: Ultimate Bestiary: The Dreaded Accursed, CR 6. Bond with its maker (4e MM3 Scarecrow). Paralysis rebuilt as Dazed.",

    designNote:
      "The rope is the encounter: fight at the edge of the circle, or cut it and set it loose. " +
      "Fire deals it double damage. Put what the heroes want just inside the circle.",

    traits: [
      "The rope is braided from the hair of every clan member who planted the field.",
      "It turns its head to follow, with a slow creak of straw.",
      "Crows won't land within 6 spaces of it.",
      "Its eye was repainted recently. Someone still tends it.",
      "A child's doll stuffed in its chest.",
      "A dead warlock's robe, too fine for straw."
    ],
    encounters: [
      "The only well for a day stands inside a scarecrow's circle.",
      "Three watch a field. A fourth pole stands empty, its rope cut.",
      "A child cut one loose on a dare. It is walking toward where the clan hides.",
      "A wall lined with watchmen against the dead. One faces inward."
    ],
    lairs: [
      "A dead field, one pole, a frayed rope at its foot, and no scarecrow.",
      "A clan graveyard ringed by watchmen, each on a different coloured rope.",
      "A barn of half-stuffed sacks. One painted eye watches the door.",
      "A tower stair lined with watchmen tied to the banisters, eyes fresh."
    ],
    rumours: [
      { true: true, text: "It can't leave its pole. Twelve paces out it's just a voice in your head." },
      { true: true, text: "It's straw. Fire takes it twice as fast." },
      { true: false, text: "Meet its eye and you're frozen till sunrise." },
      { true: false, text: "They only move at night." }
    ],
    gigFit: {
      verb: "Steal / Bury",
      butPlus: "Arkus and Threska arches, in fields and at clan sites.",
      patronHook: "The Archkeepers want to bring an Arkus clan to the city. The clan won't leave its dead, and watchmen guard them.",
      cityName: "\"Watchmen\": Arkus arrivals won't walk past a scarecrow in a city garden."
    }
  },
];
