import locators from '../locators/locators';

const { cart } = locators;

class CartPage {
  visit() { cy.visit('/viewcart'); }
  placeOrderButton() { return cy.findByText(cart.placeOrderButton); }
  emptyCartMessage() { return cy.findByText(cart.emptyCartMessage); }
  removeButtons() { return cy.findByText(cart.removeButton); }
}

export default new CartPage();
