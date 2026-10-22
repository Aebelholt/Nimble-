// Core Bestiary: stat blocks are the Nimble GM Guide's, unchanged. Everything else is this book's.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);
const SRC = "Nimble GM Guide, Bestiary: ";

module.exports = [
  {
    world: "Core Bestiary",
    tier: "Minion / Standard",
    role: "Skirmisher",
    name: "Kobolds",
    description: "Knee-high dragonlings in scavenged scale, each certain they are the last of " +
      "a great army. When a friend falls they shout and stab whoever did it, then go back " +
      "to arguing about whose turn it is to hold the torch.",

    roster: [
      { name: "Kobold Minion", level: "Min", hp: "Minion", speed: "6",
        actions: [A("Stab", "1 Action", "1d4", "Follows the GM Guide minion rules.")] },
      { name: "Kobold", level: "1/3", hp: 10,
        actions: [
          P("Nooooo!", "When an ally within Reach 2 dies, attack for free."),
          A("Stab", "1 Action", "1d4", "Or Sling, Range 8. Can't crit."),
        ] },
      { name: "Kobold Sneak", level: 1, hp: 20,
        actions: [
          P("Sneaky!", "You may move before using Nooooo!"),
          P("Nooooo!", "When an ally within Reach 2 dies, attack for free."),
          A("Stab", "1 Action", "2d4", "Or Sling, Range 8."),
        ] },
      { name: "Kobold Clanger", level: 2, hp: 16, armor: "Medium",
        actions: [
          P("CLANG!", "Allies who hear your clanging roll 1 additional die whenever they attack."),
          P("Preoccupied noisemaker", "Doesn't attack."),
        ] },
      { name: "Kobold Trapper", level: 2, hp: 30,
        actions: [
          P("Nooooo!", "When an ally within Reach 2 dies, attack for free."),
          A("Throw scorpion", "1 Action, Range 8", "2d4+2", ""),
          P("Trap!", "When an enemy moves adjacent to you or an ally, they trigger one of your traps (1/encounter each). " +
            "BEEES!: 4d4 damage that doesn't miss, half to all adjacent creatures. HIDDEN NET!: Restrained, escape DC 10."),
        ] },
      { name: "Kobold Denwarden", level: 3, hp: 30, armor: "Medium",
        actions: [
          P("Nooooo!", "When an ally within Reach 2 dies, attack for free."),
          P("Hoooold!", "Adjacent allies gain Medium Armor."),
          A("Stab", "1 Action, ×2", "2d4+2", "Or Sling, Range 8."),
        ] },
    ],
    groups: "Level 1: 2-3 Kobolds. Level 2: 2 Kobolds + 1 Sneak + 1 Minion. Level 3: 2 Sneaks + 2 Minions. " +
      "Level 4: 2 Kobolds + 1 Denwarden + 1 Minion.",
    stats: { stage: "7-10" },

    tactics: "Wants the den kept and the shinies safe. Goes for whoever killed a kobold, then " +
      "whoever carries the shiniest thing. Breaks off when the Denwarden falls, into holes too small to follow.",
    sources: SRC + "Kobolds.",

    designNote:
      "Printed GM Guide blocks, unchanged. The whole family runs on Nooooo!: every kill is a free " +
      "swing for the neighbour, so the question is who dies first and where the rest are standing. Kill " +
      "the Clanger and the Denwarden early, then the line. The GM Guide's warning applies in full: " +
      "outnumbering the party more than three to one makes even weak monsters lethal. The Lower " +
      "Reaches is kobold ground, and the Black Hand pays them in shinies.",

    traits: [
      "One wears a Golden Knight's dented helmet as a hat and will not hear that it is a hat.",
      "Soot-and-spit clan marks on its scales, redone every morning, slightly different each time.",
      "It leads a pet rat on a string. The rat is better armed.",
      "Speaks Common in a perfect Villas drawl, copied from a noble it once robbed, and only when angry.",
      "A necklace of teeth, none of them kobold, and one of them far too large for anything in the city.",
      "Limps from a trap it set itself, and tells everyone about it."
    ],
    encounters: [
      "A kobold blocks the way with a hand-painted TOLL sign nailed to something that is not a door: one shiny each, or go around.",
      "Three kobolds push a cart of stolen goods and argue over whose turn it is to steer. One crate carries a hero's holding mark.",
      "A single kobold runs up, begs asylum from its own clan, and offers a map for a blanket. Eleven more are behind it, annoyed.",
      "A kobold sells a secret: the safe way past 'the thing in the dark'. The route is true. The price is a favour, and it will collect."
    ],
    lairs: [
      "Every doorway has an ankle-high trip-wire and a Draconic warning sign the kobolds consider polite. Behind the third door hangs a net of rusted bells.",
      "Walls plastered with stolen paper: tavern bills, wanted notices, love letters, a University syllabus. The throne is a coal scuttle.",
      "A floor of glued shinies in patterns that mean something to kobolds. A clue to who stole what, if you can read the pattern.",
      "A tunnel mouth rigged to collapse, a bucket of scorpions on a pulley above. Someone already tripped it. The scorpions are loose."
    ],
    rumours: [
      { true: true, text: "When one falls, a neighbour gets a free hit. Fight them in a line so only one can reach you." },
      { true: true, text: "The little one banging the pot makes every one of them hit harder. Silence it first." },
      { true: false, text: "They run when you draw steel. They're cowards, every one." },
      { true: false, text: "They only trap the back doors. The front is always clear." }
    ],
    gigFit: {
      verb: "Steal / Stop",
      butPlus: "Monster result at Stages 7-10, and any 'kobolds' band at any Stage. Best as the thieves behind the episode's missing object.",
      patronHook: "A Black Hand fixer's shipment went missing in the Lower Reaches. He wants one crate back, unopened, and does not care how many kobolds it takes.",
      cityName: "\"Shiny-biters\": Lower Reaches name, because they bite anything that glitters. Hands in your pockets down there."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Minion / Standard",
    role: "Skirmisher",
    name: "Bandits",
    description: "Hard men and women with a knife and a bad month. They want your money, " +
      "and every one of them panics when it is their own blood on the ground.",

    roster: [
      { name: "Bandit Minion", level: "Min", hp: "Minion",
        actions: [
          P("Inept", "Your attacks miss on 8."),
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("I'll cut ya!", "1 Action", "1d8", "Follows the GM Guide minion rules."),
        ] },
      { name: "Bandit", level: "1/3", hp: 10,
        actions: [
          P("Inept", "Your attacks miss on 8."),
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("Hand it over!", "1 Action", "1d8", "Or Shoot, Range 8."),
        ] },
      { name: "Bandit Hunter", level: 1, hp: 17,
        actions: [
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("Battlebow", "1 Action, Range 12", "2d8", ""),
        ] },
      { name: "Bandit Bruiser", level: 2, hp: 27,
        actions: [
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("And STAY down!", "1 Action", "2d8", "On damage, Prone."),
        ] },
      { name: "Bandit Assassin", level: 2, hp: 20,
        actions: [
          P("Sneak", "You are Invisible until you attack."),
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("Poison blade", "1 Action, ×2", "1d8", "On damage, Dazed."),
        ] },
      { name: "Bandit Mage", level: 4, hp: 40,
        actions: [
          P("Spark step", "When damaged, teleport 4."),
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("Arc lightning", "1 Action, Range 12", "3d8", "Also hits the next closest creature, friend or foe. \"Out of the way!\""),
        ] },
      { name: "Bandit Captain", level: 4, hp: 35, armor: "Medium",
        actions: [
          P("Strict training", "Your allies are NOT Inept."),
          P("Mortal panic", "Attacks miss you on a 2 or less."),
          A("Slice", "1 Action, ×3", "1d8", "Or Shoot, Range 8."),
        ] },
    ],
    stats: { stage: "1-8" },

    tactics: "Wants the purse, not the fight. Hunters shoot the one who looks richest, a Bruiser puts the " +
      "toughest hero on the ground, and everyone breaks off the moment the Captain falls or the " +
      "purse is in hand.",
    sources: SRC + "Bandits.",

    designNote:
      "Printed GM Guide blocks, unchanged. Mortal Panic is the point: bandits are fragile (a 2 or less " +
      "misses them) and dangerous only in numbers, so the Captain's Strict Training is the real stat to watch. " +
      "In Sejr they are the street-level Black Hand: cut-outs with knives, deniable. They work as the " +
      "enforcement end of any episode where someone wants something taken without a name attached.",

    traits: [
      "Wears a stolen Golden Council badge pinned upside down, so it looks like a mistake and not a lie.",
      "Counts coins with a thumb, out loud, in Lower Reaches slang. The numbers are wrong.",
      "A healed brand on the wrist: three short lines, a Black Hand debt mark.",
      "Polite, almost sorry. Apologises for every cut.",
      "Missing two fingers on the sword hand and fights better for it, out of spite.",
      "Carries a child's wooden horse in a pocket, and will not discuss it."
    ],
    encounters: [
      "Four bandits want a toll and have already agreed what is polite. If the party pays, they are escorted out, and the bandits visit the same hero again next week.",
      "A bandit crew is robbing someone else, a frightened merchant, and has not noticed the party. The merchant has noticed them.",
      "Bandits offer to sell the party back something taken from them last night, at two-thirds the price. The thing is real. They know where the rest is.",
      "A wounded bandit lies on the ground and begs. The others are close and will not leave their friend. They will bargain, and they are scared."
    ],
    lairs: [
      "A shuttered inn with the sign turned face down. Every room has a loaded crossbow aimed at the door and a note, in a woman's neat hand, asking guests to knock.",
      "A rented warehouse stacked with other people's crates, each tagged with a coloured thread: whose they were, what they paid.",
      "A cellar with a ledger and a very patient bookkeeper. The bandits report to her, not to the Captain.",
      "A crowded tenement floor where bandits live as neighbours, with children and laundry, and no one will ever testify."
    ],
    rumours: [
      { true: true, text: "They panic when bloodied. Hit one hard and the rest lose their nerve." },
      { true: true, text: "Hurt the Captain first. Without him, the hired knives stop knowing how to fight." },
      { true: false, text: "Bandits never attack a group of five or more. Walk in numbers and they let you pass." },
      { true: false, text: "The Black Hand protects its own. Name a Black Hand fixer and they will put down their blades." }
    ],
    gigFit: {
      verb: "Escort / Steal",
      butPlus: "Faction result at Stages 1-8, with the Black Hand as patron or enemy. Good first fight for new heroes and a clean way to introduce a fixer.",
      patronHook: "A merchant of the Villas of the Second Rise needs a cart moved through the Lower Reaches without a Black Hand toll. The toll is the bandits.",
      cityName: "\"Cut-purses\" in the Market Square; \"Hand men\" in the Lower Reaches, because everything they do has the Hand's permission."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Minion / Standard",
    role: "Skirmisher",
    name: "Goblins",
    description: "Green, cunning, and thriving on the edge of chaos. They mock you mercilessly " +
      "when they can, and every hit that misses is a joke at your expense.",

    roster: [
      { name: "Goblin Minion", level: "Min", hp: "Minion",
        actions: [
          P("Haha, missed me!", "Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense)."),
          A("Stab", "1 Action", "1d6", "Follows the GM Guide minion rules."),
        ] },
      { name: "Goblin", level: "1/2", hp: 15,
        actions: [
          P("Haha, didn't hurt!", "Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense)."),
          A("Stab", "1 Action", "1d6", "Or Shoot, Range 8. Can't crit."),
        ] },
      { name: "Bugbear", level: 2, hp: 30,
        actions: [
          A("Bash", "1 Action, Reach 2", "3d6", "On damage, the target's next attack is disadvantaged."),
          A("Javelin", "1 Action, Range 8", "2d6", "Use instead of Bash."),
        ] },
      { name: "Goblin Ratrider", level: 2, hp: 30, speed: "10",
        actions: [
          P("Haha, nice try!", "Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense)."),
          P("CHAAARGE!", "If you move at least 4 spaces in a straight line, your next attack is advantaged."),
          A("Bite & stab", "1 Action, ×2", "1d6", "On crit, Prone."),
        ] },
      { name: "Goblin Taskmaster", level: 2, hp: 30,
        actions: [
          P("Gotta do better than that!", "Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense)."),
          P("Meat shield", "Can force other Goblins to Interpose for you."),
          A("Stab", "1 Action", "1d6", "Or Shoot, Range 8."),
          A("Get in here!", "Free, after Stab", "—", "Call a Goblin Minion to the fight."),
        ] },
    ],
    groups: "Level 1: 2 Goblins or 3 Minions. Level 2: 3 Goblins or 1 Bugbear. Level 3: 2 Goblins + 1 Bugbear or Taskmaster. " +
      "Level 4: 2 Goblins + 1 Taskmaster. Level 5: 1 Goblin + 1 Ratrider + 1 Bugbear. Level 6: 1 Bugbear + 1 Ratrider + 1 Taskmaster.",
    stats: { stage: "7-10, 13+" },

    tactics: "Wants loot, a laugh, and never to be the one in front. Taunts the hero who just missed, throws minions at " +
      "the strongest, and charges the backline with Ratriders. Breaks off the moment the Taskmaster dies.",
    sources: SRC + "Goblins.",

    designNote:
      "Printed GM Guide blocks, unchanged. The family's one rule is that surviving an attack hurts you: " +
      "every miss costs a hero 2 psychic damage that ignores Defense. A party that spreads its attacks " +
      "across five goblins takes ten damage a round for free, so focus fire and block the retaliation. " +
      "The Taskmaster feeds minions into the fight, so killing it first is usually right. In Sejr they are " +
      "Lower Reaches and cistern vermin with a grudge and a sense of humour.",

    traits: [
      "Wears one of the hero's earlier mistakes as a trophy: a button, a bootlace, a ribbon.",
      "Sings a taunt in rhyming Common, and the rhyme gets worse as the fight goes on.",
      "A pet slug on its shoulder, which it feeds from its own mouth.",
      "Painted its face with the clan's blood-red stripe and one extra stripe it made up.",
      "Carries a jar of its own teeth and offers to trade them.",
      "It is the smallest, so the others have given it the best hat."
    ],
    encounters: [
      "A goblin hails the party cheerfully and offers a 'friendly bet': one hero against one goblin, loser gives up a boot. The rest of the goblins are watching, and have bet too.",
      "Goblins have captured something they cannot identify and are trying to sell it back to its owner, who is the party's patron.",
      "A goblin Taskmaster is bullying a gang of minions into carrying something far too heavy. It would pay anyone to take over.",
      "Three goblins ride giant rats straight at the party, shouting a war cry, and one of them is waving a flag that reads PARLEY."
    ],
    lairs: [
      "A den with a floor made of every mean thing: tacks, broken glass, a bucket of slime tied to a door by string. The goblins use a hidden side path, and mock anyone who doesn't.",
      "A rat-run warren with a throne of stacked crates, a crown of bottle caps, and a bulletin board of bets: who dies first, who runs, who cries.",
      "A kitchen of improvised horrors, a cauldron of unidentifiable stew, and a captive cook with a very tired expression.",
      "A cave with a trapdoor in the ceiling, stuffed with goblin minions waiting for someone to look up."
    ],
    rumours: [
      { true: true, text: "Every miss costs you. Don't spread your attacks across a gang of them. Pick one and finish it." },
      { true: true, text: "Kill the Taskmaster and the rest lose their stomach. It's the one making them stay." },
      { true: false, text: "Goblins can't stand daylight. Drag the fight outside and they fold." },
      { true: false, text: "A goblin that laughs at you is bluffing. They always run when it matters." }
    ],
    gigFit: {
      verb: "Steal / Find",
      butPlus: "Monster result at Stages 7-10, and any 'goblins' band at any Stage. Strong with a Taunt or a prank: an episode where the goblins want to humiliate someone.",
      patronHook: "A Golden Council member's heirloom was taken by goblins and has since been 'improved'. She wants it back, and does not want to know how.",
      cityName: "\"Little jokes\": Lower Reaches name, for the way goblin kills always end with a punchline."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Controller",
    name: "Snakemen",
    description: "Scaled, upright, hissing, and cold-eyed, with a flicker of tongue before every " +
      "sentence. They coil around a foe's arm before the foe knows they have been touched.",

    roster: [
      { name: "Snakeman", level: 1, hp: 21,
        actions: [
          P("Coiling strike", "On melee crit, Grapple (escape DC 10)."),
          A("Slash", "1 Action", "2d6", "Or Spit, Range 8."),
        ] },
      { name: "Cobra Captain", level: 4, hp: 52,
        actions: [
          A("Coiling command", "Free, 1/round", "—", "An ally Grapples an enemy adjacent to it (escape DC 10)."),
          A("Slash", "1 Action, ×2", "2d6", "Or Spit, Range 8."),
        ] },
      { name: "Giant Cobra", level: 8, hp: 84, armor: "Medium",
        actions: [
          P("Coiling strike", "On melee crit, Grapple (escape DC 10)."),
          A("Crush", "1 Action", "2d6+20", "Advantage against smaller creatures."),
        ] },
    ],
    stats: { stage: "9-12, 13+" },

    tactics: "Wants prey held still. The Captain orders a Grapple on the hero standing alone, others slash the grappled, " +
      "and the Giant Cobra is held back for the biggest target. Breaks off when the Captain is Bloodied.",
    sources: SRC + "Snakemen.",

    designNote:
      "Printed GM Guide blocks, unchanged. Grapple is the whole kit: Coiling Strike on a crit, Coiling " +
      "Command on demand, and a Giant Cobra that crushes anything smaller. Heroes still act while " +
      "Grappled, so the answer is mobility or fire. Pair them with the Serpent Cult of Vithra, which " +
      "treats them as holy. Sunken Revvia and the Lost Cisterns are snake country.",

    traits: [
      "Its scales are the dull green of old copper, patched with something paler where it shed badly.",
      "It sheds mid-conversation, and apologises.",
      "A dagger tied to its tail, for reasons it will explain at length.",
      "It lowers its eyes when you bow. It does not bow back.",
      "A gold ring through its nostril slit, stamped with a Council seal. Taken from a corpse.",
      "It hisses a prayer to Vithra and the hiss is very faintly in time with a heartbeat."
    ],
    encounters: [
      "A snakeman asks the party to take a message to another snakeman, in the next district. The note says nothing. Delivering it will start a war.",
      "A snakeman patrol is escorting a cage of silent, grey-skinned prisoners. The prisoners are whispering the same word.",
      "A Cobra Captain offers a truce in return for one hero's name, written in blood. It will not say why.",
      "A snakeman is hurt, stranded, and begs for water. It is also a spy, and it knows the party will help."
    ],
    lairs: [
      "A hall of coiled stone pillars, each carved with snake bodies, and a floor of warm sand heated from below.",
      "A flooded vault where the snakemen sleep in tight, stacked rings, ten to a niche.",
      "A shrine to Vithra with an altar bowl of black, still-warm blood. A fresh drop falls from a ceiling hole every ten seconds.",
      "A bathhouse turned temple, all steam, and the water is the wrong colour."
    ],
    rumours: [
      { true: true, text: "A crit on you or the snakeman breaks its coil. So does being knocked apart." },
      { true: true, text: "The Cobra Captain is the one giving the orders. Take him out and the snakemen just hiss." },
      { true: false, text: "Snakemen are cold-blooded and slow in a chill. Bring ice and they sleep." },
      { true: false, text: "The Black Hand has a treaty with the snakemen. Show a Black Hand mark and they stand aside." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster result at Stages 9-12, and with any Serpent Cult of Vithra band. Good with Grapple-heavy fights in narrow spaces.",
      patronHook: "The Archkeepers have lost an arrival to a snakeman patrol. They want the arrival back, and a quiet word with whoever commands the patrol.",
      cityName: "\"Hissers\": cistern workers' name, said low, with a glance at the water."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Minion / Standard",
    role: "Brute",
    name: "Oozes",
    description: "Wet, patient, and hungry, a mass of living acid that flows under doors and " +
      "drops from ceilings. A cut makes it more, and whatever it eats, it keeps eating.",

    roster: [
      { name: "Ooze Minion", level: "Min", hp: "Minion",
        actions: [A("Acidic touch", "1 Action", "1d6", "Digested 0. Follows the GM Guide minion rules.")] },
      { name: "Gray Ooze", level: 1, hp: 18,
        actions: [
          P("Goopy 2", "1/round. When crit or dealt slashing damage: summon 2 ooze minions."),
          A("Acidic touch", "1 Action", "1d6", "Digested. Deal an additional 2 damage for each time the target has been Digested already this encounter."),
        ] },
      { name: "Ochre Jelly", level: 4, hp: 46,
        actions: [
          P("Goopy 3", "1/round. When crit or dealt slashing damage: summon 3 ooze minions."),
          A("Acidic touch", "1 Action", "1d6+6", "Digested. Deal an additional 3 damage for each time the target has been Digested already this encounter."),
        ] },
      { name: "Black Pudding", level: 8, hp: 94,
        actions: [
          P("Goopy 5", "1/round. When crit or dealt slashing damage: summon 5 ooze minions."),
          A("Acidic touch", "1 Action, ×2, Reach 2", "1d6+6", "Digested. Deal an additional 5 damage for each time the target has been Digested already this encounter."),
        ] },
      { name: "Elder Ooze", level: 12, hp: 148,
        actions: [
          P("Goopy 6", "1/round. When crit or dealt slashing damage: summon 6 ooze minions."),
          A("Acidic touch", "1 Action, ×3, Reach 3", "1d6+6", "Digested. Deal an additional 6 damage for each time the target has been Digested already this encounter."),
        ] },
    ],
    stats: { stage: "9-12, 13+" },

    tactics: "Wants whatever moves. Flows toward the nearest warm body and stays on it, Digesting the same hero until they leave. " +
      "Never breaks off. It is hungry the way a river is wet.",
    sources: SRC + "Dungeon Denizens, oozes. The Deathreach Ochre Jelly is a separate 4e Elite.",

    designNote:
      "Printed GM Guide blocks, unchanged. Slashing and crits feed the oozes, so the answer is blunt, fire, " +
      "cold, or radiant damage and spreading out so Digested stops stacking on one hero. " +
      "This is the Lower Reaches and Lost Cisterns default for an ooze; the Deathreach Ochre Jelly is the " +
      "4e Elite built for a set piece. Use the core block for any ordinary drain, and the Elite " +
      "when the jelly is the whole room.",

    traits: [
      "It smells of pennies and old milk.",
      "It carries a rusted helmet inside it, and the helmet drifts, like a fish.",
      "A glimmer of a coin inside, circling, never dissolving.",
      "Its surface is covered in a faint film that ripples toward the nearest speaker.",
      "It leaves a polished trail, as if someone has just cleaned.",
      "It is warm. Steam rises. Something deeper in it is moving."
    ],
    encounters: [
      "A drain cover starts to rattle. The party is the only thing in the room that is moving.",
      "A merchant begs the party to clear his cellar of 'pests'. He has not been down in days. The rats have stopped squeaking.",
      "The party's fight is going well, and the ooze they have been cutting has become six.",
      "An ooze is blocking a corridor, and a hero's pet, ally, or hired porter is stuck in it, alive."
    ],
    lairs: [
      "A cellar room polished clean, with a line of hardened bone dust around the walls like a high-tide mark.",
      "A cistern basin whose water is unnaturally clear. A coin glints at the bottom. The coin is moving.",
      "A kitchen sump where the grease has pooled for years, a blanket of slick, and a candle that has burned for months in the middle of it.",
      "A sealed vault with an acid-eaten door and a thin line of scorched metal leading out. Whatever was inside left in a hurry."
    ],
    rumours: [
      { true: true, text: "Don't cut it. Slashing only makes more. Clubs, fire, frost, or radiance." },
      { true: true, text: "The more times it digests the same man, the worse it gets. Spread out." },
      { true: false, text: "Salt kills oozes. Throw a handful and they shrivel." },
      { true: false, text: "Oozes are blind. Stand still and they will flow around you." }
    ],
    gigFit: {
      verb: "Stop / Bury",
      butPlus: "Monster result at Stages 9-12 for the smaller oozes, and 13+ for the Black Pudding and Elder Ooze. Good as a hazard room that has an agenda.",
      patronHook: "The Golden Council wants a cistern sluice cleared before the flood season. Four workers went in and one came out, and he is not talking.",
      cityName: "\"Mustard\": Lost Cisterns workers' name for the yellow ones. \"There's mustard in the drain\" means leave your tools and go."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Lurker",
    name: "Mimics",
    description: "A cup that is too heavy. A chair with a patient look. A door that is warm to " +
      "touch. Mimics wait until the party has stopped looking, then move first.",

    shared: [
      P("Ambusher", "Mimics always start combat first and enemies roll Initiative with disadvantage."),
      P("Sticky", "Mimic hits also Grapple, and can Grapple any number of creatures. When crit: release 1 creature (attacker's choice)."),
    ],
    roster: [
      { name: "Tiny Mimic", level: 1, hp: 22, note: "a cup, shoe, apple or potion",
        actions: [
          A("Pseudopod", "1 Action", "2d4", "Escape DC 9."),
          A("Bite", "1 Action, vs a Grappled creature", "2d4+5", "Use instead of Pseudopod."),
        ] },
      { name: "Small Mimic", level: 2, hp: 30, note: "a pack, shield, weapon or chair",
        actions: [
          A("Pseudopod", "1 Action", "2d6", "Escape DC 11."),
          A("Bite", "1 Action, vs a Grappled creature", "2d6+10", "Use instead of Pseudopod."),
        ] },
      { name: "Medium Mimic", level: 6, hp: 64, note: "a table, treasure chest, barrel or door",
        actions: [
          A("Pseudopod", "1 Action", "2d8+8", "Escape DC 13."),
          A("Bite", "1 Action, vs a Grappled creature", "2d8+20", "Use instead of Pseudopod."),
        ] },
    ],
    stats: { stage: "7-12, 13+" },

    tactics: "Wants a meal that stops moving. Opens with Pseudopod on whoever touched it first, then Bites whoever is stuck. " +
      "Never breaks off. It cannot, and has nowhere to go.",
    sources: SRC + "Dungeon Denizens, mimics.",

    designNote:
      "Printed GM Guide blocks, unchanged. A mimic is a trap with a hunger: it always acts first, " +
      "and its Grapple stacks across the whole party. Heroes lose initiative and mobility but " +
      "never their turn, and a crit frees one creature. The right answer is to find the right item " +
      "in the room first, which makes the mimic a Find clock as much as a fight. A mimic needs a " +
      "room full of other furniture, so use it in rooms with something to take.",

    traits: [
      "It is exactly the shape of the thing, down to the scratch someone carved on the lid.",
      "Faintly warm. In a cold room, a cold object, and it is not cold.",
      "Its 'lock' is shaped like a mouth. The mouth is closed, and it is breathing.",
      "A tiny trickle of slime at the corner, drying at the edges.",
      "It has a coin stuck to it, and the coin is the first thing you notice.",
      "It is a chair, and a hero's own, from their holding, and impossible."
    ],
    encounters: [
      "The party finds the treasure they came for, in plain sight, in an empty room. It is exactly where the map said.",
      "A tavern keeper insists a particular chair is cursed and nobody should sit in it. The tavern is full. The chair is empty.",
      "A hero's pack is lighter than it was, and a pouch is missing. Something in the room has been eating.",
      "A frightened child runs from a closet that is also a mouth."
    ],
    lairs: [
      "A treasure room with a single, too-perfect chest, and the room's dust is undisturbed everywhere except a groove leading to the wall.",
      "A library with a table of open books, and a reading chair worn smooth, and everything else looted.",
      "A cellar full of identical barrels. One is warm, and one has a bite taken out of it.",
      "A hallway of doors. Every one is real. All but one lead somewhere. The last one leads into something that is not a room."
    ],
    rumours: [
      { true: true, text: "Poke anything that looks too good with a ten-foot pole before you touch it." },
      { true: true, text: "A crit on a mimic pries one creature loose, the attacker's choice." },
      { true: false, text: "Mimics only pretend to be chests. Anything else is just furniture." },
      { true: false, text: "A mimic can only hold one creature at a time. Send the sturdiest in first." }
    ],
    gigFit: {
      verb: "Find / Steal",
      butPlus: "Monster result at Stages 7-12, in any room with furniture. Best when the episode's goal is an object, so the mimic is the object.",
      patronHook: "A University treasurer wants a chest recovered from a Lower Reaches vault. Three crews have gone for it. The chest is still there.",
      cityName: "\"Furniture\": Lower Reaches word for any trap that looks like an opportunity."
    }
  },
];
