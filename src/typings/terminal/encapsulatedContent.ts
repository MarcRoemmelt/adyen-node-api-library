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


import { ContentType } from './contentType';

export class EncapsulatedContent {
    'Content'?: any | null;
    'ContentType': ContentType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Content",
            "baseName": "Content",
            "type": "any"
        },
        {
            "name": "ContentType",
            "baseName": "ContentType",
            "type": "ContentType"
        }    ];

    static getAttributeTypeMap() {
        return EncapsulatedContent.attributeTypeMap;
    }
}

