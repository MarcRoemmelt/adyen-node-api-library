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


import { CustomerOrder } from './customerOrder';
import { OriginalPOITransaction } from './originalPOITransaction';
import { ReversalReasonType } from './reversalReasonType';

export class ReversalRequest {
    'CustomerOrderID'?: CustomerOrder;
    'OriginalPOITransaction': OriginalPOITransaction;
    'ReversalReason': ReversalReasonType;
    'ReversedAmount'?: number;
    'SaleReferenceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerOrderID",
            "baseName": "CustomerOrderID",
            "type": "CustomerOrder"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "ReversalReason",
            "baseName": "ReversalReason",
            "type": "ReversalReasonType"
        },
        {
            "name": "ReversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        },
        {
            "name": "SaleReferenceID",
            "baseName": "SaleReferenceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReversalRequest.attributeTypeMap;
    }
}

