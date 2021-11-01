import {responseMyTradeList} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface details {
    "payment_details": string
}

export interface MarkAsPaidTrade {
    (advert_id: number, trade_id: number, query: details | undefined): Promise<responseMyTradeList>;
}
export const markAsPaidTrade: MarkAsPaidTrade = async (advert_id: number, trade_id: number, query: details | undefined): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id+"/mark-as-paid", method: 'POST', body: query})
        .then(response => response.json());
};


