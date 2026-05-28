import { expect, test } from '@playwright/test';

test('hero shows rectangular avatar on the right on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');

  const copy = page.locator('.hero-copy');
  const frame = page.locator('.hero-avatar-frame');
  const image = page.locator('.hero-avatar-image');

  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('src', '/avatar.png');
  await expect(image).toHaveAttribute('alt', /.+/);

  const copyBox = await copy.boundingBox();
  const frameBox = await frame.boundingBox();
  expect(copyBox).not.toBeNull();
  expect(frameBox).not.toBeNull();
  expect(frameBox.x).toBeGreaterThan(copyBox.x + copyBox.width);
  expect(frameBox.height).toBeGreaterThan(frameBox.width);
  expect(frameBox.height / frameBox.width).toBeLessThan(1.55);
});

test('hero stacks without overflow on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const hero = page.locator('.hero-content');
  const frame = page.locator('.hero-avatar-frame');
  const heroBox = await hero.boundingBox();
  const frameBox = await frame.boundingBox();

  expect(heroBox).not.toBeNull();
  expect(frameBox).not.toBeNull();
  expect(frameBox.x).toBeGreaterThanOrEqual(heroBox.x - 1);
  expect(frameBox.x + frameBox.width).toBeLessThanOrEqual(heroBox.x + heroBox.width + 1);
});
