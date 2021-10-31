import {ValidationException} from './validation';

export class TradeMustBeInProgressException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The status of the trade must be "In progress" to perform the operation.', property);
    }
}
