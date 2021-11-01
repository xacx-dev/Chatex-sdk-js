import {responseMyTradeList, second_factor} from "./trade";
import {fetchApi} from "../https/fetch-api";


export interface ReleaseTrade {
    (advert_id: number, trade_id: number, query: second_factor): Promise<responseMyTradeList>;
}
export const releaseTrade: ReleaseTrade = async (advert_id: number, trade_id: number, query: second_factor): Promise<responseMyTradeList> => {
    return fetchApi({url: '/exchange/adverts/' + advert_id + "/trades/" + trade_id+"/release", method: 'POST', body: query})
        .then(response => response.json());
};


