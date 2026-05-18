import { expect, test } from "@playwright/test";

function intersects(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

test("decorative cruise assets stay outside content and controls", async ({ page }) => {
  await page.goto("/");

  const card = await page.locator(".page-card").boundingBox();
  const ship = await page.locator(".asset-ship").boundingBox();
  const nav = await page.locator(".cruise-nav").boundingBox();
  const navIconStrip = await page.locator(".asset-icon-strip").boundingBox();
  const projectStripCount = await page.locator(".project-icon-strip").count();

  expect(card, "page card should render").not.toBeNull();
  expect(ship, "ship asset should render").not.toBeNull();
  expect(nav, "nav should render").not.toBeNull();
  expect(navIconStrip, "nav decorative icon strip should render").not.toBeNull();
  expect(projectStripCount, "cruise icon strip should not be a large content block on About tab").toBe(0);

  expect(intersects(ship, card)).toBe(false);
  expect(intersects(navIconStrip, nav)).toBe(false);
  expect(ship.y + ship.height).toBeLessThan(card.y);
});
