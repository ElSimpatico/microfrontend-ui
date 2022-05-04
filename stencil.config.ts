import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { resolve } from 'path';

export const config: Config = {
    namespace: 'microfrontend-components',
    srcDir: 'src',
    taskQueue: 'async',
    globalStyle: resolve(__dirname, 'src/scss/main.scss'),
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null,
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: ['src/scss/main.scss'],
        }),
    ],
};
