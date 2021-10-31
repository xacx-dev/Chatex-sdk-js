import {ValidationException} from './validation';

export class UserBlockedException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed because the user is blocked in the system.', property);
    }
}
