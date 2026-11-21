import locators from '../locators/locators';

const { common, home } = locators;

class HomePage {
  searchBox() { return cy.get(common.searchBox).first(); }
  logo() { return cy.get(home.logo).first(); }

  visit() { cy.openHome(); }
  search(term) { cy.searchFor(term); }
}

export default new HomePage();
