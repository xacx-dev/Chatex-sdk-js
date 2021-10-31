import {RuntimeException} from './runtime';

export class UnauthorizedException extends RuntimeException {
    constructor() {
        super('Authorization is required');
    }
}
