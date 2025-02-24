/** @type {import('ts-jest').JestConfigWithTsJest} **/
export const preset = 'ts-jest';
export const testEnvironment = "node";
export const transform = {
  '^.+\\.(ts)$': [
    'ts-jest',
    {
      tsconfig: 'tsconfig.json',
    }
  ]
};
export const testMatch = ['**/*.test.ts', '**/*.spec.ts'];
export const testPathIgnorePatterns = ['node_modules', 'dist'];
export const collectCoverage = true;
export const collectCoverageFrom = ['src/**/*.ts'];
export const coverageDirectory = 'coverage';
export const coverageReporters = ['text', 'lcov', 'clover'];
export const coveragePathIgnorePatterns = ['node_modules', 'dist'];
export const moduleFileExtensions = ['ts', 'js', 'json'];
export const moduleDirectories = ['node_modules'];