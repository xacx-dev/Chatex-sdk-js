import {ValidationException} from './validation';

export class AdvertNotFoundException extends ValidationException {
    constructor(message?: string, readonly property?: string) {
        super(message || '', property);
    }
}
