"""Make a form-fillable character sheet, optionally pre-filled.

Usage: python3 build_fillable.py <base.pdf> <spots.json> <out.pdf> [values.json]

base.pdf and spots.json come from measure_sheet.js. values.json maps field names to
text (strings) or ticks (true). Fields are laid over the sheet with no border or fill,
so the printed boxes show through.
"""
import json
import sys
import tempfile

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import Color
from reportlab.pdfgen import canvas

INK = Color(0.137, 0.118, 0.102)
CLEAR = Color(1, 1, 1, alpha=0)

base_path, spots_path, out_path = sys.argv[1:4]
values = json.load(open(sys.argv[4])) if len(sys.argv) > 4 else {}
spots = json.load(open(spots_path))
base = PdfReader(base_path)
known = {s["name"] for s in spots}
unknown = sorted(set(values) - known)
if unknown:
    sys.exit("values for fields that don't exist: " + ", ".join(unknown))

overlay = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False).name
w, h = float(base.pages[0].mediabox.width), float(base.pages[0].mediabox.height)
c = canvas.Canvas(overlay, pagesize=(w, h))
for page_no in range(len(base.pages)):
    for s in (s for s in spots if s["page"] == page_no):
        v = values.get(s["name"])
        if s["kind"] == "check":
            size = min(s["w"], s["h"])
            c.acroForm.checkbox(
                name=s["name"], x=s["x"], y=s["y"], size=size, checked=bool(v),
                buttonStyle=s.get("style", "cross"), borderWidth=0, borderColor=CLEAR,
                fillColor=CLEAR, textColor=INK, forceBorder=False)
        else:
            c.acroForm.textfield(
                name=s["name"], value=v or "", x=s["x"], y=s["y"], width=s["w"], height=s["h"],
                fontName="Helvetica", fontSize=s.get("size", 10), borderWidth=0,
                borderColor=CLEAR, fillColor=CLEAR, textColor=INK, forceBorder=False,
                fieldFlags="multiline" if s["kind"] == "multi" else "")
    c.showPage()
c.save()

writer = PdfWriter(clone_from=PdfReader(overlay))
for i, page in enumerate(writer.pages):
    page.merge_page(base.pages[i], over=False)
# Draw ticks as plain lines rather than a ZapfDingbats glyph, which some viewers lack,
# and centre the fields that ask for it.
from pypdf.generic import (ArrayObject, DictionaryObject, FloatObject, NameObject,
                           NumberObject, StreamObject, TextStringObject)

style_of = {s["name"]: s.get("style", "cross") for s in spots}
align_of = {s["name"]: s.get("align", 0) for s in spots}

def appearance(w, h, on, style):
    ops = ""
    if on:
        ink = "0.137 0.118 0.102"
        if style == "circle":
            r, cx, cy, k = min(w, h) / 2 - 1.5, w / 2, h / 2, 0.5523
            kr = k * r
            ops = (f"q {ink} rg {cx + r:.2f} {cy:.2f} m "
                   f"{cx + r:.2f} {cy + kr:.2f} {cx + kr:.2f} {cy + r:.2f} {cx:.2f} {cy + r:.2f} c "
                   f"{cx - kr:.2f} {cy + r:.2f} {cx - r:.2f} {cy + kr:.2f} {cx - r:.2f} {cy:.2f} c "
                   f"{cx - r:.2f} {cy - kr:.2f} {cx - kr:.2f} {cy - r:.2f} {cx:.2f} {cy - r:.2f} c "
                   f"{cx + kr:.2f} {cy - r:.2f} {cx + r:.2f} {cy - kr:.2f} {cx + r:.2f} {cy:.2f} c f Q")
        else:
            m = max(1.2, min(w, h) * 0.18)
            ops = (f"q {ink} RG {max(1.0, min(w, h) * 0.12):.2f} w 0 J "
                   f"{m:.2f} {m:.2f} m {w - m:.2f} {h - m:.2f} l "
                   f"{m:.2f} {h - m:.2f} m {w - m:.2f} {m:.2f} l S Q")
    st = StreamObject()
    st.set_data(ops.encode())
    st.update({NameObject("/Type"): NameObject("/XObject"), NameObject("/Subtype"): NameObject("/Form"),
               NameObject("/BBox"): ArrayObject([FloatObject(0), FloatObject(0), FloatObject(w), FloatObject(h)])})
    return writer._add_object(st)

for page in writer.pages:
    for ref in page.get("/Annots", []):
        a = ref.get_object()
        name = a.get("/T")
        if a.get("/FT") == "/Btn":
            x0, y0, x1, y1 = [float(v) for v in a["/Rect"]]
            w, h = x1 - x0, y1 - y0
            on = a.get("/V") == "/Yes"
            a[NameObject("/AP")] = DictionaryObject({NameObject("/N"): DictionaryObject({
                NameObject("/Yes"): appearance(w, h, True, style_of.get(name, "cross")),
                NameObject("/Off"): appearance(w, h, False, "cross")})})
            a[NameObject("/AS")] = NameObject("/Yes" if on else "/Off")
            a.pop("/MK", None)
            a[NameObject("/DA")] = TextStringObject("0 g")
        elif align_of.get(name):
            a[NameObject("/Q")] = NumberObject(align_of[name])

# Redraw text fields so alignment and non-ASCII letters (ø, æ) come out right.
text_values = {s["name"]: values.get(s["name"], "") for s in spots if s["kind"] != "check"}
for page in writer.pages:
    writer.update_page_form_field_values(page, text_values, auto_regenerate=False)

# Every field carries its own appearance, so viewers don't need to redraw them.
writer.set_need_appearances_writer(False)
writer.write(out_path)
print(f"wrote {out_path}: {len(spots)} fields, {len(values)} filled")
