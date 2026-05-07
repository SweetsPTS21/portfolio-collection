import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

test('portfolio renders the floating island experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5175/');

  await expect(page.getByRole('heading', { name: 'Mai Hồng Thắm' })).toBeVisible();
  await expect(page.getByLabel('Thông tin cá nhân').getByText('Luật học')).toBeVisible();
  await expect(page.locator('.sky-background')).toBeVisible();
  await expect(page.locator('.cloud-layer')).toHaveCount(2);
  await expect(page.locator('.floating-island')).toHaveCount(4);

  await expect(page.getByRole('heading', { level: 2, name: 'ABOUT ME' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Định hướng' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mục tiêu' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Năng lực' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Đang rèn' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Nguyên tắc' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Công cụ' })).toBeVisible();
  await expect(page.getByText('Định hướng và mục tiêu phát triển')).toHaveCount(0);
  await expect(page.getByText('Công cụ và nền tảng đã sử dụng')).toHaveCount(0);
  await expect(page.getByText('OneDrive hoặc Dropbox để lưu trữ đám mây')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Chương 1: Thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Chương 6: An toàn học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Mai Hồng Thắm • Digital Portfolio')).toBeVisible();

  const firstIslandTransform = await page
    .locator('.floating-island')
    .first()
    .evaluate((island) => getComputedStyle(island).animationName);
  expect(firstIslandTransform).toContain('float');
  expect(consoleErrors).toEqual([]);
});

test('portfolio data removes student self-reference pronouns', async () => {
  const dataSource = readFileSync('src/data/portfolioData.js', 'utf8');

  expect(dataSource).not.toMatch(/(^|[^A-Za-zÀ-ỹ])em([^A-Za-zÀ-ỹ]|$)/i);
});
