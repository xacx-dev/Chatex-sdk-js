import {ValidationException} from './validation';

export class PayoutIsAlreadyAssignedException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'A payout cannot be assigned twice or more.', property);
    }
}
