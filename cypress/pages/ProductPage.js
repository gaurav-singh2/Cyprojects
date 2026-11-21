import locators from '../locators/locators';

const { product } = locators;

class ProductPage {
  title() { return cy.get(product.title).first(); }
  price() { return cy.findByText(product.price).first(); }
  addToCartButton() { return cy.findByText(product.addToCartButton); }
  buyNowButton() { return cy.findByText(product.buyNowButton); }

  addToCart() { this.addToCartButton().click(); }
}

export default new ProductPage();
