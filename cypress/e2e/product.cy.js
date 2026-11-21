// Import the page objects this test file uses.
import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage';
import ProductPage from '../pages/ProductPage';

// Group all product page tests together.
describe('Product details', () => {
  // Before every test, get to a product page: home -> search -> open the first product.
  beforeEach(function () {
    // Load test data, then use it to search.
    cy.fixture('testData').then((data) => {
      // Open the home page with the popup closed.
      HomePage.visit();
      // Search for the valid product ("iphone 15").
      HomePage.search(data.searchTerms.valid);
      // Open the first product in the same tab.
      SearchResultsPage.openFirstProduct();
    });
  });

  it('TC07 - shows the product title and price', () => {
    // Check the product name is shown and isn't empty.
    ProductPage.title().should('be.visible').and('not.be.empty');
    // Check a price is shown.
    ProductPage.price().should('be.visible');
  });

  it('TC08 - shows Add to Cart and Buy Now buttons', () => {
    // Check the user can add the product to the cart.
    ProductPage.addToCartButton().should('be.visible');
    // Check the user can buy the product straight away.
    ProductPage.buyNowButton().should('be.visible');
  });
});
