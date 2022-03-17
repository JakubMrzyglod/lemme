const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '.rule.test.ts$',
};
