import {RuntimeException} from './runtime';

export class ValidationException extends RuntimeException {
    constructor(message?: string, readonly property?: string) {
        super(message);
    }
}
