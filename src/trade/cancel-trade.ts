import {ResponseMyTradeList, PayloadReason} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface CancelTrade {
    (advertId: number, tradeId: number, payload?: PayloadReason): Promise<ResponseMyTradeList>;
}

export const cancelTrade: CancelTrade = async (advertId: number, tradeId: number, payload?: PayloadReason): Promise<ResponseMyTradeList> => {
    return fetchApi({
        url: `/exchange/adverts/${advertId}/trades/${tradeId}/cancel`,
        method: 'POST',
        body: payload
    }).then(response => response.json());
};


