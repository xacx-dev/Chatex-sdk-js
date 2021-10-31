import {ApiRequest, fetchApi, Header} from '../https/fetch-api';
import {getRefreshToken, removeRefreshToken} from './refresh-token';
import {removeAccessToken} from './access-token';

export const signOut = async (): Promise<void> => {

    removeAccessToken();
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
        return;
    }

    const request: ApiRequest = {
        method: 'POST',
        url: '/auth/revoke',
        headers: {
            [Header.Authorization]: `Bearer ${refreshToken}`
        }
    }

    return fetchApi(request).then(removeRefreshToken);
};
