const isEmptyValue = (value: unknown): boolean => {

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === 'string') {
        return value.trim().length === 0;
    }

    return value === undefined || value === null;
};

export const stringifyQuery = (params: Record<string | number, unknown>): string => {
    const query = Object
        .entries(params)
        .filter(([, value]: [string, unknown]) => !isEmptyValue(value))
        .map(item => item.join('='))
        .join('&');

    return query ? `?${query}` : '';
};
