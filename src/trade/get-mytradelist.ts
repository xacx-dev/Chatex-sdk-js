import {fetchApi} from "../https/fetch-api";
import {queryMyTradeList, responseMyTradeList} from "./trade";


export interface GetMyTradeList {
    (query: queryMyTradeList | undefined): Promise<responseMyTradeList>;
}

export interface GetTradeById {
    (advert_id: number, trade_id: number): Promise<responseMyTradeList[]>;
}


export const getMyTradeList: GetMyTradeList = (query: queryMyTradeList | undefined): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/trades', method: 'GET', query: query})
        .then(response => response.json());
};

export const getTradeById: GetTradeById = async (advert_id: number, trade_id: number): Promise<responseMyTradeList[]> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id, method: 'GET'})
        .then(response => response.json());
};


