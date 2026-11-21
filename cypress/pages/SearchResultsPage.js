import locators from '../locators/locators';

const { searchResults } = locators;

class SearchResultsPage {
  productLinks() { return cy.get(searchResults.productLinks); }
  sortOption(label) { return cy.contains(searchResults.sortOption, new RegExp(`^${label}$`)).first(); }
  noResultsMessage() { return cy.findByText(searchResults.noResultsMessage); }

  // Product links open in a new tab, which Cypress can't follow, so drop the target first.
  openFirstProduct() {
    this.productLinks().first().invoke('removeAttr', 'target').click();
  }
}

export default new SearchResultsPage();
