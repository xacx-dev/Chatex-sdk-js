import {AuthorizationModule, authorization} from './authorization';
import {getApiUrl, PROD_API_URL, setApiUrl} from './https/api-url';
import {DictionaryModule, dictionaries} from './dictionaries';
import packageJson from '../package.json';
import {ExchangeModule, exchange} from './exchange';
import {profile, ProfileModule} from "./profile";

export interface Chatex {
    authorization: AuthorizationModule;
    dictionaries: DictionaryModule;
    exchange: ExchangeModule;
    profile: ProfileModule;
    info: {
        version: string;
        host: string;
    },
}

const SDK: Chatex = {
    authorization,
    dictionaries,
    exchange,
    profile,
    get info() {

        return {
            version: packageJson.version,
            host: getApiUrl()
        }

    }
}

export const getChatexSDK = (url: string = PROD_API_URL): Chatex => {
    setApiUrl(url);

    return SDK;
}
