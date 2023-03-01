/** Jest */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@react-native|react-native)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/mocks/file.mock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testMatch: ['<rootDir>/__tests__/**/*.test.(js|jsx|ts|tsx)'],
};

module.exports = config;
