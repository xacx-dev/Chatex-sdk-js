import {ValidationException} from './validation';

export class UserDeactivatedException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed because the user is deactivated in the system.', property);
    }
}
