module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./setupTests.js'], // Update the path to your setupTests.js file
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest', // Transform JS files with Babel
  },
  // Add any other Jest configurations here
};
