import { Page, Locator } from '@playwright/test';

export class FeedbackComponent {
  readonly page: Page;
  readonly feedbackInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.feedbackInput = page.getByPlaceholder('Write Comment...');
    this.submitButton = page.getByText('Submit');
  }

  async submitFeedback(text: string): Promise<void> {
    await this.feedbackInput.fill(text);
    await this.submitButton.click();
  }
}
