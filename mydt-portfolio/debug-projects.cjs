const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 1440, height: 900 });

  // Grid view
  await p.goto("http://localhost:5173/projects", { waitUntil: "networkidle" });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: "debug-projects.png" });
  console.log("Grid screenshot saved");

  // Modal view — click first "Xem quá trình" button
  const btn = p.locator("button", { hasText: "Xem quá trình" }).first();
  await btn.click();
  await p.waitForTimeout(600);
  await p.screenshot({ path: "debug-projects-modal.png" });
  console.log("Modal screenshot saved");

  await b.close();
})();
