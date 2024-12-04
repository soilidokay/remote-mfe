import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
const packageJson = require('./package.json');
import glob from 'glob';

const files = glob.sync('src/**/*.{ts,tsx}');

export default {
  input: files,
  output: [
    // {
    //   // file: packageJson.module, // Module ESM output
    //   dir: 'dist',
    //   format: 'esm',
    //   sourcemap: true,
    // },
    {
      // file: packageJson.module, // Module ESM output
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json', // Use tsconfig.json to manage settings
      declaration: true,
      declarationDir: 'dist', // Output type declarations
      rootDir: 'src',
    }),
    postcss({
      extract: true, // Output CSS file
      minimize: true, // Minify CSS
    }),
    // terser(), // Minify JS
  ],
  external: ['InitialArgShare']
};
