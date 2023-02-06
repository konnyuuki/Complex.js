const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Complex.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Complex.js',
    library: {
      name: 'Complex',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
};
