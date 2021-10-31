export enum ExchangeFiatDirection {
    Buy = 'BUY',
    Sell = 'SELL'
}

export enum ExchangeFiatReplierStatus {
    All = 'ALL',
    Verified = 'VERIFIED',
}

export enum ExchangeFiatRateType {
    Fixed = 'FIXED',
    Relative = 'RELATIVE',
}

export interface FixedRate {
    type: ExchangeFiatRateType.Fixed;
    value: string | number;
}

export interface RelativeRate {
    type: ExchangeFiatRateType.Relative;
    readonly value?: string | number;
    exchange: string;
    margin: string;
    base_pair?: string;
    min_exchange_rate?: string | number;
}

interface BaseAdvert {
    direction: ExchangeFiatDirection;
    pair: string;
    payment_system_id: number;
    payment_details?: string;
    terms?: string;
    limits: {
        min: string | number;
        max: string | number;
    };
    replier_status: ExchangeFiatReplierStatus;
    rate: RelativeRate | FixedRate;
}

interface BuyAdvertRequest extends BaseAdvert {
    direction: ExchangeFiatDirection.Buy;
}

interface SellAdvertRequest extends BaseAdvert {
    direction: ExchangeFiatDirection.Sell;
    payment_details: string;
}

export type AdvertRequest = BuyAdvertRequest | SellAdvertRequest;

export interface Label {
    name: string;
    view: string;
}

export interface TradingInfo {
    login: string;
    count_of_completed_deals: number;
    count_of_likes: number;
    count_of_dislikes: number;
    count_of_blocks: number;
    trade_volume_tier: string;
    labels: Label[];
}

export interface Advert extends BaseAdvert {
    id: number;
    created_at: Date;
    updated_at: Date;
    owner: TradingInfo;
    is_owner: boolean;
    is_visible?: boolean;
    is_blocked?: boolean;
}
