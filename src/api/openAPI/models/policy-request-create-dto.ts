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
// May contain unused imports in some cases
// @ts-ignore
import type { LocationResolution } from './location-resolution';
// May contain unused imports in some cases
// @ts-ignore
import type { MeasurementResolution } from './measurement-resolution';

/**
 * 
 * @export
 * @interface PolicyRequestCreateDto
 */
export interface PolicyRequestCreateDto {
    /**
     * 
     * @type {boolean}
     * @memberof PolicyRequestCreateDto
     */
    'isAutomaticContractingEnabled': boolean;
    /**
     * 
     * @type {MeasurementResolution}
     * @memberof PolicyRequestCreateDto
     */
    'measurementResolution': MeasurementResolution;
    /**
     * 
     * @type {number}
     * @memberof PolicyRequestCreateDto
     */
    'minHouseHoldSize': number;
    /**
     * 
     * @type {number}
     * @memberof PolicyRequestCreateDto
     */
    'maxHouseHoldSize': number;
    /**
     * 
     * @type {Array<LocationDto>}
     * @memberof PolicyRequestCreateDto
     */
    'locations': Array<LocationDto>;
    /**
     * 
     * @type {LocationResolution}
     * @memberof PolicyRequestCreateDto
     */
    'locationResolution': LocationResolution;
    /**
     * 
     * @type {number}
     * @memberof PolicyRequestCreateDto
     */
    'maxPrice': number;
}



