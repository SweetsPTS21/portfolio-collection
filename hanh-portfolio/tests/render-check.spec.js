import { test, expect } from '@playwright/test';

test('portfolio renders the botanical garden experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5177/');

  await expect(page.getByRole('heading', { name: 'Trần Hồng Hạnh' })).toBeVisible();
  await expect(page.getByLabel('Thông tin cá nhân').getByText('Luật học')).toBeVisible();
  await expect(page.locator('.garden-background')).toBeVisible();
  await expect(page.locator('.leaf')).toHaveCount(10);
  await expect(page.locator('.project-grid .plant-label-card')).toHaveCount(6);
  await expect(page.locator('.seed-badge').first()).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'ABOUT ME' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 1 - Chương 1: Máy tính và các thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số' })).toBeVisible();
  await expect(page.getByText('© 2026 • Trần Hồng Hạnh • Digital Portfolio')).toBeVisible();

  const leafAnimation = await page
    .locator('.leaf')
    .first()
    .evaluate((leaf) => getComputedStyle(leaf).animationName);
  expect(leafAnimation).toContain('leaf-sway');
  expect(consoleErrors).toEqual([]);
});
