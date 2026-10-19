# Faction rewards

Decided by the GM: the Forgotten Key and all 11 class arcana are faction rewards. They are never rolled at hero creation. New heroes draw from the 23 found cards in `other_arcanum`.

## Who gives what (suggested)

These are suggestions, read from each card's own object text, and stored in the JSON as `reward` with `status: suggested`. The **form** column matters: several class objects say the item was stolen, pawned or locked away, so a faction can reward the lead to it rather than the item itself. The unlock stays the same either way.

| Card | Class | Suggested faction | Reward form | Why |
|------|-------|-------------------|-------------|-----|
| The Ancestor's Knucklebone | Berserker | Seekers of the Sun | the bone itself | the Seekers return relics to their rightful owners, and a Berserker is the closest heir this one has |
| The Loaded Die | Cheat | Black Hand | the die itself | it belonged to a Black Hand card sharp; the Golden Knights, whose evidence shelf it left, will be offended |
| The Battle Standard of the Nameless King | Commander | Seekers of the Sun | a lead to the Museum vault | it sits in the Museum of Worlds Beyond, the Seekers' headquarters; they fear Nameless King lore, so they may prefer it in a hero's keeping |
| The Borderlands Tracking Cord | Hunter | Golden Knights | the cord itself | the Knights patrol the Doorish Hills roads with local wardens, where the tracker came from |
| The Cracked Lens of Kartan | Mage | University (Mages of Kartan) | a lead to the pawn shop, or a loan to an enrolled student | the lens bears Kartan's maker's mark and Kartan reports it stolen |
| The Broken Verdict | Oathsworn | Golden Council | the scales themselves | a court's scales suit the Council's courts and writs |
| The Hollow Contract | Shadowmancer | Black Hand | the key to the sealed room | the room is in the Lower Reaches, Black Hand ground |
| The Bell of the Three Sisters | Shepherd | Temple of the Three Sisters | a loan of the bell | the temple wants it back for study, so it lends it to a healer it trusts |
| The Theater of Whispers Setlist | Songweaver | [your call] | a lead to whoever stole it | the Theater of Whispers is a place, not a faction; Roselyn Zeshe (the queen's spymaster) is one option |
| Mud from the Revlend Marshes | Stormshifter | Archkeepers | the jar itself | an arch-traveller brought it in, and the Archkeepers register every arrival |
| The Pain Teacher's Wrappings | Zephyr | [your call] | the key to the locked case | the studio sits in the Lower Reaches; no faction is named on the card |
| The Forgotten Key | found | Archkeepers | the key itself | Archkeepers watch its unlock; whichever patron holds the arches it opens is offended |

Coverage of the campaign's four patrons: Archkeepers (Key, Mud), Black Hand (Die, Contract), Golden Council (Verdict, plus the Golden Knights for the Cord), University (Lens). The Seekers of the Sun and the Temple of the Three Sisters also give one or two each. Two cards are left to you.

## Knock-on effects

- **More Major cards at level 1.** Before, a hero drew a found card on a 5-6 only, and 8 of 23 found cards are Major. Now every hero draws a found card, so about one hero in three starts with a Major arcanum, up from about one in nine.
- **The hero card.** In `sejr_generator_lists.txt`, hero() still rolls the class arcanum on a 1-4. The module's header comment gives the new line (`let arc = other_arcanum.evaluateItem;`).
- **The campaign overview** says chargen is "pick one arcanum (class or random)". That line in `setting/sejr_campaign_overview.md` is yours, and I have not edited it.
