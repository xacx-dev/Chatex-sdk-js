let refreshToken: string | null = null;

export const getRefreshToken = () => refreshToken;

export const setRefreshToken = (value: string): void => {
    refreshToken = value;
};

export const removeRefreshToken = (): void => {
    refreshToken = null;
};
