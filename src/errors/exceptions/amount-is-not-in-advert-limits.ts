import {ValidationException} from './validation';

export class AmountIsNotInAdvertLimitsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || '', property);
    }
}
