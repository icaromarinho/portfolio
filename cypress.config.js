const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {

    env: {
      validUser: "standard_user",
      validPassword: "secret_sauce"
    }
  },
});
