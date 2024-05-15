/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"], //every test file name end with .test.ts
  verbose:true,
  forceExit:true,
  clearMocks:true
};