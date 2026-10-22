#!/usr/bin/env node
// Render print/arcana_cards.html and print/arcana_stickers.html to PDF, shrinking text to fit each box.
// Fails if any box still overflows at the smallest allowed size (6.4px, about 4.8pt).
const path = require("path");
const { chromium } = require("playwright");
const root = path.resolve(__dirname, "..");

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  let bad = [];
  for (const name of ["arcana_cards", "arcana_stickers"]) {
    const page = await browser.newPage();
    await page.goto("file://" + path.join(root, "print", name + ".html"), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const b = await page.evaluate(() => window.fitAll());
    const small = await page.evaluate(() => [...document.querySelectorAll('.fit')].map(el => [el.dataset.id, parseFloat(getComputedStyle(el).fontSize) * 0.75]).sort((a, b) => a[1] - b[1]).slice(0, 5));
    console.log(name + " smallest text (pt): " + small.map(([id, pt]) => `${id} ${pt.toFixed(1)}`).join(", "));
    bad = bad.concat(b.map(x => `${name}: ${x}`));
    await page.pdf({ path: path.join(root, "print", name + ".pdf"), preferCSSPageSize: true, printBackground: true });
    console.log("wrote print/" + name + ".pdf");
    await page.close();
  }
  await browser.close();
  if (bad.length) { console.log("OVERFLOW\n  " + bad.join("\n  ")); process.exit(1); }
  console.log("all boxes fit");
})();
