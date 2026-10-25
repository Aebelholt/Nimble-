#!/usr/bin/env node
// Render the Winter Burrow print documents to A4 PDFs and check every page.
// Checks: content past the page's inner edge, clipped boxes, text under 8pt,
// fonts actually loaded, and PDF page count. Exits 1 on any problem.
// Usage: node render.js [outDir]   (PDFs also land next to the HTML)
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const here = __dirname;
const outDir = process.argv[2];
const DOCS = { "character-sheet": 2, "primer": 2, "gm-sheet": 2, "moves": 1 };
const MIN_PT = 8;

(async () => {
  const browser = await chromium.launch();
  const problems = [];
  for (const [name, wantPages] of Object.entries(DOCS)) {
    const page = await browser.newPage();
    await page.goto("file://" + path.join(here, name + ".html"), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const report = await page.evaluate((MIN_PT) => {
      const out = [];
      const fontsOk = document.fonts.check('12pt "IM Fell English"') && document.fonts.check('12pt "Alegreya Sans"')
        && [...document.fonts].some(f => f.family.includes("Fell") && f.status === "loaded")
        && [...document.fonts].some(f => f.family.includes("Alegreya") && f.status === "loaded");
      if (!fontsOk) out.push("web fonts not loaded");
      const mm = 96 / 25.4;
      let smallest = 99;
      document.querySelectorAll(".page").forEach((pg, i) => {
        const pr = pg.getBoundingClientRect();
        const cs = getComputedStyle(pg);
        const inner = { top: pr.top + parseFloat(cs.paddingTop) - 0.5, left: pr.left + parseFloat(cs.paddingLeft) - 0.5,
          right: pr.right - parseFloat(cs.paddingRight) + 0.5, bottom: pr.bottom - parseFloat(cs.paddingBottom) + 0.5 };
        pg.querySelectorAll("*").forEach(el => {
          if (el.closest(".footer")) return;
          const r = el.getBoundingClientRect();
          if (!r.width && !r.height) return;
          const tag = (el.className && typeof el.className === "string" ? "." + el.className.split(" ")[0] : el.tagName.toLowerCase());
          const label = `p${i + 1} ${tag} "${(el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40)}"`;
          const outside = x => { const q = x.getBoundingClientRect(); return q.bottom > inner.bottom || q.right > inner.right || q.left < inner.left || q.top < inner.top; };
          if (outside(el) && !(el.parentElement !== pg && outside(el.parentElement)))
            out.push(`outside page area: ${label} (bottom ${((r.bottom - inner.bottom) / mm).toFixed(1)}mm, right ${((r.right - inner.right) / mm).toFixed(1)}mm)`);
          const s = getComputedStyle(el);
          if (s.overflow !== "visible" && (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1))
            out.push(`clipped: ${label}`);
        });
        // footer must not collide with content
        const foot = pg.querySelector(".footer");
        if (foot) {
          const fr = foot.getBoundingClientRect();
          [...pg.children].filter(c => c !== foot).forEach(c => {
            const r = c.getBoundingClientRect();
            if (r.bottom > fr.top) out.push(`p${i + 1} content runs into footer: "${c.textContent.replace(/\s+/g, " ").trim().slice(0, 30)}"`);
          });
        }
        const walker = document.createTreeWalker(pg, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const t = walker.currentNode;
          if (!t.textContent.trim()) continue;
          const pt = parseFloat(getComputedStyle(t.parentElement).fontSize) * 0.75;
          smallest = Math.min(smallest, pt);
          if (pt < MIN_PT - 0.01) out.push(`p${i + 1} text ${pt.toFixed(2)}pt: "${t.textContent.trim().slice(0, 40)}"`);
        }
      });
      return { out, pages: document.querySelectorAll(".page").length, smallest };
    }, MIN_PT);
    const pdf = path.join(here, name + ".pdf");
    await page.pdf({ path: pdf, preferCSSPageSize: true, printBackground: true });
    const pdfPages = parseInt(execFileSync("pdfinfo", [pdf]).toString().match(/Pages:\s+(\d+)/)[1], 10);
    if (pdfPages !== wantPages) report.out.push(`PDF has ${pdfPages} pages, want ${wantPages}`);
    console.log(`${name}: ${pdfPages} pages, smallest text ${report.smallest.toFixed(1)}pt, ${report.out.length} problems`);
    report.out.forEach(p => problems.push(`${name}: ${p}`));
    if (outDir) fs.copyFileSync(pdf, path.join(outDir, name + ".pdf"));
    await page.close();
  }
  await browser.close();
  if (problems.length) { console.log("PROBLEMS\n  " + problems.join("\n  ")); process.exit(1); }
  console.log("all pages clean");
})();
