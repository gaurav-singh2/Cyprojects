// Import Cypress's helper that gives us auto-complete and checks our settings.
const { defineConfig } = require('cypress');

// Export the settings so Cypress reads them when it starts.
module.exports = defineConfig({
  // "e2e" means end-to-end tests: tests that drive a real browser on a real website.
  e2e: {
    // Every cy.visit('/something') is added to this address, so tests don't repeat the full URL.
    baseUrl: 'https://www.flipkart.com',

    // Tell Cypress which files are tests: any file ending in .cy.js inside cypress/e2e.
    specPattern: 'cypress/e2e/**/*.cy.js',

    // This file runs before every test file. We load our custom commands from it.
    supportFile: 'cypress/support/e2e.js',

    // Browser window size. Flipkart shows a different (mobile) layout on small screens,
    // so we use a normal laptop size to get the desktop layout our locators expect.
    viewportWidth: 1366,
    viewportHeight: 768,

    // How long (ms) Cypress keeps retrying to find an element before failing.
    // Flipkart is a heavy site, so we allow 10 seconds instead of the default 4.
    defaultCommandTimeout: 10000,

    // How long (ms) to wait for a full page load. Flipkart pages can be slow.
    pageLoadTimeout: 60000,

    // Turn off the browser's cross-site security rules. Flipkart loads content from
    // other domains (like flixcart.com), and this stops Cypress from blocking it.
    chromeWebSecurity: false,

    // Don't record videos of runs; they take time and disk space.
    video: false,

    // Save a screenshot when a test fails, so we can see what the page looked like.
    screenshotOnRunFailure: true,

    // Re-try a failed test once in headless runs (runMode), because real websites
    // sometimes fail for random reasons (slow network). No retries in the interactive window.
    retries: { runMode: 1, openMode: 0 },

    // This function runs in Node.js (not in the browser) when Cypress starts.
    // We use it to register "tasks": things tests can ask Node.js to do.
    setupNodeEvents(on) {
      // Register our tasks.
      on('task', {
        // A "log" task: tests call cy.task('log', 'text') to print text in the terminal.
        // We need this because cy.log() only shows in the Cypress window, not the terminal.
        log(message) {
          // Print the message in the terminal.
          console.log(message);
          // Cypress requires a task to return something; null means "nothing to return".
          return null;
        },
      });
    },
  },
});
