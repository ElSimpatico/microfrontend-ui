/** @jsx h */
/** @jsxRuntime classic */

import { h } from '@stencil/core';
import { getKeyValueToString } from '@utils';
import { IconNames } from './icon-props';

import mdx from './icon.mdx';

export default {
    title: 'Components/Icon',
    parameters: {
        docs: {
            page: mdx,
        },
    },
    argTypes: {
        size: {
            control: {
                type: 'range',
                min: 16,
                max: 80,
            },
        },
        color: {
            control: 'color',
        },
    },
    args: {
        size: 32,
        color: '#000000',
    },
};

const codeSnipet = (args): string => `
// Default Icon
<ui-icon ${getKeyValueToString(args)}></ui-icon>`;

const Template = (args): JSX.Element => (
    <div>
        <style>
            {`
            .icon-story {
                width: ${args.size}px;
                height: ${args.size}px;
                color: ${args.color};
            }
        `}
        </style>

        <ui-icon class={'icon-story'} {...args}></ui-icon>
    </div>
);

export const Icon = Template.bind({});

Icon.argTypes = {
    iconName: {
        control: { type: 'select' },
        options: Object.keys(IconNames),
    },
};

Icon.args = {
    iconName: Object.keys(IconNames)[0],
};

Icon.parameters = {
    docs: {
        source: {
            code: codeSnipet(Icon.args),
            language: 'tsx',
            type: 'auto',
        },
    },
};
export const AllIcons = (args): JSX.Element => (
    <div>
        <style>{`
            .icon-list {
                margin: 0 0 8px 0;
                display: flex;
            }
            .icon {
                margin: 0 8px 0 0;
                border: 1px solid ${args.color};
                width: ${args.size}px;
                height: ${args.size}px;
                color: ${args.color};
            }
            .icon:last-child {
                margin: 0;
            }
        `}</style>
        <div class={'icon-list'}>
            {Object.values(IconNames).map((name: IconNames) => (
                <ui-icon class={'icon'} iconName={name} title={name}></ui-icon>
            ))}
        </div>
    </div>
);
