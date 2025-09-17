const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react/jsx-runtime', 'react-native', 'react', 'react-dom'],
    format: ['cjs', 'esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    output: {
      sourcemap: true,
      interop: 'auto',
    },
    plugins: [
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
