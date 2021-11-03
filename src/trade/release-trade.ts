import {ResponseMyTradeList, SecondFactor} from "./trade";
import {fetchApi} from "../https/fetch-api";


export interface ReleaseTrade {
    (advertId: number, tradeId: number, payload: SecondFactor): Promise<ResponseMyTradeList>;
}

export const releaseTrade: ReleaseTrade = (advertId: number, tradeId: number, payload: SecondFactor): Promise<ResponseMyTradeList> => {
    return fetchApi(
        {
            url: `/exchange/adverts/${advertId}/trades/${tradeId}/release`,
            method: 'POST',
            body: payload
        }).then(response => response.json());
};


