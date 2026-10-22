#!/usr/bin/env python3
"""Write the print files for physical arcana cards.

print/arcana_cards.html     A6 card fronts (105 x 148.5 mm), four per A4 sheet: name, object, and three
                            empty framed panels (Unlock, Power, Price) for stickers.
print/arcana_stickers.html  The stickers for those panels, on full-sheet A4 sticker paper, grouped by card
                            in the same order and numbered to match.
Render both to PDF with: node tools/render_print.js
"""
import html, json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "print"
OUT.mkdir(exist_ok=True)
cards = [c for c in json.loads((ROOT / "data/sejr_arcana.json").read_text()) if c["status"] != "cut"]

# Same order as the deck viewer: draw faces 1-20, legacy 21-23, faction rewards, class arcana.
face = 0
for c in cards:
    if c["kind"] == "found" and c.get("pool", "draw") == "draw" and not c.get("legacy_slot"):
        face += 1
        c["_face"] = face
    elif c.get("legacy_slot"):
        c["_face"] = c["legacy_slot"]
cards.sort(key=lambda c: (c["kind"] == "class", c.get("_face") or 99, c["name"]))
for i, c in enumerate(cards, 1):
    c["_n"] = f"{i:02d}"

e = html.escape


def tag(c):
    if c["kind"] == "class":
        return f"{c['class']} · class arcanum"
    if c.get("legacy_slot"):
        return f"{c['tier']} · legacy face {c['legacy_slot']}"
    if c.get("pool") == "faction_reward":
        return f"{c['tier']} · faction reward"
    return f"{c['tier']} · d20 face {c['_face']}"


def power_line(p):
    head, sep, rest = p.partition(": ")
    if not sep:
        return e(p)
    name, paren, tail = head.partition(" (")
    return f"<b>{e(name)}</b>{(' (' + e(tail)) if paren else ''}: {e(rest)}"


def track(c):
    r = c["resource"]
    t = r["type"].lower()
    if "wound" in t:
        return ""
    n = r["max"] if isinstance(r.get("max"), int) else (1 if "toggle" in t else 6)
    return f"<div class='track'><span>{e(r['name'])}</span>{'<i></i>' * n}</div>"


STYLE = """
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500;700&family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap">
<style>
:root { --ink: #1c2129; --muted: #5d6673; --rule: #8b8f96; --accent: #8a5a12; }
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; color: var(--ink); font-family: "Alegreya Sans", "Liberation Sans", sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.fit { overflow: hidden; }
"""

CARD_CSS = """
.sheet { width: 210mm; height: 297mm; display: grid; grid-template-columns: 105mm 105mm; grid-template-rows: 148.5mm 148.5mm; page-break-after: always; position: relative; }
.sheet::before, .sheet::after { content: ""; position: absolute; background: none; }
.sheet::before { left: 105mm; top: 0; bottom: 0; border-left: 0.2mm dashed #c4c7cc; }
.sheet::after { top: 148.5mm; left: 0; right: 0; border-top: 0.2mm dashed #c4c7cc; }
.card { padding: 5mm; display: grid; grid-template-rows: 11mm 15mm 28mm 48mm 33.5mm; row-gap: 0.75mm; }
.head { display: flex; flex-direction: column; justify-content: flex-end; border-bottom: 0.3mm solid var(--ink); padding-bottom: 1mm; }
.name { font: 700 13pt/1.05 "Alegreya SC", Georgia, serif; }
.tag { display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; }
.obj { font-size: 7.5pt; line-height: 1.25; font-style: italic; padding-top: 1mm; }
.panel { display: grid; grid-template-rows: 3mm 1fr; }
.panel b { font-size: 6pt; letter-spacing: .14em; color: var(--accent); align-self: end; }
.box { border: 0.3mm solid var(--rule); border-radius: 1.2mm; }
.panel.price .box { border-style: dashed; }
"""

STICKER_CSS = """
.page { width: 210mm; height: 297mm; padding: 10mm 10mm 0 10mm; display: grid; grid-template-columns: 93mm 93mm; column-gap: 4mm; align-items: start; page-break-after: always; overflow: hidden; }
.col { display: grid; row-gap: 3mm; }
.item { display: grid; row-gap: 0.5mm; }
.cap { height: 3mm; font: 600 6pt "Alegreya Sans", sans-serif; color: var(--muted); letter-spacing: .05em; text-transform: uppercase; }
.st { width: 93mm; border: 0.2mm dashed #9aa0a8; padding: 1.4mm 1.8mm; font-size: 6.6pt; line-height: 1.2; }
.st.u { height: 23mm; } .st.p { height: 43mm; } .st.x { height: 28.5mm; }
.st p { margin: 0 0 0.6mm; } .st ul, .st ol { margin: 0; padding-left: 3mm; } .st li { margin: 0 0 0.4mm; }
.st .risk { color: var(--muted); }
.track { display: flex; gap: 1mm; align-items: center; margin-bottom: 0.8mm; font-weight: 700; font-size: 6.4pt; }
.track span { margin-right: 1mm; }
.track i { width: 2.6mm; height: 2.6mm; border: 0.25mm solid var(--ink); border-radius: 0.4mm; display: inline-block; }
"""

FIT_JS = """
<script>
window.fitAll = function () {
  const bad = [];
  document.querySelectorAll('.fit').forEach(el => {
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollHeight > el.clientHeight + 0.5 && size > 6.4) { size -= 0.2; el.style.fontSize = size + 'px'; }
    if (el.scrollHeight > el.clientHeight + 0.5) bad.push(el.dataset.id);
  });
  return bad;
};
</script>
"""

# Card fronts.
sheets = []
for i in range(0, len(cards), 4):
    cells = []
    for c in cards[i:i + 4]:
        cells.append(f"""<div class="card">
  <div class="head"><div class="tag"><span>{e(tag(c))}</span><span>{c['_n']}</span></div><div class="name">{e(c['name'])}</div></div>
  <div class="obj fit" data-id="{c['_n']} object">{e(c['object'])}</div>
  <div class="panel"><b>UNLOCK</b><div class="box"></div></div>
  <div class="panel"><b>POWER</b><div class="box"></div></div>
  <div class="panel price"><b>PRICE</b><div class="box"></div></div>
</div>""")
    sheets.append(f"<section class='sheet'>{''.join(cells)}</section>")
(OUT / "arcana_cards.html").write_text(f"<!doctype html><meta charset='utf-8'><title>Arcana card fronts</title>{STYLE}{CARD_CSS}</style>{FIT_JS}{''.join(sheets)}")

# Stickers, packed one by one into two 93 mm columns per A4 page (277 mm usable height).
H = {"u": 23, "p": 43, "x": 28.5}
items = []
for c in cards:
    unl = "<ul>" + "".join(f"<li>{e(u)}</li>" for u in c["unlock"]) + "</ul>" + f"<p class='risk'><b>Risk.</b> {e(c['risk'])}</p>"
    rtext = re.sub(r"^" + re.escape(c["resource"]["name"]) + r" \([^)]*\)\.\s*", "", c["resource"]["text"])
    powr = track(c) + f"<p>{e(rtext)}</p>" + "".join(f"<p>{power_line(p)}</p>" for p in c["powers"])
    esc = f"<p>{e(c['escalation'])}</p>"
    if c.get("escalation_table"):
        t = c["escalation_table"]
        esc += f"<p><b>{e(t['title'])} (d6):</b> " + "; ".join(f"{k} {e(r)}" for k, r in enumerate(t["rows"], 1)) + ".</p>"
    for k, label, body in [("u", "Unlock", unl), ("p", "Power", powr), ("x", "Price", esc)]:
        items.append((H[k] + 3.5 + 3, f"""<div class="item"><div class="cap">{c['_n']} · {e(c['name'])} · {label}</div><div class="st {k} fit" data-id="{c['_n']} {label.lower()}">{body}</div></div>"""))
pages, cols, col, used = [], [], [], 0.0
for h, frag in items:
    if used + h > 277:
        cols.append(col); col, used = [], 0.0
        if len(cols) == 2:
            pages.append(cols); cols = []
    col.append(frag); used += h
cols.append(col)
pages.append(cols)
pages = ["<section class='page'>" + "".join("<div class='col'>" + "".join(cl) + "</div>" for cl in pg) + "</section>" for pg in pages]
(OUT / "arcana_stickers.html").write_text(f"<!doctype html><meta charset='utf-8'><title>Arcana stickers</title>{STYLE}{STICKER_CSS}</style>{FIT_JS}{''.join(pages)}")
print(OUT, len(cards), "cards,", len(sheets), "card sheets,", len(pages), "sticker sheets")
