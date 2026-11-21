import locators from '../locators/locators';

const { searchResults } = locators;

class SearchResultsPage {
  productLinks() { return cy.get(searchResults.productLinks); }
  sortOption(label) { return cy.contains(searchResults.sortOption, new RegExp(`^${label}$`)).first(); }
  noResultsMessage() { return cy.findByText(searchResults.noResultsMessage); }

  // Names of the products on the current results page, one per product.
  // A product card can have several links (image, title), so links are grouped by product URL.
  productNames() {
    return cy.get(searchResults.productLinks).then(($links) => {
      const namesByUrl = new Map();
      $links.each((_, link) => {
        const url = link.getAttribute('href').split('?')[0];
        const img = link.querySelector(searchResults.productImage);
        const name = (link.getAttribute('title') || (img && img.getAttribute('alt')) || link.innerText || '').trim();
        if (name && !namesByUrl.has(url)) namesByUrl.set(url, name);
      });
      return [...namesByUrl.values()];
    });
  }

  // Product links open in a new tab, which Cypress can't follow, so drop the target first.
  openFirstProduct() {
    this.productLinks().first().invoke('removeAttr', 'target').click();
  }
}

export default new SearchResultsPage();
