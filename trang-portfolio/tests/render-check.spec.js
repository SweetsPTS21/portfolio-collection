import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

test('portfolio renders the tropical summer experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5176/');

  await expect(page.getByRole('heading', { name: 'Hoàng Thu Trang' })).toBeVisible();
  await expect(page.getByLabel('Thông tin cá nhân').getByText('Luật Thương mại Quốc tế')).toBeVisible();
  await expect(page.locator('.summer-sky')).toBeVisible();
  await expect(page.locator('.wave-layer')).toHaveCount(2);
  await expect(page.locator('.postcard-card')).toHaveCount(6);
  await expect(page.locator('.sticker-badge').first()).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'VỀ TÔI' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 1: Máy tính và các thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 6: An toàn số và Đạo đức học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Hoàng Thu Trang • Digital Portfolio')).toBeVisible();

  const waveAnimation = await page
    .locator('.wave-layer')
    .first()
    .evaluate((wave) => getComputedStyle(wave).animationName);
  expect(waveAnimation).toContain('wave');
  expect(consoleErrors).toEqual([]);
});

test('portfolio data removes student self-reference pronouns', async () => {
  const dataSource = readFileSync('src/data/portfolioData.js', 'utf8');

  expect(dataSource).not.toMatch(/(^|[^A-Za-zÀ-ỹ])em([^A-Za-zÀ-ỹ]|$)/i);
});
