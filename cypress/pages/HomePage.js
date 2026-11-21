class HomePage {
  searchBox() { return cy.get('input[name="q"]').first(); }
  logo() { return cy.get('img[title="Flipkart"], a[title="Flipkart"]').first(); }
  loginLink() { return cy.contains('a, span', /^Login$/).first(); }
  cartLink() { return cy.get('a[href*="viewcart"]').first(); }

  visit() { cy.openHome(); }
  search(term) { cy.searchFor(term); }
}

export default new HomePage();
