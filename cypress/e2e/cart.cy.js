import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

describe('Cart', () => {
  it('TC10 - empty cart shows the empty message', () => {
    CartPage.visit();
    CartPage.emptyCartMessage().should('be.visible');
  });

  it('TC11 - adding a product puts it in the cart', () => {
    cy.fixture('testData').then((data) => {
      HomePage.visit();
      HomePage.search(data.searchTerms.valid);
      SearchResultsPage.openFirstProduct();
      ProductPage.addToCart();
      cy.url().should('include', '/viewcart');
      CartPage.placeOrderButton().should('be.visible');
    });
  });
});
