import { test, expect } from '@playwright/test';

test.describe('Bunny Cloud Garden Portfolio - Render Check', () => {
  test('Home page renders hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
    await expect(page.locator('blockquote')).toContainText('Đơn giản, thẳng thắn');
  });

  test('Home page shows skills and toolsets', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Năng lực nổi bật')).toBeVisible();
    await expect(page.getByText('Công cụ sử dụng')).toBeVisible();
    await page.getByText('Năng lực nổi bật').scrollIntoViewIfNeeded();
    await expect(page.getByText('Tư duy số')).toBeVisible();
  });

  test('Projects page renders all 6 cards', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();
    await expect(page.getByText('Máy tính & Thiết bị ngoại vi')).toBeVisible();
    await expect(page.getByText('An toàn và Liêm chính học thuật')).toBeVisible();
    const cards = page.locator('article');
    await expect(cards).toHaveCount(6);
  });

  test('Projects page has PDF links', async ({ page }) => {
    await page.goto('/projects');
    const pdfLinks = page.locator('a[target="_blank"]');
    await expect(pdfLinks.first()).toBeVisible();
    await expect(pdfLinks.first()).toContainText('Xem bài tập');
  });

  test('Conclusion page renders content', async ({ page }) => {
    await page.goto('/conclusion');
    await expect(page.getByRole('heading', { name: /Tổng kết/ })).toBeVisible();
    await expect(page.getByText('Kỹ năng đạt được')).toBeVisible();
    await expect(page.getByText('Điều tâm đắc nhất')).toBeVisible();
    await expect(page.getByText('Thách thức lớn nhất')).toBeVisible();
    await expect(page.getByText('Định hướng phát triển')).toBeVisible();
  });

  test('Navigation between pages works', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');

    await page.getByRole('link', { name: 'Dự án' }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();

    await page.getByRole('link', { name: 'Tổng kết' }).click();
    await expect(page).toHaveURL('/conclusion');
    await expect(page.getByRole('heading', { name: /Tổng kết/ })).toBeVisible();

    await page.getByRole('link', { name: 'Vườn hoa' }).click();
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
  });

  test('Responsive: mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('Footer shows copyright', async ({ page }) => {
    await page.goto('/conclusion');
    await expect(page.getByText('© 2026')).toBeVisible();
  });
});
