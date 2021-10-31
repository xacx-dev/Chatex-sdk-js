import {ValidationException} from './validation';

export class TradeMustBeMarkedAsPaidException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The trade must be marked as paid.', property);
    }
}
