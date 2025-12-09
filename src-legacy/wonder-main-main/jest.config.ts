const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    // '^@/components/(.*)$': '<rootDir>/components/$1',
    '@components/*': '<rootDir>/src/components/*',
    '@services/*': '<rootDir>/src/services/*',
    '@i18n-server': '<rootDir>/src/app/i18n/index.ts',
    '@i18n-client': '<rootDir>/src/app/i18n/client.ts',
    '@hooks/*': '<rootDir>/src/customHooks/*',
    '@utils/*': '<rootDir>/src/utils/*',
    '@globalModels': '<rootDir>/src/global.model.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
