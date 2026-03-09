import { Page, Locator } from '@playwright/test';

export class SignInRequiredModal {
  readonly page: Page;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.message = page.getByText('Sign in to share your thoughts');
  }

  isVisible(): Promise<boolean> {
    return this.message.isVisible();
  }
}
