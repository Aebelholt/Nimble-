module.exports = [
  {
    world: "City of Arches",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Doppelganger Sneak",
    description: "A grey, hairless figure of no particular height, its face smooth as a thumb " +
      "until it decides to be someone. The hands give it away: the fingernails grow back " +
      "wrong every time, too long or too pale, and it keeps them in its sleeves.",

    stats: { hp: 41, armor: "None", speed: "6", stage: "1-6" },

    actions: [
      {
        name: "Wear a face",
        cost: "1 Action",
        damage: "—",
        effect: "The sneak becomes a copy of any humanoid it has seen this scene, clothes " +
          "included. Until it attacks, a hero who suspects it needs an Examination check " +
          "DC 12 to be sure. A wrong accusation in a crowd starts a fight with the crowd."
      },
      {
        name: "First cut",
        cost: "1 Action",
        damage: "2d8+4",
        effect: "Only against a creature that does not yet know what the sneak is. After " +
          "this the sneak drops the face and uses Knife."
      },
      {
        name: "Knife",
        cost: "1 Action, ×2",
        damage: "1d8+2",
        effect: "Advantage against a target adjacent to someone the sneak was copying " +
          "this scene: it knows which side they guard."
      },
      {
        name: "Swap",
        cost: "Reaction, 1/round",
        damage: "—",
        effect: "When attacked while adjacent to another Medium humanoid, the sneak swaps " +
          "places with them and takes that creature's face for free. The attack is " +
          "rerolled against the creature now standing in its old space."
      },
      {
        name: "Vanish into the crowd",
        cost: "Free, 1/encounter",
        damage: "—",
        effect: "When Bloodied in a space with three or more bystanders within 3 spaces, " +
          "the sneak moves 6 spaces and wears a new face. Heroes must spot it again."
      }
    ],

    designNote:
      "The sneak is a social lurker. Its armor is the crowd. It does little in an empty " +
      "alley and is a nightmare at the Market Square festival, where every face is a " +
      "possible target and every bystander is a shield. Swap makes the party pay for " +
      "swinging wildly, and Vanish turns a lost fight into a manhunt instead of a " +
      "corpse. Give the heroes a tell for this individual (roll on Traits) and let " +
      "Examination find it. Run it once as a duel of attention before it becomes a " +
      "duel of knives.",

    traits: [
      "Its copies always smell faintly of lamp oil, whoever they are meant to be.",
      "It blinks too rarely. Once you notice, you cannot stop counting.",
      "It wears a ring that belonged to its first victim and moves it to whatever " +
        "finger the new face would use.",
      "It hums a Vynan work song under its breath when it thinks no one is listening.",
      "Its copies are a few years too young. It learned the face from an old portrait.",
      "One copy it refuses to wear: a halfling woman. It flinches when it sees her " +
        "anywhere in the city."
    ],

    encounters: [
      "The patron who hired the party arrives at the meeting early, friendly, and " +
        "slightly too pleased with them. The real patron is twenty minutes behind, " +
        "and the sneak needs the party's arch key before then.",
      "A Golden Knight stops the party at the Arch of Kings and asks for papers. Two " +
        "streets back, the same Golden Knight is lying in a doorway in his smallclothes.",
      "During the festival, a hero sees themself across the square buying a pie. It " +
        "waves. It has their holding's door key on a string around its neck.",
      "The Archkeepers are processing a new arrival with no memory. The arrival is " +
        "real. The Archkeeper doing the processing is the sneak, and it is taking notes."
    ],

    lairs: [
      "A rented attic above a tailor in the Villas of the Second Rise, walls covered in " +
        "charcoal portraits with notes: 'limps left,' 'calls her brother Pip,' 'never in " +
        "before noon.' One portrait is of a hero.",
      "A bath cubicle at the Public Baths, locked from inside for a week. Folded inside: " +
        "six complete sets of clothes, each a different size, all pressed.",
      "A crypt on the Cliffs of the Dead where the sneak sleeps in an empty niche. The " +
        "niche's nameplate has been chiselled off and nothing put in its place.",
      "A dressing room under the Theater of Whispers. The mirror has been turned to the " +
        "wall. Behind it, scratched into the glass, is a list of names with lines " +
        "through all but two."
    ],

    rumours: [
      { true: true,
        text: "They can copy a face and a voice, but not a memory. Ask about something " +
          "only the real one would know, and watch the pause." },
      { true: true,
        text: "A cornered doppelganger runs for the thickest crowd it can find. Clear the " +
          "street and it has nowhere to go." },
      { true: false,
        text: "Silver burns them. Press a coin to someone's skin and a doppelganger will " +
          "scream." },
      { true: false,
        text: "They can only copy someone they've killed, so if your friend is alive and " +
          "accounted for, the person in front of you is safe." }
    ],

    gigFit: {
      verb: "Find / Stop",
      butPlus:
        "Strong But+ Monster result at Stages 1-6, best in the Market Square and the " +
          "Theater of Whispers. Pair it with a twist: the person the party is escorting " +
          "or protecting was replaced before the episode started.",
      patronHook:
        "Roselyn Zeshe has learned that someone sat in on a Golden Council audit who was " +
          "not on the list. She hires the party, quietly, to find out who walked out of " +
          "that room and why the minutes say they never spoke.",
      cityName:
        "\"Borrowers\": Lower Reaches slang, from the habit of borrowing a face and " +
          "returning the body. The Archkeepers call them \"unregistered arrivals\" and " +
          "refuse to say more."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Artillery",
    level: 5,
    name: "Flameskull",
    description: "A human skull wreathed in green fire, jaw clicking open and shut as it " +
      "drifts. Wax drips from candle stubs once pressed into the eye sockets, long " +
      "burned down. It still remembers the spells it died learning.",

    stats: { hp: 49, armor: "Medium", speed: "Fly 8 (hover)", stage: "4, 13+" },

    actions: [
      {
        name: "Fire ray",
        cost: "1 Action, ×2, Range 12",
        damage: "1d10+5",
        effect: "Fire. A target already Smoldering takes the ray with the Primary Die " +
          "rolled twice, keeping the higher."
      },
      {
        name: "Fireball",
        cost: "2 Actions, 1/encounter, Range 12",
        damage: "3d6+4",
        effect: "AoE, 2-space radius. DEX save DC 13 for half. Everyone in the area is " +
          "Smoldering. Loose papers, cloth and dry wood in the area catch."
      },
      {
        name: "Rise",
        cost: "Reaction, 1/round",
        damage: "—",
        effect: "When a creature moves adjacent to it, the flameskull flies up to 4 spaces " +
          "straight up or back. Under a ceiling lower than 3 spaces, it cannot use this."
      },
      {
        name: "Douse",
        cost: "Free",
        damage: "—",
        effect: "The flameskull puts out its own light. In darkness it is Invisible until " +
          "it attacks. Its next Fire ray after relighting has advantage."
      },
      {
        name: "Rejuvenation",
        cost: "Passive",
        damage: "—",
        effect: "Destroyed, it re-forms in an hour unless its fragments are doused in holy " +
          "water, sealed in lead, or buried in the tomb it was meant to guard."
      }
    ],

    designNote:
      "Artillery that refuses melee. The flameskull's whole game is staying out of reach, " +
      "so the terrain decides the fight: tall tombs and open ruins make it miserable, low " +
      "crypts and narrow stairs make it a skull in a box. Rise is the key ability. Give " +
      "the heroes a ceiling, a net, a bucket or a door, and reward them for using it. " +
      "Rejuvenation turns the kill into a Bury gig: the fight is over, the job is not.",

    traits: [
      "Its fire burns the green of old copper and smells of hot pennies.",
      "It talks to itself in a dead tongue, reciting a list. One word repeats: a name.",
      "A gold tooth in its upper jaw, the only thing in the room worth stealing.",
      "Its flames gutter toward running water, the way a compass needle swings north.",
      "A crack runs across the crown, packed with old wax. Someone tried to mend it.",
      "It laughs when hit, a dry clicking laugh, and it never stops counting the heroes."
    ],

    encounters: [
      "The party breaks the seal on a tomb on the Cliffs of the Dead. The flameskull " +
        "has been waiting two hundred years for exactly this and opens with Fireball on " +
        "the doorway.",
      "A Black Hand crew has trapped a flameskull in a lantern cage and is selling it " +
        "as a forge light. The cage has a crack. The buyer is a hero's neighbour.",
      "A Threskan tower stair, spiralling up into dark. The flameskull drifts down the " +
        "central shaft, dousing and relighting, firing between turns of the stair.",
      "Two flameskulls argue in the dead tongue over a sealed sarcophagus. They have " +
        "not noticed the party. One of them is losing."
    ],

    lairs: [
      "A wizard's tomb with a vaulted ceiling six spaces high. Scorch marks climb the " +
        "walls in a spiral and stop at a single niche where the skull rests between hunts.",
      "A library vault where every shelf is ash except one, untouched, holding the " +
        "spellbook it died reading.",
      "A family crypt where all the other skulls have been turned to face the wall. " +
        "The flameskull does not like being watched.",
      "A Threskan obsidian tower room with a lead-lined box on the floor, open, its lid " +
        "torn off from inside."
    ],

    rumours: [
      { true: true,
        text: "Get it under a low roof. It hates having nowhere to rise to, and it can " +
          "only throw its big fire once before it needs to rekindle." },
      { true: true,
        text: "You haven't killed one until the bone's in holy water or lead. Smash it " +
          "and walk away, and it's back by supper." },
      { true: false,
        text: "Water puts them out for good. A bucket over the head and you've a " +
          "skull for your mantel." },
      { true: false,
        text: "They're bound to their tomb and can't cross the threshold. Step outside " +
          "and you're safe." }
    ],

    gigFit: {
      verb: "Bury / Steal",
      butPlus:
        "But+ Monster at Stage 4 (Cliffs of the Dead) and any arch to Threska or Arkus. " +
          "It guards something specific: let the room it haunts be the room with the " +
          "goal in it.",
      patronHook:
        "The University wants a flameskull intact, fire and all, to study how a spell " +
          "outlives its caster. The Archkeepers want the same skull at rest. Both pay. " +
          "Only one can be satisfied.",
      cityName:
        "\"Tomb-candles\": grave diggers on the Cliffs of the Dead call them that, and " +
          "will not work a crypt where they see green light under the door."
    }
  },

  {
    world: "City of Arches",
    tier: "Standard",
    role: "Lurker",
    level: 3,
    name: "Cavern Choker",
    description: "A knot of grey limbs the size of a child, boneless as a rope, with " +
      "spiny hands on arms twice its body length. It folds itself into drainpipes and " +
      "breathes through its skin, so it never makes a sound.",

    stats: { hp: 27, armor: "Medium", speed: "4 (climb 6)", stage: "7-10" },

    actions: [
      {
        name: "Throat grab",
        cost: "1 Action, Reach 3",
        damage: "1d8+4",
        effect: "On hit: the target is Grappled (escape DC 12) and Silenced while the " +
          "grapple holds. The choker holds one creature at a time."
      },
      {
        name: "Hoist",
        cost: "Free, Grappled target only",
        damage: "—",
        effect: "The choker lifts its target 2 spaces up toward the grate, pipe or ledge " +
          "it occupies. Allies on the ground need Reach 2 or ranged to hit them. If the " +
          "grapple breaks while hoisted, the target falls and lands Prone."
      },
      {
        name: "Squeeze",
        cost: "1 Action, Grappled target only",
        damage: "1d6+6",
        effect: "Can't miss. Crits on a max Primary Die as normal."
      },
      {
        name: "Pipe run",
        cost: "Free, 1/round, starts its turn inside a pipe or crack",
        damage: "—",
        effect: "The choker lets go of any target and re-emerges from any opening within " +
          "10 spaces. Heroes hear only water."
      }
    ],

    designNote:
      "The choker is the crawler's little cousin with a different geometry. Where the " +
      "crawler drags you through a bottleneck, the choker lifts you out of the fight: " +
      "Silenced and hoisted, the hero is still acting, but a Mage can't cast and the " +
      "party has to climb, throw or shoot to help. It goes for spellcasters and " +
      "Songweavers first. Deploy it in sewers, cistern walkways, and any room with " +
      "grates in the ceiling. In a room with no openings it has nowhere to run and dies.",

    traits: [
      "Its skin is mottled with sewer moss, a perfect match for the old brick.",
      "It wears a Golden Knight's signet ring around one wrist like a bracelet.",
      "Its arms are scarred with rope burns. Someone once caught it and it got away.",
      "It clicks two fingers together, twice, before every grab. Once you know, you know.",
      "It hoards keys. Its pipe is full of them, none of which open anything nearby.",
      "This one is old and slow, its grip weak, but its arms reach a full space farther."
    ],

    encounters: [
      "A Lower Reaches courier went quiet in a sewer passage. His satchel hangs from " +
        "the ceiling grate, swinging. The message inside is the party's next job.",
      "The party wades a Lost Cisterns walkway with water to the knee. Every few spaces " +
        "a drain gapes overhead. One of them is breathing.",
      "A Black Hand fence uses a choker as a lock: anyone who opens his strongbox " +
        "without the click signal gets grabbed from the pipe above it.",
      "A choker has a Mage of Kartan hoisted and Silenced in a shaft, alive, and is " +
        "waiting to see who comes to help."
    ],

    lairs: [
      "A storm drain junction where five pipes meet. The floor is littered with " +
        "boots, but no bones. It eats somewhere else.",
      "The inside of a disused cistern pump, its iron casing pocked with holes the " +
        "choker uses as windows.",
      "A collapsed ceiling in the Lower Reaches, a crawlspace between two floors of " +
        "a tenement. The tenants above have been missing pets for a month.",
      "A walled-up alcove behind the Rusty Cutlass. The bricks were pushed out from " +
        "inside, one at a time, and stacked neatly."
    ],

    rumours: [
      { true: true,
        text: "They go for the ones who talk. Spellcasters, singers, the one giving " +
          "orders. Keep your mouths shut in the drains." },
      { true: true,
        text: "Block the pipes and they can't run. Stuff a drain with a cloak and the " +
          "thing has to fight you on your ground." },
      { true: false,
        text: "A choker can't hold on if you go limp. Play dead and it drops you." },
      { true: false,
        text: "They hunt in pairs, one to grab and one to bite. Kill the first and the " +
          "second is right behind you." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster at Stages 7-10. Best when the party is moving through a " +
          "sewer or cistern with someone they must keep alive: the choker picks the " +
          "escort first.",
      patronHook:
        "A Black Hand fixer needs a sealed package walked through the drains under " +
          "the Golden Council's toll post. The route is fast and unwatched, and three " +
          "couriers have vanished on it this month.",
      cityName:
        "\"Drainhands\": every child in the Lower Reaches has been told never to put " +
          "a hand in a drain, and every child knows why."
    }
  },
];
