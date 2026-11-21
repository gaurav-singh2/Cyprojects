import locators from '../locators/locators';

const { common, home } = locators;

class HomePage {
  searchBox() { return cy.get(common.searchBox).first(); }
  logo() { return cy.get(home.logo).first(); }
  loginLink() { return cy.findByText(home.loginLink).first(); }
  cartLink() { return cy.get(home.cartLink).first(); }

  visit() { cy.openHome(); }
  search(term) { cy.searchFor(term); }
}

export default new HomePage();
