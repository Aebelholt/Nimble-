// Detailing index: one gloss per printed move whose name doesn't say what physically happens.
// Glosses describe the fiction and range; they add no rules. `ruling` marks a suggested reading
// where the printed line is ambiguous. Core text itself stays as printed.
const g = (family, move, gloss, ruling) => ({ family, move, gloss, ruling });

module.exports = [
  g("Kobolds", "Nooooo!", "Grief-rage. When a friend within Reach 2 dies, a kobold strikes back at once, with no action spent."),
  g("Kobolds", "Sneaky!", "The Sneak can step before its free Nooooo! strike, to reach whoever did it."),
  g("Kobolds", "CLANG!", "A pot-and-ladle racket. Every ally who hears it rolls one extra damage die."),
  g("Kobolds", "Preoccupied noisemaker", "Too busy banging to fight. Kill it first and the extra dice stop."),
  g("Kobolds", "Throw scorpion", "A live scorpion lobbed from a jar. Ranged, 8 spaces."),
  g("Kobolds", "Trap!", "Pre-set traps by the den: a hidden beehive or a dropping net, each once per encounter."),
  g("Kobolds", "Hoooold!", "The Denwarden bellows and locks shields: adjacent kobolds count as Medium Armor."),

  g("Bandits", "Inept", "Clumsy hands: a top roll on their die misses instead of landing a lucky blow.",
    "Read 'miss on 8' as: a Primary Die of 8 misses rather than crits."),
  g("Bandits", "Mortal panic", "They flinch from steel. Attacks against them miss on a 2 as well as a 1."),
  g("Bandits", "I'll cut ya!", "A knife slash, shouted. Melee."),
  g("Bandits", "Hand it over!", "A weapon swing made while demanding the purse. Melee; 'or Shoot' is a ranged shot, 8 spaces."),
  g("Bandits", "And STAY down!", "A cudgel blow to put a hero on the ground. Melee."),
  g("Bandits", "Spark step", "The mage blinks 4 spaces away in a crackle whenever it is hurt."),
  g("Bandits", "Arc lightning", "A ranged bolt that jumps to the next nearest creature, ally or not."),
  g("Bandits", "Strict training", "The Captain's drilling: allies around it lose Inept and fight properly."),

  g("Goblins", "Haha, missed me!", "Mockery that stings: surviving a hit or a miss lets it deal 2 psychic back. Same for the other 'Haha' lines and the Taskmaster's 'Gotta do better than that!'."),
  g("Goblins", "CHAAARGE!", "The rat sprints 4+ spaces in a straight line; its next attack has advantage."),
  g("Goblins", "Bite & stab", "The rat bites, the rider stabs: two melee attacks."),
  g("Goblins", "Meat shield", "The Taskmaster shoves another goblin into the way of an attack."),
  g("Goblins", "Get in here!", "The Taskmaster yells for reinforcements: one goblin minion joins the fight."),
  g("Goblins", "Bash", "A two-handed club swing with Reach 2 that leaves the target reeling."),

  g("Snakemen", "Coiling strike", "On a crit the snakeman wraps its tail round the target: Grappled."),
  g("Snakemen", "Coiling command", "The Captain hisses an order; an ally wraps an adjacent enemy."),
  g("Snakemen", "Slash", "A curved blade, melee. 'Or Spit' is spat venom, ranged, 8 spaces."),

  g("Oozes", "Goopy", "Cutting or critting an ooze splashes off minions: the number after Goopy, once a round."),
  g("Oozes", "Acidic touch", "A pseudopod of acid. Each Digested on the same hero this encounter adds the listed extra damage."),

  g("Mimics", "Ambusher", "It was the furniture. It always acts first, and heroes roll Initiative at disadvantage."),
  g("Mimics", "Sticky", "Glue-skin: every hit also Grapples, and it can hold any number. A crit pries one free."),

  g("Gnolls and Worgs", "Bloodthirsty", "They smell blood: advantage against anyone already damaged."),
  g("Gnolls and Worgs", "Ravage", "Claws and teeth. Melee. 'Or Shoot' is a bow, 10 spaces."),
  g("Gnolls and Worgs", "Bark orders", "The Packleader yips; two allies move before it attacks."),
  g("Gnolls and Worgs", "Rip apart", "The worg's jaws close and hold: Grappled. Savage then crits it on 5+."),

  g("Skyhunters", "Burst lightning", "The drake explodes in a crackle when it dies, hitting everything adjacent."),
  g("Skyhunters", "Fly & drop", "The griffon climbs 12 spaces with its catch and lets go."),
  g("Skyhunters", "Pluck up", "Talons reach 4 spaces and seize up to two creatures."),
  g("Skyhunters", "Crush & drop", "The roc climbs 20 spaces, squeezes what it holds, then drops it."),

  g("Hill Brutes", "Burst forth!", "The bulette erupts from the ground at the start of the fight, at the heaviest hero."),
  g("Hill Brutes", "Drag below", "It pulls a held hero underground and burrows away, leaving a tunnel."),
  g("Hill Brutes", "Punt", "A giant's kick. Melee, Reach 2, knockback by the Primary Die."),
  g("Hill Brutes", "Boulder!", "A thrown rock, ranged 12, landing on a 2 by 2 area."),
  g("Hill Brutes", "Claws", "The troll's raking swipe, Reach 2, that knocks a hero down for the bite.",
    "'Choose twice' means two attacks a turn, from Claws and Bite."),

  g("Stirges", "Evasive flier", "Erratic flight: attacks against it are at disadvantage."),
  g("Stirges", "Latch on", "Proboscis in, it rides the victim: its attacks can't miss or be Defended."),

  g("Rank-and-File Dead", "Unliving, undying", "The first time it falls it stands back up at 1 HP."),
  g("Rank-and-File Dead", "Just bones!", "Arrows and spears pass between the ribs: resistant to piercing, except crits."),
  g("Rank-and-File Dead", "Grave arrow", "A bow, ranged 8."),
  g("Rank-and-File Dead", "Crunch", "A zombie bite that holds on: Grappled."),

  g("Restless Spirits", "Corrupt", "Radiant hurts it badly.",
    "Read as: radiant damage to it gives the attacker's next attack advantage."),
  g("Restless Spirits", "Deathly touch", "A cold hand through the chest.",
    "Read as: the damaged hero drops to 0 HP and is Dying, not dead."),
  g("Restless Spirits", "Soul rend", "A ranged tearing at the spirit, 8 spaces, that leaves a Wound."),

  g("Mummies", "Cursed slam", "A wrapped fist. Melee; on damage, Dazed."),
  g("Mummies", "Scarab swarm", "The Lord spills six scarab minions within 6, then attacks.",
    "Scarab minions use a d6 attack die, per 'size d6'."),

  g("Briarbanes", "Thorn seed", "A spat thorn, ranged 6."),
  g("Briarbanes", "Caustic eruption", "The pod bursts in acid when it dies, hitting everything adjacent."),
  g("Briarbanes", "Peeling bark", "Each hit strips a layer: Heavy, then Medium, then no armor."),
  g("Briarbanes", "Tangle", "A bramble lash, Reach 6, that holds. Fire or slashing frees."),

  g("Forest Keepers", "Illusory aura", "It is hard to see where it is: Disadvantage 2, until damage reveals it for a turn."),
  g("Forest Keepers", "Stone gaze", "Meeting its eyes stiffens limbs: one fewer action each stack, 10 minutes."),
  g("Forest Keepers", "Envenom", "A venomous bite, d44: two d4s read as tens and ones."),
  g("Forest Keepers", "Beastshift", "The druid takes animal shape for a turn, then attacks twice."),
  g("Forest Keepers", "Hurricane", "A wind burst around the druid that throws enemies anywhere within 3."),

  g("Cultists", "Fanatical offering!", "The cultist cuts itself for its god; adjacent heroes despair."),
  g("Cultists", "Despair", "Disadvantage on everything, until the hero deals or heals any damage."),
  g("Cultists", "Whispers of madness", "Psychic whispers that hold a despairing hero in place. Radiant breaks it."),
  g("Cultists", "Feverish chant", "Allies who hear the Doomsayer take only 1 damage from each hit."),
  g("Cultists", "Ecstatic outburst", "A scream of joy that hurts every despairing hero."),

  g("Lesser Fiends", "Putrid cloud", "A stenchling bursts when it dies, hitting enemies within 2."),
  g("Lesser Fiends", "Spines", "Hitting it in melee costs the attacker 4 damage."),
  g("Lesser Fiends", "Doomclaw", "A pincer, Reach 2, that holds. Two holds need two escapes."),
  g("Lesser Fiends", "Tear asunder", "Only against a hero in both pincers: 50 damage, then a STR save if Dying."),

  g("Spiders", "Web garrote", "A silk wire round the throat: held and Silenced until escape."),
  g("Spiders", "Swarm", "The Nestweaver calls three spider minions, then webs or bites.",
    "Spider minions use a d8 attack die, per 'size d8'."),

  g("Deep Horrors", "Confounding pheromones", "A musk that scrambles thought: the GM spends one of the hero's actions."),
  g("Deep Horrors", "Mutual harm", "The cloaker wraps a hero round itself: it takes half of each hit, the hero the rest."),
  g("Deep Horrors", "Horrifying wail", "A shriek within 6 that sends the frightened running."),
  g("Deep Horrors", "Tremor sight", "It feels footsteps: advantage on whoever moved this round, disadvantage otherwise."),
];
