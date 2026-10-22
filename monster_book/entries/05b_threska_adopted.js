// Adopted from the City of Arches setting book (Threska, Chapter 9; Revlend Marshes; Abhuman Effigy).
// Stats follow the GM Guide Monster Builder table by level. SEB.
const A = (name, cost, damage, effect) => ({ name, cost, damage: damage || "—", effect });
const P = (name, effect) => A(name, "Passive", "—", effect);

module.exports = [
  {
    world: "Threska/Arkus",
    tier: "Standard",
    role: "Brute",
    name: "Grimlocks of Teveron",
    seb: true,
    shared: [
      P("Blind", "Grimlocks can't be Blinded and ignore darkness and illusions."),
    ],
    core: "Generations inside Teveron, the Shadowed Mountain, have never seen the sun. Their ogre mages chant to keep their gods asleep.",
    description: "Grey, eyeless, heavy-browed people with stone clubs, moving through the dark as " +
      "if it were noon.",

    roster: [
      { name: "Grimlock", level: 1, hp: 21,
        actions: [A("Stone club", "1 Action", "2d6", "Advantage against a creature carrying light.")] },
      { name: "Grimlock Ogre", level: 4, hp: 52,
        actions: [
          A("Club", "1 Action, ×2", "1d8+4", ""),
          A("Carry off", "1 Action, Prone or Grappled target", "—", "STR save DC 12 or Grappled and carried its full Speed, then dropped."),
        ] },
      { name: "Ogre Mage Chanter", level: 6, hp: 60, armor: "Medium",
        actions: [
          A("Chant", "Passive", "—", "While it chants, the god below sleeps. If it dies, start the Waking clock (4)."),
          A("Darkness", "1 Action, 1/encounter, Range 8", "—", "3-space radius: Blind inside, except grimlocks."),
          A("Cold breath", "1 Action, cone 3", "3d6+5", "DEX save DC 13 for half."),
        ] },
    ],
    stats: { stage: "13+" },

    tactics: "Put out the light, then club whoever carried it. The ogre takes the fallen. The chanter never stops chanting.",
    sources: "Adopted from the setting: grimlocks, grimlock ogres and ogre mages of Teveron (Chapter 9), the Abhuman Effigy (campaign arcs).",

    designNote:
      "Darkness is home ground. The chanter is the trap: killing it wins the fight and wakes " +
      "the mountain. Step the Waking clock each round after. At 4 the floor splits and the chanting stops. Nothing climbs out tonight.",

    traits: [
      "Skin grey as cave clay, ridged where eyes should be.",
      "Ears like a bat's, twitching at every breath.",
      "Bone charms shaped like a sleeping beast.",
      "They hum the chanter's song under their breath.",
      "A torch, unlit, carried as a trophy.",
      "The oldest has a face painted on its brow: eyes."
    ],
    encounters: [
      "The party's light goes out. Something sniffs at the edge of hearing.",
      "Grimlocks drag a captive toward a giant effigy. The captive is still singing.",
      "An ogre mage asks the party, politely, to be quiet. Something below is almost awake.",
      "A grimlock hunting party follows the smell of the party's food."
    ],
    lairs: [
      "A cavern around a fallen god's effigy, hundreds kneeling.",
      "A hall where the chanting never stops, and the floor trembles.",
      "Dry tunnels under a marsh skull, painted with pictographs of the sun.",
      "A larder of hung meat, some of it still in boots."
    ],
    rumours: [
      { true: true, text: "They hunt by sound. Walk soft and they lose you." },
      { true: true, text: "Kill the chanter and the mountain wakes." },
      { true: false, text: "Bright light burns them like sunlight burns the dead." },
      { true: false, text: "They're harmless cave folk who only want to be left alone." }
    ],
    gigFit: {
      verb: "Find / Stop",
      butPlus: "Monster result on Threska arches, and from the Revlend Marshes as a Neglect payoff.",
      patronHook: "A Kartan mage wants the chant written down. The ogre mages kill anyone who records it.",
      cityName: "\"Moles\": a Lower Reaches insult for anyone who never sees daylight."
    }
  },
];
