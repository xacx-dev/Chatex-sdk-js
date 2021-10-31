import {ValidationException} from './validation';

export class TradeMustBeActiveException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'A trade must be in progress or waiting for reply', property);
    }
}
