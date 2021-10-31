import {ValidationException} from './validation';

export class RegulatoryLimitsException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'This request cannot be processed due to regulatory limits', property);
    }
}
