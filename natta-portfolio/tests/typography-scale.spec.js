import { expect, test } from '@playwright/test';

const fontSize = async (locator) => {
  const value = await locator.evaluate((element) => getComputedStyle(element).fontSize);
  return Number.parseFloat(value);
};

test('key rem-based text renders at the larger typography scale', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');

  await expect(page.locator('.navbar-name')).toBeVisible();
  await expect(page.locator('.hero-major')).toBeVisible();
  await expect(page.locator('.berry-button')).toBeVisible();

  expect(await fontSize(page.locator('.navbar-name'))).toBeGreaterThanOrEqual(18);
  expect(await fontSize(page.locator('.hero-major'))).toBeGreaterThanOrEqual(18);
  expect(await fontSize(page.locator('.berry-button'))).toBeGreaterThanOrEqual(16);

  await page.goto('/projects');
  await expect(page.locator('.basket-title').first()).toBeVisible();
  await expect(page.locator('.basket-desc').first()).toBeVisible();

  expect(await fontSize(page.locator('.basket-title').first())).toBeGreaterThanOrEqual(19);
  expect(await fontSize(page.locator('.basket-desc').first())).toBeGreaterThanOrEqual(16);
});
