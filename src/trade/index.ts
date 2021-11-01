import {getMyTradeList} from "./get-mytradelist";
import {getTradeById} from "./getTradeById";
import {acceptTrade} from "./AcceptTrade";
import {declineTrade} from "./DeclineTrade";
import {cancelTrade} from "./CancelTrade";
import {details, markAsPaidTrade} from "./MarkAsPaidTrade";
import {releaseTrade} from "./ReleaseTrade";
import {getTradeCancelationReasons} from "./getTradeCancelationReasons";
import {queryAcceptTrade, queryReason, queryMyTradeList, responseMyTradeList, second_factor} from "./trade"

export interface TradeModule {
    getMyTradeList: (query: queryMyTradeList | undefined) => Promise<responseMyTradeList>;
    getTradeById: (advert_id: number, trade_id: number) => Promise<responseMyTradeList>;
    acceptTrade: (advert_id: number, trade_id: number, query: queryAcceptTrade) => Promise<responseMyTradeList>;
    declineTrade: (advert_id: number, trade_id: number, query: queryReason | undefined) => Promise<responseMyTradeList>;
    cancelTrade: (advert_id: number, trade_id: number, query: queryReason | undefined) => Promise<responseMyTradeList>;
    markAsPaidTrade: (advert_id: number, trade_id: number, query: details | undefined) => Promise<responseMyTradeList>;
    releaseTrade: (advert_id: number, trade_id: number, query: second_factor) => Promise<responseMyTradeList>;
    getTradeCancelationReasons: () => Promise<string[]>;

}

export const trade: TradeModule = {
    getMyTradeList,
    getTradeById,
    acceptTrade,
    declineTrade,
    cancelTrade,
    markAsPaidTrade,
    releaseTrade,
    getTradeCancelationReasons
};
