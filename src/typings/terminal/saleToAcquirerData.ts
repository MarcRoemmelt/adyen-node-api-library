/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ApplicationInfo } from './applicationInfo';

export class SaleToAcquirerData {
    'applicationInfo'?: ApplicationInfo;
    'shopperEmail'?: string;
    'shopperReference'?: string;
    'recurringContract'?: string;
    'shopperStatement'?: string;
    'recurringDetailName'?: string;
    'store'?: string;
    'merchantAccount'?: string;
    'currency'?: string;
    'tenderOption'?: string;
    'additionalData'?: object;
    'metadata'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "recurringContract",
            "baseName": "recurringContract",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "recurringDetailName",
            "baseName": "recurringDetailName",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "tenderOption",
            "baseName": "tenderOption",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return SaleToAcquirerData.attributeTypeMap;
    }
}

