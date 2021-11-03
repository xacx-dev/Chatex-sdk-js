import {BuyerDetails, ResponseMyTradeList} from "./trade";
import {fetchApi} from "../https/fetch-api";


export interface MarkAsPaidTrade {
    (advertId: number, tradeId: number, details?: BuyerDetails): Promise<ResponseMyTradeList>;
}

export const markAsPaidTrade: MarkAsPaidTrade = (advertId: number, tradeId: number, details?: BuyerDetails): Promise<ResponseMyTradeList> => {
    return fetchApi({
        url: `/exchange/adverts/${advertId}/trades/${tradeId}/mark-as-paid`,
        method: 'POST',
        body: details
    }).then(response => response.json());
};


