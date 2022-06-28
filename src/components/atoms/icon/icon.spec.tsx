import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';
import { IconNames } from './icon-props';

it('should render icon', async () => {
    const page = await newSpecPage({
        components: [Icon],
        template: () => <ui-icon iconName={IconNames.ArrowLeft}></ui-icon>,
    });

    expect(page.root).toEqualHtml(
        `<ui-icon><div class="mfe-icon"></div></ui-icon>`,
    );
});
