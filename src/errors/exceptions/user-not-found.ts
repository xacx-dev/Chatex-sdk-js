import {ValidationException} from './validation';

export class UserNotFoundException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed because the passed identifier was not found in the system.', property);
    }
}
