const { createDriver } = require('../../utils/driver');
const { expect } = require('chai');
const { browser } = require('../../config/web.config');

describe('Web Tests', function() {
  this.timeout(60000);
  let driver;

  before(async () => {
    driver = await createDriver(browser);
  });

  after(async () => {
    await driver.quit();
  });

  it('should open Google and search for something', async () => {
    await driver.get('http://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('unified-test-framework');
    await searchBox.submit();
    await driver.wait(until.titleContains('unified-test-framework'), 10000);
    const title = await driver.getTitle();
    expect(title).to.include('unified-test-framework');
  });
});