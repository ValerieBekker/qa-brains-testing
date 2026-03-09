import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { FeedbackComponent } from '../components/feedback.component';
import { SignInRequiredModal } from '../modals/sign-in-required.modal';

test.describe('Feedback Component Tests', () => {
  const feedbackText = 'Un sitio muy util!';
  let loginPage: LoginPage;
  let feedbackComponent: FeedbackComponent;
  let signInRequiredModal: SignInRequiredModal;

  test.beforeEach('Open Login Page', async ({ page }) => {
    loginPage = new LoginPage(page);
    feedbackComponent = new FeedbackComponent(page);
    signInRequiredModal = new SignInRequiredModal(page);
    await loginPage.open();
  });

  test.describe('Feedback Negative Tests', () => {
    test.only('TC-201: User cannot submit feedback if they are not signed in', async () => {
      await feedbackComponent.submitFeedback(feedbackText);
      const isModalVisible = await signInRequiredModal.isVisible();
      expect(isModalVisible).toBeTruthy();
    });
  });
});
