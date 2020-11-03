/*
 * @since 2020-11-03 13:16:07
 * @author acrazing <joking.young@gmail.com>
 */

import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('../../package.json');

export default {
  input: 'src/index.ts',
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: true },
    { file: packageJson.module, format: 'es', sourcemap: true },
  ],
  external: Object.keys({
    ...packageJson.dependencies,
    ...packageJson.peerDependencies,
  }),
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: { module: 'esnext' },
        exclude: ['src/example', 'src/build'],
      },
    }),
    commonjs(),
    resolve({ preferBuiltins: true }),
    sourceMaps(),
  ],
};
