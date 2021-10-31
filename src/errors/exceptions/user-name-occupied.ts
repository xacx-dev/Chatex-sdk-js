import {ValidationException} from './validation';

export class UserNameOccupiedException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'This request cannot be processed because the passed login is already occupied in the system.', property);
    }
}
