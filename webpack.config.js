const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Complex.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Complex.js',
  },
};
