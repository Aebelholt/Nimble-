#!/usr/bin/env python3
"""Build the Sejr rule book: rulebook/sejr_rulebook.html, then print it with render_rulebook.js.

Every table is read from the repo, so the book stays in step with the generator and the deck:
  arcana/data/sejr_generator_lists.txt   episode, room, NPC, rival, chargen and forge tables
  arcana/data/sejr_arcana.json           the deck (cut cards are left out)
  arcana/data/sejr_guilds.json           class guilds
  arcana/data/sejr_table_rules.md        arcana table rules
  monster_book/entries + member_meta.js  who turns up at each Stage
Rules text that lives only in the campaign overview is written here, in prose.
"""
import html, json, pathlib, re, subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "rulebook" / "sejr_rulebook.html"
LISTS = ROOT / "arcana/data/sejr_generator_lists.txt"


# ---------- data ----------

def parse_lists(path):
    """Read a Perchance lists panel: top-level names, 2-space items, 4-space children."""
    lists, cur = {}, None
    for line in path.read_text().splitlines():
        if not line.strip() or line.lstrip().startswith("//"):
            continue
        if re.match(r"^[A-Za-z_]\w*\s*$", line):
            cur = line.strip()
            lists[cur] = []
        elif re.match(r"^[A-Za-z_]\w*\(.*\)\s*=>", line) or not line.startswith(" "):
            cur = None
        elif cur and line.startswith("    ") and lists[cur]:
            lists[cur][-1]["children"].append(item(line.strip()))
        elif cur and line.startswith("  "):
            lists[cur].append(item(line.strip()))
    return lists


def item(text):
    m = re.search(r"\s\^(\d+)$", text)
    w = int(m.group(1)) if m else 1
    text = text[: m.start()] if m else text
    return {"text": text.replace("\\=", "="), "w": w, "children": []}


L = parse_lists(LISTS)
txt = lambda name: [i["text"] for i in L[name]]
CARDS = [c for c in json.loads((ROOT / "arcana/data/sejr_arcana.json").read_text()) if c["status"] != "cut"]
BY_NAME = {c["name"]: c for c in CARDS}
GUILDS = json.loads((ROOT / "arcana/data/sejr_guilds.json").read_text())
TABLE_RULES = (ROOT / "arcana/data/sejr_table_rules.md").read_text()
MONSTERS = json.loads(subprocess.run(["node", "-e", """
const fs=require("fs"),p=require("path");const d=p.join(process.argv[1],"monster_book");
const {ROLES}=require(p.join(d,"member_meta.js"));const out=[];
for(const f of fs.readdirSync(p.join(d,"entries")).sort()){for(const e of require(p.join(d,"entries",f))){
 const ms=e.roster?e.roster.filter(m=>m.level!=="Min"):[{name:e.name,level:e.level}];
 const roles=e.roster?[...new Set(ms.map(m=>ROLES[e.name+"/"+m.name]).filter(Boolean))]:[e.role];
 out.push({name:e.name,world:e.world,stage:e.stats.stage,levels:ms.map(m=>String(m.level)),roles,tier:e.tier,cost:e.cost||null});}}
console.log(JSON.stringify(out));""", str(ROOT)], capture_output=True, text=True, check=True).stdout)


# ---------- html helpers ----------

E = html.escape


def md_inline(s):
    s = E(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"`([^`]+)`", r"<i>\1</i>", s)
    return s


def p(s, cls=""):
    return f'<p class="{cls}">{s}</p>' if cls else f"<p>{s}</p>"


def h2(s, sub=""):
    return f'<h2>{s}</h2>' + (f'<div class="sub">{sub}</div>' if sub else "")


def block(*parts, cls=""):
    return f'<div class="block {cls}">' + "".join(parts) + "</div>"


def table(headers, rows, cls="", widths=None):
    cg = "".join(f'<col style="width:{w}">' for w in widths) if widths else ""
    th = "".join(f"<th>{h}</th>" for h in headers)
    tr = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows)
    return f'<table class="{cls}"><colgroup>{cg}</colgroup><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table>'


def die_for(n):
    return {2: "d2", 3: "d3", 4: "d4", 6: "d6", 8: "d8", 10: "d10", 12: "d12", 20: "d20", 36: "d36"}.get(n, f"1–{n}")


def dtable(head, items, die=None, raw=False, extra=None):
    """Numbered table. items: strings, or (text, weight) to turn weights into ranges."""
    rows, n = [], 0
    for it in items:
        t, w = (it if isinstance(it, tuple) else (it, 1))
        lo, n = n + 1, n + w
        rows.append([f"{lo}" if lo == n else f"{lo}–{n}", t if raw else E(t)] + (extra(it) if extra else []))
    return table([die or die_for(n), head], rows, "dt", ["2.6em", "auto"])


def weighted(name):
    return [(i["text"], i["w"]) for i in L[name]]


def chapter(title, sub, body, cls=""):
    return f'<section class="chapter {cls}"><header class="ch"><h1>{title}</h1><div class="chsub">{sub}</div></header>{body}</section>'


def cols(*blocks):
    return '<div class="cols">' + "".join(blocks) + "</div>"


def boxes(n, cls="bx"):
    return "".join(f'<span class="{cls}"></span>' for _ in range(n))


def clock(n=6, label=""):
    return f'<span class="clock">{boxes(n)}</span>' + (f' <span class="cl">{label}</span>' if label else "")


# ---------- chapters ----------

def cover():
    return f"""<section class="cover">
<div class="title">Sejr</div>
<div class="tag">a drop-in Nimble campaign in the City of Arches</div>
<div class="lede">
<p>The city is thousands of years old and nobody controls its arches. Keys exist, and whoever holds one decides where an arch opens. Patrons hold plenty, so the city's politics are route politics: who can move people and goods wins. Out past the walls, the places nobody travels to any more are quietly going wrong.</p>
<p>You are professionals with lives of your own, thrown together on gigs. Each of you carries an arcanum you haven't figured out yet, and a place in the city to come home to. One gig a session, played by whoever shows up.</p>
</div>
<svg class="arch" viewBox="0 0 200 186" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#6e6455" stroke-width="0.9"><path d="M48,110 A52,52 0 0 1 152,110"/><path d="M32,110 A68,68 0 0 1 168,110"/><line x1="48.0" y1="110.0" x2="32.0" y2="110.0"/><line x1="49.5" y1="97.6" x2="34.0" y2="93.7"/><line x1="54.0" y1="85.8" x2="39.8" y2="78.4"/><line x1="61.1" y1="75.5" x2="49.1" y2="64.9"/><line x1="70.5" y1="67.2" x2="61.4" y2="54.0"/><line x1="81.6" y1="61.4" x2="75.9" y2="46.4"/><line x1="93.7" y1="58.4" x2="91.8" y2="42.5"/><line x1="106.3" y1="58.4" x2="108.2" y2="42.5"/><line x1="118.4" y1="61.4" x2="124.1" y2="46.4"/><line x1="129.5" y1="67.2" x2="138.6" y2="54.0"/><line x1="138.9" y1="75.5" x2="150.9" y2="64.9"/><line x1="146.0" y1="85.8" x2="160.2" y2="78.4"/><line x1="150.5" y1="97.6" x2="166.0" y2="93.7"/><line x1="152.0" y1="110.0" x2="168.0" y2="110.0"/><path d="M32,110 V178 M48,110 V178 M152,110 V178 M168,110 V178"/><path d="M26,110 H52 M148,110 H174 M24,178 H54 M146,178 H176"/><path d="M18,182 H182"/></g><g fill="#6e6455"><circle cx="86" cy="78" r="0.9"/><circle cx="104" cy="92" r="0.9"/><circle cx="118" cy="72" r="0.9"/><circle cx="95" cy="120" r="0.9"/><circle cx="111" cy="135" r="0.9"/><circle cx="90" cy="150" r="0.9"/><circle cx="108" cy="160" r="0.9"/></g></svg>
<div class="toc">
<div><b>Players</b> How we play · Make a hero · Arcana · Guilds</div>
<div><b>Game master</b> The episode · Rooms and people · Patrons · Trackers · Bia · Who's out there</div>
<div><b>Appendices</b> The deck in full · Forge an arcanum · Sheets</div>
</div>
<div class="colophon">Runs on Nimble 2 (Core Rules 3.2, GM Guide 3.0). Anything not written here works as Nimble says. Sejr is an independent fan campaign set in the City of Arches.</div>
</section>"""


def how_we_play():
    fmt = block(h2("The table"), "<ul>"
        "<li><b>One gig a session.</b> Three hours, whoever shows. Every session is a bottle episode that works for one player or a full table.</li>"
        "<li><b>The arch is the door.</b> The map is drawn on the mat, and the arch is the way in and out of it.</li>"
        "<li><b>Absent heroes are busy elsewhere in the city.</b> Their players tick an arcana ritual instead of losing ground.</li>"
        "<li><b>Levels follow the group.</b> New and returning players join at the average group level, as the same hero with a beard.</li>"
        "<li><b>Milestones.</b> The group levels every two or three episodes, so attendance never splits the party.</li>"
        "<li><b>Renown</b> rises by 1 each episode and is capped at the average group level. It sets the Stage and how hard the rooms get.</li>"
        "<li><b>Fail forward.</b> A failure moves a clock. It never ends the session.</li>"
        "</ul>")
    nimble = block(h2("Nimble, for 5e players"),
        p("Sejr runs on Nimble 2. If you know 5e you know most of it: the six familiar abilities fold into STR, DEX, INT and WIL, "
          "attacks always roll damage (a 1 on the Primary Die misses, the highest number crits and explodes), and on your turn you have three actions. "
          "Monsters don't: they move, use what's on their stat block, and their turn ends."),
        p("Anything this book doesn't say works as the Nimble Core Rules say."))
    tags = block(h2("Gifts and traits"),
        p("Every hero has two <b>gifts</b>, one word for each of their class's two key stats (Quick, Studied, Steady), and two <b>traits</b> (Proud, Loyal, Restless)."),
        "<ul><li><b>Invoke</b> a gift or trait in a dramatic moment for advantage. Once per hero per episode, at the GM's call.</li>"
        "<li><b>Suffer</b> a trait: take disadvantage because of who you are, and tick your arcana ritual.</li></ul>")
    skills = block(h2("Skills and specialties"),
        p("The A5e skill list is the table's vocabulary (see Make a hero). When you roll, argue which Nimble skill applies from your sheet and the fiction. "
          "A stretch gets disadvantage, never a flat no."),
        p("A <b>specialty</b> gives advantage. You start with two, plus your INT if it's positive, and gain one more at levels 5, 9, 13 and 17."),
        p("<b>Shared history.</b> The first time two heroes share a gig, each may rewrite one life event to include the other and gain a specialty. At most two per hero, each with a different partner."))
    absent = block(h2("Coming and going"),
        p("The session opens with a <b>last time</b> line: one sentence per hero, so anyone who missed a week walks straight back in."),
        p("A hero returning after time away rolls on the <b>Beard</b> table."),
        dtable("Beard", txt("beard")))
    return chapter("How we play", "the table, the system, and what's different here",
                   cols(fmt, nimble, tags, skills, absent))


KEY = {"Berserker": ("STR", "DEX"), "Cheat": ("DEX", "INT"), "Commander": ("STR", "INT"), "Hunter": ("DEX", "WIL"),
       "Mage": ("INT", "WIL"), "Oathsworn": ("STR", "WIL"), "Shadowmancer": ("INT", "DEX"), "Shepherd": ("WIL", "STR"),
       "Songweaver": ("WIL", "INT"), "Stormshifter": ("WIL", "DEX"), "Zephyr": ("DEX", "STR")}


def make_hero():
    steps = block(h2("Make a hero"), "<ol class='steps'>"
        "<li><b>Class.</b> Pick one, or roll d12 and reroll a 12. Note its two key stats.</li>"
        "<li><b>Ancestry.</b> Pick any from the Nimble books.</li>"
        "<li><b>Stats.</b> Pick an array and put the highest numbers in your key stats.</li>"
        "<li><b>Gifts and traits.</b> One gift word for each key stat; two traits.</li>"
        "<li><b>Three life events.</b> Origin, Youth, Recent. Answer the questions, pick one skill from each, and keep any tie you like as a thread.</li>"
        "<li><b>Specialties.</b> Two, plus INT if positive, in skills you picked.</li>"
        "<li><b>Arcanum.</b> Draw one, unexamined. Don't read the card yet.</li>"
        "<li><b>Holding or guild.</b> A place in the city, or your class guild.</li>"
        "<li><b>Look, habit, mark, secret.</b> Roll or pick.</li>"
        "<li><b>Level 1,</b> or the average group level. Then roll the first gig.</li></ol>")
    cls = block(h2("Classes"), table(["d12", "Class", "Key stats"],
        [[str(i + 1), c, " and ".join(KEY[c])] for i, c in enumerate(txt("hero_class"))] + [["12", "<i>Reroll</i>", ""]], "dt", ["2.6em", "auto", "6em"]))
    arrays = block(h2("Stat arrays"), dtable("Array", txt("stat_array"), "d3"))
    anc_common = [i["text"] for i in L["hero_ancestry"] if i["w"] > 1]
    anc_rare = [i["text"] for i in L["hero_ancestry"] if i["w"] == 1]
    anc = block(h2("Ancestry", "pick, or roll d6: 1–5 common, 6 rare"),
                p("<b>Common.</b> " + ", ".join(anc_common) + "."),
                p("<b>Rare.</b> " + ", ".join(anc_rare) + "."))
    gifts = block(h2("Gift words"), table(["Stat", "Words"],
        [[i["text"], ", ".join(c["text"] for c in i["children"])] for i in L["stat_word"]], "", ["3.4em", "auto"]))
    traits = block(h2("Traits"), dtable("Trait", txt("trait")))
    life = "".join(block(h2(t, "d12 · each gives a tag, two questions, a choice of two skills and a tie"),
                         dtable("Event", txt(n), raw=True), cls="wide") for t, n in
                   [("Origin", "life_origin"), ("Youth", "life_youth"), ("Recent", "life_recent")])
    ties = block(h2("Ties", "d4 for each life event"), dtable("Tie", txt("relationship")),
                 p("A tie is a named person: a friend, patron, rival or adversary. Keep it and it becomes a card on the thread board."))
    holding = block(h2("Holding"), p("Your place in the city, and what's odd about it."),
                    dtable("Place", txt("holding_place")), dtable("Quirk", txt("holding_quirk")))
    marks = block(h2("Faction mark"), dtable("Mark", txt("faction_mark_single") + ["Two marks: roll twice more"], "d10"))
    look = block(h2("Look, habit, secret"), table(["d20", "Look", "Habit", "Secret"],
        [[str(i + 1), a, b, c] for i, (a, b, c) in enumerate(zip(txt("npc_appearance"), txt("npc_does"), txt("npc_secret")))],
        "dt small", ["2.6em", "auto", "auto", "auto"]), cls="wide")
    skills = block(h2("Skills and specialties", "the A5e list: pick from your life events, specialize in two"),
                   table(["Skill", "Specialties"], [[re.sub(r"(?<=[a-z])(?=[A-Z])", " ", i["text"]),
                          ", ".join(c["text"] for c in i["children"])] for i in L["a5e_spec"]], "small", ["8em", "auto"]), cls="wide")
    return chapter("Make a hero", "fifteen minutes, then out the door",
                   cols(steps, cls, arrays, anc, gifts, traits, ties, holding, marks) + life + look + skills)


def arcana():
    sec = {}
    for part in TABLE_RULES.split("\n## ")[1:]:
        title, body = part.split("\n", 1)
        sec[title.strip()] = [md_inline(b[2:].strip()) for b in body.strip().splitlines() if b.startswith("- ")]
    def rules(title, keep=lambda s: True):
        items = [s for s in sec.get(title, []) if keep(s)]
        return "<ul>" + "".join(f"<li>{re.sub(r' ?\(<i>[^<]*</i>[^)]*\)| In Perchance: <i>[^<]*</i>\.', '', s)}</li>" for s in items) + "</ul>"
    what = block(h2("What an arcanum is"),
        p("Every hero starts with an arcanum: an object with a story and a power nobody has worked out yet. It starts <b>unexamined</b>. The card has six parts."),
        table(["Part", "What it does"], [
            ["Object", "What it looks like and where it came from. You know this much."],
            ["Unlock", "A ritual of two or three deeds, ticked off in play. When the last box fills, the arcanum wakes."],
            ["Risk", "What can go wrong on the final deed."],
            ["Resource", "One tracker the powers spend or fill: pips, a d6 against accumulation, a toggle, or Wounds."],
            ["Powers", "What it does once awake. At least one spends the resource; at least one is free or passive."],
            ["Escalation", "What happens when the resource runs dry or overflows. Usually someone comes for it."]], "", ["6em", "auto"]))
    ritual = block(h2("The arcana ritual"),
        p("Each hero has one ritual track: the unlock boxes on their card. A box ticks when you do the deed in play. It also ticks once when you are absent, and once when you suffer a trait."),
        p("<b>The final box is only ever filled at the table.</b>"),
        p("<b>University ranks</b> follow the ritual: <i>Novice</i> (unexamined), <i>Reader</i> (first trait revealed), <i>Wielder</i> (reliable use; patron jobs open), <i>Cracker</i> (broken open). Enrolling is optional. A student gets the job board, a trade chapter (a specialty and a holding upgrade) and arcana training between episodes. Without enrolling, an arcanum advances only through play."))
    draw = block(h2("The draw", "d20, plus your legacy bonus"),
        dtable("Arcanum", txt("other_arcanum") + txt("legacy_arcanum_top"), "d20+"),
        p("<b>Legacy bonus.</b> +1 for each of your heroes who died, retired, or was lost to an arcanum's Escalation, up to +3. Only a legacy bonus reaches 21–23."))
    rewards = block(h2("Faction rewards", "never drawn; handed out in play"),
        p("Class arcana come from your class guild at Journeyman rank (see Guilds). These five come from factions: " +
          ", ".join(c["name"] for c in CARDS if c["pool"] == "faction_reward" and c["kind"] != "class") + "."))
    table_rules = block(h2("Table rules for arcana"),
        "<h3>Off-screen refills</h3>" + rules("Off-screen refills"),
        "<h3>Readings</h3>" + rules("Readings"),
        "<h3>Unknowns are rolls</h3>" + rules("Unknowns are rolls"),
        "<h3>Escalations and the thread board</h3>" + rules("Escalations and the thread board"),
        "<h3>Long durations</h3>" + rules("Long durations"), cls="wide")
    return chapter("Arcana", "the thing you carry and haven't worked out yet",
                   cols(what, ritual, draw, rewards) + table_rules)


def guilds():
    r = GUILDS["rules"]
    rules = block(h2("Holding or guild"), p(E(r["choice"])), p("<b>A guild gives</b> " + E(r["guild_gives"][0].lower() + r["guild_gives"][1:])),
                  p("<b>It costs</b> " + E(r["cost"][0].lower() + r["cost"][1:])),
                  "<ul>" + "".join(f"<li>{E(x)}</li>" for x in r["ranks"]) + "</ul>", p(E(r["class_lock"])))
    rows = [[f"<b>{E(g['name'])}</b><br><span class='muted'>{E(g['cls'])} · {E(g['hall'])}</span>",
             E(g["teaches"]), E(g["asks"]), E(g["split"]), E(g["master"] or "named at the table")] for g in GUILDS["guilds"]]
    tbl = block(h2("The eleven guilds"), table(["Guild", "Teaches", "Asks", "Split", "Master"], rows, "small",
                                               ["11em", "5em", "auto", "auto", "auto"]), cls="wide")
    cards = "".join(block(f"<h3>{E(g['name'])} <span class='muted'>· {E(g['cls'])}</span></h3>",
        p(f"<b>Wants</b> {E(g['wants'])}. <b>Teeth:</b> {E(g['teeth'])}. <b>Keeps</b> {E(g['keeps'])}. "
          f"<b>Journeyman:</b> {E(g['gives'])}. <b>Rival:</b> {E(g['rival'])}.")) for g in GUILDS["guilds"])
    return chapter("Guilds", "the alternative to a holding", cols(rules) + tbl + '<div class="cols gm">' + cards + "</div>")


STAGES = ["Market Square festival", "Villas of the Second Rise", "Public Baths and the Falls of the Three Gods",
          "Cliffs of the Dead", "Theater of Whispers", "Arch of Kings"]
GENRE = ["comedy and heist", "noir and intrigue", "rumor and romance", "ghost story", "masks and secrets", "arrivals and the weird"]


def episode():
    loop = block(h2("The session loop", "seven steps, three doors"), "<ol class='steps'>"
        "<li><b>Last time.</b> One sentence per hero. Absent players tick their arcana ritual and may make one off-screen refill.</li>"
        "<li><b>Pick a door.</b> <i>City</i> (trouble at home), <i>Arch</i> (a patron with a key) or a <i>Thread</i> card from the board. If nobody picks, the hottest clock goes first. Or roll d6: 1–3 City, 4–6 Arch.</li>"
        "<li><b>Where.</b> City: roll the Stage. Arch: roll patron, debt and far side.</li>"
        "<li><b>The job.</b> Roll the hook and the But.</li>"
        "<li><b>The map.</b> Three to five areas, each rolled on Rooms.</li>"
        "<li><b>Play.</b> At every scene change, roll But+.</li>"
        "<li><b>Close.</b> One thread closes and one opens. Renown +1 (capped). Absent players tick. Neglect advances for skipped places. Level up every two or three episodes.</li></ol>")
    stage_rows = [[str(i + 1), STAGES[i], GENRE[i]] for i in range(6)] + [
        ["7–8", "the Lower Reaches", "crime and the Black Hand"], ["9–10", "the Lost Cisterns", "flood horror"],
        ["11–12", "Sunken Revvia", "dread"], ["13+", "through an arch", "genre set by the key; roll a far side"]]
    stage = block(h2("City: the Stage", "d6 + renown, renown capped at the average group level"),
        table(["Total", "Where", "Genre"], stage_rows, "dt", ["3em", "auto", "auto"]),
        p("<b>Cost.</b> A City episode ticks the Neglect clock of one place the party skipped:"),
        dtable("Neglected", txt("neglect_place")),
        p("<b>Map size.</b> 3 or 4 areas (d2)."))
    tier = block(h2("Tier", "from capped renown"),
        table(["Renown", "Tier", "Arch danger", "Traps"], [["0–3", "1", "unsafe", "low"], ["4–7", "2", "risky", "mid"], ["8+", "3", "deadly", "high"]], "", ["4em", "3em", "auto", "auto"]))
    arch = block(h2("Arch: who, what it costs, where"), dtable("Patron", txt("patron")), dtable("Debt", txt("debt")),
        dtable("Far side", txt("far_side")), table(["d6", "Size", "Areas"], [["1–2", "Small", "3"], ["3–5", "Medium", "4"], ["6", "Large", "5"]], "dt", ["2.6em", "auto", "3em"]),
        dtable("Site", weighted("site_type")), p("Danger follows the tier."))
    hook = block(h2("The hook", "d20 and d20, then But"), table(["d20", "Do", "What"],
        [[str(i + 1), a, b] for i, (a, b) in enumerate(zip(txt("detail1"), txt("detail2")))], "dt", ["2.6em", "auto", "auto"]),
        dtable("But", txt("but_table")))
    verb = block(h2("Same verb, different success"),
        p("Many hooks reduce to one of six verbs: <b>Find, Escort, Stop, Steal, Bury, Prove</b> (d6). What counts as success depends on who is paying. For “find the relic”:"),
        table(["Patron", "Success looks like"], [["Archkeepers", "returned, unopened"], ["Black Hand", "sold quietly"],
               ["Golden Council", "logged"], ["University", "examined"]], "", ["8em", "auto"]))
    butplus = block(h2("But+", "at every scene change: d6 + scene number"),
        table(["Total", "Result"], [["1–2", "<b>Foreshadow.</b> Roll below."], ["3", "<b>Faction.</b> Roll a faction, a want, and add them to the tracker."],
              ["4", "<b>Monster.</b> A solo or a mob, native to the Stage (see Who's out there)."], ["5", "<b>Twist.</b> Roll on But."],
              ["6", "<b>Dusk.</b> Light, clock and exits all tighten."], ["7+", "<b>Dark.</b> The scenario turns, and whatever was coming arrives."]], "dt", ["3em", "auto"]),
        dtable("Foreshadow", txt("foreshadow")),
        dtable("Faction", txt("faction")[:-1] + ["a local band: roll a kind, and a mob adjective"]),
        dtable("Band", txt("band_kind")), dtable("They want", txt("faction_want")))
    guard = block(h2("Guardrails"), "<ul>"
        "<li>Factions and threats enter only through But+ and NPC rooms, never through prep.</li>"
        "<li>Stages move on table choices only. But+ can foreshadow a stage, never trigger it.</li>"
        "<li>A twist is filtered through the patron: which version of it fits them?</li>"
        "<li>Dice roll the how, never the who or the why.</li></ul>")
    return chapter("The episode", "how a session is rolled and run", cols(loop, stage, tier, arch, verb, butplus, guard) + '<div class="cols">' + hook + "</div>")


STAGE_KITS = json.loads((ROOT / "rulebook/stages.json").read_text())["stages"]
TAGS = ("Enemies", "Friends", "Complications", "Things", "Places")


def stage_kits():
    intro = p("A kit for each Stage the setting books cover least. Roll or pick from each column when a scene needs a face, a twist, "
              "a prize or a place. Stage 1 and 3 lean on the gazetteer, Stage 4 on the Cliffs of the Dead chapter.", "intro")
    out = intro
    for k in STAGE_KITS:
        here = [m for m in MONSTERS if k["n"] in stages_of(m["stage"])[0]]
        mons = ", ".join(f"{E(m['name'])} <span class='muted'>(L{lvl(m)})</span>" for m in here)
        tags = table(["d6"] + list(TAGS), [[str(i + 1)] + [E(k["tags"][t][i]) for t in TAGS] for i in range(6)],
                     "dt small kit", ["2em"] + ["auto"] * 5)
        out += f'<div class="kitpage">' + h2(f"Stage {k['n']} · {E(k['name'])}", E(k["genre"])) + \
            '<div class="cols">' + "".join(p(E(b)) for b in k["blurb"]) + p("<b>At the table.</b> " + E(k["play"])) + \
            p("<b>Canon to lean on.</b> " + E(k["canon"])) + p("<b>Who turns up.</b> " + mons + ".") + "</div>" + tags + "</div>"
    return chapter("Stage kits", "Second Rise, the Theater, the Arch of Kings", out)


def rooms():
    rr = [("Empty", "roll a feature"), ("Empty", "roll a feature"), ("Trap", "roll a trap"), ("Minor hazard", "one hazard"),
          ("Solo monster", "adjective and noun"), ("NPC", "d4 below"), ("Monster mob", "adjective and noun"),
          ("Major hazard", "combined"), ("Treasure", "d4 below"), ("Boss monster", "d4 below")]
    room = block(h2("Rooms", "d10 + average level ÷ 3, rounded down, max 10"),
                 table(["d10", "Room", "Then"], [[str(i + 1), a, b] for i, (a, b) in enumerate(rr)], "dt", ["2.6em", "auto", "auto"]),
                 dtable("Empty feature", txt("empty_feature")))
    trap = block(h2("Traps", "a trap is a single-use monster: count it as level 1, 2 or 4 by tier"),
                 table(["d12", "Type", "Trigger"], [[str(i + 1), a, b] for i, (a, b) in enumerate(zip(txt("trap_type"), txt("trap_trigger")))], "dt", ["2.6em", "auto", "auto"]),
                 p("<b>Flavor.</b> " + ", ".join(txt("trap_adj")) + " · " + ", ".join(txt("trap_noun")) + "."))
    run_trap = block(h2("Springing a trap", "after the Monsters &amp; More trap model"),
                 "<ol class='steps'><li><b>Spot it.</b> A hidden trap: Perception DC 12, 13 or 14 by tier stops the hero short. An obvious hazard needs no roll; it costs time or a detour.</li>"
                 "<li><b>Save.</b> Otherwise a DEX save, read as a band: <b>1–9</b> full damage and the effect; <b>10–14</b> half damage, no effect; <b>15+</b> clear.</li>"
                 "<li><b>Never a lost turn.</b> No trap takes a hero's whole turn. Holds have an escape DC, and conditions end with the hero's next turn.</li></ol>",
                 table(["d4", "Tier 1", "Tier 2", "Tier 3"], [[str(i + 1), a, b, c] for i, (a, b, c) in
                       enumerate(zip(txt("trap_damage_low"), txt("trap_damage_mid"), txt("trap_damage_high")))], "dt small", ["2.4em", "auto", "auto", "auto"]),
                 cls="wide")
    haz = block(h2("Hazards", "minor: one column (d3). Major: two or three"),
                table(["d12", "Movement", "Damage", "Weakening"], [[str(i + 1), a, b, c] for i, (a, b, c) in
                      enumerate(zip(txt("hazard_movement"), txt("hazard_damage"), txt("hazard_weakening")))], "dt", ["2.6em", "auto", "auto", "auto"]),
                p("<b>Major hazard</b> (d4): 1 movement and damage, 2 movement and weakening, 3 damage and weakening, 4 all three."),
                "<ul><li><b>Movement</b> hazards are Difficult Terrain, or a DEX save to cross without falling Prone or sliding 2 spaces.</li>"
                "<li><b>Damage</b> hazards deal 1d6 per tier to anyone who enters or starts a turn in them.</li>"
                "<li><b>Weakening</b> hazards give disadvantage on one kind of roll, or Slowed or Blinded while inside. Never a lost turn.</li></ul>")
    mon = block(h2("Monsters, treasure, bosses"),
                table(["d4", "Solo", "", "Treasure", "Boss"], [[str(i + 1), a, b, c, d] for i, (a, b, c, d) in enumerate(zip(
                    txt("solo_adj"), txt("solo_noun"), ["Hidden", "Guarded by a solo monster", "Protected by a trap", "Protected by a minor hazard"],
                    ["Physically strongest", "Religious leader", "Guarded by a mob", "Supreme sorcerer"]))], "dt small", ["2.4em", "auto", "auto", "auto", "auto"]),
                table(["d6", "Mob", ""], [[str(i + 1), a, b] for i, (a, b) in enumerate(zip(txt("mob_adj") + ["Reroll"], txt("mob_noun") + ["Reroll"]))], "dt", ["2.6em", "auto", "auto"]),
                p("Put a name on it from <i>Who's out there</i> for the Stage."))
    npc = block(h2("NPC rooms", "d4"), dtable("NPC", ["Hiding", "Captive", "Wounded", "A rival crew, if none has appeared this episode; otherwise reroll"]))
    people = block(h2("People", "roll each column, or read across"),
                   table(["d6", "Ancestry", "Age", "Alignment (d3)", "Wealth (d4)"], [[str(i + 1), a, b, c, d] for i, (a, b, c, d) in enumerate(zip(
                       txt("npc_ancestry"), txt("npc_age"), txt("npc_alignment") + ["", "", ""], txt("npc_wealth") + ["", ""]))], "dt small", ["2.4em"] + ["auto"] * 4),
                   table(["d16", "Occupation", "Nickname"], [[str(i + 1), a, b] for i, (a, b) in enumerate(zip(txt("npc_occupation"), txt("npc_nickname")))], "dt small", ["2.6em", "auto", "auto"]),
                   p("Look, habit and secret: use the d20 table in <i>Make a hero</i>."))
    names = block(h2("Names", "by ancestry, d20"), table(["d20"] + [i["text"] for i in L["npc_name"]],
        [[str(r + 1)] + [i["children"][r]["text"] if r < len(i["children"]) else "" for i in L["npc_name"]] for r in range(20)], "dt small names",
        ["2.4em"] + ["auto"] * len(L["npc_name"])), cls="wide")
    tac = {i["text"]: [c["text"] for c in i["children"]] for i in L["rival_tactics"]}
    rival = block(h2("Rival crews", "once per episode, in an NPC room. Met twice: onto the tracker"),
        dtable("Crew", txt("rival_party_name")),
        table(["d6", "Renown", "Wealth", "Doing"], [[str(i + 1), a, b, c] for i, (a, b, c) in enumerate(zip(
            sum([[x["text"]] * x["w"] for x in L["rival_renown"]], []), sum([[x["text"]] * x["w"] for x in L["rival_wealth"]], []), txt("rival_status")))], "dt small", ["2.4em", "auto", "auto", "auto"]),
        dtable("Secret", weighted("rival_secret"), "d36"),
        p("<span class='muted'>d36: roll d6 twice, (first − 1) × 6 + second.</span>"),
        table(["d4", "Lawful", "Neutral", "Chaotic"], [[str(r + 1)] + [tac[a][r] for a in ("Lawful", "Neutral", "Chaotic")] for r in range(4)], "dt small", ["2.4em", "auto", "auto", "auto"]),
        p("<b>Members.</b> Four, each a name, a level (d6) and a class (d6): " + ", ".join(txt("rival_class")) + "."),
        p("<b>Alignment</b> (d3) picks the tactics column."))
    return chapter("Rooms and people", "what's behind each door on the map", cols(room, trap, haz, mon, npc, people, rival) + run_trap + names)


PATRONS = [
    ("Archkeepers", "Nobody hurt, the city undisturbed", "Kindness first, then the Golden Knights. They omit, never lie.", "key passage, shelter", "goodwill", "Welcoming → wary → gatekeeping"),
    ("Black Hand", "Profit nobody can trace", "Cut-outs and deniability. Violence out of sight.", "cash, silence", "leverage", "Errands → entangled → owned"),
    ("Golden Council", "Order, and credit for it", "Writs, licenses, audits, through Roselyn Zeshe.", "standing, pardons", "your name on the record", "Contracting → auditing → conscripting"),
    ("University", "Understand the method, then own it", "Examination, grants, tutors.", "training, ritual ticks", "findings, published as its own", "Open lectures → licensing → monopoly")]


def patrons():
    arm = block(h2("The four armatures", "fixed, so dice or a tired GM can't make them act out of character"),
        table(["Patron", "Wants", "Method", "Pays", "Takes", "Stages"], [[f"<b>{a}</b>", b, c, d, e, f] for a, b, c, d, e, f in PATRONS], "small",
              ["7em", "auto", "auto", "6em", "6em", "8em"]), cls="wide")
    rules = block(h2("Running a patron"), "<ul>"
        "<li><b>Reactions aren't rolled.</b> When the party refuses or betrays a patron, it answers with its Method and its currency.</li>"
        "<li><b>Stages move on table choices only.</b> A patron's stage is a three-step track; But+ can foreshadow a step, never take it.</li>"
        "<li><b>Secrets.</b> Each patron has one. Fix it now, or write three candidates and lock one in at first contact.</li>"
        "<li><b>A party-owned key</b> is a mid-campaign prize. It offends one patron and becomes a thread.</li></ul>")
    keys = block(h2("Keys and the front"),
        p("Keys come in four kinds: one-use, daily, at-will and two-way. In Sejr patrons have plenty; the party doesn't, yet."),
        p("<b>The key-making front.</b> Somebody is learning to make keys. It runs as a front with three stages, <b>Find, Read, Make</b>. The table starts at Find, and the University creeps toward Read. Each stage is a grim portent on the thread board. What tips each stage is a table call; write the portents below as they're decided."),
        "<div class='lines'>" + "".join(f"<div><b>{s}</b><span></span></div>" for s in ("Find", "Read", "Make")) + "</div>")
    extra = block(h2("Other faces"),
        p("The Arch patron table also names Garland Willowmane, High Archkeeper; Roselyn Zeshe, the Queen's Spymaster; a mage of Kartan; and a priest of the Three Sisters. Run each through the armature closest to them."))
    return chapter("Patrons", "four who return and change", arm + cols(rules, keys, extra))


def trackers():
    t = block(h2("Prep is the trackers", "and nothing else"),
        table(["Tracker", "Holds", "Moves when", "Payoff"], [
            ["<b>Thread board</b>", "Six cards: hero ties, arcana, Bia's past, rumors, gazetteer hooks", "One closes and one opens each episode", "Next episode's door"],
            ["<b>Neglect clocks</b>", "One hidden clock per skipped place", "Each City episode ticks the place the party skipped", "A full clock reaches the holding as refugees, raiders, prices or a ruined supplier"],
            ["<b>Faction clocks</b>", "Six steps per patron, local band or rival crew met", "Player choices, never But+ alone", "A full clock becomes a thread and the faction acts in the city"],
            ["<b>Renown</b>", "A number", "+1 each episode finished", "Capped at average level. Sets Stage and room scaling"],
            ["<b>Arcana ritual</b>", "One track per hero", "Absence, suffered traits, and play", "The final step is only played at the table"]], "small",
            ["7em", "auto", "auto", "auto"]), cls="wide")
    rules = block(h2("Tracker rules"), "<ul>"
        "<li>A rival crew met twice, or a local band named on first meeting, goes onto the faction tracker.</li>"
        "<li>When the board is full, a new threat ticks the closest existing clock instead and arrives through that thread.</li>"
        "<li>Commit to one Neglect payoff every three or four episodes. The party never sees the clocks, only what comes of them.</li>"
        "<li>When nobody picks a door, the hottest clock goes first.</li></ul>")
    rumor = block(h2("Rumors for the board", "d16"), dtable("Rumor", txt("rumor"), "d16"))
    neglect = block(h2("Neglect places"), table(["Place", "Clock", "Payoff when full"],
        [[n, clock(6), "<span class='line'></span>"] for n in ("Revlend Marshes", "Doorish Hills", "Deadlands", "Borderlands", "Lower Reaches")], "",
        ["8em", "8em", "auto"]), p("<span class='muted'>Six steps is this book's default; the campaign hasn't fixed a length.</span>"))
    return chapter("Trackers", "the memory a drop-in table doesn't have", t + cols(rules, neglect, rumor))


def bia():
    b = block(h2("Bia, the minotaur paladin"),
        p("Bia anchors the party when attendance is thin. She must never become the spotlight: she never knows the answer, never solves the scene, and counts as a hero for the encounter budget so a lone player still gets a fair fight."),
        "<h3>Frenzy</h3>", p("When Bloodied, Bia saves. On a fail she becomes the labyrinth beast and attacks the nearest creature. A player runs her in frenzy, never the GM."),
        "<h3>Turning back</h3>", p("Pick two or three: she is healed above Bloodied; someone speaks her name or oath words (Influence DC 12); three rounds pass; she harms someone she loves."),
        "<h3>The tally</h3>", p("Mark <b>paladin</b> each time she turns back by choice, <b>beast</b> each time she needs rescue. When one side reaches its number, the table learns who she is. At level 3 the tally can pick her subclass."),
        p("Paladin " + boxes(6) + "&nbsp;&nbsp; Beast " + boxes(6)),
        "<h3>The guardian</h3>", p("A healing guardian companion is her turn-back anchor. Her pain is shared, and the guardian going down is the real threat."))
    return chapter("Bia", "the GM's hero, kept to the edges", cols(b))


BANDS = [("City, Stages 1–6", range(1, 7)), ("Lower Reaches, 7–8", range(7, 9)), ("Lost Cisterns, 9–10", range(9, 11)), ("Sunken Revvia, 11–12", range(11, 13))]


def stages_of(s):
    got, arch = set(), "13+" in s or "arch" in s.lower()
    for a, b in re.findall(r"(\d+)(?:-(\d+))?", s.replace("13+", "")):
        got.update(range(int(a), int(b or a) + 1))
    return got, arch


def lvl(m):
    num = lambda x: eval(x) if re.fullmatch(r"\d+(/\d+)?", x) else 0
    ls = sorted((x for x in m["levels"] if x != "Min"), key=num)
    return ls[0] if len(set(ls)) == 1 else f"{ls[0]}–{ls[-1]}"


def monsters():
    def line(m):
        cost = f", cost {m['cost']}" if m["cost"] else ""
        return f"<li><b>{E(m['name'])}</b> <span class='muted'>L{lvl(m)}{cost} · {E(', '.join(m['roles']))}</span></li>"
    out = []
    for title, rng in BANDS:
        ms = [m for m in MONSTERS if stages_of(m["stage"])[0] & set(rng)]
        out.append(block(h2(title), "<ul class='mon'>" + "".join(line(m) for m in ms) + "</ul>"))
    worlds = {}
    for m in MONSTERS:
        if stages_of(m["stage"])[1]:
            worlds.setdefault("Any world" if m["world"] in ("Core Bestiary", "City of Arches") else m["world"], []).append(m)
    out.append(block(h2("Through an arch, 13+"), "".join(f"<h3>{w}</h3><ul class='mon'>" + "".join(line(m) for m in ms) + "</ul>" for w, ms in worlds.items())))
    intro = p("Every creature in the <i>Sejr Monster Book</i>, by the Stage where it turns up. The book has the stat blocks, tables and hooks. Level is the encounter cost unless a cost is given; a hard fight costs the party's total levels.")
    return chapter("Who's out there", "the Monster Book, sorted by Stage", intro + cols(*out))


def card(c):
    r = c["resource"]
    unlock = "".join(f"<li><span class='bx'></span>{E(u)}</li>" for u in c["unlock"])
    powers = "".join(f"<li>{E(x)}</li>" for x in c["powers"])
    tbl = ""
    if c.get("escalation_table"):
        t = c["escalation_table"]
        tbl = dtable(E(t["title"]), t["rows"])
    who = c["class"] if c["kind"] == "class" else ("Legacy draw" if c.get("legacy_slot") else ("Faction reward" if c["pool"] == "faction_reward" else "Found"))
    return f"""<div class="card"><div class="ct">{E(c['name'])}</div><div class="cs">{E(who)} · {E(c['tier'])}</div>
<p class="obj">{E(c['object'])}</p>
<div class="lab">Unlock</div><ul class="unl">{unlock}</ul>
<p><b>Risk.</b> {E(c['risk'])}</p>
<p><b>Resource.</b> {E(r['text'])}</p>
<div class="lab">Powers</div><ul class="pw">{powers}</ul>
<p><b>Escalation.</b> {E(c['escalation'])}</p>{tbl}</div>"""


def deck():
    order = [n for n in txt("other_arcanum") + txt("legacy_arcanum_top")]
    found = [BY_NAME[n] for n in order if n in BY_NAME]
    fac = [c for c in CARDS if c["pool"] == "faction_reward" and c["kind"] != "class"]
    cls = [c for c in CARDS if c["kind"] == "class"]
    body = p("Every card in play, in full. The player keeps the object line; the GM keeps the rest until it's earned.", "intro")
    for title, cs in (("Found arcana, draw order 1–23", found), ("Faction rewards", fac), ("Class arcana", cls)):
        body += f'<h2 class="dk">{title}</h2><div class="cards">' + "".join(card(c) for c in cs) + "</div>"
    return chapter("The deck", "appendix A · every arcanum in full", body)


def forge():
    roll = block(h2("Forge an arcanum", "for a new card in play, or a gap in the deck"),
        "<ol class='steps'><li><b>Object.</b> d30, or d4: on a 1 add a material, on a 2 make it an amulet instead.</li>"
        "<li><b>Nature.</b> A kind of magic and an element.</li><li><b>Lore lives in</b> one source (d8). Examining it rolls d6 on the clue table.</li>"
        "<li><b>Ritual.</b> Two different unlock deeds (d7) and a risk (d5).</li><li><b>Resource.</b> A name (d10), a size (d4: 3, 3, 4, 5) and a refill (d7).</li>"
        "<li><b>Power</b> (d8), a <b>quirk</b> that's always on (d10), and an <b>escalation</b> (d13).</li><li><b>Name it in play</b>, and check it against the deck's design rules before it reaches the table.</li></ol>")
    t = [block(h2("Object", "d30"), dtable("Object", txt("forge_object")), cls="wide"),
         block(h2("Material"), dtable("Material", txt("forge_material"))),
         block(h2("Amulet", "d11 each"), table(["d11", "Material", "Shape", "Engraving"], [[str(i + 1), a, b, c] for i, (a, b, c) in enumerate(zip(
             txt("forge_amulet_material"), txt("forge_amulet_shape"), txt("forge_amulet_engraving")))], "dt small", ["2.4em", "auto", "auto", "auto"])),
         block(h2("Nature"), dtable("Element", txt("forge_element")), dtable("Magic", txt("forge_magic"))),
         block(h2("Lore"), dtable("Source", txt("forge_source")), p("<b>Clue (d6).</b> " + E(txt("forge_clue")[0].split(". ", 1)[1]))),
         block(h2("Ritual"), dtable("Unlock", txt("forge_unlock")), dtable("Risk", txt("forge_risk"))),
         block(h2("Resource"), dtable("Name", txt("forge_resource")), dtable("Refill", txt("forge_refill"))),
         block(h2("Power"), dtable("Power (RES is the resource)", txt("forge_power"))),
         block(h2("Quirk"), dtable("Quirk", txt("forge_quirk"))),
         block(h2("Escalation"), dtable("Escalation", txt("forge_escalation")), cls="wide")]
    return chapter("Forge an arcanum", "appendix B · random tables", cols(roll, *t[1:]) + t[0])


def sheets():
    stats = "".join(f"<div class='stat'><span class='sn'>{s}</span><span class='sv'></span><span class='sg'>gift</span></div>" for s in ("STR", "DEX", "INT", "WIL"))
    life = "".join(f"<div class='ev'><b>{e}</b><span class='line'></span><span class='tie'>tie</span></div>" for e in ("Origin", "Youth", "Recent"))
    hero = f"""<section class="sheet"><div class="shead"><div class="stitle">Sejr</div><div class="sfields">
<div><span>Name</span></div><div><span>Class</span></div><div><span>Ancestry</span></div><div><span>Level</span></div></div></div>
<div class="sgrid">
<div class="sbox"><h3>Stats</h3>{stats}<div class='hp'><span>HP</span><span class='sv'></span><span>max</span><span class='sv'></span><span>Wounds</span>{boxes(6)}</div></div>
<div class="sbox"><h3>Traits</h3><div class='line'></div><div class='line'></div><p class='hint'>Invoke a gift or trait once per episode for advantage. Suffer a trait: disadvantage, tick your ritual.</p>
<h3>Specialties</h3><div class='line'></div><div class='line'></div><div class='line'></div></div>
<div class="sbox wide"><h3>Life events</h3>{life}</div>
<div class="sbox"><h3>Holding <span class='muted'>or guild</span></h3><div class='line'></div><div class='line'></div><p class='hint'>Guild rank: Apprentice {boxes(1)} Journeyman {boxes(1)} Master {boxes(1)}</p></div>
<div class="sbox"><h3>Look · habit · mark · secret</h3><div class='line'></div><div class='line'></div><div class='line'></div></div>
<div class="sbox wide"><h3>Arcanum</h3><div class='line'></div><p class='hint'>Unexamined until the ritual wakes it. University: Novice {boxes(1)} Reader {boxes(1)} Wielder {boxes(1)} Cracker {boxes(1)}</p>
<div class='ritual'><span>Ritual</span>{boxes(3)}<span>Resource</span>{boxes(6, 'pip')}<span class='muted'>legacy bonus</span>{boxes(3)}</div><div class='line'></div><div class='line'></div></div>
<div class="sbox wide"><h3>Gear and notes</h3><div class='lines4'></div></div>
</div><div class="sfoot">Absent this week: tick your ritual, make one off-screen refill.</div></section>"""
    threads = "".join(f"<div class='thread'><span class='tn'>{i}</span><div class='line'></div><div class='line'></div><div class='tclock'>{clock(6)}</div></div>" for i in range(1, 7))
    pat = "".join(f"<tr><td><b>{a}</b></td><td>{clock(6)}</td><td class='stg'>{' · '.join(f'{boxes(1)} {x}' for x in st.split(' → '))}</td></tr>" for a, *_, st in PATRONS)
    fac = "".join(f"<tr><td class='line'></td><td>{clock(6)}</td><td class='line'></td></tr>" for _ in range(5))
    neg = "".join(f"<tr><td>{n}</td><td>{clock(6)}</td></tr>" for n in ("Revlend Marshes", "Doorish Hills", "Deadlands", "Borderlands", "Lower Reaches"))
    gm = f"""<section class="sheet"><div class="shead"><div class="stitle">Sejr</div><div class="ssub">campaign trackers · GM only</div>
<div class="sfields"><div><span>Renown</span></div><div><span>Avg level</span></div><div><span>Episode</span></div></div></div>
<div class="sbox wide"><h3>Thread board</h3><div class="threads">{threads}</div></div>
<div class="sgrid">
<div class="sbox wide"><h3>Patrons</h3><table class="trk"><tbody>{pat}</tbody></table></div>
<div class="sbox"><h3>Factions, bands, rival crews</h3><table class="trk"><tbody>{fac}</tbody></table></div>
<div class="sbox"><h3>Neglect <span class='muted'>hidden</span></h3><table class="trk"><tbody>{neg}</tbody></table></div>
<div class="sbox wide"><h3>Rival crews met</h3><table class="trk"><thead><tr><th style="width:38%">crew</th><th>met</th><th>tracker</th><th>note</th></tr></thead><tbody>{"".join(f"<tr><td class='line'></td><td>{boxes(2)}</td><td>{boxes(1)}</td><td class='line'></td></tr>" for _ in range(3))}</tbody></table></div>
<div class="sbox wide"><h3>Key-making front</h3><p>Find {boxes(1)} <span class='line inl'></span> Read {boxes(1)} <span class='line inl'></span> Make {boxes(1)} <span class='line inl'></span></p></div>
<div class="sbox wide"><h3>Last time</h3><div class='lines3'></div></div>
</div></section>"""
    run = f"""<section class="sheet"><div class="shead"><div class="stitle">Sejr</div><div class="ssub">episode run sheet</div>
<div class="sfields"><div><span>Episode</span></div><div><span>Players</span></div><div><span>Door</span></div></div></div>
<div class="sgrid">
<div class="sbox wide"><h3>1 · Last time</h3><div class='lines3'></div></div>
<div class="sbox"><h3>2 · Door</h3><p>City {boxes(1)} Arch {boxes(1)} Thread {boxes(1)}</p><div class='line'></div></div>
<div class="sbox"><h3>3 · Where</h3><p>Stage d6 + renown = <span class='bx w'></span></p><div class='line'></div><p class='hint'>Neglect ticks on:</p><div class='line'></div></div>
<div class="sbox wide"><h3>4 · The job</h3><div class='line'></div><p class='hint'>But</p><div class='line'></div><p class='hint'>Patron, debt, and what success means to them</p><div class='line'></div></div>
<div class="sbox wide"><h3>5 · Map</h3><div class='rooms'>{''.join(f"<div><span>{i}</span></div>" for i in range(1, 6))}</div></div>
<div class="sbox wide"><h3>6 · But+ at each scene change</h3><div class='rooms'>{''.join(f"<div><span>{i}</span></div>" for i in range(1, 5))}</div></div>
<div class="sbox wide"><h3>7 · Close</h3><p>Thread closed <span class='line inl'></span> Thread opened <span class='line inl'></span></p>
<p>Renown +1 {boxes(1)} Absent ticked {boxes(1)} Neglect advanced {boxes(1)} Milestone {boxes(1)}</p></div>
</div></section>"""
    return '<section class="chapter"><header class="ch"><h1>Sheets</h1><div class="chsub">appendix C · copy freely</div></header></section>' + hero + gm + run


CSS = (ROOT / "rulebook/rulebook.css").read_text()
FONTS = (ROOT / "rulebook/fonts/fonts.css").read_text()


def main():
    body = "".join([cover(), how_we_play(), make_hero(), arcana(), guilds(), episode(), stage_kits(), rooms(), patrons(), trackers(), bia(),
                    monsters(), deck(), forge(), sheets()])
    OUT.write_text(f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Sejr rule book</title>
<style>{FONTS}{CSS}</style></head><body>{body}</body></html>""")
    print(OUT, len(body) // 1000, "kB of body;", len(CARDS), "cards;", len(MONSTERS), "monster entries")
    subprocess.run(["node", str(ROOT / "rulebook/render_rulebook.js")], check=True)
    underlay()


def underlay():
    """Print margins come out white; lay each page on a full sheet of paper colour."""
    from pypdf import PdfReader, PdfWriter
    pdf, paper = ROOT / "rulebook/sejr_rulebook.pdf", ROOT / "rulebook/paper.tmp.pdf"
    src, w = PdfReader(pdf), PdfWriter()
    for page in src.pages:
        sheet = w.add_page(PdfReader(paper).pages[0])
        sheet.merge_page(page)
    w.add_metadata({"/Title": "Sejr rule book", "/Author": "Sejr"})
    with open(pdf, "wb") as f:
        w.write(f)
    paper.unlink()
    print(pdf, len(src.pages), "pages")


if __name__ == "__main__":
    main()
