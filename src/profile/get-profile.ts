import {fetchApi} from "../https/fetch-api";

export enum ProfileStatus {
    fullyRegistered = 'FULLY_REGISTERED'
}

export interface Profile {
    login: string,
    status: ProfileStatus,
    country_code: string,
    current_usage: {
        turnover: string,
        withdrawal: string,
        withdrawal_today: string,
    },
    verification: {
        status: string,
        tier: string,
        turnover_limit: string,
        turnover_limit_type: string,
        withdrawal_limit: string,
        withdrawal_limit_today: string,
    },
    finance_hold: boolean,
    is_second_factor_enabled: boolean,
    lang_id: string,
}

export interface GetProfile {
    (): Promise<Profile | null>;
}

export const getProfile: GetProfile = (): Promise<Profile | null> => {
    return fetchApi({method: 'GET', url: '/me'})
        .then(response => response.json())
        .catch(() => null);
}