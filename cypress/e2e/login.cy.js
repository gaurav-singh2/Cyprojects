import HomePage from '../pages/HomePage';

describe('Login', () => {
  beforeEach(() => cy.visit('/account/login'));

  it('TC12 - shows the mobile/email input and Request OTP button', () => {
    cy.get('input[type="text"]').first().should('be.visible');
    cy.contains('button', /request otp/i).should('be.visible');
  });

  it('TC13 - rejects an invalid mobile number', () => {
    cy.fixture('testData').then((data) => {
      cy.get('input[type="text"]').first().type(data.invalidLogin.mobile);
      cy.contains('button', /request otp/i).click();
      cy.contains(/please enter valid/i).should('be.visible');
    });
  });
});
