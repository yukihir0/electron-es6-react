module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  setupFilesAfterEnv: ["./enzyme.config.js"],
};
