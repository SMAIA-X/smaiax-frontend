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


// May contain unused imports in some cases
// @ts-ignore
import type { MetadataDto } from './metadata-dto';

/**
 * 
 * @export
 * @interface SmartMeterDto
 */
export interface SmartMeterDto {
    /**
     * 
     * @type {string}
     * @memberof SmartMeterDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof SmartMeterDto
     */
    'connectorSerialNumber': string;
    /**
     * 
     * @type {string}
     * @memberof SmartMeterDto
     */
    'name': string;
    /**
     * 
     * @type {Array<MetadataDto>}
     * @memberof SmartMeterDto
     */
    'metadata': Array<MetadataDto>;
}

