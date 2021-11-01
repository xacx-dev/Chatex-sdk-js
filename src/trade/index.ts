import {getMyTradeList} from "./get-mytradelist";
import {queryMyTradeList, responseMyTradeList} from "./trade"

export interface TradeModule {
    getMyTradeList: (query: queryMyTradeList | undefined) => Promise<responseMyTradeList>;
}

export const trade: TradeModule = {
    getMyTradeList
};
