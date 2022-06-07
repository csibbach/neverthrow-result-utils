module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Ignore lib folder, use this or root property include paths but not both https://medium.com/swlh/jest-with-typescript-446ea996cc68
  modulePathIgnorePatterns: ["<rootDir>/dist/"],

  // This does not seem to support blacklisting any folder which means we can't enable parent directory and disable child
  // We should be using peer directories for coverage and non-coverage tests.
  collectCoverageFrom: [
    // Enabling following means we can't disable src/tests from coverage report
    // "<rootDir>/src/**/*.ts",

    // Add other allowed folders to the list below.
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/index.ts",

    // Disabled because we don't want it to end up in coverage report,
    // "<rootDir>/src/tests/**/*.ts",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "test/tsconfig.json",
    },
  },
};
