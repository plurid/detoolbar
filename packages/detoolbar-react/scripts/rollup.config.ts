// #region imports
    // #region libraries
    import ttypescript from 'ttypescript';
    import typescript from 'rollup-plugin-typescript2';
    import terser from '@rollup/plugin-terser';
    // #endregion libraries


    // #region external
    import pkg from '../package.json';
    // #endregion external
// #endregion imports



// #region module
const globals = {
};

const build =  {
    input: `source/index.ts`,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            globals,
            sourcemap: true,
            exports: 'default',
        },
        {
            file: pkg.module,
            format: 'es',
            globals,
            sourcemap: true,
            exports: 'default',
        },
    ],
    external: [
        '@plurid/plurid-functions',
        '@plurid/plurid-functions-react',
        '@plurid/plurid-icons-react',
        '@plurid/plurid-themes',
        '@plurid/plurid-ui-components-react',
        '@plurid/plurid-ui-state-react',
        'react',
        'react-dom',
        'styled-components',
    ],
    watch: {
        include: 'source/**',
    },
    plugins: [
        typescript({
            typescript: ttypescript,
            useTsconfigDeclarationDir: true,
        }),
        terser({
            mangle: false,
            compress: false,
            format: {
                beautify: true,
                comments: false,
            },
        }),
    ],
};
// #endregion module



// #region exports
export default build;
// #endregion exports
