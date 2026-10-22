# Faction rewards

Decided by the GM: the Forgotten Key and all 11 class arcana are faction rewards, never rolled at hero creation. New heroes draw from the 23 found cards in `other_arcanum`.

Each class arcanum comes from its class guild (`data/sejr_guilds.json`, `analysis/guilds.md`), earned at Journeyman rank. The Forgotten Key stays outside the guilds.

| Card | Class | Given by | Reward form | Status |
|------|-------|----------|-------------|--------|
| The Ancestor's Knucklebone | Berserker | The Red Sand (Arena of Blood, Lower Reaches) | the lead: the Rolls name the fallen Borderlands fighter, and the guild has the collector's address | adopted |
| The Loaded Die | Cheat | The House (Guildred's Grotto, Lower Reaches) | the lead: the House knows the card sharp, and which Golden Knights shelf the die left | adopted |
| The Battle Standard of the Nameless King | Commander | The Muster (Citadel of the Golden Knights) | a writ to take the Battle Standard from the Museum of Worlds Beyond's vault | adopted |
| The Borderlands Tracking Cord | Hunter | The Wardens' Lodge (the City Walls' gatehouse) | the Borderlands Tracking Cord itself; it was a warden's | adopted |
| The Cracked Lens of Kartan | Mage | The University (Kartan, Tower of the Arcane) | the Cracked Lens of Kartan, lent to a Reader-rank student | adopted |
| The Broken Verdict | Oathsworn | The Sworn Chapter (the Queen's Palace chapel) | a lead to the old court ruin in Sunken Revvia where the Broken Verdict lies | adopted |
| The Hollow Contract | Shadowmancer | The Hollow Circle (the Hole in the World) | the address of the sealed room where the Hollow Contract lies | adopted |
| The Bell of the Three Sisters | Shepherd | The Sisters' Vigil (Temple of the Three Sisters) | the Bell of the Three Sisters, lent | adopted |
| The Theater of Whispers Setlist | Songweaver | The Whisper Company (Theater of Whispers) | the name of whoever stole the Setlist | adopted |
| Mud from the Revlend Marshes | Stormshifter | The Grove Circle (Sunset Grove) | the Mud from the Revlend Marshes itself; the arch-traveller left the jar with the Grove | adopted |
| The Pain Teacher's Wrappings | Zephyr | The Last Studio (the studio in the Lower Reaches from the Wrappings card) | the key to the locked case where the Wrappings lie | adopted |
| The Forgotten Key | found | Archkeepers | the key itself | suggested |

The reward form matters: several class objects say the item was stolen, pawned or locked away, so the guild often gives the lead to it, not the item. The unlock stays the same either way.

## Knock-on effects

- **More Major cards at level 1.** Every hero now draws a found card, and 8 of the 23 are Major, so about one hero in three starts with a Major arcanum (it was about one in nine). Still open.
- **The hero card.** In `sejr_generator_lists.txt`, hero() still rolls the class arcanum on a 1-4. The module's header comment gives the replacement lines: draw from `other_arcanum`, and add `guild_option(cls)` after the Holding line.
- **The campaign overview** says hero creation is "pick one arcanum (class or random)" and gives every hero a holding. Those lines in `setting/sejr_campaign_overview.md` are yours, and I have not edited them.
