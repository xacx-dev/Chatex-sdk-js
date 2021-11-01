import {responseMyTradeList} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface GetTradeById {
    (advert_id: number, trade_id: number): Promise<responseMyTradeList>;
}
export const getTradeById: GetTradeById = async (advert_id: number, trade_id: number): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id, method: 'GET'})
        .then(response => response.json());
};


