import {ValidationException} from './validation';

export class ExtraSellerDetailsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'A user provided seller details but it cannot update them now.', property);
    }
}
