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
};
