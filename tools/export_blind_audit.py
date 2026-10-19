#!/usr/bin/env python3
"""Write analysis/blind_audit_prompt.md: a self-contained prompt for a blind audit by another model.

Blind means the auditor sees the cards, the design standard, the rules and the campaign context,
and none of the prior audit: no notes, changelog lines, design notes, matrix ratings,
reassessment, power levels or audit exceptions.
"""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
cards = [c for c in json.loads((ROOT / "data/sejr_arcana.json").read_text()) if c["status"] != "cut"]
spec = (ROOT / "spec/arcana_design_spec.md").read_text()

# Class features the cards lean on, quoted from rules/classes (start text, file).
FEATURES = [
    ("Berserker", "Rage. (1/turn)", 2), ("Berserker", "That all you got?!", 2), ("Berserker", "Your Rage Ends", 1),
    ("Berserker", "LEVEL 18 DEEP RAGE", 1), ("Cheat", "Vicious Opportunist.", 3), ("Cheat", "Distracted. A target", 1),
    ("Hunter", "Hunter’s Mark. Action", 3), ("Hunter", "Thrill of the Hunt. Choose", 5),
    ("Mage", "Force of Will.", 3), ("Mage", "Deny Fate.", 2), ("Mage", "LOSE CONTROL.", 1),
    ("Mage", "How does Lose Control work?", 4), ("Mage", "Force of Chaos.", 3),
    ("Oathsworn", "Radiant Judgment. Whenever", 3), ("Oathsworn", "Lay on Hands. Gain", 3),
    ("Shadowmancer", "Pilfered Power. You can", 3), ("Shadowmancer", "Hollow One.", 3),
    ("Shadowmancer", "Summon a magical Bonescythe", 4), ("Shepherd", "• Mend.", 1),
    ("Shepherd", "Searing Light. 1 Action", 2), ("Songweaver", "Songweaver’s Inspiration. (2", 2),
    ("Songweaver", "Perform! Whenever", 1), ("Stormshifter", "Beastshift. Action", 2),
    ("Stormshifter", "Direbeast Form. You", 2), ("Zephyr", "Iron Defense. Your", 1),
]


def quote(cls, start, n):
    lines = (ROOT / f"rules/classes/{cls}.txt").read_text().split("\n")
    i = next(k for k, l in enumerate(lines) if l.strip().startswith(start))
    q = " ".join(l.strip() for l in lines[i:i + n] if l.strip())
    return re.sub(r"\s+Yes!.*$", "", q).replace("\t", " ")


def mage_control_table():
    t = (ROOT / "rules/classes/Mage.txt").read_text()
    seg = t[t.index("CONTROL TABLE"):t.index("LOSE CONTROL.")]
    seg = re.sub(r"\n\s*\d+\s*\n", "\n", seg)
    return " ".join(s.strip() for s in seg.split("\n") if s.strip())


def homebrew_arcana():
    p = ROOT / "sources/arches_homebrew_arcana.txt"
    return p.read_text().strip() if p.exists() else ""


CORE = """- **Actions.** Heroes get 3 actions on their turn (fewer from a low Initiative roll on round one). Reactions cost 1 action and are used off-turn, each 1/round. "Free" costs no action.
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
- **Ancestry benchmarks:** Orc Relentless (1/Safe Rest: when you would drop to 0 HP, set HP to LVL). Gnome Optimistic (Free Reaction, Reach 6: an ally rerolls any 1 die; resets when healed to max HP). Halfling Elusive (1/Safe Rest: succeed a failed save)."""

CAMPAIGN = """Sejr is an episodic, drop-in Nimble 2 campaign in the City of Arches, a setting where thousands of ancient arches open onto other places and other worlds.

- **Format.** Weekly 3-hour sessions with unknown attendance. One gig (job) per session, built as a bottle episode that works for one player or a full table. Players pick a door (a patron's job in the city, or a trip through an arch); a generator adds a twist ("wrong target", "the goal flips", "the patron is the threat", "an arch or key intervenes") and scene-by-scene interruptions.
- **Arcana in play.** Every hero starts at level 1 with one unexamined arcanum: their class arcanum on a 1-4 on a d6, otherwise a random found arcanum. Absent players tick their arcanum's unlock ritual instead of losing progress. The final unlock step is always played at the table.
- **Keys are power.** Whoever holds a key decides where an arch opens. Patrons control keys, and the city's politics are route politics. A party-owned key is meant to be a mid-campaign prize that offends a patron.
- **Trackers carry memory.** A thread board of six index cards (one thread closes and one opens each episode), hidden Neglect clocks for the outer regions, six-step faction clocks. GM prep is the trackers and nothing else.
- **Tiers.** Found arcana are Minor or Major. Class arcana are 1st echelon (levels 1-4). The found pool is meant to be about 24 cards, diverse in look and mechanics.
- **The GM, in their words:** these items are meant to be stronger than standard magic items, because they exist to drive player engagement. "Broken is not bad, because I will supercharge my combats and situations too." They are a very lenient GM: no player death across 4 systems and 7 groups.
- **Sources.** Many items are deliberate ports from other systems and real-world myth (Norse, Greek, Egyptian, fairy lore), justified because the arches lead to other realms. Stonetop's arcana are the main inspiration."""

CANON = """These names appear on the cards and exist in the setting books. Treat them as canon. Treat any claim about them that goes beyond this list (who wants what, what a place sells or allows) as possibly new canon and say so.

- City: Archkeepers (greet arrivals through the arches, watch the arches; arrivals usually have no memory), Golden Order (queen, Golden Council, Golden Knights), Black Hand (criminal guild, Lower Reaches), Mages of Kartan (Tower of the Arcane, with hidden laboratories below), Seekers of the Sun (relic-restoring guild based at the Museum of Worlds Beyond, led by Vinnic Longshanks), Knights of the Nameless King (cult of the fallen tyrant), Children of Ibraxus (demon cult), Temple of the Three Sisters, Theater of Whispers (amphitheater with mysterious sublevels), Library of Vrassa (bigger inside), Observatory of Infinite Skies (scholars peer into other worlds), Sunset Grove (magical park, druid Graysen One-Eye), Vathrex's Forge (ziggurat forge run by the minotaur Erna Ironhorn), Market Square, Sevenge and Gam's Public House, Cliffs of the Dead (tombs; Royal Tombs, Cenotaph of Queen Sett), Lost Cisterns, Sunken Revvia (ruined ancient city beneath the city), Citadel of the Golden Knights.
- Lower Reaches: Black Goat's Tavern (owner Vynan Halfhorn; violence there is fatal to the violent; no Black Hand protection), Temple of the Lower Twelve (twelve profane gods), Lost Cavern of the Sundering Saurians (underground jungle, war-bred dinosaurs).
- Revlend Marshes (north): Revlenders in stilt villages such as Heron's Stride, Drowned Elvenya (sunken temple of starlit elves), Bloodrust Cove and its red-hued Bloodrust Depths (pirates).
- Doorish Hills (south): Briarheart Forest and the Arch of Flowers (faerie archway), the Sisters of Dusk (hag coven ruling the village of Elgrym for the vampire Lady Straythe), Watchtower of Averost (the Blood Spears, raiders of the Nameless King, with a hidden archway to the hell world Irax), Sevelet's Throne.
- Deadlands (west): Graydust Keep (changed hands hundreds of times; held by the Fallen Angels war band), Oasis of Mother's Tears, Lost City of Thryne, Sett's Ziggurat, the Shattered Teeth mountains.
- Worlds beyond the arches: Drendaan (endless sea, derelict ships hung in miles-high glowing vines), Drakeholm (land of dragons), Terrache (vast cavern with a great sea), Arkus (world of dead temples, undead priests), Eruwynd, Io, Korax, Maphotar, Threska, Vynan, Deathreach.
- History: the Nameless King built the city of arches and was cursed out of history by the Army of the Blue Star; Delenith, City of Towers, vanished; Ovelek the Gray Worm was a primordial titan."""

INSTRUCTIONS = """# Blind audit: Sejr arcana deck

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

**C. Exploits and combinations.** Cross-card or card-plus-class interactions that break something. Say whether each one breaks a fight (acceptable here) or breaks an episode or the campaign (not acceptable).

**D. Deck level.** Diversity of resource types, costs, origins and looks; repetition; the ten fixes you would make first, ranked.

**E. Limits.** What you could not verify, and how confident you are in each section.
"""


def spec_body():
    body = spec.split("\n", 1)[1]
    body = re.sub(r"(?m)^## For Nimble 2.*\n", "", body)
    body = body.split("## How to use this spec")[0].rstrip().rstrip("-").rstrip()
    return body.replace("\n## ", "\n### ")


def card_md(c):
    r = c["resource"]
    head = f"### {c['name']}\n`{c['id']}` · " + (f"class arcanum, {c['class']}" if c["kind"] == "class" else f"found, {c['tier']}")
    unlock = "\n".join(f"- {u}" for u in c["unlock"])
    powers = "\n".join(f"- {p}" for p in c["powers"])
    return (f"{head}\n\n**Object.** {c['object']}\n\n**Unlock.**\n{unlock}\n- Risk: {c['risk']}\n\n"
            f"**Resource: {r['name']} ({r['type']}).** {r['text']}\n\n**Powers.**\n{powers}\n\n**Escalation.** {c['escalation']}\n")


feats = "\n".join(f"- **{cls}:** {quote(cls, s, n)}" for cls, s, n in FEATURES)
hb = homebrew_arcana()
parts = [
    INSTRUCTIONS,
    "## 1. Campaign context\n\n" + CAMPAIGN,
    "## 2. Design standard\n\nThe spec below is binding. Where its vocabulary table disagrees with the rules reference in section 3, the rules reference wins.\n\n" + spec_body(),
]
if hb:
    parts.append("## 2b. The GM's own arcana rules (from their homebrew companion)\n\n" + hb)
parts += [
    "## 3. Rules reference (Nimble 2, condensed from the core rules)\n\n" + CORE,
    "## 4. Class features the cards refer to (quoted from the class rules)\n\n" + feats +
    "\n- **Mage, Control Table:** " + mage_control_table(),
    "## 5. Setting names used on the cards\n\n" + CANON,
    "## 6. The cards\n\nClass arcana first, then found arcana. Each class arcanum belongs to the class named.\n\n" +
    "\n".join(card_md(c) for c in cards if c["kind"] == "class") + "\n" +
    "\n".join(card_md(c) for c in cards if c["kind"] == "found"),
]
out = ROOT / "analysis/blind_audit_prompt.md"
out.write_text("\n\n".join(parts).rstrip() + "\n")
txt = out.read_text()
print(out, len(txt), "chars,", len(txt.split()), "words")
