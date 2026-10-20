module.exports = [
  {
    world: "Korax",
    tier: "Standard",
    role: "Controller",
    level: 3,
    name: "Meenlock Stalker",
    description: "A hunched thing the size of a child, insect-headed and moss-furred, with " +
      "claws like split reeds. It stands in the dark at the edge of the torchlight and " +
      "never quite steps into it. You hear it before you see it: a voice in your head " +
      "saying you are alone.",

    stats: { hp: 30, armor: "None", speed: "6", stage: "13+" },

    actions: [
      {
        name: "Claws",
        cost: "1 Action, ×2",
        damage: "1d6+4",
        effect: "On hit: STR save DC 12 or Dazed on the target's next turn. A target " +
          "already Dazed this round is Slowed instead."
      },
      {
        name: "Horrid link",
        cost: "Free, 1/round, Range 10",
        damage: "—",
        effect: "It links its mind to one creature until the start of its next turn. The " +
          "linked hero is Frightened of it and lives a waking nightmare of suffocation. " +
          "Whenever the meenlock takes damage, the linked hero takes 1d6+2 psychic."
      },
      {
        name: "Shadow step",
        cost: "1 Action",
        damage: "—",
        effect: "It teleports up to 8 spaces from one patch of darkness to another. It " +
          "cannot end in bright light. After using this, it cannot again until it is hit " +
          "or a round passes."
      },
      {
        name: "Drag to the burrow",
        cost: "1 Action, needs a second meenlock adjacent to the target",
        damage: "—",
        effect: "Against a Dazed or Frightened target: STR save DC 12 or the two meenlocks " +
          "drag the target 3 spaces toward their burrow. The target keeps their actions."
      }
    ],

    tactics: "Wants a victim to take back to the burrow and remake. Links to one hero, Dazes them and drags them toward the dark, while the others whisper from shadow. Breaks off when the light is too bright to step through, and trails the party for days after.",
    sources: "Monster Vault: 4e MM3, Lv 9 Controller. 4e MM3 Meenlock Stalker (Dimension Step, Horrid Link, meenlock corruption).",

    designNote:
      "In 5e meenlock claws paralyse and their victims are carried off to be remade. " +
      "Here the claws Daze for one turn, and pairs of meenlocks drag Dazed or " +
      "Frightened targets toward the dark. Horrid link comes from 4e's meenlock " +
      "stalker: hurting the meenlock hurts your friend, so the party has to decide " +
      "whether to swing anyway. Nobody loses a turn; everyone loses a little nerve. " +
      "Its victims return to the burrow on their own and turn; burning the meenlock " +
      "that marked them breaks it. Light " +
      "is the counterplay: in bright light a meenlock cannot shadow step, and a party " +
      "that tends its torches turns a horror hunt into a fair fight. Korax's twilight " +
      "under the red star gives them plenty of shadow.",

    traits: [
      "Its fur is matted with red clay. It has come up from the Red Deeps recently.",
      "It whispers in the voice of a hero's mother. Only that hero hears it.",
      "It carries a stone knife it never uses, holding it like a talisman.",
      "This one is larger and older, and the others defer to it.",
      "Its eyes reflect the red star, two pinpricks of crimson in the dark.",
      "It hums a lullaby from Kor. The tune is wrong in one note."
    ],

    encounters: [
      "The party's torches start going out one by one. Something is snuffing them " +
        "between the trees of a dead forest.",
      "A primeval hunter from Kor begs the party to help find her brother, taken in " +
        "the night. He comes back on his own at dawn, smiling, and won't stand in light.",
      "Meenlocks are dragging a captured orc toward a burrow in the clay. The orc wears " +
        "the mark of Veles and is shouting for help in a language the party half knows.",
      "The party shelters in a cave mouth shaped like a skull. Every hero dreams the " +
        "same voice telling them their friends will leave them."
    ],

    lairs: [
      "A network of child-sized burrows in red clay, the walls smoothed by passing " +
        "bodies. Deep inside, a chamber where someone is slowly growing fur.",
      "A dead mammoth's ribcage, packed with moss and stolen blankets. A nest.",
      "A ruin of the Sundered Vaults of Athraxa, half-flooded with swamp, with tiny " +
        "handprints in the mud on every wall.",
      "A hollow under a petrified tree where every lantern ever brought here has been " +
        "smashed and the pieces arranged in a ring."
    ],

    rumours: [
      { true: true,
        text: "Keep a fire burning. They cannot step from shadow into bright light, and " +
          "they hate it more than they hate us." },
      { true: true,
        text: "They hunt in twos and threes. One alone will whisper but will not drag " +
          "you off." },
      { true: false,
        text: "If one touches you, you are already turning. Nothing can be done, and " +
          "nothing will bring you back." },
      { true: false,
        text: "Meenlocks are scared of iron. Wear a horseshoe and they keep away." }
    ],

    gigFit: {
      verb: "Find / Escort",
      butPlus:
        "But+ Monster on any Korax arch, especially at Dusk or Dark results: the light " +
          "is going, and the meenlocks were waiting for it.",
      patronHook:
        "A priest from the Temple of the Three Sisters has a novice who came back from " +
          "a Korax arch silent and furred at the wrists. She wants to know where the " +
          "burrow is before the novice remembers the way.",
      cityName:
        "\"Lamp-thieves\": Arch of Kings porters' name, after the Korax arrivals who " +
          "came through begging for oil and would not say why."
    }
  },

  {
    world: "Korax",
    tier: "Standard",
    role: "Skirmisher",
    level: 2,
    name: "Dark Creeper",
    description: "A small, hunched figure wrapped in layers of filthy black rag, nothing " +
      "showing but long grey fingers and the glint of a stolen blade. It smells of " +
      "smoke and cave water. In daylight it squints and curses.",

    stats: { hp: 24, armor: "None", speed: "6", stage: "7-8, 13+" },

    actions: [
      {
        name: "Stolen blade",
        cost: "1 Action",
        damage: "1d8+3",
        effect: "Advantage against a creature that cannot see it."
      },
      {
        name: "Snuff",
        cost: "1 Action, 1/encounter",
        damage: "—",
        effect: "Every nonmagical flame within 6 spaces goes out. Heroes without darkvision " +
          "are Blind until they relight one (1 Action each)."
      },
      {
        name: "Dark step",
        cost: "Free, 1/round",
        damage: "—",
        effect: "It moves 4 spaces without provoking. If it ends adjacent to an enemy, " +
          "its next Stolen blade against them has advantage."
      },
      {
        name: "Lift",
        cost: "1 Action, adjacent",
        damage: "—",
        effect: "Finesse contest. On a win, the creeper takes one unsecured item: a pouch, " +
          "a torch, a vial, a scroll. Never a held weapon."
      },
      {
        name: "Flare",
        cost: "Passive, on death",
        damage: "—",
        effect: "Its body burns away in a flash. Creatures within 2 spaces make a DEX " +
          "save DC 11 or are Blind until the end of their next turn. Anything it stole " +
          "drops in its space."
      }
    ],

    tactics: "Wants loot, not blood. Snuffs the light, darts in, steals, darts out. Targets whoever carries the most pouches. Breaks off as soon as it has something worth fencing, or when Bloodied.",
    sources: "Monster Vault: 4e MM, Lv 4 Skirmisher. 4e MM Dark Creeper (Dark Step, Killing Dark).",

    designNote:
      "A thief, not a killer. Dark creepers turn a fight into a scramble for light and " +
      "loot, and the party measures success by what they still have when it ends. Dark step, from 4e, keeps it " +
      "moving: in, cut, out. Snuff and Flare inflict Blind for a turn at most. Use them in groups of three to five, " +
      "fast and annoying, with one big creeper leading. They are the Black Hand of the " +
      "Red Deeps, and they sell what they take.",

    traits: [
      "Its rags are stitched from a dozen stolen cloaks. One bears a Golden Council badge.",
      "It giggles when it steals and can't stop.",
      "It wears three left boots, one tied over the other two.",
      "Its blade is a broken arch key, sharpened to a point.",
      "It keeps a candle stub behind its ear and lights it when it wants to talk.",
      "This one has a bad cough and a tired, almost friendly manner."
    ],

    encounters: [
      "Every torch in the party's camp goes out at once. When they relight, a hero's " +
        "pack is gone and small footprints lead into a crack in the clay.",
      "A dark creeper market in the Red Deeps, lit by a single lamp, selling goods " +
        "stolen from Kor and from the City of Arches. Including the party's own gear.",
      "A creeper has stolen a primeval hunter's totem. The hunter wants it back and " +
        "believes the party did it.",
      "A creeper pickpocket has come through an arch into the Lower Reaches and is " +
        "working the crowd at the Arena of Blood."
    ],

    lairs: [
      "A cave where every surface is hung with stolen goods: pots, belts, a saddle, a " +
        "Kor war-drum, a framed portrait of a stranger.",
      "A cooking pit under a skull-shaped rock, cold. The ashes hold a half-burned map " +
        "of the Sundered Vaults.",
      "A crawlspace behind Adel's Curio Shop where a creeper has been living for a " +
        "year. Adel knows. Adel takes a cut.",
      "A burrow with a single bright lamp at its heart, guarded like a shrine. They " +
        "worship the light they cannot stand."
    ],

    rumours: [
      { true: true,
        text: "When they die they burn up in a flash. Close your eyes when one drops." },
      { true: true,
        text: "They will trade. Offer lamp oil and they'll tell you anything about the " +
          "Red Deeps." },
      { true: false,
        text: "Their blades are poisoned. One cut and you'll lose the arm." },
      { true: false,
        text: "They can see in pitch dark like a cat. Fighting them without light is " +
          "suicide either way." }
    ],

    gigFit: {
      verb: "Steal / Find",
      butPlus:
        "But+ Monster on any Korax arch, and at Stages 7-8 for one that came through. " +
          "Best as the reason the party's key, map or arcanum goes missing mid-episode.",
      patronHook:
        "A Black Hand fixer wants to buy the creepers' Red Deeps route and needs someone " +
          "to make the first offer. The creepers would rather steal the fixer's purse.",
      cityName:
        "\"Rag-pickers\": Lower Reaches name, used for the creepers and, as an insult, " +
          "for anyone who fences what they find in the drains."
    }
  },

  {
    world: "Korax",
    tier: "Standard",
    role: "Controller",
    level: 4,
    name: "Neogi Hatchling Swarm",
    description: "A tide of spider-legged eels each the size of a hand, chittering and " +
      "climbing over one another, mouths full of needle teeth. Every one of them is " +
      "trying to give orders, and the swarm obeys whichever is loudest.",

    stats: { hp: 40, armor: "None", speed: "6 (climb 6)", stage: "13+" },

    actions: [
      {
        name: "Bites",
        cost: "1 Action",
        damage: "2d6+5",
        effect: "One creature in or adjacent to the swarm's space. Half damage once the " +
          "swarm is Bloodied."
      },
      {
        name: "Gnawing tide",
        cost: "Passive",
        damage: "—",
        effect: "A creature that starts its turn in or adjacent to the swarm takes 1d6 " +
          "poison."
      },
      {
        name: "Mind leash",
        cost: "1 Action, 1/round, only while an adult neogi is within 12 spaces",
        damage: "—",
        effect: "The swarm relays the adult's will. One creature in its space makes a WIL " +
          "save DC 12. Failure: on their next turn the swarm chooses where they spend " +
          "their movement. They choose their own actions."
      },
      {
        name: "Death scream",
        cost: "Passive, on death",
        damage: "—",
        effect: "Every creature within 2 spaces makes a WIL save DC 12 or is Slowed."
      },
      {
        name: "Swarm",
        cost: "Passive",
        damage: "—",
        effect: "It occupies other creatures' spaces. Its space is Difficult Terrain. " +
          "Single-target attacks deal half damage; AoE deals double."
      }
    ],

    tactics: "Wants flesh, any flesh, now. Pours over the nearest creature and stays there. Under an adult neogi's eye it herds prey instead. Never breaks off on its own; it scatters only when its adult falls.",
    sources: "Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 1. 4e MM2 Neogi Spawn Swarm (swarm aura, psychic scream on death).",

    designNote:
      "4e's neogi spawn are hungry slugs with small brains: a poison aura and a " +
      "psychic scream when they die. That is the base here. The leash only works with " +
      "an adult neogi nearby, which makes the adult the real target. When it works, " +
      "it steers a hero's feet but never their hands: walk into the pit, off the ledge, " +
      "toward the adult neogi, while still swinging and casting. That keeps agency " +
      "while making position the battlefield. AoE is the answer, which gives Mages and " +
      "anyone with oil a reason to shine.",

    traits: [
      "The swarm is splashed with an adult's dye marks. It belongs to someone.",
      "A few of them have learned a word of Common: 'mine'. They say it constantly.",
      "Half the swarm is dead and being dragged along by the other half.",
      "They fight among themselves whenever a hero isn't the closest target.",
      "They wear tiny collars of braided hair. The hair is the same colour as a hero's.",
      "The swarm leaves a slime trail that hardens into a thin, glassy path."
    ],

    encounters: [
      "A clutch has hatched inside the carcass of a fiendish dinosaur. The carcass is " +
        "the only shelter from the storm.",
      "An adult neogi rides a captured umber hulk through the Red Deeps, its hatchlings " +
        "swarming ahead to herd prey.",
      "Primeval humanoids of Kor have walled off a cave where a swarm is nesting. They " +
        "want it burned. The wall is cracking.",
      "A swarm has leashed an orc of Veles, who stumbles toward the party apologising " +
        "with every swing."
    ],

    lairs: [
      "A web-strung cave where neogi eggs hang in sacs. Several are empty and still warm.",
      "An abandoned neogi slave-pen with collars on the walls, one of them sized for " +
        "a dragon.",
      "A narrow fissure in the petrified earth, its walls slick with hatchling slime and " +
        "scratched with tiny marks that look like a ledger.",
      "A cavern near Kor where the swarm has made a shrine of stolen weapons and fed " +
        "it bones."
    ],

    rumours: [
      { true: true,
        text: "Fire or oil. A single blade does nothing against a hatchling tide." },
      { true: true,
        text: "They can turn your feet but not your hands. Keep fighting while you walk." },
      { true: false,
        text: "They lay eggs in your ears. Stuff them with wax before you go in." },
      { true: false,
        text: "Kill the biggest one and the rest scatter." }
    ],

    gigFit: {
      verb: "Stop / Bury",
      butPlus:
        "But+ Monster on any Korax arch, in caves and dead forests. Pair with a room " +
          "that has a hazard (a pit, a ledge, a tar pool) for the leash to walk heroes into.",
      patronHook:
        "The University has a single hatchling in a jar and wants a clutch, alive, to " +
          "study the leash. The Archkeepers would like it known that this is a terrible " +
          "idea.",
      cityName:
        "\"Leash-eels\": what Arch of Kings porters called the first ones to come " +
          "through, before the Golden Knights burned the crate."
    }
  },
];
