import {fetchApi} from "../https/fetch-api";
import {queryMyTradeList, responseMyTradeList} from "./trade";


export interface GetMyTradeList {
    (query: queryMyTradeList | undefined): Promise<responseMyTradeList>;
}


export const getMyTradeList: GetMyTradeList = (query: queryMyTradeList | undefined): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/trades', method: 'GET', query: query})
        .then(response => response.json());
};



