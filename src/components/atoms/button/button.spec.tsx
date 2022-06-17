import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

it('should render primary button', async () => {
    const page = await newSpecPage({
        components: [Button],
        html: `<ui-button><span>Call to Action</span></ui-button>`,
    });

    expect(page.root).toEqualHtml(`
        <ui-button>
            <button class="primary"><span>Call to Action</span></buton>
        </ui-button>
    `);
});

it('should render secondary button', async () => {
    const page = await newSpecPage({
        components: [Button],
        template: () => (
            <ui-button variant="secondary">
                <span>Call to Action</span>
            </ui-button>
        ),
    });

    expect(page.root).toEqualHtml(`
        <ui-button>
            <button class="secondary"><span>Call to Action</span></buton>
        </ui-button>
    `);
});

it('should render tertiary button', async () => {
    const page = await newSpecPage({
        components: [Button],
        template: () => (
            <ui-button variant="tertiary">
                <span>Call to Action</span>
            </ui-button>
        ),
    });

    expect(page.root).toEqualHtml(`
        <ui-button>
            <button class="tertiary"><span>Call to Action</span></buton>
        </ui-button>
    `);
});

it('should call once onClick event', async () => {
    const onClickHandler = jest.fn();

    const page = await newSpecPage({
        components: [Button],
        template: () => (
            <ui-button onClick={onClickHandler}>
                <span>Call to Action</span>
            </ui-button>
        ),
    });

    const button = page.root.querySelector('button');
    button.click();
    await page.waitForChanges();

    expect(onClickHandler).toBeCalled();
});
