const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

Cypress.Commands.add('signIn', (email, password) => {
  
  cy.get('input[name="email"]').type(email);

  cy.get('input[name="password"]').type(password);
});
