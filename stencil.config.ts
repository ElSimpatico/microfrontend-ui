import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'microfrontend-components',
    srcDir: 'src',
    taskQueue: 'async',
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
};
