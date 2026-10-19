# Blind audit: Sejr arcana deck

You are auditing a deck of 35 magic items ("arcana") for a tabletop campaign. You have not seen any earlier review of this deck, and you should not try to guess what one said. Work from the material below only.

## Your job

Find what is wrong, weak, exploitable, or unplayable, and say how strong each card is. You are an auditor, not a co-author: do not rewrite the deck. A suggested fix may be at most two sentences per card.

## How to judge

Use these lenses, in this order:
1. **Rules accuracy.** Every mechanic must work under the Nimble rules reference below. Flag invented terms, wrong action economy, conditions used wrongly, durations that are not units the game or campaign tracks, and features attributed to the wrong class. Quote the card and the rule.
2. **The design standard.** Check each card against the spec's five-part format and its audit checklist (double-dipping, self-sustaining loops, kill-steal incentives, win-win with no real risk, peak-value lethality, memory tracking, narrative friction, automatic social override), plus the spec's refill and clearing rules.
3. **Play in this campaign.** Episodic, drop-in, one gig per session, prep-light GM, a six-card thread board. Can each card's unlock and refill actually happen in that format? Does it create work the GM cannot prep for? Does it skip the generator's twists?
4. **Power.** Rate every card on this scale against the core rules' rarity bands and printed examples: U (Uncommon), R (Rare), VR (Very Rare), L (Legendary), C (campaign-shaping: changes what episodes are about). Give the nearest printed baseline. Then say whether the rating moves at this table, given a lenient GM who has never killed a player.
5. **Generated-content patterns.** Much of this deck was drafted with an AI model. Look for what that produces: template repetition across cards, filler powers added to satisfy a rule, plausible-sounding mechanics that do not work, subjective gates ("genuine", "real") with no test, escalations that hand the work to the GM, claims about canon that the setting does not make, and costs that only look like costs.

Keep rules errors (verifiable) separate from design taste (arguable). Do not count something as a flaw just because it is strong: the GM wants strong items. Do flag strength that deletes play: a power that answers the question an episode is built on.

## Output

Use exactly these sections.

**A. Card table.** One row per card: id, verdict (ship, fix, rethink), the single most important issue, category (rules, checklist, play, power, pattern), severity (blocker, major, minor), and power rating with its baseline.

**B. Findings.** Grouped by lens. Each finding names the card id, quotes the text, and says what goes wrong in play, in one or two sentences. Add a suggested fix where it is short.

**C. Exploits and combinations.** (Include the guilds in section 7 where they interact with cards.) Cross-card or card-plus-class interactions that break something. Say whether each one breaks a fight (acceptable here) or breaks an episode or the campaign (not acceptable).

**D. Deck level.** Diversity of resource types, costs, origins and looks; repetition; the ten fixes you would make first, ranked.

**E. Limits.** What you could not verify, and how confident you are in each section.


## 1. Campaign context

Sejr is an episodic, drop-in Nimble 2 campaign in the City of Arches, a setting where thousands of ancient arches open onto other places and other worlds.

- **Format.** Weekly 3-hour sessions with unknown attendance. One gig (job) per session, built as a bottle episode that works for one player or a full table. Players pick a door (a patron's job in the city, or a trip through an arch); a generator adds a twist ("wrong target", "the goal flips", "the patron is the threat", "an arch or key intervenes") and scene-by-scene interruptions.
- **Arcana in play.** Every hero starts at level 1 with one unexamined arcanum: their class arcanum on a 1-4 on a d6, otherwise a random found arcanum. Absent players tick their arcanum's unlock ritual instead of losing progress. The final unlock step is always played at the table.
- **Keys are power.** Whoever holds a key decides where an arch opens. Patrons control keys, and the city's politics are route politics. A party-owned key is meant to be a mid-campaign prize that offends a patron.
- **Trackers carry memory.** A thread board of six index cards (one thread closes and one opens each episode), hidden Neglect clocks for the outer regions, six-step faction clocks. GM prep is the trackers and nothing else.
- **Tiers.** Found arcana are Minor or Major. Class arcana are 1st echelon (levels 1-4). The found pool is meant to be about 24 cards, diverse in look and mechanics.
- **The GM, in their words:** these items are meant to be stronger than standard magic items, because they exist to drive player engagement. "Broken is not bad, because I will supercharge my combats and situations too." They are a very lenient GM: no player death across 4 systems and 7 groups.
- **Since the first audit, the GM decided:** Major cards stay in the level 1 draw on purpose ("random players, huge powers; I'd be surprised if nothing cataclysmic came from this, and in that lies the fun"). Class arcana and the Forgotten Key are rewards, never drawn; each class arcanum comes from its class guild (section 7). Finite, never-refilling relics are intended. Three guild masters are left blank on purpose. The Drowning Scale's trigger (allies included) and the Hexing Needles' open "kind of roll" (attacks included, no save) are kept by choice.
- **Sources.** Many items are deliberate ports from other systems and real-world myth (Norse, Greek, Egyptian, fairy lore), justified because the arches lead to other realms. Stonetop's arcana are the main inspiration.

## 2. Design standard

The spec below is the GM's own design guide, written for solo design work. Use its checklist as a lens, but it does not bind group play: the GM has accepted finite resources and very strong powers. Where its vocabulary table disagrees with the rules reference in section 3, the rules reference wins.


Binding format and audit spec for all arcana. Source: pasted by the campaign owner; reproduced here unchanged in substance.

---

### The five-part card format

Every arcanum has exactly these five sections, in this order:

```
OBJECT
One or two sentences of physical description that imply a history without explaining it.
Names a place of origin, a maker, or a prior owner. Never generic.

UNLOCK
A deed, not a rest. Story-specific, takes at least one full session to complete.
Structure: 1-2 clear requirements + 1 costly requirement + 1 risk (something that can go wrong).
The unlock is the most important sentence on the card. It tells the player what earning this means.

RESOURCE: [Name] ([type])
One resource per arcanum. Named thematically. Never called "charges."
Types: pip tracker (max N) | d6 vs. accumulation | Wound-cost | toggle (on/off) | session-bound ritual
Refill condition: must require fictional engagement, a world action, not a passive trigger or rest.

POWERS
Written in Nimble action language: (1 Action) | (Free) | (Reaction) | (1/round) | (1/encounter)
At least one power requires spending the resource. At least one is passive or free.
Powers should expand what the class can do, not replicate what it already does.

ESCALATION
What happens when the resource empties, overflows, or is misused.
Should create drama, not just inconvenience. Brings NPCs, factions, or world consequences into play.
The escalation is an invitation, not a punishment.
```

---

### Echelon guidance

| Echelon | Level range | Design brief |
|---------|------------|--------------|
| 1st | 1-4 | Simple resource, single refill condition, escalation generates next session's hook |
| 2nd | 5-8 | More complex resource interaction, unlock requires significant faction/world engagement |
| 3rd | 9-12 | Resource makes demands between sessions, escalation reshapes campaign relationships |
| 4th | 13+ | One per campaign arc. Carrying it is a decision. Enemies exist because of it. |

---

### Core design principles

**No double-dipping.** An item must not reward a player for doing something they already wanted to do. If the class's best action also fills the resource, that is a design problem. Refill should require something the player would not otherwise do.

**No self-sustaining loops.** If the resource can be refilled using what the resource generates (minions -> sacrifice minion -> get resource back), the loop is closed and cost is illusory. Refill must go through the world.

**Refill conditions require fictional engagement.** "Spend time gambling and earn 1 silver in genuine winnings" is a refill. "Roll a die at the start of each session" is not. The refill should be an activity that could appear on the session's agenda.

**Resource trackers must have unambiguous clearing rules.** State exactly when the tracker clears: encounter-end, Safe Rest, Field Rest, world event. If the answer is "it depends," rewrite until it isn't.

**Narrative friction is a design error.** The item's fiction must cohere with class identity. An item built on patron-contact does not work for a class that has lost their patron. An item whose cost is a tracked resource cannot use an untracked one (e.g. Nimble shadow minions: they only exist in combat, are not on the character sheet, and cannot serve as a cost).

---

### Audit checklist (run before finalising any arcanum)

**Double-dipping**
- Does the resource refill when the player does their class's signature move? -> Change the refill trigger.
- Does spending the resource give a bonus on top of what the class already does? -> Cut or distinguish.

**Self-sustaining loops**
- Can the player use the resource's output to pay the resource's refill cost? -> Break the loop. Require the refill to come from outside the item's own economy.

**Kill-steal incentives**
- Does the resource trigger on kills? -> Change to damage dealt, conditions applied, or actions taken, not deaths.

**Win-win with no real risk**
- On a "failure" roll, does the player still get something they wanted? (e.g. a Chaos Mage getting a free upcast on success and a Control Table trigger on failure has no bad outcome.) -> Split the benefit by subclass, or make the failure genuinely costly for both.

**Peak-value lethality**
- Is the item's best ability most useful in situations where using it is most likely to kill the player? (e.g. armor-ignore on an undefended hit against a heavy-armor enemy.) -> Make the cost proactive (pay it before the dangerous moment) not reactive (suffer it during).

**Memory tracking**
- Does any power require remembering a specific number from a previous turn or earlier in the encounter? -> Replace with a value calculable now, from information available now.

**Narrative friction**
- Does the item's unlock, refill, or fiction contradict the class's situation or subclass identity? -> Check specifically: does this item reference a resource or relationship the subclass does not have?

**Automatic social override**
- Does any passive ability remove player agency from social encounters? (e.g. NPCs automatically know when the player detects their lie.) -> Make detection one-directional: the player learns something, the NPC does not learn that the player learned it.

---

### Nimble 2 mechanical vocabulary

| Term | Meaning |
|------|---------|
| Primary Die | The main damage die (d6, d8, etc.), the leftmost die in an attack expression |
| Safe Rest | Full rest (about a long rest), clears most resources |
| Field Rest | Short rest, clears some conditions, recovers some HP |
| Wound | A serious injury tracked on the character sheet, limited in number, significant to lose |
| Dying | Condition when HP = 0; resolved by stabilisation or by death saves |
| Reach N | N x 5 ft range (Reach 1 = 5 ft, Reach 6 = 30 ft) |
| Action / Free / Reaction | Action economy units. Reactions trigger off another creature's action |
| Condition | Named status: Poisoned, Slowed, Taunted, Frightened, Incapacitated, Dying, etc. |
| Armor tier | Unarmored / Medium (M) / Heavy (H), damage filter, not AC |
| Disturbance tracker | d6 vs. accumulation: roll after each use; fail if roll <= current count; resets on world event |

### Nimble 2 system-specific constraints

- **Shadow minions** are not tracked on the character sheet. They exist only in combat. They cannot serve as a meaningful resource cost.
- **The Reaver subclass** (Shadowmancer) has no patron and cannot exceed Pilfered Power. Any item referencing patron communion or Pilfered Power is inaccessible to Reavers.
- **Hunter's Mark** already grants advantage OR +LVL damage on every attack against the marked quarry. Items for the Hunter must provide something the Mark does not: movement control, multi-target tracking, or out-of-combat information.
- **Vicious Opportunist** (The Cheat) is a 1/turn limit. An item that refills when Vicious Opportunist is used is a passive bonus attached to the class's best move, which is double-dipping.
- **Radiant Judgment Dice** (Oathsworn) are rolled on specific triggers. Items that interact with them should clarify whether they modify the roll, the spend, or the trigger.

---

### Reference arcana (worked examples from this project)

**Best-in-class resource mechanics:**
- **Drowning Scale**: Breath (pip, max 4). Refill by harvesting last breaths from dying creatures; a failed roll costs a Condition on top of nothing. Escalation: drain yourself. Best 1st echelon example.
- **Tomb-bog's Mark**: Marks (d6 vs. accumulation). Non-linear risk, the more you use it the more dangerous each use becomes. Refill requires confessing to a faction NPC.
- **Wolf Pelt**: Hunger (pip, max 5). Fills with use, clears only by completing a moonlit hunt between sessions. Escalation: the pelt controls your next turn.

**Best-in-class unlock conditions:**
- "Refuse to deliver a verdict you believe is just, because doing so would protect someone you love." (Oathsworn)
- "Take a hit you could have Defended, to observe how it was made." (Zephyr, original intent before revision)
- "Win a wager against someone who genuinely believed they had the advantage." (Cheat)

**Best-in-class escalations:**
- The Nameless King's insignia becomes briefly legible to everyone present. The GM decides what it says. It goes dark. (Commander)
- The patron writes one sentence about your character into the contract permanently. The GM reads it aloud. (Shadowmancer)
- The skull does not replay what you recorded. It replays something it heard before you found it. (Gibbering Skull)

## 2b. The GM's own arcana rules (from their homebrew companion)

Arcana are magical objects found in the City of Arches and its surrounding regions. They are not simply items with charges, they are relationships between a character and a piece of the world's history.

Standard magic items in most games are inert: find the item, use the item. Arcana work differently. Finding the object and unlocking it are two separate events, often sessions apart. The power is interesting because the cost is interesting. The item has a history. It wants something.

The Five-Part Anatomy of an Arcanum
Every arcanum has five components:

Part
Purpose
Object
What the item physically is and where it was found. One or two sentences of physical description that imply a history without explaining it.
Unlock
A ritual, quest, or ordeal required to awaken the item's power. 2–4 bullet requirements. At least one must be a risk, something that can go wrong.
Resource
The named tracker that makes the power live. One resource per arcanum, with a thematic name. Examples: Strain, Breath, Heat, Vitality, Disturbance, Daylight.
Power
What spending the resource does. Written in Nimble's action language: Action / Reaction / Free / 1/round / 1/encounter.
Escalation
What happens when the resource empties or overflows. Should create drama, not just inconvenience. The item bites back.

Design Rule: One Resource Per Arcanum
Don't stack multiple trackers on a single item. The item's entire identity lives in how its one resource is earned, spent, and exhausted. Complexity should come from the fictional situation, not from the card.

Resource Types
Use these resource templates or create your own. The name of the resource should reflect the item's fiction.

Resource type
Best used for
Pip tracker (max 3–5)
Best for resources earned in the world, last breaths drawn, victims marked, promises extracted. Spending is fast; refilling requires action between sessions.
d6 vs. accumulation
Roll 1d6 after each use. If you roll below your current count, a consequence arrives. Clears on specific in-world action. Creates escalating risk.
Wound-cost HP
Spending the resource costs a Wound in addition to normal use. The HP cannot be healed until the item is rested or a condition is met.
Toggle (on/off)
The item is either active or dormant. Activating it starts a clock or a risk. Deactivating requires a specific action.
Session-bound uses
Clears at each Safe Rest, but only if a ritual or condition is met. Skipping the ritual means the resource stays spent.

The Unlock
The unlock is a session, not a roll. Requirements should take at least one full session to complete, often more. They should involve NPCs, locations, or factions the party already knows.

Structure every unlock with:
1–2 requirements that are clear and actionable (study the runes, find the spirit, return to the mound)
1 requirement that is costly but not impossible (spend a full night at the threshold, eat the raw heart)
1 risk, something that can go wrong and create a different kind of problem

Risk Examples
"The arch opens briefly, something may come through before you can close it."
"Roll STR DC 14 or take 1 Wound from the backlash."
"The spirit finds you unworthy and marks you instead, you have a week before it comes calling."
"You succeed, but the item is damaged. It will need a skilled artisan to repair before it can be unlocked fully."

Escalation
When the resource empties or overflows, something interesting happens, not just "item stops working." The escalation is the most important design element. It creates drama and gives the item a personality.

The wolf pelt fills with Hunger → the pelt takes over, demands a hunt before it will obey again
The bog vial empties → the spirit comes calling, and it knows your name now
The key drains all Resonance → the next arch it opens is always wrong until an Archkeeper repairs it
The codex reaches max Strain → it goes silent for a season; the knowledge inside is locked away

## 3. Rules reference (Nimble 2, condensed from the core rules)

- **Actions.** Heroes get 3 actions on their turn (fewer from a low Initiative roll on round one). Reactions cost 1 action and are used off-turn, each 1/round. "Free" costs no action.
- **HP, Dying, Wounds.** At 0 HP a hero gains 1 Wound and is Dying until they regain HP. While Dying: max 1 action; attacking causes 1 Wound unless a DC 10 STR save succeeds; taking damage causes 2 Wounds (3 on a crit). A hero dies at 6 Wounds. Wounds heal 1 per Safe Rest. A Medical Kit (20 gp, 1 use) recovers 1 Wound during a Field Rest.
- **Monsters** do not take Wounds and do not Defend. Most are unarmored; tougher ones have Medium Armor (-10 damage from incoming attacks) or Heavy Armor (-20). Crits ignore armor. Monsters do not make Opportunity Attacks. Solo and Legendary monsters exist (GM guide).
- **Hero Defense.** Defend is a Reaction: reduce one attack's damage by your Defense. Crits ignore Defense. Unarmored Defense = DEX. Armor adds Defense (examples: Cheap Hides 3+DEX, Wyrmhide 6+DEX (Req. 1 STR, 2,000 gp), Rusty Mail 6+DEX max 2 (15 gp), Half Plate 14 (Req. 3 STR, 200 gp), Full Plate 18 (Req. 4 STR, 2,000 gp), Adamantine Plate 22). Heroes do not have an "Armor" stat; that word is for monsters.
- **Hit Dice** recover HP during rests; all recover on a Safe Rest.
- **Field Rest:** 10 minutes, spend Hit Dice (or 8 hours with food and sleep for max value). **Safe Rest:** a safe location; recover all HP, Hit Dice, mana and class resources, and heal 1 Wound.
- **Skills:** Arcana, Examination, Lore (INT); Finesse, Stealth (DEX); Might (STR); Influence, Insight, Naturecraft, Perception (WIL). Saves: STR, DEX, INT, WIL. A 1 always fails, a 20 always succeeds.
- **Conditions:** Blind, Dazed (heroes lose 1 action; monsters lose their move or 1 attack), Dying, Empowered/Weakened X, Frightened (disadvantage when the source is near, half Speed toward it), Incapacitated (can't do anything; attacks against it have advantage and melee hits crit), Invisible, Poisoned (disadvantage), Prone, Restrained (can't move, attacks against have advantage), Silenced, Slowed (Speed halved during next turn), Taunted. Minor statuses: Smoldering, Distracted, Charged, Hampered.
- **Space.** A space is 5 ft. Speed is usually 6. Reach X affects creatures within X spaces. Range X has disadvantage with an enemy adjacent. Knockback X moves a creature X spaces; Line X is a straight line.
- **Upcast:** spend extra mana on a spell for extra effect.
- **Languages:** Elvish covers Elves, Fey and Sylvan.
- **Magic item rarity (core rules):** Uncommon, levels 2-6, 50-500+ gp. Rare, levels 5-12, 500-5,000+ gp. Very Rare, levels 8-18. Legendary, levels 15-20. Printed examples: Weapon of Wounding (Uncommon): on a hit, take 1d6 to deal twice that extra. Ball of Spiders (Uncommon): WIL save or Frightened in a 2x2, reforms each Safe Rest. Eyes of the Street (Uncommon): see through a rat for 10 minutes, recharge by whispering a secret. Button of Protection (Rare): Reaction, attacker WIL save or misses; a tailor re-sews it at a Safe Rest. Skitter Shoes (Rare): walk on walls at half Speed. Handwraps of Force (Rare): Knockback 2 on Unarmed Strikes. Trinket of Ill Omen (Rare): -1 to your saves, +1 to your save DC. Grim Coronet (Rare): when you would die, take a 3-action turn, then die. Key of Doors (Very Rare): a locked door opens to any doorway you have walked through.
- **Ancestry benchmarks:** Orc Relentless (1/Safe Rest: when you would drop to 0 HP, set HP to LVL). Gnome Optimistic (Free Reaction, Reach 6: an ally rerolls any 1 die; resets when healed to max HP). Halfling Elusive (1/Safe Rest: succeed a failed save).

## 4. Class features the cards refer to (quoted from the class rules)

- **Berserker:** Rage. (1/turn) Action: Roll a Fury Die (1d4) and set it aside. Add it to every STR attack you make. You can have a max of KEY Fury Dice; they are lost when your Rage ends.
- **Berserker:** That all you got?! When you are attacked, you may expend 1 or more Fury Dice to reduce the damage taken by STR+DEX for each die spent.
- **Berserker:** Your Rage Ends... If you leave combat, drop to 0 HP, or go 1 round without attacking or Raging.
- **Berserker:** LEVEL 18 DEEP RAGE. Dropping to 0 HP does not cause your Rage to end.
- **Cheat:** Vicious Opportunist. (1/turn) When you HIT a Distracted target with a melee attack, you may change the Primary Die roll to whatever you like (changing it to the max value counts as a crit).
- **Cheat:** Distracted. A target is Distracted if it is adjacent to (or Taunted by) an ally, or if it cannot see you.
- **Hunter:** Hunter’s Mark. Action: A creature you can see is marked as your Quarry for 1 day (or until you mark another creature). It can’t be hidden from you, and your attacks against it gain your choice of advantage OR +LVL damage (choose before each attack).
- **Hunter:** Thrill of the Hunt. Choose 2 Thrill of the Hunt (TotH) abilities. Gain a charge to use these abilities during that encounter whenever: • You HIT your Quarry in melee. • You CRIT your Quarry at Range. • Your Quarry dies.
- **Mage:** Force of Will. (1/round) On your turn, you may Demand Control for free: Choose 1 option from the Control Table which you haven’t chosen yet; resets when you roll Initiative, or when you have chosen all options once.
- **Mage:** Deny Fate. Whenever you miss with a spell (or if one or more creatures save vs a spell you cast), you MUST Demand Control.
- **Mage:** LOSE CONTROL. Do ALL of the above, but the GM chooses each time.
- **Mage:** How does Lose Control work? You’ll likely never want to pick that option but the 4th time in an encounter you Demand Control, you must pick it. The GM uses I INSIST, ELEMENTAL AFFLICTION, and NO; choosing the targets, spells, and other effects.
- **Mage:** Force of Chaos. Whenever you cast a spell, you can choose to spend 1 less mana by Invoking Chaos: Roll on the Chaos Table. Whenever you crit you may also Invoke Chaos.
- **Oathsworn:** Radiant Judgment. Whenever an enemy attacks you, roll and set aside 2d6 Judgment Dice (if you currently have none). They are expended on your next Reach attack this encounter, dealing their total as extra radiant damage (they are lost on a miss).
- **Oathsworn:** Lay on Hands. Gain a magical pool of healing power. This pool’s maximum is always equal to 5×LVL and recharges on a Safe Rest. Action: Touch a target and spend any amount of remaining healing power to restore that many HP.
- **Oathsworn:** Sacred Decree. Learn 1 Sacred Decree.
- **Shadowmancer:** Pilfered Power. You can steal power from your Patron to cast tiered spells (DEX times before they notice). If you exceed this limit, your Patron damages you for half your max HP as recompense. This resets as you commune with your Patron during a Safe Rest.
- **Shadowmancer:** Hollow One. Cut off from your Patron, you can no longer cast Shadow Blast, nor can you cast tiered spells using Pilfered Power. However, as a parting token, you have stolen a secret from your Patron: the magical Bonescythe, a weapon of sinew and bone, infused with shadowy magic.
- **Shadowmancer:** Summon a magical Bonescythe, a melee weapon. (Reach 2) 2d12 slashing+DEX necrotic damage to EACH die (add 1 extra damage die every 5 Levels). On hit (or when combat ends): it shatters and must be resummoned to use again. Invocations affecting Shadow Blast affect your Bonescythe instead.
- **Shepherd:** • Mend. 1 Action: (WIL/Safe Rest) It restores WIL d20 HP to a Dying creature.
- **Shepherd:** My Buddy! Learn the Lifebinding Spirit cantrip.
- **Shepherd:** Searing Light. 1 Action: (Reach 6) Whenever you heal HP, you may expend 1 use of Mend to damage another target for the amount of HP recovered.
- **Songweaver:** Songweaver’s Inspiration. (2×WIL times/Safe Rest) Free Reaction: Allow an ally to reroll any single die or increase the result rolled by 1.
- **Songweaver:** Perform! Whenever you perform in a place that inspires you, or exchange barbs with another competent wordsmith during a Safe Rest, you may choose different Songweaver options available to you.
- **Stormshifter:** Beastshift. Action: Transform into a harmless beast (squirrel, pigeon, etc.). While transformed, you can speak with animals. Beastshift lasts until you drop to 0 HP, cast a spell, or if you end it on your turn for free.
- **Stormshifter:** Direbeast Form. You can Beastshift into a Direbeast form DEX times/encounter (for up to 1 min). You know the Fearsome Beast form.
- **Zephyr:** Iron Defense. Your Defense is DEX+STR as long as you are unarmored.
- **Mage, Control Table:** CONTROL TABLE Magic is Dangerous. You can stitch its fraying edges together to your own benefit… for a time. Precise Casting 1+ Mana Choose 1 creature per mana spent to be unaffected by a spell you cast. Stretch Time Reduce the action cost of a spell by 1 (min 1). 2 Mana I INSIST. Cast a cantrip for free, ignoring all disadvantage; it cannot miss. ELEMENTAL AFFLICTION. A creature of your choice within 12 spaces gains the Charged, Smoldering, or Slowed condition. NO. Choose a creature; it cannot harm a creature of your choice during its next turn.

## 5. Setting names used on the cards

These names appear on the cards and exist in the setting books. Treat them as canon. Treat any claim about them that goes beyond this list (who wants what, what a place sells or allows) as possibly new canon and say so.

- City: Archkeepers (greet arrivals through the arches, watch the arches; arrivals usually have no memory), Golden Order (queen, Golden Council, Golden Knights), Black Hand (criminal guild, Lower Reaches), Mages of Kartan (Tower of the Arcane, with hidden laboratories below), Seekers of the Sun (relic-restoring guild based at the Museum of Worlds Beyond, led by Vinnic Longshanks), Knights of the Nameless King (cult of the fallen tyrant), Children of Ibraxus (demon cult), Temple of the Three Sisters, Theater of Whispers (amphitheater with mysterious sublevels), Library of Vrassa (bigger inside), Observatory of Infinite Skies (scholars peer into other worlds), Sunset Grove (magical park, druid Graysen One-Eye), Vathrex's Forge (ziggurat forge run by the minotaur Erna Ironhorn), Market Square, Sevenge and Gam's Public House, Cliffs of the Dead (tombs; Royal Tombs, Cenotaph of Queen Sett), Lost Cisterns, Sunken Revvia (ruined ancient city beneath the city), Citadel of the Golden Knights.
- Lower Reaches: Black Goat's Tavern (owner Vynan Halfhorn; violence there is fatal to the violent; no Black Hand protection), Temple of the Lower Twelve (twelve profane gods), Lost Cavern of the Sundering Saurians (underground jungle, war-bred dinosaurs).
- Revlend Marshes (north): Revlenders in stilt villages such as Heron's Stride, Drowned Elvenya (sunken temple of starlit elves), Bloodrust Cove and its red-hued Bloodrust Depths (pirates).
- Doorish Hills (south): Briarheart Forest and the Arch of Flowers (faerie archway), the Sisters of Dusk (hag coven ruling the village of Elgrym for the vampire Lady Straythe), Watchtower of Averost (the Blood Spears, raiders of the Nameless King, with a hidden archway to the hell world Irax), Sevelet's Throne.
- Deadlands (west): Graydust Keep (changed hands hundreds of times; held by the Fallen Angels war band), Oasis of Mother's Tears, Lost City of Thryne, Sett's Ziggurat, the Shattered Teeth mountains.
- Worlds beyond the arches: Drendaan (endless sea, derelict ships hung in miles-high glowing vines), Drakeholm (land of dragons), Terrache (vast cavern with a great sea), Arkus (world of dead temples, undead priests), Eruwynd, Io, Korax, Maphotar, Threska, Vynan, Deathreach.
- History: the Nameless King built the city of arches and was cursed out of history by the Army of the Blue Star; Delenith, City of Towers, vanished; Ovelek the Gray Worm was a primordial titan.

## 5b. Table rules for arcana

Small house rules that sit beside the cards. The cards themselves live in `data/sejr_arcana.json`.

### Hero creation
- Draw one found arcanum from the 23 cards in `other_arcanum`. Major cards are in the draw on purpose: the unlock is the gate, and a starting hero holding a campaign-changing relic is part of the fun.
- Take a holding, or join your class guild (`data/sejr_guilds.json`).
- Class arcana are never drawn. A hero earns their class arcanum at Journeyman rank in their class guild. The Forgotten Key is a faction reward only.

### Off-screen refills
- Between episodes, each hero may make one refill off-screen, if it can be done inside the city: a vigil, a game of chance, a retelling to a new listener, an Archkeeper's record, a burial on the Cliffs of the Dead, hair, blood or cloth freely given (Hexing Needles). Absent players may use it too, alongside their arcana-ritual tick.
- Say it in one sentence in the next episode's "last time" line.
- A refill that needs a place beyond the city needs a gig: the Revlend Marshes, Bloodrust Depths, the Lost Cavern of the Sundering Saurians, a world beyond an arch. That gig is a ready-made hero stake, and it takes the party to a region your Neglect clocks track.

### Guild masters
- Three guilds have no master yet (the Wardens' Lodge, the Sworn Chapter, the Hollow Circle). Name them at the table when a hero first walks in.

## 6. The cards

Class arcana first, then found arcana. Each class arcanum belongs to the class named.

### The Ancestor's Knucklebone
`class_berserker` · class arcanum, Berserker

**Object.** A knucklebone worn smooth by a hundred years of handling, threaded on gut string. Taken from the body of a Berserker who died fighting in the Borderlands and was never retrieved. It arrived in a collector's satchel through one of the Market Square arches, and nobody knows which world it came from, or who carried it through.

**Unlock.**
- Defeat an enemy in single combat without any ally's assistance: no ally attacks it, heals you, or gives either of you a condition or advantage.
- Keep one of the body's hand bones.
- Spend a night alone with it before you sleep, and see how the ancestor fought.
- Risk: At dawn, make a WIL save, DC 12. On a failure, the ancestor's last fight plays out in you: take 1 Wound you do not remember taking, and whatever hunted them learns where you sleep.

**Resource: Fury Echo (pip tracker).** Fury Echo (pip tracker, max 3). Gain 1 Fury Echo each time you tell a listener who has not heard it how the ancestor fought and fell, in full, over at least ten minutes. Echo never clears at a rest or when combat ends. Spent Echo returns only by telling it again to a new listener.

**Powers.**
- Echo Strike (Free, while Raging, spend 1 Fury Echo): Roll a Fury Die and set it aside with the rest, up to your maximum. This does not use your Rage action. The die follows the Fury Die rules and is lost when your Rage ends.
- Death's Door (Free, 1/encounter, when you Rage, spend all 3 Fury Echo): For this encounter, your Rage does not end when you drop to 0 HP. Dying applies as normal.

**Escalation.** If you drop to 0 HP with Death's Door active, the knucklebone cracks at once and stops working. Your Rage still holds for the encounter. Replace it with another ancestor's relic from the Borderlands, or take one from a worthy enemy. The GM decides where it is and how long the search takes. Whatever hunted the ancestor learns the bone has moved. Roll a d6 on the table below, or choose.

*Where the replacement relic is (d6):* 1 Sevelet's Throne, among the warring souls (Doorish Hills); 2 the Watchtower of Averost, on a Blood Spear's skeletal veteran (Doorish Hills); 3 under the offerings at the Cairn of the Last Titan (Doorish Hills); 4 the Red Sand's Bout Rolls name a fighter buried with one; 5 Mirewraith's Barrow, with the Eternal Blades (Revlend Marshes); 6 on the next enemy who nearly beats you.

### The Loaded Die
`class_cheat` · class arcanum, Cheat

**Object.** An ivory gambling die with a tiny lead insert that makes it land on 6 roughly two-thirds of the time. Confiscated from a Black Hand card sharp at the Lower Reaches gambling house, then stolen from the evidence shelf at the Golden Knights' outpost. No paperwork exists for it. The card sharp has not stopped looking.

**Unlock.**
- Win a wager against someone who genuinely believed they had the advantage: not a mark, not a fool, but someone who should have won.
- Stake something you cannot afford to lose.
- Risk: After the wager, the loser rolls Insight against your Influence roll. If they win, they know the die was loaded, and they name you to the Black Hand card sharp.

**Resource: Fixes (pip tracker).** Fixes (pip tracker, max 4). Fixes do not refill automatically. To refill: run a game of chance during a Safe Rest and earn at least 1 silver in genuine winnings against an opponent who had a real chance of winning. Gain all 4 Fixes back. Safe Rests where you do not gamble leave the tracker as it is. Fixes return only this way.

**Powers.**
- Fix (Free, before you roll, spend 1 Fix): Declare you are using the die. Roll your Primary Die twice and take whichever result you prefer. No memory required, both rolls happen now, in front of everyone.
- Loaded Odds (Passive): Once per session, you may ask the GM whether a creature you can see is bluffing. The die rolls and the GM answers truthfully, but only yes or no.

**Escalation.** When all 4 Fixes are spent, the die gets you anyway. On your next Vicious Opportunist use after depletion, the GM secretly decides whether the target was actually Distracted, and you do not know until after you have committed. The uncertainty lasts for one use only. Word that a loaded die is back in play reaches the card sharp within a session.

### The Battle Standard of the Nameless King
`class_commander` · class arcanum, Commander

**Object.** A black iron battle standard, the insignia ground off but the pole still bearing ghost-traces of a name no one can read. Found stacked with other confiscated relics in the Museum of Worlds Beyond storage vault. The curator is looking for it. Three scholars have separately attempted to identify the insignia's origin and stopped work without explanation.

**Unlock.**
- Lead a group of at least five non-party combatants to victory: soldiers, militia, hired swords, anyone you commanded in the field. The victory must be real, a fight that could have been lost.
- Plant the standard yourself, in plain sight of the enemy.
- Risk: The first time you plant it, roll a d6. On a 1-3, someone in the watching crowd or the enemy ranks recognizes the standard, and the Knights of the Nameless King send an agent within two sessions.

**Resource: Authority (pip tracker).** Authority (pip tracker, max 3). Gain 1 Authority whenever an ally within 4 spaces of the planted standard deals damage in a single attack equal to or greater than your level, at most 1 Authority per attack. Authority is strictly encounter-bound: all unspent pips are lost when combat ends, regardless of how many are held. It cannot be saved or stockpiled between encounters.

**Powers.**
- Plant it (1 Action): Drive the standard into the ground within Reach 1. While it stands, allies within 4 spaces who can see it have advantage on their first attack each round. Spend 1 Authority to extend the aura by 2 spaces until your next turn.
- Pull it (Free): The standard returns to your hand and the aura ends immediately.
- Hold Ground (Reaction, spend 2 Authority): When the standard would be knocked over, stolen, or destroyed, it refuses. It cannot be moved by any force until the start of your next turn.

**Escalation.** When Authority is at 0 during combat and you plant the standard anyway, the insignia becomes briefly legible to everyone present. The GM reads what it says aloud. It goes dark again immediately. What it says is the GM's tool: a name, a title, a command. Prepare it before the session. Roll a d6 on the table below, or choose.

*What the insignia says (d6):* 1 a name, and a Knight of the Nameless King in the crowd answers to it; 2 a title: the captain of a company that died here; 3 a command: "Hold until I return"; 4 a place: Sevelet's Throne; 5 a date: the next Final Rest of the Nameless King; 6 your own name.

### The Borderlands Tracking Cord
`class_hunter` · class arcanum, Hunter

**Object.** A length of braided sinew hung with small carved tokens: a boot print, a feather, a fang, and three others worn unrecognisable by handling. Carried by a tracker from the Doorish Hills who traded it to a Lower Reaches merchant for safe passage through the Cliffs of the Dead. The merchant did not survive the arrangement.

**Unlock.**
- Track a single creature across at least two sessions without losing the trail, through city, ruin, or wilderness. The creature must be aware it is being hunted, and must have tried to lose you at least once.
- Risk: Each session you track the creature, the GM rolls a d6. On a 1, it doubles back and ambushes you, and it acts first in the next encounter.

**Resource: Marks (d6 vs. accumulation).** Marks (d6 vs. accumulation). Your Mark count is the number of quarries the cord currently tracks. Each quarry takes one token, so the cord tracks no more quarries than it has unburned tokens (six to begin with). Roll 1d6 each time you use a cord ability (Mark a Quarry or Cord Pull). If you roll equal to or below your current Mark count, something near the quarry noticed you. A Mark clears when you confront that quarry directly or when you Cut its Mark. Resting does not clear Marks.

**Powers.**
- Mark a Quarry (1 Action): Touch the cord to any physical trace of a creature: a footprint, a drop of blood, shed skin. Add 1 Mark. While that quarry is marked, you know its general direction and distance within 1 mile regardless of cover or concealment. This works on creatures you have not marked with Hunter's Mark, because the cord marks independently of the class ability.
- Cord Pull (Free, 1/encounter): When your marked quarry moves away from you, pull the cord taut. The quarry is Slowed (Speed halved on its next turn). No roll required. The quarry feels it.
- Cut the Mark (Free): Remove one Mark from the cord and burn its token. The cord forgets that quarry, your sense of its direction ends, and it is no longer tracked. Use this when the pursuit is no longer worth the rising risk. Nothing alerts the quarry.

**Escalation.** When the d6 roll triggers, the quarry, or something near it, begins tracking you in return. The GM introduces this threat within 1 to 2 sessions. The threat is proportional to what you marked: a city rat sends a rat, a Borderlands warlord sends soldiers.

### The Cracked Lens of Kartan
`class_mage` · class arcanum, Mage

**Object.** A monocle lens of blue glass, cracked through the centre but held in a copper frame that prevents the crack from spreading. Stamped with the Mages of Kartan's maker's mark on the inner rim. The Mages report it stolen. It has been in a Lower Reaches pawn shop for six months, priced too high for anyone who recognised it, too strange for anyone who didn't.

**Unlock.**
- Pay the pawn shop's price, which is more than the lens is worth.
- Spend a week of downtime studying the crack through the lens, and make an Arcana check, DC 12, to read the maker's mark. On a failure the week is spent and you start over.
- Then cast a spell of the highest tier you can cast, with the lens held to your eye for the whole cast.
- Risk: When the cast ends, the crack pulls at your eye. Make an INT save, DC 13. On a failure the lens fails as its Escalation describes: take 1 Wound, the lens fuses to your face until the encounter ends, and Kartan is told. If you flinch or remove the lens, the crack spreads and it is ruined.

**Resource: Overcharge (d6 vs. accumulation).** Overcharge (d6 vs. accumulation). Roll 1d6 each time you cast a tiered spell while wearing the lens. If you roll equal to or below your current Overcharge, the lens fails (see Escalation). On a safe roll, add 1 Overcharge. Overcharge clears when you hold the lens to the glass of the Observatory of Infinite Skies through one night.

**Powers.**
- Controlled Upcast (on a safe roll, +1 Overcharge, Control subclass): The spell gains one Upcast for free.
- Chaos Bloom (on a safe roll, +1 Overcharge, Chaos subclass): If you Invoke Chaos with this spell, roll on the Chaos Table with advantage.
- Chaos Sight (Passive, while worn): You see magical auras on creatures and objects within 4 spaces without casting a spell. Illusions appear slightly wrong. Invisible creatures show as a faint shimmer.

**Escalation.** When the d6 triggers, the glass heats to burning. Control Mage: you Lose Control, doing every option on the Control Table, with the GM choosing each time. Chaos Mage: you Invoke Chaos with disadvantage. Either way you take 1 Wound and cannot remove the lens until the encounter ends, because it has fused to your face. After the encounter, the Mages of Kartan sense the discharge and know its rough location. They send someone within 1 to 3 sessions. The fusing is now, the visitors are later.

### The Broken Verdict
`class_oathsworn` · class arcanum, Oathsworn

**Object.** A set of golden scales, one pan snapped off and missing. Recovered from the rubble of an old court in the ruins of Sunken Revvia. The remaining pan still tilts when a lie is spoken nearby, or so the merchant who sold it claimed. She may have been lying. The tilt is subtle enough that you cannot always be certain.

**Unlock.**
- Refuse to deliver a verdict you believe is just, because doing so would protect someone you love.
- The refusal must be genuine. The Verdict will know if you were simply afraid.
- Risk: The GM starts a six-step clock for whoever was owed the verdict. It ticks whenever you are seen shielding the person you chose, and when it fills they act against you both.

**Resource: Held Judgment (toggle).** Held Judgment (toggle, on/off). When your Radiant Judgment would roll Judgment Dice, you may put them on the scales instead, which turns the toggle on. While the scales hold dice, you roll no new Judgment Dice. Held dice stay on the scales past the end of the encounter. The toggle clears when you Release the dice on an attack, or when a Sacred Decree is performed for you (see Escalation).

**Powers.**
- Hold Judgment (Free, when Judgment Dice would be rolled): Keep the dice on the scales. While they are held, you see the remaining pan tilt when a creature within 6 spaces lies to you, visible only to you. You know. They do not know you know. You must decide what to do with that.
- Release (Free, 1/encounter, on a Reach attack): Expend the held dice as Radiant Judgment normally does. This attack's radiant damage ignores armor.

**Escalation.** If the scales hold dice through a full Safe Rest, they fuse with your Lay on Hands pool. You cannot spend from the pool until a Sacred Decree is performed at the Temple of the Three Sisters, by you or, if you know none yet, by a priest there. The temple will want to know why.

### The Hollow Contract
`class_shadowmancer` · class arcanum, Shadowmancer

**Object.** A slip of black vellum the size of a playing card, written in a language that changes every time you look away. No ink is visible: the text appears to be burned into the material from within. Found pressed between the floorboards of a sealed room in the Lower Reaches, below a building that has been empty for eleven years. The landlord will not say why.

**Unlock.**
- Patron path: commune with your patron during a Safe Rest and ask it for something you know it does not want to give. Accept its counter-demand before you know what it is.
- Reaver path: you have no patron to ask. Read the vellum by your own shadow, in the room where it was found, for three nights, until the language stops changing.
- Risk: Patron path: the counter-demand is whatever the GM names, and you have already agreed to it. Reaver path: make a WIL save, DC 12, each night, and each failure starts you with 1 Debt before you have any power. Either way, your patron, or the patron you left, learns the contract has a new reader.

**Resource: Debt (pip tracker).** Debt (pip tracker, max 4). Mark 1 Debt each time you use one of the contract's powers. Debt clears when the patron collects (see Escalation), or when you carry out a sentence you wrote in the contract: write one sentence in your own blood describing something you will do for the patron, then do it. You must write something real, and you must mean it.

**Powers.**
- Read the Contract (Free, 1/encounter, mark 1 Debt): Hold the vellum up. You see one true fact about a creature you can see: its most urgent want, its deepest fear, or the name of someone it has wronged.
- Patron's Margin (Free, 1/encounter, mark 2 Debt, patron path): Cast one tiered spell you know at +1 tier above your current maximum. The patron extends credit.
- Reaver's Margin (Free, 1/encounter, mark 2 Debt, Reaver path): Your next Bonescythe strike this turn rolls one extra d12.

**Escalation.** When Debt reaches 4, the patron collects. It does not take power. It adds one sentence about your character to the contract, permanently. The GM decides what it says and reads it aloud. Debt clears. The sentence stays. A Reaver's contract still answers to the patron they left: that patron writes the sentence, and sends an agent to read it to them in person. Roll a d6 on the table below, or choose.

*The sentence the patron writes (d6):* 1 They will refuse help once, when it matters most.; 2 They owe me the name of someone they love.; 3 They will open a door they were told to leave shut.; 4 Their shadow answers to me first.; 5 They will come back to the sealed room.; 6 They will keep one promise I choose, whatever it costs..

### The Bell of the Three Sisters
`class_shepherd` · class arcanum, Shepherd

**Object.** A small iron handbell, tarnished green at the rim, engraved with three interlinked rings. Identical to the bells carried by the clergy of the Temple of the Three Sisters, except that this one rings slightly differently, a half-note flat or sharp depending on who you ask. The temple says it was never consecrated. They are interested in recovering it for study. They have not offered to pay.

**Unlock.**
- Heal a creature you expected, and had good reason, to be your enemy, spending healing that an ally needed.
- The expectation must be genuine. The bell listens.
- Risk: The first time you ring it at the Temple of the Three Sisters, the clergy ask who consecrated it. Make an Influence check, DC 14, to answer without lying. On a failure they take the bell for study until you run an errand for them.

**Resource: Resonance (pip tracker).** Resonance (pip tracker, max 4). Gain 1 Resonance by ringing the bell for an hour over a sickbed or a grave, at the Temple of the Three Sisters or among the tombs of the Cliffs of the Dead, and staying with whoever it is for until the hour ends. Resonance does not clear at a rest. Spent Resonance returns only this way.

**Powers.**
- Ring Out (Free, spend 1 Resonance): One Dying ally within 6 spaces hears the bell. On its next turn it acts as if it were not Dying: no 1-action limit, and no STR save to attack. It is still Dying, and still takes Wounds from damage.
- Chain Heal (Reaction, spend 2 Resonance): When your Lifebinding Spirit heals a creature to maximum HP, the excess healing carries to the nearest damaged ally within 4 spaces. The chain triggers once per Reaction.
- Toll (1 Action, spend all 4): Ring the bell loudly. All Dying allies within 6 spaces gain 1 HP and are no longer Dying. You take 1 Wound.

**Escalation.** Spending all 4 Resonance in the Toll cracks the bell's handle. It still rings, but you cannot Toll until a clergyperson of the Three Sisters rehandles it. They will want to know what happened before they agree to help.

### The Theater of Whispers Setlist
`class_songweaver` · class arcanum, Songweaver

**Object.** A folded sheet of vellum with a handwritten set of songs: titles, keys, and performance notes in the margins in an elegant hand. It belonged to a Songweaver who performed at the Theater of Whispers for fifteen years before disappearing mid-run. The theater kept the setlist. Someone stole it last month. The manager has posted a reward, but is vaguer than expected about what they want to do with whoever took it.

**Unlock.**
- Perform at the Theater of Whispers, or any venue with an audience of 20 or more, and hold the crowd's full attention for an uninterrupted hour. No skill check. Just perform.
- Find someone who heard the setlist's owner perform, and learn the last song, which has no title.
- Risk: Someone in that crowd knows the hand that wrote the setlist. Make a Perception check, DC 13, to spot them before they leave. On a failure they find you first, within a session.

**Resource: Crowd (d6 vs. accumulation).** Crowd (d6 vs. accumulation, max 4). Each time you Call the Song in combat, roll 1d6 against your current Crowd, then add 1 Crowd. If you roll equal to or below your Crowd before adding, someone recognises the song and has feelings about it: you have disadvantage on your next social roll with a stranger this session. Crowd cannot pass 4; at 4 you cannot Call the Song until it clears. Crowd clears when you play a full uninterrupted hour for a new audience of 20 or more.

**Powers.**
- Call the Song (Free, in combat, 1/round): Name the song you are playing and roll against your Crowd. The first safe roll each encounter returns 1 spent use of Songweaver's Inspiration.
- Protective Verse (Free, 1/encounter, remove 2 Crowd): A specific song from the setlist grants immunity to the Taunted or Frightened condition to all allies within 6 spaces until the end of the round.

**Escalation.** When Crowd reaches 4, someone in the crowd knows who this setlist belonged to. They approach between encounters, or send someone. The GM decides who and what they want. They may be a fan. They may not. Roll a d6 on the table below, or choose.

*Who knows the setlist (d6):* 1 the missing Songweaver's apprentice, who wants it back; 2 a creditor the missing Songweaver owed; 3 a Whisperer, selling the story to Roselyn Zeshe; 4 a devoted fan who wants you to finish the set; 5 the thief who stole it last month; 6 the missing Songweaver, in disguise.

### Mud from the Revlend Marshes
`class_stormshifter` · class arcanum, Stormshifter

**Object.** A sealed clay jar of dark grey mud from the Revlend Marshes north of the city, marked with protective runes no one recognises as any known system. The mud is warm to the touch and smells of rain before a storm. It never dries out. An arch-traveller carried it into the city claiming the marshes spoke to her. She didn't explain further. She is not currently available to explain anything.

**Unlock.**
- Spend a full night alone in the Revlend Marshes, or in the Deadlands adjacent to them, without shelter or fire.
- Something in the marshes must acknowledge you before dawn. You will know if it did.
- Risk: At dawn, make a WIL save, DC 13. On a failure, the marshes keep something small from you (the GM names it: your first name, the color of your eyes, the sound of your laugh) until you carry the jar back and refill it.

**Resource: Earthpulse (pip tracker).** Earthpulse (pip tracker, max 4). The jar holds 4 Earthpulse when it is full. Using the mud spends Earthpulse (see Powers). Spent Earthpulse returns only when you carry the jar back to the Revlend Marshes and leave it there overnight. A rest does not refill it.

**Powers.**
- Apply (1 Action, spend 1 Earthpulse): Smear the mud on yourself or a willing creature. While it is applied, the creature cannot be pushed, thrown, or moved by non-magical forced movement. Mud washes off in rain or after a Field Rest.
- Extend the Beastshift (Free, spend 2 Earthpulse, once per Beastshift): Until the end of this encounter, casting spells does not end your Beastshift. It still ends at 0 HP or when you end it.
- Mire (1 Action, spend all 4): Create a 3-space radius of difficult terrain centered on you that lasts until the end of the encounter. The ground thickens and pulls. Any creature that starts its turn in the mire is Slowed.

**Escalation.** When the jar is empty, mud already applied does not dry, but no new mud can be applied until the jar is refilled. If the jar breaks, the mud it held dries at once and all its effects end. A skilled craftsperson can repair a broken jar, but the marshes must still refill it. Each time you return to refill it, the marshes have changed, and the GM says how. Roll a d6 on the table below, or choose.

*How the marshes have changed (d6):* 1 the water has risen, and Heron's Stride stands on its last stilts; 2 a path of stones now leads to where you slept; 3 the GM reveals one step of the Revlend Marshes' Neglect clock; 4 something has left a gift where you leave the jar; 5 the mud smells of a different storm: the next refill takes two nights; 6 Revlenders ask you to carry a message back to the city.

### The Pain Teacher's Wrappings
`class_zephyr` · class arcanum, Zephyr

**Object.** Linen hand wrappings, yellowed and stained, covered in faded ink annotations, technique notes in a script that predates the city. Found in a locked case in the Lower Reaches beneath a martial arts studio that has been occupied by different teachers for four centuries. Each teacher added their own notes in the margins. The last teacher's annotations stop mid-sentence, mid-technique.

**Unlock.**
- Study the wrappings' first annotation for a week of downtime.
- Then take a hit in combat that you could have Defended but deliberately chose not to, in order to observe how the attack was made. The choice must be your own. The wrappings can tell the difference between courage and negligence.
- Risk: If the hit drops you to 0 HP, the wrappings do not count it. You take the Wound and must try again after you recover. The last teacher's notes stop mid-technique, and whoever silenced them hears the wrappings are in use.

**Resource: Strain (Wound-cost).** Strain (Wound-cost). Each annotation you use costs 1 Wound. There is no tracker, only the Wounds. A Medical Kit, healing magic and other effects cannot remove these Wounds; they heal only by Safe Rest, 1 per rest.

**Powers.**
- Study the Form (Free, spend 1 Wound, 1/encounter): Before you attack a creature, spend 1 Wound to activate the wrappings' oldest annotations. For the rest of the encounter, your attacks against that creature ignore its armor. You are choosing to hurt yourself to learn faster.
- Deepest Annotation (Free, spend 1 Wound, 1/Safe Rest): Your unarmed and martial weapon attacks deal bonus damage equal to your level for 1 minute.
- Study (downtime, 1 hour per Safe Rest): Spend an hour reading the annotations during rest. Roll Lore DC 8 to learn something about a martial tradition relevant to the current adventure arc. The GM provides one true detail.

**Escalation.** If you use either annotation while you have 3 or more Wounds, from any source, the wrappings tighten around your hands: take 1 additional Wound and you cannot use either annotation for 1 round. The annotations become illegible until a skilled martial artist re-inks them. Finding one is the GM's hook.

### The Forgotten Key
`forgotten_key` · found, Minor

**Object.** A tarnished iron key, not sized for any human lock. Found in rubble beneath the Theater of Whispers, its bow etched with a spiral that matches no arch in the city's records.

**Unlock.**
- Present it to each of the city's seven major arches while the Archkeepers watch
- Find the one arch that hums
- Spend a full night at its threshold
- Risk: The arch opens briefly. Hold it with a Might check, DC 13, or something comes through before you close the way. Closing it then takes a Lore check, DC 12.

**Resource: Hum (pip tracker).** Hum (pip tracker, max 3). Spend 1 Hum each time you Open the Way. Regain 1 when you carry the key to an arch you have not yet tried it on and an Archkeeper records what the arch did. Hum never returns at a rest.

**Powers.**
- Open the Way (Action, spend 1 Hum): A dormant arch opens for up to a minute. Make a Lore check, DC 12, or you cannot control where it leads. A crit lets you sense the destination first.
- Tuning (Passive): The key hums faintly within 6 spaces of a dormant arch.

**Escalation.** Spending the last Hum, roll a d6. On 1-2 the key splinters, and every arch it opens leads somewhere wrong until an Archkeeper repairs it. On 3+, take 1 Wound.

### The Drowning Scale
`drowning_scale` · found, Minor

**Object.** A cold, clammy pendant on a leather cord, a single shimmering scale of unknown origin. When first worn, everyone nearby shivers. It was pulled from the water at Drowned Elvenya in the Revlend Marshes, and nobody knows what it came off.

**Unlock.**
- Wear the pendant ceaselessly for a full lunar cycle, answering its whispered questions honestly each night
- Hold yourself underwater until you genuinely risk drowning
- Risk: Make a STR save, DC 14, or take 1 Wound. Each night's honest answer is a secret the GM may make true in the fiction.

**Resource: Breath (pip tracker).** Breath (pip tracker, max 4). Gain 1 Breath each time you draw a creature's last breath (see Last Breath). All Breath is lost when you take the pendant off. A rest does not clear it.

**Powers.**
- Last Breath (Reaction, 1/round): When a creature within Reach 2 drops to 0 HP, other than one you created or summoned, you draw its last breath and gain 1 Breath. Make a WIL save, DC 12, or gain a Condition of the GM's choice from Frightened, Dazed or Slowed until the end of your next turn.
- Cold Skin (Passive): While you hold any Breath, you are immune to cold damage and to the dangers of extreme cold.
- Hold the Breath (Free, spend 1 Breath): You go without air for up to one hour.
- Choke (1 Action, spend 2 Breath): A creature within Reach 2 gasps. It makes a STR save, DC 13, or is Incapacitated as it chokes, until the end of its next turn. The whispers tell you its name.

**Escalation.** If you try to use the pendant with no Breath, make a WIL save, DC 12, or you inhale your own breath: take 1 Wound and become Dying at once.

### The Axe of Nine Eyes
`axe_of_nine_eyes` · found, Major

**Object.** A silvery greataxe with nine open eyes engraved down the blade. They follow whoever speaks. It came out of Graydust Keep, which has changed hands hundreds of times since the fall of the Nameless King, and the Fallen Angels who hold the keep now want it back.

**Unlock.**
- Learn what the axe was called before it was named, from Archkeeper records or something older than the Golden Order
- Let it name a creature in a room you thought was empty
- Hold the line against that creature until it flees or dies
- Risk: The creature's side now knows your name, and the GM starts a six-step clock for them.

**Resource: Eyes (finite never-refill).** Eyes (finite, 9). Each Name It closes one eye. A closed eye never reopens, and nothing refills the axe.

**Powers.**
- Name It (Action, spend 1 Eye): Choose one creature you can see. You learn its True Name and have advantage on checks against it.
- Named (Passive): You always know the direction and distance of any creature you have Named.
- Speak the Name (Reaction, 1/encounter, when a Named creature you can see starts its turn): It loses one action this turn. WIL DC 14 negates; Solo creatures save with advantage.

**Escalation.** Named creatures learn your name and heading each dawn. When the ninth eye closes, the axe speaks your True Name and all nine hear it. One engraved eye is scraped blank.

### The Hourglass of Borrowed Time
`hourglass_of_borrowed_time` · found, Major

**Object.** A brass hourglass whose sand climbs upward. The Library of Vrassa has no record of lending it, and no record of getting it back.

**Unlock.**
- Watch one full night without sleeping
- Tell an NPC, truthfully, the moment you would undo
- Risk: The sand climbs for a stranger first. They relive their last hour, and they remember you. Make a WIL save, DC 12, or the hour comes out of your own life: lose 1 Hit Die until your next Safe Rest.

**Resource: Sand (pip tracker).** Sand (pip tracker, max 3). Spend 1 Sand each time you Turn Back. Regain 1 by returning to the place where you last turned time back and letting the glass run for an hour. Sand returns only this way.

**Powers.**
- Turn Back (Reaction, spend 1 Sand, after a die you can see is rolled and before its result is applied): The die is rerolled. The new result stands.
- Sand Sense (Passive): You always know the exact time, and you can tell when a clock, a calendar, or a witness near you has it wrong.

**Escalation.** When the last Sand falls, the original result happened somewhere. Within a session an Echo of you arrives carrying its consequences, and it wants the glass. Roll a d6 on the table below, or choose.

*What the Echo carries (d6):* 1 a debt to the Black Hand you never took on; 2 a fresh Wound, which it hands to you at the next encounter; 3 a friend who remembers the original result, and is angry; 4 a key to an arch that should not exist; 5 news of a death that did not happen here; 6 an offer to trade places with you for one day.

### The Black Lotus Case
`black_lotus_case` · found, Minor

**Object.** A black bloom pressed in a lead-lined case, three petals left, still damp. According to the trader who sold it, it was cut at the Oasis of Mother's Tears in the Deadlands.

**Unlock.**
- Find someone who survived the preparation
- Fast three days
- Eat the first petal under watch
- Risk: WIL DC 14 or take 2 Wounds, and the Stain advances now.

**Resource: Petals (pip tracker).** Petals (pip tracker, max 3). Spend 1 Petal each time you eat one. Regain 1 by seeding the bloom where someone you knew died and tending the soil for a week. Petals return only this way.

**Powers.**
- Eat a Petal (Action, spend 1 Petal): Choose one of the three effects below. It lasts an encounter.
- Smoke Step (Free, 1/round, while chosen): Teleport to a spot you can see within 6 spaces.
- Wallwalker (Passive, while chosen): Climb sheer surfaces and walk on water.
- Drowsing Pollen (once, when chosen): One creature of level 5 or lower within 2 spaces makes a WIL save, DC 13, or falls asleep for 1d4 rounds.

**Escalation.** Each time the case empties, the Stain advances for good. 1: fingertips blacken, advantage on Finesse, and you can no longer feel heat or cold through them. 2: veins darken, +1 Initiative, your pulse is audible. 3: eyes black, you see in the dark, strangers flinch (disadvantage on Influence). Stage 3 is the last Stain. After it, the bloom roots in your palm: you no longer need the case to carry the petals, and no one can take them from you.

### The Oath-Band
`oath_band` · found, Minor

**Object.** A plain iron ring, every oath ever sworn over it scratched inside. The first is in the hand of a Golden Knights recruit, and the Citadel has no record of the ring.

**Unlock.**
- Swear aloud before a living witness
- The oath must be something you would not otherwise do and will take at least a full session to fulfil; the GM may refuse one that matches your plans
- Risk: The Band holds your words, not your meaning. The GM may close loopholes, and when they do the oath is graded one step higher. If you then fail it, you lose the higher grade's max HP.

**Resource: Oath (toggle).** Oath (toggle, max 1). Set when you swear. Clears when you fulfil the oath, or when the GM rules it broken or abandoned. One oath at a time, and a new one only after the last has cleared.

**Powers.**
- Sworn (Passive): While the oath stands, you have advantage on checks that directly advance it. The GM grades it when you swear. Worthy: a session's work, at risk to you. Mighty: an arc's work, at risk to someone or something you love. Legendary: it changes the city.
- Hold Fast (Reaction, once per oath): When you fail a check or save that directly advances the oath, reroll it with advantage. The oath drops one grade.

**Escalation.** Fulfilled: heal 1 Wound and gain +1, +2 or +3 max HP for good, by grade. Failed: lose that much max HP for good, the Golden Council writes the broken oath on the record under your name, and the Band stays shut until you do a penance.

### The Unpaid Favor
`unpaid_favor` · found, Minor

**Object.** A tin holy symbol, its face rubbed smooth, always warm. It belongs to one of the twelve profane gods of the Temple of the Lower Twelve, and the face has been rubbed past telling which.

**Unlock.**
- Learn which of the Lower Twelve it belongs to
- Make a true offering at midnight
- Risk: The patron takes a small price first. Make a WIL save, DC 12. On a success it takes only your name for a week. On a failure it takes a memory, and the GM names which.

**Resource: Tithe (pip tracker).** Tithe (pip tracker, max 3). Gain 1 Tithe each time you Call In. Tithe clears only when you do the patron a favor the GM presents.

**Powers.**
- Call In (Action, +1 Tithe): Name one small, specific impossibility, and the GM approves it before you take the Tithe. Examples: a door opens, a lie is believed, or a creature within 6 spaces loses its next action (WIL save, DC 13, negates).
- Warm (Passive): The symbol grows hot when a worshipper of the Lower Twelve is within 6 spaces.

**Escalation.** If you Call In with 3 Tithe, the patron collects first. Roll a d6. 1 Newt: you are Tiny and Incapacitated for 3 rounds. 2 Imps: lose 2 random items. 3 Salt ring: you cannot cross it until it breaks. 4 Cobwebs: no arcanum use until you atone. 5 Nemesis: someone is born who will hunt you. 6 Wither: take 1 Wound.

### The Valkyrie's Feather
`valkyries_feather` · found, Minor

**Object.** A gold-barbed feather from a warrior's grave on the far side of an arch, in a world where valkyries still collect the dead.

**Unlock.**
- Dig it from the grave
- Learn the warrior's story
- Risk: 1 in 20 the valkyrie comes for the grave-robber before you finish.

**Resource: Tally (d6 vs. accumulation).** Tally (d6 vs. accumulation). Add 1 Tally each time you use Spared, then roll a d6. If it rolls equal to or under your Tally, a valkyrie comes for the spared life (see Escalation). Tally has no maximum, so at 6 or more every Spared calls her. Tally clears only when you carry the feather back to its stone in the grave it came from.

**Powers.**
- Spared (Reaction, 1/encounter, +1 Tally): You or an ally within 6 spaces stays at 1 HP instead of dropping to 0. It takes no Wound and is not Dying.
- Gold Barbs (Passive): The barbs glow when a creature within 12 spaces drops to 0 HP.

**Escalation.** A valkyrie arrives within a day to claim the spared life, yours or your ally's. She will hear one argument for it. The GM plays her.

### The Tide-Coat
`tide_coat` · found, Minor

**Object.** An eel-skin suit that covers you head to heel, crusted with barnacles. Underwater it hums.

**Unlock.**
- Win it from the Revlenders of Heron's Stride or the people of a drowned place, or earn it in their service
- Wear it for a full night underwater
- Risk: Something in the deep hears the hum. Make a Stealth check, DC 12, on the way up, with the coat's usual Stealth penalty. On a failure it follows you up and arrives within a session.

**Resource: Growth (pip tracker).** Growth (pip tracker, max 4). Gain 1 Growth for each hour you spend underwater in a drowned place (the Lost Cisterns, Sunken Revvia, a flooded vault), beyond what the gig needs. That hour costs a scene. A rest never adds Growth. Lose 1 Growth when you take a Wound, and 1 each day after a week spent dry. Using Eel Slip spends 1 Growth.

**Powers.**
- Tide Skin (Passive): Leather armor, Defense 3+DEX, plus 1 per Growth. Each Growth also gives -1 to Stealth.
- Eel Slip (Reaction, spend 1 Growth): When you are Grappled or Restrained, you slip free and move 1 space.

**Escalation.** At 4 Growth the coat is a landmark, and things in the deep start coming to see it.

### The Pitch-Sap Harness
`pitch_sap_harness` · found, Minor

**Object.** Three layers of wood glued with sap that never dries, its outer layer bristling with thorns. The wood was cut in the Lost Cavern of the Sundering Saurians, from a jungle tree that offered it, and it still smells of the mist.

**Unlock.**
- Find an old tree in the Lost Cavern of the Sundering Saurians willing to give its sap
- Wear it through one fight without taking it off
- Risk: The sap takes. It won't come off until the next full moon.

**Resource: Burden (pip tracker).** Burden (pip tracker, max 3), one per weapon stuck in the sap. Burden clears when you pry the stuck weapons loose, which takes tools and an hour, and then re-glue the harness with fresh sap from the tree that gave it. A Safe Rest does not clear Burden.

**Powers.**
- Thorned Bark (Passive): Mail armor, Defense 6+DEX (max 2) and advantage on Stealth in forests and jungles. Each Burden gives -1 Speed.
- Snare (Reaction, +1 Burden): When a melee weapon hits you, the attacker makes a STR save, DC 13, or the weapon sticks. The attacker must let go of it or stay adjacent to you; anyone can pry a stuck weapon free with an action and a Might check, DC 13. A creature using natural weapons is Grappled to you until it passes the save, and adds no Burden.

**Escalation.** When a fourth weapon would stick, the sap seals you in: you are Restrained until someone spends an action and passes a Might check, DC 14, to cut you out. Then the harness gives half its Defense until it is glued again with fresh sap.

### The Hellhide
`hellhide` · found, Major

**Object.** Plate made over with a demon's skin, its horns on the helm and its claws on the gauntlets. The skin came out of Irax, the wind-torn hell beyond the hidden archway of the Blood Spears' Watchtower of Averost.

**Unlock.**
- Hunt the demon and bring back the skin
- Find a smith who will work it, and pay their price
- Put it on
- Risk: Roll d10. On 1-3 the hide drinks magic: no spell can affect you, including your own, while you wear it.

**Resource: Thirst (pip tracker).** Thirst (pip tracker, max 3). Gain 1 Thirst each time you use Command. Thirst clears only when you offer blood to the hide outside combat, from a creature that was not trying to harm you. Blood shed in a fight does not count.

**Powers.**
- Demon Plate (Passive): Plate armor, Defense 14, with no STR requirement.
- Terror (Passive): The first time a creature sees you in an encounter, it makes a WIL save, DC 14, or has -1 to all its rolls near you for the encounter.
- Command (Action, +1 Thirst, 1/encounter): One undead or demon within 6 spaces that can hear you makes a WIL save, DC 14. On a failure, on its next turn it obeys one command of five words or fewer. It will not harm itself. Solo creatures save with advantage.

**Escalation.** You cannot willingly part with the hide, and you will hunt anyone who takes it. If you end a day with 3 Thirst, it drinks from you at dawn: take 1 Wound that cannot heal while you wear it. If you die in it, you rise as a spectre.

### The Kettle Plate
`kettle_plate` · found, Major

**Object.** Full plate with two boilers on the back and a servo at every joint. One of a kind, built to someone's measure, and not to yours. The boiler plate is stamped with the mark of Vathrex's Forge.

**Unlock.**
- Find the workshop that built it
- Have it refitted to you, which costs a favor the makers name
- Stoke it yourself, the first time
- Risk: The refit fails on a test fire. 1d6 fire damage and a week of repairs.

**Resource: Steam (pip tracker).** Steam (pip tracker, max 4). Spend 1 Steam per use. Regain all by stoking the boilers with a load of forge coal drawn from Vathrex's Forge, which means a trip to the ziggurat and whatever price Erna Ironhorn names. A load fills the boilers once and takes an inventory slot. Steam returns only this way.

**Powers.**
- Iron Joints (Passive): Plate armor, Defense 18, with no STR requirement.
- Boiler Fire (spend 1 Steam): Choose one. Wrist crossbow (Free, 1/turn): a ranged attack, Range 8, 1d8+DEX piercing, no loading. Hidden blade (Action): a melee attack, 1d8+STR slashing. Boiler surge (Free): advantage on one Might check.

**Escalation.** At 0 Steam the servos lock: Speed 2 and disadvantage on DEX until stoked. If you spend the last Steam in combat, the boilers vent: 1d6 fire to you and everyone adjacent.

### The Fairy Jar
`fairy_jar` · found, Minor

**Object.** A thumb-high jar of purple glass. Inside, a small furious face swims in mist. The fairy was netted at the Arch of Flowers in Briarheart Forest.

**Unlock.**
- Learn the fairy's name, which it will not tell you
- Promise it freedom, aloud, before a witness
- Risk: Speak to it before you know its name, and it slips out and hexes you: make a WIL save, DC 12, or have disadvantage on WIL checks for a week.

**Resource: Bargains (pip tracker).** Bargains (pip tracker, max 3). Spend 1 Bargain per Ask. Regain 1 when you answer the question the fairy asks about its home. It asks one each time it runs dry, and the answer is never found on the way to a gig. Bargains return only this way.

**Powers.**
- Ask (Action, spend 1 Bargain): Make a WIL save, DC 12. On a success the fairy works one small charm: a glamour, a lock undone, a minute of floating. On a failure it sulks and stays silent for 2d6 days.
- Fairy Light (Passive): The jar glows when fey are within 6 spaces.

**Escalation.** On a natural 1 the fairy escapes and curses you. You may smash the jar at any time: it grants +1 to one stat for good and is gone. At 0 Bargains it only bargains for its freedom.

### The Seven-Leaf Bracelet
`seven_leaf_bracelet` · found, Minor

**Object.** A silver bracelet of seven linked leaves, cool as morning dew. It was found at the root of the oldest tree in Sunset Grove, and Graysen One-Eye would like to know who took it.

**Unlock.**
- Wear it through a night in old woods
- Answer the first question the trees ask you, truthfully
- Risk: The trees ask about something you would rather they never knew. Answer truthfully, or the bracelet will not wake until you do. Whatever you answer, every plant in the grove now knows it.

**Resource: Leaves (finite never-refill).** Leaves (finite, 7). Each Listen wilts one leaf. A wilted leaf never comes back, and nothing refills the bracelet.

**Powers.**
- Listen (Action, spend 1 Leaf): Speak with the plants around you for 10 minutes, or speak Elvish for a day. Plants tell you who passed and may move aside or tangle.
- Rustle (Passive): The leaves stir when a creature hiding in or behind plants is within 6 spaces.

**Escalation.** When the last leaf wilts the bracelet buds. Plant it beside a door to elsewhere within a month, and in a year a new bracelet grows there. If you don't plant it, your fingertips start to leaf.

### The Hexing Needles
`hexing_needles` · found, Minor

**Object.** Three black needles in a felt roll, and a spool of red thread. The roll is stitched in the style of the Sisters of Dusk, the coven that rules Elgrym in Lady Straythe's name.

**Unlock.**
- Learn the stitch from a witch, at her price
- Embroider your own likeness first
- Risk: Your first stitch slips. You carry a small hex of your own making, and have disadvantage on one kind of roll, the GM's choice, until you unpick it.

**Resource: Thread (pip tracker).** Thread (pip tracker, max 3). Spend 1 Thread per Stitch. Regain 1 when someone gives you their hair, blood, or cloth freely, knowing what it is for. Thread returns only this way. Unpicking a hex frees its victim but gives back no Thread.

**Powers.**
- Stitch (an hour of work, spend 1 Thread): Embroider a likeness of someone, using their hair, blood, or cloth. They have disadvantage on one kind of roll you name until the cloth is unpicked or burned. They feel every stitch.
- Thread Sense (Passive): You can tell when cloth you touch carries a stitched hex, and whose likeness it is.

**Escalation.** Every victim knows the shape of your hands, and the Sisters of Dusk hear who is stitching in their style. At 0 Thread you can still Stitch, but the hex also lands on your own likeness.

### The Sown Teeth
`sown_teeth` · found, Major

**Object.** A hide satchel holding a handful of long dragon teeth from Drakeholm that click together like dice.

**Unlock.**
- Read the command words etched inside the flap, in a dead language
- Sow the first tooth on ground you mean to hold
- Risk: The first warrior asks whom it must guard. Your answer binds every warrior after it, and the GM holds you to the letter.

**Resource: Teeth (finite never-refill).** Teeth (finite, 1d4+1, rolled at unlock). Each Sow uses up one tooth. A sown tooth never comes back, and nothing refills the satchel.

**Powers.**
- Sow (Action, spend 1 Tooth): An armored warrior rises from the ground beside you and obeys you for an hour. It fights as a minion (GM guide): it attacks with a d10 (d12 from level 5, d20 from level 9), any damage destroys it, and all your warriors move and attack together on your turn.
- Dragon's Click (Passive): The teeth click louder within 6 spaces of a dragon or dragonkin.

**Escalation.** If two or more warriors stand and one is struck by surprise, they turn on each other, then on whoever is closest. Dragons and their kin can smell the satchel. When the last tooth is gone, the satchel is just a bag.

### The Arch-Watch Mirror
`arch_watch_mirror` · found, Major

**Object.** A mirror taller than a man in a frame of blackened ash. Its surface moves like still water. The glass was ground at the Observatory of Infinite Skies.

**Unlock.**
- Install it in your holding
- For each arch it should watch, carry a sliver of its glass through that arch and back, unbroken
- Risk: Each sliver must come back unbroken. Carrying one through an arch and back takes a Finesse check, DC 12. A broken sliver lets whatever is on that side look back through the mirror until a night's vigil clears it.

**Resource: Clarity (pip tracker).** Clarity (pip tracker, max 3). Spend 1 Clarity for Watch or Foresee. Regain all after someone keeps a full night's vigil before the mirror without sleeping. Clarity returns only this way.

**Powers.**
- Shimmer (Passive): The mirror shimmers whenever a watched arch is used.
- Watch (10 minutes, spend 1 Clarity): See a watched arch and the area around it for 10 minutes.
- Foresee (spend 1 Clarity, once per episode): Before you go through, ask the GM one question about where the arch leads.

**Escalation.** At 0 Clarity the glass stays clear both ways. Anything beyond a watched arch can look into your holding until the mirror is refilled.

### The Apology Blade
`apology_blade` · found, Major

**Object.** A sword cut from the belly of a sea serpent out of Terrache's cavern sea. It still smells of brine, and its edge is clouded like the sky before a storm.

**Unlock.**
- Give it as an apology to someone you wronged
- If they freely give it back, it wakes
- Later: make peace between two who are at war, and its storm wakes
- Risk: They keep it. Make an Influence check, DC 14, to win it back with a second apology. On a failure the blade is theirs until they choose to return it.

**Resource: Sky (pip tracker).** Sky (pip tracker, max 3). Spend Sky on Gust and Storm. Regain 1 when someone accepts your apology for a real wrong you did before you took up the blade, or one you did not mean to do. Sky returns only this way.

**Powers.**
- Overcast (Passive): The clouded edge darkens when a creature within 6 spaces is angry at you over a wrong you have not apologised for.
- Gust (Action, spend 1 Sky): A wind throws every creature in a Line 6 back 3 spaces (Knockback 3). STR save, DC 13, negates.
- Storm (Action, spend 2 Sky, once the storm wakes): For the encounter, enemies have disadvantage on ranged attacks and you cannot be pushed.

**Escalation.** If you wrong the one who gave it back, it is in their hands the next morning, wherever they are.

### The Rune Fragment
`rune_fragment` · found, Major

**Object.** A shard of storm-dark stone veined with silver. One rune on it glows faintly. It was in the hand of an arrival the Archkeepers met, who remembered nothing but its name.

**Unlock.**
- Find a second fragment
- Carve the first rune's name into a gravestone or standing stone, and speak aloud the name of someone who died for something
- Hold the fragments together for 10 minutes and they fuse
- Risk: Whoever carries another fragment feels yours wake. Holding the shards together while they grind takes a STR save, DC 13. On a failure you take 1 Wound and must hold them for another 10 minutes.

**Resource: Runes (pip tracker).** Runes (pip tracker, up to 9, one per fused fragment). Each fragment carries one rune, rolled on a d8 when it fuses. Each rune works once, then goes dark. A dark rune relights when you carve it into a gravestone or a standing stone and speak aloud the name of someone who died for something.

**Powers.**
- Fehu (Action): An item you touch gives +1 to its user for an hour.
- Algiz (Free): Advantage on saves against fear and charm for the scene.
- Raido (Free): +2 Speed for the scene.
- Uruz (Free, after the roll): +2 to a STR check.
- Tiwaz (Action): Allies who hear you have advantage on their next attack.
- Ansuz (Free): Speak and read any language for a scene.
- Eihwaz (Reaction): Reduce one hit's damage by your level plus STR.
- Sowilo (Action): Sunlight blinds every enemy within 6 spaces until your next turn. DEX save, DC 13, negates.

**Escalation.** Fragments call to each other, and other holders follow the call. When the ninth fuses, its rune wakes once: change the result of one roll made this session, even one already applied, and play on from there. Then the stone falls to dust.

### The Binding Linens
`binding_linens` · found, Minor

**Object.** Strips of old linen that smell of myrrh, with gold-thread hieroglyphs at the ends. They were taken from the temple dead of Arkus.

**Unlock.**
- Learn the binding words from a priest of the dead
- Wrap and bury a stranger who had no one to bury them
- Risk: The stranger belonged to someone, and they come asking within a session. Make an Influence check, DC 14, to explain what you did.

**Resource: Strips (pip tracker).** Strips (pip tracker, max 3). Spend 1 Strip per Hold Back. Regain 1 by preparing and burying someone who has no one to do it for them. Strips return only this way.

**Powers.**
- Hold Back (Action, spend 1 Strip): Wrap a Dying creature. It stays at 0 HP but is no longer Dying: it takes no Wounds from damage, and it cannot act. When it is unwrapped, or at the next dawn, it is Dying again.
- Myrrh (Passive): You know at a glance how long a body has been dead and whether it was ever bound.

**Escalation.** Any creature wrapped a second time comes back a little less. It forgets one thing it loved, and the GM chooses what.

### The Rusted Spear
`rusted_spear` · found, Minor

**Object.** A leaf-bladed spear whose rust never flakes off, however hard you scrub. The Blood Spears of Averost took it from a world they raided, and the watchtower still lists it as unreturned.

**Unlock.**
- Learn whom it last wounded, and find them
- Heal that old wound with the spear's own rust
- Risk: They remember you and the spear. Make an Influence check, DC 14, to be forgiven. On a failure they hunt for the spear.

**Resource: Rust (pip tracker).** Rust (pip tracker, max 3). Spend 1 Rust per Scrape. Regain 1 by leaving the spear a night in the red water of Bloodrust Depths. Rust returns only this way.

**Powers.**
- Spare (Free): When you would drop a creature to 0 HP with the spear, it falls stable instead, and its wound will not close until you choose to mend it.
- Scrape (Action, spend 1 Rust): Scrape rust into a wound to heal 1 Wound on a creature you touch, yourself included, or to close a wound the spear made.

**Escalation.** At 0 Rust the blade is clean and bright. The next creature it hits takes a wound that never closes: a hero gains a Wound that cannot heal and loses 1 max Wound for good, and a creature bleeds out by the end of the scene.

### The Derelict Harpoon
`derelict_harpoon` · found, Minor

**Object.** A ship's harpoon with a coil of glowing strand-line, cut from a derelict hull hung in the vines of Drendaan. The line is warm, and it is still wet.

**Unlock.**
- Cut a length of strand-line from a derelict hull in Drendaan with the harpoon's own blade
- Make one throw that hauls you across a gap you could not have jumped
- Risk: Whatever lived aboard the hulk feels the line cut. Make a Stealth check, DC 13, to get clear of the hulk unseen. On a failure it follows the line through the arch within a session.

**Resource: Slack (d6 vs. accumulation).** Slack (d6 vs. accumulation). Each time you Haul, roll a d6 against your current Slack, then add 1 Slack. If you roll equal to or below your Slack before adding, the line snarls (see Escalation). Slack has no maximum, so at 6 or more every Haul snarls. Slack clears when you carry a length of the line back to a derelict hull in Drendaan and splice it into the strand.

**Powers.**
- Haul (Action, Range 12, +1 Slack): Make a ranged attack with the harpoon. On a hit, choose one: pull yourself to the target, or pull a Medium or smaller target up to 6 spaces toward you. A pulled creature falls Prone and can make a STR save, DC 13, to resist.
- Anchor (Free, 1/round, after a Haul that hits): Plant the line. The target cannot move more than 6 spaces from you until your next turn or until you let go (Free).

**Escalation.** When the d6 triggers, the line snarls around you or your target, the GM's choice. Both of you are Restrained until either of you, or anyone adjacent, spends an action to cut it. The cut length keeps glowing, and whatever lived aboard the hulk follows it through the arch.

### The Seekers' Provenance Ledger
`provenance_ledger` · found, Minor

**Object.** A cloth-bound ledger listing a hundred relics by name, maker and rightful owner, in four hands. The last twelve pages are blank and slightly warm. The Museum of Worlds Beyond reports it missing from its archive.

**Unlock.**
- Return a relic to its rightful owner or their heirs, and have the owner sign it into the ledger
- Give up the relic's price: you may not sell it or take payment
- Risk: The Black Hand hears that someone is naming relics, and the GM starts a six-step Black Hand clock about who.

**Resource: Provenance (pip tracker).** Provenance (pip tracker, max 3). Spend 1 Provenance per Name the Owner or Vouch. Gain 1 Provenance each time you return a relic to its rightful owner and have them sign it into the ledger. Provenance returns only this way.

**Powers.**
- Name the Owner (Action, spend 1 Provenance): Touch an object. The ledger writes its maker, its last three owners, and its rightful owner, if it has one. A lie in the record shows as an ink blot.
- Vouch (Reaction, spend 1 Provenance): When an ally within 6 spaces makes an Influence check about an object or its owner, they have advantage.
- Margins (Passive): The ledger shows a blot when you hold it within 6 spaces of a stolen or cursed object.

**Escalation.** When the last Provenance is spent, the ledger writes one relic's name and its rightful owner on a blank page without being asked. The GM chooses the relic, and the owner is someone you know. The Seekers of the Sun and the Black Hand both learn it has been written. Roll a d6 on the table below, or choose.

*The relic the ledger writes (d6):* 1 something from the Vaults of the Nameless King; 2 an arcanum another hero carries; 3 a piece on display in the Museum of Worlds Beyond; 4 an heirloom of your own family; 5 a key to one of the city's arches; 6 a relic still lying in Sunken Revvia.

### The Black Goat's Tally-Stick
`tally_stick` · found, Minor

**Object.** A notched black-wood stick as long as a hand, each notch a tab paid or unpaid at the Black Goat's Tavern. A horned goat's single yellow eye is burned into one end.

**Unlock.**
- Drink at the Black Goat's Tavern through a full night, and settle your tab in full
- Broker a meeting there between two parties who would fight anywhere else, and keep it peaceful
- Risk: If a peace you broker at the tavern breaks, you take 1 Wound along with the one who broke it.

**Resource: Truce (toggle).** Truce (toggle, on/off). Strike the stick on a table to call a Truce, which turns it on. It turns off when the parley ends, when you end it, or when anyone attempts violence under it. Once off, it cannot be turned on again until you have brokered a meeting between two enemies who would not otherwise have met, and settled the tab for it at the Black Goat's Tavern.

**Powers.**
- Call a Truce (Action, turn Truce on): Name a place and up to six people in it. For an hour, or until the parley ends, a named creature that tries to attack another named creature makes a WIL save, DC 14. On a failure the attack does not happen. Either way, the Truce ends.
- Read the Notches (Passive): When you hold the stick at a table, you know who in the room owes whom, and whether the debt is money, a favor, or blood.

**Escalation.** If the Truce breaks, the stick burns your palm for 1 Wound, and the Black Goat's wardens come for whoever broke it within a session. Vynan Halfhorn will want to know why the peace failed under his stick.


## 7. Class guilds

An alternative to the holding at hero creation, and where each class arcanum is earned. Names, wants, splits and masters' roles are new canon; halls are canon places.

- **choice:** At hero creation, take a holding or join your class's guild.
- **guild_gives:** A shared hall to Safe Rest in, one contact in the guild, one specialty from the guild's skill, and the guild as a door that sends you jobs.
- **cost:** The guild's ask, every arc. Skip it for a whole arc and drop a rank; an Apprentice who skips it is out.
- **ranks:** Apprentice: you join here. Journeyman: meet the ask once and finish one gig for the guild; receive your class arcanum or the lead to it. Master: take a side in the guild's split and win the vote; you hold the guild's seat.
- **class_lock:** A guild gives its arcanum only to its own class. Another class gets the contact, the specialty and the jobs.
- **prep:** Each guild is one index card. It gets a faction clock only when a player's choice makes it matter.
- **pressures:** The Golden Council charters guilds; the University wants them as trade chapters; the Black Hand sells counterfeit charters to gray guilds (campaign overview).

### The Red Sand (Berserker)
Hall: Arena of Blood, Lower Reaches. Master: Sytheria Redsong, the arena's master of ceremonies. Wants: to rule on trial by mortal combat for the Black Hand's condemned as a guild verdict, not as the Black Hand's mercy. Teeth: hunts fighters who fix bouts. Teaches: Athletics. Keeps: the Bout Rolls, every fighter's record and how they lost. Split: the Blood (to the death, for the crowd's money) against the Sand (first blood, for the fighters). Asks: one bout per arc; the guild takes a cut. Gives: the lead: the Rolls name the fallen Borderlands fighter, and the guild has the collector's address. Rival: the Black Hand.

### The House (Cheat)
Hall: Guildred's Grotto, Lower Reaches. Master: Gleaming Guildred, the dwarf priest of luck, coin and merriment. Wants: the Council's license for every game of chance in the city. Teeth: blacklists sharps who cheat members. Teaches: Sleight of Hand. Keeps: the Marks Book, who is rich and who is desperate. Split: the House (honest odds, steady coin) against the Sharps (the guild's best are cheats). Asks: a tithe of winnings. Gives: the lead: the House knows the card sharp, and which Golden Knights shelf the die left. Rival: the Black Hand, which taxes every table.

### The Muster (Commander)
Hall: Citadel of the Golden Knights. Master: Joslyn Halfcloak, the Knights' contact for hired help. Wants: a standing commission for free companies, since the Knights are about two hundred strong and already hire outsiders. Teeth: strips the commission of captains who abandon their troops. Teaches: Persuasion (leadership). Keeps: the Muster Roll, every sellsword company and its debts. Split: Knights-first (serve the Order) against the Free Captains (serve the highest bidder). Asks: answer one muster per arc. Gives: a writ to take the Battle Standard from the Museum of Worlds Beyond's vault. Rival: the Seekers of the Sun, who hold it.

### The Wardens' Lodge (Hunter)
Hall: the City Walls' gatehouse. Master: [your call], a Doorish Hills warden. Wants: bounty rights on the Suntouched Highway and Predalion's Belt. Teeth: hunts poachers and guides who sell out caravans. Teaches: Survival (tracking). Keeps: the Track Book, the sign of every beast and band on the roads. Split: the Wardens (keep the roads) against the Bounty-takers (paid per head). Asks: one road patrol per arc. Gives: the Borderlands Tracking Cord itself; it was a warden's. Rival: smugglers on the Hills roads.

### The University (Mage)
Hall: Kartan, Tower of the Arcane. Master: Savandra Thricecursed, Kartan's overseer. Wants: a monopoly: open lectures, then licensing, then the only key-readers in the city (campaign overview). Teeth: an enforcement wing of ex-adventurers (campaign overview). Teaches: Arcana. Keeps: the Laboratories of Kartan. Split: Traditionalists, Royalists and a New School (campaign overview). Asks: your findings, published as its own. Gives: the Cracked Lens of Kartan, lent to a Reader-rank student. Rival: the Archkeepers.

### The Sworn Chapter (Oathsworn)
Hall: the Queen's Palace chapel. Master: [your call]. Wants: sworn knights recognized as judges in their own right. Teeth: tries oathbreakers. Teaches: Insight (detecting lies). Keeps: the Book of Oaths, every oath sworn before the Golden Throne. Split: Throne-sworn (the queen) against Law-sworn (the Council's law); canon's plot by the queen's sister Atretha gives it a live edge. Asks: judge one dispute per arc. Gives: a lead to the old court ruin in Sunken Revvia where the Broken Verdict lies. Rival: the Golden Council.

### The Hollow Circle (Shadowmancer)
Hall: the Hole in the World. Master: [your call]. Wants: pacts made lawful, so a pact-bound caster is not a criminal by default. Teeth: hunts members whose patrons come through. Teaches: Arcana (forbidden knowledge). Keeps: the Margin Book, every patron's known terms. Split: the Bound (keep their patrons) against the Reavers (cut free). Asks: report any patron contact. Gives: the address of the sealed room where the Hollow Contract lies. Rival: the Children of Ibraxus, who recruit the same people.

### The Sisters' Vigil (Shepherd)
Hall: Temple of the Three Sisters. Master: Grace Ebonlight, who directs the temple. Wants: the right to tend every dying body in the city, the Lower Reaches included. Teeth: hunts body-sellers and false healers. Teaches: Medicine. Keeps: the Roll of the Dead, who is buried where on the Cliffs. Split: the Temple (heal for faith) against the Market (heal for coin). Asks: one vigil per arc at a sickbed or grave (also the Bell's refill). Gives: the Bell of the Three Sisters, lent. Rival: the Black Hand's back-alley healers.

### The Whisper Company (Songweaver)
Hall: Theater of Whispers. Master: Kaylex Thren, the dragonborn minstrel who runs it. Wants: a place at the queen's court. Teeth: blacklists performers who sell what they hear backstage without the Company's leave. Teaches: Performance. Keeps: the Prompt Books, every play and who sat in the audience. Split: the Players (perform) against the Whisperers (sell what they hear to Roselyn Zeshe). Asks: one performance per arc, and anything you overhear. Gives: the name of whoever stole the Setlist. Rival: the queen's spymaster.

### The Grove Circle (Stormshifter)
Hall: Sunset Grove. Master: Graysen One-Eye, the druid who oversees it. Wants: a voice for the outer lands while the city's arches leave them to rot. Teeth: hunts poachers and anyone who brings beasts through the arches. Teaches: Nature (weather). Keeps: the Weather Book. Split: the Grove (keep the city's wild corner) against the Marsh (Revlender-born, and angry at the city). Asks: tend the Grove one night per arc. Gives: the Mud from the Revlend Marshes itself; the arch-traveller left the jar with the Grove. Rival: the Golden Council, which ignores the outer lands.

### The Last Studio (Zephyr)
Hall: the studio in the Lower Reaches from the Wrappings card. Master: none: the last teacher stopped mid-sentence. Wants: a master. Teeth: hunts whoever silenced the last teacher. Teaches: Acrobatics. Keeps: four centuries of annotations. Split: two senior students, each claiming the last teacher's line. Asks: train one novice per arc. Gives: the key to the locked case where the Wrappings lie. Rival: the Red Sand, which poaches students.
