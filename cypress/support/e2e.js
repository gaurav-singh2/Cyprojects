import './commands';

// Flipkart's own scripts sometimes throw errors that have nothing to do with our tests.
Cypress.on('uncaught:exception', () => false);
