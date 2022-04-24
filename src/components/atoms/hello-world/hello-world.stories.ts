export default {
    title: 'Components/HelloWorld',
};

const Template = (args): string =>
    `<ui-helloworld name="${args.name}"></ui-helloworld>`;

export const HelloWorldDefault = Template.bind({});

HelloWorldDefault.args = {
    name: '',
};
