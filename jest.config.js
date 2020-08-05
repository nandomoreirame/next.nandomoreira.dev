// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts(x)?',
    '!./src/**/index.ts',
    '!./src/**/*.stories.tsx',
    '!./src/pages/**',
    '!./src/styles/**',
    '!./.storybook/**',
    '!./.vscode/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^@nandomoreira/(.*)$': resolve(__dirname, './src/$1'),
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
};
