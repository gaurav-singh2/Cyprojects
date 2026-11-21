// Load our custom commands (cy.openHome, cy.searchFor, ...) so every test can use them.
import './commands';

// Cypress fails a test if the website itself throws a JavaScript error.
// Flipkart's own scripts sometimes throw errors that have nothing to do with our tests,
// so we tell Cypress to ignore them by returning false.
Cypress.on('uncaught:exception', () => false);
