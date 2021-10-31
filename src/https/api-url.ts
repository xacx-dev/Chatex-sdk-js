export const PROD_API_URL = 'https://api.chatex.com/v1';

let apiUrl: string = PROD_API_URL;

export const setApiUrl = (url: string) => apiUrl = url;

export const getApiUrl = () => apiUrl;
