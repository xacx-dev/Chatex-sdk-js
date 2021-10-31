import {ValidationException} from './validation';

export class NotEnoughBalanceException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed because the user does not have enough balance in the requested coin.', property);
    }
}
