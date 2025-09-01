const baseConfig = require('./base.config');

module.exports = {
  ...baseConfig,
  spec: 'tests/web/**/*.js',
  // Web specific config
  // For example, you can define browser capabilities
  browser: 'chrome'
};