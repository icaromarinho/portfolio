const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    env: {
      
    },
    experimentalStudio: true,
    video: true
  },
});
