export function getClassName(classNameObject: Record<string, boolean>): string {
    return Object.keys(classNameObject)
        .filter((key: string) => key && classNameObject[key])
        .join(' ');
}
