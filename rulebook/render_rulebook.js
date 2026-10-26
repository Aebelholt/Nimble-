// Print rulebook/sejr_rulebook.html to rulebook/sejr_rulebook.pdf with Chromium.
const path = require("path");
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require("@playwright/test")); }
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "sejr_rulebook.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const foot = `<div style="width:100%;font-family:Georgia,serif;font-style:italic;font-size:7.5px;color:#6e6455;padding:0 15mm;display:flex;justify-content:space-between;-webkit-print-color-adjust:exact">
<span>Sejr</span><span class="pageNumber"></span></div>`;
  await page.pdf({ path: path.join(__dirname, "sejr_rulebook.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: "<span></span>", footerTemplate: foot });
  // A full-bleed sheet of paper; build_rulebook.py lays every page on top of it.
  const bg = await browser.newPage();
  await bg.setContent('<html style="background:#f6f0e1"><body style="margin:0"></body></html>');
  await bg.pdf({ path: path.join(__dirname, "paper.tmp.pdf"), format: "A4", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log("wrote rulebook/sejr_rulebook.pdf");
})();
