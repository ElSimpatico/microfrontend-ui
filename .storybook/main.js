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
        console.log(config.module.rules);
        config.resolve.alias = {
            ...config.resolve.alias,
            '@utils': resolve(__dirname, '../src/utils/'),
        };

        const tsxRule = config.module.rules.find((rule) =>
            'a.tsx'.match(rule.test),
        );

        if (tsxRule) {
            const options = tsxRule.use[0].options;
            options.plugins = [
                [
                    '@babel/plugin-transform-react-jsx',
                    {
                        prgama: 'h',
                    },
                ],
                ...options.plugins,
            ];
        }

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: resolve(__dirname, '../src'),
        });

        // Return the altered config
        return config;
    },
};
