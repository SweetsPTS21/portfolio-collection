import { expect, test } from '@playwright/test';

test('navbar stays centered after Framer Motion animation completes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.waitForTimeout(900);

  const navbar = page.locator('.navbar');
  await expect(navbar).toBeVisible();

  const box = await navbar.boundingBox();
  expect(box).not.toBeNull();

  const navbarCenter = box.x + box.width / 2;
  expect(Math.abs(navbarCenter - 640)).toBeLessThanOrEqual(1);
});
