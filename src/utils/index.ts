// 0
export const isFalsy = (value: unknown) => {
    return value === 0 ? false : !value;
};

export const isVoid = (value: unknown) => value === null || value === undefined || value === '';

// 去处对象里面空值
export function clearObject(obj: { [key: string]: unknown }) {
    const result = { ...obj };
    Object.keys(obj).forEach((key) => {
        if (isVoid(obj[key])) {
            delete result[key];
        }
    });
    return result;
}
