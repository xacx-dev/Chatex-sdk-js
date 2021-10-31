import {ValidationException} from './validation';

export class TradeAlreadyMarkedAsPaidException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'A trade cannot be marked as paid twice.', property);
    }
}
