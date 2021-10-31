import {fetchApi} from '../https/fetch-api';
import {setRefreshToken} from './refresh-token';

export enum AuthMode {
    Telegram = 'CHATEX_BOT',
    Password = 'PASSWORD',
    Google = 'GOOGLE',
}

export enum AuthStatus {
    Waiting = 'WAITING',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
}

interface AuthRequest {
    request_id: string,
    status: AuthStatus,
}

interface AuthResponse {
    refresh_token?: string,
    status: AuthStatus,
}

export const byTelegram = async (identification: string): Promise<AuthStatus> => {

    const payload = {
        mode: AuthMode.Telegram,
        identification
    }

    return fetchApi({method: 'POST', url: '/auth', body: payload})
        .then(response => response.json())
        .then(({request_id}: AuthRequest) => fetchApi({
            method: 'POST',
            url: '/auth/wait-confirmation',
            body: {request_id}
        }))
        .then(response => response.json())
        .then(({refresh_token, status}: AuthResponse) => {
            refresh_token && setRefreshToken(refresh_token);

            return status;
        })
        .catch(() => AuthStatus.Rejected);
};
