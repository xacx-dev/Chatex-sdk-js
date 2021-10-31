import {ValidationException} from './validation';

export class AllowedOnlyForReplierException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'An operation can only be performed by the replier now.', property);
    }
}
