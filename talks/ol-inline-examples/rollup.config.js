import cjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  node(),
  cjs(),
  production && terser()
];
const output = {
  dir: './',
  entryFileNames: '[name].bundle.js',
  format: 'iife'
};

const files = [
  'mouseposition.js',
  'zoom-condition.js'
];

const cfg = files.map(name => {
  return {
    input: name,
    output: output,
    plugins: plugins
  };
});

export default cfg;
