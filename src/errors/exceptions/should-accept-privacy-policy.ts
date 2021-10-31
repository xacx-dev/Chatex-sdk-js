import {ValidationException} from './validation';

export class ShouldAcceptPrivacyPolicyException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The requested endpoint requires that you should accept the privacy policy.', property);
    }
}
