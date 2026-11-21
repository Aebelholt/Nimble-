// Core Bestiary: stat numbers are the Nimble GM Guide's, ability wording reformatted. Everything else is this book's.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);
const SRC = "Nimble GM Guide, Bestiary: ";

module.exports = [
  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Skirmisher",
    name: "Gnolls and Worgs",
    description: "Hyena-headed raiders in hide and bone, laughing as they run, with a pack of " +
      "horse-sized wolves loping beside them. They like a wounded animal best.",

    roster: [
      { name: "Gnoll", level: 1, hp: 21,
        actions: [
          P("Bloodthirsty", "Advantage against damaged creatures."),
          A("Ravage", "1 Action", "1d8+2", ""),
          A("Shoot", "1 Action, Range 10", "1d8", "Use instead of Ravage."),
        ] },
      { name: "Gnoll Packleader", level: 4, hp: 52,
        actions: [
          P("Bloodthirsty", "Advantage against damaged creatures."),
          A("Bark orders", "1 Action", "—", "2 allies can move."),
          A("Ravage", "1 Action, ×2, after Bark orders", "1d8+2", ""),
        ] },
      { name: "Worg", level: 1, hp: 20, speed: "10",
        actions: [
          P("Savage", "Crits on 5+ against Grappled creatures."),
          A("Rip apart", "1 Action", "2d6", "Grappled, escape DC 10."),
        ] },
    ],
    stats: { stage: "1-8, 13+" },

    tactics: "Wants a kill that has already stopped running. Worgs Grapple the lone hero, gnolls pile on whoever is bleeding, " +
      "and the Packleader moves the pack to wherever blood is fresh. Breaks off when the Packleader falls.",
    sources: SRC + "Hill & Field, gnolls and worgs.",

    designNote:
      "Official Nimble blocks. Bloodthirsty means the first hero to bleed becomes everyone's " +
      "target, and the worg's Grapple plus Savage turns a held hero into a crit target. The answer is a " +
      "front line that keeps no one alone and heals early. In Sejr they are the Doorish Hills' raiders " +
      "and the payoff when the Hills' Neglect clock fills. The demon-worshipping gnolls under the Hills " +
      "use the same blocks.",

    traits: [
      "A necklace of bells, each one a victim's, and they all ring a different note.",
      "A dead hyena on a pole, carried like a banner, tied up with fresh ribbons.",
      "It laughs at everything, including its own wounds, and the laugh gets worse as it bleeds.",
      "Its fur is dyed in the colours of a caravan it took last month.",
      "A trophy belt of ears, sorted by size.",
      "It is hungry in a way that makes the party's rations a threat."
    ],
    encounters: [
      "A pack drives a wounded animal, a mule, a child's pony, toward the party. They want to see what the party does with it.",
      "A gnoll shows up alone with a white rag on a spear and asks to trade. The pack is spread out around the party and has already decided what happens if the trade fails.",
      "Worgs are already feeding on something the party was supposed to protect, and have not looked up.",
      "A Packleader offers safe passage across its territory for one hero's blood, drawn willingly, a cup full."
    ],
    lairs: [
      "A camp of hide tents around a pit of old bones, where the youngest gnolls fight over the scraps and the Packleader watches.",
      "A cave with a smoking fire at the mouth and a chained captive in the back, still alive, to be eaten fresh.",
      "A ruined farmhouse converted to kennels, the worgs fed on the previous owners, and a child's drawings still on the wall.",
      "A hillside cave network where a demon's altar has been carved out of the stone, the gnolls' laughter echoing up through the roof."
    ],
    rumours: [
      { true: true, text: "They go for whoever is bleeding. Heal the first one hurt and they lose their appetite." },
      { true: true, text: "A worg alone is a dog. A worg with a hero in its jaws is a killer. Don't let one hold you." },
      { true: false, text: "Gnolls fear fire. Light a torch and they scatter." },
      { true: false, text: "They only raid at night. Travel by day and you are safe." }
    ],
    gigFit: {
      verb: "Escort / Stop",
      butPlus: "Faction result at Stages 1-8 from the Doorish Hills, and the payoff when its Neglect clock fills: gnolls at the gates. Pairs with a caravan.",
      patronHook: "A Doorish Hills farmer has paid the Archkeepers to find his son, taken last week by 'laughing men' who left the dogs alive.",
      cityName: "\"Giggle-packs\": Hills caravaners' name. A pack heard at dusk means you do not camp."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Skirmisher",
    name: "Skyhunters",
    description: "Things that take what they want from above: a lightning drake darting in " +
      "tight loops, a griffon with talons the length of a hand, and a roc whose shadow is " +
      "the first anyone knows of it.",

    roster: [
      { name: "Blue Drake", level: 2, hp: 25, speed: "Fly 12",
        actions: [
          A("Shocking bite", "1 Action", "2d8", "Ignores metal armor."),
          P("Burst lightning", "On death, Reach 1, AoE: 2d8, ignores metal armor."),
        ] },
      { name: "Griffon", level: 4, hp: 52, speed: "Fly 12",
        actions: [
          A("Talons", "1 Action", "1d8+10", "Grappled, escape DC 12."),
          A("Fly & drop", "1 Action, if Grappling", "6d6", "Fly upward 12 and release. The target takes fall damage and lands Prone."),
        ] },
      { name: "Roc", level: 17, hp: 236, speed: "Fly 20",
        actions: [
          A("Pluck up", "1 Action, Reach 4, up to 2 targets", "1d12+20", "On hit, Grappled, escape DC 17."),
          A("Crush & drop", "1 Action", "2d20", "Fly upward 20 spaces, deal damage to Grappled creatures, then release them (10d6 fall damage)."),
        ] },
    ],
    stats: { stage: "4, 7-12, 13+" },

    tactics: "Wants prey it can carry. The drake dives and strikes, the griffon grabs the smallest hero it can lift and " +
      "drops them, the roc takes two at once. Breaks off when Bloodied, climbing out of reach.",
    sources: SRC + "Hill & Field, flying beasts.",

    designNote:
      "Official Nimble blocks. The family is a height problem: Grapple, lift, and drop " +
      "(6d6 or 10d6 on a fall). The party's job is to cut the hold before the drop, or be below to catch it. " +
      "Bows and spells beat a flying enemy that will not land. Use under an open sky or a tall hall; a " +
      "low ceiling ends the griffon and the roc completely, and the Blue Drake's Burst Lightning " +
      "punishes a crowded rooftop.",

    traits: [
      "Its feathers or scales crackle faintly, and the hair of anyone near it stands up.",
      "A scar across the beak or snout, an old fight with a mage.",
      "A silver ring around one talon, with a name on it, someone's pet once.",
      "It shrieks twice before a dive, and never skips the second.",
      "It carries something shiny in its claws and refuses to drop it.",
      "The shadow is bigger than the creature, as if it were thinking of getting larger."
    ],
    encounters: [
      "A shadow crosses the party and moves on. A moment later, it comes back lower.",
      "A griffon has a human in its claws, alive, and is hovering at the edge of the party's reach. It is waiting for something.",
      "A lightning drake has nested in a Lower Reaches bell tower, and the market crowd below has just noticed.",
      "A rider with a hunting bow asks the party for help: his griffon is wounded and has gone wild."
    ],
    lairs: [
      "A ruined bell tower with a nest of copper wire and old hats, scorched on every surface.",
      "A cliff ledge with a bone-white drop below, scattered with the last meals' shoes and satchels.",
      "A rooftop garden turned aerie, all the pots broken, the beasts' own pigeons caged.",
      "A mountain peak scored with talon marks, a nest the size of a barn, and an unbroken egg, warm."
    ],
    rumours: [
      { true: true, text: "Cut the hold before it climbs. Once it is above you, the drop is the weapon." },
      { true: true, text: "The drake's lightning ignores metal armor. Plate is no protection." },
      { true: false, text: "Griffons never attack riders. Wave a saddle and it will land." },
      { true: false, text: "Rocs are a story. No bird grows that large." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Monster result at Stages 7-12 for the drake and griffon, and 13+ for a roc. Strong on a rooftop or a ledge map.",
      patronHook: "A Golden Council member's hunting party was taken apart on the Cliffs of the Dead. She wants the survivors found and the griffon, if there was one, handled without a story getting out.",
      cityName: "\"Rooftop kings\": Lower Reaches name for anything that nests above the market."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Brute",
    name: "Hill Brutes",
    description: "Things that do not trouble to hide: a rock-skinned bulette that erupts from the " +
      "ground, a troll whose wounds close as you watch, and a giant who throws boulders for fun.",

    roster: [
      { name: "Bulette", level: 10, hp: 88, armor: "Heavy", speed: "6 (burrow 6)",
        actions: [
          P("Burst forth!", "When the Bulette enters combat, the heaviest creature is targeted with Leap & bite."),
          A("Leap & bite", "1 Action", "1d20+20", "Leap 6, Grapple, escape DC 14."),
          A("Drag below", "1 Action, vs a Grappled creature", "1d20+10", "Then burrow away, leaving a tunnel 2 spaces wide."),
          P("Burrowing", "Heroes can jump down and follow the tunnels a Bulette leaves, at their own peril."),
        ] },
      { name: "Troll", level: 10, hp: 120, speed: "8",
        actions: [
          P("Regenerate", "Does not die at 0 HP. Only fire, radiant, or a crit while already at 0 HP can kill it."),
          A("Claws", "1 Action, Reach 2", "1d6+10", "On damage, Prone. Choose twice from Claws and Bite."),
          A("Bite", "1 Action, vs a Prone creature", "1d20+10", "Choose twice from Claws and Bite."),
        ] },
      { name: "Hill Giant", level: 10, hp: 130, speed: "8",
        actions: [
          A("Punt", "1 Action, ×2, Reach 2", "1d4+13", "Knockback Primary Die spaces."),
          A("Boulder!", "1 Action, Range 12, 2×2 AoE", "1d4+30", "Prone. Use instead of Punt."),
        ] },
    ],
    stats: { stage: "13+" },

    tactics: "The Bulette wants the heaviest meal. The troll wants whoever is Prone. The giant wants to throw something. " +
      "None of them breaks off while it is winning; the giant leaves when Bloodied and the Bulette dives.",
    sources: SRC + "Hill & Field, brutes.",

    designNote:
      "Official Nimble blocks. Three solutions to the same question, how do you stop a big thing? " +
      "The Bulette is punished by leaving the heaviest hero out front and waiting. The troll punishes bad " +
      "damage: carry fire or radiance, and do not leave it at 0 HP. The giant wants to throw: " +
      "get under its reach, behind cover, or out of its line. These are high-level monsters, so the " +
      "Sejr use is through an arch, or as an episode's one big problem, not an everyday fight.",

    traits: [
      "Its hide is flecked with lichen, and a family of birds nests in a crack.",
      "A heap of boots and belts around its feet, the leavings of earlier meals.",
      "It talks to itself in a low rumbling voice, and answers.",
      "It is hungrier than it looks, and it looks hungry.",
      "A dent in its skull the shape of a very large hammer. It has not forgiven.",
      "It has made a pet of something small and miserable that it keeps in a pouch."
    ],
    encounters: [
      "The ground shudders. The heaviest hero's footprint is the only one that goes deeper than the others.",
      "A troll sits on a bridge in the rain, eating, and asks the party whether they have a toll to pay or a leg to trade.",
      "A hill giant has been throwing boulders at a village wall for two days and is out of boulders. It is looking at the party.",
      "A wounded troll has fallen, and is mending. The party can stay and burn it, or leave and let it finish."
    ],
    lairs: [
      "A scoured clearing of freshly turned earth, a hundred pits dotted around where something has surfaced and gone back under.",
      "A bridge-keeper's hut, stinking, with a pile of bones and an iron pot the size of a bathtub.",
      "A hilltop of boulders, arranged in a ring, each carved with a crude face, and a giant's throne in the middle.",
      "A cave of broken stone, full of gnawed bones and a campfire that never goes out."
    ],
    rumours: [
      { true: true, text: "Fire or radiance. A troll at 0 only stays dead if you burn it or crit it again." },
      { true: true, text: "A bulette goes for the heaviest man. Put the lightest in front and watch it flounder." },
      { true: false, text: "Giants can't climb. A tree is safe ground." },
      { true: false, text: "A troll is afraid of daylight and turns to stone. Hold it past dawn." }
    ],
    gigFit: {
      verb: "Stop / Escort",
      butPlus: "Monster result at Stage 13+ as the arch-side big problem. Use one per episode, not a mob.",
      patronHook: "The Black Hand has a toll bridge on a road that the party must cross. The bridge's troll was there first.",
      cityName: "\"Big uns\": Lower Reaches name for anything over three metres, and a warning not to stay."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Lurker",
    name: "Stirges",
    description: "Bloated mosquitos the size of a fist, or a gull. They hang in the dark, drop " +
      "on a warm neck, and do not let go.",

    roster: [
      { name: "Stirge", level: "1/2", hp: 10, speed: "Fly 8",
        actions: [
          P("Evasive flier", "Attacks against you are disadvantaged."),
          A("Latch on", "1 Action", "1d4+2", "Can't crit. On hit, Latched On: Riding. Your attacks can't miss or be Defended or Interposed."),
        ] },
      { name: "Greater Stirge", level: 6, hp: 64, speed: "Fly 10",
        actions: [
          P("Evasive flier", "Attacks against you are disadvantaged."),
          A("Latch on", "1 Action", "1d12+10", "On hit, Latched On: Riding. Your attacks can't miss or be Defended or Interposed."),
        ] },
    ],
    stats: { stage: "7-12" },

    tactics: "Wants a warm neck. Goes for the hero with the least armor, latches, and stays. " +
      "Breaks off only when dead or when the target is, and the second is faster.",
    sources: SRC + "Dungeon Denizens, stirges.",

    designNote:
      "Official Nimble blocks. A latched stirge cannot miss, and cannot be Defended or " +
      "Interposed, so the answer is killing it off the host, which hurts the host too. " +
      "They are a cheap, nasty, low-level pressure that makes the party move, and the Greater Stirge is a " +
      "serious mid-level threat in a dark room. Light is the best tool.",

    traits: [
      "Its proboscis is crusted red and curls at the tip like a question mark.",
      "It buzzes at a pitch that makes the nearest candle gutter.",
      "One of its wings is torn and it flies in a lopsided spiral.",
      "It is swollen so full that it can barely fly.",
      "It sticks to the ceiling by its feet, upside down, dripping.",
      "A faint blue shimmer on its back, from a cave far below."
    ],
    encounters: [
      "A hero feels a small, soft touch on the neck. Seven others are above, waiting for the rest.",
      "A merchant's cart rattles up, with a covered cage of angry, buzzing things, and the merchant begging the party to take it before it breaks.",
      "A scream. A porter is flailing at something on his back. Another is on the roof.",
      "The party's torch gutters. In the dark, a sound like a thousand tiny wings."
    ],
    lairs: [
      "A cavern ceiling blackened with sleeping stirges, hundreds, like a living roof, and a floor of dead bats.",
      "A cellar of a plague house, every wall stained brown with old blood and the ceiling dripping.",
      "A mausoleum where the coffins have been opened, drained, and left with a perfect white outline of a face.",
      "A hollow tree, with a buzzing that rises the closer you get, and a bleached skeleton propped inside."
    ],
    rumours: [
      { true: true, text: "Once it latches, it never misses. Kill it off you fast, or burn it." },
      { true: true, text: "A plain stirge has only 10 HP. Kill them fast and the latch ends." },
      { true: false, text: "They only drink from sleepers. Stay awake and you'll be fine." },
      { true: false, text: "A pinch of salt on the wound makes it let go." }
    ],
    gigFit: {
      verb: "Find / Escort",
      butPlus: "Monster result at Stages 7-12, in the dark. A low-level pressure that makes a safe room unsafe.",
      patronHook: "A Black Hand fixer's cellar is full of stirges, and he needs a shipment out of it before anyone sees what happened to his last porter.",
      cityName: "\"Neck-biters\": dockhands' name, said with a hand to the throat."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Defender",
    name: "Rank-and-File Dead",
    description: "The dead that do the work: bones that clatter, meat that shambles, ghouls that " +
      "claw. They get up again once, whatever you do, and they don't mind the rain.",

    roster: [
      { name: "Skeleton", level: "1/3", hp: 9,
        actions: [
          P("Unliving, undying", "1 use. On death, reset to 1 HP."),
          P("Just bones!", "Resistant to Piercing hits (not crits)."),
          A("Grave arrow", "1 Action, Range 8", "1d4", "Can't crit."),
        ] },
      { name: "Zombie", level: "1/2", hp: 14,
        actions: [
          P("Unliving, undying", "1 use. On death, reset to 1 HP."),
          A("Crunch", "1 Action", "1d4+2", "On damage, Grapple, escape DC 10. Can't crit."),
        ] },
      { name: "Ghoul", level: 1, hp: 18,
        actions: [
          P("Unliving, undying", "1 use. On death, reset to 1 HP."),
          A("Sickening claw", "1 Action", "1d4+4", "On damage, Dazed."),
        ] },
      { name: "Ogre Zombie", level: 5, hp: 60,
        actions: [
          P("Unliving, undying", "1 use. On death, reset to 1 HP."),
          A("Greatclub", "1 Action", "1d4+18", "On crit, Prone."),
        ] },
      { name: "Giant Zombie", level: 8, hp: 100,
        actions: [
          P("Unliving, undying", "1 use. On death, reset to 1 HP."),
          A("Decaying swipe", "1 Action, ×2", "1d4+10", "On damage, Prone or Knockback Primary Die spaces."),
        ] },
    ],
    stats: { stage: "4, 7-12" },

    tactics: "Wants nothing. Walks at the nearest warm thing and attacks it. Never breaks off. The Ghoul alone has an appetite.",
    sources: SRC + "Undead.",

    designNote:
      "Official Nimble blocks. Everything gets up once at 1 HP, so a wave of skeletons is " +
      "two waves, and the Ghoul's Dazed is the only real tax on actions. The d4 is the thematic undead " +
      "die: slow, with a big flat bonus, so armor matters more than damage dice. These are the Cliffs " +
      "of the Dead's ordinary residents, and the Archkeepers will pay to have them laid to rest.",

    traits: [
      "A shred of burial cloth hangs from one arm, embroidered with a family sigil.",
      "Its jaw hangs open, and something small and living has made a nest inside.",
      "It is dressed in its Sunday best, and the buttons are done up wrong.",
      "It keeps trying to say a word, and what comes out is a hiss.",
      "A silver coin in each eye socket, the last offering of someone who cared.",
      "It carries a shovel. It is not sure why."
    ],
    encounters: [
      "A line of the dead shambles along a road, in good order, and does not look at the party until a hero steps into the lane.",
      "A grave digger bolts out of a tomb and runs for his life. The thing he disturbed is slow but patient, and does not get tired.",
      "Skeleton archers stand in a doorway, all facing out, like a guard, and will not move until someone speaks the right name.",
      "A Ghoul sits at a table in a closed pub and politely asks for a drink."
    ],
    lairs: [
      "A mausoleum with the doors thrown open from inside, and a path of fresh, small footprints leading back in.",
      "A barrow where the rows of niches are perfectly neat, each with a fresh flower, and each with an empty bed.",
      "A crypt floor of loose bones, stirred by a faint, ever-present draught that sounds like breath.",
      "A graveyard shed with tools hung neat, a lantern burning, and a very patient ghoul in the corner."
    ],
    rumours: [
      { true: true, text: "They get up once. Hit them again and they stay down." },
      { true: true, text: "Piercing barely hurts a skeleton. Bring a hammer." },
      { true: false, text: "The dead never cross running water. Cross a stream and you are free." },
      { true: false, text: "Holy water kills them outright. A flask per skeleton." }
    ],
    gigFit: {
      verb: "Bury / Find",
      butPlus: "Monster result at Stage 4 (Cliffs of the Dead) and in any crypt or cistern. Good as the room-filling mob.",
      patronHook: "A priest from the Temple of the Three Sisters wants a mass grave on the Cliffs of the Dead laid to rest before a funeral procession. The dead keep standing.",
      cityName: "\"Walkers\": grave diggers' word, flat, no more said."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard",
    role: "Lurker",
    name: "Restless Spirits",
    description: "A shape in the corner of the eye, cold along the arm. Specters drift low and " +
      "touch; wraiths rend from a distance, and neither stays long enough to be hit hard.",

    roster: [
      { name: "Specter", level: 3, hp: 34, speed: "Fly 6",
        actions: [
          P("Corrupt", "Vulnerable to Radiant: your next attack gains advantage."),
          A("Deathly touch", "1 Action", "1d4", "On damage, set HP to 0."),
        ] },
      { name: "Wraith", level: 10, hp: 120, speed: "Fly 6",
        actions: [
          P("Corrupt", "Vulnerable to Radiant: your next attack gains advantage."),
          A("Soul rend", "1 Action, ×2, Range 8", "1d4+10", "On damage, deal 1 Wound."),
        ] },
    ],
    stats: { stage: "4-5, 11-12, 13+" },

    tactics: "Wants the living to feel what it felt. Goes for the hero who holds the most life: the biggest, the healthiest. " +
      "Breaks off when the Shepherd's light shows.",
    sources: SRC + "Undead, spirits.",

    designNote:
      "Official Nimble blocks. The Specter's touch sets a hero to 0 HP on damage, so it is " +
      "a hit-or-miss monster where one hit changes the fight, and the reward for radiant damage is " +
      "advantage on the next attack. The Wraith's Wound is the same fear at higher cost. Keep a " +
      "Shepherd close. Cliffs of the Dead, Sunken Revvia, and any tomb arch.",

    traits: [
      "It has a face you almost know, and every time you look it is slightly less familiar.",
      "The candles lean toward it.",
      "It whispers a name. The name is the nearest hero's.",
      "It is cold enough to leave frost on a nearby cup.",
      "It does not walk, but turns slowly in place, like a mourner at a window.",
      "It wears the clothes of a Villas noble from two hundred years ago, and still stands as if it is waiting for a carriage."
    ],
    encounters: [
      "A hero's breath fogs in a warm room. Something beside them is not breathing.",
      "A wedding party in old clothes dances, silent, in a cellar, and the bride turns to look at the party.",
      "A widow offers the party her late husband's coat. He is wearing it.",
      "A child's voice calls from inside a wall, asking for the heroes by name."
    ],
    lairs: [
      "A drowned chapel in Sunken Revvia where the pews are all facing the same way and every window is a different colour.",
      "A noble's mausoleum on the Cliffs of the Dead with a single lit lamp in the window.",
      "A bedroom in a villa, preserved, bed made, a nightgown laid out, and a deep cold.",
      "A tomb whose walls are scratched, from inside, with the same date repeated."
    ],
    rumours: [
      { true: true, text: "Radiance makes them vulnerable. A holy light turns the fight." },
      { true: true, text: "Its touch only drops you if it does damage. Enough Defense turns it into a cold hand." },
      { true: false, text: "Salt on the threshold keeps a ghost out." },
      { true: false, text: "A spirit can only be hurt by a weapon blessed by a priest." }
    ],
    gigFit: {
      verb: "Bury / Find",
      butPlus: "Monster result at Stage 4, the under-theater at Stage 5, and Sunken Revvia (11-12) for specters, and 13+ for a wraith. Ghost stories belong here.",
      patronHook: "The Archkeepers want a haunted villa quieted. The family still lives there, and does not want it quiet. They are afraid of the ghost's silence.",
      cityName: "\"Cold ones\": Cliffs of the Dead name, and never said inside a graveyard."
    }
  },

  {
    world: "Core Bestiary",
    tier: "Standard / Boss",
    role: "Defender",
    name: "Mummies",
    description: "A priest, wrapped, preserved, and angry. The cloth is the colour of old tea " +
      "and smells of resin, and the cold, patient, fixed eyes are the same as the day it died.",

    roster: [
      { name: "Mummy", level: 6, hp: 75,
        actions: [A("Cursed slam", "1 Action", "1d4+20", "On damage, Dazed.")] },
      { name: "Mummy Lord", level: 21, hp: 260,
        actions: [
          P("Cursed gaze", "When crit, inflict a Wound on a failed DC 20 INT save."),
          A("Scarab swarm", "1 Action, Reach 6", "—", "Summon 6 scarab minions (size d6). Then use Slam."),
          A("Slam", "1 Action, ×2", "1d4+20", "On damage, Dazed."),
        ] },
    ],
    stats: { stage: "13+" },

    tactics: "Wants the tomb undisturbed. Slams the hero closest to what it guards, and sends scarabs for the rest. " +
      "Never breaks off. Tombs have no exits for the dead.",
    sources: SRC + "Undead, mummies.",

    designNote:
      "Official Nimble blocks. A Mummy is a slow, hard hitter whose Dazed takes one action a " +
      "turn, so it taxes rather than stops. A Mummy Lord is a level 21 boss and not a Sejr encounter: keep " +
      "it as a campaign villain for a tomb in Threska or Arkus and let the heroes meet it once, " +
      "late, or run from it. Fire is the answer to the wrappings.",

    traits: [
      "The wrappings are inscribed with a spell, repeated, dense as lace.",
      "Dust drifts from its sleeves, and each grain glitters.",
      "A beetle, alive, crawls out of one eye socket and back in.",
      "It has no mouth, only a stitched line, and the stitches are loose.",
      "A broken gold collar around its neck, with a name in dead script.",
      "It is perfectly still until something in the room is moved."
    ],
    encounters: [
      "A sealed sarcophagus in a hall of statues. One hero moves a candlestick. The statues turn.",
      "A tomb robber, mummified, shuffles out of a cave, still holding a bag of stolen coins.",
      "A priest of a dead god kneels at an altar, wrapped in white, and does not look up until the party takes something.",
      "The party's patron wants a particular mummy awakened. He has a ritual. He has not told them what it is for."
    ],
    lairs: [
      "A step-pyramid burial chamber with a sarcophagus lid slid aside, and a line of dust that leads from it to the door.",
      "A vault under a plundered temple where every niche holds a mummy, and one niche is empty.",
      "A desert tomb with a hundred identical corridors and one with a fresh footprint.",
      "A cellar in the City of Arches where a collector keeps a mummy 'as a conversation piece'. It has been moving."
    ],
    rumours: [
      { true: true, text: "Fire burns the wrappings and the mummy with them." },
      { true: true, text: "It stays within its tomb. Leave and it will not follow." },
      { true: false, text: "A mummy's curse is passed by touch. Never lay a hand on one." },
      { true: false, text: "The wrappings are the only thing holding it together. Cut them and it dies." }
    ],
    gigFit: {
      verb: "Steal / Bury",
      butPlus: "Monster result at Stage 13+ on a Threska or Arkus arch. The Mummy Lord is a campaign beat, not an encounter.",
      patronHook: "A University treasurer wants an inscribed collar from a tomb on Arkus. Three crews have gone in. All three came back, quietly, and none will say what they saw.",
      cityName: "\"Dusty ones\": Cliffs of the Dead name, and an insult in the Market Square."
    }
  },
];
