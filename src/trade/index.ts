import {getMyTradeList} from "./get-my-trade-list";
import {getTradeById} from "./get-trade-by-id";
import {acceptTrade} from "./accept-trade";
import {declineTrade} from "./decline-trade";
import {cancelTrade} from "./cancel-trade";
import {markAsPaidTrade} from "./mark-as-paid-trade";
import {releaseTrade} from "./release-trade";
import {getTradeCancelationReasons} from "./get-trade-cancelation-reasons";
import {
    PayloadAcceptTrade,
    PayloadReason,
    QueryMyTradeList,
    ResponseMyTradeList,
    SecondFactor,
    BuyerDetails
} from "./trade"

export interface TradeModule {
    getMyTradeList: (query?: QueryMyTradeList) => Promise<ResponseMyTradeList[]>;
    getTradeById: (advertId: number, tradeId: number) => Promise<ResponseMyTradeList>;
    acceptTrade: (advertId: number, tradeId: number, payload: PayloadAcceptTrade) => Promise<ResponseMyTradeList>;
    declineTrade: (advertId: number, tradeId: number, payload?: PayloadReason) => Promise<ResponseMyTradeList>;
    cancelTrade: (advertId: number, tradeId: number, payload?: PayloadReason) => Promise<ResponseMyTradeList>;
    markAsPaidTrade: (advertId: number, tradeId: number, details?: BuyerDetails) => Promise<ResponseMyTradeList>;
    releaseTrade: (advertId: number, tradeId: number, payload: SecondFactor) => Promise<ResponseMyTradeList>;
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
