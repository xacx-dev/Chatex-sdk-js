import {InvalidRequestStructureException} from './exceptions/invalid-request-structure';
import {WrongValueException} from './exceptions/wrong-value';
import {MissedValueException} from './exceptions/missed-value';
import {UnsupportedValueException} from './exceptions/unsupported-value';
import {WrongFormatException} from './exceptions/wrong-format';
import {ShouldAcceptTermsException} from './exceptions/should-accept-terms';
import {ShouldAcceptPrivacyPolicyException} from './exceptions/should-accept-privacy-policy';
import {PasswordDoesNotMatchConstraintsException} from './exceptions/password-does-not-match-constraints';
import {NotEnoughBalanceException} from './exceptions/not-enough-balance';
import {GoogleAccountAlreadyOccupiedException} from './exceptions/google-account-already-occupied';
import {PinIsBlockedException} from './exceptions/pin-is-blocked';
import {WithdrawalAmountIsNotEnoughException} from './exceptions/withdrawal-amount-is-not-enough';
import {TransferToYourselfException} from './exceptions/transfer-to-yourself';
import {RegulatoryLimitsException} from './exceptions/regulatory-limits';
import {AmountIsOutOfStrategyLimitException} from './exceptions/amount-is-out-of-strategy-limit';
import {UserNotFoundException} from './exceptions/user-not-found';
import {UserNameOccupiedException} from './exceptions/user-name-occupied';
import {UserBlockedException} from './exceptions/user-blocked';
import {UserDeactivatedException} from './exceptions/user-deactivated';
import {RuntimeException} from './exceptions/runtime';
import {RiskWithdrawException} from './exceptions/risk-withdraw';
import {BlacklistedByUserException} from './exceptions/blacklisted-by-user';
import {AdvertNotFoundException} from './exceptions/advert-not-found';
import {AdvertRateMismatchException} from './exceptions/advert-rate-mismatch';
import {AdvertVerificationLevelMismatchException} from './exceptions/advert-verification-level-mismatch';
import {FiatTradeWithYourselfException} from './exceptions/fiat-trade-with-yourself';
import {ActiveFiatTradesLimitExhaustedException} from './exceptions/active-fiat-trades-limit-exhausted';
import {AmountIsNotInAdvertLimitsException} from './exceptions/amount-is-not-in-advert-limits';
import {TradeAlreadyMarkedAsPaidException} from './exceptions/trade-already-marked-as-paid';
import {AllowedOnlyForBuyerException} from './exceptions/allowed-only-for-buyer';
import {AllowedOnlyForSellerException} from './exceptions/allowed-only-for-seller';
import {TradeMustBeInProgressException} from './exceptions/trade-must-be-in-progress';
import {TradeMustBeMarkedAsPaidException} from './exceptions/trade-must-be-marked-as-paid';
import {TradeMustNotBeDisputingException} from './exceptions/trade-must-not-be-disputing';
import {DisagreedWithHoldAfterTradeException} from './exceptions/disagreed-with-hold-after-trade';
import {TradeMustBeDisputingException} from './exceptions/trade-must-be-disputing';
import {TradeMustBeAcceptedException} from './exceptions/trade-must-be-accepted';
import {TradeMustBeActiveException} from './exceptions/trade-must-be-active';
import {AllowedOnlyForReplierException} from './exceptions/allowed-only-for-replier';
import {MissedSellerDetailsException} from './exceptions/missed-seller-details';
import {ExtraSellerDetailsException} from './exceptions/extra-seller-details';
import {PayoutNotFoundException} from './exceptions/payout-not-found';
import {PayoutIsAlreadyAssignedException} from './exceptions/payout-is-already-assigned';
import {SatisfyingAdvertNotFoundException} from './exceptions/satisfying-advert-not-found';
import {ValidationException} from './exceptions/validation';

interface ChatexError {
    code: number,
    message?: string,
}

const exceptionMap: ReadonlyMap<number, typeof ValidationException> = new Map([

    // ---- Part of technical errors on our side (can not unmarshal request etc) ----
    [10001, InvalidRequestStructureException],

    // ---- Part of user errors. Missed argument, invalid type, etc ----
    [11000, WrongValueException],
    [11001, MissedValueException],
    [11002, UnsupportedValueException],
    [11003, WrongFormatException],

    // ---- Part of business logic errors. ----
    [12001, ShouldAcceptTermsException],
    [12002, ShouldAcceptPrivacyPolicyException],
    [12003, PasswordDoesNotMatchConstraintsException],
    [12004, NotEnoughBalanceException],
    [12005, GoogleAccountAlreadyOccupiedException],
    [12006, PinIsBlockedException],
    [12007, WithdrawalAmountIsNotEnoughException],
    [12008, TransferToYourselfException],
    [12009, RegulatoryLimitsException],
    [12010, RiskWithdrawException],
    [12011, BlacklistedByUserException],

    [12017, AmountIsOutOfStrategyLimitException],

    [12012, AdvertNotFoundException],
    [12013, AdvertRateMismatchException],
    [12014, AdvertVerificationLevelMismatchException],
    [12015, FiatTradeWithYourselfException],
    [12016, ActiveFiatTradesLimitExhaustedException],
    [12018, AmountIsNotInAdvertLimitsException],
    [12019, TradeAlreadyMarkedAsPaidException],
    [12020, AllowedOnlyForBuyerException],
    [12020, AllowedOnlyForBuyerException],
    [12021, AllowedOnlyForSellerException],
    [12022, TradeMustBeInProgressException],
    [12023, TradeMustBeInProgressException],
    [12024, TradeMustBeMarkedAsPaidException],
    [12025, TradeMustNotBeDisputingException],
    [12026, DisagreedWithHoldAfterTradeException],
    [12027, TradeMustBeDisputingException],
    [12028, TradeMustBeAcceptedException],
    [12029, TradeMustBeActiveException],
    [12030, AllowedOnlyForReplierException],
    [12031, MissedSellerDetailsException],
    [12032, ExtraSellerDetailsException],

    [12040, PayoutNotFoundException],
    [12041, PayoutIsAlreadyAssignedException],
    [12042, SatisfyingAdvertNotFoundException],

    [13001, UserNotFoundException],
    [13002, UserBlockedException],
    [13003, UserNameOccupiedException],
    [13004, UserDeactivatedException],
]);

export const validationErrorsHandler = (errors: Record<string, ChatexError>): RuntimeException[] => {
    return Object
        .keys(errors)
        .map((field: string) => {
            const {code, message} = errors[field];
            const Handler: (typeof ValidationException | typeof RuntimeException) = exceptionMap.get(code) ?? RuntimeException;

            return new Handler(message, field);
        });
};
