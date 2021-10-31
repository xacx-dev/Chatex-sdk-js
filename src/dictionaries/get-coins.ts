import {fetchApi} from '../https/fetch-api';

export interface Coin {
    decimals: number;
    name: string;
    full_name: string;
    icon?: string;
    priority: number;
}

export interface GetCoins {
    (): Promise<Coin[]>;
}

export const getCoins: GetCoins = async (): Promise<Coin[]> => {
    return fetchApi({url: '/coins', method: 'GET'})
        .then(response => response.json());
};
