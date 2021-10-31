import {ValidationException} from './validation';

export class InvalidRequestStructureException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The request cannot be processed due to an invalid request structure.', property);
    }
}
