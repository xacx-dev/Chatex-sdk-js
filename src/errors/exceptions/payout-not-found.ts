import {ValidationException} from './validation';

export class PayoutNotFoundException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'Payout doesn\'t exist.', property);
    }
}
