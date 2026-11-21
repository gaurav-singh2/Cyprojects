import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage';

describe('Search', () => {
  beforeEach(function () {
    cy.fixture('testData').as('data');
    HomePage.visit();
  });

  it('TC04 - returns results for a valid product', function () {
    HomePage.search(this.data.searchTerms.valid);
    cy.url().should('include', '/search?q=');
    SearchResultsPage.productLinks().should('have.length.greaterThan', 0);
  });

  it('TC05 - search term is kept in the search box', function () {
    HomePage.search(this.data.searchTerms.category);
    HomePage.searchBox().should('have.value', this.data.searchTerms.category);
  });

  it('TC06 - shows a no-results message for a nonsense term', function () {
    HomePage.search(this.data.searchTerms.invalid);
    SearchResultsPage.noResultsMessage().should('be.visible');
  });

  it('TC07 - sorts results by price low to high', function () {
    HomePage.search(this.data.searchTerms.category);
    SearchResultsPage.sortOption('Price -- Low to High').click();
    cy.url().should('include', 'sort=price_asc');
  });
});
