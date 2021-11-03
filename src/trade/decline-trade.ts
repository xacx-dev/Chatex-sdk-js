import {ResponseMyTradeList, PayloadReason} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface DeclineTrade {
    (advertId: number, tradeId: number, payload?: PayloadReason): Promise<ResponseMyTradeList>;
}

export const declineTrade: DeclineTrade = async (advertId: number, tradeId: number, payload?: PayloadReason): Promise<ResponseMyTradeList> => {
    return fetchApi({
        url: `/exchange/adverts/${advertId}/trades/${tradeId}/decline`,
        method: 'POST',
        body: payload
    }).then(response => response.json());
};


