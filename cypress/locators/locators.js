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
    loginLink: { selector: 'a, span', text: /^Login$/ },
    cartLink: 'a[href*="viewcart"]',
  },

  searchResults: {
    productLinks: 'a[href*="/p/"]',
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
    placeOrderButton: { selector: 'button', text: /place order/i },
    emptyCartMessage: { selector: 'div', text: /your cart is empty/i },
    removeButton: { selector: 'div', text: /^Remove$/ },
  },

  login: {
    mobileInput: 'input[type="text"]',
    requestOtpButton: { selector: 'button', text: /request otp/i },
    invalidInputError: { selector: 'span, div', text: /please enter valid/i },
  },
};

export default locators;
