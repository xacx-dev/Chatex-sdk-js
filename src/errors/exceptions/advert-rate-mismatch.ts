import {ValidationException} from './validation';

export class AdvertRateMismatchException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || 'Provided advert rate differs a lot from the actual one', property);
    }
}
