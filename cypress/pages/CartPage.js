class CartPage {
  visit() { cy.visit('/viewcart'); }
  placeOrderButton() { return cy.contains('button', /place order/i); }
  emptyCartMessage() { return cy.contains(/your cart is empty/i); }
  removeButtons() { return cy.contains('div', /^Remove$/); }
}

export default new CartPage();
