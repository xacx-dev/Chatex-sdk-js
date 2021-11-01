import {responseMyTradeList, queryReason} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface DeclineTrade {
    (advert_id: number, trade_id: number, query: queryReason | undefined): Promise<responseMyTradeList>;
}
export const declineTrade: DeclineTrade = async (advert_id: number, trade_id: number, query: queryReason | undefined): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id+"/decline", method: 'POST', body: query})
        .then(response => response.json());
};


