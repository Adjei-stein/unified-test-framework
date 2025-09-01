const { Builder } = require('selenium-webdriver');

async function createDriver(browser) {
  return await new Builder().forBrowser(browser).build();
}

module.exports = { createDriver };