import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { getClassName } from '@utils';

import { IconNames } from './icon-props';
import { SvgIcons } from './svg';

@Component({
    tag: 'ui-icon',
    styleUrl: 'icon.scss',
})
export class Icon implements ComponentInterface {
    /**
     * Class button
     * @default ""
     */
    @Prop() class = '';

    @Prop() iconName: IconNames;

    classNames = getClassName({
        ['mfe-icon']: true,
        [this.class]: !!this.class,
    });

    render(): JSX.Element {
        return (
            this.iconName && (
                <div
                    class={this.classNames}
                    innerHTML={SvgIcons[this.iconName]}
                ></div>
            )
        );
    }
}
