import {RuntimeException} from './runtime';

export class TooManyRequestsException extends RuntimeException {

    constructor(message: string, protected readonly retryAfter: number) {
        super(message);
    }

}
