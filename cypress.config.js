const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  env:{
    baseUrl: 'https://reqres.in'

  },reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'finally Testing Report',
    reportPageTitle: 'Test Automation Results',
    reportFilename: 'Report',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    showPending: false,
    showSkipped: true,
    timestamp: "longDate",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
