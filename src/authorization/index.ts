import {getRefreshToken, setRefreshToken} from './refresh-token';
import {AccessToken, getAccessToken, removeAccessToken, setAccessToken} from './access-token';
import {AuthStatus, byTelegram} from './sign-in';
import {signOut} from './sign-out';

export interface AuthorizationModule {
    restoreSession: (refresh: string, access?: AccessToken) => void;
    getRefreshToken: () => string | null;
    getAccessToken: () => AccessToken | null;
    byTelegram: (identification: string) => Promise<AuthStatus>;
    logout: () => Promise<void>;
}

export const authorization: AuthorizationModule = {
    restoreSession: (refresh: string, access?: AccessToken) => {
        setRefreshToken(refresh);
        access ? setAccessToken(access.token, access.expiredAt) : removeAccessToken();
    },
    getRefreshToken,
    getAccessToken,
    byTelegram,
    logout: signOut,
};
