module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.js', '.jsx'],
  testEnvironment: 'node',
};