"""Build print/wood-map.html: the wood as a point crawl. Coordinates in mm, drawn in px."""
import math, pathlib

PX = 96 / 25.4
W, H = 184, 122  # map area, mm

def p(v):
    return f"{v * PX:.1f}"

NODES = {  # name: (x, y, hours from home, label side)
    "Beech roots": (40, 90, "home", "below"),
    "Bramble Hedge": (40, 50, "1", "left"),
    "Underoak": (104, 19, "2", "right"),
    "The Brook": (72, 90, "1", "below"),
    "Gravel Pit": (72, 114, "2", "left"),
    "Fallen Larch": (110, 90, "2", "below"),
    "The Shed": (130, 62, "3", "left"),
    "Long Field": (140, 35, "5", "left"),
    "The Weir": (152, 10, "7", "left"),
}
EDGES = [  # a, b, label, style
    ("Beech roots", "Bramble Hedge", "1", "path"),
    ("The Brook", "Underoak", "1 · ice", "ice", 1, 9),
    ("Beech roots", "The Brook", "1", "path"),
    ("The Brook", "Gravel Pit", "1", "path"),
    ("The Brook", "Fallen Larch", "1 · ice", "ice", -1, 10),
    ("Fallen Larch", "The Shed", "1", "path"),
    ("The Shed", "Long Field", "2 (1)", "snow"),
    ("Long Field", "The Weir", "2 (1)", "snow"),
]

def node_svg(name, x, y, hrs, side):
    r = 3.2
    home = hrs == "home"
    out = [f'<circle cx="{p(x)}" cy="{p(y)}" r="{p(r)}" class="{"home" if home else "node"}"/>']
    if not home:
        out.append(f'<text x="{p(x)}" y="{p(y + 1.15)}" class="hrs">{hrs}</text>')
    dx, dy, anchor = {"below": (0, 8.2, "middle"), "left": (-5.2, 1.4, "end"), "right": (5.2, 1.4, "start")}[side]
    out.append(f'<text x="{p(x + dx)}" y="{p(y + dy)}" text-anchor="{anchor}" class="name">{name}</text>')
    return "\n".join(out)

def edge_svg(a, b, label, style, side=1, shift=0):
    (x1, y1, *_), (x2, y2, *_) = NODES[a], NODES[b]
    ang = math.atan2(y2 - y1, x2 - x1)
    s, e = 3.8, 3.8
    xa, ya = x1 + s * math.cos(ang), y1 + s * math.sin(ang)
    xb, yb = x2 - e * math.cos(ang), y2 - e * math.sin(ang)
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    nx, ny = -math.sin(ang), math.cos(ang)
    off = 3.6 * side
    lx, ly = mx + nx * off + shift, my + ny * off + 1.2
    line = f'<line x1="{p(xa)}" y1="{p(ya)}" x2="{p(xb)}" y2="{p(yb)}" class="e-{style}"/>'
    if style == "snow":
        line += f'<line x1="{p(xa + nx*1.1)}" y1="{p(ya + ny*1.1)}" x2="{p(xb + nx*1.1)}" y2="{p(yb + ny*1.1)}" class="e-snow"/>'
    return line + f'<text x="{p(lx)}" y="{p(ly)}" class="elab">{label}</text>'

brook = "M {} {} C {} {}, {} {}, {} {} S {} {}, {} {} S {} {}, {} {}".format(
    p(96), p(0), p(86), p(22), p(98), p(42), p(92), p(60), p(86), p(84), p(91), p(96), p(95), p(110), p(90), p(122))
tunnel = "M {} {} C {} {}, {} {}, {} {} S {} {}, {} {}".format(
    p(75.5), p(116), p(120), p(124), p(176), p(110), p(174), p(60), p(170), p(16), p(155.6), p(11))

svg = [f'<svg width="{W}mm" height="{H}mm" viewBox="0 0 {p(W)} {p(H)}" xmlns="http://www.w3.org/2000/svg">',
       f'<path d="{brook}" class="brook"/>',
       f'<text x="{p(70)}" y="{p(40)}" class="area">the Brook</text>',
       f'<text x="{p(60)}" y="{p(8)}" class="side">this side</text>',
       f'<text x="{p(140)}" y="{p(116)}" class="side">across</text>',
       f'<path d="{tunnel}" class="tunnel"/>',
       f'<text x="{p(150)}" y="{p(84)}" class="elab" text-anchor="middle">4 · moles\' tunnel</text>',
       f'<text x="{p(150)}" y="{p(88.4)}" class="elab small" text-anchor="middle">3 underground</text>']
svg += [edge_svg(*e) for e in EDGES]
svg += [node_svg(n, *v) for n, v in NODES.items()]
svg.append("</svg>")

tpl = pathlib.Path(__file__).with_name("wood-map.template.html").read_text()
out = pathlib.Path(__file__).resolve().parents[1] / "print" / "wood-map.html"
out.write_text(tpl.replace("<!--MAP-->", "\n".join(svg)))
print("wrote", out)
