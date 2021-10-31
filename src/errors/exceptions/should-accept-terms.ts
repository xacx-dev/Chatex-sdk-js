import {ValidationException} from './validation';

export class ShouldAcceptTermsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The requested endpoint requires that you should accept terms.', property);
    }
}
