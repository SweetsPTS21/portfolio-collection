import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

test('portfolio renders the candy pop experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5176/');

  await expect(page.getByRole('heading', { name: 'Linh' })).toBeVisible();
  await expect(page.getByLabel('Thông tin cá nhân').getByText('Digital Portfolio')).toBeVisible();
  await expect(page.locator('.candy-background')).toBeVisible();
  await expect(page.locator('.candy-bubble')).toHaveCount(8);
  await expect(page.locator('.candy-project-card')).toHaveCount(6);
  await expect(page.locator('.sticker-badge').first()).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'VỀ TÔI' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 1: Máy tính và các thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 6: An toàn số và Đạo đức học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Linh • Digital Portfolio')).toBeVisible();

  const bubbleAnimation = await page
    .locator('.candy-bubble')
    .first()
    .evaluate((bubble) => getComputedStyle(bubble).animationName);
  expect(bubbleAnimation).toContain('candy-float');
  expect(consoleErrors).toEqual([]);
});

test('portfolio data removes student self-reference pronouns', async () => {
  const dataSource = readFileSync('src/data/portfolioData.js', 'utf8');

  expect(dataSource).not.toMatch(/(^|[^A-Za-zÀ-ỹ])em([^A-Za-zÀ-ỹ]|$)/i);
});
