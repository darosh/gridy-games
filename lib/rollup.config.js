import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  output: {
    globals: {
      gridy: 'Gridy'
    }
  },
  external: ['gridy'],
  plugins: [
    resolve({
      module: true,
      main: false,
      modulesOnly: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
