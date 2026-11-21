import HomePage from '../pages/HomePage';

describe('Home page', () => {
  beforeEach(() => HomePage.visit());

  it('TC01 - loads with the correct title', () => {
    cy.title().should('match', /flipkart/i);
  });

  it('TC02 - shows the search box', () => {
    HomePage.searchBox().should('be.visible').and('have.attr', 'placeholder');
  });
});
