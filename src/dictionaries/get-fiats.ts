import {fetchApi} from '../https/fetch-api';

export interface Fiat {
    decimals: number;
    name: string;
    full_name: string;
    icon?: string;
}

export interface GetFiats {
    (): Promise<Fiat[]>;
}

export const getFiats: GetFiats = async (): Promise<Fiat[]> => {
    return fetchApi({url: '/fiats', method: 'GET'})
        .then(response => response.json());
};
