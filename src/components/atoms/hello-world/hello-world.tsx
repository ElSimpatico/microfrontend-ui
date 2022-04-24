import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ui-helloworld',
})
export class HelloWorld implements ComponentInterface {
    @Prop() name: string;

    render(): JSX.Element {
        return (
            <div>
                <span>{`Hello ${this.name ? this.name : 'World'}!!`}</span>
            </div>
        );
    }
}
