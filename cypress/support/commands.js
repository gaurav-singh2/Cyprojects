// Close the login popup Flipkart shows on first visit (if it appears).
Cypress.Commands.add('closeLoginPopup', () => {
  cy.get('body').then(($body) => {
    const closeBtn = $body.find('span[role="button"]:contains("✕")');
    if (closeBtn.length) cy.wrap(closeBtn.first()).click({ force: true });
  });
});

// Visit the home page and dismiss the popup.
Cypress.Commands.add('openHome', () => {
  cy.visit('/');
  cy.closeLoginPopup();
});

// Search for a product from the header search box.
Cypress.Commands.add('searchFor', (term) => {
  cy.get('input[name="q"]').first().clear().type(`${term}{enter}`);
});
