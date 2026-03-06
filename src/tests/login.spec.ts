import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { testUser } from '../test-data/users';

test.describe('Login Page Tests', () => {
  const validEmail = testUser.email;
  const validPassword = testUser.password;
  let loginPage: LoginPage;

  test.beforeEach('Open Login Page', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test.describe('Login Positive Tests', () => {
    test('TC-101: User can log in and see "Login Successful" message', async ({
      page,
    }) => {
      await loginPage.login(validEmail, validPassword);
      await expect(page).toHaveURL(/logged=true/);
    });

    test.only('TC-102: User can preview their password input value when they click eye icon', async () => {
      await loginPage.fillPasswordInput(validPassword);
      await loginPage.clickPasswordPreviewButton();
      await loginPage.verifyPasswordInputValue(validPassword);
    });

    test('TC-103: User can see the message that email and password are mandatory fields when they are left empty', async () => {
      await loginPage.clickLoginButton();
      await expect(loginPage.getRequiredFieldError('Email')).toBeVisible();
      await expect(loginPage.getRequiredFieldError('Password')).toBeVisible();
    });
  });

  test.describe('Login Negative Tests', () => {
    test('TC-104: User cannot login with invalid credentials', async ({
      page,
    }) => {
      const invalidCreds = {
        email: 'test@example.com',
        password: 'passssssss456',
      };

      await loginPage.login(invalidCreds.email, invalidCreds.password);
      await expect(page).toHaveURL(/email=false&password=false/);
    });
    })
  });
