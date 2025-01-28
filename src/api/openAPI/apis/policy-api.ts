/* tslint:disable */
/* eslint-disable */
/**
 * SMAIAX Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { LocationResolution } from '../models';
// @ts-ignore
import type { MeasurementListDto } from '../models';
// @ts-ignore
import type { MeasurementResolution } from '../models';
// @ts-ignore
import type { PolicyCreateDto } from '../models';
// @ts-ignore
import type { PolicyDto } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
/**
 * PolicyApi - axios parameter creator
 * @export
 */
export const PolicyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PolicyCreateDto} policyCreateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPolicy: async (policyCreateDto: PolicyCreateDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'policyCreateDto' is not null or undefined
            assertParamExists('createPolicy', 'policyCreateDto', policyCreateDto)
            const localVarPath = `/api/policies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(policyCreateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {string} [startAt] 
         * @param {string} [endAt] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeasurementsByPolicy: async (id: string, measurementResolution?: MeasurementResolution, startAt?: string, endAt?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMeasurementsByPolicy', 'id', id)
            const localVarPath = `/api/policies/{id}/measurements`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (measurementResolution !== undefined) {
                localVarQueryParameter['measurementResolution'] = measurementResolution;
            }

            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = (startAt as any instanceof Date) ?
                    (startAt as any).toISOString() :
                    startAt;
            }

            if (endAt !== undefined) {
                localVarQueryParameter['endAt'] = (endAt as any instanceof Date) ?
                    (endAt as any).toISOString() :
                    endAt;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [smartMeterId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicies: async (smartMeterId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/policies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (smartMeterId !== undefined) {
                localVarQueryParameter['smartMeterId'] = smartMeterId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [maxPrice] 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {LocationResolution} [locationResolution] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchPolicies: async (maxPrice?: number, measurementResolution?: MeasurementResolution, locationResolution?: LocationResolution, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/policies/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (maxPrice !== undefined) {
                localVarQueryParameter['maxPrice'] = maxPrice;
            }

            if (measurementResolution !== undefined) {
                localVarQueryParameter['measurementResolution'] = measurementResolution;
            }

            if (locationResolution !== undefined) {
                localVarQueryParameter['locationResolution'] = locationResolution;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PolicyApi - functional programming interface
 * @export
 */
export const PolicyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PolicyApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PolicyCreateDto} policyCreateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPolicy(policyCreateDto: PolicyCreateDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPolicy(policyCreateDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PolicyApi.createPolicy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {string} [startAt] 
         * @param {string} [endAt] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMeasurementsByPolicy(id: string, measurementResolution?: MeasurementResolution, startAt?: string, endAt?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeasurementListDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMeasurementsByPolicy(id, measurementResolution, startAt, endAt, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PolicyApi.getMeasurementsByPolicy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [smartMeterId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPolicies(smartMeterId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PolicyDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPolicies(smartMeterId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PolicyApi.getPolicies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [maxPrice] 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {LocationResolution} [locationResolution] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchPolicies(maxPrice?: number, measurementResolution?: MeasurementResolution, locationResolution?: LocationResolution, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PolicyDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchPolicies(maxPrice, measurementResolution, locationResolution, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PolicyApi.searchPolicies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PolicyApi - factory interface
 * @export
 */
export const PolicyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PolicyApiFp(configuration)
    return {
        /**
         * 
         * @param {PolicyCreateDto} policyCreateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPolicy(policyCreateDto: PolicyCreateDto, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.createPolicy(policyCreateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {string} [startAt] 
         * @param {string} [endAt] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeasurementsByPolicy(id: string, measurementResolution?: MeasurementResolution, startAt?: string, endAt?: string, options?: RawAxiosRequestConfig): AxiosPromise<MeasurementListDto> {
            return localVarFp.getMeasurementsByPolicy(id, measurementResolution, startAt, endAt, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [smartMeterId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicies(smartMeterId?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<PolicyDto>> {
            return localVarFp.getPolicies(smartMeterId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [maxPrice] 
         * @param {MeasurementResolution} [measurementResolution] 
         * @param {LocationResolution} [locationResolution] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchPolicies(maxPrice?: number, measurementResolution?: MeasurementResolution, locationResolution?: LocationResolution, options?: RawAxiosRequestConfig): AxiosPromise<Array<PolicyDto>> {
            return localVarFp.searchPolicies(maxPrice, measurementResolution, locationResolution, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PolicyApi - object-oriented interface
 * @export
 * @class PolicyApi
 * @extends {BaseAPI}
 */
export class PolicyApi extends BaseAPI {
    /**
     * 
     * @param {PolicyCreateDto} policyCreateDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
    public createPolicy(policyCreateDto: PolicyCreateDto, options?: RawAxiosRequestConfig) {
        return PolicyApiFp(this.configuration).createPolicy(policyCreateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {MeasurementResolution} [measurementResolution] 
     * @param {string} [startAt] 
     * @param {string} [endAt] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
    public getMeasurementsByPolicy(id: string, measurementResolution?: MeasurementResolution, startAt?: string, endAt?: string, options?: RawAxiosRequestConfig) {
        return PolicyApiFp(this.configuration).getMeasurementsByPolicy(id, measurementResolution, startAt, endAt, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [smartMeterId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
    public getPolicies(smartMeterId?: string, options?: RawAxiosRequestConfig) {
        return PolicyApiFp(this.configuration).getPolicies(smartMeterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [maxPrice] 
     * @param {MeasurementResolution} [measurementResolution] 
     * @param {LocationResolution} [locationResolution] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
    public searchPolicies(maxPrice?: number, measurementResolution?: MeasurementResolution, locationResolution?: LocationResolution, options?: RawAxiosRequestConfig) {
        return PolicyApiFp(this.configuration).searchPolicies(maxPrice, measurementResolution, locationResolution, options).then((request) => request(this.axios, this.basePath));
    }
}

