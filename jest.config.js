module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  testPathIgnorePatterns: [
      "/node_modules/"
  ],
  setupFilesAfterEnv: ["./enzyme.config.js"],
};
