import {ValidationException} from './validation';

export class MissedValueException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The request cannot be processed because a required field in the request body is missing.', property);
    }
}
