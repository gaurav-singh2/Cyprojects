// All locators for the Flipkart suite live in this one file.
// Why: if Flipkart changes its page, we fix the locator here once,
// and every page object and test keeps working without changes.
//
// Two kinds of locators are used:
//   - A string, like 'input[name="q"]', is a normal CSS selector used with cy.get().
//   - An object, like { selector: 'button', text: /add to cart/i }, finds an element
//     by its visible text, used with cy.findByText() (see support/commands.js).
//
// Note: Flipkart's CSS class names (like "_2KpZ6l") are generated and change often,
// so we avoid them and use stable things: attribute names, link addresses and visible text.
// In the text patterns, /.../i means "ignore capital letters", ^ means "starts with",
// and $ means "ends with".

const locators = {
  // Locators used on many pages.
  common: {
    // The ✕ close button on the login popup (a span acting as a button).
    loginPopupClose: 'span[role="button"]:contains("✕")',
    // The main search box. Its name attribute "q" (query) is stable.
    searchBox: 'input[name="q"]',
  },

  // Locators for the home page.
  home: {
    // The Flipkart logo, found by its title attribute (image or link, whichever exists).
    logo: 'img[title="Flipkart"], a[title="Flipkart"]',
  },

  // Locators for the search results page.
  searchResults: {
    // Every product link. Flipkart product addresses contain "/p/", so this finds products only.
    productLinks: 'a[href*="/p/"]',
    // The product picture inside a product link. Its "alt" text holds the product name.
    productImage: 'img[alt]',
    // Sort options are plain divs. The label text (e.g. "Price -- Low to High") is given by the test.
    sortOption: 'div',
    // The message Flipkart shows when a search finds nothing.
    noResultsMessage: { selector: 'div', text: /sorry, no results found/i },
  },

  // Locators for a single product's page.
  product: {
    // The product name is the page's main heading.
    title: 'h1',
    // The price: a div whose whole text is "₹" followed by digits and commas, e.g. "₹1,29,999".
    price: { selector: 'div', text: /^₹[\d,]+$/ },
    // The "Add to Cart" button.
    addToCartButton: { selector: 'button', text: /add to cart/i },
    // The "Buy Now" button.
    buyNowButton: { selector: 'button', text: /buy now/i },
  },

  // Locators for the cart page.
  cart: {
    // The message shown when the cart has no items.
    emptyCartMessage: { selector: 'div', text: /your cart is empty/i },
    // The "Remove" button next to each cart item.
    removeButton: { selector: 'div', text: /^Remove$/ },
  },
};

// Make the locators available to other files with: import locators from '../locators/locators';
export default locators;
