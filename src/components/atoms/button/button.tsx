import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { ButtonVariantType } from './button-props';
import { getClassName } from '@utils';

@Component({
    tag: 'ui-button',
    styleUrl: 'button.scss',
})
export class Button implements ComponentInterface {
    /**
     * Class button
     * @default ""
     */
    @Prop() class = '';

    /**
     * Disable button
     * @default false
     */
    @Prop() disabled = false;

    /**
     * Button variant
     * @default primary
     */
    @Prop() variant: ButtonVariantType = 'primary';

    classNames = getClassName({
        ['primary']: this.variant === 'primary',
        ['secondary']: this.variant === 'secondary',
        ['tertiary']: this.variant === 'tertiary',
        ['disabled']: this.disabled,
        [this.class]: !!this.class,
    });

    render(): JSX.Element {
        return (
            <button class={this.classNames} disabled={this.disabled}>
                <slot />
            </button>
        );
    }
}
