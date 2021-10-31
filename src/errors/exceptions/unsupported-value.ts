import {ValidationException} from './validation';

export class UnsupportedValueException extends ValidationException {
    constructor(message?: string, property?: string) {
        super(message || 'The requested endpoint does not support the specified request field value.', property);
    }
}
