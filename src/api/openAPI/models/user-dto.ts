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
import type { NameDto } from './name-dto';

/**
 * 
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * 
     * @type {NameDto}
     * @memberof UserDto
     */
    'name'?: NameDto;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    'username'?: string | null;
}
