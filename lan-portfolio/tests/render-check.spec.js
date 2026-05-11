import { test, expect } from '@playwright/test';

test('portfolio renders the botanical garden experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5177/');

  await expect(page.getByRole('heading', { name: 'Phạm Thanh Trà' })).toBeVisible();
  await expect(
    page
      .getByLabel('Thông tin cá nhân')
      .getByText('Luật học · Đại học Luật - Đại học Quốc gia Hà Nội'),
  ).toBeVisible();
  await expect(page.locator('.garden-background')).toBeVisible();
  await expect(page.locator('.leaf')).toHaveCount(10);
  await expect(page.locator('.project-grid .plant-label-card')).toHaveCount(6);
  await expect(page.locator('.seed-badge').first()).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'ABOUT ME' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài 1: Máy tính và thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài 6: An toàn và liêm chính học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Phạm Thanh Trà • Digital Portfolio')).toBeVisible();

  const viewButtons = page.getByRole('button', { name: /Xem bài/i });
  await expect(viewButtons).toHaveCount(6);
  await viewButtons.first().click();

  const pdfDialog = page.getByRole('dialog', { name: 'Bài 1: Máy tính và thiết bị ngoại vi' });
  await expect(pdfDialog).toBeVisible();
  await expect(pdfDialog.locator('iframe')).toHaveAttribute('src', /bt1\.pdf$/);

  await page.getByRole('button', { name: 'Đóng PDF' }).click();
  await expect(pdfDialog).toBeHidden();

  const leafAnimation = await page
    .locator('.leaf')
    .first()
    .evaluate((leaf) => getComputedStyle(leaf).animationName);
  expect(leafAnimation).toContain('leaf-sway');
  expect(consoleErrors).toEqual([]);
});
