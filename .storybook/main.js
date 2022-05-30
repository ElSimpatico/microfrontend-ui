const { resolve } = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-themes',
    ],
    framework: '@storybook/html',
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@utils': resolve(__dirname, '../src/utils/'),
        };

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: resolve(__dirname, '../src'),
        });

        // Return the altered config
        return config;
    },
};
