const { defineConfig } = require('cypress');

module.exports = defineConfig({  
  e2e: {
    baseUrl: 'https://www.oysho.com',
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    env: {
      browserPermissions: {
        'notifications': 'allow',
        'geolocation': 'allow', 
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

});
