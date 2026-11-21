// Import all locators, so this page object holds actions only, not selectors.
import locators from '../locators/locators';

// Take the locators for the cart page.
const { cart } = locators;

// Page object for the cart page.
class CartPage {
  // Open the cart page directly by its address (added to baseUrl).
  visit() { cy.visit('/viewcart'); }

  // Return the "Your cart is empty" message.
  emptyCartMessage() { return cy.findByText(cart.emptyCartMessage); }

  // Return all "Remove" buttons (one per item in the cart).
  removeButtons() { return cy.findByText(cart.removeButton); }
}

// Export one ready-made object for tests to use.
export default new CartPage();
