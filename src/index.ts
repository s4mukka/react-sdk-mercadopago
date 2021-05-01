import { useEffect } from 'react'

declare global {
    interface Window {
        Mercadopago:
        {
            deviceProfileId: string
            key: string
            referer: string
            tokenId: string
            version: string
            sessionId: null
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
            getPaymentMethod: (t: any, a: Function) => any
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
    }
}

const useMercadopago = (publicKey: string) => {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'

        script.addEventListener('load', () => {
            window.Mercadopago.setPublishableKey(publicKey)
        })

        document.body.appendChild(script)

        return () => {
            let iframe = document.querySelector('iframe')

            if (iframe) {
                document.body.removeChild(iframe)
            }

            document.body.removeChild(script)
        }
    }, [])

    return window.Mercadopago
}

export { useMercadopago }
