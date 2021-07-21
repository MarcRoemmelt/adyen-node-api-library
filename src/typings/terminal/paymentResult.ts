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


import { AmountsResp } from './amountsResp';
import { CapturedSignature } from './capturedSignature';
import { ContentInformation } from './contentInformation';
import { CurrencyConversion } from './currencyConversion';
import { Instalment } from './instalment';
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';

export class PaymentResult {
    'AmountsResp'?: AmountsResp;
    'AuthenticationMethod'?: Array<PaymentResult.AuthenticationMethodEnum>;
    'CapturedSignature'?: CapturedSignature;
    'CurrencyConversion'?: Array<CurrencyConversion>;
    'CustomerLanguage'?: string;
    'InstalmentType'?: Instalment;
    'MerchantOverrideFlag'?: boolean;
    'OnlineFlag'?: boolean;
    'PaymentAcquirerData'?: PaymentAcquirerData;
    'PaymentInstrumentData'?: PaymentInstrumentData;
    'PaymentType'?: PaymentResult.PaymentTypeEnum;
    'ProtectedSignature'?: ContentInformation;
    'ValidityDate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AmountsResp",
            "baseName": "AmountsResp",
            "type": "AmountsResp"
        },
        {
            "name": "AuthenticationMethod",
            "baseName": "AuthenticationMethod",
            "type": "Array<PaymentResult.AuthenticationMethodEnum>"
        },
        {
            "name": "CapturedSignature",
            "baseName": "CapturedSignature",
            "type": "CapturedSignature"
        },
        {
            "name": "CurrencyConversion",
            "baseName": "CurrencyConversion",
            "type": "Array<CurrencyConversion>"
        },
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "InstalmentType",
            "baseName": "InstalmentType",
            "type": "Instalment"
        },
        {
            "name": "MerchantOverrideFlag",
            "baseName": "MerchantOverrideFlag",
            "type": "boolean"
        },
        {
            "name": "OnlineFlag",
            "baseName": "OnlineFlag",
            "type": "boolean"
        },
        {
            "name": "PaymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "PaymentType",
            "baseName": "PaymentType",
            "type": "PaymentResult.PaymentTypeEnum"
        },
        {
            "name": "ProtectedSignature",
            "baseName": "ProtectedSignature",
            "type": "ContentInformation"
        },
        {
            "name": "ValidityDate",
            "baseName": "ValidityDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentResult.attributeTypeMap;
    }
}

export namespace PaymentResult {
    export enum AuthenticationMethodEnum {
        Bypass = <any> 'Bypass',
        ManualVerification = <any> 'ManualVerification',
        MerchantAuthentication = <any> 'MerchantAuthentication',
        OfflinePin = <any> 'OfflinePIN',
        OnlinePin = <any> 'OnlinePIN',
        PaperSignature = <any> 'PaperSignature',
        SecureCertificate = <any> 'SecureCertificate',
        SecureNoCertificate = <any> 'SecureNoCertificate',
        SecuredChannel = <any> 'SecuredChannel',
        SignatureCapture = <any> 'SignatureCapture',
        UnknownMethod = <any> 'UnknownMethod'
    }
    export enum PaymentTypeEnum {
        CashAdvance = <any> 'CashAdvance',
        CashDeposit = <any> 'CashDeposit',
        Completion = <any> 'Completion',
        FirstReservation = <any> 'FirstReservation',
        Instalment = <any> 'Instalment',
        IssuerInstalment = <any> 'IssuerInstalment',
        Normal = <any> 'Normal',
        OneTimeReservation = <any> 'OneTimeReservation',
        PaidOut = <any> 'PaidOut',
        Recurring = <any> 'Recurring',
        Refund = <any> 'Refund',
        UpdateReservation = <any> 'UpdateReservation'
    }
}
