/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
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



export class OutputBarcode {
    'BarcodeType'?: OutputBarcode.BarcodeTypeEnum;
    'Value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "BarcodeType",
            "baseName": "BarcodeType",
            "type": "OutputBarcode.BarcodeTypeEnum"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutputBarcode.attributeTypeMap;
    }
}

export namespace OutputBarcode {
    export enum BarcodeTypeEnum {
        Code128 = <any> 'Code128',
        Code25 = <any> 'Code25',
        Ean13 = <any> 'EAN13',
        Ean8 = <any> 'EAN8',
        Pdf417 = <any> 'PDF417',
        Qrcode = <any> 'QRCODE',
        Upca = <any> 'UPCA'
    }
}
