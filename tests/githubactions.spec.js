import { test, expect } from '@playwright/test';

test.skip('Verify Google page title', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

});