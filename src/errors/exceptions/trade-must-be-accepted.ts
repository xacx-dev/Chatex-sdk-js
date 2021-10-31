import {ValidationException} from './validation';

export class TradeMustBeAcceptedException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The user cannot send a message to a not accepted trade.', property);
    }
}
