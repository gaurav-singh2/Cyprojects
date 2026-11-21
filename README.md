# Flipkart Cypress Automation

End-to-end tests for [flipkart.com](https://www.flipkart.com), written with Cypress using the Page Object Model.

## Setup

```bash
npm install
npm run cy:open   # interactive runner
npm test          # headless run of every spec
```

## Layout

```
cypress/
  e2e/        test specs (home, search, product, cart)
  locators/   locators.js - every selector in one file
  pages/      page objects (actions per page, read selectors from locators.js)
  fixtures/   test data (testData.json)
  support/    custom commands (openHome, closeLoginPopup, searchFor)
cypress.config.js
```

## Test cases

| ID   | Spec            | Case |
|------|-----------------|------|
| TC01 | home.cy.js      | Home page title contains "Flipkart" |
| TC02 | home.cy.js      | Search box is visible |
| TC03 | search.cy.js    | Valid search returns products |
| TC04 | search.cy.js    | Search term stays in the search box |
| TC05 | search.cy.js    | Nonsense term shows "no results" |
| TC06 | search.cy.js    | Sort by price low to high |
| TC07 | product.cy.js   | Product page shows title and price |
| TC08 | product.cy.js   | Add to Cart and Buy Now buttons are shown |
| TC09 | cart.cy.js      | Empty cart shows the empty message |
| TC10 | search.cy.js    | Search "samsung galaxy s25 ultra" and count first-page products named Samsung Galaxy S25 Ultra |

## Test data (`cypress/fixtures/testData.json`)

JSON files can't hold comments, so here is what each value is for:

| Key | Used by | Meaning |
|-----|---------|---------|
| `searchTerms.valid` | TC03, TC07, TC08 | A product that always has results ("iphone 15") |
| `searchTerms.category` | TC04, TC06 | A broad category with many products at different prices ("laptop") |
| `searchTerms.invalid` | TC05 | Random letters that match no product |
| `samsungS25Ultra.searchTerm` | TC10 | What to type in the search box |
| `samsungS25Ultra.nameMustContain` | TC10 | A product is counted only if its name contains this text |

## Notes

- Flipkart's CSS class names are generated and change often, so the selectors use stable attributes (`name`, `href`, `role`) and visible text instead.
- All selectors live in `cypress/locators/locators.js`. If Flipkart changes a page, update the selector there; page objects and specs stay the same.
- Flipkart has bot protection. Headless runs, or many runs from one IP, can get an "Access Denied" page or a captcha. Use `npm run test:headed` if that happens.
- Product links open in a new tab. `SearchResultsPage.openFirstProduct()` removes `target="_blank"` so Cypress stays in one tab.
