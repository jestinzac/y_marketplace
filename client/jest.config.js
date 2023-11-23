module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.[jt]s?(x)"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/src/App.js",
    "<rootDir>/src/index.js",
    "<rootDir>/src/reportWebVitals.js",
  ]
};
