// SEB pass (Succinct, Evocative, Built). One core line; at most three actions of one clause each.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });

module.exports = [
  {
    world: "Terrache",
    tier: "Standard",
    role: "Controller",
    level: 5,
    name: "Star Spawn Mangler",
    seb: true,
    core: "The god the Violet Eye hunts stirs under the Seas of Madness. Manglers climb out of the water as its hands.",
    description: "A too-long grey figure with six arms jointed at angles that hurt to look at, and " +
      "a face that is only a mouth. It folds into shadows too small for it.",

    stats: { hp: 64, armor: "None", speed: "8 (climb 8)", dc: 13, stage: "13+" },

    actions: [
      A("Flurry", "1 Action", "3d6+4", "Six arms at once. Then push or pull the target 2 spaces any way, walls included."),
      A("Shadow fold", "Passive", "", "Invisible in dim light or darkness until it attacks."),
      A("Psychic static", "Passive, Reach 2", "", "Heroes within 2 can't take Reactions and roll Concentration with disadvantage."),
    ],

    tactics: "Alone it comes from shadow; in a group its claws clatter first. Shreds one hero, throws them, scuttles off, returns.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 5 (tactics note). Origin rebuilt from Terrache canon.",

    designNote:
      "Every hit moves a hero, so the fight is over where you stand. On Terrache's bridges, every " +
      "push is a fall. Light is the answer.",

    traits: [
      "One arm broken, hanging wronger than the rest.",
      "It hums in a key that makes teeth ache.",
      "A Violet Eye warlock's sash, wet from the sea.",
      "It moves in fits, like a puppet with tangled strings.",
      "Its mouth is full of small violet stones.",
      "A shard of a Pillar of Sin in its chest, still whispering."
    ],
    encounters: [
      "It squats mid-bridge between two shadow elf cities. Each swears it belongs to the other.",
      "A shadow elf patrol has it cornered. Two soldiers hang from the ceiling at impossible angles.",
      "A Violet Eye warlock will call it off the party's route for one hero's worst dream, told in full.",
      "The lamp gutters on a walkway. Six grey hands close on the rail ahead, one by one."
    ],
    lairs: [
      "A hollow stalactite tip, spirals scratched toward a hole too small to pass. Something passes.",
      "A ledge over the sea, where it sits rocking in time with the Pillars' screams.",
      "A watchtower with every door bent outward and every guard's armour folded, empty.",
      "A violet grotto heaped with Violet Eye offerings: oil, mirrors, a scroll begging it to stay away."
    ],
    rumours: [
      { true: true, text: "Bring light. It can't hide in it." },
      { true: true, text: "Off the bridges when it's near. It throws people." },
      { true: false, text: "One touch scrambles your mind for the whole fight." },
      { true: false, text: "It can't climb. Get above it." }
    ],
    gigFit: {
      verb: "Escort / Stop",
      butPlus: "Terrache arches, on bridges, walkways and ledges.",
      patronHook: "The University wants a mangler's arm for its joints, and has a Violet Eye contact to sell.",
      cityName: "\"Six-hands\": a shadow elf curse."
    }
  },

  {
    world: "Terrache",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Voidwracked Mage",
    seb: true,
    core: "A Violet Eye warlock who listened to the Pillars of Sin too long. Half of them is gone, and the hole hurts.",
    description: "A shadow elf in a ruined Violet Eye robe, half the body hollowed into star-flecked " +
      "black. Two voices speak, and they never agree.",

    stats: { hp: 40, armor: "None", speed: "6", dc: 12, stage: "13+" },

    actions: [
      A("Void lash", "1 Action, Range 8", "1d10+6", "Pulls the target 2 spaces toward it or the nearest Pillar of Sin."),
      A("Unravel", "1 Action, 1/round, Range 8", "", "WIL save or Dazed on the target's next turn."),
      A("Leak", "Passive", "", "Hits on it burn all within 1 (1d6). At 0 HP it implodes: 2d6 within 2, pulled in."),
    ],

    tactics: "Lashes whoever is closest, because closest is loudest. Breaks off only by dying, and that hurts everyone.",
    sources: "Monster Vault: Creature Codex, CR 8. Scaled down as a glass cannon; origin rebuilt from Terrache canon.",

    designNote:
      "Glass cannon: lower-level HP, higher-level damage, and it punishes melee every time it is " +
      "hit. Kill it carefully, or eat the implosion.",

    traits: [
      "Eyes like two holes with moving stars in them.",
      "A Violet Eye tattoo, half eaten by the black.",
      "It names the five spires of Vestellis, always skipping the fourth.",
      "It weeps black stones that roll uphill.",
      "A blank spellbook it still reads from.",
      "A signet from Qinroris's court on the hand that remains."
    ],
    encounters: [
      "It preaches on a bridge to goblins and bugbears. Two have gone dark at the fingertips.",
      "The party's Violet Eye contact arrives with a hand black to the wrist and asks them to look.",
      "It is feeding a Pillar shard to the myconid sage who holds the party's key.",
      "A warlock pays for one brought back alive. Every blow makes that harder."
    ],
    lairs: [
      "A scorched tower room, the floor a mosaic of stars from no known sky.",
      "A volcanic cave where the rock has gone thin as paper and stars show through.",
      "A shrine by a Pillar of Sin, heaped with empty, folded Violet Eye robes.",
      "A library of blank pages, the librarian still at the desk, writing nothing."
    ],
    rumours: [
      { true: true, text: "Hit it from range. It hurts everyone close." },
      { true: true, text: "It pulls in when it dies. Step back before the last blow." },
      { true: false, text: "The void is catching. Touch one and you hollow out too." },
      { true: false, text: "Push it into the sea and it unravels." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Terrache arches, near Vestellis or the Seas of Madness.",
      patronHook: "A University lecturer came back from Terrache speaking in two voices. They want to know why before it spreads.",
      cityName: "\"Hollowed\": University slang for any scholar who goes too deep."
    }
  },

  {
    world: "Terrache",
    tier: "Standard",
    role: "Lurker",
    level: 5,
    name: "Slaad Tadpole",
    seb: true,
    core: "Chaos breeds in the Seas of Madness. A slaad plants the embryo; this is what bursts out of the host.",
    description: "A slick, dog-sized tadpole with needle teeth and faintly red eyes. It came out of " +
      "someone's skull days ago. Soon it will be a slaad.",

    stats: { hp: 49, armor: "None", speed: "6 (swim 8)", dc: 13, stage: "13+" },

    actions: [
      A("Bite", "1 Action", "2d8+6", "Then it slips half out of the world: attacks against it are disadvantaged until its next turn."),
      A("Chaos shift", "Reaction, attacked in melee", "", "Moves 2 first, without provoking. Out of reach, the attack misses."),
      A("Grow", "Passive", "", "Becomes an adult slaad 1d4+3 days after emerging, a day sooner for each good meal."),
    ],

    tactics: "Wants to grow up. Hides, eats anything small, bites only what corners it, and runs every time.",
    sources: "Monster Vault: 4e MM, Lv 5 Lurker. Chaos Shift, insubstantial after a bite (4e); flees to hide (Ammann, Vault note).",

    designNote:
      "Hard to pin and always running. The real job is the clock: find it before it grows. The " +
      "host story lives in the encounters.",

    traits: [
      "A strip of its host's scalp still on its back.",
      "It chirps like a cricket, faster when hungry.",
      "Its skin shimmers every colour, like oil on water.",
      "Claws already budding. Two days, maybe less.",
      "It drags the host's silver earring on a thread of skin.",
      "One eye is human, brown and frightened."
    ],
    encounters: [
      "The first clean water in days. Under the steam, something dog-sized turns to look.",
      "A soldier begs for a priest, clutching his head. He has two days and knows what's coming.",
      "A warlock keeps them in a tank, labelled by host. One label is in a hero's handwriting.",
      "A traveller with headaches hasn't been seen since Tuesday. The warm pool's drain is chewed open."
    ],
    lairs: [
      "A steaming pool with a cracked skull on the rim, cracked from inside.",
      "A slaad nest of empty skulls and one tadpole too young to leave.",
      "A chalkboard of hosts and days remaining, most crossed out.",
      "A warm overflow chamber under the baths, fish bones stacked by size."
    ],
    rumours: [
      { true: true, text: "It wants to hide, not fight. Corner it or lose it." },
      { true: true, text: "The slaad that laid it is still around." },
      { true: false, text: "Kill the tadpole and the host's madness lifts." },
      { true: false, text: "Through an arch, away from Terrache, they die." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Terrache arches near water, or Stages 9-10 for one that came through in a host. A hunt with a clock.",
      patronHook: "A Temple priest's patient carries an embryo with three days left. The cure is in Terrache, and so is the slaad.",
      cityName: "\"Headaches\": Baths attendants report any Terrache arrival who complains of one."
    }
  },
];
