import CartPage from '../pages/CartPage';

describe('Cart', () => {
  it('TC09 - empty cart shows the empty message', () => {
    CartPage.visit();
    CartPage.emptyCartMessage().should('be.visible');
  });
});
