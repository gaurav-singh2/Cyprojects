import locators from '../locators/locators';

const { login } = locators;

class LoginPage {
  visit() { cy.visit('/account/login'); }
  mobileInput() { return cy.get(login.mobileInput).first(); }
  requestOtpButton() { return cy.findByText(login.requestOtpButton); }
  invalidInputError() { return cy.findByText(login.invalidInputError); }

  requestOtp(mobile) {
    this.mobileInput().type(mobile);
    this.requestOtpButton().click();
  }
}

export default new LoginPage();
