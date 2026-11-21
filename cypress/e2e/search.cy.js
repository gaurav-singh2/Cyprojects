// Import the page objects this test file uses.
import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage';

// Group all search tests together.
describe('Search', () => {
  // Runs before every test in this group.
  // We use function() instead of () => here, because "this.data" only works inside function().
  beforeEach(function () {
    // Load test data from cypress/fixtures/testData.json and save it as "data",
    // so every test can read it as this.data. Test data stays outside the test code.
    cy.fixture('testData').as('data');
    // Start every test on the home page with the popup closed.
    HomePage.visit();
  });

  it('TC03 - returns results for a valid product', function () {
    // Search for the valid product from the test data ("iphone 15").
    HomePage.search(this.data.searchTerms.valid);
    // Check the address changed to a search page, proving the search ran.
    cy.url().should('include', '/search?q=');
    // Check at least one product was found.
    SearchResultsPage.productLinks().should('have.length.greaterThan', 0);
  });

  it('TC04 - search term is kept in the search box', function () {
    // Search for a category from the test data ("laptop").
    HomePage.search(this.data.searchTerms.category);
    // Check the search box still shows what we typed, so the user can see what they searched for.
    HomePage.searchBox().should('have.value', this.data.searchTerms.category);
  });

  it('TC05 - shows a no-results message for a nonsense term', function () {
    // Search for random letters that match no product.
    HomePage.search(this.data.searchTerms.invalid);
    // Check Flipkart tells the user nothing was found, instead of showing an empty page.
    SearchResultsPage.noResultsMessage().should('be.visible');
  });

  it('TC06 - sorts results by price low to high', function () {
    // Search for a category that has many products at different prices.
    HomePage.search(this.data.searchTerms.category);
    // Click the "Price -- Low to High" sort option.
    SearchResultsPage.sortOption('Price -- Low to High').click();
    // Check the address now includes the sort setting, proving the sort was applied.
    cy.url().should('include', 'sort=price_asc');
  });

  it('TC10 - counts Samsung Galaxy S25 Ultra products on the first results page', function () {
    // Read the search term and the name to count from the test data.
    const { searchTerm, nameMustContain } = this.data.samsungS25Ultra;

    // Search for "samsung galaxy s25 ultra".
    HomePage.search(searchTerm);
    // Wait until the search results page has opened.
    cy.url().should('include', '/search?q=');

    // Get the names of all products on the first page (one name per product).
    SearchResultsPage.productNames().then((names) => {
      // Keep only products whose name contains "samsung galaxy s25 ultra".
      // toLowerCase() ignores capitals; replace(/\s+/g, ' ') turns double spaces into one,
      // so small differences in how Flipkart writes the name don't matter.
      const matching = names.filter((name) =>
        name.toLowerCase().replace(/\s+/g, ' ').includes(nameMustContain.toLowerCase())
      );

      // Build the result lines: total products, how many matched, and each matching name.
      const report = [
        `Products on first page: ${names.length}`,
        `Products named "${nameMustContain}": ${matching.length}`,
        // Number each matching name: "  1. Samsung Galaxy S25 Ultra ...".
        ...matching.map((name, i) => `  ${i + 1}. ${name}`),
      ];

      // Show each line in the Cypress window's command log.
      report.forEach((line) => cy.log(line));
      // Also print the result in the terminal (uses the "log" task from cypress.config.js).
      cy.task('log', `\n[TC10]\n${report.join('\n')}\n`);

      // Check at least one Samsung Galaxy S25 Ultra was found.
      // This runs inside cy.then() so it happens after the printing above,
      // and we still see the count in the terminal when the test fails.
      cy.then(() => {
        expect(matching.length, 'Samsung Galaxy S25 Ultra products on first page').to.be.greaterThan(0);
      });
    });
  });
});
