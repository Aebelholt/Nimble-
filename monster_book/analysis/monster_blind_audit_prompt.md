# Blind audit: Sejr Monster Book

You are auditing a bestiary for a tabletop campaign. It has 63 entries: the Nimble Game Master's Guide monsters regrouped by family, plus converted and original creatures for a specific setting. You have not seen any earlier review of this book, and you should not try to guess what one said. Work from the material below only.

## Your job

Find what is wrong, weak, exploitable, inconsistent or unplayable, and say how strong each entry is for its level. You are an auditor, not a co-author: do not rewrite entries. A suggested fix may be at most two sentences per entry.

## How to judge

Use these lenses, in this order:
1. **Rules accuracy.** Every mechanic must work under the Nimble rules reference in section 3. Flag invented terms, wrong action economy, conditions used wrongly (for example a condition that the rules define for heroes only), saves other than STR, DEX, INT or WIL, durations the game does not track, armor handled against the rules, minions that break the minion rules, and numbers that contradict the Monster Builder table. Quote the entry and the rule. Also flag the book's own reading guide where it contradicts the rules.
2. **The design standard.** Check each entry against section 2: the entry format, the agency rule, and SEB (Succinct, Evocative, Built). Judge the spirit, not only the word counts. Is the core line evocative and specific to its world? Are the (at most three) abilities distinct and each one clause? Is the creature built from the setting rather than dropped in? Are the tables concrete and usable?
3. **Play in this campaign.** Episodic, drop-in, one gig per session, prep-light GM, solo-capable. Can a GM run the entry from its page? Does its Stage, But+ result, patron hook and verb agree with the campaign tables in section 1? Does it fit its patron's armature? Does it work for one player as well as a full table?
4. **Power and balance.** For each entry, compare HP, damage per round at full output, and save DCs against the Monster Builder row for its level and armor. Show the arithmetic briefly. Rate each entry under, on, or over its level. Note spikes that can delete a hero (large unpreventable damage, action-economy snowballs, damage-to-1 effects), and groupings that break the one-to-three monsters per hero guideline.
5. **Generated-content patterns.** Much of this book was drafted with an AI model. Look for what that produces: template repetition across entries (the same rider on many abilities, the same trait or encounter shapes, the same tactics sentence, the same gig-fit cadence), filler abilities, plausible-sounding mechanics that do not work, subjective gates, lore claims beyond the canon in section 4, invented names that clash with canon, and contradictions between entries.

Keep rules errors (verifiable) separate from design taste (arguable). Do not count strength as a flaw: the GM wants dangerous monsters. Do flag strength or structure that deletes play: a monster that answers the question an episode is built on, or one that cannot be run as written.

## Output

Use exactly these sections.

**A. Entry table.** One row per entry (family entries as one row, with a note if members differ): name, verdict (ship, fix, rethink), the single most important issue, category (rules, standard, play, power, pattern), severity (blocker, major, minor), and power (under, on, over) with the level used.

**B. Findings.** Grouped by lens. Each finding names the entry, quotes the text, and says what goes wrong in play, in one or two sentences. Add a suggested fix where it is short.

**C. Cross-entry.** Interactions that break something: stacked conditions, an ability that negates another entry's counterplay, two entries that cannot both be true, groupings (for example a front rank plus casters) that spike. Say whether each one breaks a fight (acceptable here) or breaks an episode (not acceptable). Include the rival crews and their clocks.

**D. Book level.** Coverage by Stage and by role; repetition; whether the SEB limits produced clarity or lost something needed; the ten fixes you would make first, ranked.

**E. Limits.** What you could not verify, and how confident you are in each section.

## 1. Campaign context

Sejr is an episodic, drop-in Nimble campaign in the City of Arches, a setting where thousands of ancient arches open onto other places and other worlds. The excerpts below come from the campaign overview.

## Pitch and premise

Sejr is an episodic, drop-in Nimble campaign in the City of Arches: one gig per session, played by whoever shows, with arches as cheap transport that patrons control.

The city is thousands of years old and no one controls the arches, but keys exist, and whoever holds a key decides where an arch opens. In Sejr keys are not rare for patrons, so the city's politics are route politics: who can move people and goods wins. The outer regions are neglected, a meta layer the party never sees directly and only meets through consequences.

Heroes are professionals with parallel lives and professional courtesy, thrown together on gigs. Each starts with an unexamined arcanum and a holding in the city. The game is play to find out, with a short list of patrons who return and evolve.

## Format and logistics

Sessions run weekly for three hours with unknown attendance, so every session is a bottle episode that works for a solo player or a full table.

- One gig per session, drawn on the mat, with the arch as the door in and out of the map.
- First session is planned for after Christmas 2026, with a pitch to the players beforehand.
- Players know 5e, so Nimble is taught through its 5e overlap. Characters are quick to make and easy to manage.
- Heroes who are absent are elsewhere in the city. Their players tick an arcana ritual instead of losing progress.
- Levels follow the group: new or returning players join at average group level, framed as the same hero "with a beard" in Mørk Borg style.
- Milestone levelling every two to three episodes, so attendance never splits the party.
- Renown on the episode tables is capped at average group level.

## Generators and tables

Each episode is rolled from three chained d6 tables, then interrupted scene by scene. Rolls scale past the die maximum as renown rises, so heroes grow out of the easy results.

| Table | Roll | Gives |
| --- | --- | --- |
| Direction | Choice, or d6 (1-3 City, 4-6 Arch) | The door for the episode |
| Stage | d6 + renown, capped at average level | 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch |
| Verb | d6 | Find, escort, stop, steal, bury, prove |
| But | d6 | Wrong target, goal flips, patron is the threat, place shifts genre, arch or key intervenes, clock hits early |
| But+ | d6 + scene number | 1-2 foreshadow, 3 faction encounter, 4 monster, 5 twist, 6 dusk, 7+ dark |
| Rooms | d10 + average level / 3 | Empty, trap, hazard, solo, NPC, mob, major hazard, treasure, boss |
| Rival crew | Inside an NPC room | At most once per episode, promoted to the tracker if met twice |

City Stages 1-6 are Market Square festival, Villas of the Second Rise, Public Baths, Cliffs of the Dead, Theater of Whispers and the Arch of Kings.

The tables live in a fork of a Shadowdark dungeon and scenario generator on Perchance. The fork adds a renown and level input, an Arch or City toggle, the But and But+ tables, Arches rumors for the thread board, and a hero card for chargen. Two panels were drafted (lists and HTML) and have not been tested inside Perchance yet.

Factions and fronts enter play only through But+ and the NPC rooms, never through prep, so threats emerge from play.

## Patrons and armatures

Four patrons return and evolve, and each has a fixed armature so dice or a tired GM cannot make them act out of character. Dice roll the how, never the who or why.

| Patron | Wants | Method | Pays / takes | Secret (draft) | Stages |
| --- | --- | --- | --- | --- | --- |
| Archkeepers | Nobody hurt, city undisturbed | Kindness first, then the Golden Knights; they omit, never lie | Pay: key passage, shelter. Take: goodwill | Some arrivals were sent on purpose | Welcoming, wary, gatekeeping |
| Black Hand | Profit nobody can trace | Cut-outs and deniability, violence out of sight | Pay: cash, silence. Take: leverage | Quietly acquiring scholars who can read keys | Errands, entangled, owned |
| Golden Council | Order, and credit for it | Writs, licenses, audits via Roselyn Zeshe | Pay: standing, pardons. Take: your name on the record | Prefers a problem stays useful to justify the Knights | Contracting, auditing, conscripting |
| University | Understand the method, then own it | Examination, grants, tutors | Pay: training, ritual ticks. Take: findings, published as its own | A key-making program | Open lectures, licensing, monopoly |

The University is new to the setting; Kartan is its nearest canon relative. Secrets are drafts: either fixed now, or three candidates per patron locked in on first contact.

Same verb, different success. For "find the relic" the Archkeepers want it returned unopened, the Black Hand want it sold quietly, the Council want it logged and the University want it examined.

**Guardrails**

- A twist is filtered by asking which version of it fits this patron.
- Reactions are not rolled: when the party refuses or betrays a patron, it answers with its Method and Currency.
- Stages move on table choices only. But+ can foreshadow a stage, never trigger it.
- A party-owned key is a mid-campaign prize that offends one patron and becomes a thread.

## Trackers

Prep is the trackers and nothing else. Every episode closes one thread and opens one, and the trackers carry the memory a drop-in table lacks.

| Tracker | Holds | Moves when | Payoff |
| --- | --- | --- | --- |
| Thread board | Six index cards: hero ties, arcana, Bia's labyrinth past, Arches rumors, gazetteer hooks | One closes and one opens each episode | Next episode's door |
| Neglect clocks | One hidden clock per skipped place: Marshes, Hills, Deadlands, Borderlands, Lower Reaches | Each City episode ticks the place the party skipped | A full clock reaches the holding as refugees, raiders, prices or a ruined supplier; commit to one payoff every 3-4 episodes |
| Faction clocks | One six-step clock per patron and per local band or rival crew met | Player choices, never But+ alone | A full clock becomes a thread and the faction acts in the city |
| Renown | A number, +1 per episode | Each episode finished | Capped at average group level; sets Stage and room scaling |
| Arcana ritual | One track per hero | Absent players tick once; trait disadvantage ticks; play can tick more | The final step is only played at the table |

A rival crew met twice, or a local band named on first meeting, goes onto the faction tracker. A "last time" line opens every session so absent players re-enter in one sentence.

**How monsters enter play.** A monster appears as a But+ Monster result (d6 + scene number, so a 4), as a Faction result (3), inside an episode's rooms (solo, mob and boss rooms), or as a rival crew (at most once per episode, promoted to the tracker if met twice). Heroes start at level 1 and renown is capped at average group level, so low Stages are met first. The GM is very lenient: no player death across 4 systems and 7 groups. A dangerous monster is welcome; one that cannot be run, or that removes a player from the game, is not.

## 2. Design standard

This is the GM's own design guide for the book. Use its rules as a lens, but judge outcomes at the table.

### Entry format

Every converted or original entry has: a header (world, tier, role, level), a **core line** (one sentence: where the creature comes from in its world and what it does), a one-or-two-sentence italic description, a stat row (HP, Armor, Speed, DC, Stage) or, for a family, a roster table with a per-member action list, an **In play** line (what it wants, whom it targets first, when it breaks off), a designer note, a sources line, six **Traits** (rollable details of this individual), four **Encounters** (specific scene hooks that imply a decision), four **Lairs** (what is found in its territory; at least one implies something already happened, at least one is a clue to behaviour), four **Rumours** (two true, two false, for Lore checks; true ones tactically useful, false ones plausible and sometimes dangerous), and a **Gig Fit** block: Verb (from Find, Stop, Steal, Escort, Prove, Bury), But+ (stage and context), Patron hook (which faction sends the party and why), and the City of Arches name (what locals call it).

Costs use Nimble language: 1 Action, 2 Actions, Free, Reaction, 1/round, 1/encounter. Damage uses Nimble dice; the leftmost die is the Primary Die. Tiers are Minion, Standard, Elite, Boss. Roles are Lurker, Controller, Brute, Artillery, Skirmisher, Defender.

### SEB: Succinct, Evocative, Built

Find the core of the creature, or better the family, and cut the rest, for maximum evocative succinct clarity. Built means of the world: grown by its place and history, less gonzo and more evolutionary. The model is one line per enemy: one stat row plus at most three abilities, each one clause. Limits applied to every non-Core entry: core line at most 22 words; at most 3 abilities (per member for families); at most 20 words per ability effect; table rows at most 22 words; designer note at most 45; In play at most 25; Gig Fit lines at most 30.

### The agency rule

When a monster would take away agency from a hero (incapacitate, paralyze, petrify or stun), use Dazed instead (one action for one round), or express the threat through reduced action economy, movement restriction (Slowed, Grappled, Restrained, Prone), positioning (forced movement, drag, pull) or tactical disadvantage (Frightened, Hampered). Never: Incapacitated, Paralyzed, Stunned or Unconscious as a monster-dealt condition on a hero. Players dislike losing their turn, and the game's designers say so. A threat should be geometric, not temporal: the benchmark is the carrion crawler, built as a moray eel (it holds a crack, drags prey through a bottleneck, and retreats; the victim keeps acting but the choices are worse), not as a paralysis trap.

The rule applies to converted and original entries. The Core Bestiary reproduces the GM Guide's printed stat blocks (regrouped and lightly formatted), so printed conditions stand there.

### 5e conversion table

| 5e | Nimble |
|---|---|
| Paralyzed | Slowed plus Grappled, never Incapacitated |
| Stunned, Incapacitated | Dazed |
| Poisoned | Poisoned (disadvantage) or Slowed (movement) |
| CON save | STR save |
| WIS or CHA save | WIL save |
| Bonus action | Free if quick, else 1 Action |
| Legendary action | 1/round ability or a normal action |

5e conversion (GM Guide): CON save becomes STR save. WIS and CHA saves become WIL. Paralyzed, Stunned, Unconscious: use the new Dazed condition instead (-1 action). A GM Guide monster rolls a plain d20 for saves.

### Stat discipline

HP, damage per round and save DC follow the Monster Builder row for the entry's level (section 3). A glass cannon may use the HP of a lower level and the damage of a higher one; an Elite takes HP from roughly two levels up. Levels follow this table, not the levels in 4e or 5e source books. Medium Armor should not appear before level 3 and Heavy Armor not before level 8 (GM Guide); the Core Bestiary prints a few exceptions.

### House style

No em dashes or en dashes anywhere in the book (the author's rule); ranges use hyphens. Do not flag the absence of dashes.

## 3. Rules reference

Source: the repository's copies of the Nimble Core Rules and Game Master's Guide. Where the book's own reading guide disagrees with this section, this section wins.

### Conditions (Core Rules)


- Blind. Can't see. Attacks against you have advantage, and your attacks have disadvantage. 
- Dazed. Heroes lose 1 action; monsters lose their move OR 1 attack on their next turn. 
- Dying. At 0 HP. Max 1 action. Taking damage while Dying causes 2 Wounds; a crit causes 3 instead. 
- Empowered/Weakened X. Attack damage increased/reduced by X. 
- Frightened. Disadvantage on rolls when source of fear is near; Speed halved when moving closer to it. 
- Incapacitated. Can't do anything. Attacks against you have advantage, and melee attacks that hit, crit. 
- Invisible. Cannot be seen. Your attacks have advantage, and attacks against you have disadvantage. 
- Poisoned. Disadvantage (typically, healing ends). 
- Prone. Movement costs twice as much, and disadvantage on attacks. Melee attacks against you have advantage; Ranged have disadvantage. Spend 3 spaces of your Speed to stand up. 
- Restrained. Can't move. Attacks against you have advantage. 
- Silenced. Cannot cast spells or use other abilities that require speaking (e.g., Commander's Orders). 
- Slowed. Speed halved during your next turn. 
- Taunted. Disadvantage on attacks except against the most recent taunter.

Dying heroes have max 1 action. Heroes get 3 actions per turn; Reactions cost 1 action and are used off-turn, each 1/round; "Free" costs no action. A 1 on the Primary Die always misses; rolling the maximum on the Primary Die is a crit, roll it again and add, repeating. Crits ignore armor. Heroes' extra attacks in a turn are Rushed (cumulative disadvantage). Hero saves: STR, DEX, INT, WIL. When a hero's ability forces an enemy save, the enemy rolls with increasing advantage.

### Monster rules (GM Guide)

Running Monsters You, as the GM, control the monsters during combat. Monsters do NOT have 3 actions like heroes, nor do they use Heroic Actions/Reactions or have Rushed Attacks. They only move, use the actions listed on their stat block, and their turn ends. Monsters die when they reach 0 HP. Default Monster Stats Unless otherwise noted, assume that monsters are medium -sized, unarmored, have Speed 6 (can replace a single attack to move again, or replace either one of those to retry a save), attacks have Reach 1, and roll 1d20 for all saves (though some monsters may have advantaged/disadvantaged saves or checks when appropriate). [hp] The monster's Hit Points (HP). [ar] The monster's Armor (M or H). [mv] The monster's Speed ([fly]Fly [bur]Burrow). [sv] The monster's saves (+ or –). This stat block for a goblin serves as an example: lvl 1/2, small Goblin [hp]15 Haha, Didn't Hurt! Whenever you survive an attack, deal 2 psychic damage (ignoring Defense). Stab. 1d6 (or Shoot, Range 8). Can't crit. No Speed, armor, or saves are listed, so we use the defaults. If he ever takes a total of 15 or more damage, he'll die. His LVL of 1/2 means 2 goblins are about as strong as a level 1 hero. On the goblin's turn, the GM could move him up to 6 spaces and attack (stab or shoot) in either order. Whenever he survives an attack, his special ability: Haha, Didn't Hurt! triggers. Monster Armor While most monsters are unarmored and take damage normally, some higher level creatures are tougher to take down: • Medium Armor ([ar]M) monsters take –10 damage from each attack. • Heavy Armor ([ar]H) monsters take –20 damage from each attack. Dealing With Armor? Critical hits ignore armor, as do some spells/abilities. This means certain weapons and spells are better or worse against armored foes! This is also a great opportunity to remind your players about working together: Grappling, Helping, Assessing, and using their other abilities to increase their chances of circumventing it. Minions Minions are low-threat monsters that are easy to kill individually but dangerous in numbers. They add dynamic movement and excitement to battles without bogging down gameplay. Minions have: • No HP to Track. Any damage kills a minion. • Easy Attacks. Each minion attacks with a single damage die, cannot crit, misses on a roll of 1, and ignore dis/advantage. • Simplified Defense. When multiple minions attack a single target, their damage is combined and counts as a single attack, so heroes can Defend or Interpose against them all at once. Act Together! If your heroes are facing down a pack of goblin minions, rather than moving them one at a time, all minions attacking a particular hero should move and attack at the same time. For Example: 5 minions move next to Grudge and attack him. Roll and add up 5d6 (ignoring any 1s). Fast and easy! Monster Levels Each monster also has its own level to judge roughly how difficult or easy it will be for your party to fight. A level 1 monster should be a challenging but winnable fight for a level 1 hero (see Combat Encounter Guidelines on pg. 22 for more). MONSTERS 8 9

Creating Encounters Monster Budget. Making encounters in Nimble is easy! Simply add up the total levels of the heroes and this is your Monster Budget (e.g., if you have 3 level 2 heroes, their total is 6). Using up all of this budget should be Hard (a challenging but fair fight); less than that: Medium or Easy; greater than that: Deadly, or Very Deadly. Example: A griffon is a level 4 monster. So a flock of 6 griffons (24 monster levels total) would be a Hard encounter for: 6 level 4 heroes, 4 level 6 heroes, or 3 level 8 heroes. How many monsters? Typical encounters should have 1–3 monsters/hero (excluding minions). For an epic fight against a single bad guy, use a legendary monster, and if you want hordes of monsters, use minions. Important Note! If the heroes or monsters greatly outnumber one another the encounter may be easier or harder than anticipated. Stick to 1–3 monsters/hero! • Easy. Using only 50% of the Monster Budget is an easy encounter. Heroes will lose minimal HP and resources, making these encounters great for testing new abilities or gauging progress. They help players feel powerful, especially after leveling up. Use 0–1 Easy encounters in a typical session. • Medium. Using 75% of the Monster Budget, expect some HP loss and moderate resource expenditure. Heroes will get hurt but shouldn't drop to 0 HP. Use 0–2 Medium encounters in a typical session. • Hard. Using 100% of the Monster Budget means this encounter will be challenging but fair. Heroes must use significant resources; some may drop to 0 HP, but none should die outright, barring poor tactics or bad luck. Use 1 Hard encounter in a typical session. • Deadly. Using 125% of the Monster Budget is Deadly. Heroes will likely take Wounds, one may die. Requires strategic thinking and teamwork. Suitable for tough battles, well-equipped parties, or to close out a story arc. Use sparingly! • Very Deadly. Using 150% of the Monster Budget is dangerous—bordering on a Total Party Kill (TPK). Unless they are extremely well optimized and play exquisitely, there is a high likelihood that at least one will die. Use only when the heroes made a bad mistake: you telegraphed danger and they failed to heed your warning.

Armor Variety Armored monsters are not intended to be harder than an equal-leveled monster; rather, armor promotes variety in combat—allowing different abilities and tactics to shine. Medium Armor monsters should not be introduced any earlier than level 3. Before that, heroes may not have the tools to meaningfully interact with it and it could feel overly frustrating rather than tactically interesting. Save Heavy Armor until the heroes are level 8+. As heroes level up, they will gain more tools and tactical knowledge to deal with armor—then you can feel free to use it more often to add flavor, as the story demands, or to encourage a change in tactics and teamwork.

Monster attack die by level (GM Guide): levels 1-3 d4; 2-5 d6; 4-10 d8; 10-13 d10; 12-17 d12; 15-20 d20. Thematic: d4 undead, d6 goblins, d8 humans, d10 beasts, d12 giants, d20 the mightiest.

### Monster Builder table (GM Guide)

Damage per attack is the damage a monster deals per attack when it makes 1, 2 or 3 attacks a turn. HP columns are by armor. An asterisk means armor is not recommended at that level. The sample dice show how to reach the damage.

| Lvl | HP none | HP Medium | HP Heavy | Dmg/round, 1 atk | 2 atks | 3 atks | Sample dice, 1 atk | 2 atks | 3 atks | Save DC | CR |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1/3 | 10 | — | — | 2.5 (can't crit) | — | — | 1d4 (can't crit) | — | — | 10 | 1/8 |
| 1/2 | 15 | — | — | 4.5 (can't crit) | — | — | 1d6+1 or 1d8 (can't crit) | — | — | 11 | 1/4 |
| 1 | 21 | 12* | — | 7 | — | — | 2d6 or 1d12 | — | — | 11 | 1/2 |
| 2 | 31 | 19* | — | 10 | 4 | — | 3d6 or 1d6+6 | 1d6 | — | 11 | 1 |
| 3 | 41 | 27 | — | 14 | 6 | — | 1d8+10 | 1d10 | — | 12 | 1 |
| 4 | 52 | 37 | 24* | 17 | 8 | — | 2d6+10 | 1d6+5 | — | 12 | 2 |
| 5 | 64 | 49 | 30* | 20 | 9 | 5 | 1d10+15 | 1d6+6 | 1d8 | 13 | 2 |
| 6 | 75 | 60 | 37* | 24 | 10 | 6 | 1d8+20 | 3d6 | 1d10 | 13 | 3 |
| 7 | 87 | 72 | 44* | 27 | 12 | 7 | 1d12+20 or d44 | 1d8+8 | 1d12 | 13 | 3 |
| 8 | 100 | 84 | 60 | 30 | 13 | 7.5 | 2d8+20 | 1d6+10 | 2d6 | 13 | 4 |
| 9 | 112 | 95 | 73 | 33 | 14 | 8 | 1d6+30 | 1d8+10 | 1d6+5 | 14 | 4 |
| 10 | 126 | 107 | 88 | 37 | 16 | 9 | 2d6+30 or d44+10 | 1d12+10 | 2d8 | 14 | 5 |
| 11 | 140 | 121 | 97 | 40 | 17 | 10 | 2d8+30 or d66 | 1d12+10 | 1d10+5 | 14 | 6 |
| 12 | 155 | 135 | 105 | 43 | 19 | 11 | 2d12+30 | 1d8+15 | 1d20 | 15 | 7 |
| 13 | 170 | 150 | 112 | 46 | 20 | 12 | 1d20+35 or d66+10 | 1d10+15 | 1d8+8 | 15 | 8 |
| 14 | 186 | 165 | 119 | 49 | 22 | 13 | 1d20+40 or d88 | 2d8+10 | 1d6+10 | 15 | 9 |
| 15 | 202 | 180 | 125 | 52 | 23 | 13.5 | 2d10+40 | 1d6+20 | 1d6+10 | 15 | 9 |
| 16 | 219 | 196 | 139 | 55 | 25 | 14 | 1d10+50 | 1d8+20 | 1d8+10 | 16 | 10 |
| 17 | 236 | 212 | 152 | 58 | 26 | 15 | 2d8+50 | 1d12+20 | 1d10+10 | 16 | 11 |
| 18 | 254 | 230 | 167 | 61 | 27 | 16 | 2d10+50 or d88+10 | 1d12+20 | 1d10+10 | 16 | 12 |
| 19 | 272 | 247 | 182 | 64 | 28 | 17 | 1d8+60 | 1d6+25 | 1d12+10 | 17 | 13 |
| 20 | 292 | 266 | 199 | 68 | 30 | 18 | 2d10+60 | 1d20+20 | 1d12+12 | 18 | 14 |

For monsters with no ability, increase HP or damage one step. You may mix levels: a glass cannon has the HP of a lower level and the damage of a higher one. d44, d66 and d88 mean roll two dice of that size, the leftmost as tens and the second as ones.

## 4. Canon and decisions

### Canon the book may rely on

Names below exist in the setting books. Treat them as canon. Treat any claim about them that goes beyond this list (who wants what, what a place sells or allows) as possibly new canon and say so.

- City: Archkeepers (greet arrivals through the arches; arrivals usually have no memory), Golden Order (Queen Karsara Aventus IV, the Golden Council, the Golden Knights: Lord Bianca Swifthand commands, Joslyn Halfcloak is second, Citadel of the Golden Knights with two dozen guards and nine veterans), Black Hand (criminal guild of the Lower Reaches), Mages of Kartan (Tower of the Arcane, laboratories below), Children of Ibraxus (demon cult; Lady Kalya Nightraven, her bodyguard Silent Asher and her mercenary Steel Hands), Temple of the Three Sisters, Theater of Whispers, Roselyn Zeshe (the queen's spymaster), Adel Rosethorn (Black Hand fence, Adel's Curio Shop), the Black Goat's Tavern, the Rusty Cutlass, Arena of Blood, Vathrex's Forge (Erna Ironhorn), Market Square, Villas of the Second Rise, Public Baths and the Falls of the Three Gods, Cliffs of the Dead, Lost Cisterns, Sunken Revvia, Arch of Kings, the Endless Warrens, the Doorish Hills, the Revlend Marshes, the Deadlands.
- Deathreach: a living dungeon; the Dead Fingers, the Shadowed Deeps, the Abhorrent Vats (spawn gibbering mouthers, black puddings, otyughs), duergar and dwarf forge cities, lizardfolk mages serving the dungeon, Voor the Hunger (a god fed by adventurers' deaths).
- Korax: a red star Veles over a petrified land; the city of Kor, the Red Deeps, mountain temple of Zyx, the Sundered Vaults of Athraxa.
- Eruwynd: the Endless Forest; the elven ruins of Celevis and the Immortal's Blade; Dreadroot (hobgoblin queen Tresiira, the Iron Six); the Bluesteel Armada (seven dwarf sisters).
- Threska and Arkus: Nameless King's ruined worlds; Teveron the Shadowed Mountain (grimlocks, ogres, giants, ogre mages chanting to keep primordials asleep); Averast.
- Maphotar and Io: the Grenneth war machine forged by the archdevil Klamas, Agulon (once Klamas's seat, still held by his servants), the Triset scavengers; Io's Forge of Creation, the Silent Watch, the Iverundians.
- Terrache: the Jaws of Chaos; shadow elf rulers Qinroris and Kraketen; the Violet Eye warlocks of Vestellis; the aboleth Zyn's Pillars of Sin.
- Drendaan: air and sea; Gorvund's Spindle, the city of Barthen (queens Varuel, Nora, Thrancev), Irathas, the djinni Kesset.
- Vynan: the Forgotten Laboratory; the lich Ivextus, storm giant Uzul, the crashed ship Yondoth, doppelganger replacement agents.
- Drakeholm: the Chromatic Dragon Queen and Metallic Dragon King, Galeos Titancowl, the World's Wound.
- The Ice World has no chapter in the setting books. The campaign's only canon for it is a world of ice with bear lodges whose hunters blow a bear-lodge horn.
- Slang names in each entry's Gig Fit (for example "Warreners", "Drainhands", "Gilt") are coined by this book, not canon. Flag any that clash with canon.

### Decisions the GM has made (do not flag as errors)

- Priorities: fun first, rules second, lore third. This is an arches-first campaign about discovery and exploration, not a lore-faithful one. Where the book bends or invents setting detail to be more engaging, that is intended. Do not flag canon divergence as an error; flag it only when it makes an entry less usable at the table. The GM paraphrases any canon from a summary on the day, so nothing exists before it reaches the table: weight a finding by whether it hurts play, not by whether it contradicts a setting book.
- Keys and arches are common and strong in this campaign (arcana fill the world). A key-bearer being ignored by Arch Guardians is a feature, not a loophole. Judge an entry by whether it is forwardly engaging (a clear next move for the party), not by how much intrigue it carries.
- Core Bestiary stat blocks are the GM Guide's, regrouped by family and lightly formatted, with every level, HP, armor value and dice expression machine-checked against the Guide text. Judge their presentation (family grouping, wording of abilities, Stage, tables, Gig Fit, the index) and internal consistency, not the printed numbers.
- Printed Core conditions stand, including the Basilisk's Petrified (three stacked Lithify gazes over 10 minutes) and the Specter's "set HP to 0".
- The agency rule applies to converted and original entries only.
- Stage assignments are by theme; the Guide gives none. Arch Guardians read "Any arch" on purpose. The Clay Guardian heals from fire on purpose. The Index of Named Moves rulings are accepted readings.
- Stat levels follow the Monster Builder table, not source levels. Entries cite a spreadsheet index of monster books; the text of 4e Monster Manuals 1 to 3, the Tales of the Valiant Monster Vault and Keith Ammann's tactics books was consulted for some entries, other books were not. Where a source line says original, no source text was used.
- The Ochre Jelly appears twice on purpose (Core Oozes, and a Deathreach Elite).
- Encounters at Stage 13 and above may depend on terrain; making every encounter context-independent was considered and deferred.
- Two rival crews exist (the Sterling Scabbards, the Steel Hands) with six-step clocks and campaign ladders; a clock moves by player choices, never by But+ alone.
- A Dolmenwood-style field set (number appearing, hoard, speech) and Elite lairs are not yet in the book.
- Scope for this round: critique only monsters up to level 4, a party of level 3. Entries wholly above level 4 are parked: do not critique them (you may list them as parked in section A). For a family that spans levels, critique members up to level 4 and the family's shared text.
- The reading guide's Turns, Saves and Holds lines are the book's rules for how a monster's costs, saves and escapes work; check entries against them, and flag a conflict with section 3.

## 5. The book

Everything below is printed in the book as a GM would read it, in book order.

#### Reading an entry (printed in the book)

- **Level.** Monster Builder level (GM Guide). Use it for encounter budget; HP, damage and save DC follow its row.
- **Stage.** Where the creature turns up on the Sejr Stage table. 1-6 city sites, 7-8 Lower Reaches, 9-10 Lost Cisterns, 11-12 Sunken Revvia, 13+ through an arch. Arch-native monsters also appear on any Arch episode to their world.
- **Damage.** The leftmost die is the Primary Die. A 1 misses; a max roll crits and explodes. Crits ignore monster armor.
- **Armor.** Medium (M): -10 damage from each attack. Heavy (H): -20. Crits ignore armor.
- **Turns.** A monster's turn is a move plus the attacks on its block. 1 Action is one of its attacks; 2 Actions replaces all its attacks that turn; Free costs nothing; a Reaction happens off its turn on its printed trigger. 1/round and 1/encounter cap any of these.
- **Saves.** Monsters roll a plain d20 for saves. Heroes save against the DC printed in the action, or the stat row's DC if none is printed.
- **Holds.** Grappled and Restrained heroes still act. To escape a Grapple, spend an action on a STR or DEX save against the printed escape DC; a crit on either creature also frees them.
- **Agency.** No converted action in this book takes a hero's whole turn. Paralysis, stun and sleep from the source monsters are rebuilt as Dazed, Slowed, Grappled, forced movement or terrain.
- **Core Bestiary.** The first section holds the GM Guide's own monsters, grouped by family, with the stat blocks exactly as printed. Printed conditions stand, including the Basilisk's Petrified. A family entry has one roster table, then actions by member. Groups per hero are the GM Guide's sample encounters, where it gives them.
- **New entries.** The Sterling Scabbards (a rival crew), Hedge Casters, Children of Ibraxus and the Serpent Cult of Vithra are original to this book, written to the GM Guide's Monster Builder table.
- **Rumours.** ⊤ is true, ⊥ is false. Give one per Lore success; a false one costs nothing to believe until it does.

---
## Core Bestiary

### Kobolds
*Core Bestiary · Minion / Standard · Skirmisher · Levels 1/3 to 3*
*Knee-high dragonlings in scavenged scale, each certain they are the last of a great army. When a friend falls they shout and stab whoever did it, then go back to arguing about whose turn it is to hold the torch.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Kobold Minion | Min | Minion | None | 6 |
| Kobold | 1/3 | 10 | None | 6 |
| Kobold Sneak | 1 | 20 | None | 6 |
| Kobold Clanger | 2 | 16 | Medium | 6 |
| Kobold Trapper | 2 | 30 | None | 6 |
| Kobold Denwarden | 3 | 30 | Medium | 6 |

Stage 7-10. Groups per hero: Level 1: 2-3 Kobolds. Level 2: 2 Kobolds + 1 Sneak + 1 Minion. Level 3: 2 Sneaks + 2 Minions. Level 4: 2 Kobolds + 1 Denwarden + 1 Minion.

**Actions**
*Kobold Minion*
- **Stab** (1 Action) 1d4. Follows the GM Guide minion rules.
*Kobold*
- **Nooooo!** (Passive) When an ally within Reach 2 dies, attack for free.
- **Stab** (1 Action) 1d4. Or Sling, Range 8. Can't crit.
*Kobold Sneak*
- **Sneaky!** (Passive) You may move before using Nooooo!
- **Nooooo!** (Passive) When an ally within Reach 2 dies, attack for free.
- **Stab** (1 Action) 2d4. Or Sling, Range 8.
*Kobold Clanger*
- **CLANG!** (Passive) Allies who hear your clanging roll 1 additional die whenever they attack.
- **Preoccupied noisemaker** (Passive) Doesn't attack.
*Kobold Trapper*
- **Nooooo!** (Passive) When an ally within Reach 2 dies, attack for free.
- **Throw scorpion** (1 Action, Range 8) 2d4+2.
- **Trap!** (Passive) When an enemy moves adjacent to you or an ally, they trigger one of your traps (1/encounter each). BEEES!: 4d4 damage that doesn't miss, half to all adjacent creatures. HIDDEN NET!: Restrained, escape DC 10.
*Kobold Denwarden*
- **Nooooo!** (Passive) When an ally within Reach 2 dies, attack for free.
- **Hoooold!** (Passive) Adjacent allies gain Medium Armor.
- **Stab** (1 Action, ×2) 2d4+2. Or Sling, Range 8.

**In play.** Wants the den kept and the shinies safe. Goes for whoever killed a kobold, then whoever carries the shiniest thing. Breaks off when the Denwarden falls, into holes too small to follow.
**Designer note.** Printed GM Guide blocks, unchanged. The whole family runs on Nooooo!: every kill is a free swing for the neighbour, so the question is who dies first and where the rest are standing. Kill the Clanger and the Denwarden early, then the line. The GM Guide's warning applies in full: outnumbering the party more than three to one makes even weak monsters lethal. The Lower Reaches is kobold ground, and the Black Hand pays them in shinies.
**Sources.** Nimble GM Guide, Bestiary: Kobolds.

**Traits (d6)**
1. One wears a Golden Knight's dented helmet as a hat and will not hear that it is a hat.
2. Soot-and-spit clan marks on its scales, redone every morning, slightly different each time.
3. It leads a pet rat on a string. The rat is better armed.
4. Speaks Common in a perfect Villas drawl, copied from a noble it once robbed, and only when angry.
5. A necklace of teeth, none of them kobold, and one of them far too large for anything in the city.
6. Limps from a trap it set itself, and tells everyone about it.

**Encounters (d4)**
1. A kobold blocks the way with a hand-painted TOLL sign nailed to something that is not a door: one shiny each, or go around.
2. Three kobolds push a cart of stolen goods and argue over whose turn it is to steer. One crate carries a hero's holding mark.
3. A single kobold runs up, begs asylum from its own clan, and offers a map for a blanket. Eleven more are behind it, annoyed.
4. A kobold sells a secret: the safe way past 'the thing in the dark'. The route is true. The price is a favour, and it will collect.

**Lairs (d4)**
1. Every doorway has an ankle-high trip-wire and a Draconic warning sign the kobolds consider polite. Behind the third door hangs a net of rusted bells.
2. Walls plastered with stolen paper: tavern bills, wanted notices, love letters, a University syllabus. The throne is a coal scuttle.
3. A floor of glued shinies in patterns that mean something to kobolds. A clue to who stole what, if you can read the pattern.
4. A tunnel mouth rigged to collapse, a bucket of scorpions on a pulley above. Someone already tripped it. The scorpions are loose.

**Rumours (d4, Lore check)**
1. ⊤ When one falls, a neighbour gets a free hit. Fight them in a line so only one can reach you.
2. ⊤ The little one banging the pot makes every one of them hit harder. Silence it first.
3. ⊥ They run when you draw steel. They're cowards, every one.
4. ⊥ They only trap the back doors. The front is always clear.

**Gig Fit**
- Verb: Steal / Stop
- But+: Monster result at Stages 7-10, and any 'kobolds' band at any Stage. Best as the thieves behind the episode's missing object.
- Patron hook: A Black Hand fixer's shipment went missing in the Lower Reaches. He wants one crate back, unopened, and does not care how many kobolds it takes.
- City of Arches name: "Shiny-biters": Lower Reaches name, because they bite anything that glitters. Hands in your pockets down there.

### Bandits
*Core Bestiary · Minion / Standard · Skirmisher · Levels 1/3 to 4*
*Hard men and women with a knife and a bad month. They want your money, and every one of them panics when it is their own blood on the ground.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Bandit Minion | Min | Minion | None | 6 |
| Bandit | 1/3 | 10 | None | 6 |
| Bandit Hunter | 1 | 17 | None | 6 |
| Bandit Bruiser | 2 | 27 | None | 6 |
| Bandit Assassin | 2 | 20 | None | 6 |
| Bandit Mage | 4 | 40 | None | 6 |
| Bandit Captain | 4 | 35 | Medium | 6 |

Stage 1-8.

**Actions**
*Bandit Minion*
- **Inept** (Passive) Your attacks miss on 8.
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **I'll cut ya!** (1 Action) 1d8. Follows the GM Guide minion rules.
*Bandit*
- **Inept** (Passive) Your attacks miss on 8.
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **Hand it over!** (1 Action) 1d8. Or Shoot, Range 8.
*Bandit Hunter*
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **Battlebow** (1 Action, Range 12) 2d8.
*Bandit Bruiser*
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **And STAY down!** (1 Action) 2d8. On damage, Prone.
*Bandit Assassin*
- **Sneak** (Passive) You are Invisible until you attack.
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **Poison blade** (1 Action, ×2) 1d8. On damage, Dazed.
*Bandit Mage*
- **Spark step** (Passive) When damaged, teleport 4.
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **Arc lightning** (1 Action, Range 12) 3d8. Also hits the next closest creature, friend or foe. "Out of the way!"
*Bandit Captain*
- **Strict training** (Passive) Your allies are NOT Inept.
- **Mortal panic** (Passive) Attacks miss you on a 2 or less.
- **Slice** (1 Action, ×3) 1d8. Or Shoot, Range 8.

**In play.** Wants the purse, not the fight. Hunters shoot the one who looks richest, a Bruiser puts the toughest hero on the ground, and everyone breaks off the moment the Captain falls or the purse is in hand.
**Designer note.** Printed GM Guide blocks, unchanged. Mortal Panic is the point: bandits are fragile (a 2 or less misses them) and dangerous only in numbers, so the Captain's Strict Training is the real stat to watch. In Sejr they are the street-level Black Hand: cut-outs with knives, deniable. They work as the enforcement end of any episode where someone wants something taken without a name attached.
**Sources.** Nimble GM Guide, Bestiary: Bandits.

**Traits (d6)**
1. Wears a stolen Golden Council badge pinned upside down, so it looks like a mistake and not a lie.
2. Counts coins with a thumb, out loud, in Lower Reaches slang. The numbers are wrong.
3. A healed brand on the wrist: three short lines, a Black Hand debt mark.
4. Polite, almost sorry. Apologises for every cut.
5. Missing two fingers on the sword hand and fights better for it, out of spite.
6. Carries a child's wooden horse in a pocket, and will not discuss it.

**Encounters (d4)**
1. Four bandits want a toll and have already agreed what is polite. If the party pays, they are escorted out, and the bandits visit the same hero again next week.
2. A bandit crew is robbing someone else, a frightened merchant, and has not noticed the party. The merchant has noticed them.
3. Bandits offer to sell the party back something taken from them last night, at two-thirds the price. The thing is real. They know where the rest is.
4. A wounded bandit lies on the ground and begs. The others are close and will not leave their friend. They will bargain, and they are scared.

**Lairs (d4)**
1. A shuttered inn with the sign turned face down. Every room has a loaded crossbow aimed at the door and a note, in a woman's neat hand, asking guests to knock.
2. A rented warehouse stacked with other people's crates, each tagged with a coloured thread: whose they were, what they paid.
3. A cellar with a ledger and a very patient bookkeeper. The bandits report to her, not to the Captain.
4. A crowded tenement floor where bandits live as neighbours, with children and laundry, and no one will ever testify.

**Rumours (d4, Lore check)**
1. ⊤ They panic when bloodied. Hit one hard and the rest lose their nerve.
2. ⊤ Hurt the Captain first. Without him, the hired knives stop knowing how to fight.
3. ⊥ Bandits never attack a group of five or more. Walk in numbers and they let you pass.
4. ⊥ The Black Hand protects its own. Name a Black Hand fixer and they will put down their blades.

**Gig Fit**
- Verb: Escort / Steal
- But+: Faction result at Stages 1-8, with the Black Hand as patron or enemy. Good first fight for new heroes and a clean way to introduce a fixer.
- Patron hook: A merchant of the Villas of the Second Rise needs a cart moved through the Lower Reaches without a Black Hand toll. The toll is the bandits.
- City of Arches name: "Cut-purses" in the Market Square; "Hand men" in the Lower Reaches, because everything they do has the Hand's permission.

### Goblins
*Core Bestiary · Minion / Standard · Skirmisher · Levels 1/2 to 2*
*Green, cunning, and thriving on the edge of chaos. They mock you mercilessly when they can, and every hit that misses is a joke at your expense.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Goblin Minion | Min | Minion | None | 6 |
| Goblin | 1/2 | 15 | None | 6 |
| Bugbear | 2 | 30 | None | 6 |
| Goblin Ratrider | 2 | 30 | None | 10 |
| Goblin Taskmaster | 2 | 30 | None | 6 |

Stage 7-10, 13+. Groups per hero: Level 1: 2 Goblins or 3 Minions. Level 2: 3 Goblins or 1 Bugbear. Level 3: 2 Goblins + 1 Bugbear or Taskmaster. Level 4: 2 Goblins + 1 Taskmaster. Level 5: 1 Goblin + 1 Ratrider + 1 Bugbear. Level 6: 1 Bugbear + 1 Ratrider + 1 Taskmaster.

**Actions**
*Goblin Minion*
- **Haha, missed me!** (Passive) Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense).
- **Stab** (1 Action) 1d6. Follows the GM Guide minion rules.
*Goblin*
- **Haha, didn't hurt!** (Passive) Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense).
- **Stab** (1 Action) 1d6. Or Shoot, Range 8. Can't crit.
*Bugbear*
- **Bash** (1 Action, Reach 2) 3d6. On damage, the target's next attack is disadvantaged.
- **Javelin** (1 Action, Range 8) 2d6. Use instead of Bash.
*Goblin Ratrider*
- **Haha, nice try!** (Passive) Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense).
- **CHAAARGE!** (Passive) If you move at least 4 spaces in a straight line, your next attack is advantaged.
- **Bite & stab** (1 Action, ×2) 1d6. On crit, Prone.
*Goblin Taskmaster*
- **Gotta do better than that!** (Passive) Whenever you survive an attack, deal 2 psychic damage back (ignoring Defense).
- **Meat shield** (Passive) Can force other Goblins to Interpose for you.
- **Stab** (1 Action) 1d6. Or Shoot, Range 8.
- **Get in here!** (Free, after Stab) Call a Goblin Minion to the fight.

**In play.** Wants loot, a laugh, and never to be the one in front. Taunts the hero who just missed, throws minions at the strongest, and charges the backline with Ratriders. Breaks off the moment the Taskmaster dies.
**Designer note.** Printed GM Guide blocks, unchanged. The family's one rule is that surviving an attack hurts you: every miss costs a hero 2 psychic damage that ignores Defense. A party that spreads its attacks across five goblins takes ten damage a round for free, so focus fire and block the retaliation. The Taskmaster feeds minions into the fight, so killing it first is usually right. In Sejr they are Lower Reaches and cistern vermin with a grudge and a sense of humour.
**Sources.** Nimble GM Guide, Bestiary: Goblins.

**Traits (d6)**
1. Wears one of the hero's earlier mistakes as a trophy: a button, a bootlace, a ribbon.
2. Sings a taunt in rhyming Common, and the rhyme gets worse as the fight goes on.
3. A pet slug on its shoulder, which it feeds from its own mouth.
4. Painted its face with the clan's blood-red stripe and one extra stripe it made up.
5. Carries a jar of its own teeth and offers to trade them.
6. It is the smallest, so the others have given it the best hat.

**Encounters (d4)**
1. A goblin hails the party cheerfully and offers a 'friendly bet': one hero against one goblin, loser gives up a boot. The rest of the goblins are watching, and have bet too.
2. Goblins have captured something they cannot identify and are trying to sell it back to its owner, who is the party's patron.
3. A goblin Taskmaster is bullying a gang of minions into carrying something far too heavy. It would pay anyone to take over.
4. Three goblins ride giant rats straight at the party, shouting a war cry, and one of them is waving a flag that reads PARLEY.

**Lairs (d4)**
1. A den with a floor made of every mean thing: tacks, broken glass, a bucket of slime tied to a door by string. The goblins use a hidden side path, and mock anyone who doesn't.
2. A rat-run warren with a throne of stacked crates, a crown of bottle caps, and a bulletin board of bets: who dies first, who runs, who cries.
3. A kitchen of improvised horrors, a cauldron of unidentifiable stew, and a captive cook with a very tired expression.
4. A cave with a trapdoor in the ceiling, stuffed with goblin minions waiting for someone to look up.

**Rumours (d4, Lore check)**
1. ⊤ Every miss costs you. Don't spread your attacks across a gang of them. Pick one and finish it.
2. ⊤ Kill the Taskmaster and the rest lose their stomach. It's the one making them stay.
3. ⊥ Goblins can't stand daylight. Drag the fight outside and they fold.
4. ⊥ A goblin that laughs at you is bluffing. They always run when it matters.

**Gig Fit**
- Verb: Steal / Find
- But+: Monster result at Stages 7-10, and any 'goblins' band at any Stage. Strong with a Taunt or a prank: an episode where the goblins want to humiliate someone.
- Patron hook: A Golden Council member's heirloom was taken by goblins and has since been 'improved'. She wants it back, and does not want to know how.
- City of Arches name: "Little jokes": Lower Reaches name, for the way goblin kills always end with a punchline.

### Snakemen
*Core Bestiary · Standard · Controller · Levels 1 to 8*
*Scaled, upright, hissing, and cold-eyed, with a flicker of tongue before every sentence. They coil around a foe's arm before the foe knows they have been touched.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Snakeman | 1 | 21 | None | 6 |
| Cobra Captain | 4 | 52 | None | 6 |
| Giant Cobra | 8 | 84 | Medium | 6 |

Stage 9-12, 13+.

**Actions**
*Snakeman*
- **Coiling strike** (Passive) On melee crit, Grapple (escape DC 10).
- **Slash** (1 Action) 2d6. Or Spit, Range 8.
*Cobra Captain*
- **Coiling command** (Free, 1/round) An ally Grapples an enemy adjacent to it (escape DC 10).
- **Slash** (1 Action, ×2) 2d6. Or Spit, Range 8.
*Giant Cobra*
- **Coiling strike** (Passive) On melee crit, Grapple (escape DC 10).
- **Crush** (1 Action) 2d6+20. Advantage against smaller creatures.

**In play.** Wants prey held still. The Captain orders a Grapple on the hero standing alone, others slash the grappled, and the Giant Cobra is held back for the biggest target. Breaks off when the Captain is Bloodied.
**Designer note.** Printed GM Guide blocks, unchanged. Grapple is the whole kit: Coiling Strike on a crit, Coiling Command on demand, and a Giant Cobra that crushes anything smaller. Heroes still act while Grappled, so the answer is mobility or fire. Pair them with the Serpent Cult of Vithra, which treats them as holy. Sunken Revvia and the Lost Cisterns are snake country.
**Sources.** Nimble GM Guide, Bestiary: Snakemen.

**Traits (d6)**
1. Its scales are the dull green of old copper, patched with something paler where it shed badly.
2. It sheds mid-conversation, and apologises.
3. A dagger tied to its tail, for reasons it will explain at length.
4. It lowers its eyes when you bow. It does not bow back.
5. A gold ring through its nostril slit, stamped with a Council seal. Taken from a corpse.
6. It hisses a prayer to Vithra and the hiss is very faintly in time with a heartbeat.

**Encounters (d4)**
1. A snakeman asks the party to take a message to another snakeman, in the next district. The note says nothing. Delivering it will start a war.
2. A snakeman patrol is escorting a cage of silent, grey-skinned prisoners. The prisoners are whispering the same word.
3. A Cobra Captain offers a truce in return for one hero's name, written in blood. It will not say why.
4. A snakeman is hurt, stranded, and begs for water. It is also a spy, and it knows the party will help.

**Lairs (d4)**
1. A hall of coiled stone pillars, each carved with snake bodies, and a floor of warm sand heated from below.
2. A flooded vault where the snakemen sleep in tight, stacked rings, ten to a niche.
3. A shrine to Vithra with an altar bowl of black, still-warm blood. A fresh drop falls from a ceiling hole every ten seconds.
4. A bathhouse turned temple, all steam, and the water is the wrong colour.

**Rumours (d4, Lore check)**
1. ⊤ A crit on you or the snakeman breaks its coil. So does being knocked apart.
2. ⊤ The Cobra Captain is the one giving the orders. Take him out and the snakemen just hiss.
3. ⊥ Snakemen are cold-blooded and slow in a chill. Bring ice and they sleep.
4. ⊥ The Black Hand has a treaty with the snakemen. Show a Black Hand mark and they stand aside.

**Gig Fit**
- Verb: Find / Stop
- But+: Monster result at Stages 9-12, and with any Serpent Cult of Vithra band. Good with Grapple-heavy fights in narrow spaces.
- Patron hook: The Archkeepers have lost an arrival to a snakeman patrol. They want the arrival back, and a quiet word with whoever commands the patrol.
- City of Arches name: "Hissers": cistern workers' name, said low, with a glance at the water.

### Oozes
*Core Bestiary · Minion / Standard · Brute · Levels 1 to 12*
*Wet, patient, and hungry, a mass of living acid that flows under doors and drops from ceilings. A cut makes it more, and whatever it eats, it keeps eating.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Ooze Minion | Min | Minion | None | 6 |
| Gray Ooze | 1 | 18 | None | 6 |
| Ochre Jelly | 4 | 46 | None | 6 |
| Black Pudding | 8 | 94 | None | 6 |
| Elder Ooze | 12 | 148 | None | 6 |

Stage 9-12, 13+.

**Actions**
*Ooze Minion*
- **Acidic touch** (1 Action) 1d6. Digested 0. Follows the GM Guide minion rules.
*Gray Ooze*
- **Goopy 2** (Passive) 1/round. When crit or dealt slashing damage: summon 2 ooze minions.
- **Acidic touch** (1 Action) 1d6. Digested. Deal an additional 2 damage for each time the target has been Digested already this encounter.
*Ochre Jelly*
- **Goopy 3** (Passive) 1/round. When crit or dealt slashing damage: summon 3 ooze minions.
- **Acidic touch** (1 Action) 1d6+6. Digested. Deal an additional 3 damage for each time the target has been Digested already this encounter.
*Black Pudding*
- **Goopy 5** (Passive) 1/round. When crit or dealt slashing damage: summon 5 ooze minions.
- **Acidic touch** (1 Action, ×2, Reach 2) 1d6+6. Digested. Deal an additional 5 damage for each time the target has been Digested already this encounter.
*Elder Ooze*
- **Goopy 6** (Passive) 1/round. When crit or dealt slashing damage: summon 6 ooze minions.
- **Acidic touch** (1 Action, ×3, Reach 3) 1d6+6. Digested. Deal an additional 6 damage for each time the target has been Digested already this encounter.

**In play.** Wants whatever moves. Flows toward the nearest warm body and stays on it, Digesting the same hero until they leave. Never breaks off. It is hungry the way a river is wet.
**Designer note.** Printed GM Guide blocks, unchanged. Slashing and crits feed the oozes, so the answer is blunt, fire, cold, or radiant damage and spreading out so Digested stops stacking on one hero. This is the Lower Reaches and Lost Cisterns default for an ooze; the Deathreach Ochre Jelly is the 4e Elite built for a set piece. Use the core block for any ordinary drain, and the Elite when the jelly is the whole room.
**Sources.** Nimble GM Guide, Bestiary: Dungeon Denizens, oozes. The Deathreach Ochre Jelly is a separate 4e Elite.

**Traits (d6)**
1. It smells of pennies and old milk.
2. It carries a rusted helmet inside it, and the helmet drifts, like a fish.
3. A glimmer of a coin inside, circling, never dissolving.
4. Its surface is covered in a faint film that ripples toward the nearest speaker.
5. It leaves a polished trail, as if someone has just cleaned.
6. It is warm. Steam rises. Something deeper in it is moving.

**Encounters (d4)**
1. A drain cover starts to rattle. The party is the only thing in the room that is moving.
2. A merchant begs the party to clear his cellar of 'pests'. He has not been down in days. The rats have stopped squeaking.
3. The party's fight is going well, and the ooze they have been cutting has become six.
4. An ooze is blocking a corridor, and a hero's pet, ally, or hired porter is stuck in it, alive.

**Lairs (d4)**
1. A cellar room polished clean, with a line of hardened bone dust around the walls like a high-tide mark.
2. A cistern basin whose water is unnaturally clear. A coin glints at the bottom. The coin is moving.
3. A kitchen sump where the grease has pooled for years, a blanket of slick, and a candle that has burned for months in the middle of it.
4. A sealed vault with an acid-eaten door and a thin line of scorched metal leading out. Whatever was inside left in a hurry.

**Rumours (d4, Lore check)**
1. ⊤ Don't cut it. Slashing only makes more. Clubs, fire, frost, or radiance.
2. ⊤ The more times it digests the same man, the worse it gets. Spread out.
3. ⊥ Salt kills oozes. Throw a handful and they shrivel.
4. ⊥ Oozes are blind. Stand still and they will flow around you.

**Gig Fit**
- Verb: Stop / Bury
- But+: Monster result at Stages 9-12 for the smaller oozes, and 13+ for the Black Pudding and Elder Ooze. Good as a hazard room that has an agenda.
- Patron hook: The Golden Council wants a cistern sluice cleared before the flood season. Four workers went in and one came out, and he is not talking.
- City of Arches name: "Mustard": Lost Cisterns workers' name for the yellow ones. "There's mustard in the drain" means leave your tools and go.

### Mimics
*Core Bestiary · Standard · Lurker · Levels 1 to 6*
*A cup that is too heavy. A chair with a patient look. A door that is warm to touch. Mimics wait until the party has stopped looking, then move first.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Tiny Mimic (a cup, shoe, apple or potion) | 1 | 22 | None | 6 |
| Small Mimic (a pack, shield, weapon or chair) | 2 | 30 | None | 6 |
| Medium Mimic (a table, treasure chest, barrel or door) | 6 | 64 | None | 6 |

Stage 7-12, 13+.

**Actions**
*All members*
- **Ambusher** (Passive) Mimics always start combat first and enemies roll Initiative with disadvantage.
- **Sticky** (Passive) Mimic hits also Grapple, and can Grapple any number of creatures. When crit: release 1 creature (attacker's choice).
*Tiny Mimic*
- **Pseudopod** (1 Action) 2d4. Escape DC 9.
- **Bite** (1 Action, vs a Grappled creature) 2d4+5. Use instead of Pseudopod.
*Small Mimic*
- **Pseudopod** (1 Action) 2d6. Escape DC 11.
- **Bite** (1 Action, vs a Grappled creature) 2d6+10. Use instead of Pseudopod.
*Medium Mimic*
- **Pseudopod** (1 Action) 2d8+8. Escape DC 13.
- **Bite** (1 Action, vs a Grappled creature) 2d8+20. Use instead of Pseudopod.

**In play.** Wants a meal that stops moving. Opens with Pseudopod on whoever touched it first, then Bites whoever is stuck. Never breaks off. It cannot, and has nowhere to go.
**Designer note.** Printed GM Guide blocks, unchanged. A mimic is a trap with a hunger: it always acts first, and its Grapple stacks across the whole party. Heroes lose initiative and mobility but never their turn, and a crit frees one creature. The right answer is to find the right item in the room first, which makes the mimic a Find clock as much as a fight. A mimic needs a room full of other furniture, so use it in rooms with something to take.
**Sources.** Nimble GM Guide, Bestiary: Dungeon Denizens, mimics.

**Traits (d6)**
1. It is exactly the shape of the thing, down to the scratch someone carved on the lid.
2. Faintly warm. In a cold room, a cold object, and it is not cold.
3. Its 'lock' is shaped like a mouth. The mouth is closed, and it is breathing.
4. A tiny trickle of slime at the corner, drying at the edges.
5. It has a coin stuck to it, and the coin is the first thing you notice.
6. It is a chair, and a hero's own, from their holding, and impossible.

**Encounters (d4)**
1. The party finds the treasure they came for, in plain sight, in an empty room. It is exactly where the map said.
2. A tavern keeper insists a particular chair is cursed and nobody should sit in it. The tavern is full. The chair is empty.
3. A hero's pack is lighter than it was, and a pouch is missing. Something in the room has been eating.
4. A frightened child runs from a closet that is also a mouth.

**Lairs (d4)**
1. A treasure room with a single, too-perfect chest, and the room's dust is undisturbed everywhere except a groove leading to the wall.
2. A library with a table of open books, and a reading chair worn smooth, and everything else looted.
3. A cellar full of identical barrels. One is warm, and one has a bite taken out of it.
4. A hallway of doors. Every one is real. All but one lead somewhere. The last one leads into something that is not a room.

**Rumours (d4, Lore check)**
1. ⊤ Poke anything that looks too good with a ten-foot pole before you touch it.
2. ⊤ A crit on a mimic pries one creature loose, the attacker's choice.
3. ⊥ Mimics only pretend to be chests. Anything else is just furniture.
4. ⊥ A mimic can only hold one creature at a time. Send the sturdiest in first.

**Gig Fit**
- Verb: Find / Steal
- But+: Monster result at Stages 7-12, in any room with furniture. Best when the episode's goal is an object, so the mimic is the object.
- Patron hook: A University treasurer wants a chest recovered from a Lower Reaches vault. Three crews have gone for it. The chest is still there.
- City of Arches name: "Furniture": Lower Reaches word for any trap that looks like an opportunity.

### Gnolls and Worgs
*Core Bestiary · Standard · Skirmisher · Levels 1 to 4*
*Hyena-headed raiders in hide and bone, laughing as they run, with a pack of horse-sized wolves loping beside them. They like a wounded animal best.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Gnoll | 1 | 21 | None | 6 |
| Gnoll Packleader | 4 | 52 | None | 6 |
| Worg | 1 | 20 | None | 10 |

Stage 1-8, 13+.

**Actions**
*Gnoll*
- **Bloodthirsty** (Passive) Advantage against damaged creatures.
- **Ravage** (1 Action) 1d8+2.
- **Shoot** (1 Action, Range 10) 1d8. Use instead of Ravage.
*Gnoll Packleader*
- **Bloodthirsty** (Passive) Advantage against damaged creatures.
- **Bark orders** (1 Action) 2 allies can move.
- **Ravage** (1 Action, ×2, after Bark orders) 1d8+2.
*Worg*
- **Savage** (Passive) Crits on 5+ against Grappled creatures.
- **Rip apart** (1 Action) 2d6. Grappled, escape DC 10.

**In play.** Wants a kill that has already stopped running. Worgs Grapple the lone hero, gnolls pile on whoever is bleeding, and the Packleader moves the pack to wherever blood is fresh. Breaks off when the Packleader falls.
**Designer note.** Printed GM Guide blocks, unchanged. Bloodthirsty means the first hero to bleed becomes everyone's target, and the worg's Grapple plus Savage turns a held hero into a crit target. The answer is a front line that keeps no one alone and heals early. In Sejr they are the Doorish Hills' raiders and the payoff when the Hills' Neglect clock fills. The demon-worshipping gnolls under the Hills are the same block with a priest on top.
**Sources.** Nimble GM Guide, Bestiary: Hill & Field, gnolls and worgs.

**Traits (d6)**
1. A necklace of bells, each one a victim's, and they all ring a different note.
2. A dead hyena on a pole, carried like a banner, tied up with fresh ribbons.
3. It laughs at everything, including its own wounds, and the laugh gets worse as it bleeds.
4. Its fur is dyed in the colours of a caravan it took last month.
5. A trophy belt of ears, sorted by size.
6. It is hungry in a way that makes the party's rations a threat.

**Encounters (d4)**
1. A pack drives a wounded animal, a mule, a child's pony, toward the party. They want to see what the party does with it.
2. A gnoll shows up alone with a white rag on a spear and asks to trade. The pack is spread out around the party and has already decided what happens if the trade fails.
3. Worgs are already feeding on something the party was supposed to protect, and have not looked up.
4. A Packleader offers safe passage across its territory for one hero's blood, drawn willingly, a cup full.

**Lairs (d4)**
1. A camp of hide tents around a pit of old bones, where the youngest gnolls fight over the scraps and the Packleader watches.
2. A cave with a smoking fire at the mouth and a chained captive in the back, still alive, to be eaten fresh.
3. A ruined farmhouse converted to kennels, the worgs fed on the previous owners, and a child's drawings still on the wall.
4. A hillside cave network where a demon's altar has been carved out of the stone, the gnolls' laughter echoing up through the roof.

**Rumours (d4, Lore check)**
1. ⊤ They go for whoever is bleeding. Heal the first one hurt and they lose their appetite.
2. ⊤ A worg alone is a dog. A worg with a hero in its jaws is a killer. Don't let one hold you.
3. ⊥ Gnolls fear fire. Light a torch and they scatter.
4. ⊥ They only raid at night. Travel by day and you are safe.

**Gig Fit**
- Verb: Escort / Stop
- But+: Faction result at Stages 1-8 from the Doorish Hills, and the payoff when its Neglect clock fills: gnolls at the gates. Pairs with a caravan.
- Patron hook: A Doorish Hills farmer has paid the Archkeepers to find his son, taken last week by 'laughing men' who left the dogs alive.
- City of Arches name: "Giggle-packs": Hills caravaners' name. A pack heard at dusk means you do not camp.

### Skyhunters
*Core Bestiary · Standard · Skirmisher · Levels 2 to 17*
*Things that take what they want from above: a lightning drake darting in tight loops, a griffon with talons the length of a hand, and a roc whose shadow is the first anyone knows of it.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Blue Drake | 2 | 25 | None | Fly 12 |
| Griffon | 4 | 52 | None | Fly 12 |
| Roc | 17 | 236 | None | Fly 20 |

Stage 7-12, 13+.

**Actions**
*Blue Drake*
- **Shocking bite** (1 Action) 2d8. Ignores metal armor.
- **Burst lightning** (Passive) On death, Reach 1, AoE: 2d8, ignores metal armor.
*Griffon*
- **Talons** (1 Action) 1d8+10. Grappled, escape DC 12.
- **Fly & drop** (1 Action, if Grappling) 6d6. Fly upward 12 and release. The target takes fall damage and lands Prone.
*Roc*
- **Pluck up** (1 Action, Reach 4, up to 2 targets) 1d12+20. On hit, Grappled, escape DC 17.
- **Crush & drop** (1 Action) 2d20. Fly upward 20 spaces, deal damage to Grappled creatures, then release them (10d6 fall damage).

**In play.** Wants prey it can carry. The drake dives and strikes, the griffon grabs the smallest hero it can lift and drops them, the roc takes two at once. Breaks off when Bloodied, climbing out of reach.
**Designer note.** Printed GM Guide blocks, unchanged. The family is a height problem: Grapple, lift, and drop (6d6 or 10d6 on a fall). The party's job is to cut the hold before the drop, or be below to catch it. Bows and spells beat a flying enemy that will not land. Use under an open sky or a tall hall; a low ceiling ends the griffon and the roc completely, and the Blue Drake's Burst Lightning punishes a crowded rooftop.
**Sources.** Nimble GM Guide, Bestiary: Hill & Field, flying beasts.

**Traits (d6)**
1. Its feathers or scales crackle faintly, and the hair of anyone near it stands up.
2. A scar across the beak or snout, an old fight with a mage.
3. A silver ring around one talon, with a name on it, someone's pet once.
4. It shrieks twice before a dive, and never skips the second.
5. It carries something shiny in its claws and refuses to drop it.
6. The shadow is bigger than the creature, as if it were thinking of getting larger.

**Encounters (d4)**
1. A shadow crosses the party and moves on. A moment later, it comes back lower.
2. A griffon has a human in its claws, alive, and is hovering at the edge of the party's reach. It is waiting for something.
3. A lightning drake has nested in a Market Square clock tower, and the festival crowd below has just noticed.
4. A rider with a hunting bow asks the party for help: his griffon is wounded and has gone wild.

**Lairs (d4)**
1. A ruined bell tower with a nest of copper wire and old hats, scorched on every surface.
2. A cliff ledge with a bone-white drop below, scattered with the last meals' shoes and satchels.
3. A rooftop garden turned aerie, all the pots broken, the beasts' own pigeons caged.
4. A mountain peak scored with talon marks, a nest the size of a barn, and an unbroken egg, warm.

**Rumours (d4, Lore check)**
1. ⊤ Cut the hold before it climbs. Once it is above you, the drop is the weapon.
2. ⊤ Metal conducts the drake's lightning. Take off your plate and it can't hurt you through it.
3. ⊥ Griffons never attack riders. Wave a saddle and it will land.
4. ⊥ Rocs are a story. No bird grows that large.

**Gig Fit**
- Verb: Find / Escort
- But+: Monster result at Stages 7-12 for the drake and griffon, and 13+ for a roc. Strong on a rooftop or a ledge map.
- Patron hook: A Golden Council member's hunting party was taken apart on the Cliffs of the Dead. She wants the survivors found and the griffon, if there was one, handled without a story getting out.
- City of Arches name: "Rooftop kings": Market Square name for anything that nests above the festival.

### Hill Brutes
*Core Bestiary · Standard · Brute · Level 10*
*Things that do not trouble to hide: a rock-skinned bulette that erupts from the ground, a troll whose wounds close as you watch, and a giant who throws boulders for fun.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Bulette | 10 | 88 | Heavy | 6 (burrow 6) |
| Troll | 10 | 120 | None | 8 |
| Hill Giant | 10 | 130 | None | 8 |

Stage 13+.

**Actions**
*Bulette*
- **Burst forth!** (Passive) When the Bulette enters combat, the heaviest creature is targeted with Leap & bite.
- **Leap & bite** (1 Action) 1d20+20. Leap 6, Grapple, escape DC 14.
- **Drag below** (1 Action, vs a Grappled creature) 1d20+10. Then burrow away, leaving a tunnel 2 spaces wide.
- **Burrowing** (Passive) Heroes can jump down and follow the tunnels a Bulette leaves, at their own peril.
*Troll*
- **Regenerate** (Passive) Does not die at 0 HP. Only fire, radiant, or a crit while already at 0 HP can kill it.
- **Claws** (1 Action, Reach 2) 1d6+10. On damage, Prone. Choose twice from Claws and Bite.
- **Bite** (1 Action, vs a Prone creature) 1d20+10. Choose twice from Claws and Bite.
*Hill Giant*
- **Punt** (1 Action, ×2, Reach 2) 1d4+13. Knockback Primary Die spaces.
- **Boulder!** (1 Action, Range 12, 2×2 AoE) 1d4+30. Prone. Use instead of Punt.

**In play.** The Bulette wants the heaviest meal. The troll wants whoever is Prone. The giant wants to throw something. None of them breaks off while it is winning; the giant leaves when Bloodied and the Bulette dives.
**Designer note.** Printed GM Guide blocks, unchanged. Three solutions to the same question, how do you stop a big thing? The Bulette is punished by leaving the heaviest hero out front and waiting. The troll punishes bad damage: carry fire or radiance, and do not leave it at 0 HP. The giant wants to throw: get under its reach, behind cover, or out of its line. These are high-level monsters, so the Sejr use is through an arch, or as an episode's one big problem, not an everyday fight.
**Sources.** Nimble GM Guide, Bestiary: Hill & Field, brutes.

**Traits (d6)**
1. Its hide is flecked with lichen, and a family of birds nests in a crack.
2. A heap of boots and belts around its feet, the leavings of earlier meals.
3. It talks to itself in a low rumbling voice, and answers.
4. It is hungrier than it looks, and it looks hungry.
5. A dent in its skull the shape of a very large hammer. It has not forgiven.
6. It has made a pet of something small and miserable that it keeps in a pouch.

**Encounters (d4)**
1. The ground shudders. The heaviest hero's footprint is the only one that goes deeper than the others.
2. A troll sits on a bridge in the rain, eating, and asks the party whether they have a toll to pay or a leg to trade.
3. A hill giant has been throwing boulders at a village wall for two days and is out of boulders. It is looking at the party.
4. A wounded troll has fallen, and is mending. The party can stay and burn it, or leave and let it finish.

**Lairs (d4)**
1. A scoured clearing of freshly turned earth, a hundred pits dotted around where something has surfaced and gone back under.
2. A bridge-keeper's hut, stinking, with a pile of bones and an iron pot the size of a bathtub.
3. A hilltop of boulders, arranged in a ring, each carved with a crude face, and a giant's throne in the middle.
4. A cave of broken stone, full of gnawed bones and a campfire that never goes out.

**Rumours (d4, Lore check)**
1. ⊤ Fire or radiance. A troll at 0 only stays dead if you burn it or crit it again.
2. ⊤ A bulette goes for the heaviest man. Put the lightest in front and watch it flounder.
3. ⊥ Giants can't climb. A tree is safe ground.
4. ⊥ A troll is afraid of daylight and turns to stone. Hold it past dawn.

**Gig Fit**
- Verb: Stop / Escort
- But+: Monster result at Stage 13+ as the arch-side big problem. Use one per episode, not a mob.
- Patron hook: The Black Hand has a toll bridge on a road that the party must cross. The bridge's troll was there first.
- City of Arches name: "Big uns": Lower Reaches name for anything over three metres, and a warning not to stay.

### Stirges
*Core Bestiary · Minion / Standard · Lurker · Levels 1/2 to 6*
*Bloated mosquitos the size of a fist, or a gull. They hang in the dark, drop on a warm neck, and do not let go.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Stirge | 1/2 | 10 | None | Fly 8 |
| Greater Stirge | 6 | 64 | None | Fly 10 |

Stage 7-12.

**Actions**
*Stirge*
- **Evasive flier** (Passive) Attacks against you are disadvantaged.
- **Latch on** (1 Action) 1d4+2. Can't crit. On hit, Latched On: Riding. Your attacks can't miss or be Defended or Interposed.
*Greater Stirge*
- **Evasive flier** (Passive) Attacks against you are disadvantaged.
- **Latch on** (1 Action) 1d12+10. On hit, Latched On: Riding. Your attacks can't miss or be Defended or Interposed.

**In play.** Wants a warm neck. Goes for the hero with the least armor, latches, and stays. Breaks off only when dead or when the target is, and the second is faster.
**Designer note.** Printed GM Guide blocks, unchanged. A latched stirge cannot miss, and cannot be Defended or Interposed, so the answer is killing it off the host, which hurts the host too. They are a cheap, nasty, low-level pressure that makes the party move, and the Greater Stirge is a serious mid-level threat in a dark room. Light is the best tool.
**Sources.** Nimble GM Guide, Bestiary: Dungeon Denizens, stirges.

**Traits (d6)**
1. Its proboscis is crusted red and curls at the tip like a question mark.
2. It buzzes at a pitch that makes the nearest candle gutter.
3. One of its wings is torn and it flies in a lopsided spiral.
4. It is swollen so full that it can barely fly.
5. It sticks to the ceiling by its feet, upside down, dripping.
6. A faint blue shimmer on its back, from a cave far below.

**Encounters (d4)**
1. A hero feels a small, soft touch on the neck. Seven others are above, waiting for the rest.
2. A merchant's cart rattles up, with a covered cage of angry, buzzing things, and the merchant begging the party to take it before it breaks.
3. A scream. A porter is flailing at something on his back. Another is on the roof.
4. The party's torch gutters. In the dark, a sound like a thousand tiny wings.

**Lairs (d4)**
1. A cavern ceiling blackened with sleeping stirges, hundreds, like a living roof, and a floor of dead bats.
2. A cellar of a plague house, every wall stained brown with old blood and the ceiling dripping.
3. A mausoleum where the coffins have been opened, drained, and left with a perfect white outline of a face.
4. A hollow tree, with a buzzing that rises the closer you get, and a bleached skeleton propped inside.

**Rumours (d4, Lore check)**
1. ⊤ Once it latches, it never misses. Kill it off you fast, or burn it.
2. ⊤ A plain stirge has only 10 HP. Kill them fast and the latch ends.
3. ⊥ They only drink from sleepers. Stay awake and you'll be fine.
4. ⊥ A pinch of salt on the wound makes it let go.

**Gig Fit**
- Verb: Find / Escort
- But+: Monster result at Stages 7-12, in the dark. A low-level pressure that makes a safe room unsafe.
- Patron hook: A Black Hand fixer's cellar is full of stirges, and he needs a shipment out of it before anyone sees what happened to his last porter.
- City of Arches name: "Neck-biters": dockhands' name, said with a hand to the throat.

### Rank-and-File Dead
*Core Bestiary · Minion / Standard · Defender · Levels 1/3 to 8*
*The dead that do the work: bones that clatter, meat that shambles, ghouls that claw. They get up again once, whatever you do, and they don't mind the rain.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Skeleton | 1/3 | 9 | None | 6 |
| Zombie | 1/2 | 14 | None | 6 |
| Ghoul | 1 | 18 | None | 6 |
| Ogre Zombie | 5 | 60 | None | 6 |
| Giant Zombie | 8 | 100 | None | 6 |

Stage 4, 7-12.

**Actions**
*Skeleton*
- **Unliving, undying** (Passive) 1 use. On death, reset to 1 HP.
- **Just bones!** (Passive) Resistant to Piercing hits (not crits).
- **Grave arrow** (1 Action, Range 8) 1d4. Can't crit.
*Zombie*
- **Unliving, undying** (Passive) 1 use. On death, reset to 1 HP.
- **Crunch** (1 Action) 1d4+2. On damage, Grapple, escape DC 10. Can't crit.
*Ghoul*
- **Unliving, undying** (Passive) 1 use. On death, reset to 1 HP.
- **Sickening claw** (1 Action) 1d4+4. On damage, Dazed.
*Ogre Zombie*
- **Unliving, undying** (Passive) 1 use. On death, reset to 1 HP.
- **Greatclub** (1 Action) 1d4+18. On crit, Prone.
*Giant Zombie*
- **Unliving, undying** (Passive) 1 use. On death, reset to 1 HP.
- **Decaying swipe** (1 Action, ×2) 1d4+10. On damage, Prone or Knockback Primary Die spaces.

**In play.** Wants nothing. Walks at the nearest warm thing and attacks it. Never breaks off. The Ghoul alone has an appetite.
**Designer note.** Printed GM Guide blocks, unchanged. Everything gets up once at 1 HP, so a wave of skeletons is two waves, and the Ghoul's Dazed is the only real tax on actions. The d4 is the thematic undead die: slow, with a big flat bonus, so armor matters more than damage dice. These are the Cliffs of the Dead's ordinary residents, and the Archkeepers will pay to have them laid to rest.
**Sources.** Nimble GM Guide, Bestiary: Undead.

**Traits (d6)**
1. A shred of burial cloth hangs from one arm, embroidered with a family sigil.
2. Its jaw hangs open, and something small and living has made a nest inside.
3. It is dressed in its Sunday best, and the buttons are done up wrong.
4. It keeps trying to say a word, and what comes out is a hiss.
5. A silver coin in each eye socket, the last offering of someone who cared.
6. It carries a shovel. It is not sure why.

**Encounters (d4)**
1. A line of the dead shambles along a road, in good order, and does not look at the party until a hero steps into the lane.
2. A grave digger bolts out of a tomb and runs for his life. The thing he disturbed is slow but patient, and does not get tired.
3. Skeleton archers stand in a doorway, all facing out, like a guard, and will not move until someone speaks the right name.
4. A Ghoul sits at a table in a closed pub and politely asks for a drink.

**Lairs (d4)**
1. A mausoleum with the doors thrown open from inside, and a path of fresh, small footprints leading back in.
2. A barrow where the rows of niches are perfectly neat, each with a fresh flower, and each with an empty bed.
3. A crypt floor of loose bones, stirred by a faint, ever-present draught that sounds like breath.
4. A graveyard shed with tools hung neat, a lantern burning, and a very patient ghoul in the corner.

**Rumours (d4, Lore check)**
1. ⊤ They get up once. Hit them again and they stay down.
2. ⊤ Piercing barely hurts a skeleton. Bring a hammer.
3. ⊥ The dead never cross running water. Cross a stream and you are free.
4. ⊥ Holy water kills them outright. A flask per skeleton.

**Gig Fit**
- Verb: Bury / Find
- But+: Monster result at Stage 4 (Cliffs of the Dead) and in any crypt or cistern. Good as the room-filling mob.
- Patron hook: A priest from the Temple of the Three Sisters wants a mass grave on the Cliffs of the Dead laid to rest before a funeral procession. The dead keep standing.
- City of Arches name: "Walkers": grave diggers' word, flat, no more said.

### Restless Spirits
*Core Bestiary · Standard · Lurker · Levels 3 to 10*
*A shape in the corner of the eye, cold along the arm. Specters drift low and touch; wraiths rend from a distance, and neither stays long enough to be hit hard.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Specter | 3 | 34 | None | Fly 6 |
| Wraith | 10 | 120 | None | Fly 6 |

Stage 4, 11-12, 13+.

**Actions**
*Specter*
- **Corrupt** (Passive) Vulnerable to Radiant: your next attack gains advantage.
- **Deathly touch** (1 Action) 1d4. On damage, set HP to 0.
*Wraith*
- **Corrupt** (Passive) Vulnerable to Radiant: your next attack gains advantage.
- **Soul rend** (1 Action, ×2, Range 8) 1d4+10. On damage, deal 1 Wound.

**In play.** Wants the living to feel what it felt. Goes for the hero who holds the most life: the biggest, the healthiest. Breaks off when the Shepherd's light shows.
**Designer note.** Printed GM Guide blocks, unchanged. The Specter's touch sets a hero to 0 HP on damage, so it is a hit-or-miss monster where one hit changes the fight, and the reward for radiant damage is advantage on the next attack. The Wraith's Wound is the same fear at higher cost. Keep a Shepherd close. Cliffs of the Dead, Sunken Revvia, and any tomb arch.
**Sources.** Nimble GM Guide, Bestiary: Undead, spirits.

**Traits (d6)**
1. It has a face you almost know, and every time you look it is slightly less familiar.
2. The candles lean toward it.
3. It whispers a name. The name is the nearest hero's.
4. It is cold enough to leave frost on a nearby cup.
5. It does not walk, but turns slowly in place, like a mourner at a window.
6. It wears the clothes of a Villas noble from two hundred years ago, and still stands as if it is waiting for a carriage.

**Encounters (d4)**
1. A hero's breath fogs in a warm room. Something beside them is not breathing.
2. A wedding party in old clothes dances, silent, in a cellar, and the bride turns to look at the party.
3. A widow offers the party her late husband's coat. He is wearing it.
4. A child's voice calls from inside a wall, asking for the heroes by name.

**Lairs (d4)**
1. A drowned chapel in Sunken Revvia where the pews are all facing the same way and every window is a different colour.
2. A noble's mausoleum on the Cliffs of the Dead with a single lit lamp in the window.
3. A bedroom in a villa, preserved, bed made, a nightgown laid out, and a deep cold.
4. A tomb whose walls are scratched, from inside, with the same date repeated.

**Rumours (d4, Lore check)**
1. ⊤ Radiance makes them vulnerable. A holy light turns the fight.
2. ⊤ Its touch only drops you if it does damage. Enough Defense turns it into a cold hand.
3. ⊥ Salt on the threshold keeps a ghost out.
4. ⊥ A spirit can only be hurt by a weapon blessed by a priest.

**Gig Fit**
- Verb: Bury / Find
- But+: Monster result at Stage 4 and Sunken Revvia (11-12) for specters, and 13+ for a wraith. Ghost stories belong here.
- Patron hook: The Archkeepers want a haunted villa quieted. The family still lives there, and does not want it quiet. They are afraid of the ghost's silence.
- City of Arches name: "Cold ones": Cliffs of the Dead name, and never said inside a graveyard.

### Mummies
*Core Bestiary · Standard / Boss · Defender · Levels 6 to 21*
*A priest, wrapped, preserved, and angry. The cloth is the colour of old tea and smells of resin, and the cold, patient, fixed eyes are the same as the day it died.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Mummy | 6 | 75 | None | 6 |
| Mummy Lord | 21 | 260 | None | 6 |

Stage 13+.

**Actions**
*Mummy*
- **Cursed slam** (1 Action) 1d4+20. On damage, Dazed.
*Mummy Lord*
- **Cursed gaze** (Passive) When crit, inflict a Wound on a failed DC 20 INT save.
- **Scarab swarm** (1 Action, Reach 6) Summon 6 scarab minions (size d6). Then use Slam.
- **Slam** (1 Action, ×2) 1d4+20. On damage, Dazed.

**In play.** Wants the tomb undisturbed. Slams the hero closest to what it guards, and sends scarabs for the rest. Never breaks off. Tombs have no exits for the dead.
**Designer note.** Printed GM Guide blocks, unchanged. A Mummy is a slow, hard hitter whose Dazed takes one action a turn, so it taxes rather than stops. A Mummy Lord is a level 21 boss and not a Sejr encounter: keep it as a campaign villain for a tomb in Threska or Arkus and let the heroes meet it once, late, or run from it. Fire is the answer to the wrappings.
**Sources.** Nimble GM Guide, Bestiary: Undead, mummies.

**Traits (d6)**
1. The wrappings are inscribed with a spell, repeated, dense as lace.
2. Dust drifts from its sleeves, and each grain glitters.
3. A beetle, alive, crawls out of one eye socket and back in.
4. It has no mouth, only a stitched line, and the stitches are loose.
5. A broken gold collar around its neck, with a name in dead script.
6. It is perfectly still until something in the room is moved.

**Encounters (d4)**
1. A sealed sarcophagus in a hall of statues. One hero moves a candlestick. The statues turn.
2. A tomb robber, mummified, shuffles out of a cave, still holding a bag of stolen coins.
3. A priest of a dead god kneels at an altar, wrapped in white, and does not look up until the party takes something.
4. The party's patron wants a particular mummy awakened. He has a ritual. He has not told them what it is for.

**Lairs (d4)**
1. A step-pyramid burial chamber with a sarcophagus lid slid aside, and a line of dust that leads from it to the door.
2. A vault under a plundered temple where every niche holds a mummy, and one niche is empty.
3. A desert tomb with a hundred identical corridors and one with a fresh footprint.
4. A cellar in the City of Arches where a collector keeps a mummy 'as a conversation piece'. It has been moving.

**Rumours (d4, Lore check)**
1. ⊤ Fire burns the wrappings and the mummy with them.
2. ⊤ It stays within its tomb. Leave and it will not follow.
3. ⊥ A mummy's curse is passed by touch. Never lay a hand on one.
4. ⊥ The wrappings are the only thing holding it together. Cut them and it dies.

**Gig Fit**
- Verb: Steal / Bury
- But+: Monster result at Stage 13+ on a Threska or Arkus arch. The Mummy Lord is a campaign beat, not an encounter.
- Patron hook: A University treasurer wants an inscribed collar from a tomb on Arkus. Three crews have gone in. All three came back, quietly, and none will say what they saw.
- City of Arches name: "Dusty ones": Cliffs of the Dead name, and an insult in the Market Square.

### Briarbanes
*Core Bestiary · Minion / Standard · Controller · Levels 1/2 to 5*
*Soulless plant things, thorned and red-veined, fed on blood. Seedlings spit thorns, pods burst, and the tanglers reach out from the dark with long arms of bramble.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Briarbane Seedling | 1/2 | 12 | None | 6 |
| Briarbane Acidpod | 1 | 18 | None | 6 |
| Briarbane Tangler | 2 | 24 | Heavy (peels) | 6 |
| Briarbane Rootbreaker | 5 | 58 | Heavy (peels) | 6 |

Stage 13+.

**Actions**
*Briarbane Seedling*
- **Thorn seed** (1 Action, Range 6) 1d6+2. Can't crit.
*Briarbane Acidpod*
- **Grab** (1 Action) Grapple, escape DC 12.
- **Caustic eruption** (Passive) On death, Reach 1, AoE: 4d6.
*Briarbane Tangler*
- **Peeling bark** (Passive) Being hit degrades armor: Heavy, then Medium, then None.
- **Tangle** (1 Action, Reach 6) 1d6. Grappled, escape DC 12 or any fire or slashing damage. Choose twice from Tangle and Pull.
- **Pull** (1 Action, vs a Grappled creature) Move them 4 spaces. Choose twice from Tangle and Pull.
*Briarbane Rootbreaker*
- **Peeling bark** (Passive) Being hit degrades armor: Heavy, then Medium, then None.
- **Slam** (1 Action, ×2) 1d6+5. On damage, Knockback 2 or Prone.

**In play.** Wants blood for the soil. Tanglers pull the lone hero toward the pods, the seedlings thin the rest from behind, and the Rootbreaker holds the middle. Never breaks off: plants don't.
**Designer note.** Printed GM Guide blocks, unchanged. The Tangler is a 6-space reach Grapple plus a 4-space pull, so a hero ends up standing next to an Acidpod that bursts for 4d6. Fire and slashing frees the grapple, and every hit peels armor, so the party should hit first with what ignores it. On the far side of Eruwynd, the Endless Forest, and any overgrown ruin.
**Sources.** Nimble GM Guide, Bestiary: Forest Denizens, briarbanes.

**Traits (d6)**
1. Its thorns are black at the tips, and sticky.
2. It leans toward the nearest wound, like a flower to the sun.
3. A scrap of cloth is snagged in its branches, a hero's, a colour the hero knows.
4. A small white flower grows from one thorn, and it smells wrong.
5. It creaks in a slow rhythm like a sleeper's breathing.
6. Its roots are dug up, but still it walks.

**Encounters (d4)**
1. The path ahead is overgrown with bramble that was not there on the way in.
2. A farmer's dead field has bloomed overnight with red-veined stalks. The farmer is somewhere in the middle.
3. A Bluesteel hunter is caught in a thicket, bleeding, and the thicket is pulling her in.
4. Seedlings have already taken a village well. The villagers want the water, and the party does not know why it has gone red.

**Lairs (d4)**
1. A glade where the grass is a perfect circle of red, and every tree in it is bent toward the middle.
2. A cellar in the Lower Reaches overgrown with thorny vines, the owner's skeleton still sitting at the table.
3. A greenhouse where every pane is broken and every pot is overflowing, and there is a faint sound of sucking.
4. A corpse-fed grove, with a heap of bones at the centre like a fertiliser pile.

**Rumours (d4, Lore check)**
1. ⊤ Fire or an axe frees you from the Tangler. Carry a lit torch.
2. ⊤ Hit the bark and it peels. Hit it twice and it is flesh.
3. ⊥ Briarbanes only grow where a murder was done.
4. ⊥ Cut the main stem and the whole grove dies.

**Gig Fit**
- Verb: Stop / Bury
- But+: Monster result on Eruwynd and Drakeholm arches, in forest or ruin. Good with a hazard: a pod near a cliff.
- Patron hook: A University botanist has found a 'cooperative' briarbane seedling and wants a root sample. The seedling disagrees.
- City of Arches name: "Red-weed": Doorish Hills farmers' word, and nobody grows a garden near it.

### Forest Keepers
*Core Bestiary · Standard · Lurker · Levels 6 to 8*
*Every shadow hides a predator. A cat that shimmers where it walks, a many-legged serpent with a stare like frost, and a druid who has become the forest's own hand.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Duskprowler | 6 | 70 | None | 8 |
| Basilisk | 7 | 60 | Medium | 6 |
| Druid | 8 | 90 | None | 6 |

Stage 13+.

**Actions**
*Duskprowler*
- **Illusory aura** (Passive) Attacks against the Duskprowler have Disadvantage 2. Damage suppresses this effect until the end of the next hero's turn.
- **Ravage** (1 Action, ×2) 1d8+5.
*Basilisk*
- **Stone gaze** (1 Action, Reach 16) Lithify 1 creature who can see you. Lithify: max actions reduced by 1 (lasts 10 minutes, can stack). Lithified 3 times: Petrified.
- **Envenom** (1 Action) d44. Advantage against creatures with fewer than 3 actions. Use after Stone gaze.
*Druid*
- **Beastshift** (1 Action) Gain +4 Speed and Medium Armor until the beginning of your next turn. Then attack 2×, 1d4+10, with advantage.
- **Hurricane** (1 Action, Reach 3, AoE) 4d4+10. To enemies. On damage, move targets anywhere within Reach. Use instead of Beastshift.

**In play.** Wants intruders gone, or fed to the forest. The Duskprowler picks the one at the back, the Basilisk looks at the one with the fewest actions, and the Druid moves the party where it wants them. Breaks off when Bloodied, into the trees.
**Designer note.** Printed GM Guide blocks, unchanged. The Basilisk is the one place this book keeps a printed Petrified: three stacked Lithify gazes over 10 minutes. It is gradual, telegraphed, and costs an action per stack rather than a turn, so it stays. If a Sejr table wants it gentler, cap Lithify at two stacks and let the third only Slow. The Duskprowler wants area damage or a hero with advantage to spare, and the Druid is a mobility controller who moves the party around its trees.
**Sources.** Nimble GM Guide, Bestiary: Forest Denizens, forest keepers.

**Traits (d6)**
1. The Duskprowler's coat shimmers, and the edge of it is always somewhere you did not look.
2. The Basilisk's scales are lichen-grey. It is hard to tell where the stone ends and the snake begins.
3. A stuffed owl sits on the Druid's shoulder, and speaks.
4. A lantern hangs in its mane. The light is steady, and green.
5. Its eyes are the colour of old bronze, and it blinks more slowly than anything alive.
6. A thorny crown of deadwood, and every leaf on it is bright.

**Encounters (d4)**
1. A woodsman begs the party not to go further in. He is made of stone from the knees down, and still talking.
2. A Druid greets the party with a smile, an offer of tea, and a polite request to leave the forest alone.
3. A cat-shaped shimmer paces the party's flank for an hour, and always disappears when looked at.
4. A row of statues in a clearing, each in a different pose, each with a hint of a surprised face.

**Lairs (d4)**
1. A clearing with a dozen life-sized statues, each facing the same tree. The tree has a hollow, and the hollow has eyes.
2. A grove where every branch bends the same way, and a cottage in the middle, with the door open.
3. A cave of stone figures, a camp turned to rock, the fire still burning.
4. A shrine of antlers and leaves in the heart of the forest, where a Druid sits in perfect stillness, not seeing.

**Rumours (d4, Lore check)**
1. ⊤ Don't look it in the eye. Look at its feet, and cover your face with a cloak.
2. ⊤ The cat's shimmer fades when you hurt it. Strike once and the next blow lands.
3. ⊥ A Druid will not harm anyone who brings a gift. Take flowers.
4. ⊥ The statues are only artwork. Nothing living was ever turned to stone here.

**Gig Fit**
- Verb: Find / Escort
- But+: Monster result at Stage 13+ on forest arches. A lone Druid is a negotiation; a Basilisk is a timer.
- Patron hook: A mage of Kartan wants a Basilisk's eye intact, as a focus. Anyone fool enough to try has not come back.
- City of Arches name: "Stone-gazers": University term, and used as an insult among hunters.

### Cultists
*Core Bestiary · Standard · Controller · Levels 1 to 5*
*The faithful of something that does not answer. They are cheerful, and bleed for their god in the open, and every drop makes the room a little more miserable.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Cultist | 1 | 22 | None | 6 |
| Fanatic | 3 | 44 | None | 6 |
| Doomsayer | 5 | 66 | None | 6 |

Stage 4, 7-12.

**Actions**
*Cultist*
- **Fanatical offering!** (1 Action) Lose 2 HP, afflict adjacent enemies with Despair. Then Dreadful blade.
- **Dreadful blade** (1 Action) 1d6+4.
- **Despair** (Passive) Disadvantage on all rolls. Dealing or healing any damage ends it.
*Fanatic*
- **Fanatical offering!** (1 Action) Lose 2 HP, afflict adjacent enemies with Despair.
- **Whispers of madness** (1 Action, vs a Despairing creature) 3d6+6. Psychic. Grapple, escape DC 13 or any radiant damage. Can't be Defended or Interposed.
*Doomsayer*
- **Feverish chant** (Passive) Reduce all damage done to allies who can hear you to 1.
- **Ecstatic outburst** (Passive) 3d6 psychic damage to all Despairing enemies (ignoring Defense).

**In play.** Wants a gift for the god, and the heroes are it. Cultists spread Despair on whoever is adjacent, the Fanatic grapples a despairing hero, and the Doomsayer chants until the room is theirs. Never breaks off; cultists die happy.
**Designer note.** Printed GM Guide blocks, unchanged. Despair is disadvantage on every roll until the afflicted hero deals or heals any damage, which is a one-action fix and a reason to keep a Shepherd close. The Doomsayer reduces damage to its allies to 1 for anyone who can hear, so killing it, silencing it, or standing out of earshot is the whole fight. The setting's cults, Children of Ibraxus and the Serpent Cult of Vithra, use these blocks as their rank and file.
**Sources.** Nimble GM Guide, Bestiary: Cultists/Horrors, cultists.

**Traits (d6)**
1. The sigil on their robes is drawn in what looks like old paint, and is not.
2. Smiling, softly, the way a nurse does before bad news.
3. A tray of tiny cuts on both forearms, healed and fresh.
4. A rope of bells around the waist that rings at each step.
5. Their eyes follow the party, but their lips are saying prayers.
6. A tidy ledger of names, with a tick against each one they have 'saved'.

**Encounters (d4)**
1. A cheerful cult recruiter hands out leaflets at the Market Square festival. Several members of the crowd are plants.
2. A Cultist begs the party for a swift death, saying the god told him they would be the ones. He is not lying.
3. Cultists are digging up a grave in the dark, in a hurry, singing under their breath. The grave belongs to someone the party knew.
4. A Doomsayer preaches in an alley to a crowd of children and street vendors, who are all listening very carefully.

**Lairs (d4)**
1. A basement chapel with a ring of kneeling cushions, a basin of dark water, and a ledger of the faithful.
2. A rented warehouse lined with black candles and an altar made of a stolen door.
3. A hidden room behind a temple's shrine where the real worshippers meet, and the ordinary priests don't know.
4. A tomb on the Cliffs of the Dead, repurposed, the walls re-carved in a new tongue.

**Rumours (d4, Lore check)**
1. ⊤ Despair ends the moment you hurt or heal someone. Land a blow and you are free.
2. ⊤ The Doomsayer's chant makes the rest nearly immune. Silence it or stay out of earshot.
3. ⊥ Cultists hate holy symbols. Show one and they flee.
4. ⊥ The Black Hand pays them. They work for coin like anyone.

**Gig Fit**
- Verb: Stop / Find
- But+: Faction result with 'cultists' as the band kind, at Stage 4 or 7-12, or 'the Children of Ibraxus'. A cheap, readable early villain with a clear opening hook.
- Patron hook: The Archkeepers have lost an arrival to a cult. The arrival may have joined willingly. They need the party to ask.
- City of Arches name: "The Smilers": Market Square name for any cult that looks too cheerful.

### Lesser Fiends
*Core Bestiary · Minion / Standard · Brute · Levels 1/2 to 14*
*Small, large, and in between, and all of them wrong: a stinking little thing that bursts, a spined fiend that spits, and a four-armed horror whose claws want to tear.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Stenchling | 1/2 | 14 | None | 6 |
| Spiny Fiend | 4 | 48 | None | 6 |
| Glabrezu | 14 | 120 | Heavy | 6 |

Stage 9-12, 13+.

**Actions**
*Stenchling*
- **Bite** (1 Action) 1d6+1. Can't crit.
- **Putrid cloud** (Passive) On death, Reach 2, AoE: 2d6 to enemies.
*Spiny Fiend*
- **Spines** (Passive) Melee attackers take 4 damage.
- **Claws** (1 Action, ×2) 1d6+4.
- **Shoot spine** (1 Action, Range 12) 1d6+4. Use instead of Claws.
*Glabrezu*
- **Doomclaw** (1 Action, ×2, Reach 2) 1d6+20. On damage, Grappled, escape DC 16. If Grappled by both claws, you must escape from each.
- **Tear asunder** (1 Action, vs a creature Grappled by both claws) 50. Unpreventable damage. Then, if the target is Dying: DC 16 STR save or be torn in two, dying instantly.

**In play.** Wants a mess. Stenchlings run at the nearest enemy and burst, Spiny Fiends shoot from behind them, and a Glabrezu takes the toughest hero with both claws. Never breaks off while its summoner is watching.
**Designer note.** Printed GM Guide blocks, unchanged. Stenchlings are cheap bomb-carriers, and killing one adjacent to a friend is worth thinking about. The Spiny Fiend punishes melee with 4 damage and shoots 12 spaces. The Glabrezu is a level 14 fiend whose Tear Asunder ends a Dying hero outright, so keep its victim out of two grips at once. Cultists and the Children of Ibraxus summon the first two.
**Sources.** Nimble GM Guide, Bestiary: Cultists/Horrors, fiends.

**Traits (d6)**
1. It smells of boiled eggs and wet iron.
2. Pale yellow pustules pulse on its back like second hearts.
3. A broken pen sticks out from one of its spines. A scribe's.
4. It hums the same off-key hymn, over and over.
5. A bell around its neck, a cat's, that tinkles with each step.
6. A crooked grin, with one tooth too many, and it is pleased.

**Encounters (d4)**
1. A crowd of tiny fiends carries a cauldron down the street. They stop, look at the party, and one of them bows.
2. A summoner's botched ritual has left a Spiny Fiend in a locked cellar, sulking. It wants to go home. The summoner wants it gone.
3. A shopkeeper begs the party to keep a Glabrezu at bay for an hour. He has a contract, a clause, and a pen.
4. A stenchling has crawled into the party's pack and is waiting.

**Lairs (d4)**
1. A smoky cellar with sulfur stains in a perfect circle on the floor, and a half-burnt contract on a stand.
2. A fountain in a ruined plaza that runs with black, oily water, and the surrounding stone is cracked.
3. A room in an abandoned manor with a door that opens onto a different place every time.
4. A Maphotar wreck, half-sunk in bone sand, where a Glabrezu keeps a pile of broken weapons.

**Rumours (d4, Lore check)**
1. ⊤ Don't kill a stenchling next to a friend. It bursts.
2. ⊤ Spiny Fiends are brutal in melee. Shoot them.
3. ⊥ Fiends cannot cross a line of salt.
4. ⊥ A Glabrezu can be bargained down. It will accept anything of value.

**Gig Fit**
- Verb: Stop / Bury
- But+: Monster result at Stages 9-12 for the small ones, and 13+ for a Glabrezu. Good as the summoned aftermath of a cult fight.
- Patron hook: A mage of Kartan summoned something she should not have and has locked it in a cellar. She wants it sent home without the Golden Council finding out.
- City of Arches name: "Imps": Market Square word for anything with horns, accurate or not.

### Spiders
*Core Bestiary · Minion / Standard · Controller · Levels 2 to 6*
*A web is never only a web. These spin their traps wide, sit at the centre, and wait for something to touch a thread. Ettercaps do it with a wire.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Giant Spider | 2 | 30 | None | 6 |
| Ettercap | 4 | 50 | None | 6 |
| Nestweaver | 6 | 50 | Medium | 6 |

Stage 7-12, 13+.

**Actions**
*Giant Spider*
- **Shoot web** (1 Action, Range 6) 1d8+2. Restrained, escape DC 12 or any slashing or fire damage.
- **Bite** (1 Action, vs a Hampered creature) 1d8+5. Poisoned (healing ends). Use instead of Shoot web.
*Ettercap*
- **Web garrote** (1 Action) 1d8+10. Grappled, escape DC 12, and Silenced until escape.
*Nestweaver*
- **Swarm** (1 Action) Summon 3 spider minions (size d8). Then choose 1: Shoot web or Bite.
- **Shoot web** (1 Action, Range 6) 1d8+2. Restrained, escape DC 12 or any slashing or fire damage.
- **Bite** (1 Action, vs a Hampered creature) 1d8+10. Poisoned (healing ends).

**In play.** Wants prey stuck first and eaten second. Webs the one who will not be missed, bites the Restrained, and the Ettercap garrotes whoever is talking. Breaks off when Bloodied, up the web.
**Designer note.** Printed GM Guide blocks, unchanged. Everything here is Hampered bait: Restrained is a bite on a plate. The Ettercap's Silence matters most against Mages, Songweavers, and Commanders, and the Nestweaver's three minions make the room feel like a spider swarm. Fire and slashing are the keys, and a hero with a torch changes the encounter. Lower Reaches cellars and Lost Cisterns beams.
**Sources.** Nimble GM Guide, Bestiary: Underground, spiders.

**Traits (d6)**
1. Its web has a hero's lost button caught in it, a long way up.
2. The Ettercap wears a fine human coat, a size too small, with a hero's initials stitched inside.
3. A neat little stack of cocoons hangs overhead, labelled with tiny knots.
4. The web twangs a faint, musical note, which changes with the weight.
5. It sings to its web, softly, in a human lullaby.
6. Its legs are bright green in the torchlight, and its eyes are red.

**Encounters (d4)**
1. A hero touches a tripwire in an otherwise empty hall. Far above, something stirs.
2. A woman hangs from the ceiling in a cocoon, alive, whispering for help. The spider is waiting for someone to cut her down.
3. An Ettercap offers the party a deal: leave the passage, and it will leave them be. It has a very pleasant voice.
4. A cellar door is stuck. Behind it, a perfect, silent web, shaped like a doorway.

**Lairs (d4)**
1. A cellar with a web across every surface, thick as cloth, and a large, dark shape in a corner, swaying.
2. A ruined mine shaft hung with cocoons, some old, some fresh, some still moving.
3. A drain junction whose ceiling is invisible under the webs. A single glint of metal marks a dropped sword.
4. An abandoned inn, every bed made, every pillow wrapped in silk.

**Rumours (d4, Lore check)**
1. ⊤ Slashing or fire frees you from a web. Keep a knife in your hand.
2. ⊤ The Ettercap goes for whoever is giving orders. Don't be loud.
3. ⊥ Spiders fear light. Open a window and they scatter.
4. ⊥ The big one is the queen. Kill her and her children die.

**Gig Fit**
- Verb: Find / Escort
- But+: Monster result at Stages 7-12 in a cellar or cistern, and any Deathreach or Terrache arch. Good with a rescue: someone is already in a cocoon.
- Patron hook: A Black Hand fence lost a shipment in a Lower Reaches cellar, and three runners to the web. He wants the shipment, and the runners if they are alive.
- City of Arches name: "Weavers": cellar-dwellers' word for the web-folk, and the first thing a hero learns in the Lower Reaches.

### Deep Horrors
*Core Bestiary · Standard / Elite · Brute · Levels 10 to 16*
*Nightmarish denizens of the deep, lurking in dark tunnels and cavernous depths, ready to ensnare or devour any intruders: a chitin-plated tunneller, a living cloak, and a worm.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Umber Hulk | 10 | 80 | Heavy | 6 |
| Cloaker | 13 | 110 | None | Fly 10 |
| Great Worm | 16 | 140 | Heavy | 8 (burrow 8) |

Stage 13+.

**Actions**
*Umber Hulk*
- **Confounding pheromones** (1 Action, Reach 3) Enemies make a DC 14 WIL save or become Confused. Each time they fail, gain advantage 1 on the save this encounter. Confused: the GM spends 1 action this round.
- **Mandible & claws** (1 Action, ×2) 1d10+10. Use after Confounding pheromones.
*Cloaker*
- **Ambusher** (Passive) Cloakers always start first and heroes roll Initiative with disadvantage.
- **Mutual harm** (Passive) You take half damage from attacks while Grappling a creature (they take the other half).
- **Wrap** (1 Action) 2d10+20. Grappled, escape DC 15.
- **Horrifying wail** (1 Action, Reach 6, AoE) All others make a DC 15 WIL save, or become Frightened and must spend an Action to move as far away as possible. Use instead of Wrap.
*Great Worm*
- **Tremor sight** (Passive) Advantage against targets who moved this round, Disadvantage otherwise.
- **Crush** (1 Action, Line 3×6, AoE) d88. Failed DC 18 DEX save. Creatures who fail can spend 1 Action to dive out of the way instead, moving half their speed and landing Prone.
- **Bite** (1 Action, Reach 6) 1d4+50. On crit, Swallowed. Swallowed: you take 20 damage at the start of your turn. Your attacks cannot miss and ignore armor. Use instead of Crush.

**In play.** The Hulk wants the tunnel. The Cloaker wants a meal in the dark. The Worm wants anything that moves. All of them break off when Bloodied, into the rock or the dark.
**Designer note.** Printed GM Guide blocks, unchanged. Three solo-grade horrors. The Umber Hulk steals actions, the Cloaker steals the first round, and the Great Worm punishes anyone who moves. Each is a high-level threat and a terrain problem, so use one per episode and make the map do half the work. They belong to Deathreach's Abhorrent Vats and Terrache's deep caves, not the city.
**Sources.** Nimble GM Guide, Bestiary: Underground, deep horrors.

**Traits (d6)**
1. Its carapace is the colour of wet slate, and scraped bright where it has been digging.
2. A deep, rhythmic scraping can be heard long before it arrives.
3. The Cloaker looks like a spare coat and smells like a wet dog.
4. The Worm trails a train of loose stones and bones.
5. It tilts its head to the side, listening, and moves only when it hears a step.
6. Its eyes are blank and covered in a clear film.

**Encounters (d4)**
1. The party hears a grinding below. The walls are warm.
2. A coat hangs on a hook in an empty hall. It was not there a moment ago.
3. A hero's footsteps stop echoing. Nothing else in the cave moves.
4. A tunneller bursts from the wall behind them, shouting, and every hero feels the world slip.

**Lairs (d4)**
1. A tunnel network of perfectly smooth, circular passages, with a polished floor and no sign of how they were cut.
2. A cavern whose roof is hung with dark, motionless, cloak-like shapes.
3. A pit in the earth miles deep, ringed with the carcasses of larger things.
4. A long, straight, dry corridor, its floor a delicate sheet of dust. Nothing has crossed it in years.

**Rumours (d4, Lore check)**
1. ⊤ The Worm hears feet. Stand still and it will lose you.
2. ⊤ A cloaker takes half what you give it. Attack it from range.
3. ⊥ Umber hulks are blind. Wear black.
4. ⊥ A Great Worm that swallows you can be cut out of. It always lets go if you hurt it.

**Gig Fit**
- Verb: Find / Stop
- But+: Monster result at Stage 13+ on Deathreach and Terrache arches. One per episode, with a map that matters.
- Patron hook: A Black Hand fixer has a tunneller digging under a Golden Council vault. He says it is a coincidence, and he wants the party to stop it before the Council hears.
- City of Arches name: "Diggers": duergar word, and the only thing a duergar will say to a stranger about one.

---
## City of Arches

### Doppelganger Sneak
*City of Arches · Standard · Lurker · Level 3*
**Core:** Vynan's replacement agents, loose in the city. It borrows a face and knifes whoever doubts it.
*A grey, hairless figure, its face smooth as a thumb until it decides to be someone. The fingernails always grow back wrong, so it keeps its hands in its sleeves.*

HP 41 · Armor None · Speed 6 · DC 12 · Stage 1-6

**Actions**
- **Wear a face** (1 Action) Copies a humanoid it saw this scene. Spotting it takes Examination DC 12.
- **Knife** (1 Action, ×2) 1d8+2. +1d6 with advantage. Always advantaged against someone who doesn't know what it is.
- **Swap** (Reaction, 1/round) When a melee attack targets it beside a bystander: swaps places and takes their face. The attack hits the bystander.

**In play.** Would rather not fight. Strikes first, at the hero who doubts it most. Bloodied, it walks into a crowd as someone else.
**Designer note.** Its armor is the crowd. Nothing in an empty alley, a nightmare at the festival. Give the party a tell from Traits and let Examination find it.
**Sources.** Monster Vault: 4e MM, Lv 3 Skirmisher. Feint folded into Knife (4e); targets the social threat (Ammann). Vynan origin is canon.

**Traits (d6)**
1. Every face it wears smells faintly of lamp oil.
2. It blinks too rarely. Once noticed, impossible to stop counting.
3. It moves its first victim's ring to whatever finger the new face would use.
4. It hums a Vynan work song when it thinks it's alone.
5. Its copies are a few years too young, learned from an old portrait.
6. It refuses one face, a halfling woman's, and flinches when it sees her.

**Encounters (d4)**
1. The patron arrives early, friendly, and too pleased. The real one is twenty minutes behind.
2. A Golden Knight asks for papers. Two streets back, the same Knight lies in a doorway in his smallclothes.
3. A hero sees themself across the square, buying a pie. It waves, wearing their door key.
4. An Archkeeper is processing a new arrival. The Archkeeper is the sneak, taking notes.

**Lairs (d4)**
1. An attic papered with charcoal portraits and notes: 'limps left', 'never in before noon'. One is a hero.
2. A bath cubicle locked a week, six pressed sets of clothes folded inside, each a different size.
3. An empty crypt niche on the Cliffs, its nameplate chiselled off.
4. A dressing room mirror turned to the wall. On the back, a list of names, all crossed out but two.

**Rumours (d4, Lore check)**
1. ⊤ It copies a face, not a memory. Ask what only the real one would know.
2. ⊤ Cornered, it runs for the thickest crowd. Clear the street.
3. ⊥ Silver burns them. Press a coin to someone's skin and a fake will scream.
4. ⊥ They only copy the dead. If your friend is alive, they're real.

**Gig Fit**
- Verb: Find / Stop
- But+: Stages 1-6, best at the festival or the Theater. Twist: whoever the party is escorting was replaced before the episode.
- Patron hook: Roselyn Zeshe wants to know who sat in on a Council audit who was not on the list.
- City of Arches name: "Borrowers": they borrow a face and return the body.

### Flameskull
*City of Arches · Standard · Artillery · Level 5*
**Core:** A tomb-wizard who kept the job after death. It burns from above and is back in an hour.
*A skull wreathed in green fire, jaw clicking as it drifts. Old candle wax still drips from its eye sockets.*

HP 49 · Armor Medium · Speed Fly 8 (hover) · DC 13 · Stage 4, 13+

**Actions**
- **Fire ray** (1 Action, ×2, Range 12) 1d10+5. Fire, Smoldering. Once per encounter, spend both rays on a 2-space fireball, 3d6+4, DEX save for half.
- **Rise** (Reaction, 1/round) When approached, flies 4 spaces up or back. Useless under a ceiling below 3.
- **Undying** (Passive) Heals 5 each turn unless hit by radiant. Re-forms in an hour unless sealed in holy water or lead.

**In play.** Keeps its post and has no fear. Burns Shepherds and Mages first. Never breaks off.
**Designer note.** Terrain decides it: a high vault makes it miserable, a low crypt makes it a skull in a box. Killing it ends the fight, not the job: that is a Bury gig.
**Sources.** Monster Vault: 4e MM, Lv 8 Artillery. Regeneration (4e); obedience and target choice (Ammann).

**Traits (d6)**
1. Its fire is old-copper green and smells of hot pennies.
2. It recites a list in a dead tongue. One name repeats.
3. A gold tooth, the only thing in the room worth stealing.
4. Its flames lean toward running water like a compass needle.
5. A crack across the crown, packed with wax. Someone tried to mend it.
6. It laughs when hit, and never stops counting the heroes.

**Encounters (d4)**
1. The seal breaks and the doorway fills with fire. It has waited two hundred years for this.
2. A Black Hand crew sells it caged as a forge light. The cage is cracked; the buyer is a hero's neighbour.
3. It drifts down a stairwell, dousing and relighting, firing between the turns.
4. Two of them argue in a dead tongue over a sarcophagus. One is losing.

**Lairs (d4)**
1. A vault six spaces high, scorch marks spiralling up to one niche.
2. A library of ash with one untouched shelf: the spellbook it died reading.
3. A crypt where every other skull has been turned to face the wall.
4. A lead-lined box on the floor, its lid torn off from inside.

**Rumours (d4, Lore check)**
1. ⊤ Get it under a low roof. It hates having nowhere to rise.
2. ⊤ Holy water or lead, or it's back by supper.
3. ⊥ A bucket of water puts it out for good.
4. ⊥ It can't cross its tomb's threshold. Step outside and you're safe.

**Gig Fit**
- Verb: Bury / Steal
- But+: Stage 4 and Threska or Arkus arches. Put it in the room with the goal.
- Patron hook: The University wants one intact; the Archkeepers want the same one at rest. Both pay. Only one can be satisfied.
- City of Arches name: "Tomb-candles": grave diggers won't work a crypt with green light under the door.

### Cavern Choker
*City of Arches · Standard · Lurker · Level 4*
**Core:** The drains grew a hand. It takes whoever is talking, lifts them out of reach, and hides behind them.
*A knot of boneless grey limbs the size of a child, with spiny hands on arms twice its length. It breathes through its skin and makes no sound.*

HP 37 · Armor Medium · Speed 4 (climb 6) · DC 12 · Stage 7-10

**Actions**
- **Throat grab** (1 Action, Reach 3) 1d8+5. Grappled (escape DC 12 at disadvantage), Silenced, hoisted 2 spaces. Escaping drops them, Prone.
- **Squeeze** (1 Action, held target) 1d6+8. Can't miss.
- **Body shield** (Reaction, 1/round, while it holds someone) An attack on the choker hits its catch instead, who may Defend.

**In play.** Takes the caster or the singer, then whoever comes to help. Bloodied, it drops its catch and leaves by any grate within 10.
**Designer note.** The crawler drags you somewhere; the choker lifts you out of the fight. The hero still acts but can't cast, and every rescue risks hitting them. A room with no openings kills it.
**Sources.** Monster Vault: 4e MM, Lv 4 Lurker. Body Shield and the escape penalty (4e).

**Traits (d6)**
1. Sewer moss on its skin, matched to the brick.
2. A Golden Knight's signet worn as a bracelet.
3. Old rope burns on its arms. Someone caught it once.
4. It clicks two fingers twice before every grab.
5. It hoards keys. None open anything nearby.
6. Old and weak in the grip, but its reach is a space longer.

**Encounters (d4)**
1. A courier's satchel swings from a ceiling grate. The message inside is the party's next job.
2. Every few spaces a drain gapes overhead. One of them is breathing.
3. A fence's strongbox has a choker in the pipe above it. Open it without the signal and you're taken.
4. A Kartan mage hangs Silenced in a shaft, alive. It is waiting to see who comes.

**Lairs (d4)**
1. A five-pipe junction littered with boots and no bones. It eats somewhere else.
2. A dead cistern pump, its iron casing holed for windows.
3. A crawlspace between tenement floors. The tenants above are missing pets.
4. A walled-up alcove, bricks pushed out from inside and stacked neatly.

**Rumours (d4, Lore check)**
1. ⊤ It goes for whoever talks. Keep your mouth shut in the drains.
2. ⊤ Stuff the pipes and it has to fight on your ground.
3. ⊥ Go limp and it lets go.
4. ⊥ They hunt in pairs, one to grab and one to bite.

**Gig Fit**
- Verb: Find / Escort
- But+: Stages 7-10, when the party is escorting someone. It takes the escort first.
- Patron hook: A Black Hand fixer needs a package walked through the drains under a Council toll post. Three couriers have vanished on that route.
- City of Arches name: "Drainhands": every Lower Reaches child is told never to put a hand in a drain.

### The Sterling Scabbards
*City of Arches · Standard · Skirmisher · Levels 2 to 3*
**Core:** The party in a mirror: four professionals who take the same jobs for the same patrons, and got there first.
*Good boots, clean kit, polite manners, paid on time. They owe the Black Hand, and everyone in the Lower Reaches knows it.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Maren Vale, Commander | 3 | 27 | Medium | 6 |
| Tobin Quill, Cheat | 2 | 24 | None | 6 |
| Ysolde Rook, Hunter | 2 | 27 | None | 6 |
| Brother Anselm, Shepherd | 2 | 31 | None | 6 |

Stage 1-8.

**Actions**
*Maren Vale, Commander*
- **Rapier** (1 Action, ×2) 1d8+1.
- **Form up!** (Free, 1/round) Two allies within 8 move up to 4 spaces.
- **Contract** (Passive) When Maren calls a retreat, each Scabbard moves away without provoking. Blocked, held or bargained with, they stay.
*Tobin Quill, Cheat*
- **Dirty knife** (1 Action, ×2) 1d6+2. Advantage against a target beside another Scabbard.
- **Pick pocket** (1 Action, adjacent) Finesse contest: takes one unsecured item, never a held one.
- **Smoke and mirrors** (Reaction, 1/encounter, when Bloodied) Invisible until he attacks, and moves 4.
*Ysolde Rook, Hunter*
- **Longbow** (1 Action, Range 12) 2d6+3.
- **Mark quarry** (Free, 1/round) One creature is Marked for the encounter. Each round the first Scabbard attack on it has advantage.
- **Snare** (1 Action, 1/encounter, Range 8) 2-space radius. DEX save DC 11 or Restrained (escape DC 11).
*Brother Anselm, Shepherd*
- **Searing light** (1 Action, Range 8) 1d8+2. Radiant. Double against undead.
- **Mend** (1 Action, Range 6) 2d6+4. Heals an ally.
- **Sanctuary** (Reaction, 1/encounter, Range 6) An ally who would drop to 0 HP stays at 1.

**In play.** Gets the job done first and cleanly. Marks the best hero, snares the exit, takes the prize, and leaves on Maren's word.
**Designer note.** Rivals, not villains. They run when losing, but a crew that cannot run can be taken. Two Scabbards suit one hero; all four suit a party of three. Put them on the tracker at the second meeting.
**Sources.** Original. Built from the Sejr rival-crew tables: Neutral, wealthy, locally known, in debt to the Black Hand.

**Traits (d6)**
1. Maren carries a pair of rapiers and uses only one.
2. Tobin counts coins aloud, then leaves one behind on purpose.
3. Ysolde buys every arrow fresh and never owns a spare.
4. Anselm's holy symbol belongs to a god nobody has heard of.
5. All four wear a sterling scabbard-tip, each on a different weapon.
6. One of them (roll) is terrified of the Black Hand, and the rest know.

**Encounters (d4)**
1. They are already at the door the party came to open, resting in a row. Information is for sale.
2. They offer to split the job and the pay. Tobin's smile says trap; Maren's says not.
3. A wounded Scabbard, left behind on purpose by the others.
4. They are being robbed by someone worse, and ask politely for help.

**Lairs (d4)**
1. A rented room with a city map and three jobs circled. One is the party's.
2. A cache chest: spare kit, a coded ledger, and a note to the party by name.
3. Their tavern table: the same four chairs every evening, and a barman with orders.
4. A fixer's back room where they pay down the debt on the first of the month.

**Rumours (d4, Lore check)**
1. ⊤ They don't die for coin. Make it cost more than the job and they walk.
2. ⊤ They owe the Black Hand. Someone below is always watching them.
3. ⊥ They are a Council front. Every job is on Zeshe's list.
4. ⊥ They always work alone. One Scabbard means you're about to be robbed.

**Gig Fit**
- Verb: Find / Prove / Steal
- But+: Faction result at Stages 1-8, or the NPC-room rival crew, once per episode. The second meeting goes on the tracker.
- Patron hook: The party's patron hired the Scabbards for the same job, to see who is better.
- City of Arches name: "Tips": a tip job is one already done properly.
- Rival clock (6): 1 First to the objective. 2 Offer a split. 3 Take a promised job. 4 The Black Hand calls the debt. 5 The party is offered the debt, or the names. 6 Resolve: allied (the party took the debt), owned (the Black Hand holds them), or buried (captured, dead or disbanded). Step on when the party loses a scene to them or ignores a clue they left; step back when it outbids, exposes or helps them. Capturing or killing Maren jumps to 6.
- Campaign ladder: Find their buyer. Steal their cache before the Black Hand does. Prove it in the open, or refuse. Each rung can end with the crew allied, owned, or buried.

### Hedge Casters
*City of Arches · Standard · Controller · Levels 1 to 4*
**Core:** City-grown magic without a degree: a back-alley witch, a Theater masquer, a Council clerk, a Kartan dropout.
*Four low-level casters, each a different way of being in your way. They need someone in front of them.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Hedge Witch | 1 | 18 | None | 6 |
| Masquer | 2 | 24 | None | 6 |
| Writ-Binder | 3 | 34 | None | 6 |
| Kartan Hedge-Mage | 4 | 42 | None | 6 |

Stage 1-8.

**Actions**
*Hedge Witch*
- **Pinch of spite** (1 Action, Range 6) 1d6+2. Psychic.
- **Hex of clumsy feet** (1 Action, Range 8) WIL save DC 10 or Slowed until their next turn ends.
- **Familiar crow** (Reaction, 1/round) An enemy attacking within 6 gets a crow in the face: disadvantage.
*Masquer*
- **Flash powder** (1 Action, Range 6) DEX save DC 11 or Blinded until their next turn ends.
- **Stage fright** (1 Action, 1/round, Range 8) WIL save DC 11 or Frightened of it until their next turn ends.
- **Mirror masks** (1 Action, 1/encounter) Two harmless 1 HP decoys within 4. While one is adjacent, attacks on the Masquer are disadvantaged.
*Writ-Binder*
- **Writ of seizure** (1 Action, Range 8) DEX save DC 12 or Restrained until their next turn ends, or until an ally touches the script.
- **Writ of silence** (1 Action, 1/encounter, Range 6) WIL save DC 12 or Silenced until their next turn ends.
- **Writ of citation** (Free, 1/round) A target is Taunted by the Writ-Binder until their next turn ends.
*Kartan Hedge-Mage*
- **Slowing bolt** (1 Action, Range 12) 2d6+5. Slowed until their next turn ends.
- **Gravity well** (Replaces its attacks, 1/encounter, Range 8) 2-space radius: STR save DC 13 or pulled 3 to the centre and Prone.
- **Overreach** (Reaction, when crit) 1d8. Backlash: it takes the damage and its next attack is disadvantaged.

**In play.** Hang back behind the nearest body. Blind the first hero to close, pin the strongest, heap the rest. Leave when out of tricks.
**Designer note.** Each one is a different verb, and none takes a turn. Glass cannons: they need a front rank of Bandits or Cultists, and the party's job is to reach them.
**Sources.** Original. Fills a gap: below level 8 the GM Guide has no caster that Blinds, Frightens, Taunts or pulls.

**Traits (d6)**
1. The witch's charms rattle like seeds, each with a name.
2. The masquer never wears the same face twice. The last one is a hero's.
3. The clerk stamps everything, the floor included, when nervous.
4. The Kartan dropout's ink is still moving on their hands.
5. One of them (roll) is better than the work they do, and knows it.
6. A spell goes harmlessly wrong every fight. They are embarrassed.

**Encounters (d4)**
1. A woman offers a hero a free charm. It is a hex; she wants to see if it works.
2. A masquer sells tickets to a distraction. The real show is three doors down.
3. A Council clerk arrives with a genuine writ and two guards to confiscate something.
4. A student has botched a spell and is hiding it. The spell is still in the room.

**Lairs (d4)**
1. A back-alley shop of dried herbs and tiny bottles labelled in a child's hand.
2. A dressing room with a hundred masks on the wall and one blank.
3. A Council annexe office, every surface stamped, a locked drawer of writs.
4. A rented room near Kartan, failed experiments in the corner, one still smoking.

**Rumours (d4, Lore check)**
1. ⊤ They fold if you reach them. Mind the first spell.
2. ⊤ An ally's touch breaks the writ.
3. ⊥ Hedge magic is all tricks and smoke.
4. ⊥ A Council writ binds anyone it touches. Don't resist it.

**Gig Fit**
- Verb: Find / Stop
- But+: Monster or Faction result at Stages 1-8. A first caster fight, and natural opposition for the rival crew.
- Patron hook: The University wants a hedge witch's grimoire. The Black Hand wants her quiet about who buys from her.
- City of Arches name: "Back-door mages": Kartan students' word for anyone good without a degree.

### Children of Ibraxus
*City of Arches · Standard · Controller · Levels 1 to 4*
**Core:** The Fetid Prince's faithful: cheerful, damp, and sure the world is better when everyone is a little sick.
*Pale, smiling, coughing politely into a sleeve, trailed by a polite buzz of flies.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Mire Acolyte | 1 | 20 | None | 6 |
| Censer-Bearer | 2 | 28 | None | 6 |
| Pestilent Preacher | 4 | 46 | None | 6 |

Stage 7-10, 13+.

**Actions**
*Mire Acolyte*
- **Rotten blade** (1 Action) 1d6+4. Poisoned until the target's next turn ends.
- **Carrier** (Passive) A Poisoned creature starting its turn beside any Child takes 1d4, once, however many Children.
*Censer-Bearer*
- **Censer swing** (1 Action) 1d6+3.
- **Fetid smoke** (1 Action, Range 6) 2-space radius: STR save DC 11 or Poisoned a turn. The smoke lingers 2 rounds as Difficult Terrain.
*Pestilent Preacher*
- **Plague sermon** (1 Action, 1/round) Enemies within 8 who hear: STR save DC 12 or Poisoned a turn. Already Poisoned, also Slowed.
- **Fever touch** (1 Action) 2d6+4. A Poisoned target is Slowed.
- **Share the fever** (Passive) Once a round, splits damage dealt to an ally within 6: it takes half, the ally half.

**In play.** Smoke first, then the sermon on whoever breathed it, then blades on the Slowed. Never breaks off.
**Designer note.** A ratchet: Poisoned, then Slowed, then 1d4 beside a cultist. No turn is lost. Distance and healing answer it, and the Preacher dies first.
**Sources.** Original. The Children of Ibraxus are a Sejr faction; Ibraxus, the Fetid Prince, is setting canon.

**Traits (d6)**
1. Flies follow them, politely, never landing.
2. Robes damp in dry weather, smelling of green water.
3. They offer tea in a chipped cup.
4. A boil on each neck, tied off with a ribbon of favour.
5. A three-note lullaby, hummed slightly flat.
6. A wrist tag: date infected, and date hoped to be 'blessed'.

**Encounters (d4)**
1. A smiling Child carries a genuinely sick girl and asks the party to take her somewhere.
2. Free soup at a crossroads, from the pot they use for their rites.
3. A bell-ringer leads a quiet line of the sick, in their nightclothes.
4. A Preacher on a barrel praises being a vessel. Half the crowd is infected, and happy.

**Lairs (d4)**
1. A drain-mouth chapel lit by green candles, every wall damp.
2. A hospice where every bed is full and every nurse is kind.
3. A wrong-coloured cistern with a baptistery in the middle.
4. An apothecary with every bottle open and a feast laid in back.

**Rumours (d4, Lore check)**
1. ⊤ Poisoned beside them gets worse. Fight from range.
2. ⊤ The Preacher takes the others' wounds. Kill it first.
3. ⊥ Touch one and you're infected for life.
4. ⊥ They're harmless, just sick people with odd habits.

**Gig Fit**
- Verb: Stop / Find
- But+: Faction result 'the Children of Ibraxus' at Stages 7-10. Pairs with Oozes and Stenchlings.
- Patron hook: A Temple priest wants the source of a new Lower Reaches fever. It has a pulpit.
- City of Arches name: "The Damp": "keep that up and the Damp'll have you."

### Serpent Cult of Vithra
*City of Arches · Standard · Controller · Levels 2 to 5*
**Core:** They bathe in the blood that runs from the Serpent King's idol. Survivors come back scaled, still, and watchful.
*Scaled at the wrists, eyes that catch the light, voices with a hiss on the S.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Blade-Dancer | 2 | 28 | None | 6 |
| Serpent-Charmer | 3 | 38 | None | 6 |
| Voice of the Idol | 5 | 66 | None | 6 |

Stage 7-12.

**Actions**
*Blade-Dancer*
- **Twin blades** (1 Action, ×2) 1d6. On crit, Slowed.
- **Sway** (Reaction, 1/round, targeted in melee) Moves 2 first. Out of reach, the attack misses.
*Serpent-Charmer*
- **Call the coil** (1 Action, Range 8) 2-space radius: DEX save DC 12 or Restrained by snakes. Fire or slashing frees.
- **Snake swarm** (1 Action, 1/encounter) Summons 2 snake minions (d6).
*Voice of the Idol*
- **Serpent-King's kiss** (1 Action) 2d6+8. Poison. Poisoned until the target's next turn ends.
- **Hiss of Vithra** (1 Action, 1/round, Range 8) Enemies who hear: WIL save DC 13 or Frightened of the Voice a turn.
- **Venom-bathed** (Passive) Immune to Poisoned; resists poison.

**In play.** Dancers take the best melee hero, the Charmer pins the next, the Voice frightens the rest. Scatter when the Voice falls.
**Designer note.** Coils and fear, not poison: it plays differently from the Children of Ibraxus. Fire frees the coil. Snakemen treat the Voice as a prophet.
**Sources.** Original. Vithra, the Idol and the Night of Vithra's Kiss are setting canon (the Deadlands).

**Traits (d6)**
1. Fresh green scales at wrists and ankles.
2. A serpent tattoo that shifts when a heart beats near.
3. Eyes that shine a little in the dark.
4. Blades held loose, like dancers.
5. A snake on the Charmer's shoulder, nodding at the heroes.
6. A hiss on every S, louder when angry.

**Encounters (d4)**
1. A dusk procession sings softly. The covered cart at the back drips.
2. A young man scaled to the elbow begs for help leaving before the next ceremony.
3. The Charmer plays for children in the market. Small snakes follow the tune out of a drain.
4. A Dancer challenges the party's best fighter to a duel. It's a distraction.

**Lairs (d4)**
1. A dry cistern of serpent statues, a bowl of dark liquid at each one's feet.
2. A bathhouse 'closed for repairs', steam rising, the water the wrong red.
3. A cellar temple with a two-headed serpent altar and a ring of warm rope.
4. A caravan of idols in a warehouse, always one step ahead of the Knights.

**Rumours (d4, Lore check)**
1. ⊤ Fire or an axe cuts the coil.
2. ⊤ Silence the Voice and the rest lose their nerve.
3. ⊥ Their blood is poison. Don't let it touch you.
4. ⊥ Cut one open and a snake comes out.

**Gig Fit**
- Verb: Stop / Find
- But+: Faction result 'cultists' at Stages 7-12, or a Deadlands Neglect payoff. Pairs with Snakemen.
- Patron hook: Adel Rosethorn has a buyer for the Idol's blood and wants someone who doesn't mind being bathed.
- City of Arches name: "Kissers": as in, they've been kissed.

### Golden Knights
*City of Arches · Minion / Standard · Defender · Levels 3 to 5*
**Core:** The Golden Order's sword arm: gilt armour, writs and a whistle. They arrest first, and always call for more.
*Gilt plate catching the sun on patrol, tabards with the queen's sun, a manacle ring at every belt.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Watch Guard | Min | Minion | None | 6 |
| Golden Knight | 3 | 34 | None | 6 |
| Knight Sergeant | 4 | 37 | Medium | 6 |
| Griffon Knight | 5 | 49 | Medium | Fly 12 |

Stage 1-8.

**Actions**
*Watch Guard*
- **Halt!** (1 Action) 1d8. A spear jab, shouted. Follows the GM Guide minion rules.
*Golden Knight*
- **Halberd** (1 Action, ×2, Reach 2) 1d6+2.
- **Formation** (Passive) Armor one step heavier for each adjacent Knight, up to Medium.
*Knight Sergeant*
- **Longsword** (1 Action, ×2) 1d8+4.
- **Shackle** (1 Action, adjacent Prone or Grappled target) Restrained in manacles. Escape DC 12, or the key.
- **Whistle** (Free, 1/encounter) In 1d4 rounds, 1d4 Watch Guards arrive.
*Griffon Knight*
- **Lance charge** (1 Action, after 4+ spaces in a line) 2d8+6. Prone.
- **Griffon talons** (Free, 1/round) 1d8+5. Grappled, escape DC 12.

**In play.** Want order, and credit for it. Shackle the downed, whistle early, kill only when a writ says so or a Knight falls.
**Designer note.** A fight with the Knights is a clock: the whistle brings more. Surrender gets a cell, not a grave, which makes them the city's soft fail state.
**Sources.** Adopted from the setting: Golden Knights (Gazetteer, Citadel; Doorish Hills patrols; griffon riders). Formation from the GM Guide ability table.

**Traits (d6)**
1. The gilt is flaking. Under it, plain city steel.
2. A writ tucked in the gauntlet, already signed, name left blank.
3. A dwarf veteran who served under Joslyn Halfcloak and says so.
4. A new recruit whose ring has an oath scratched inside it.
5. Knows a hero's face from an old wanted notice, and isn't sure.
6. Tired, underpaid, and willing to look the other way, once.

**Encounters (d4)**
1. Knights demand papers. The papers are fine; the Knight wants a bribe.
2. Knights in ill-fitting tabards demand tribute. They are bandits; the real Knights are tied up nearby.
3. A patrol is losing a fight and asks the party for help, and for silence after.
4. A Sergeant conscripts the party on the spot: something just came through an arch.

**Lairs (d4)**
1. The Citadel's three towers behind iron doors and the gold statue of Lord Salvana.
2. A road outpost in the Doorish Hills: a stable, a cell, an evidence shelf with gaps.
3. A griffon aerie on a Citadel tower, a rider polishing a lance.
4. A watch-house at the Black Hand line, where the truce is kept with coin.

**Rumours (d4, Lore check)**
1. ⊤ Surrender and you get a cell, not a grave.
2. ⊤ Once the whistle goes, more are minutes away. Leave before then.
3. ⊥ The Knights and the Black Hand are at war.
4. ⊥ A Knight can't arrest you inside a temple.

**Gig Fit**
- Verb: Escort / Prove
- But+: Faction result 'the Golden Knights' at Stages 1-8, as patron muscle, obstacle, or the arrest after a loud job.
- Patron hook: Commander Joslyn Halfcloak hires adventurers for what the Knights can't be seen doing.
- City of Arches name: "Gilt": Lower Reaches slang. "Gilt on the corner" means take the long way home.

### Arch Guardians
*City of Arches · Standard · Defender · Levels 2 to 8*
**Core:** Whoever built the arches left them watched. A guardian wakes when its arch opens without the right key.
*Bone, clay, stitched flesh or carved stone, standing at a gate so long that dust has drifted against its feet.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Skeletal Tomb Guardian | 2 | 31 | None | 6 |
| Flesh Guardian | 4 | 52 | None | 6 |
| Clay Guardian | 5 | 49 | Medium | 6 |
| Stone Guardian | 8 | 60 | Heavy | 6 |

Stage Any arch.

**Actions**
*Skeletal Tomb Guardian*
- **Glaive** (1 Action, Reach 2) 1d4+7.
- **Bar the way** (Reaction, 1/round, enemy moves within 2) Glaive them first.
- **Just bones!** (Passive) Resistant to piercing hits (not crits).
*Flesh Guardian*
- **Fists** (1 Action, ×2) 1d8+4. If both hit: Grappled and dragged 2 toward the arch.
- **Stitched** (Passive) Lightning heals it. Fire makes its next Fists attack disadvantaged.
*Clay Guardian*
- **Slam** (1 Action, ×2) 1d8+6. Knockback 2, away from the arch.
- **Rush** (Free, 1/encounter) Moves its full Speed and Slams once.
- **Kiln-fired** (Passive) Fire damage heals it.
*Stone Guardian*
- **Fist** (1 Action, ×2) 2d6+8.
- **Slowing glare** (1 Action, 1/round, Range 6) WIL save DC 13 or Slowed until their next turn ends.
- **Spell-proof** (Passive) Half damage from spells.

**In play.** Holds the threshold, ignoring any key-bearer who doesn't attack it. Strikes everyone else; never goes past 12 spaces from its arch.
**Designer note.** Keys are Sejr's politics, and guardians enforce them. Steal the key and the fight never happens. Fight the guardian and the gate still won't open. A key shields only its bearer.
**Sources.** Adopted from the setting: clay guardians at arches (Deathreach seed, Deadlands), skeletal tomb guardians (Threska seed), flesh and stone guardians. Keyed and Bound are this book's.

**Traits (d6)**
1. Dust drifted against its feet, undisturbed for centuries.
2. The arch's sigil, carved into its chest, glows when a key comes near.
3. One arm replaced, badly, by a later builder.
4. It faces the arch, not the room. It guards what comes out.
5. Old offerings at its feet: coins, flowers, a child's drawing.
6. It knows one word, the arch's name, and says it when it wakes.

**Encounters (d4)**
1. The party has the right key. The guardian lets them pass, and stares at their companion who doesn't.
2. Two clay guardians walk by carrying a relic to a master dead for centuries.
3. A rival crew is pinned at a gate by a guardian, their forged key smoking.
4. The arch opens from the far side. The guardian turns to face whatever is coming through.

**Lairs (d4)**
1. An arch of knotted rock under Sunken Revvia, a guardian at each foot.
2. A tomb on the Cliffs of the Dead with a basalt arch and a skeletal guard.
3. A Kartan vault where a stone guardian stands at a sealed arch, its key in a locked case.
4. A Market Square arch with a guardian everyone mistakes for a statue.

**Rumours (d4, Lore check)**
1. ⊤ It ignores whoever carries the key. Steal the key, not the fight.
2. ⊤ It won't follow past twelve paces from its arch.
3. ⊥ The Archkeepers built them, and can call them off.
4. ⊥ Break the arch and the guardian falls.

**Gig Fit**
- Verb: Steal / Prove
- But+: Any arch episode, at the gate in or out. The opening fight of an Arch direction.
- Patron hook: A guardian can tell a true key from a forged one. The University wants to know how.
- City of Arches name: "Doorstones": arch porters' word. "Ask the doorstone" means test a key.

### The Steel Hands
*City of Arches · Standard · Defender · Levels 1 to 5*
**Core:** Lady Kalya's hired knights. Her bodyguard Asher will die for her; the rest can be bought.
*Matched steel plate with the gilt sanded off, a merchant lady in the middle, and a quiet woman with a longsword who never leaves her side.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Lady Kalya | 1 | 21 | None | 6 |
| Steel Hand | 3 | 27 | Medium | 6 |
| Steel Hand Crossbow | 2 | 24 | None | 6 |
| Silent Asher | 5 | 64 | Medium | 6 |

Stage 1-8.

**Actions**
*Lady Kalya*
- **Paid in full** (Free, 1/round) A Steel Hand within 8 moves and attacks.
- **No fighter** (Passive) Never attacks. Asher Interposes for her whenever she can.
*Steel Hand*
- **Longsword** (1 Action, ×2) 1d8+3.
- **Mercenary** (Passive) Offered more than Kalya pays (Influence DC 12, and the coin), it walks away.
*Steel Hand Crossbow*
- **Heavy crossbow** (1 Action, Range 12) 2d6+3.
- **Mercenary** (Passive) Offered more than Kalya pays (Influence DC 12, and the coin), it walks away.
*Silent Asher*
- **Longsword** (1 Action, ×2) 1d10+5. Advantage against anyone who struck Kalya this round.
- **Run through** (1 Action, 1/encounter) 2d10+10. Against a Prone or Grappled target. Can't be Interposed.
- **Sworn** (Passive) Never breaks off while Kalya lives. Can't be bought.

**In play.** Asher shadows Kalya, the Hands form a line, the crossbows shoot whoever talks. The Hands leave when the coin runs out.
**Designer note.** A rival crew the party can dismantle without a fight: outbid the Hands and only Asher is left. Kalya is a low-level villain with a deep purse and no sense of danger. For one hero: Kalya, one Hand, no Asher.
**Sources.** Adopted from the setting: Lady Kalya, Silent Asher and the Steel Hands (Appendix A, Children of Ibraxus).

**Traits (d6)**
1. Kalya wears a merchant lord's chain and a cult sigil under her collar.
2. Asher hasn't spoken in years. She answers with her eyes.
3. One Hand keeps a ledger of what Kalya owes him.
4. The Hands' armour is Golden Knight surplus with the gilt sanded off.
5. A crossbow Hand with a Black Hand debt mark on his wrist.
6. Kalya tips every servant twice what they're owed, and remembers their names.

**Encounters (d4)**
1. Kalya buys the building the party is standing in, then asks them to leave.
2. A merchant who crossed Kalya is found run through. The Knights suspect Asher and can't prove it.
3. Two Hands approach the party off-duty and ask what the party would pay.
4. Kalya hires the party, through a cut-out, to find a lost arch ritual.

**Lairs (d4)**
1. Kalya's counting-house, ledgers on every wall, a cult shrine behind the safe.
2. A barracks above a stable where the Hands dice for watch shifts.
3. A Lower Reaches chamber being cleared for a gateway, Hands on guard.
4. Asher's room: a bed, a whetstone, and nothing else.

**Rumours (d4, Lore check)**
1. ⊤ The Hands are hired. Pay them more and they walk.
2. ⊤ Asher will die for Kalya. Don't try to buy her.
3. ⊥ Kalya is a harmless merchant the cult uses for money.
4. ⊥ Asher works for the Golden Knights, undercover.

**Gig Fit**
- Verb: Stop / Prove
- But+: Faction result 'the Children of Ibraxus' at Stages 1-8, or the NPC-room rival crew once per episode.
- Patron hook: The Golden Knights want proof Asher did the murders. Roselyn Zeshe wants Kalya's ledgers.
- City of Arches name: "Kalya's hands": merchants' warning about who just bought the building next door.
- Rival clock (6): 1 Kalya buys a building the party needs. 2 A merchant dies. 3 The Hands hire the party's contact. 4 A ritual is found. 5 The Choul gateway room is cleared. 6 The gate opens. Step on when the party ignores a clue, loses a scene or takes Kalya's coin; step back when it outbids the Hands, exposes a murder or takes the ritual. Capturing or killing Kalya, or holding the gateway room, ends the clock.
- Campaign ladder: Prove Asher's murders. Steal Kalya's ledgers. Stop the gateway. Buying off the Hands skips a fight at any rung.

---
## Deathreach

### Carrion Crawler
*Deathreach · Standard · Lurker · Level 3*
**Core:** Deathreach's scavenger. It holds a crack near the dead and drags anything living through it.
*A pale, eyeless centipede the length of two men, gripping the ceiling. Its mouth is a ring of eight tentacles, each tipped the colour of old bruise.*

HP 28 · Armor Medium · Speed 6 (climb 8) · DC 12 · Stage 7-10, 13+

**Actions**
- **Lash** (1 Action, ×2, Reach 2) 1d6+2. STR save or dragged 2 spaces toward it, Slowed and Grappled (escape DC 12).
- **Withdraw** (Free, 1/encounter) Climbs back through its crack, taking whoever it holds.
- **Bite** (1 Action, Grappled target) 2d8+3. Crits if the target did not try to escape on its last turn.

**In play.** Guards food, not prey. Lashes from reach, bites only what it holds, withdraws when Bloodied.
**Designer note.** A moray eel, not a paralysis trap: the venom only Slows, and the danger is where the held hero ends up. Sluggish in an open room, a siege weapon at a two-space junction.
**Sources.** Monster Vault: 4e MM, Lv 7 Controller. 4e slowed-to-stunned ratchet, stopped at Slowed and held; Ammann (carrion crawlers).

**Traits (d6)**
1. Boots still on the meal half-dissolved in its gut.
2. A pale slime trail on the walls, bright in torchlight.
3. One tentacle a scarred stump. It leads with the others.
4. Silent until the tentacles touch skin.
5. Two legs freshly bitten off. Something down here eats crawlers.
6. Its belly is translucent. Something angular moves inside.

**Encounters (d4)**
1. It fills the only way forward. Around is two hours; through is one hero at a time.
2. A wounded duergar points, silently, at the ceiling above the party.
3. It is backing into a low crack with someone in its grip, still moving.
4. Three of them hold the climb the party needs. They have not noticed yet.

**Lairs (d4)**
1. A four-way junction roofed with moult-husks, the floor bone-white, every exit narrowing.
2. An ankle-deep dark channel. Some shapes under the water are not rocks.
3. A claw-scarred chimney with old gear wedged at every height.
4. A duergar guardpost, the guards sorted into neat piles by something eyeless.

**Rumours (d4, Lore check)**
1. ⊤ It's deaf. It feels footsteps and heat. Hold still and it may pass.
2. ⊤ Once it drags prey through, it feeds for hours. It won't follow into the open.
3. ⊥ One touch and you're paralysed until it lets go.
4. ⊥ They hunt alone and kill each other on sight.

**Gig Fit**
- Verb: Find / Escort
- But+: Stages 7-10 and Deathreach arches, already sitting in the only way forward. Pair with a duergar dig crew whose noise drew it.
- Patron hook: The Archkeepers want an object back from a sealed vault under the Endless Warrens. Crawlers have bred there for thirty years.
- City of Arches name: "Warreners": the duergar word, from the tunnels below the Lower Reaches.

### Far Wanderer
*Deathreach · Standard · Controller · Level 6*
**Core:** The dungeon grows its own surveyor to walk new halls first. It measures the party as one more feature.
*A figure three spaces tall and thin as a coat on a hook, its face smooth worked stone. It ties a knot in its cord at every junction.*

HP 60 · Armor Medium · Speed 6 (teleport 12, 1/round) · DC 13 · Stage 13+

**Actions**
- **Displacing touch** (1 Action, ×2, Reach 2) 1d10+6. Teleports the target up to 6 spaces, to a dead end or ledge.
- **Stretch the hall** (1 Action) A 12-space line costs double movement until its next turn.
- **Fold away** (Reaction, 1/encounter, when Bloodied) Teleports 12 spaces and stretches the hall behind it.

**In play.** Wants its survey finished. Moves whoever blocks the route, and leaves when Bloodied.
**Designer note.** Distance is the weapon: it splits the party and lengthens the walk back together. It need not be hostile. The party is on its map either way.
**Sources.** Monster Vault: Creature Codex, CR 3. Starlight gaze cut; face and origin rebuilt as Deathreach's own.

**Traits (d6)**
1. Its cords hold thousands of knots: halls that do not exist yet.
2. Its stone face matches the walls of the newest tunnel.
3. Its footprints are three strides apart.
4. It hums one low note that changes when it lies.
5. Fresh rock dust on its shoulders. It has come from somewhere new.
6. This one is lost, retying the same knot at every junction.

**Encounters (d4)**
1. It stands at a junction knotting a cord. Each knot opens a tunnel, and one leads home.
2. A one-minute corridor has taken an hour. Far ahead, a tall figure keeps walking.
3. Lizardfolk mages hold it in a salt ring and question it. It looks at the party instead.
4. A duergar crew offers it their foreman for a route. It weighs the party as a better trade.

**Lairs (d4)**
1. Alcoves of knotted cord, each a section of the dungeon. One bundle is labelled in Common.
2. A hall carved with millions of tally marks, still counting.
3. A chamber of raw stone, the walls still settling into shape.
4. A dead end with adventurers' gear stacked by owner, every strap knotted.

**Rumours (d4, Lore check)**
1. ⊤ It can't stretch what it can't see. Fight it around corners.
2. ⊤ It trades. A map of somewhere new buys a way out.
3. ⊥ It's one of the archmages who built Deathreach. Kill it and the halls stop growing.
4. ⊥ Its touch sends you to the bottom of the dungeon for good.

**Gig Fit**
- Verb: Find / Escort
- But+: Deathreach arches, when the map should change: after it, rooms are farther apart than drawn.
- Patron hook: The University wants a length of its cord. If the knots predict new halls, someone can sell routes before they open.
- City of Arches name: "Surveyors": duergar word, said with respect.

### Cave Fisher Angler
*Deathreach · Standard · Lurker · Level 4*
**Core:** The crawler owns corridors; the angler owns height. It hangs over a drop and fishes.
*A crab-legged insect the size of a pony, clamped to the ceiling, snout down. Its line is thin as hair and beaded like coins.*

HP 37 · Armor Medium · Speed 4 (climb 6) · DC 12 · Stage 13+

**Actions**
- **Filament** (1 Action, Range 8) DEX save or Restrained on the line. Any hit or flame cuts it. One line at a time.
- **Reel** (Free, start of its turn) Pulls its catch 3 spaces toward it, straight up if need be.
- **Claws** (1 Action, ×2) 1d8+4. Only within Reach 1.

**In play.** Lines the straggler, reels, claws. Fresh meat thrown under it buys passage. Climbs away when Bloodied.
**Designer note.** The question is when to cut the line: now, and they fall, or later, and they reach the claws. Under a low ceiling it is a slow crab with nothing to reel.
**Sources.** Monster Vault: 4e MM3, Lv 3 Lurker. Line ends on a hit or teleport; baited with meat (4e).

**Traits (d6)**
1. Gold flakes on its line. It fished near a vein.
2. Three old lines nearby, each ending in a skeleton.
3. One leg missing. It hangs crooked.
4. Fungus on its shell glows when it moves.
5. It clicks as it reels, slower as the load gets heavier.
6. A duergar helmet has been stuck on its snout for years.

**Encounters (d4)**
1. Halfway across a ledge, a sticky line brushes a hero's cheek.
2. A dwarf hangs ten spaces up the wall, alive, whispering that there are two.
3. The only water is a still pool with lines hanging into it from the dark.
4. Lizardfolk keep one tethered over their gate. The password is a hand sign nobody taught the party.

**Lairs (d4)**
1. A deep shaft curtained in old line, bones and coins drifting in the threads.
2. A sloped cavern. It hangs at the top, and every approach climbs toward it.
3. A floor of deep fungus. Falls land soft here, and it knows.
4. A dead duergar post, the crossbow still aimed at the ceiling.

**Rumours (d4, Lore check)**
1. ⊤ Fire cuts the line faster than steel.
2. ⊤ It holds one line at a time. If it has someone, walk under it.
3. ⊥ The line is poisoned. Touch it bare and you're sick for a week.
4. ⊥ Knock it off the ceiling and it breaks like an egg.

**Gig Fit**
- Verb: Find / Escort
- But+: Deathreach arches, in any room with height. Someone is already on the line.
- Patron hook: A Black Hand smuggler lost a key down a shaft. The key glitters, and so does the line.
- City of Arches name: "Line-hangers": duergar. "Mind the line-hangers" means look up.

### Grell
*Deathreach · Elite · Skirmisher · Level 5*
**Core:** The Abhorrent Vats grew a brain to hunt from above. It grabs, rises, and eats out of reach.
*A floating brain the size of a barrel, with a hooked beak beneath and a skirt of ten tentacles. It drifts without a sound.*

HP 80 · Armor None · Speed Fly 6 (hover) · DC 13 · Stage 13+

**Actions**
- **Tentacles** (1 Action, Reach 2) 2d6+6. Slowed. DEX save or Grappled and lifted.
- **Beak** (1 Action, held target) 1d10+6. Dazed on the target's next turn.
- **Rise** (Free, 1/round) Moves 4 spaces, up if it likes, with its catch. A hero who breaks free falls.

**In play.** Takes the smallest hero, rises, eats. Drops its catch when Bloodied. Bargains with proven hunters.
**Designer note.** Paralysis becomes a one-turn Daze. The threat is height: breaking free means a fall of 1d6 per 2 spaces. Under a low ceiling it is a brain with a beak.
**Sources.** Monster Vault: 4e MM, Lv 7 Elite Soldier. Slowing rake (4e); Ammann (grells). Paralysis rebuilt as Dazed.

**Traits (d6)**
1. Old duergar rings on its tentacle tips.
2. A crossbow bolt healed into its folds.
3. It tilts toward whoever spoke last.
4. Young and greedy. It grabs the biggest, not the weakest.
5. It trails mucus that hardens into glassy threads.
6. A cracked beak. It chews slowly, in pain.

**Encounters (d4)**
1. A laced boot drops from the dark and lands beside the party.
2. Three smiths hang cocooned and alive from a ceiling, swaying.
3. A wounded grell blocks the climb and bargains, in clicks, for a rival's death.
4. Grell and lizardfolk fight over a pool of primordial fluid. Both want the party, and both want them in the pool.

**Lairs (d4)**
1. A dome with every exit near the ceiling, the floor soft with old mucus.
2. A shaft hung with net-cocoons. Some move. Some are slit open from inside.
3. A ruined watchtower top, the one place it can't reach, with a starved survivor and a crossbow.
4. A Vats sinkhole where grell eggs float in warm fluid like boiled onions.

**Rumours (d4, Lore check)**
1. ⊤ Walk soft and don't talk. It hunts by sound.
2. ⊤ If it lifts you, wait for someone below before you break free.
3. ⊥ Its beak turns you to wood for an hour.
4. ⊥ Kill one and the whole colony hunts you.

**Gig Fit**
- Verb: Find / Stop
- But+: Deathreach arches, in a room more than 4 spaces high. One grell, one tall chamber, one victim already hanging.
- Patron hook: The Archkeepers lost an arrival to a grell before they could greet them. They want the arrival back and asked one question.
- City of Arches name: "Hooked brains" in the Lower Reaches. Delvers greet each other with "look up".

### Ochre Jelly
*Deathreach · Elite · Brute · Level 3*
**Core:** The Vats' cleaner. It eats whatever stops moving, and splits once when hurt.
*A yellow-brown slick of living acid, flat as a spill or heaped as tall as a man. It leaves stone polished and bones pitted.*

HP 62 · Armor None · Speed 4 (climb 4, through any gap) · Stage 9-10, 13+

**Actions**
- **Pseudopod** (1 Action, ×2) 1d8+3. Acid. Slowed.
- **Split** (Reaction, when first Bloodied) Two jellies, each with half its current HP and the same attacks. Rejoined, they add HP up to 62.
- **Engulf** (1 Action, Prone or Dying target) 2d6+4. Can't miss.

**In play.** Flows to the nearest warm body and stays on it. Never breaks off.
**Designer note.** Two acts: one slow jelly, then two that flank. Leaving a half alive is a real choice, because it rejoins. Use this one as the set piece, the Core Bestiary's for an ordinary drain.
**Sources.** Monster Vault: 4e MM, Lv 3 Elite Brute. Split once when first Bloodied, halves rejoin (4e). The Core Bestiary Ochre Jelly is the everyday drain version.

**Traits (d6)**
1. A sword hilt floats in it, the blade long gone.
2. It smells of vinegar and old pennies.
3. It steams in the cold of the deep.
4. Darker and slower than most. Heavy with something.
5. It pulses in time with a far-off forge hammer.
6. A small bright stone circles inside it, refusing to dissolve.

**Encounters (d4)**
1. The drain in the party's safe room starts to bubble yellow.
2. Duergar keep one penned in a channel to clean their tunnels. The gate is rusting through.
3. The sealed coffer the party came for is inside it, the lock nearly eaten.
4. It is on the wall, then the ceiling, then the path behind them.

**Lairs (d4)**
1. A polished floor ringed with bones pushed aside like crumbs.
2. A basin of water too clear, the jelly at the bottom like a stain.
3. The edge of the Vats, where new jellies rise from the primordial lake and crawl off.
4. A duergar armoury with every blade gone and the shield bosses eaten to lace.

**Rumours (d4, Lore check)**
1. ⊤ It splits once, when badly hurt. Kill both halves or they find each other.
2. ⊤ It can't eat stone or clay. A mud-packed door stops it.
3. ⊥ Every cut makes two. Never use a blade.
4. ⊥ It's blind and deaf. Stand still and it flows past.

**Gig Fit**
- Verb: Stop / Steal
- But+: Stages 9-10, seeping up into the Lost Cisterns, and Deathreach arches near the Vats.
- Patron hook: The Golden Council has posted a writ to reopen the cistern sluices before flood season. The jelly feeds at the gates.
- City of Arches name: "Mustard": cistern workers' word. "Mustard in the drain" means drop your tools and go.

### Duergar Dig Crew
*Deathreach · Minion / Standard · Brute · Levels 2 to 4*
**Core:** Deathreach's obsessed duergar dig toward halls the dungeon hasn't finished. Their noise draws everything else.
*Grey, bald, soot-black dwarves in leather aprons, hauling a steam drill on a sled and arguing over a map scratched on a shovel.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Dig-Hand | Min | Minion | None | 6 |
| Duergar Delver | 2 | 31 | None | 6 |
| Drill-Wright | 4 | 37 | Medium | 6 |

Stage 7-10, 13+.

**Actions**
*Dig-Hand*
- **Shovel** (1 Action) 1d6. A flat-bladed swing. Follows the GM Guide minion rules.
*Duergar Delver*
- **Pick** (1 Action, ×2) 1d6.
- **Swell** (Free, 1/encounter) Grows Large until its next turn ends: Reach 2, +2 damage.
*Drill-Wright*
- **Bore** (2 Actions, Line 4) 2d8+5. DEX save for half. The wall at the end of the line opens.
- **Bring it down** (1 Action, 1/encounter, Range 8) 2-space radius of ceiling falls: DEX save DC 12 or Prone and Restrained under rubble.
- **Wrench** (1 Action) 1d8+4.

**In play.** Want the next shaft dug and the party out of the way. Delvers hold, the Drill-Wright brings the roof down. Leave when the drill breaks.
**Designer note.** A crew, not a monster: they will bargain, and their drill is a terrain weapon. Every fight near them is loud enough to bring a crawler.
**Sources.** Adopted from the setting: Deathreach's duergar forge-diggers (Chapter 9). Swell after the duergar's enlarge.

**Traits (d6)**
1. Their map is scratched on a shovel blade, and keeps changing.
2. The foreman counts every strike of the pick aloud.
3. Ear-plugs of wax. They shout everything.
4. A crawler fang on a cord, worn for luck.
5. One is a surface dwarf, and the others never let him forget it.
6. Their drill has a name, and they pray to it.

**Encounters (d4)**
1. A crew needs the party's route. Their drill will open a new one, for a price.
2. A drill breaks through into the party's corridor, and the crew is as surprised as they are.
3. A crew is pinned by crawlers their noise drew. Their foreman is already held.
4. A crew has dug into a sealed vault and wants a partner who can read the door.

**Lairs (d4)**
1. A forge-camp of tents around a steaming drill, three shafts started, none finished.
2. A fresh-cut hall, still warm from the drill, with no one in it.
3. A collapsed shaft with tools sticking out of the rubble.
4. A shrine where broken drill bits are kept like relics.

**Rumours (d4, Lore check)**
1. ⊤ Their noise draws crawlers. Never fight near a working drill.
2. ⊤ They'll sell you a route if you'll haul for a shift.
3. ⊥ Duergar turn invisible whenever they like. You never see the whole crew.
4. ⊥ They dig for gold. Offer gold and they stop.

**Gig Fit**
- Verb: Escort / Find
- But+: Faction result on Deathreach arches, and Stages 7-10 for a crew dug up under the city. Pairs with the Carrion Crawler.
- Patron hook: A Black Hand fixer wants a duergar drill brought to the city. The crew wants it back.
- City of Arches name: "Diggers": Lower Reaches word, and a warning to stay out of new tunnels.

### Gibbering Mouther
*Deathreach · Standard · Controller · Level 4*
**Core:** The Abhorrent Vats spawn it from primordial fluid. It is mouths, eyes, and the noise of every adventurer it ate.
*A heap of flesh that flows like spilled porridge, studded with eyes and mouths, all of them talking.*

HP 52 · Armor None · Speed 3 (ground within 2 turns to mush) · DC 12 · Stage 13+

**Actions**
- **Bites** (1 Action, ×2) 1d6+5. A Prone target is bitten with advantage.
- **Gibbering** (Passive, Reach 4) WIL save DC 12 or the GM moves them up to 3 spaces; the hero keeps all their actions.
- **Blinding spittle** (1 Action, 1/encounter, Range 6) 2-space radius: DEX save or Blind until their next turn ends.

**In play.** Oozes at the nearest noise and keeps babbling. Never breaks off.
**Designer note.** The babble steers feet, never hands, so heroes walk into the mush while still swinging. Kill it at range or fight with your ears stopped.
**Sources.** Adopted from the setting: gibbering mouthers spawned in the Abhorrent Vats (Chapter 9) and loose on the Dreamcaster. Confusion rebuilt as GM-chosen movement.

**Traits (d6)**
1. One mouth speaks in a hero's voice.
2. An adventurer's ring embedded in its flesh.
3. It sings a drinking song in seven voices, badly.
4. Its eyes all look the same way, except one.
5. It smells of the Vats: brine and something sweet.
6. It has eaten a duergar recently and knows their swear-words.

**Encounters (d4)**
1. A voice calls for help from a side passage. It is a mouth.
2. A mouther blocks the only route, singing to itself.
3. Lizardfolk mages are herding one toward the party.
4. One has been trapped in a pit for years and has learned to bargain.

**Lairs (d4)**
1. The shore of the Vats, where new mouthers crawl out of the fluid.
2. A cave floor turned to soft mush, armour half sunk in it.
3. A pit with a ladder that ends just above the surface.
4. A chamber of echoes where you can't tell which voices are real.

**Rumours (d4, Lore check)**
1. ⊤ Stop your ears with wax and the babble can't move you.
2. ⊤ It's slow. Never let it reach you on soft ground.
3. ⊥ The voices are the souls it ate. Answer and you join them.
4. ⊥ It can't see in the dark.

**Gig Fit**
- Verb: Find / Stop
- But+: Monster result on Deathreach arches, near the Vats. Good with a pit or a ledge for the babble.
- Patron hook: The University wants a live sample from the Vats. Mouthers are what crawls out.
- City of Arches name: "Chatterers": duergar don't name them, only cover their ears.

### Lizardfolk of the Dungeon
*Deathreach · Standard · Controller · Levels 2 to 5*
**Core:** Lizardfolk serve Deathreach itself. Every adventurer who dies in it feeds the god it is growing.
*Scaled, patient, painted with chalk maps of the dungeon, speaking to the walls as if the walls answer. They do.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Lizardfolk Warden | 2 | 31 | None | 6 |
| Lizardfolk Mage | 5 | 49 | None | 6 |

Stage 13+.

**Actions**
*Lizardfolk Warden*
- **Spear** (1 Action, ×2, Reach 2) 1d6.
- **Hold breath** (Passive) Fights underwater as on land.
*Lizardfolk Mage*
- **Shift the wall** (1 Action, Range 8) A wall section moves 2 spaces: block a passage, or shove anyone in the way 2.
- **Stone tongue** (1 Action, Range 12) 2d8+6. The floor bites. STR save DC 13 or Restrained until their next turn ends.
- **Feed the Hunger** (Passive) When a creature drops to 0 within 12, the mage heals 2d6.

**In play.** Close the room around the party, then wear them down. The dungeon is on their side. Bloodied mages vanish through a wall.
**Designer note.** Their magic is the dungeon's: walls move, floors bite. The fight is about exits, and the longer it runs the more the dungeon gains.
**Sources.** Adopted from the setting: lizardfolk mages serving Deathreach, and Voor the Hunger (Chapter 9 adventure seed).

**Traits (d6)**
1. Chalk maps on their scales, redrawn every morning as the halls change.
2. One carries a clay faceless idol.
3. They speak to the walls, and wait for a reply.
4. An adventurer's badge sewn into a robe.
5. A tail-ring of carved bone for every death they witnessed.
6. The youngest still flinches when the walls move.

**Encounters (d4)**
1. Lizardfolk mages hold a far wanderer in a salt ring and question it.
2. A mage offers to show the party the way out, for a name.
3. The room the party fled into closes behind them. A mage is waiting.
4. Wardens escort an adventurer who doesn't know where they're being taken.

**Lairs (d4)**
1. A shrine where the walls breathe, and a faceless statue stands in a pool.
2. A chamber of chalk maps, every one of the dungeon a day from now.
3. A flooded hall where they sleep underwater.
4. A hall of the dead, adventurers laid out in rows, feeding something below.

**Rumours (d4, Lore check)**
1. ⊤ Every death in Deathreach feeds something. They count them.
2. ⊤ They can move the walls. Note every exit.
3. ⊥ They are prisoners of the dungeon and want rescue.
4. ⊥ Kill their mage and the walls stop moving.

**Gig Fit**
- Verb: Stop / Find
- But+: Faction result on Deathreach arches. Pairs with the Far Wanderer and the Gibbering Mouther.
- Patron hook: The Archkeepers have dreams of a faceless god rising. The lizardfolk know its name.
- City of Arches name: "Wall-talkers": delvers' word for anyone a little too fond of the dark.

---
## Korax

### Meenlock Stalker
*Korax · Standard · Controller · Level 3*
**Core:** Korax's long twilight bred something that hates light. It takes victims to the burrow and remakes them.
*A child-sized thing, insect-headed and moss-furred, with claws like split reeds. It waits at the edge of the torchlight and whispers that you are alone.*

HP 30 · Armor None · Speed 6 · DC 12 · Stage 13+

**Actions**
- **Claws** (1 Action, ×2) 1d6+4. STR save or Dazed next turn; already Dazed, Slowed. Two adjacent meenlocks drag a Dazed hero 3 spaces.
- **Horrid link** (Free, 1/round, Range 10) Links one hero until its next turn: Frightened, 1d6+2 psychic whenever it's hurt. Bright light breaks the link.
- **Shadow step** (1 Action) Teleports 8 spaces, dark to dark, never into bright light. Again only after it is hit or a round passes.

**In play.** Links one hero, Dazes them, drags them toward the dark. Breaks off in bright light, then trails the party for days.
**Designer note.** Hurting it hurts your friend, so the party chooses whether to swing. Light is the answer: keep torches lit and a horror hunt becomes a fair fight. A hero kept in the burrow two days turns; burning the marker frees them.
**Sources.** Monster Vault: 4e MM3, Lv 9 Controller. Dimension Step, Horrid Link, corruption (4e). Paralysis rebuilt as Dazed.

**Traits (d6)**
1. Red clay in its fur. Fresh up from the Red Deeps.
2. It whispers in a hero's mother's voice. Only that hero hears.
3. It carries a stone knife it never uses.
4. Bigger and older. The others defer to it.
5. Its eyes catch the red star: two crimson pinpricks.
6. It hums a Kor lullaby with one wrong note.

**Encounters (d4)**
1. The party's lights go out one by one, snuffed from the dark.
2. A Kor hunter's brother came back at dawn, smiling, and won't stand in light.
3. Two meenlocks drag a shouting orc of Veles toward a burrow.
4. Every hero dreams the same voice: your friends will leave you.

**Lairs (d4)**
1. Child-sized burrows in red clay. Deep inside, someone is slowly growing fur.
2. A mammoth's ribcage packed with moss and stolen blankets.
3. A half-flooded ruin of the Sundered Vaults, tiny handprints on every wall.
4. A hollow where every lantern ever brought has been smashed and set in a ring.

**Rumours (d4, Lore check)**
1. ⊤ Keep a fire burning. They can't step into bright light.
2. ⊤ One alone only whispers. It takes two to drag you off.
3. ⊥ If one touches you, you're already turning, and nothing brings you back.
4. ⊥ They fear iron. Wear a horseshoe.

**Gig Fit**
- Verb: Find / Escort
- But+: Korax arches, at Dusk or Dark results: the light is going and they were waiting.
- Patron hook: A Temple novice came back from Korax silent and furred at the wrists. The priest wants the burrow found first.
- City of Arches name: "Lamp-thieves": Arch of Kings porters' name, after arrivals who begged for oil.

### Dark Creeper
*Korax · Standard · Skirmisher · Level 2*
**Core:** The Red Deeps' thieves. They put out your light, take what they can, and sell it in Kor.
*A small figure in layers of filthy black rag, nothing showing but grey fingers and a stolen blade. It smells of smoke and cave water.*

HP 24 · Armor None · Speed 6 · DC 11 · Stage 7-8, 13+

**Actions**
- **Stolen blade** (1 Action) 1d8+3. Advantage if unseen. Swap damage for an unsecured item, then move 4 without provoking.
- **Snuff** (1 Action, 1/encounter) Every flame within 6 goes out. Heroes without darkvision are Blind until they relight one. Creepers see in the dark.
- **Flare** (Passive, on death) Burns away in a flash: DEX save or Blind a turn within 2. Its loot drops.

**In play.** Wants loot, not blood. Darkness, steal, gone. Breaks off with anything worth fencing, or when Bloodied.
**Designer note.** Success is measured in what the party still owns at the end. Run three to five, fast and annoying, with one bigger creeper leading.
**Sources.** Monster Vault: 4e MM, Lv 4 Skirmisher. Dark Step and Killing Dark (4e).

**Traits (d6)**
1. Rags stitched from stolen cloaks. One bears a Council badge.
2. It giggles when it steals and can't stop.
3. Three left boots, one tied over the other two.
4. Its blade is a broken arch key, sharpened.
5. A candle stub behind its ear, lit only to talk.
6. A bad cough and an almost friendly manner.

**Encounters (d4)**
1. Every light goes out at once. When they relight, a pack is gone.
2. A one-lamp market selling stolen goods, including the party's.
3. A Kor hunter's totem is missing, and he thinks the party took it.
4. A creeper is working the crowd at the Arena of Blood.

**Lairs (d4)**
1. A cave hung with stolen goods: belts, a saddle, a Kor war-drum, a stranger's portrait.
2. A cold pit holding a half-burned map of the Sundered Vaults.
3. A crawlspace behind Adel's Curio Shop. Adel knows, and takes a cut.
4. A burrow around one bright lamp, guarded like a shrine.

**Rumours (d4, Lore check)**
1. ⊤ They burn up in a flash when they die. Close your eyes.
2. ⊤ Offer lamp oil and they'll tell you anything about the Red Deeps.
3. ⊥ Their blades are poisoned. One cut costs an arm.
4. ⊥ Bring a torch and they won't come near. They fear fire.

**Gig Fit**
- Verb: Steal / Find
- But+: Korax arches, and Stages 7-8 for one that came through. The reason the key or map goes missing mid-episode.
- Patron hook: A Black Hand fixer wants to buy the creepers' Red Deeps route. They would rather steal his purse.
- City of Arches name: "Rag-pickers": also an insult for anyone who fences drain-finds.

### Neogi Hatchling Swarm
*Korax · Standard · Controller · Level 4*
**Core:** Neogi slavers breed their young in Korax's dead giants. The hatchlings eat, and herd prey for their parents.
*A tide of spider-legged eels, each the size of a hand, climbing over one another and shouting orders nobody follows.*

HP 40 · Armor None · Speed 6 (climb 6) · DC 12 · Stage 13+

**Actions**
- **Bites** (1 Action) 2d6+5. One creature in or beside its space. Half damage once Bloodied.
- **Swarm** (Passive) Its space is Difficult Terrain; starting a turn in or beside it costs 1d6. Single targets half, AoE double.
- **Mind leash** (1 Action, 1/round) WIL save or the swarm chooses where the target moves next turn. Never their actions.

**In play.** Pours over the nearest body. With an adult watching, it herds prey instead. Scatters when the adult falls.
**Designer note.** The leash steers feet, never hands. It walks heroes into the pit while they keep swinging. AoE is the answer.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 1. Swarm aura (4e MM2 Neogi Spawn Swarm). Death scream cut.

**Traits (d6)**
1. An adult's dye marks on the swarm. It belongs to someone.
2. A few have learned one word of Common: 'mine'.
3. Half the swarm is dead, dragged by the other half.
4. They fight each other whenever no hero is closest.
5. Tiny collars of braided hair, the colour of a hero's.
6. A slime trail that hardens into a glassy path.

**Encounters (d4)**
1. A clutch hatches in the only shelter from the storm, a dead beast's carcass.
2. An adult neogi rides a captured hulk, its hatchlings herding prey ahead.
3. Kor hunters walled a nest in. They want it burned. The wall is cracking.
4. A leashed orc of Veles stumbles at the party, apologising with every swing.

**Lairs (d4)**
1. Egg sacs in a webbed cave. Several are empty and still warm.
2. An old slave-pen with collars on the walls, one sized for a dragon.
3. A slick fissure scratched with tiny marks like a ledger.
4. A shrine of stolen weapons, fed with bones.

**Rumours (d4, Lore check)**
1. ⊤ Fire or oil. A blade does nothing against the tide.
2. ⊤ They turn your feet, not your hands. Keep fighting while you walk.
3. ⊥ They lay eggs in your ears. Stuff them with wax.
4. ⊥ Kill the biggest and the rest scatter.

**Gig Fit**
- Verb: Stop / Bury
- But+: Korax arches, in caves and dead forests. Add a hazard for the leash to walk heroes into.
- Patron hook: The University has one hatchling in a jar and wants a live clutch. The Archkeepers call this a terrible idea.
- City of Arches name: "Leash-eels": porters' name for the first crate that came through, before the Knights burned it.

---
## Eruwynd

### Dream Squire
*Eruwynd · Standard · Controller · Level 3*
**Core:** Celevis's sentinels fell asleep at their posts a thousand years ago and kept guarding in the dream.
*An elf in tarnished half-plate, eyes open and unfocused, moss in the seams of its armour. It bows before every fight to a knight who is not there.*

HP 27 · Armor Medium · Speed 6 · DC 12 · Stage 13+

**Actions**
- **Ceremonial blade** (1 Action) 1d8+6. Advantage against a Slowed target.
- **Drowse** (Passive, Reach 3) Heroes starting a turn near it: WIL save or Slowed. Already Slowed, Dazed instead.
- **Stand for the knight** (Reaction, 1/round) Takes a hit meant for an ally within 2. The attacker: WIL save or Prone with sleep.

**In play.** Holds its post. Never breaks off; dropped, it wakes at dawn unless someone wakes its dreamer (Influence DC 12, beside them).
**Designer note.** The sleep ratchets: one failed save Slows, a second Dazes, never more. Its weakness is the dreamer. Put the sleeping knight in the room.
**Sources.** Monster Vault: Creature Codex, CR 2. Rebuilt as Celevis's sentinel elves (canon).

**Traits (d6)**
1. Its eyes move under the lids, reading.
2. It murmurs one name, Kalasar, over and over.
3. A dried flower in its gauntlet, still faintly sweet.
4. The Celevis crest on its armour, scratched out and redrawn by hand.
5. Very young. The armour is too big.
6. It weeps silently the whole fight.

**Encounters (d4)**
1. Two squires at a door bow to the party and draw. The door hums with sleep.
2. A squire walks at night under a cloud of moths. Bystanders it passes nod off; heroes only feel Drowse.
3. Bluesteel hunters have caught one as a trophy. The crew is nodding off.
4. The party wakes with their gear laid out neatly. A squire guards them and won't say who ordered it.

**Lairs (d4)**
1. A guardhouse with beds made, a cup on the table, a sentinel asleep at every post.
2. Trees grown into a hall, a figure in white asleep on a stone seat at the end.
3. A root-wrapped vault door, a groove worn in the moss by footsteps to it and back.
4. An abandoned hunting camp, every hunter asleep in their bedroll.

**Rumours (d4, Lore check)**
1. ⊤ They serve a dream. Wake the dreamer and they go out like candles.
2. ⊤ The sleep comes slow. Keep moving and keep talking.
3. ⊥ Fall asleep near one and you never wake.
4. ⊥ They can't strike anyone who bows to them.

**Gig Fit**
- Verb: Steal / Prove
- But+: Eruwynd arches near Celevis, when the goal is guarded by someone else's dream.
- Patron hook: A Council member with a private key wants the Immortal's Blade, or proof it exists. The squires have held that door a thousand years.
- City of Arches name: "Sleepwalkers": after an arrival who stood guard at the Arch of Kings for three days, still dreaming.

### Red Hag
*Eruwynd · Standard · Controller · Level 6*
**Core:** The Endless Forest feeds on hunters' blood, and she collects it. Once she has yours, she can call it.
*A tall, stooped woman with skin like rust-red bark and hair matted with someone else's blood. She smells of iron and crushed berries.*

HP 75 · Armor None · Speed 6 (climb 6) · DC 13 · Stage 13+

**Actions**
- **Claws** (1 Action, ×2) 1d8+7. She keeps the target's blood under her nails for the encounter.
- **Blood calls** (1 Action, Range 12) A creature whose blood she has: STR save or pulled 4 spaces to her and Slowed.
- **Bramble ring** (2 Actions, 1/encounter) Within 3 of her, thorns: 1d6+2 per space moved.

**In play.** Bargains first. Then claws one hero and reels them in through the thorns. Bloodied with no blood to call, she vanishes.
**Designer note.** Every hit sets up the next pull, so range and cover are the answer. Deadly in a thicket, weak in the open.
**Sources.** Monster Vault: Grim Hollow: Monster Grimoire, CR 1/2. Scaled up as a mid-level controller; Drink deep cut.

**Traits (d6)**
1. A necklace of finger bones, each tied with a different thread.
2. She laughs like a crow, and crows answer.
3. A small, well-loved cat that hisses at the party.
4. One hand is carved wood, cut with runes.
5. A soft, kind voice, like a grandmother's.
6. A Bluesteel pilot's coat, too big, still bloodstained.

**Encounters (d4)**
1. A red-skinned woman tends a garden of thorny roses and offers tea.
2. A Bluesteel sister bleeds in a thicket, and something red moves toward her.
3. Dreadroot hobgoblin scouts pay her for passage, in prisoners.
4. A trail of blood droplets that never dry leads deeper in.

**Lairs (d4)**
1. A hollow tree, its door painted with small red handprints.
2. A pond of thick dark water around a stone table caked in wax and blood.
3. Bramble tunnels taller than a man, bones hanging from the thorns.
4. A fallen Celevis chapel, the altar a butcher's block, fresh flowers beside it.

**Rumours (d4, Lore check)**
1. ⊤ Once she draws your blood she can call it. Stay out of reach.
2. ⊤ Her briars are only plants. Fire clears them.
3. ⊥ She can't cross running water.
4. ⊥ Give her your true name and she'll let you go.

**Gig Fit**
- Verb: Stop / Escort
- But+: Eruwynd forest arches. Pair with a wounded NPC: she can call blood, and they are bleeding.
- Patron hook: A Bluesteel sister wants the hag's head for her trophy wall. The University wants her blood-craft written down first.
- City of Arches name: "Mother Rust": said quietly, and never while bleeding.

### Phase Spider
*Eruwynd · Standard · Skirmisher · Level 5*
**Core:** Where Celevis wore the world thin, a spider learned to step through it. It hunts from the other side.
*A spider the size of a pony, shimmering blue-violet like oil on water. It flickers as it walks, and the air where it was smells of ozone.*

HP 49 · Armor None · Speed 6 (climb 6) · DC 13 · Stage 13+

**Actions**
- **Bite** (1 Action) 2d8+6. STR save or Poisoned until healed.
- **Phase** (Free, 1/round) Vanishes; reappears within 8 at the start of its next turn, its first attack advantaged.
- **Ethereal repulsion** (Reaction, enemy moves adjacent) WIL save or that enemy is teleported 4 spaces.

**In play.** Blinks in on the biggest hero, bites, blinks away. Bloodied, it simply stops coming back.
**Designer note.** Its trick is position: behind the backline, then gone, and whoever charges it lands somewhere else. Strong in open forest, predictable in a corridor.
**Sources.** Monster Vault: 4e MM2, Lv 8 Skirmisher. Ethereal Repulsion (4e); targets the large (Ammann). Paralysis rebuilt as Poisoned.

**Traits (d6)**
1. Its legs spark when it phases.
2. It leaves no tracks, but its webs glow faintly blue.
3. A missing leg. It phases more to hide the limp.
4. It hums at a pitch that sends small animals running.
5. A hero's face already reflected in its eyes.
6. Silver web from somewhere else caught on its fangs.

**Encounters (d4)**
1. A Bluesteel hunter hangs in a glowing web, barely breathing. No spider in sight.
2. The guide vanishes mid-sentence. A scream eight spaces behind.
3. A battered hobgoblin patrol will trade a map for help with what hunts them from the canopy.
4. An egg sac flickering in and out of the world, and its mother nearby.

**Lairs (d4)**
1. Trees hung with blue webs and perfectly preserved birds.
2. Pillars of a Celevis ruin strung with web, the air shimmering thin.
3. A fallen trunk, hollow, with one strand leading nowhere.
4. A creek whose water flickers in and out of sight.

**Rumours (d4, Lore check)**
1. ⊤ It always comes back within eight strides. Stand back to back.
2. ⊤ Charge it and you'll land somewhere else. Make it come to you.
3. ⊥ Its venom drives you mad. You'll see the grey world forever.
4. ⊥ It can only phase when no one is looking at it.

**Gig Fit**
- Verb: Find / Escort
- But+: Eruwynd and Vynan arches, when the party is spread out or guarding someone fragile.
- Patron hook: A Kartan mage thinks phase silk can steady a failing arch key. She wants an egg sac, unbroken.
- City of Arches name: "Blinkers": the Lower Reaches word for anything that appears and disappears.

---
## Threska/Arkus

### Necrophage Ghast
*Threska/Arkus · Standard · Controller · Level 7*
**Core:** Threska's council wizards rotted into ghasts that still read. It hungers for magic first, meat second.
*A ghast in a wizard's robes gone stiff with blood, ink under the grave-dirt on its fingers. It reads on the ceiling by the light of its own eyes.*

HP 72 · Armor Medium · Speed 6 (climb 6) · DC 13 · Stage 4, 13+

**Actions**
- **Claws** (1 Action, ×2) 1d4+9. STR save or Dazed next turn. From the ceiling: Arcane blast instead, Range 12, 2d6+4 force.
- **Command** (1 Action, 1/round, Range 8) WIL save or it chooses where the target moves next turn. Never their actions.
- **Stench** (Passive, Reach 6) Heroes starting a turn within 6: STR save or disadvantage on saves against it this encounter.

**In play.** Talks before it fights; its ghouls go first. Goes for spellcasters. Bloodied, it climbs out of reach to bargain later.
**Designer note.** It can't spread the hunger, which is why mages trade with it. The stench decides the fight: close in fast or back off and shoot. Play it as a broker first.
**Sources.** Monster Vault: Tales of the Valiant Monster Vault, CR 4 (spellcaster ghast, cannot spread ghoul hunger). Ammann (ghouls and ghasts).

**Traits (d6)**
1. Ink, not blood, under its claws.
2. Its old University ring, turned while it thinks.
3. A dry lecturer's voice between bites.
4. One hand in clean linen, burned on a ward it is studying.
5. A bookmark in every book. It knows where each one is.
6. Two ghouls carry its lamp and its stool.

**Encounters (d4)**
1. The book the party needs is in its larder. It will trade it for a spell.
2. A Kartan mage meets it to buy a page, with too few guards against too many ghouls.
3. Ghouls carry a living scholar upstairs. It wants what she knows, not the body.
4. It reads a dead god's name off a ceiling. Each word cracks the floor.

**Lairs (d4)**
1. A lich-tower library, books shelved by how good they tasted.
2. A tomb fitted as a study, a guest chair, and a ledger of every mage who traded.
3. A temple vault with every glyph scraped off and copied into skin-bound notebooks.
4. A buried scriptorium where ghouls sit at the desks, copying slowly.

**Rumours (d4, Lore check)**
1. ⊤ It can't give you the hunger. That's why mages deal with it.
2. ⊤ Stay out of its stink, or every spell it throws lands.
3. ⊥ One scratch and you're stiff until dawn while it eats.
4. ⊥ Throw it a spellbook and it'll let you pass.

**Gig Fit**
- Verb: Steal / Find
- But+: Stage 4 and Threska or Arkus arches, in a library or archive with ghouls as the mob.
- Patron hook: The University buys pages from one through a cut-out. What is the ghast buying in return?
- City of Arches name: "The Reader": grave diggers name the one on the Cliffs like a landlord.

### Iron Cobra
*Threska/Arkus · Standard · Skirmisher · Level 4*
**Core:** The Nameless King's temples were built with guards that outlived the god. It strikes, recoils, and obeys one word.
*A serpent of jointed black iron with green venom showing through a glass panel in its neck. It ticks while it waits.*

HP 37 · Armor Medium · Speed 8 · DC 12 · Stage 13+

**Actions**
- **Bite** (1 Action) 1d10+6. Dose (3; endless in its room): STR save or Poisoned, Slowed or Dazed, its pick, one turn. Then moves 4.
- **Ward-word** (Passive) Speak the word from the temple walls (Lore DC 14) to halt it a round, once.
- **Construct** (Passive) Immune to Poisoned, Frightened and Charmed. Never chases past its temple door.

**In play.** Strikes whoever crossed the threshold last, then slithers back. Never breaks off inside the temple.
**Designer note.** Three doses outside its room, so the heroes can count. Inside, the limit lifts. The word on the walls rewards heroes who read the room.
**Sources.** Monster Vault: 4e MM, Lv 6 Skirmisher. Guard Area and Slithering Shift (4e). Paralysis dose rebuilt as Dazed.

**Traits (d6)**
1. A cracked venom panel, leaking a thin green trail.
2. A priest's name etched small on its head.
3. It ticks like a clock while it waits.
4. A broken tail that drags a groove in the sand.
5. Ruby eyes. Someone has pried one out.
6. Its iron is worn smooth from one patrol, centuries long.

**Encounters (d4)**
1. A dead thrall on a threshold, two tiny holes in his ankle. Something clicks inside.
2. Clan scavengers are rewiring a captured cobra. They need someone to read the word.
3. Two cobras patrol a courtyard from opposite ends and will meet in the middle.
4. A smuggled cobra loose in the city, after someone said the wrong word.

**Lairs (d4)**
1. A shrine carved with the word three times, each one different.
2. A sand-choked hall, a figure-eight worn into the floor.
3. A broken reliquary, the relic long gone, still guarded.
4. A dead warlock's workshop of half-built cobras, and one finished.

**Rumours (d4, Lore check)**
1. ⊤ Find the word on the walls and you can stop it cold.
2. ⊤ Make it waste three bites and the rest is iron and teeth.
3. ⊥ Splash it with water and it rusts solid.
4. ⊥ Break the god's statue and its guards fall apart.

**Gig Fit**
- Verb: Steal / Find
- But+: Arkus and Threska arches, inside temples and tombs.
- Patron hook: The University wants a working cobra and its word. The Black Hand wants the venom reservoir intact.
- City of Arches name: "Temple-snakes": Arkus arrivals flinch at any ticking clock.

### Hitched Scarecrow
*Threska/Arkus · Standard · Controller · Level 3*
**Core:** Arkus clans tied watchmen to their fields against the dead. The clans are gone; the watchmen still keep their last order.
*A straw man tied to a ward-pole by a rope of braided hair, its sackcloth face painted with one wide eye.*

HP 41 · Armor None · Speed 6 (tethered) · DC 12 · Stage 13+

**Actions**
- **Terrifying glare** (1 Action, Range 6) WIL save or Frightened until the end of the scarecrow's next turn. Already Frightened, Dazed.
- **Claws** (1 Action, ×2) 1d6+4. Advantage against a Frightened target.
- **Hitched** (Passive) Tethered within 6 of its pole; cutting the rope frees it, doubling glare range. Fire does it double damage.

**In play.** Glares at anyone in its circle, claws whoever reaches the pole. Never breaks off and never forgets a face.
**Designer note.** The rope is the encounter: fight at the edge of the circle, or cut it and set it loose. Fire does double damage. Put what the heroes want just inside the circle.
**Sources.** Monster Vault: Ultimate Bestiary: The Dreaded Accursed, CR 6. Bond with its maker (4e MM3 Scarecrow). Paralysis rebuilt as Dazed.

**Traits (d6)**
1. The rope is braided from the hair of every clan member who planted the field.
2. It turns its head to follow, with a slow creak of straw.
3. Crows won't land within 6 spaces of it.
4. Its eye was repainted recently. Someone still tends it.
5. A child's doll stuffed in its chest.
6. A dead warlock's robe, too fine for straw.

**Encounters (d4)**
1. The only well for a day stands inside a scarecrow's circle.
2. Three watch a field. A fourth pole stands empty, its rope cut.
3. A child cut one loose on a dare. It is walking toward where the clan hides.
4. A wall lined with watchmen against the dead. One faces inward.

**Lairs (d4)**
1. A dead field, one pole, a frayed rope at its foot, and no scarecrow.
2. A clan graveyard ringed by watchmen, each on a different coloured rope.
3. A barn of half-stuffed sacks. One painted eye watches the door.
4. A tower stair lined with watchmen tied to the banisters, eyes fresh.

**Rumours (d4, Lore check)**
1. ⊤ It can't leave its pole. Six paces out it's just a voice in your head.
2. ⊤ It's straw. Fire takes it twice as fast.
3. ⊥ Meet its eye and you're frozen till sunrise.
4. ⊥ They only move at night.

**Gig Fit**
- Verb: Steal / Bury
- But+: Arkus and Threska arches, in fields and at clan sites.
- Patron hook: The Archkeepers want to bring an Arkus clan to the city. The clan won't leave its dead, and watchmen guard them.
- City of Arches name: "Watchmen": Arkus arrivals won't walk past a scarecrow in a city garden.

### Grimlocks of Teveron
*Threska/Arkus · Standard · Brute · Levels 1 to 6*
**Core:** Generations inside Teveron, the Shadowed Mountain, have never seen the sun. Their ogre mages chant to keep their gods asleep.
*Grey, eyeless, heavy-browed people with stone clubs, moving through the dark as if it were noon.*

| Member | Lvl | HP | Armor | Speed |
|---|---|---|---|---|
| Grimlock | 1 | 21 | None | 6 |
| Grimlock Ogre | 4 | 52 | None | 6 |
| Ogre Mage Chanter | 6 | 60 | Medium | 6 |

Stage 13+.

**Actions**
*All members*
- **Blind** (Passive) Grimlocks can't be Blinded and ignore darkness and illusions.
*Grimlock*
- **Stone club** (1 Action) 2d6. Advantage against a creature carrying light.
*Grimlock Ogre*
- **Club** (1 Action, ×2) 1d8+4.
- **Carry off** (1 Action, Prone target) STR save DC 12 or Grappled and carried its full Speed.
*Ogre Mage Chanter*
- **Chant** (Passive) While it chants, the god below sleeps. If it dies, start the Waking clock (4).
- **Darkness** (1 Action, 1/encounter, Range 8) 3-space radius: Blind inside, except grimlocks.
- **Cold breath** (1 Action, cone 3) 3d6+5. DEX save DC 13 for half.

**In play.** Put out the light, then club whoever carried it. The ogre takes the fallen. The chanter never stops chanting.
**Designer note.** Darkness is home ground. The chanter is the trap: killing it wins the fight and wakes the mountain. Advance the Waking clock one step each round after. At 4 the floor splits: the party flees, or something old surfaces.
**Sources.** Adopted from the setting: grimlocks, grimlock ogres and ogre mages of Teveron (Chapter 9), the Abhuman Effigy (campaign arcs).

**Traits (d6)**
1. Skin grey as cave clay, ridged where eyes should be.
2. Ears like a bat's, twitching at every breath.
3. Bone charms shaped like a sleeping beast.
4. They hum the chanter's song under their breath.
5. A torch, unlit, carried as a trophy.
6. The oldest has a face painted on its brow: eyes.

**Encounters (d4)**
1. The party's light goes out. Something sniffs at the edge of hearing.
2. Grimlocks drag a captive toward a giant effigy. The captive is still singing.
3. An ogre mage asks the party, politely, to be quiet. Something below is almost awake.
4. A grimlock hunting party follows the smell of the party's food.

**Lairs (d4)**
1. A cavern around a fallen god's effigy, hundreds kneeling.
2. A hall where the chanting never stops, and the floor trembles.
3. Dry tunnels under a marsh skull, painted with pictographs of the sun.
4. A larder of hung meat, some of it still in boots.

**Rumours (d4, Lore check)**
1. ⊤ They hunt by sound. Walk soft and they lose you.
2. ⊤ Kill the chanter and the mountain wakes.
3. ⊥ Bright light burns them like sunlight burns the dead.
4. ⊥ They're harmless cave folk who only want to be left alone.

**Gig Fit**
- Verb: Find / Stop
- But+: Monster result on Threska arches, and from the Revlend Marshes as a Neglect payoff.
- Patron hook: A Kartan mage wants the chant written down. The ogre mages kill anyone who records it.
- City of Arches name: "Moles": a Lower Reaches insult for anyone who never sees daylight.

---
## Ice World

### Yeti Howler
*Ice World · Standard · Controller · Level 5*
**Core:** The bear lodges' rival for every hunt. It howls the snow down, then carries off whoever fell.
*A white-furred ape twice a man's height, blue-black face, breath freezing in the air. When its howl stops, the slope above has started to slide.*

HP 64 · Armor None · Speed 8 (ignores snow) · DC 13 · Stage 13+

**Actions**
- **Claws** (1 Action, ×2) 1d10+5. Cold. A Frightened, Prone or Dazed target: STR save or carried off at full Speed.
- **Chilling howl** (1 Action, 1/round) Heroes within 8 who hear it: WIL save or Frightened and Slowed until their next turn ends.
- **Bring down the slope** (2 Actions, 1/encounter, on a slope) 2d6+4. 3 by 10 line downhill: DEX save or pushed 4 and Restrained in snow until dug out.

**In play.** Wants a meal, not a fight. Hunts the slow and the stragglers from hiding, then leaves with one.
**Designer note.** On flat ice, a strong beast. Under a ridge, a weather event. The real question is whether the party can catch it in the snow once it has someone.
**Sources.** Monster Vault: 4e MM3, Lv 4 Controller. Chilling Wail (4e); grab and run (Ammann). Freezing gaze rebuilt as Frightened and Slowed.

**Traits (d6)**
1. Its fur is matted with old blood, none of it its own.
2. It carries a lodge hunting spear like a toothpick.
3. Its howl cracks into a high wobble, like a child's cry.
4. Old and grizzled grey. Others follow it.
5. Icicles hang from its brow and chin.
6. A lodge tally scar on its shoulder. A hunter once claimed it.

**Encounters (d4)**
1. Lodge hunters are pinned below a ridge. Every howl brings more snow down.
2. It has taken a lodge child. The lodge will pay a favour; none of its hunters will go.
3. A howl from the shore, and the ice underfoot cracks in answer.
4. Driven down by something larger, it is hungry and afraid.

**Lairs (d4)**
1. An ice cave of blue glass, floor strewn with bones and chewed spears.
2. A high ledge nest of furs overlooking three valleys.
3. A hollow behind a frozen waterfall, full of glittering trinkets.
4. An abandoned hunting camp, tents flattened, footprints the size of shields.

**Rumours (d4, Lore check)**
1. ⊤ Stay off the slopes. The howl won't hurt you; the snow will.
2. ⊤ It can't hide on bare rock. Find stone and watch.
3. ⊥ One look in its eyes freezes your blood solid.
4. ⊥ It fears fire. Wave a torch and it runs.

**Gig Fit**
- Verb: Find / Escort
- But+: Ice World arches, on mountain or valley maps.
- Patron hook: A bear lodge asks the Archkeepers for help: a yeti cuts off their hunting grounds, and their law forbids them to kill it.
- City of Arches name: "Avalanche-callers": also said of anyone who talks too loud in the wrong room.

### Snow Golem
*Ice World · Standard · Controller · Level 4*
**Core:** Lodge children pack snow-wards against the long cold. Some winters the cold fills one and it keeps watch.
*A lumbering figure of packed snow and ice, pebble eyes set in a child's lopsided drawing of a face.*

HP 52 · Armor None · Speed 4 · DC 12 · Stage 13+, winter city

**Actions**
- **Slam** (1 Action) 1d10+6. Cold. A melee weapon that hits it sticks: its next attack is disadvantaged.
- **Snowball volley** (1 Action, Range 10) 1d8+4. Slowed.
- **Frost field** (Passive) Within 2 is icy Difficult Terrain. Heals 5 a turn on snow. Fire deals double.

**In play.** Pelts intruders from high ground, then slams whoever hurts it with magic. Never breaks off while on snow.
**Designer note.** A puzzle with a body: fire, or drag it onto bare rock. Children made it, and that is the clue to unmaking it.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 3. Tactics from the Vault note.

**Traits (d6)**
1. A patched lodge scarf around its neck.
2. A face drawn in pebbles, slightly lopsided.
3. Melting. It leaves slush and shrinks a little each hour.
4. A child's mitten frozen into its fist.
5. It hums a lodge lullaby in a crackle of ice.
6. A smaller, half-finished golem follows it.

**Encounters (d4)**
1. It guards a village the lodge left two days ago. It doesn't know.
2. Three are building a fourth, much bigger.
3. Lodge children beg the party not to hurt it. It is sitting on the party's sled.
4. One came through an arch in winter and grows in the Market Square with every snowfall.

**Lairs (d4)**
1. A courtyard of snow sculptures. One of them moves.
2. A frozen pond, the golem motionless at the centre, drifts around it like a moat.
3. A ravine of half-built golems from generations of children.
4. An ice cave under a glacier, a snow throne at its heart.

**Rumours (d4, Lore check)**
1. ⊤ Get it off the snow and it stops mending.
2. ⊤ The child who made it can unmake it.
3. ⊥ Wait for noon and it melts.
4. ⊥ Pull out its eyes and it falls apart.

**Gig Fit**
- Verb: Escort / Stop
- But+: Ice World arches, and the City of Arches in winter episodes.
- Patron hook: The Council wants one out of the market without anyone looking foolish. The Archkeepers want it sent home, gently.
- City of Arches name: "Lodge-men": market children build their own every winter, hoping.

### Coldlight Walker
*Ice World · Standard · Controller · Level 6*
**Core:** A lodge hunter froze searching for someone and kept walking. Its cold lantern marks everyone it passes.
*A frozen corpse in lodge furs, eyes gone to blue light, walking a straight line across the ice with a lantern that burns cold.*

HP 75 · Armor None · Speed 6 · DC 13 · Stage 13+

**Actions**
- **Frozen touch** (1 Action, ×2) 1d8+8. Cold. Anything standing in its path is walked through: same damage, pushed 2.
- **Glare** (1 Action, Range 8) DEX save or Blind until the end of the target's next turn.
- **Coldlight** (Passive, Reach 4) Everyone within 4 is lit and can't hide. Smother the lantern (1 Action, Finesse DC 13): dark for a round.

**In play.** Never leaves its line, unless burned: then it hunts whoever burned it until one of them falls.
**Designer note.** A hazard that fights back. The party can step off its line, unless what they need is on it. Its light marks heroes for everything else on the ice.
**Sources.** Monster Vault: Conflux Creatures: NPCs & Undead, CR 5. Hunts whoever burns it (Vault note).

**Traits (d6)**
1. Furs bearing the badge of a lodge that no longer exists.
2. It calls one name, softly, as it walks.
3. A tiny glowing bear inside its lantern.
4. Frost ferns spread under its feet.
5. This one walks a circle, endlessly.
6. So old the furs have grown into its skin.

**Encounters (d4)**
1. Its line runs straight across the only bridge.
2. Lodge hunters have waited days in a hide on its path. They want the party to ask it who it seeks.
3. It stops dead when it sees the party's guide, who is from its lodge.
4. One walks a straight line down the Villas of the Second Rise.

**Lairs (d4)**
1. A straight path of blue ice across a frozen sea, nothing at either end.
2. A collapsed lodge hall, an empty lantern hook by the door.
3. A grave in the ice with its name on it, and no body.
4. A ring of standing stones where every walker's line crosses.

**Rumours (d4, Lore check)**
1. ⊤ Step off its path. It won't chase you, unless you burn it.
2. ⊤ Cover the lantern and it goes as blind as you.
3. ⊥ Its light freezes you to the spot.
4. ⊥ Bring it the one it seeks and it will lie down.

**Gig Fit**
- Verb: Find / Bury
- But+: Ice World arches, at Dusk or Dark results.
- Patron hook: A walker's line runs through an Ice World arch and into the city. The Archkeepers want it laid to rest first.
- City of Arches name: "Lantern-men": lodge arrivals won't carry a lantern after dark.

---
## Maphotar/Io

### Eye of Fear and Flame
*Maphotar/Io · Standard · Controller · Level 6*
**Core:** A watcher from Klamas's fortress, still keeping watch for a master who left. It frightens first and burns second.
*A floating eye the size of a shield, the iris ringed in fire, the lids iron plates bolted shut and pried open again.*

HP 60 · Armor Medium · Speed Fly 4 (hover) · DC 13 · Stage 13+

**Actions**
- **Fear ray** (1 Action, Range 12) WIL save or Frightened until the end of the target's next turn. Already Frightened, Dazed.
- **Flame ray** (1 Action, Range 12) 2d8+6. Fire, Smoldering. Advantage against a Frightened target.
- **Shut** (Reaction, 1/round, when targeted) Iron lids slam: the attack is disadvantaged, and no rays until its next turn.

**In play.** Hangs back behind its servants. Frightens whoever is in melee, burns the Frightened, and fixes on whoever hurt it last.
**Designer note.** Its grudge is predictable, so the party can pass its attention around like a hot coal. Shut is a choice: hit it and let it hide, or hold off and let it burn.
**Sources.** Monster Vault: Conflux Creatures: NPCs & Undead, CR 9 (tactics note). Fear-paralysis rebuilt as Dazed.

**Traits (d6)**
1. Its iris is the colour of a forge at full heat.
2. Rivets popped from one lid. It squints.
3. A thin trail of black smoke from the Grenneth.
4. A crack across the pupil. Its rays sometimes misfire.
5. It hisses Klamas's name in steam.
6. Triset scavengers have painted a prayer on its lids.

**Encounters (d4)**
1. It hovers over a wreck, watching a scavenger crew who haven't seen it.
2. Three eyes in a hall, each turning to follow a different hero.
3. A Black Hand fence auctions one in a lead box. The lid is loose.
4. Iverundians have one chained to power a forge. It is trying to look at them.

**Lairs (d4)**
1. An empty iron socket in an Agulon watchtower wall.
2. An Io forge with an eye fused into the furnace door.
3. A crater of scorched glass in the bone-sand, one iron lid half buried.
4. A Triset shrine where eyes are caged and fed with prayer.

**Rumours (d4, Lore check)**
1. ⊤ It watches whoever hurt it last. Take turns.
2. ⊤ When it shuts, it's blind. Close in then.
3. ⊥ Its stare turns you to ash.
4. ⊥ Say Klamas's name and it obeys.

**Gig Fit**
- Verb: Steal / Stop
- But+: Maphotar or Io arches, near ruins or watchtowers.
- Patron hook: A Kartan mage thinks an eye's last sight is Klamas's true name. She wants one alive.
- City of Arches name: "Klamas's lamps": Triset arrivals spit after saying it.

### Inferno Spider Moltling
*Maphotar/Io · Standard · Lurker · Level 3*
**Core:** Io's forges never cool, and something learned to live in the heat. It webs prey in burning silk.
*A spider the size of a hound, carapace cooling from orange to black, light leaking at every joint. Its webs glow like forge wire.*

HP 27 · Armor Medium · Speed 6 (climb 6) · DC 12 · Stage 13+

**Actions**
- **Bite** (1 Action) 1d10+5. Fire, Smoldering.
- **Molten web** (1 Action, Range 6) DEX save or Restrained, taking 1d6 fire each turn. Escape DC 12, or cool it with water.
- **Molt** (Reaction, 1/encounter, would drop to 0) Sheds its shell, stays at 1 HP, moves 6. The shell burns 1d6 to anyone ending a turn beside it.

**In play.** Hunts in groups, hidden in heat: one webs, the others knock prey in and swarm the Restrained. Leaves when half are dead.
**Designer note.** The webbed hero still acts, and the party's job is clear: cool it or break free. Molt means the first kill doesn't count.
**Sources.** Monster Vault: Conflux Creatures: Elementals & Fiends, CR 4 (tactics note).

**Traits (d6)**
1. A cracked carapace leaking light.
2. It ticks like cooling metal when it rests.
3. Fresh from a molt: pale, soft and furious.
4. A ring of melted coins fused to its abdomen.
5. Its web glows brighter when it's hungry.
6. A half-melted Iverundian tool caught in one leg.

**Encounters (d4)**
1. It has nested in the party's only exit, a forge chimney.
2. A scavenger screams in a molten web. The spider is in the machine above.
3. Iverundian overseers want three out of a foundry without harming the work.
4. One came through in a crate of Io scrap and nests in Vathrex's Forge.

**Lairs (d4)**
1. A forge vent lined with glowing silk, too hot to breathe.
2. A war machine's warm belly, full of shed shells.
3. Foundry molds strung with web, one holding an egg sac.
4. A furnace gone out, and a spider starving beside it.

**Rumours (d4, Lore check)**
1. ⊤ Water on the web. It cools and snaps like wax.
2. ⊤ The shed shell stays hot. Don't stand near it.
3. ⊥ Its bite sets your blood on fire.
4. ⊥ Bring ice and they curl up and die.

**Gig Fit**
- Verb: Stop / Steal
- But+: Io or Maphotar arches, near forges and machines.
- Patron hook: Erna Ironhorn wants one out of her chimney before her next commission burns. She pays in keys.
- City of Arches name: "Forge-wives": smiths' name, for the way they tend the fire.

### Hell Hound
*Maphotar/Io · Standard · Brute · Level 5*
**Core:** Bred to run down souls that escape the Grenneth. It can track anyone who has been to Maphotar, anywhere.
*A black dog the size of a pony, coals for eyes, smoke curling from its mouth, an iron collar stamped with a Grenneth number.*

HP 64 · Armor None · Speed 10 · DC 13 · Stage 13+

**Actions**
- **Bite** (1 Action) 1d10+10. Fire. Knockback equal to the Primary Die. Advantage if an ally is beside the target.
- **Fire breath** (2 Actions, 1/encounter) 3d6+4. Fire, cone 3. DEX save for half.
- **Fire shield** (Passive) Anyone starting a turn beside it takes 1d6 fire.

**In play.** Bites the lone hero, breathes when two stand close, harries runners. A feral pack quits when half is down.
**Designer note.** The bite throws heroes apart; the pack gangs up on whoever lands alone. Soul-scent makes it a thread: whoever has been to Maphotar is being hunted.
**Sources.** Monster Vault: 4e MM, Lv 7 Brute. Fire Shield (4e); pack logic (Ammann).

**Traits (d6)**
1. Its collar number scratched off. A runaway.
2. Brimstone and cooked meat on its breath.
3. It wags its tail low and slow when it hunts.
4. A nicked ear and a limp that never slows it.
5. A scrap of Triset robe it won't let go.
6. Grenneth ash in its coat that screams faintly when it shakes.

**Encounters (d4)**
1. Baying, getting closer. Every hero who has been to Maphotar feels it in their teeth.
2. A scavenger trapped on a wreck holds up an arch key: a way home, if they save her.
3. One tracks someone through the Arena crowd. The crowd thinks it's the next act.
4. A devil handler offers to call off the pack for one hero's true name, in their own hand.

**Lairs (d4)**
1. Sprung kennel cages in Agulon, each with a hook for a soul-lantern. The lanterns are gone.
2. A steaming pit by a black river, pups asleep in a heap, no mother.
3. A Triset shrine with a hound asleep on the altar, fed and prayed to.
4. A cave floored with broken collars the pack chewed off each other.

**Rumours (d4, Lore check)**
1. ⊤ Keep together. They split you and take the lone one.
2. ⊤ If you've been to Maphotar, they can find you. Even here.
3. ⊥ Ford a river and they lose your scent.
4. ⊥ Their bite drags your soul back to the Grenneth.

**Gig Fit**
- Verb: Escort / Stop
- But+: Maphotar arches, and anywhere after for heroes who have been there.
- Patron hook: A Black Hand fixer hides a Triset defector in the Lower Reaches. The hounds have found him.
- City of Arches name: "Grenneth dogs": anyone who keeps coming back however often you send them away.

---
## Terrache

### Star Spawn Mangler
*Terrache · Standard · Controller · Level 5*
**Core:** The god the Violet Eye hunts stirs under the Seas of Madness. Manglers climb out of the water as its hands.
*A too-long grey figure with six arms jointed at angles that hurt to look at, and a face that is only a mouth. It folds into shadows too small for it.*

HP 64 · Armor None · Speed 8 (climb 8) · DC 13 · Stage 13+

**Actions**
- **Flurry** (1 Action) 3d6+4. Six arms at once. Then push or pull the target 2 spaces any way, walls included.
- **Shadow fold** (Passive) Invisible in dim light or darkness until it attacks.
- **Psychic static** (Passive, Reach 2) Heroes within 2 can't take Reactions and roll Concentration with disadvantage.

**In play.** Alone it comes from shadow; in a group its claws clatter first. Shreds one hero, throws them, scuttles off, returns.
**Designer note.** Every hit moves a hero, so the fight is over where you stand. On Terrache's bridges, every push is a fall. Light is the answer.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 5 (tactics note). Origin rebuilt from Terrache canon.

**Traits (d6)**
1. One arm broken, hanging wronger than the rest.
2. It hums in a key that makes teeth ache.
3. A Violet Eye warlock's sash, wet from the sea.
4. It moves in fits, like a puppet with tangled strings.
5. Its mouth is full of small violet stones.
6. A shard of a Pillar of Sin in its chest, still whispering.

**Encounters (d4)**
1. It squats mid-bridge between two shadow elf cities. Each swears it belongs to the other.
2. A shadow elf patrol has it cornered. Two soldiers hang from the ceiling at impossible angles.
3. A Violet Eye warlock will call it off the party's route for one hero's worst dream, told in full.
4. The lamp gutters on a walkway. Six grey hands close on the rail ahead, one by one.

**Lairs (d4)**
1. A hollow stalactite tip, spirals scratched toward a hole too small to pass. Something passes.
2. A ledge over the sea, where it sits rocking in time with the Pillars' screams.
3. A watchtower with every door bent outward and every guard's armour folded, empty.
4. A violet grotto heaped with Violet Eye offerings: oil, mirrors, a scroll begging it to stay away.

**Rumours (d4, Lore check)**
1. ⊤ Bring light. It can't hide in it.
2. ⊤ Off the bridges when it's near. It throws people.
3. ⊥ One touch scrambles your mind for the whole fight.
4. ⊥ It can't climb. Get above it.

**Gig Fit**
- Verb: Escort / Stop
- But+: Terrache arches, on bridges, walkways and ledges.
- Patron hook: The University wants a mangler's arm for its joints, and has a Violet Eye contact to sell.
- City of Arches name: "Six-hands": a shadow elf curse.

### Voidwracked Mage
*Terrache · Standard · Controller · Level 4*
**Core:** A Violet Eye warlock who listened to the Pillars of Sin too long. Half of them is gone, and the hole hurts.
*A shadow elf in a ruined Violet Eye robe, half the body hollowed into star-flecked black. Two voices speak, and they never agree.*

HP 40 · Armor None · Speed 6 · DC 12 · Stage 13+

**Actions**
- **Void lash** (1 Action, Range 8) 1d10+6. Pulls the target 2 spaces toward it or the nearest Pillar of Sin.
- **Unravel** (1 Action, 1/round, Range 8) WIL save or Dazed on the target's next turn.
- **Leak** (Passive) Hits on it burn all within 1 (1d6). At 0 HP it implodes: 2d6 within 2, pulled in.

**In play.** Lashes whoever is closest, because closest is loudest. Breaks off only by dying, and that hurts everyone.
**Designer note.** Glass cannon: lower-level HP, higher-level damage, and it punishes melee every time it is hit. Kill it carefully, or eat the implosion.
**Sources.** Monster Vault: Creature Codex, CR 8. Scaled down as a glass cannon; origin rebuilt from Terrache canon.

**Traits (d6)**
1. Eyes like two holes with moving stars in them.
2. A Violet Eye tattoo, half eaten by the black.
3. It names the five spires of Vestellis, always skipping the fourth.
4. It weeps black stones that roll uphill.
5. A blank spellbook it still reads from.
6. A signet from Qinroris's court on the hand that remains.

**Encounters (d4)**
1. It preaches on a bridge to goblins and bugbears. Two have gone dark at the fingertips.
2. The party's Violet Eye contact arrives with a hand black to the wrist and asks them to look.
3. It is feeding a Pillar shard to the myconid sage who holds the party's key.
4. A warlock pays for one brought back alive. Every blow makes that harder.

**Lairs (d4)**
1. A scorched tower room, the floor a mosaic of stars from no known sky.
2. A volcanic cave where the rock has gone thin as paper and stars show through.
3. A shrine by a Pillar of Sin, heaped with empty, folded Violet Eye robes.
4. A library of blank pages, the librarian still at the desk, writing nothing.

**Rumours (d4, Lore check)**
1. ⊤ Hit it from range. It hurts everyone close.
2. ⊤ It pulls in when it dies. Step back before the last blow.
3. ⊥ The void is catching. Touch one and you hollow out too.
4. ⊥ Push it into the sea and it unravels.

**Gig Fit**
- Verb: Find / Escort
- But+: Terrache arches, near Vestellis or the Seas of Madness.
- Patron hook: A University lecturer came back from Terrache speaking in two voices. They want to know why before it spreads.
- City of Arches name: "Hollowed": University slang for any scholar who goes too deep.

### Slaad Tadpole
*Terrache · Standard · Lurker · Level 5*
**Core:** Chaos breeds in the Seas of Madness. A slaad plants the embryo; this is what bursts out of the host.
*A slick, dog-sized tadpole with needle teeth and faintly red eyes. It came out of someone's skull days ago. Soon it will be a slaad.*

HP 49 · Armor None · Speed 6 (swim 8) · DC 13 · Stage 13+

**Actions**
- **Bite** (1 Action) 2d8+6. Then it slips half out of the world: attacks against it are disadvantaged until its next turn.
- **Chaos shift** (Reaction, attacked in melee) Moves 2 first, without provoking. Out of reach, the attack misses.
- **Grow** (Passive) Becomes an adult slaad 1d4+3 days after emerging, a day sooner for each good meal.

**In play.** Wants to grow up. Hides, eats anything small, bites only what corners it, and runs every time.
**Designer note.** Hard to pin and always running. The real job is the clock: find it before it grows. The host story lives in the encounters.
**Sources.** Monster Vault: 4e MM, Lv 5 Lurker. Chaos Shift, insubstantial after a bite (4e); flees to hide (Ammann, Vault note).

**Traits (d6)**
1. A strip of its host's scalp still on its back.
2. It chirps like a cricket, faster when hungry.
3. Its skin shimmers every colour, like oil on water.
4. Claws already budding. Two days, maybe less.
5. It drags the host's silver earring on a thread of skin.
6. One eye is human, brown and frightened.

**Encounters (d4)**
1. The first clean water in days. Under the steam, something dog-sized turns to look.
2. A soldier begs for a priest, clutching his head. He has two days and knows what's coming.
3. A warlock keeps them in a tank, labelled by host. One label is in a hero's handwriting.
4. A traveller with headaches hasn't been seen since Tuesday. The warm pool's drain is chewed open.

**Lairs (d4)**
1. A steaming pool with a cracked skull on the rim, cracked from inside.
2. A slaad nest of empty skulls and one tadpole too young to leave.
3. A chalkboard of hosts and days remaining, most crossed out.
4. A warm overflow chamber under the baths, fish bones stacked by size.

**Rumours (d4, Lore check)**
1. ⊤ It wants to hide, not fight. Corner it or lose it.
2. ⊤ The slaad that laid it is still around.
3. ⊥ Kill the tadpole and the host's madness lifts.
4. ⊥ Through an arch, away from Terrache, they die.

**Gig Fit**
- Verb: Find / Stop
- But+: Terrache arches near water, or Stages 9-10 for one that came through in a host. A hunt with a clock.
- Patron hook: A Temple priest's patient carries an embryo with three days left. The cure is in Terrache, and so is the slaad.
- City of Arches name: "Headaches": Baths attendants report any Terrache arrival who complains of one.

---
## Drendaan

### Water Myrmidon
*Drendaan · Standard · Controller · Level 6*
**Core:** Gorvund the djinni bound seawater soldiers to guard his Spindle. He is gone; the binding is not.
*A warrior-shape of living seawater in coral plate, a trident of the same water in its fist, small fish swimming through its chest.*

HP 60 · Armor Medium · Speed 6 (swim 8) · DC 13 · Stage 13+

**Actions**
- **Trident** (1 Action, ×2, Reach 2) 1d8+7. Cold. Slowed.
- **Whirlpool** (2 Actions, 1/encounter, near water) Everyone within 3: STR save or pulled 2 toward it and Restrained, spinning, until their next turn.
- **Waterform** (Passive) Flows through any gap. Immune to cold; lightning deals double.

**In play.** Holds its post as ordered. Drags the nearest swimmer into reach and holds the line.
**Designer note.** In the water it pulls heroes in and spins them in place, still acting. On dry stone, just a good soldier with a trident.
**Sources.** Monster Vault: Conflux Creatures: Elementals & Fiends, CR 7. Freezing strikes kept as Slowed.

**Traits (d6)**
1. An octopus lives in its helm and watches the party.
2. It hums a sea-shanty in djinni.
3. Cracked coral plate. Water sheets out when it swings.
4. Murky with silt. Not relieved of duty in centuries.
5. It bows to Gorvund's seal, then attacks anyway.
6. Queen Nora's token on its trident, on a kelp cord.

**Encounters (d4)**
1. It guards a stair and asks for a password in dead djinni. A drowned scholar's notes cross out three guesses.
2. It holds the door where sahuagin keep a merfolk envoy. Queen Nora wants her back before the treaty.
3. The water beside the skiff stands up, takes a trident's shape, and steps aboard.
4. One has taken a Lost Cisterns sluice as its post. It opens on its own schedule.

**Lairs (d4)**
1. A Spindle level holding a drowned market square, one dry island where the post once stood.
2. A flooded derelict hold it paces, bow to stern, the same steps every time.
3. An empty plinth in Barthen. What it guarded was stolen; nobody told it.
4. A cistern chamber suddenly cold, clear and full of sea fish.

**Rumours (d4, Lore check)**
1. ⊤ Get it out of the water and it's just a soldier.
2. ⊤ Lightning boils it. Bring a storm.
3. ⊥ One cut from the trident freezes you solid.
4. ⊥ Say Gorvund's name and it lets you pass.

**Gig Fit**
- Verb: Steal / Escort
- But+: Drendaan arches, and Stages 9-10 in the Lost Cisterns.
- Patron hook: The Council has one standing in a cistern flood gate, and flood season is coming.
- City of Arches name: "Sea-soldiers". The cistern crews call theirs "the Sergeant" and leave it bread.

### Spirit Naga
*Drendaan · Standard · Controller · Level 7*
**Core:** A naga crowned in one of the Spindle's stolen worlds. It returns from death unless its heart-pearl is crushed.
*A serpent twenty feet long with a human face, scaled midnight blue and silver. It sings its spells softly, and it remembers everyone.*

HP 87 · Armor None · Speed 8 (swim 8) · DC 13 · Stage 13+

**Actions**
- **Bite** (1 Action) 1d12+10. Poison. STR save or Poisoned.
- **Command the body** (1 Action, Range 8) WIL save or it moves the target 4 spaces. They keep their actions.
- **Lightning song** (2 Actions, 1/encounter) 3d8+5. Lightning, 10-space line. DEX save for half.

**In play.** Moves heroes into the lightning's line, then talks. Never truly flees; it will be back in 1d6 days.
**Designer note.** It puts a hero on the wrong side of the fight, and they still take their whole turn. The pearl makes it a long enemy with a weakness to find.
**Sources.** Monster Vault: Monster Manual (2024), CR 8. Hold Person rebuilt as forced movement; never flees (Ammann).

**Traits (d6)**
1. It sings in an old friend's voice and gets the words right.
2. Its scales pulse in time with the vines.
3. A crown of Barthen sea-silver it calls a gift.
4. A djinni's lightning scar down its human face.
5. A library of whispering shells. One holds a hero's voice.
6. Lonely. It talks too much and remembers every answer.

**Encounters (d4)**
1. It has crowned itself queen of a stolen desert and wants subjects. The party will do.
2. It bargains with Barthen's three queens. Each pays the party, privately, to make the talks fail.
3. A black pearl in a strongbox. Three nights later, singing under the boat.
4. It asks the Archkeepers for asylum, and the party to keep an old enemy away.

**Lairs (d4)**
1. A whole sea-palace lifted into the Spindle, its feast set and never eaten.
2. A snake-carved Barthen altar with a fresh pearl-sized hollow.
3. A derelict ship, its coils worn into the mast, a log listing everyone it asked to stay.
4. A cave of humming shells. Two voices argue about the party.

**Rumours (d4, Lore check)**
1. ⊤ It isn't dead until its pearl is crushed.
2. ⊤ It can move you, not make you swing. Keep fighting.
3. ⊥ It can't hurt anyone who heard it sing.
4. ⊥ It can't lie. Ask it anything.

**Gig Fit**
- Verb: Find / Bury
- But+: Drendaan arches, best on the Spindle or near Barthen.
- Patron hook: The Archkeepers would grant it asylum; the Council wants proof it's safe. Its pearl would be proof.
- City of Arches name: "Pearl-keepers": they guard their own hearts.

### Swarm of Flying Snakes
*Drendaan · Standard · Controller · Level 2*
**Core:** Flying snakes nest in Drendaan's vine towers. Alone they strike once and flee; over a nest they swarm.
*A cloud of bright winged snakes, each a forearm long, green and gold in the vine-light, looping on the wind and diving in a hissing rush.*

HP 24 · Armor None · Speed Fly 8 · DC 11 · Stage 13+

**Actions**
- **Bites** (1 Action) 2d4+3. Poison. One creature in or beside its space.
- **Swarm** (Passive) Anyone starting a turn in its space is Slowed. Single targets half, AoE double.
- **Ride the wind** (Free, 1/round) Moves 4 with the wind in open air, carrying a Small creature.

**In play.** Defends its nest. Scatters when the nest burns or the swarm is Bloodied.
**Designer note.** Difficult Terrain with teeth. Pair it with something bigger, a sahuagin raid or Kesset's elementals, so it changes the shape of a larger fight.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 5. Solitary unless nesting (Ammann).

**Traits (d6)**
1. Scales flash like thrown coins.
2. The swarm makes shapes: a fish, a ship, a hero's face.
3. One red snake leads. Kill it and the rest wheel for a round.
4. They hiss in a three-beat rowing rhythm.
5. Vine seeds in their mouths. Shoots sprout where they nest.
6. Thin silver bands from Irathas. Tame, once.

**Encounters (d4)**
1. The vines peel off a tower at dusk and come down the wind.
2. Miners work a crystal island under a circling swarm. Every miner who looks up gets dived.
3. Air elementals herd a swarm into the sails, then wait to see what falls.
4. A swarm nests in the spray of the falls above the city. Pilgrims are being bitten.

**Lairs (d4)**
1. Nests hung like paper lanterns on a vine tower, glowing.
2. A collapsed crystal garden draped in shed skins that rattle like chimes.
3. A djinni's old aviary in the Spindle's side, the cages open.
4. The underside of a cloud, a missing scout's satchel hanging with the swarm.

**Rumours (d4, Lore check)**
1. ⊤ Fire and wind break them. A blade won't.
2. ⊤ Burn the nest and the swarm leaves.
3. ⊥ Their venom kills in an hour unless you suck it out.
4. ⊥ Jump in the water and they won't follow.

**Gig Fit**
- Verb: Escort / Stop
- But+: Drendaan arches, in the air or on ships.
- Patron hook: Verosa asks the party to escort her family off their island. The swarm sits between them and the arch.
- City of Arches name: "Sky-eels": anything that swims in the air.

---
## Vynan

### Common Feyr
*Vynan · Standard · Controller · Level 3*
**Core:** The Yondoth's ghost-engine whispers into Vynan's sleepers, and their nightmares climb out. Wake the dreamer and it ends.
*A floating knot of grey flesh, eyes and mouths. It smells of cold sweat and burnt sugar.*

HP 41 · Armor None · Speed Fly 6 · DC 12 · Stage 13+

**Actions**
- **Lash of fears** (1 Action, ×2, Reach 2) 1d6+4. Psychic.
- **Nightmare** (1 Action, Range 6) WIL save or Frightened of it until their next turn ends. The player names what they see.
- **Born of a dreamer** (Passive) Its dreamer sleeps within 30. Waking them (1 Action, Influence DC 12) ends it at once.

**In play.** Strikes whoever moves toward its dreamer. Ends the moment the dreamer wakes.
**Designer note.** A nightmare with a plug. The fight becomes a race to find and wake the dreamer, and naming the fear gives the table a story beat without costing a turn.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 3. Origin rebuilt from Vynan canon (the Yondoth).

**Traits (d6)**
1. One mouth says a hero's name in a voice that used to say it often.
2. A child's eyes, wet and frightened. Its dreamer is young.
3. Grey ash smelling of a kitchen nobody in Vynan remembers.
4. Newborn, cat-sized, still deciding what to be.
5. Its mouths sing an out-of-tune lullaby that leads to the dreamer.
6. It drifts toward lamps and flinches from blue light.

**Encounters (d4)**
1. A street gone silent, everyone asleep mid-task, shapes drifting between them. One sleeper is the party's contact.
2. A mother asks the party to guard her child's sleep. At midnight the air over the cot knots.
3. The engine crew works in their sleep, feyr clustered around them.
4. A Vynan arrival sleeps upstairs at the hostel. The cat won't go up.

**Lairs (d4)**
1. Forty twitching sleepers in a barracks, a feyr over each like breath on a cold morning.
2. The engine room, whispering names of people not yet born.
3. A corner worn in circles by years of pacing, a blanket and bowl at the centre.
4. An attic of tally marks, one per night slept, that smells of burnt sugar.

**Rumours (d4, Lore check)**
1. ⊤ Wake the dreamer and it goes out like a candle.
2. ⊤ The fear is yours. Name it and you can face it.
3. ⊥ Fall asleep near one and you never wake.
4. ⊥ They can't follow through an arch.

**Gig Fit**
- Verb: Find / Stop
- But+: Vynan arches, and anywhere a Vynan arrival sleeps.
- Patron hook: An arrival at the Archkeepers' hostel won't stop dreaming, and the other guests are seeing things.
- City of Arches name: "Night-sweats": hostel staff say it with a nervous laugh.

### Vynan Alchemist-Mage
*Vynan · Standard · Controller · Level 6*
**Core:** Vynan's survivors have spent generations repairing a crashed ship. This one will melt anyone between it and the engine.
*A survivor in a patched leather coat hung with vials and retorts, goggles pushed up on a scarred forehead.*

HP 49 · Armor None · Speed 6 · DC 13 · Stage 13+

**Actions**
- **Retort flask** (1 Action, Range 8) 2d6+5. Acid, 1-space radius, DEX save for half. Everyone hit is Slowed.
- **Smoke of forgetting** (2 Actions, 1/encounter, Range 8) 2-space cloud: Blind inside. Ending a turn there: WIL save or Dazed.
- **Transmute ground** (1 Action, Range 8) A 3 by 3 floor turns to mud, or to glass that breaks and drops whoever stands on it.

**In play.** Splits the party with mud and glass from behind its flesh guardian. Fights for its notes. Bloodied, it trades.
**Designer note.** Terrain and smoke split the party. It has nothing against the heroes and wants the ship to fly, so it is a good target for a deal.
**Sources.** Monster Vault: Drow Deepmage, Conflux Creatures: Giants & Monstrosities, CR 7. Reskinned as a Vynan survivor.

**Traits (d6)**
1. One cracked goggle lens. It tilts its head to see.
2. Burn scars to both elbows, shaped like retort stands.
3. It mutters the same three numbers, over and over.
4. A Kartan student's pin it can't explain.
5. A grey rat in its pocket, wearing its own tiny goggle.
6. No memory before the ship, and no wish to find one.

**Encounters (d4)**
1. It needs one part to finish a coupling, and the part is in a hero's pack.
2. Uzul's flesh guardians are breaking in. It would rather blow the workshop than lose the notes.
3. One shops for reagents in Kartan, paying in Vynan glass that whispers.
4. Stranded, the party is offered a way home for three nights' work. On the second, the engine whispers their names.

**Lairs (d4)**
1. A workshop under a fallen bridge, a ship model with one piece missing.
2. The engine room, every fitting stamped by a different alchemist, most of them dead.
3. A tank-room with a half-built guardian it talks to at night.
4. A storeroom in Kartan under a false name. The University reads its notes.

**Rumours (d4, Lore check)**
1. ⊤ It wants the ship to fly. Help it and it helps you.
2. ⊤ The guardian is its shield. Pull them apart first.
3. ⊥ Breathe its smoke and you forget your own name for good.
4. ⊥ They all work for the lich Ivextus.

**Gig Fit**
- Verb: Escort / Steal
- But+: Vynan arches, near workshops or the ship.
- Patron hook: A Kartan mage wants a copy of its engine notes, taken without it knowing.
- City of Arches name: "Engine-folk": Kartan students say it half admiring, half afraid.

---
## Drakeholm

### Young Blizzard Dragon
*Drakeholm · Elite · Controller · Level 7*
**Core:** Above Drakeholm's endless war, a dragon that has chosen no side. Its storm builds where everyone can see it.
*A pale blue dragon the size of a war-horse, scales rimed with frost, wings ragged with icicles.*

HP 95 · Armor Medium · Speed 8 (fly 12, burrow 6 in snow) · DC 13 · Stage 13+

**Actions**
- **Bite** (1 Action) 2d8+8. Cold. Restrained, frozen to the ground, until its next turn ends. The target still acts.
- **Claws** (1 Action) 1d8+6. Slides the target 2. Its aura slides anyone ending a turn within 1 another space.
- **Rising winds** (1 Action) 4d8. Telegraphed: aura grows to 3, then 5. Next turn, STR save or Slowed and Blind beyond 1; half on success.

**In play.** Slides heroes toward the edge, then winds up the storm. Bloodied, it takes wing out of reach, its storm ready again.
**Designer note.** The storm is visible for two turns: run, hide behind rock, or pile on damage. Every turn stays the heroes' own. On a cliff, every slide is a fall.
**Sources.** Monster Vault: 4e MM3, Lv 7 Elite Controller. Freezing Winds and Rising Winds (4e); telegraph in the spirit of MCDM villain actions.

**Traits (d6)**
1. Frost forms on weapons within 6. Bowstrings creak.
2. A torn wing. It flies crooked, always banking left.
3. It counts aloud in Draconic, and stops when hurt.
4. Vain: polishes its scales with snow and hates mud.
5. A Metallic herald's gold chain on one horn, kept as an answer.
6. Thin. The armies have eaten its valleys bare.

**Encounters (d4)**
1. An army must cross its pass before the third snow. Two have fallen. The commander wants one more day.
2. Heralds of both crowns wait at its cave with gifts. It wants a third offer, and the party walks in.
3. Its egg is gone, and planted tracks lead to the party's camp.
4. It followed an arch to the Ice World and took a bear lodge's valley.

**Lairs (d4)**
1. A hoard frozen into a waterfall: banners of both armies, a helm, a taut war-drum.
2. The snowed-in top of a ruined tower, a dragon-shaped hollow in the drift.
3. Glacier claw-furrows all pointing toward the World's Wound.
4. A frozen lake's breathing hole, ringed with the armour of envoys.

**Rumours (d4, Lore check)**
1. ⊤ When the wind rises around it, you have two breaths. Get behind rock.
2. ⊤ Hurt it and it flies. Have bows ready.
3. ⊥ Throw oil and fire and it melts.
4. ⊥ It is sworn to the Chromatic Queen. Talking is wasted breath.

**Gig Fit**
- Verb: Escort / Prove
- But+: Drakeholm arches with mountains or snow. Use the storm with a Dusk result.
- Patron hook: Galeos Titancowl wants its favour for the Metallic King, or at least its absence from the war.
- City of Arches name: "Storm-wings": any dragon with no side. In the Black Goat, a patron who pays both crews.

### Drakkoth Faterager
*Drakeholm · Standard · Controller · Level 5*
**Core:** A dracotaur of the nomad tribes who serve dragon patrons. It reads its fate in dragon bones and names whoever must fall.
*A four-legged drake's body with a scaled torso rising from its shoulders, a battleaxe in both hands, a bandage over one eye.*

HP 49 · Armor Medium · Speed 7 · DC 13 · Stage 13+

**Actions**
- **Battleaxe** (1 Action, ×2) 1d10+5. Bloodied: +4 damage, heals 5 on a hit once a round, and may cleave every adjacent enemy.
- **Name the doomed** (Free, start of combat) One hero is Taunted by it until one of them falls. That hero's successful saves reroll, keeping the lower.
- **Venomous hiss** (1 Action, recharges when first Bloodied) 3d6+4. Poison, cone 2. DEX save for half; failure also Poisoned until their next turn ends.

**In play.** Leaps into the party, names the strongest-looking hero, and fights only them. Never breaks off from its named foe.
**Designer note.** One hero is pinned and their luck turns; everyone else gets free swings. Bloodied, it becomes a brute. Lead a warband with it or run it as a duel.
**Sources.** Monster Vault: Conflux Creatures: Aberrations & Dragons, CR 8. Dracotaur form, Raging Cleave, Venomous Hiss, Drakkoth Rage (4e MM2).

**Traits (d6)**
1. A rune on its armour for every named foe killed, and room for one more.
2. It casts finger bones and won't fight until they agree.
3. Old and grey, scales cracked like dry mud.
4. One verse of a war-song per swing. The last verse is its own death.
5. The bandaged eye is gold, a dragon's. It never lifts the cloth.
6. A token from every hero it has named: a ring, a braid, a key.

**Encounters (d4)**
1. It casts its bones on a hero's table at the Black Goat, speaks their name, and waits outside.
2. It holds a bridge with six outriders. The party passes if one of them fights it alone.
3. Two fateragers from opposite armies duel over a young dragon's body.
4. One arrives through an arch with a hero's face scratched on a bone. They have never met.

**Lairs (d4)**
1. A hollow under a dragon's ribs, floored with bone chips worn smooth by casting.
2. A tent apart from the war camp: a mat, an axe stone, a wall of tokens.
3. An unburied battlefield it walks each morning, reading one of the dead.
4. A stable behind the Rusty Cutlass, paid a month ahead, a hero's name cut in the doorframe.

**Rumours (d4, Lore check)**
1. ⊤ It picks one of you. The rest hit it while it's busy.
2. ⊤ If it names you, your luck turns. Don't count on your saves.
3. ⊥ Its bones never lie. If it named you, you're already dead.
4. ⊥ Kill its named foe first and it loses heart.

**Gig Fit**
- Verb: Prove / Stop
- But+: Drakeholm arches near armies, or the city as a Twist: the bones named a hero before the episode.
- Patron hook: Galeos Titancowl hears one has named her friend. She wants the fate proved wrong.
- City of Arches name: "Bone-readers": gamblers use it for anyone too sure of a bet.

---
## Index of Named Moves (printed at the back of the book)

Glosses add no rules; a Ruling is a suggested reading where the printed line is ambiguous.

**Kobolds**
- Nooooo!. Grief-rage. When a friend within Reach 2 dies, a kobold strikes back at once, with no action spent.
- Sneaky!. The Sneak can step before its free Nooooo! strike, to reach whoever did it.
- CLANG!. A pot-and-ladle racket. Every ally who hears it rolls one extra damage die.
- Preoccupied noisemaker. Too busy banging to fight. Kill it first and the extra dice stop.
- Throw scorpion. A live scorpion lobbed from a jar. Ranged, 8 spaces.
- Trap!. Pre-set traps by the den: a hidden beehive or a dropping net, each once per encounter.
- Hoooold!. The Denwarden bellows and locks shields: adjacent kobolds count as Medium Armor.

**Bandits**
- Inept. Clumsy hands: a top roll on their die misses instead of landing a lucky blow. Ruling: Read 'miss on 8' as: a Primary Die of 8 misses rather than crits.
- Mortal panic. They flinch from steel. Attacks against them miss on a 2 as well as a 1.
- I'll cut ya!. A knife slash, shouted. Melee.
- Hand it over!. A weapon swing made while demanding the purse. Melee; 'or Shoot' is a ranged shot, 8 spaces.
- And STAY down!. A cudgel blow to put a hero on the ground. Melee.
- Spark step. The mage blinks 4 spaces away in a crackle whenever it is hurt.
- Arc lightning. A ranged bolt that jumps to the next nearest creature, ally or not.
- Strict training. The Captain's drilling: allies around it lose Inept and fight properly.

**Goblins**
- Haha, missed me!. Mockery that stings: surviving a hit or a miss lets it deal 2 psychic back. Same for the other 'Haha' lines and the Taskmaster's 'Gotta do better than that!'.
- CHAAARGE!. The rat sprints 4+ spaces in a straight line; its next attack has advantage.
- Bite & stab. The rat bites, the rider stabs: two melee attacks.
- Meat shield. The Taskmaster shoves another goblin into the way of an attack.
- Get in here!. The Taskmaster yells for reinforcements: one goblin minion joins the fight.
- Bash. A two-handed club swing with Reach 2 that leaves the target reeling.

**Snakemen**
- Coiling strike. On a crit the snakeman wraps its tail round the target: Grappled.
- Coiling command. The Captain hisses an order; an ally wraps an adjacent enemy.
- Slash. A curved blade, melee. 'Or Spit' is spat venom, ranged, 8 spaces.

**Oozes**
- Goopy. Cutting or critting an ooze splashes off minions: the number after Goopy, once a round.
- Acidic touch. A pseudopod of acid. Each Digested on the same hero this encounter adds the listed extra damage.

**Mimics**
- Ambusher. It was the furniture. It always acts first, and heroes roll Initiative at disadvantage.
- Sticky. Glue-skin: every hit also Grapples, and it can hold any number. A crit pries one free.

**Gnolls and Worgs**
- Bloodthirsty. They smell blood: advantage against anyone already damaged.
- Ravage. Claws and teeth. Melee. 'Or Shoot' is a bow, 10 spaces.
- Bark orders. The Packleader yips; two allies move before it attacks.
- Rip apart. The worg's jaws close and hold: Grappled. Savage then crits it on 5+.

**Skyhunters**
- Burst lightning. The drake explodes in a crackle when it dies, hitting everything adjacent.
- Fly & drop. The griffon climbs 12 spaces with its catch and lets go.
- Pluck up. Talons reach 4 spaces and seize up to two creatures.
- Crush & drop. The roc climbs 20 spaces, squeezes what it holds, then drops it.

**Hill Brutes**
- Burst forth!. The bulette erupts from the ground at the start of the fight, at the heaviest hero.
- Drag below. It pulls a held hero underground and burrows away, leaving a tunnel.
- Punt. A giant's kick. Melee, Reach 2, knockback by the Primary Die.
- Boulder!. A thrown rock, ranged 12, landing on a 2 by 2 area.
- Claws. The troll's raking swipe, Reach 2, that knocks a hero down for the bite. Ruling: 'Choose twice' means two attacks a turn, from Claws and Bite.

**Stirges**
- Evasive flier. Erratic flight: attacks against it are at disadvantage.
- Latch on. Proboscis in, it rides the victim: its attacks can't miss or be Defended.

**Rank-and-File Dead**
- Unliving, undying. The first time it falls it stands back up at 1 HP.
- Just bones!. Arrows and spears pass between the ribs: resistant to piercing, except crits.
- Grave arrow. A bow, ranged 8.
- Crunch. A zombie bite that holds on: Grappled.

**Restless Spirits**
- Corrupt. Radiant hurts it badly. Ruling: Read as: radiant damage to it gives the attacker's next attack advantage.
- Deathly touch. A cold hand through the chest. Ruling: Read as: the damaged hero drops to 0 HP and is Dying, not dead.
- Soul rend. A ranged tearing at the spirit, 8 spaces, that leaves a Wound.

**Mummies**
- Cursed slam. A wrapped fist. Melee; on damage, Dazed.
- Scarab swarm. The Lord spills six scarab minions within 6, then attacks. Ruling: Scarab minions use a d6 attack die, per 'size d6'.

**Briarbanes**
- Thorn seed. A spat thorn, ranged 6.
- Caustic eruption. The pod bursts in acid when it dies, hitting everything adjacent.
- Peeling bark. Each hit strips a layer: Heavy, then Medium, then no armor.
- Tangle. A bramble lash, Reach 6, that holds. Fire or slashing frees.

**Forest Keepers**
- Illusory aura. It is hard to see where it is: Disadvantage 2, until damage reveals it for a turn.
- Stone gaze. Meeting its eyes stiffens limbs: one fewer action each stack, 10 minutes.
- Envenom. A venomous bite, d44: two d4s read as tens and ones.
- Beastshift. The druid takes animal shape for a turn, then attacks twice.
- Hurricane. A wind burst around the druid that throws enemies anywhere within 3.

**Cultists**
- Fanatical offering!. The cultist cuts itself for its god; adjacent heroes despair.
- Despair. Disadvantage on everything, until the hero deals or heals any damage.
- Whispers of madness. Psychic whispers that hold a despairing hero in place. Radiant breaks it.
- Feverish chant. Allies who hear the Doomsayer take only 1 damage from each hit.
- Ecstatic outburst. A scream of joy that hurts every despairing hero. Ruling: Printed as a Passive with no trigger. Read as: once, at the start of the Doomsayer's turn.

**Lesser Fiends**
- Putrid cloud. A stenchling bursts when it dies, hitting enemies within 2.
- Spines. Hitting it in melee costs the attacker 4 damage.
- Doomclaw. A pincer, Reach 2, that holds. Two holds need two escapes.
- Tear asunder. Only against a hero in both pincers: 50 damage, then a STR save if Dying.

**Spiders**
- Web garrote. A silk wire round the throat: held and Silenced until escape.
- Swarm. The Nestweaver calls three spider minions, then webs or bites. Ruling: Spider minions use a d8 attack die, per 'size d8'.

**Deep Horrors**
- Confounding pheromones. A musk that scrambles thought: the GM spends one of the hero's actions.
- Mutual harm. The cloaker wraps a hero round itself: it takes half of each hit, the hero the rest.
- Horrifying wail. A shriek within 6 that sends the frightened running.
- Tremor sight. It feels footsteps: advantage on whoever moved this round, disadvantage otherwise.


## 6. Computed stat sheet

Generated from the entries and the Monster Builder table. It compares each non-minion member's HP with the builder HP at its level and armor, and lists the save DCs its actions use against the builder DC. Treat it as data to check, not as a verdict.

| Entry | Member | Lvl | Armor | HP | Builder HP (same armor) | HP / builder | DCs used | Builder DC |
|---|---|---|---|---|---|---|---|---|
| Kobolds | Kobold | 1/3 | None | 10 | 10 | 1.00 | none | 10 |
| Kobolds | Kobold Sneak | 1 | None | 20 | 21 | 0.95 | none | 11 |
| Kobolds | Kobold Clanger | 2 | Medium | 16 | 19* | 0.84 | none | 11 |
| Kobolds | Kobold Trapper | 2 | None | 30 | 31 | 0.97 | 10 | 11 |
| Kobolds | Kobold Denwarden | 3 | Medium | 30 | 27 | 1.11 | none | 12 |
| Bandits | Bandit | 1/3 | None | 10 | 10 | 1.00 | none | 10 |
| Bandits | Bandit Hunter | 1 | None | 17 | 21 | 0.81 | none | 11 |
| Bandits | Bandit Bruiser | 2 | None | 27 | 31 | 0.87 | none | 11 |
| Bandits | Bandit Assassin | 2 | None | 20 | 31 | 0.65 | none | 11 |
| Bandits | Bandit Mage | 4 | None | 40 | 52 | 0.77 | none | 12 |
| Bandits | Bandit Captain | 4 | Medium | 35 | 37 | 0.95 | none | 12 |
| Goblins | Goblin | 1/2 | None | 15 | 15 | 1.00 | none | 11 |
| Goblins | Bugbear | 2 | None | 30 | 31 | 0.97 | none | 11 |
| Goblins | Goblin Ratrider | 2 | None | 30 | 31 | 0.97 | none | 11 |
| Goblins | Goblin Taskmaster | 2 | None | 30 | 31 | 0.97 | none | 11 |
| Snakemen | Snakeman | 1 | None | 21 | 21 | 1.00 | 10 | 11 |
| Snakemen | Cobra Captain | 4 | None | 52 | 52 | 1.00 | 10 | 12 |
| Snakemen | Giant Cobra | 8 | Medium | 84 | 84 | 1.00 | 10 | 13 |
| Oozes | Gray Ooze | 1 | None | 18 | 21 | 0.86 | none | 11 |
| Oozes | Ochre Jelly | 4 | None | 46 | 52 | 0.88 | none | 12 |
| Oozes | Black Pudding | 8 | None | 94 | 100 | 0.94 | none | 13 |
| Oozes | Elder Ooze | 12 | None | 148 | 155 | 0.95 | none | 15 |
| Mimics | Tiny Mimic | 1 | None | 22 | 21 | 1.05 | 9 | 11 |
| Mimics | Small Mimic | 2 | None | 30 | 31 | 0.97 | 11 | 11 |
| Mimics | Medium Mimic | 6 | None | 64 | 75 | 0.85 | 13 | 13 |
| Gnolls and Worgs | Gnoll | 1 | None | 21 | 21 | 1.00 | none | 11 |
| Gnolls and Worgs | Gnoll Packleader | 4 | None | 52 | 52 | 1.00 | none | 12 |
| Gnolls and Worgs | Worg | 1 | None | 20 | 21 | 0.95 | 10 | 11 |
| Skyhunters | Blue Drake | 2 | None | 25 | 31 | 0.81 | none | 11 |
| Skyhunters | Griffon | 4 | None | 52 | 52 | 1.00 | 12 | 12 |
| Skyhunters | Roc | 17 | None | 236 | 236 | 1.00 | 17 | 16 |
| Hill Brutes | Bulette | 10 | Heavy | 88 | 88 | 1.00 | 14 | 14 |
| Hill Brutes | Troll | 10 | None | 120 | 126 | 0.95 | none | 14 |
| Hill Brutes | Hill Giant | 10 | None | 130 | 126 | 1.03 | none | 14 |
| Stirges | Stirge | 1/2 | None | 10 | 15 | 0.67 | none | 11 |
| Stirges | Greater Stirge | 6 | None | 64 | 75 | 0.85 | none | 13 |
| Rank-and-File Dead | Skeleton | 1/3 | None | 9 | 10 | 0.90 | none | 10 |
| Rank-and-File Dead | Zombie | 1/2 | None | 14 | 15 | 0.93 | 10 | 11 |
| Rank-and-File Dead | Ghoul | 1 | None | 18 | 21 | 0.86 | none | 11 |
| Rank-and-File Dead | Ogre Zombie | 5 | None | 60 | 64 | 0.94 | none | 13 |
| Rank-and-File Dead | Giant Zombie | 8 | None | 100 | 100 | 1.00 | none | 13 |
| Restless Spirits | Specter | 3 | None | 34 | 41 | 0.83 | none | 12 |
| Restless Spirits | Wraith | 10 | None | 120 | 126 | 0.95 | none | 14 |
| Mummies | Mummy | 6 | None | 75 | 75 | 1.00 | none | 13 |
| Briarbanes | Briarbane Seedling | 1/2 | None | 12 | 15 | 0.80 | none | 11 |
| Briarbanes | Briarbane Acidpod | 1 | None | 18 | 21 | 0.86 | 12 | 11 |
| Briarbanes | Briarbane Tangler | 2 | Heavy | 24 | — | n/a | 12 | 11 |
| Briarbanes | Briarbane Rootbreaker | 5 | Heavy | 58 | 30* | 1.93 | none | 13 |
| Forest Keepers | Duskprowler | 6 | None | 70 | 75 | 0.93 | none | 13 |
| Forest Keepers | Basilisk | 7 | Medium | 60 | 72 | 0.83 | none | 13 |
| Forest Keepers | Druid | 8 | None | 90 | 100 | 0.90 | none | 13 |
| Cultists | Cultist | 1 | None | 22 | 21 | 1.05 | none | 11 |
| Cultists | Fanatic | 3 | None | 44 | 41 | 1.07 | 13 | 12 |
| Cultists | Doomsayer | 5 | None | 66 | 64 | 1.03 | none | 13 |
| Lesser Fiends | Stenchling | 1/2 | None | 14 | 15 | 0.93 | none | 11 |
| Lesser Fiends | Spiny Fiend | 4 | None | 48 | 52 | 0.92 | none | 12 |
| Lesser Fiends | Glabrezu | 14 | Heavy | 120 | 119 | 1.01 | 16 | 15 |
| Spiders | Giant Spider | 2 | None | 30 | 31 | 0.97 | 12 | 11 |
| Spiders | Ettercap | 4 | None | 50 | 52 | 0.96 | 12 | 12 |
| Spiders | Nestweaver | 6 | Medium | 50 | 60 | 0.83 | 12 | 13 |
| Deep Horrors | Umber Hulk | 10 | Heavy | 80 | 88 | 0.91 | 14 | 14 |
| Deep Horrors | Cloaker | 13 | None | 110 | 170 | 0.65 | 15 | 15 |
| Deep Horrors | Great Worm | 16 | Heavy | 140 | 139 | 1.01 | 18 | 16 |
| Doppelganger Sneak | Doppelganger Sneak | 3 | None | 41 | 41 | 1.00 | 12 | 12 |
| Flameskull | Flameskull | 5 | Medium | 49 | 49 | 1.00 | none | 13 |
| Cavern Choker | Cavern Choker | 4 | Medium | 37 | 37 | 1.00 | 12 | 12 |
| The Sterling Scabbards | Maren Vale, Commander | 3 | Medium | 27 | 27 | 1.00 | none | 12 |
| The Sterling Scabbards | Tobin Quill, Cheat | 2 | None | 24 | 31 | 0.77 | none | 11 |
| The Sterling Scabbards | Ysolde Rook, Hunter | 2 | None | 27 | 31 | 0.87 | 11 | 11 |
| The Sterling Scabbards | Brother Anselm, Shepherd | 2 | None | 31 | 31 | 1.00 | none | 11 |
| Hedge Casters | Hedge Witch | 1 | None | 18 | 21 | 0.86 | 10 | 11 |
| Hedge Casters | Masquer | 2 | None | 24 | 31 | 0.77 | 11 | 11 |
| Hedge Casters | Writ-Binder | 3 | None | 34 | 41 | 0.83 | 12 | 12 |
| Hedge Casters | Kartan Hedge-Mage | 4 | None | 42 | 52 | 0.81 | 13 | 12 |
| Children of Ibraxus | Mire Acolyte | 1 | None | 20 | 21 | 0.95 | none | 11 |
| Children of Ibraxus | Censer-Bearer | 2 | None | 28 | 31 | 0.90 | 11 | 11 |
| Children of Ibraxus | Pestilent Preacher | 4 | None | 46 | 52 | 0.88 | 12 | 12 |
| Serpent Cult of Vithra | Blade-Dancer | 2 | None | 28 | 31 | 0.90 | none | 11 |
| Serpent Cult of Vithra | Serpent-Charmer | 3 | None | 38 | 41 | 0.93 | 12 | 12 |
| Serpent Cult of Vithra | Voice of the Idol | 5 | None | 66 | 64 | 1.03 | 13 | 13 |
| Golden Knights | Golden Knight | 3 | None | 34 | 41 | 0.83 | none | 12 |
| Golden Knights | Knight Sergeant | 4 | Medium | 37 | 37 | 1.00 | 12 | 12 |
| Golden Knights | Griffon Knight | 5 | Medium | 49 | 49 | 1.00 | 12 | 13 |
| Arch Guardians | Skeletal Tomb Guardian | 2 | None | 31 | 31 | 1.00 | none | 11 |
| Arch Guardians | Flesh Guardian | 4 | None | 52 | 52 | 1.00 | none | 12 |
| Arch Guardians | Clay Guardian | 5 | Medium | 49 | 49 | 1.00 | none | 13 |
| Arch Guardians | Stone Guardian | 8 | Heavy | 60 | 60 | 1.00 | 13 | 13 |
| The Steel Hands | Lady Kalya | 1 | None | 21 | 21 | 1.00 | none | 11 |
| The Steel Hands | Steel Hand | 3 | Medium | 27 | 27 | 1.00 | 12 | 12 |
| The Steel Hands | Steel Hand Crossbow | 2 | None | 24 | 31 | 0.77 | 12 | 11 |
| The Steel Hands | Silent Asher | 5 | Medium | 64 | 49 | 1.31 | none | 13 |
| Carrion Crawler | Carrion Crawler | 3 | Medium | 28 | 27 | 1.04 | 12 | 12 |
| Far Wanderer | Far Wanderer | 6 | Medium | 60 | 60 | 1.00 | none | 13 |
| Cave Fisher Angler | Cave Fisher Angler | 4 | Medium | 37 | 37 | 1.00 | none | 12 |
| Grell | Grell | 5 | None | 80 | 64 | 1.25 | none | 13 |
| Ochre Jelly | Ochre Jelly | 3 | None | 62 | 41 | 1.51 | none | 12 |
| Duergar Dig Crew | Duergar Delver | 2 | None | 31 | 31 | 1.00 | none | 11 |
| Duergar Dig Crew | Drill-Wright | 4 | Medium | 37 | 37 | 1.00 | 12 | 12 |
| Gibbering Mouther | Gibbering Mouther | 4 | None | 52 | 52 | 1.00 | 12 | 12 |
| Lizardfolk of the Dungeon | Lizardfolk Warden | 2 | None | 31 | 31 | 1.00 | none | 11 |
| Lizardfolk of the Dungeon | Lizardfolk Mage | 5 | None | 49 | 64 | 0.77 | 13 | 13 |
| Meenlock Stalker | Meenlock Stalker | 3 | None | 30 | 41 | 0.73 | none | 12 |
| Dark Creeper | Dark Creeper | 2 | None | 24 | 31 | 0.77 | none | 11 |
| Neogi Hatchling Swarm | Neogi Hatchling Swarm | 4 | None | 40 | 52 | 0.77 | none | 12 |
| Dream Squire | Dream Squire | 3 | Medium | 27 | 27 | 1.00 | none | 12 |
| Red Hag | Red Hag | 6 | None | 75 | 75 | 1.00 | none | 13 |
| Phase Spider | Phase Spider | 5 | None | 49 | 64 | 0.77 | none | 13 |
| Necrophage Ghast | Necrophage Ghast | 7 | Medium | 72 | 72 | 1.00 | none | 13 |
| Iron Cobra | Iron Cobra | 4 | Medium | 37 | 37 | 1.00 | 14 | 12 |
| Hitched Scarecrow | Hitched Scarecrow | 3 | None | 41 | 41 | 1.00 | none | 12 |
| Grimlocks of Teveron | Grimlock | 1 | None | 21 | 21 | 1.00 | none | 11 |
| Grimlocks of Teveron | Grimlock Ogre | 4 | None | 52 | 52 | 1.00 | 12 | 12 |
| Grimlocks of Teveron | Ogre Mage Chanter | 6 | Medium | 60 | 60 | 1.00 | 13 | 13 |
| Yeti Howler | Yeti Howler | 5 | None | 64 | 64 | 1.00 | none | 13 |
| Snow Golem | Snow Golem | 4 | None | 52 | 52 | 1.00 | none | 12 |
| Coldlight Walker | Coldlight Walker | 6 | None | 75 | 75 | 1.00 | 13 | 13 |
| Eye of Fear and Flame | Eye of Fear and Flame | 6 | Medium | 60 | 60 | 1.00 | none | 13 |
| Inferno Spider Moltling | Inferno Spider Moltling | 3 | Medium | 27 | 27 | 1.00 | 12 | 12 |
| Hell Hound | Hell Hound | 5 | None | 64 | 64 | 1.00 | none | 13 |
| Star Spawn Mangler | Star Spawn Mangler | 5 | None | 64 | 64 | 1.00 | none | 13 |
| Voidwracked Mage | Voidwracked Mage | 4 | None | 40 | 52 | 0.77 | none | 12 |
| Slaad Tadpole | Slaad Tadpole | 5 | None | 49 | 64 | 0.77 | none | 13 |
| Water Myrmidon | Water Myrmidon | 6 | Medium | 60 | 60 | 1.00 | none | 13 |
| Spirit Naga | Spirit Naga | 7 | None | 87 | 87 | 1.00 | none | 13 |
| Swarm of Flying Snakes | Swarm of Flying Snakes | 2 | None | 24 | 31 | 0.77 | none | 11 |
| Common Feyr | Common Feyr | 3 | None | 41 | 41 | 1.00 | 12 | 12 |
| Vynan Alchemist-Mage | Vynan Alchemist-Mage | 6 | None | 49 | 75 | 0.65 | none | 13 |
| Young Blizzard Dragon | Young Blizzard Dragon | 7 | Medium | 95 | 72 | 1.32 | none | 13 |
| Drakkoth Faterager | Drakkoth Faterager | 5 | Medium | 49 | 49 | 1.00 | none | 13 |
