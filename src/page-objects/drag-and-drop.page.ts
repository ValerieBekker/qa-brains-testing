import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DragAndDropPage extends BasePage {
  readonly dragElement: Locator;
  readonly dropArea: Locator;
  readonly droppedMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.dragElement = page.getByText('Drag Me'); // xpath: '//div[text()='Drag Me']'
    this.dropArea = page.getByText('Drop Here'); // xpath: '//div[text()='Drop Here']'
    this.droppedMessage = page.getByText('Dropped!'); // xpath: '//h3[text()='Dropped!']'
  }

  async dragAndDropElement(): Promise<void> {
    await this.dragElement.dragTo(this.dropArea);
  }

  isDroppedMessageVisible(): Promise<boolean> {
    return this.droppedMessage.isVisible();
  }
}
