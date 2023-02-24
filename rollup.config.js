import * as react from 'react'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import jsx from 'acorn-jsx'
import gzip from 'rollup-plugin-gzip'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  external: ['react'],

  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    peerDepsExternal(),
    json(),
    typescript({ check: false, tsconfig: './tsconfig.production.json' }),
    resolve({ preferBuiltins: false }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({
      namedExports: {
        react: Object.keys(react),
      },
    }),
    terser(),
    gzip(),
  ],
}
