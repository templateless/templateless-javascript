import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'Templateless',
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  plugins: [json(), resolve(), commonjs(), typescript(), terser()],
}
