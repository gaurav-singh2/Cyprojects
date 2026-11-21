class ProductPage {
  title() { return cy.get('h1').first(); }
  price() { return cy.contains('div', /^₹[\d,]+$/).first(); }
  addToCartButton() { return cy.contains('button', /add to cart/i); }
  buyNowButton() { return cy.contains('button', /buy now/i); }

  addToCart() { this.addToCartButton().click(); }
}

export default new ProductPage();
