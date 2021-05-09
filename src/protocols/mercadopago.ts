import { GetPaymentMethod } from './getPaymentMethod';

export type Mercadopago = {
    deviceProfileId: string
    key: string
    referer: string
    tokenId: string
    version: string
    sessionId: any
    initialized: boolean
    initializedInsights: boolean

    AJAX: (t: any) => void
    clearSession: () => void
    createDeviceProvider: (n: Function) => void
    createToken: (e: any, t: any) => void
    getAllPaymentMethods: (t: any) => any
    getIdentificationTypes: (t: any) => any
    getInstallments: (t: any, r: any) => any
    getIssuers: () => any
    getPaymentMethod: GetPaymentMethod
    getPaymentMethods: () => any
    initMercadopago: () => void
    setPaymentMethods: (e: any) => void
    setPublishableKey: (key: string) => void
    validateBinPattern: (e: any, t: any) => boolean
    validateCardNumber: (e: any, t: any, n: Function) => void
    validateCardholderName: (e: any) => boolean
    validateExpiryDate: (e: any, t: any) => boolean
    validateIdentification: (e: any, t: any) => boolean
    validateLuhn: (e: any) => boolean
    validateSecurityCode: (e: any, t: any, n: Function) => any
}

export type MercadoPago = {
    cardForm: (e: any) => any
    checkout: (e: any) => any
    constructor: (key: string, options: { locale: string }) => any
    createCardToken: (e: any, t: any) => Promise<any>
    getIdentificationTypes: () => Promise<any>
    getInstallments: (e: any) => Promise<any>
    getIssuers: (e: any) => Promise<any>
    getPaymentMethods: (e: any) => Promise<any>
}
