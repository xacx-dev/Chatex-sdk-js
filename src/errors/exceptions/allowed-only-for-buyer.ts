import {ValidationException} from './validation';

export class AllowedOnlyForBuyerException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The operation can only be performed by buyer of the trade.', property);
    }
}
