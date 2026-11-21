import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage';
import ProductPage from '../pages/ProductPage';

describe('Product details', () => {
  beforeEach(function () {
    cy.fixture('testData').then((data) => {
      HomePage.visit();
      HomePage.search(data.searchTerms.valid);
      SearchResultsPage.openFirstProduct();
    });
  });

  it('TC08 - shows the product title and price', () => {
    ProductPage.title().should('be.visible').and('not.be.empty');
    ProductPage.price().should('be.visible');
  });

  it('TC09 - shows Add to Cart and Buy Now buttons', () => {
    ProductPage.addToCartButton().should('be.visible');
    ProductPage.buyNowButton().should('be.visible');
  });
});
