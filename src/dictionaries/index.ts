import {Country, getCountries} from './get-countries';
import {Coin, getCoins} from './get-coins';
import {Fiat, getFiats} from './get-fiats';
import {getPaymentSystems, PaymentSystem, PaymentSystemFilter} from './get-payment-systems';

export interface DictionaryModule {
    getCountries: () => Promise<Country[]>;
    getCoins: () => Promise<Coin[]>;
    getFiats: () => Promise<Fiat[]>;
    getPaymentSystems: (query: PaymentSystemFilter) => Promise<PaymentSystem[]>;
}

export const dictionaries: DictionaryModule = {
    getCountries,
    getCoins,
    getFiats,
    getPaymentSystems,
}
