import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('@smoke valid login scenario', async ({ page }) => {
   const loginPage = new LoginPage(page);
   await loginPage.gotoLoginPage();
   await loginPage.login("user@example.com", "password");
   await expect(page).toHaveTitle(/Automation/);
});

test('@regression invalid login scenario', async ({ page }) => {
   const loginPage = new LoginPage(page);
   await loginPage.gotoLoginPage();
   await loginPage.login("user@example.com", "wrongpassword");
   await expect(loginPage.locators.errorMessage).toBeVisible();
});

test('empty credentials scenario', async ({ page }) => {
   const loginPage = new LoginPage(page);
   await loginPage.gotoLoginPage();
   await loginPage.login("", "");
   await expect(loginPage.emptyErrorMessage).toBeVisible();
}); 