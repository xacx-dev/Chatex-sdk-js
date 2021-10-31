import {ValidationException} from './validation';

export class GoogleAccountAlreadyOccupiedException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed because the passed google account is already occupied in the system.', property);
    }
}
