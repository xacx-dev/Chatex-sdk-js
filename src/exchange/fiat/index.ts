import {Advert, AdvertRequest} from './advert';
import {createAdvert} from './create-advert';

export interface ExchangeFiat {
    createAdvert: (advert: AdvertRequest) => Promise<Advert>;
}

export const exchangeFiat: ExchangeFiat = {
    createAdvert,
}
