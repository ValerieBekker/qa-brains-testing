import { Page, Locator } from '@playwright/test';

export class NavigationComponent {
  readonly page: Page;
  readonly dragAndDropButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dragAndDropButton = page.getByText('Drag and Drop List');
  }

  async clickDragAndDropButton(): Promise<void> {
    await this.dragAndDropButton.click();
  }
}
