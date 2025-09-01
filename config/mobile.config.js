const baseConfig = require('./base.config');

module.exports = {
  ...baseConfig,
  spec: 'tests/mobile/**/*.js',
  // Mobile specific config
  // For example, you can define Appium capabilities
  platformName: 'Android',
  deviceName: 'emulator-5554'
};