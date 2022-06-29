export function getClassName(classNameObject: Record<string, boolean>): string {
    return Object.keys(classNameObject)
        .filter((key: string) => key && classNameObject[key])
        .join(' ');
}

export function getKeyValueToString(object: any): string {
    return Object.keys(object || {})
        .map((key: string) => `${key}=${object[key]}`)
        .join(' ');
}
