class SearchResultsPage {
  // Flipkart's class names are obfuscated and change often, so we match product links by URL.
  productLinks() { return cy.get('a[href*="/p/"]'); }
  sortOption(label) { return cy.contains('div', new RegExp(`^${label}$`)).first(); }
  noResultsMessage() { return cy.contains(/sorry, no results found/i); }

  // Product links open in a new tab, which Cypress can't follow, so drop the target first.
  openFirstProduct() {
    this.productLinks().first().invoke('removeAttr', 'target').click();
  }
}

export default new SearchResultsPage();
