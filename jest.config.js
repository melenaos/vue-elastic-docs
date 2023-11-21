module.exports = {
  preset: 'ts-jest',

  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'ES2019',
      },
    },
    'vue-jest': {
      transform: {
        'your-custom-block': './custom-block-processor.js',
      },
    },
  },
  setupFiles: ['<rootDir>/tests/setupTest.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['src/**/*.ts'],
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  rootDir: __dirname,
  testMatch: ['<rootDir>/tests/**/*spec.[jt]s?(x)'],
};
