const { defineConfig } = require('cypress');

module.exports = defineConfig({  
  e2e: {
    chromeWebSecurity: false,
    env: {
    },
    setupNodeEvents(on, config) {
    },
    
  },

});
