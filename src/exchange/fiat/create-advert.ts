import {fetchApi} from '../../https/fetch-api';
import {Advert, AdvertRequest} from './advert';

export interface CreateAdvert {
    (advert: AdvertRequest): Promise<Advert>;
}


export const createAdvert: CreateAdvert = (advert: AdvertRequest): Promise<Advert> => {
    return fetchApi({url: '/exchange/adverts', method: 'POST', body: advert})
        .then(response => response.json());
};
