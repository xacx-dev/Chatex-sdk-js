import {fetchApi} from '../https/fetch-api';

export enum CountryCategory {
    Green = 'GREEN',
    RED = 'RED',
}

export interface Country {
    code: string;
    code_alpha2: string;
    name: string;
    flag: string;
    fiat: string;
    terms_of_service: string;
    privacy_policy: string;
    category: CountryCategory;
}

export interface GetCountries {
    (): Promise<Country[]>;
}

export const getCountries: GetCountries = (): Promise<Country[]> => {
    return fetchApi({url: '/countries', method: 'GET'})
        .then(response => response.json());
};
