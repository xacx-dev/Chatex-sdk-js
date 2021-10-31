import {ValidationException} from './validation';

export class RiskWithdrawException extends ValidationException {
    constructor(message: string, readonly property?: string) {
        super(message, property);
    }
}
