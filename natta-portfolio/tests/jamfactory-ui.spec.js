import { expect, test } from '@playwright/test';

test('JamFactory has clearer conclusion hierarchy and final actions', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/conclusion');

  await expect(page.locator('.jam-insight')).toContainText('làm việc có kế hoạch hơn');
  await expect(page.locator('.jam-section-number')).toHaveText(['01', '02', '03']);

  const sections = page.locator('.jam-section');
  await expect(sections.nth(0)).toHaveClass(/jam-section--changes/);
  await expect(sections.nth(1)).toHaveClass(/jam-section--lessons/);
  await expect(sections.nth(2)).toHaveClass(/jam-section--future/);

  const firstItem = page.locator('.jam-list-item').first();
  await expect(firstItem).toHaveCSS('border-left-width', '4px');
  await expect(firstItem).toHaveCSS('transform', 'none');

  await expect(page.locator('.jam-jar-card--final')).toBeVisible();
  await expect(page.locator('.jam-conclusion-chip')).toHaveText([
    'Có hệ thống',
    'Có kiểm chứng',
    'Có trách nhiệm',
  ]);
  await expect(page.locator('.jam-final-link[href="/projects"]')).toContainText('Xem bài tập');
  await expect(page.locator('.jam-final-link[href="/"]')).toContainText('Trang chủ');
});

test('JamFactory mobile layout stays readable without overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/conclusion');

  const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual(390);

  const jarBody = page.locator('.jar-body').first();
  await expect(jarBody).toHaveCSS('padding-left', '18px');
  await expect(jarBody).toHaveCSS('padding-right', '18px');

  const firstItemBox = await page.locator('.jam-list-item').first().boundingBox();
  const pageBox = await page.locator('.jam-page').boundingBox();
  expect(firstItemBox).not.toBeNull();
  expect(pageBox).not.toBeNull();
  expect(firstItemBox.x).toBeGreaterThanOrEqual(pageBox.x - 1);
  expect(firstItemBox.x + firstItemBox.width).toBeLessThanOrEqual(pageBox.x + pageBox.width + 1);
});
