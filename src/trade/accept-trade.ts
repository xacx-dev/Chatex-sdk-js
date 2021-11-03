import {ResponseMyTradeList, PayloadAcceptTrade} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface AcceptTrade {
    (advertId: number, tradeId: number, payload: PayloadAcceptTrade): Promise<ResponseMyTradeList>;
}

export const acceptTrade: AcceptTrade = async (advertId: number, tradeId: number, payload: PayloadAcceptTrade): Promise<ResponseMyTradeList> => {
    return fetchApi(
        {
            url: `/exchange/adverts/${advertId}/trades/${tradeId}/accpet`,
            method: 'POST',
            body: payload
        }).then(response => response.json());
};


