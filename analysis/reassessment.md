# Reassessment

A second pass over all 35 active cards, now with the homebrew, the Stonetop text, and the Mage rules in hand. The question: what traps does a deck written mostly by a model fall into, and which did this one fall into?

Fixed in this pass are marked **Fixed**. Everything else is a recommendation and has not been changed.

## 1. Traps this deck fell into

### Writing to the audit (Goodhart)
I wrote `tools/audit.py` and then wrote cards to pass it. That bent the cards in two ways:
- **Bolt-on passives.** The spec asks for at least one free or passive power, so I added one wherever a card lacked it. Some earn their place: Tuning (Forgotten Key), Overcast (Apology Blade, which points at the refill), Read the Notches (Tally-Stick). Some are filler: Gold Barbs (Valkyrie's Feather), Dragon's Click (Sown Teeth), Myrrh (Binding Linens), Fairy Light (Fairy Jar), Rustle (Seven-Leaf Bracelet), Sand Sense (Hourglass).
- **A false label.** Rune Fragment's Algiz said "(Passive)" so the card would pass, but every rune is spent once. **Fixed:** each rune now shows its true action cost.

Recommendation: let a card satisfy "free or passive" with a Free spend power, then cut the filler passives. The rule exists to give the card something always on, not to add a line.

### Template sameness
| Pattern | Cards |
|---------|-------|
| Risk "roll a d6, on a 1-2" | 7 |
| "within a session" in risk or escalation | 10 |
| Escalation sends a pursuer (someone arrives, hunts, follows, learns where you are) | 12 of 35 |
| "the GM names / chooses / decides / says" | 14 |
| Resource line ends "returns only this way" | most pip trackers |

The d6 risks came from my unlock pass. I gave every story-only risk the same die so it would pass the new check. Stonetop's hazards are specific to the object (you risk electrocuting yourself, you use up the other ingot), and these should be too: a save keyed to what the unlock does, an item that cracks, a Hit Die spent.

Pursuers: Sejr's thread board holds six cards, and one closes each episode. A table of four with four pursuer arcana could fill the board from arcana alone. Recommendation: keep pursuers on about a third of the cards and turn the rest toward the body, the item, or a place (the Black Lotus Stain, the Stormshifter's changing marshes, the Ledger writing by itself are the good models).

GM deferral: Sejr's prep is "the trackers and nothing else", so every "the GM decides who" is improvised at the table. Recommendation: give the open escalations (Songweaver, Stormshifter, Hexing Needles, Sown Teeth) a short d6 list each.

### Loops a model misses
- **Apology Blade.** Sky refills when someone accepts your apology for a real wrong. Nothing stopped a player from doing a small wrong on purpose and apologising. **Fixed:** a wrong done on purpose after taking up the blade no longer counts.
- **Provenance Ledger.** Name the Owner (spend 1) tells you whom to return a relic to, and the return refills 1. Net zero, and each return still needs a relic and a journey, so this is not closed. Left as is.

### Double-dipping, card by card
- **Shepherd, Ring.** It gave free radiant damage every time you healed, the class's signature move, which is the checklist's own example of double-dipping. **Fixed:** replaced with Ring Out (Free, spend 1 Resonance): a Dying ally acts as if not Dying on its next turn.
- **Drowning Scale.** Breath fills from creatures dropping to 0 HP, which happens in fights the party is having anyway. The Reaction cost and the WIL save make it a choice, and the spec names it best-in-class, so it stays. It is the softest refill in the deck.
- **Songweaver.** Crowd clears by playing an hour for a new audience. Songweavers already perform in downtime (the class's Perform! feature), so the reset costs little. Mild; left.
- **Cheat.** The refill is gambling, which a Cheat does anyway. The spec uses this as its example of a good refill, so it stays.
- **Commander.** Authority fills from allies' damage. Left, with the reason in `tools/audit_exceptions.json`.
- Everything else fills through the world: a journey, a person, a place, a ritual.

### Rules slips
- **Name collision.** Rusted Spear's power was called Mend, which is a Shepherd class ability. **Fixed:** renamed Scrape. A scan of every power name against the rules text found only this one, plus Gust, a GM-guide monster ability, which is harmless.
- **Memory tracking.** Hellhide's Terror lasted "for good", so the table had to remember every creature that ever failed the save. **Fixed:** it lasts the encounter.
- **"Scene"** is not a Nimble duration, but Sejr runs on scenes (But+ fires at each scene change), so Tide-Coat, Rune Fragment and Rusted Spear use a unit the table already tracks. Left.

### Subjective gates
Seven cards hinge on "genuine" or "real" (Cheat, Commander, Oathsworn, Shadowmancer, Shepherd, Drowning Scale, Apology Blade). Stonetop does the same, and you are the referee, so this is a style choice. Two are worth a plain test, though: "a real wrong" (Apology Blade) and "genuinely believed they had the advantage" (Cheat). For example, the loser staked more than you.

### Canon name-dropping
Placing every object in the setting is good. It also pushed me to add claims canon does not make: the Fallen Angels want the axe back, Erna sells coal, the Observatory lends its glass. Each is marked [NEEDS CANON] in the card's notes. Five such flags would be fine; seven is the point to stop.

### Refills that fight the episode format
Sejr is one gig per session, and the door picks the destination. These refills need a trip the players may never get to choose:
- Derelict Harpoon: back to a derelict in Drendaan
- Valkyrie's Feather: a grave in a world not yet named
- Stormshifter: back to the Revlend Marshes
- Pitch-Sap Harness: the Lost Cavern of the Sundering Saurians
- Rusted Spear: Bloodrust Depths

Recommendation, one table rule: an in-city refill can happen off-screen between episodes, the way absent heroes already tick an arcana ritual. A refill beyond the city needs a gig, and that gig is a ready-made hero stake. The Marshes refills also feed your Neglect clocks, since going there is the way to stop a Neglect clock ticking.

## 2. Your table: a lenient GM and no deaths

You have not killed a player across 4 systems and 7 groups. That changes what these cards are worth.

- **Death-cheating loses value.** Six cards spend their power on Dying or 0 HP: Berserker (Death's Door), Shepherd (Ring Out, Toll), Drowning Scale, Valkyrie's Feather, Binding Linens, Rusted Spear (Spare). At a table where nobody dies, these are insurance against a fire that never comes.
- **Wound prices are cheap.** Twelve cards charge Wounds in their risk or escalation. If Wounds never add up to a death, a Wound is a scratch, and those prices stop biting. The Zephyr's Strain gets stronger at your table, not weaker.
- **What you will enforce.** Time, NPC attention, item damage, and your faction and Neglect clocks. Those are the costs that bite at a lenient table. Recommendation: where a card's only bite is a Wound, add or swap in one of those.

## 3. Where "broken" helps and where it hurts

You plan to supercharge combat, so broken combat power is fine. The real risk is a power that deletes a kind of episode. Your generator's twists ("wrong target", "the patron is the threat") rely on the party not knowing.

- **Fine to be broken (combat):** Sown Teeth, Drowning Scale's Choke, Zephyr, Kettle Plate, Hourglass, Black Lotus.
- **Watch these (they can skip a gig's twist):**
  - Axe of Nine Eyes: always knows where nine creatures are.
  - Hunter's Cord: direction and distance within a mile.
  - Provenance Ledger: names any object's rightful owner.
  - Tally-Stick: Read the Notches shows who owes whom.
  - Broken Verdict: sees lies.
  - Arch-Watch Mirror: sees arch traffic.

  Tool, not nerf: their answers are true but partial. The Ledger names the owner, not why the patron lied about it.
- **Campaign-shaping:** the Forgotten Key opens dormant arches. Sejr's premise is that keys are patron power, and your overview calls a party-owned key "a mid-campaign prize that offends one patron". A Minor arcanum that does it three times per refill hands the party the campaign's central prize at level 1. Recommendation: make it Major, or make every opening uncontrolled and noticed by the patron who holds that arch.

## 4. Changes made in this pass

| Card | Change |
|------|--------|
| Axe of Nine Eyes | Origin moved to Graydust Keep (12_the_deadlands). [NEEDS CANON: the Fallen Angels' claim] |
| Pitch-Sap Harness | Origin moved to the Lost Cavern of the Sundering Saurians (4_the_lower_reaches); Stealth now covers jungles. |
| Shepherd, Bell | Ring replaced with Ring Out (double-dipping). |
| Hellhide | Terror lasts the encounter (memory tracking). |
| Rusted Spear | Mend renamed Scrape (rules collision). |
| Apology Blade | Deliberate wrongs no longer refill Sky (loop). |
| Rune Fragment | True action cost on every rune (false Passive label). |

Origins of the 24 found cards now: upper city 7, worlds beyond 7, Lower Reaches 3, Doorish Hills 3, Revlend Marshes 2, Deadlands 2.
