import {ValidationException} from './validation';

export class DisagreedWithHoldAfterTradeException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'The user didn\'t consent with hold of funds after trade completion.', property);
    }
}
