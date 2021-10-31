import {fetchApi} from "../https/fetch-api";
import {queryMyTradeList, responseMyTradeList} from "./trade";


export interface GetMyTradeList {
    (query: queryMyTradeList): Promise<responseMyTradeList[]>;
}

export const getMyTradeList: GetMyTradeList = async (query: queryMyTradeList): Promise<responseMyTradeList[]> => {
    return fetchApi({url: '/exchange/adverts/trades', method: 'GET', query})
        .then(response => response.json());
};


