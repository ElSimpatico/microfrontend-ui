/** @jsx h */
/** @jsxRuntime classic */

import { action } from '@storybook/addon-actions';
import { h } from '@stencil/core';

import { buttonVariants } from './button-props';
import mdx from './button.mdx';

export default {
    title: 'Components/Button',
    parameters: {
        docs: {
            page: mdx,
        },
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        variant: {
            options: buttonVariants,
            control: { type: 'select' },
        },
    },
};

export const Button = (args): JSX.Element => (
    <ui-button {...args} onClick={action('onClick')}>
        <span>Call to action</span>
    </ui-button>
);

Button.args = {
    disabled: false,
    variant: 'primary',
};

export const AllButton = (): JSX.Element => (
    <div>
        <style>{`
            .wrapper {
                margin: 0 0 8px 0;
            }
        `}</style>
        <div class="wrapper">
            <ui-button variant="primary">
                <span>Call to action</span>
            </ui-button>
            <ui-button variant="secondary">
                <span>Call to action</span>
            </ui-button>
            <ui-button variant="tertiary">
                <span>Call to action</span>
            </ui-button>
        </div>
        <div class="wrapper">
            <ui-button variant="primary" disabled>
                <span>Call to action</span>
            </ui-button>
            <ui-button variant="secondary" disabled>
                <span>Call to action</span>
            </ui-button>
            <ui-button variant="tertiary" disabled>
                <span>Call to action</span>
            </ui-button>
        </div>
    </div>
);
