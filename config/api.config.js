const baseConfig = require('./base.config');

module.exports = {
  ...baseConfig,
  spec: 'tests/api/**/*.js',
  // API specific config
  // For example, you can define baseURL for axios
  baseURL: 'https://api.example.com'
};