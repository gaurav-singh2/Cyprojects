// Import all locators, so this page object holds actions only, not selectors.
import locators from '../locators/locators';

// Take the locators for the product page.
const { product } = locators;

// Page object for a single product's page.
class ProductPage {
  // Return the product name heading (first h1 on the page).
  title() { return cy.get(product.title).first(); }

  // Return the price element (first match, because related products also show prices).
  price() { return cy.findByText(product.price).first(); }

  // Return the "Add to Cart" button.
  addToCartButton() { return cy.findByText(product.addToCartButton); }

  // Return the "Buy Now" button.
  buyNowButton() { return cy.findByText(product.buyNowButton); }

  // Click "Add to Cart".
  addToCart() { this.addToCartButton().click(); }
}

// Export one ready-made object for tests to use.
export default new ProductPage();
