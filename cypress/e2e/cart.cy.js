import CartPage from '../pages/CartPage';

describe('Cart', () => {
  it('TC10 - empty cart shows the empty message', () => {
    CartPage.visit();
    CartPage.emptyCartMessage().should('be.visible');
  });
});
