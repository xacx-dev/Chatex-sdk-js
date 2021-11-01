import {Advert} from "../exchange/fiat/advert";

export interface seller_details {
    recipient: string
}
export interface buyer_details {
    payment_details: string
}


export interface Label {
    "name": string,
    "view": string,
    "title": string,
    "description": string
}

export interface replier {
    "login": string,
    "count_of_completed_deals": number,
    "count_of_likes": number,
    "count_of_dislikes": number,
    "count_of_blocks": number,
    "trade_volume_tier": string,
    "is_newbie": boolean,
    "labels": Label[]
}

export interface responseMyTradeList {
    "id": number,
    "status": string,
    "cancelation_reason": string,
    "advert": Advert,
    "replier": replier,
    "amount": string | number,
    "fiat_amount": string | number,
    "seller_details": seller_details,
    "buyer_details": buyer_details,
    "created_at": Date,
    "expires_at": Date,
    "accepted_at": Date,
    "paid_at": Date,
    "disputed_at": Date,
    "completed_at": Date,
    "canceled_at": Date,
    "fee": string | number,
    "invoice_id": string,
    "trade_message_count": number,
    "dispute_message_count": number,
}

export enum PairExampleList {
    BTC = 'BTC',
    USD = 'USD',
}

export enum statusesExampleList {
    WAITING_FOR_REPLY = 'WAITING_FOR_REPLY',
    IN_PROGRESS = 'IN_PROGRESS'
}



export type queryMyTradeList = {
    advert_id: number ,
    pair: string | PairExampleList,
    statuses: string | statusesExampleList
    date_start: Date,
    date_end: Date,
    offset: number,
    limit: number
}
