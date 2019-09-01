import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './index.js',
    inlineDynamicImports: true,
    output: {
        file: './dist/bundle.js',
        format: 'esm',
        name: 'bundle',
    },
    plugins: [
        babel({
        }),
        resolve({
            mainFields: ['module', 'main'],
            browser: true,

        }),
    ]
}