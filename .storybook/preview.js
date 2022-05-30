import { defineCustomElements } from '../loader';

defineCustomElements();

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
