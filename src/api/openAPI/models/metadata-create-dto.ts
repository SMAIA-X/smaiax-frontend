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
import type { LocationDto } from './location-dto';

/**
 * 
 * @export
 * @interface MetadataCreateDto
 */
export interface MetadataCreateDto {
    /**
     * 
     * @type {string}
     * @memberof MetadataCreateDto
     */
    'validFrom': string;
    /**
     * 
     * @type {LocationDto}
     * @memberof MetadataCreateDto
     */
    'location'?: LocationDto;
    /**
     * 
     * @type {number}
     * @memberof MetadataCreateDto
     */
    'householdSize'?: number | null;
}

