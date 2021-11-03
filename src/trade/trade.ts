import {Advert} from '../exchange/fiat/advert';

export interface SellerDetails extends Details {
}

export interface Details {
    recipient: string
}

export interface BuyerDetails {
    payment_details: string
}

export type PayloadAcceptTrade = {
    details?: Details,
    second_factor: SecondFactor,
    is_consented?: boolean | true
}

export type PayloadReason = {
    reason: string,
}


export interface SecondFactor {
    mode: string | 'PIN',
    code: string | number
}

export interface Label {
    name: string,
    view: string,
    title: string,
    description: string
}

export interface Replier {
    login: string,
    count_of_completed_deals: number,
    count_of_likes: number,
    count_of_dislikes: number,
    count_of_blocks: number,
    trade_volume_tier: string,
    is_newbie: boolean,
    labels: Label[]
}

export interface ResponseMyTradeList {
    id: number,
    status: string,
    cancelation_reason: string,
    advert: Advert,
    replier: Replier,
    amount: string | number,
    fiat_amount: string | number,
    seller_details: SellerDetails,
    buyer_details: BuyerDetails,
    created_at: Date,
    expires_at: Date,
    accepted_at: Date,
    paid_at: Date,
    disputed_at: Date,
    completed_at: Date,
    canceled_at: Date,
    fee: string | number,
    invoice_id: string,
    trade_message_count: number,
    dispute_message_count: number,
}

export enum PairExampleList {
    BTC = 'BTC',
    USD = 'USD',
}

export enum StatusesExampleList {
    WAITING_FOR_REPLY = 'WAITING_FOR_REPLY',
    IN_PROGRESS = 'IN_PROGRESS'
}


export type QueryMyTradeList = {
    advert_id: number,
    pair: string | PairExampleList,
    statuses: string | StatusesExampleList
    date_start: Date,
    date_end: Date,
    offset: number,
    limit: number
}
