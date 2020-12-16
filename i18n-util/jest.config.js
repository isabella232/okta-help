module.exports = {
  coverageDirectory: './test-reports/coverage',
  restoreMocks: true,
  testMatch: ['**/test/spec/**/*_spec.js'],
  transformIgnorePatterns: [
    'node_modules',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
