// Import all locators, so this page object holds actions only, not selectors.
import locators from '../locators/locators';

// Take the locators for the search results page.
const { searchResults } = locators;

// Page object for the search results page.
class SearchResultsPage {
  // Return all product links on the results page.
  productLinks() { return cy.get(searchResults.productLinks); }

  // Return the sort option whose text is exactly the given label, e.g. "Price -- Low to High".
  // new RegExp(`^${label}$`) builds an exact-match pattern so "Popularity" doesn't match "Popularity 2".
  sortOption(label) { return cy.contains(searchResults.sortOption, new RegExp(`^${label}$`)).first(); }

  // Return the "Sorry, no results found" message.
  noResultsMessage() { return cy.findByText(searchResults.noResultsMessage); }

  // Get the names of all products on the current results page, one name per product.
  // Why one per product: a product card has several links (picture, title) to the same product,
  // so counting links would count the same product more than once.
  productNames() {
    // Find all product links, then work with them as a plain list.
    return cy.get(searchResults.productLinks).then(($links) => {
      // A Map stores product address -> product name. Each address is stored only once.
      const namesByUrl = new Map();

      // Go through every product link.
      $links.each((_, link) => {
        // Get the link's address and cut off everything after "?" (tracking info),
        // so links to the same product give the same address.
        const url = link.getAttribute('href').split('?')[0];

        // Find the product picture inside the link (it may not exist).
        const img = link.querySelector(searchResults.productImage);

        // Get the product name from the first place that has it:
        // 1) the link's title attribute, 2) the picture's alt text, 3) the link's visible text.
        // trim() removes spaces at the start and end.
        const name = (link.getAttribute('title') || (img && img.getAttribute('alt')) || link.innerText || '').trim();

        // Save the name only if we found one and haven't saved this product yet.
        if (name && !namesByUrl.has(url)) namesByUrl.set(url, name);
      });

      // Return just the names as a list, e.g. ['Samsung Galaxy S25 Ultra 5G (...)', ...].
      return [...namesByUrl.values()];
    });
  }

  // Open the first product in the results.
  openFirstProduct() {
    // Product links have target="_blank", which opens a new browser tab.
    // Cypress can't follow new tabs, so we remove that attribute first,
    // and the product opens in the same tab. Then we click it.
    this.productLinks().first().invoke('removeAttr', 'target').click();
  }
}

// Export one ready-made object for tests to use.
export default new SearchResultsPage();
