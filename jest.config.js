module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/generator-storybook"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
