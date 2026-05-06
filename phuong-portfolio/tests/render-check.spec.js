import { test, expect } from '@playwright/test';

test('portfolio renders the interactive desk and opens section panels', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5174/');
  await expect(page.getByRole('heading', { name: 'Lý Bảo Phượng' }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mở Giới thiệu' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mở Dự án' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mở Tổng kết' })).toBeVisible();

  await page.getByRole('button', { name: 'Mở Giới thiệu' }).click();
  const aboutDialog = page.getByRole('dialog', { name: 'Giới thiệu' });
  await expect(aboutDialog).toBeVisible();
  await expect(page.locator('.study-book')).toBeVisible();
  await expect(page.locator('.study-card').first()).toBeVisible();
  const aboutBox = await aboutDialog.boundingBox();
  expect(aboutBox?.width).toBeGreaterThan(1000);
  await expect(page.getByText('Mục tiêu học thuật')).toBeVisible();
  await page.getByRole('button', { name: 'Đóng panel' }).click();

  await page.getByRole('button', { name: 'Mở Dự án' }).click();
  await expect(page.getByRole('dialog', { name: 'Dự án' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 1 - Chương 1' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 4 - Chương 6' })).toBeVisible();

  await page.getByRole('button', { name: 'Xem Bài tập 1 - Chương 1' }).click();
  await expect(page.getByRole('dialog', { name: 'Bài tập 1 - Chương 1' })).toBeVisible();
  await expect(page.locator('iframe.pdf-frame')).toBeVisible();

  await page.getByRole('button', { name: 'Đóng PDF' }).click();
  await expect(page.getByRole('dialog', { name: 'Bài tập 1 - Chương 1' })).toHaveCount(0);
  await expect(page.getByRole('dialog', { name: 'Dự án' })).toBeVisible();

  await page.getByRole('button', { name: 'Mở Tổng kết' }).click();
  await expect(page.getByRole('dialog', { name: 'Tổng kết' })).toBeVisible();
  await expect(page.locator('.future-checklist')).toBeVisible();
  await expect(page.getByText('Hướng phát triển trong tương lai')).toBeVisible();
  const studyCardTransforms = await page
    .locator('.study-card')
    .evaluateAll((cards) => cards.map((card) => getComputedStyle(card).transform));
  expect(studyCardTransforms.every((transform) => transform === 'none')).toBe(true);

  expect(consoleErrors).toEqual([]);
});
