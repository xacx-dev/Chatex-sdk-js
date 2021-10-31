import {stringifyQuery} from './stringify-query';
import {getApiUrl} from './api-url';
import {requestAccessToken} from '../authorization/access-token';
import {RuntimeException} from '../errors/exceptions/runtime';
import {validationErrorsHandler} from '../errors/validation-errors-handler';
import {UnauthorizedException} from '../errors/exceptions/unauthorized';
import {ForbiddenException} from '../errors/exceptions/forbidden';
import {NotFoundException} from '../errors/exceptions/not-found';
import {TooManyRequestsException} from '../errors/exceptions/too-many-requests';

export enum Header {
    Accept = 'accept',
    ContentType = 'Content-Type',
    Authorization = 'Authorization',
    Limit = 'x-limit',
    Offset = 'x-offset',
    TotalCount = 'x-total-count',
}

export interface ApiRequest {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    query?: Record<string, unknown>,
    body?: unknown,
    headers?: Record<string, string>
}

export const fetchApi = async (request: ApiRequest): Promise<Response> => {

    const headers = new Headers(request.headers);
    headers.append(Header.Accept, 'application/json, text/plain, */*');
    headers.append(Header.ContentType, 'application/json;charset=UTF-8');
    if (!headers.has(Header.Authorization)) {
        const token = await requestAccessToken();
        token && headers.append(Header.Authorization, `Bearer ${token.token}`);
    }

    const options: RequestInit = {
        method: request.method,
        headers,
    };

    if (request.body && request.method !== 'GET') {
        options.body = JSON.stringify(request.body);
    }

    let path = getApiUrl() + request.url;
    if (request.query && request.method === 'GET') {
        path += stringifyQuery(request.query);
    }

    return fetch(path, options)
        .then(async (response: Response) => {

            if (!response) {
                throw new RuntimeException('Check internet connection.');
            }

            if (response.ok) {
                return response;
            }

            if (response.status === 401) {
                throw new UnauthorizedException();
            }

            if (response.status === 403) {
                throw new ForbiddenException();
            }

            if (response.status === 404) {
                throw new NotFoundException(response.url);
            }

            const data = await response.json().catch();

            if (data && response.status === 429) {
                throw new TooManyRequestsException(data.message, data.retry_after);
            }

            if (data && data.errors) {
                throw validationErrorsHandler(data.errors);
            }

            throw new RuntimeException(data || 'Temporary server problems.');
        });
};
