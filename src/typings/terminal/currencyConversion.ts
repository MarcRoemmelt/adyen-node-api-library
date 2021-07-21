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


import { Amount } from './amount';

export class CurrencyConversion {
    'Commission'?: number;
    'ConvertedAmount': Amount;
    'CustomerApprovedFlag'?: boolean;
    'Declaration'?: string;
    'Markup'?: number;
    'Rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Commission",
            "baseName": "Commission",
            "type": "number"
        },
        {
            "name": "ConvertedAmount",
            "baseName": "ConvertedAmount",
            "type": "Amount"
        },
        {
            "name": "CustomerApprovedFlag",
            "baseName": "CustomerApprovedFlag",
            "type": "boolean"
        },
        {
            "name": "Declaration",
            "baseName": "Declaration",
            "type": "string"
        },
        {
            "name": "Markup",
            "baseName": "Markup",
            "type": "number"
        },
        {
            "name": "Rate",
            "baseName": "Rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CurrencyConversion.attributeTypeMap;
    }
}

