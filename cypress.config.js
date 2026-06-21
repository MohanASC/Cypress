const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cy3xcs',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
