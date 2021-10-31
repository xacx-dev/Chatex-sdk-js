import {ValidationException} from './validation';

export class PinIsBlockedException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed because the passed second factor is blocked.', property);
    }
}
