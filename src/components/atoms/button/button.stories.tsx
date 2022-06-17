/** @jsx h */
/** @jsxRuntime classic */

import { action } from '@storybook/addon-actions';
import { h } from '@stencil/core';

import mdx from './button.mdx';

const buttonVariants = ['primary', 'secondary', 'tertiary'];

export default {
    title: 'Components/Button',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const defaultArgs = (args: any): string => {
    return Object.keys(args || {})
        .map((key: string) => `${key}=${args[key]}`)
        .join(' ');
};

const codeSnipet = (args): string => `
// Default Button
<ui-button ${defaultArgs(args)}>
    <span>Call to action</span>
</ui-button>`;

const Template = (args): JSX.Element => (
    <ui-button {...args} onClick={action('onClick')}>
        <span>Call to action</span>
    </ui-button>
);

export const Button = Template.bind({});

Button.argTypes = {
    disabled: {
        control: { type: 'boolean' },
    },
    variant: {
        options: buttonVariants,
        control: { type: 'select' },
    },
};

Button.args = {
    disabled: false,
    variant: 'primary',
};

Button.parameters = {
    docs: {
        source: {
            code: codeSnipet(Button.args),
            language: 'tsx',
            type: 'auto',
        },
    },
};
export const AllButton = (): JSX.Element => (
    <div>
        <style>{`
            .wrapper {
                margin: 0 0 8px 0;
            }
        `}</style>
        <div class="wrapper">
            {Button({ variant: 'primary' })}
            {Button({ variant: 'secondary' })}
            {Button({ variant: 'tertiary' })}
        </div>
        <div class="wrapper">
            {Button({ variant: 'primary', disabled: true })}
            {Button({ variant: 'secondary', disabled: true })}
            {Button({ variant: 'tertiary', disabled: true })}
        </div>
    </div>
);
