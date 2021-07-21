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


import { CardData } from './cardData';
import { CheckData } from './checkData';
import { MobileData } from './mobileData';
import { PaymentInstrumentType } from './paymentInstrumentType';

export class PaymentInstrumentData {
    'CardData'?: CardData;
    'CheckData'?: CheckData;
    'MobileData'?: MobileData;
    'PaymentInstrumentType': PaymentInstrumentType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardData",
            "baseName": "CardData",
            "type": "CardData"
        },
        {
            "name": "CheckData",
            "baseName": "CheckData",
            "type": "CheckData"
        },
        {
            "name": "MobileData",
            "baseName": "MobileData",
            "type": "MobileData"
        },
        {
            "name": "PaymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentData.attributeTypeMap;
    }
}

