// Import the cart page object.
import CartPage from '../pages/CartPage';

// Group all cart tests together.
describe('Cart', () => {
  it('TC09 - empty cart shows the empty message', () => {
    // Open the cart page. Cypress starts each test with a fresh browser (no cookies, not logged in),
    // so the cart is always empty here.
    CartPage.visit();
    // Check Flipkart tells the user the cart is empty.
    CartPage.emptyCartMessage().should('be.visible');
  });
});
