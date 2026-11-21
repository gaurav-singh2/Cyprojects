// Import the home page object, which has the actions for this page.
import HomePage from '../pages/HomePage';

// describe() groups related tests. The name shows in the test report.
describe('Home page', () => {
  // beforeEach() runs before every test in this group.
  // Each test starts on a fresh home page, so one test can't affect another.
  beforeEach(() => HomePage.visit());

  // it() is one test case. The name shows in the test report.
  it('TC01 - loads with the correct title', () => {
    // Check the browser tab title contains "flipkart" (any capitals). This proves the right site opened.
    cy.title().should('match', /flipkart/i);
  });

  it('TC02 - shows the search box', () => {
    // Check the search box is visible and has placeholder text (like "Search for products..."),
    // which shows it's the real search input and not a hidden copy.
    HomePage.searchBox().should('be.visible').and('have.attr', 'placeholder');
  });
});
