import {ValidationException} from './validation';

export class AmountIsOutOfStrategyLimitException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed due to savings strategy limits', property);
    }
}
