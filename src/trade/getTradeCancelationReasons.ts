import {fetchApi} from "../https/fetch-api";

export interface GetTradeCancelationReasons {
    (): Promise<string[]>;
}
export const getTradeCancelationReasons: GetTradeCancelationReasons = async (): Promise<string[]> => {
    return fetchApi({url: '/exchange/adverts/trades/cancelation-reasons', method: 'GET'})
        .then(response => response.json());
};


