import {ValidationException} from './validation';

export class PasswordDoesNotMatchConstraintsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed because the password does not match with our constraints.', property);
    }
}
