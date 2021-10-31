import {exchangeFiat, ExchangeFiat} from './fiat';

export interface ExchangeModule {
    fiat: ExchangeFiat;
}

export const exchange: ExchangeModule = {
    fiat: exchangeFiat,
};
