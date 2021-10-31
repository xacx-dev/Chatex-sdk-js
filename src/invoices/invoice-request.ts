import {Coin} from "../dictionaries/get-coins";
import {Country} from "../dictionaries/get-countries";
import {Fiat} from "../dictionaries/get-fiats";
import {PaymentSystem} from "../dictionaries/get-payment-systems";

interface CommonInvoiceRequest {
    coin: Coin | string;
    country: Country | string;
    fiat: Fiat | string;
    lang_id: string;
    payment_system: PaymentSystem | number;
    redirect_url?: string;
    data?: string;
    callback_url?: string;
}

export interface FiatInvoiceRequest extends CommonInvoiceRequest {
    fiat_amount: string;
}


export interface CryptoInvoiceRequest extends CommonInvoiceRequest {
    amount: number;
}

export type InvoiceRequest = FiatInvoiceRequest | CryptoInvoiceRequest;
