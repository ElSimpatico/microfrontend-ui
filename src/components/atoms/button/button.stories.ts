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
        variant: {
            options: buttonVariants,
            control: { type: 'select' },
        },
    },
};

const Template = (args): string =>
    `<ui-button class=${args.class} disabled=${args.disabled} variant=${args.variant}>
        <span>Call to action</span>
    </ui-button>`;

export const Button = Template.bind({});

Button.args = {
    class: 'overrideClassName',
    disabled: false,
    variant: 'primary',
};

export const AllButton = (): string => `
    <style>
        .wrapper {
            margin: 0 0 8px 0;
        }
    </style>
    <div class="wrapper">
        ${Button({ disabled: false, variant: 'primary' })}
        ${Button({ disabled: false, variant: 'secondary' })}
        ${Button({ disabled: false, variant: 'tertiary' })}
    </div>
    <div class="wrapper">
        ${Button({ disabled: true, variant: 'primary' })}
        ${Button({ disabled: true, variant: 'secondary' })}
        ${Button({ disabled: true, variant: 'tertiary' })}
    </div>
`;

AllButton.parameters = {
    controls: { disabled: true },
};
