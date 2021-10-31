import {ValidationException} from './validation';

export class TradeMustNotBeDisputingException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The operation cannot be performed while the trade is disputing.', property);
    }
}
