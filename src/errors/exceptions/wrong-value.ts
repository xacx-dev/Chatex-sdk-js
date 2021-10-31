import {ValidationException} from './validation';

export class WrongValueException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'The request cannot be processed because a field in the request has wrong value.', property);
    }
}
