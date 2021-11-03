import {ResponseMyTradeList} from "./trade";
import {fetchApi} from "../https/fetch-api";

export interface GetTradeById {
    (advertId: number, tradeId: number): Promise<ResponseMyTradeList>;
}

export const getTradeById: GetTradeById = (advertId: number, tradeId: number): Promise<ResponseMyTradeList> => {
    return fetchApi({
        url: `/exchange/adverts/${advertId}/trades/${tradeId}`,
        method: 'GET'
    }).then(response => response.json());
};


