// Import all locators from the single locators file, so no selector is written here.
import locators from '../locators/locators';

// Take only the "common" group of locators (used on many pages).
const { common } = locators;

// Custom command: cy.closeLoginPopup()
// Why: Flipkart sometimes shows a login popup on the first visit that covers the page.
Cypress.Commands.add('closeLoginPopup', () => {
  // Look at the page body first, without failing if the popup isn't there.
  cy.get('body').then(($body) => {
    // Search the page for the popup's close (✕) button.
    const closeBtn = $body.find(common.loginPopupClose);
    // Only click it if it exists. The popup doesn't always appear, and we don't want to fail.
    if (closeBtn.length) cy.wrap(closeBtn.first()).click({ force: true });
  });
});

// Custom command: cy.openHome()
// Why: most tests start on the home page with the popup closed, so we do both in one step.
Cypress.Commands.add('openHome', () => {
  // Open the home page ('/' is added to baseUrl from cypress.config.js).
  cy.visit('/');
  // Close the login popup if it appeared.
  cy.closeLoginPopup();
});

// Custom command: cy.searchFor('some product')
// Why: several tests search for products, so the steps live in one place.
Cypress.Commands.add('searchFor', (term) => {
  // Find the search box (first one, in case the page has more than one),
  // clear any old text, type the search term, and press Enter to search.
  cy.get(common.searchBox).first().clear().type(`${term}{enter}`);
});

// Custom command: cy.findByText({ selector, text })
// Why: some elements have no stable CSS selector, so we find them by their visible text.
// Locators like that are stored as { selector, text } in locators.js.
Cypress.Commands.add('findByText', (locator) => {
  // cy.contains finds an element of the given type (e.g. 'button') that contains the text.
  return cy.contains(locator.selector, locator.text);
});
