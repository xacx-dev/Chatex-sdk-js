import {ValidationException} from './validation';

export class FiatTradeWithYourselfException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'You cannot start a trade with yourself', property);
    }
}
