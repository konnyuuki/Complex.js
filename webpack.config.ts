import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/Complex.ts',
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
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};

export default config;
