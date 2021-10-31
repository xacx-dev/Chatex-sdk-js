import {ValidationException} from './validation';

export class AdvertVerificationLevelMismatchException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'Not verified user tries to start a trade with advert that requires verification', property);
    }
}
