const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Complex.ts',
  output: {
    filename: 'Complex.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Complex',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
