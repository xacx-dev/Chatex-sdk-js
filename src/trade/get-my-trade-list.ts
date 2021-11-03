import {fetchApi} from "../https/fetch-api";
import {QueryMyTradeList, ResponseMyTradeList} from "./trade";


export interface GetMyTradeList {
    (query?: QueryMyTradeList): Promise<ResponseMyTradeList[]>;
}


export const getMyTradeList: GetMyTradeList = (query?: QueryMyTradeList): Promise<ResponseMyTradeList[]> => {
    return fetchApi({
        url: `/exchange/adverts/trades`,
        method: 'GET',
        query: query
    }).then(response => response.json());
};



