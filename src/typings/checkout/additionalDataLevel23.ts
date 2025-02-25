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
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class AdditionalDataLevel23 {
    /**
    * Customer code, if supplied by a customer.  Encoding: ASCII.  Max length: 25 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeData_customerReference'?: string;
    /**
    * Destination country code.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeData_destinationCountryCode'?: string;
    /**
    * The postal code of a destination address.  Encoding: ASCII.  Max length: 10 characters.  > Required for American Express.
    */
    'enhancedSchemeData_destinationPostalCode'?: string;
    /**
    * Destination state or province code.  Encoding: ASCII.Max length: 3 characters.
    */
    'enhancedSchemeData_destinationStateProvinceCode'?: string;
    /**
    * Duty amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeData_dutyAmount'?: string;
    /**
    * Shipping amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeData_freightAmount'?: string;
    /**
    * Item commodity code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_commodityCode'?: string;
    /**
    * Item description.  Encoding: ASCII.  Max length: 26 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_description'?: string;
    /**
    * Discount amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_discountAmount'?: string;
    /**
    * Product code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_productCode'?: string;
    /**
    * Quantity, specified as an integer value.  Value must be greater than 0.  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_quantity'?: string;
    /**
    * Total amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_totalAmount'?: string;
    /**
    * Item unit of measurement.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_unitOfMeasure'?: string;
    /**
    * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).  Max length: 12 characters.
    */
    'enhancedSchemeData_itemDetailLine_itemNr_unitPrice'?: string;
    /**
    * Order date. * Format: `ddMMyy`  Encoding: ASCII.  Max length: 6 characters.
    */
    'enhancedSchemeData_orderDate'?: string;
    /**
    * The postal code of a \"ship-from\" address.  Encoding: ASCII.  Max length: 10 characters.
    */
    'enhancedSchemeData_shipFromPostalCode'?: string;
    /**
    * Total tax amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeData_totalTaxAmount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enhancedSchemeData_customerReference",
            "baseName": "enhancedSchemeData.customerReference",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationCountryCode",
            "baseName": "enhancedSchemeData.destinationCountryCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationPostalCode",
            "baseName": "enhancedSchemeData.destinationPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationStateProvinceCode",
            "baseName": "enhancedSchemeData.destinationStateProvinceCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_dutyAmount",
            "baseName": "enhancedSchemeData.dutyAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_freightAmount",
            "baseName": "enhancedSchemeData.freightAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_commodityCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].commodityCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_description",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].description",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_discountAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].discountAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_productCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].productCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_quantity",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].quantity",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_totalAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].totalAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_unitOfMeasure",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_unitPrice",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitPrice",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_orderDate",
            "baseName": "enhancedSchemeData.orderDate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_shipFromPostalCode",
            "baseName": "enhancedSchemeData.shipFromPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_totalTaxAmount",
            "baseName": "enhancedSchemeData.totalTaxAmount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataLevel23.attributeTypeMap;
    }
}

