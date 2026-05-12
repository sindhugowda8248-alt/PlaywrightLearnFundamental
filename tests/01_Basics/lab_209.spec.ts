import { test, expect } from 'playwright/test';
test('verify our first Tc', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - VWO');

});