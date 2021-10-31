import {ValidationException} from './validation';

export class WithdrawalAmountIsNotEnoughException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed because the passed amount is less than the minimum withdrawal amount.', property);
    }
}
