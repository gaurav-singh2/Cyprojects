// Import all locators, so this page object holds actions only, not selectors.
import locators from '../locators/locators';

// Take the locator groups this page needs.
const { common, home } = locators;

// Page object for the Flipkart home page.
// Why: tests call simple methods like HomePage.search('laptop') instead of repeating selectors and steps.
class HomePage {
  // Return the search box element (first one, in case there are several).
  searchBox() { return cy.get(common.searchBox).first(); }

  // Return the Flipkart logo element.
  logo() { return cy.get(home.logo).first(); }

  // Open the home page and close the login popup (see cy.openHome in support/commands.js).
  visit() { cy.openHome(); }

  // Type a search term in the search box and press Enter (see cy.searchFor in support/commands.js).
  search(term) { cy.searchFor(term); }
}

// Export one ready-made object, so tests use HomePage.visit() without writing "new HomePage()".
export default new HomePage();
