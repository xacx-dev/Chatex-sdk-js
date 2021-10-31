import {ValidationException} from './validation';

export class SatisfyingAdvertNotFoundException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'A satisfying advert to start a trade by payout doesn\'t exist.', property);
    }
}
