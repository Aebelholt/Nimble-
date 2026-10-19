# Arcana Design Specification
## For Nimble 2 / City of Arches

Binding format and audit spec for all arcana. Source: pasted by the campaign owner; reproduced here unchanged in substance.

---

## The five-part card format

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

## Echelon guidance

| Echelon | Level range | Design brief |
|---------|------------|--------------|
| 1st | 1-4 | Simple resource, single refill condition, escalation generates next session's hook |
| 2nd | 5-8 | More complex resource interaction, unlock requires significant faction/world engagement |
| 3rd | 9-12 | Resource makes demands between sessions, escalation reshapes campaign relationships |
| 4th | 13+ | One per campaign arc. Carrying it is a decision. Enemies exist because of it. |

---

## Core design principles

**No double-dipping.** An item must not reward a player for doing something they already wanted to do. If the class's best action also fills the resource, that is a design problem. Refill should require something the player would not otherwise do.

**No self-sustaining loops.** If the resource can be refilled using what the resource generates (minions -> sacrifice minion -> get resource back), the loop is closed and cost is illusory. Refill must go through the world.

**Refill conditions require fictional engagement.** "Spend time gambling and earn 1 silver in genuine winnings" is a refill. "Roll a die at the start of each session" is not. The refill should be an activity that could appear on the session's agenda.

**Resource trackers must have unambiguous clearing rules.** State exactly when the tracker clears: encounter-end, Safe Rest, Field Rest, world event. If the answer is "it depends," rewrite until it isn't.

**Narrative friction is a design error.** The item's fiction must cohere with class identity. An item built on patron-contact does not work for a class that has lost their patron. An item whose cost is a tracked resource cannot use an untracked one (e.g. Nimble shadow minions: they only exist in combat, are not on the character sheet, and cannot serve as a cost).

---

## Audit checklist (run before finalising any arcanum)

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

## Nimble 2 mechanical vocabulary

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

## Nimble 2 system-specific constraints

- **Shadow minions** are not tracked on the character sheet. They exist only in combat. They cannot serve as a meaningful resource cost.
- **The Reaver subclass** (Shadowmancer) has no patron and cannot exceed Pilfered Power. Any item referencing patron communion or Pilfered Power is inaccessible to Reavers.
- **Hunter's Mark** already grants advantage OR +LVL damage on every attack against the marked quarry. Items for the Hunter must provide something the Mark does not: movement control, multi-target tracking, or out-of-combat information.
- **Vicious Opportunist** (The Cheat) is a 1/turn limit. An item that refills when Vicious Opportunist is used is a passive bonus attached to the class's best move, which is double-dipping.
- **Radiant Judgment Dice** (Oathsworn) are rolled on specific triggers. Items that interact with them should clarify whether they modify the roll, the spend, or the trigger.

---

## Reference arcana (worked examples from this project)

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

---

## How to use this spec in a new design session

Paste this document and add:

1. **Class or context:** "Designing an arcanum for the [class]. Their core mechanic is [X]. Their subclasses are [Y and Z]."
2. **Echelon:** "This is a 1st echelon item."
3. **Setting anchor (optional):** "Should connect to [faction / location / City of Arches element]."
4. **Any constraints:** "The [subclass] cannot access [mechanic]."

Then request: "Design one arcanum in the five-part format. Audit it against the checklist before presenting it."
