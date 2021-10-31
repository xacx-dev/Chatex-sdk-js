import {ValidationException} from './validation';

export class TransferToYourselfException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed because the passed recipient is your account.', property);
    }
}
