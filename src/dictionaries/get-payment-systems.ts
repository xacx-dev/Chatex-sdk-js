import {fetchApi} from '../https/fetch-api';
export interface PaymentSystem {
    id: number,
    name: string,
}

export type PaymentSystemFilter = {
    country: string,
    fiat: string,
}

export interface GetPaymentSystems {
    (query: PaymentSystemFilter): Promise<PaymentSystem[]>;
}

export const getPaymentSystems: GetPaymentSystems = async (query: PaymentSystemFilter): Promise<PaymentSystem[]> => {
    return fetchApi({url: '/payment-systems', method: 'GET', query})
        .then(response => response.json());
};
