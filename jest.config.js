module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/generator-storybook"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFiles: ["./enzyme.config.js"],
};
