/** @type {import('ts-jest').JestConfigWithTsJest} **/
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json'
      }
    ]
  },
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'clover'],
  coveragePathIgnorePatterns: ['node_modules', 'dist'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules']
};

export default config;