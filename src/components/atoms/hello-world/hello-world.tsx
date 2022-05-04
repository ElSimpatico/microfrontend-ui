import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ui-helloworld',
    styleUrl: 'hello-world.scss',
})
export class HelloWorld implements ComponentInterface {
    @Prop() name: string;

    render(): JSX.Element {
        return (
            <div class={'wrapper'}>
                <span>{`Hello ${this.name ? this.name : 'World'}!!`}</span>
            </div>
        );
    }
}
