import {ValidationException} from './validation';

export class TradeMustBeDisputingException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The user cannot send message to arbiter while trade is not on disputing', property);
    }
}
