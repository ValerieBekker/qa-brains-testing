import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { DragAndDropPage } from '../page-objects/drag-and-drop.page';
import { NavigationComponent } from '../components/navigation.component';

test.describe('Drag and Drop Tests', () => {
  let loginPage: LoginPage;
  let navigationComponent: NavigationComponent;
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach('Open Login Page', async ({ page }) => {
    loginPage = new LoginPage(page);
    navigationComponent = new NavigationComponent(page);
    dragAndDropPage = new DragAndDropPage(page);
    await loginPage.open();
  });

  test.describe('Drag and Drop Positive Tests', () => {
    test('TC-301: User can drag and drop element to designated area', async () => {
      await navigationComponent.clickDragAndDropButton();
      await dragAndDropPage.dragAndDropElement();
      const isMessageVisible = await dragAndDropPage.isDroppedMessageVisible();
      expect(isMessageVisible).toBeTruthy();
    });
  });
});
