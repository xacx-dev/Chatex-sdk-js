import {ValidationException} from './validation';

export class BlacklistedByUserException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || '', property);
    }
}
