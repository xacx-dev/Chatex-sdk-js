import {ValidationException} from './validation';

export class AllowedOnlyForSellerException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The operation can only be performed by seller of the trade.', property);
    }
}
