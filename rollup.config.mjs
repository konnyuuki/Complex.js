import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/Complex.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'Complex',
  },
  plugins: [typescript()],
};
