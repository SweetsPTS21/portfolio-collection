// debug-bg.js — Playwright diagnostic for EnrichedBackground rendering
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto("http://localhost:5173", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000); // Let animations initialize

  // 1. Screenshot to visually confirm what is shown
  await page.screenshot({ path: "debug-bg-screenshot.png", fullPage: false });
  console.log("📸 Screenshot saved: debug-bg-screenshot.png");

  // 2. Check if .enrichedBackgroundContainer exists and its dimensions
  const containerInfo = await page.evaluate(() => {
    const el = document.querySelector(".enrichedBackgroundContainer");
    if (!el) return { found: false };
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return {
      found: true,
      width: rect.width,
      height: rect.height,
      zIndex: style.zIndex,
      position: style.position,
      overflow: style.overflow,
      display: style.display,
    };
  });
  console.log("\n🔍 .enrichedBackgroundContainer:", JSON.stringify(containerInfo, null, 2));

  // 3. Check Layer 0 SVG (sky base)
  const svgInfo = await page.evaluate(() => {
    const svgs = document.querySelectorAll(".enrichedBackgroundContainer svg");
    return Array.from(svgs).map((svg, i) => {
      const rect = svg.getBoundingClientRect();
      const style = window.getComputedStyle(svg);
      return {
        index: i,
        width: rect.width,
        height: rect.height,
        viewBox: svg.getAttribute("viewBox"),
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        hasChildren: svg.children.length,
      };
    });
  });
  console.log("\n🔍 SVG elements inside container:", JSON.stringify(svgInfo, null, 2));

  // 4. Check if motion.div layers are rendered
  const motionDivs = await page.evaluate(() => {
    const container = document.querySelector(".enrichedBackgroundContainer");
    if (!container) return [];
    const children = Array.from(container.children);
    return children.map((el, i) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        index: i,
        tagName: el.tagName,
        className: el.className,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        opacity: style.opacity,
        display: style.display,
        transform: style.transform,
        childCount: el.children.length,
      };
    });
  });
  console.log("\n🔍 Direct children of container:", JSON.stringify(motionDivs, null, 2));

  // 5. Check the background assets (bgScroll, bgBook, bgMusicNotes, etc.)
  const assetSelectors = [
    ".bgScroll",
    ".bgBook",
    ".bgInkWave",
    ".bgMusicNotes",
    ".bgSealWrapper",
    ".bgHeadphoneWrapper",
    ".bgHeadphone",
    ".bgSealOuter",
  ];

  const assetInfo = await page.evaluate((selectors) => {
    return selectors.map((sel) => {
      const el = document.querySelector(sel);
      if (!el) return { selector: sel, found: false };
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        selector: sel,
        found: true,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        opacity: style.opacity,
        display: style.display,
        visibility: style.visibility,
        animation: style.animationName,
      };
    });
  }, assetSelectors);
  console.log("\n🔍 Background Asset visibility:", JSON.stringify(assetInfo, null, 2));

  // 6. Check actual rendered background color at key positions
  const colorSamples = await page.evaluate(() => {
    // We can't do pixel-level color without canvas, but check computed bg
    const routeShell = document.querySelector(".routeShell");
    const body = document.body;
    if (!routeShell) return { routeShell: null };
    const shellStyle = window.getComputedStyle(routeShell);
    const bodyStyle = window.getComputedStyle(body);
    return {
      routeShellBg: shellStyle.backgroundColor,
      routeShellZIndex: shellStyle.zIndex,
      bodyBg: bodyStyle.backgroundColor,
    };
  });
  console.log("\n🔍 Background color info:", JSON.stringify(colorSamples, null, 2));

  // 7. Check for console errors
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.waitForTimeout(500);
  console.log("\n🔴 Console errors:", errors.length ? errors : "None");

  // 8. Check CSS custom properties loaded correctly
  const cssVars = await page.evaluate(() => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    return {
      bgBase: style.getPropertyValue("--lan-bg-base").trim(),
      bgPaper: style.getPropertyValue("--lan-bg-paper").trim(),
      lanBlue: style.getPropertyValue("--lan-blue").trim(),
      lanSky: style.getPropertyValue("--lan-sky").trim(),
      lanMint: style.getPropertyValue("--lan-mint").trim(),
    };
  });
  console.log("\n🎨 CSS Custom Properties:", JSON.stringify(cssVars, null, 2));

  // 9. Check if the sky gradient SVG defs are rendering
  const svgDefs = await page.evaluate(() => {
    const grad = document.getElementById("enrichSkyGrad");
    const scrollGrad = document.getElementById("scrollPaperGrad");
    const bookPageL = document.getElementById("bookPageGradL");
    return {
      enrichSkyGrad: grad ? "found" : "MISSING",
      scrollPaperGrad: scrollGrad ? "found" : "MISSING",
      bookPageGradL: bookPageL ? "found" : "MISSING",
    };
  });
  console.log("\n🎨 SVG gradient defs:", JSON.stringify(svgDefs, null, 2));

  // 10. Check zIndex stacking — is background blocked by main?
  const zStack = await page.evaluate(() => {
    const els = [
      { name: "routeShell", el: document.querySelector(".routeShell") },
      { name: "enrichedBg", el: document.querySelector(".enrichedBackgroundContainer") },
      { name: "main", el: document.querySelector("main") },
      { name: "nav", el: document.querySelector("nav") },
    ];
    return els.map(({ name, el }) => {
      if (!el) return { name, found: false };
      const s = window.getComputedStyle(el);
      return {
        name,
        found: true,
        zIndex: s.zIndex,
        position: s.position,
        background: s.backgroundColor,
      };
    });
  });
  console.log("\n🔢 Z-Index stack:", JSON.stringify(zStack, null, 2));

  await browser.close();
  console.log("\n✅ Diagnostic complete.");
})();
