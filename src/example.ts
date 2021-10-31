import {SDK} from './sdk';

(async () => {
    const sdk = new SDK('https://api.staging.iserverbot.ru/v1');
    console.log(sdk.info);
})();

