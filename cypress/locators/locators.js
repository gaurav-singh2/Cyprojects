// All locators for the Flipkart suite live here.
// Plain CSS selectors are strings.
// Text-based locators are { selector, text } and are used with cy.contains(selector, text).

const locators = {
  common: {
    loginPopupClose: 'span[role="button"]:contains("✕")',
    searchBox: 'input[name="q"]',
  },

  home: {
    logo: 'img[title="Flipkart"], a[title="Flipkart"]',
  },

  searchResults: {
    productLinks: 'a[href*="/p/"]',
    productImage: 'img[alt]', // inside a product link; alt holds the product name
    sortOption: 'div', // used with the sort label, e.g. "Price -- Low to High"
    noResultsMessage: { selector: 'div', text: /sorry, no results found/i },
  },

  product: {
    title: 'h1',
    price: { selector: 'div', text: /^₹[\d,]+$/ },
    addToCartButton: { selector: 'button', text: /add to cart/i },
    buyNowButton: { selector: 'button', text: /buy now/i },
  },

  cart: {
    emptyCartMessage: { selector: 'div', text: /your cart is empty/i },
    removeButton: { selector: 'div', text: /^Remove$/ },
  },
};

export default locators;
