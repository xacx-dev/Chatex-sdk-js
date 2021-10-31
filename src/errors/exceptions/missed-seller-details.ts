import {ValidationException} from './validation';

export class MissedSellerDetailsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || '', property);
    }
}
