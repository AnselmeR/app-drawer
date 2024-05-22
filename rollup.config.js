import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import postcssImport from 'postcss-import';

export default {
    input: 'src/components/app-drawer.ts',
    output: {
        file: 'dist/app-drawer.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        postcss({
            inject: true,
            extract: false,
            plugins: [
                postcssImport(),
                url({
                    url: 'inline',
                    limit: 0, // Inline all files, regardless of size
                    emitFiles: true, // Keep files in the output folder
                    fileName: '[name][extname]', // Preserve the original name and extension
                })
            ],
            minimize: true,
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            }
        },
        ),
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        typescript(),
        terser()
    ]
};
