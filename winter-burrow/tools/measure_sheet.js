#!/usr/bin/env node
// Render a form-ready copy of print/character-sheet.html (pre-ticked boxes left empty)
// and write the position of every fillable spot, in PDF points, for build_fillable.py.
// Usage: node measure_sheet.js <out.pdf> <out.json>
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const [outPdf, outJson] = process.argv.slice(2);
const printDir = path.resolve(__dirname, "..", "print");

(async () => {
  const html = fs.readFileSync(path.join(printDir, "character-sheet.html"), "utf8")
    .replace(/class="bx on"/g, 'class="bx"');
  const tmp = path.join(printDir, ".form-base.html");
  fs.writeFileSync(tmp, html);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + tmp, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const spots = await page.evaluate(() => {
    const PT = 0.75;
    const pages = [...document.querySelectorAll(".page")];
    const out = [];
    const add = (name, kind, el, opts = {}) => {
      const pg = el.closest(".page");
      const p = pg.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const inset = opts.inset || [0, 0, 0, 0]; // top, right, bottom, left in px
      out.push({
        name, kind, page: pages.indexOf(pg),
        x: (r.left - p.left + inset[3]) * PT,
        y: (p.bottom - r.bottom + inset[2]) * PT,
        w: (r.width - inset[1] - inset[3]) * PT,
        h: (r.height - inset[0] - inset[2]) * PT,
        ...opts.extra,
      });
    };
    const [front, back] = pages;
    // Front
    const lines = front.querySelectorAll(".head .fields .line");
    add("Name", "text", lines[0], { extra: { size: 13 } });
    add("City trade", "text", lines[1], { extra: { size: 13 } });
    front.querySelectorAll("table.stats tr").forEach((tr, i) => {
      if (!i) return;
      const k = tr.querySelector("td.k").textContent.trim();
      add(`${k} max`, "text", tr.querySelector(".box.max"), { extra: { size: 16, align: 1 } });
      add(`${k} current`, "text", tr.querySelector(".box.cur"), { extra: { size: 16, align: 1 } });
    });
    const dice = ["d4", "d6", "d8", "d10", "d12"];
    front.querySelectorAll(".track .die").forEach((d, i) => {
      const r = d.getBoundingClientRect(); const s = 16;
      add(`Warmth ${dice[i]} now`, "check", d, { inset: [3, r.width - 3 - s, r.height - 3 - s, 3], extra: { style: "circle" } });
    });
    front.querySelectorAll(".tops .bx").forEach((b, i) => add(`Warmth ${dice[i]} top`, "check", b));
    const cloth = ["City coat", "Scarf", "Mittens", "Felted boots", "Waxed cloak"];
    front.querySelectorAll(".clothes .bx").forEach((b, i) => add(`Clothing ${cloth[i]}`, "check", b));
    const slotNames = ["Main paw", "Off paw", "Body 1", "Body 2", "Pack 1", "Pack 2", "Pack 3", "Strap", "Pack 4", "Pack 5", "Pack 6"];
    front.querySelectorAll(".slot").forEach((s, i) => add(slotNames[i], "multi", s, { inset: [18, 3, 3, 3], extra: { size: 11 } }));
    const day = ["Morning 1", "Morning 2", "Morning 3", "Morning 4", "Afternoon 1", "Afternoon 2", "Afternoon 3", "Afternoon 4", "Dusk 1", "Dusk 2", "Night 1", "Night 2", "Night 3", "Night 4"];
    front.querySelectorAll(".day .bx").forEach((b, i) => add(`Hour ${day[i]}`, "check", b));
    add("Full belly", "check", front.querySelector(".belly .bx"));
    const pats = ["Scarf", "Mittens", "Felted boots", "Waxed cloak", "Extra 1", "Extra 2"];
    front.querySelectorAll(".patterns td").forEach((td, i) => {
      const b = td.querySelector(".bx");
      add(`Pattern ${pats[i]}`, "check", b);
      if (i >= 4) {
        const br = b.getBoundingClientRect(), tr = td.getBoundingClientRect();
        add(`Pattern ${pats[i]} name`, "text", td, { inset: [1, 2, 1, br.right - tr.left + 3], extra: { size: 9 } });
      }
    });
    add("Notes", "multi", front.querySelector(".notes .lines"), { extra: { size: 9 } });
    // Back
    const rungs = ["Forlorn", "Simple", "Good"];
    back.querySelectorAll("table.rooms tr").forEach((tr, i) => {
      if (!i) return;
      const room = tr.querySelector("td.room").textContent.trim();
      tr.querySelectorAll(".bx").forEach((b, j) => add(`${room} ${rungs[j]}`, "check", b));
    });
    back.querySelectorAll(".mat").forEach(m => {
      const label = m.querySelector("b").textContent.trim();
      add(`Stockpile ${label}`, "text", m, { inset: [20, 6, 4, 6], extra: { size: 20, align: 1 } });
    });
    back.querySelectorAll(".keep-row").forEach((row, i) => {
      const rr = row.getBoundingClientRect(), cb = row.children[1].getBoundingClientRect();
      add(`Keepsake ${i + 1}`, "text", row, { inset: [0, rr.right - cb.left + 4, 1, 0], extra: { size: 11 } });
      add(`Keepsake ${i + 1} remembered`, "check", row.querySelector(".bx"));
    });
    back.querySelectorAll("table.beds tr").forEach((tr, i) => {
      if (!i) return;
      const tds = tr.querySelectorAll("td");
      add(`Bed ${i} kind`, "text", tds[0], { inset: [1, 2, 1, 2], extra: { size: 9 } });
      tds[1].querySelectorAll(".bx").forEach((b, j) => add(`Bed ${i} night ${j + 1}`, "check", b));
      const eaten = tds[2].querySelector(".bx");
      add(`Bed ${i} eaten`, "check", eaten);
      const er = eaten.getBoundingClientRect(), tr2 = tds[2].getBoundingClientRect();
      add(`Bed ${i} gain`, "text", tds[2], { inset: [1, 2, 1, er.right - tr2.left + 22], extra: { size: 9 } });
    });
    return out;
  });
  await page.pdf({ path: outPdf, preferCSSPageSize: true, printBackground: true });
  await browser.close();
  fs.unlinkSync(tmp);
  fs.writeFileSync(outJson, JSON.stringify(spots, null, 1));
  console.log(`${spots.length} spots`);
})();
