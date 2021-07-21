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


import { TransactionIdentification } from './transactionIdentification';

export class LoyaltyAcquirerData {
    'ApprovalCode'?: string;
    'HostReconciliationID'?: string;
    'LoyaltyAcquirerID'?: string;
    'LoyaltyTransactionID'?: TransactionIdentification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ApprovalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "HostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "LoyaltyAcquirerID",
            "baseName": "LoyaltyAcquirerID",
            "type": "string"
        },
        {
            "name": "LoyaltyTransactionID",
            "baseName": "LoyaltyTransactionID",
            "type": "TransactionIdentification"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAcquirerData.attributeTypeMap;
    }
}

