import LoginPage from '../pages/LoginPage';

describe('Login', () => {
  beforeEach(() => LoginPage.visit());

  it('TC12 - shows the mobile/email input and Request OTP button', () => {
    LoginPage.mobileInput().should('be.visible');
    LoginPage.requestOtpButton().should('be.visible');
  });

  it('TC13 - rejects an invalid mobile number', () => {
    cy.fixture('testData').then((data) => {
      LoginPage.requestOtp(data.invalidLogin.mobile);
      LoginPage.invalidInputError().should('be.visible');
    });
  });
});
