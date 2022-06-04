import { getClassName } from './common';

it('should return className', () => {
    const className = getClassName({
        ['className1']: true,
        ['className2']: false,
        ['className3']: true,
    });

    expect(className).toBe('className1 className3');
});

it('should return empty className', () => {
    const className = getClassName({
        ['className1']: false,
        ['className2']: false,
        ['className3']: false,
    });

    expect(className).toBe('');
});
