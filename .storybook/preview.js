const stencilClient = require('@stencil/core/internal/client');

import { defineCustomElements } from '../loader';

defineCustomElements();

const stencilWrapper = (storyFn, context) => {
    const host = document.createElement('div');
    stencilClient.renderVdom(
        {
            $ancestorComponent$: undefined,
            $flags$: 0,
            $modeName$: undefined,
            $cmpMeta$: {
                $flags$: 0,
                $tagName$: 'div',
            },
            $hostElement$: host,
        },
        storyFn(context),
    );
    return host.children[0];
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: { disable: true },
    themes: {
        default: 'light',
        clearable: false,
        list: [
            { name: 'light', class: 'theme-light', color: '#ffffff' },
            { name: 'dark', class: 'theme-dark', color: '#000000' },
        ],
    },
};

export const decorators = [stencilWrapper];
