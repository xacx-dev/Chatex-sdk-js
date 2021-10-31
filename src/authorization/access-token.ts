import {ApiRequest, fetchApi, Header} from '../https/fetch-api';
import {getRefreshToken, removeRefreshToken} from './refresh-token';

const ACCESS_TOKEN_GAP = 60 * 1000;

const isExpired = (expiredAt: number) => expiredAt - ACCESS_TOKEN_GAP < new Date().getTime();

export interface AccessToken {
    token: string,
    expiredAt: number
}

let accessToken: AccessToken | null = null;

export const setAccessToken = (token: string, expirationTime: number | Date): void => {
    const expiredAt = typeof expirationTime === 'number' ? expirationTime : expirationTime.getTime();
    if (isExpired(expiredAt)) {
        throw new TypeError('Invalid expiration time');
    }

    accessToken = {token, expiredAt};
};

export const removeAccessToken = (): void => {
    accessToken = null;
};

export const getAccessToken = (): AccessToken | null => {

    if (accessToken && isExpired(accessToken.expiredAt)) {
        removeAccessToken();
    }

    return accessToken;
};

export const requestAccessToken = async (): Promise<AccessToken | null> => {

    const token = getAccessToken();
    if (token) {
        return token;
    }

    const refresh = getRefreshToken();
    if (!refresh) {
        return null;
    }

    const request: ApiRequest = {
        method: 'POST',
        url: '/auth/access-token',
        query: {},
        headers: {
            [Header.Authorization]: `Bearer ${refresh}`
        }
    };

    accessToken = await fetchApi(request)
        .then(response => response.json())
        .then(data => ({
            token: data.access_token,
            expiredAt: data.expires_at,
        }))
        .catch(() => {
            removeRefreshToken();

            return null;
        });

    return accessToken;
}
