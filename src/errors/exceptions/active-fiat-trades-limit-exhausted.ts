import {ValidationException} from './validation';

export class ActiveFiatTradesLimitExhaustedException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || '', property);
    }
}
