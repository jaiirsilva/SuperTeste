const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },

    testIsolation: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/',
      overwrite: false,
      html: true,
      json: true,
      reportFilename: "[name]_[datetime]-[status]-report"
    }
  }
});
