const preset = require('@stencil/core/testing/jest-preset');

module.exports = {
    ...preset,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.ts'],
    moduleNameMapper: {
        ...preset.moduleNameMapper,
        '@utils(.*)': '<rootDir>/src/utils$1',
    },
};
