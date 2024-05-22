import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/components/app-drawer.ts',
    output: {
        file: 'dist/app-drawer.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        typescript(),
        postcss({
            extract: true, // Extract the CSS to a separate file
            minimize: true // Minify the CSS
        }),
        terser()
    ]
};

