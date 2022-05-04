import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { HelloWorld } from './hello-world';

it('should render my component', async () => {
    const page = await newSpecPage({
        components: [HelloWorld],
        html: `<ui-helloworld></ui-helloworld>`,
    });

    expect(page.root).toEqualHtml(`
        <ui-helloworld>
            <div class="wrapper">
                <span>Hello World!!</span>
            </div>
        </ui-helloworld>
    `);
});

it('should render my component with attribute name', async () => {
    const page = await newSpecPage({
        components: [HelloWorld],
        template: () => <ui-helloworld name={'Pedro'}></ui-helloworld>,
    });

    expect(page.root).toEqualHtml(`
        <ui-helloworld>
            <div class="wrapper">
                <span>Hello Pedro!!</span>
            </div>
        </ui-helloworld>
    `);
});
