import {responseMyTradeList, queryAcceptTrade} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface AcceptTrade {
    (advert_id: number, trade_id: number, query: queryAcceptTrade): Promise<responseMyTradeList>;
}
export const acceptTrade: AcceptTrade = async (advert_id: number, trade_id: number, query: queryAcceptTrade): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id+"/accpet", method: 'POST', body: query})
        .then(response => response.json());
};


