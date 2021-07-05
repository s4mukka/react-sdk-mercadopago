import { useEffect, useState } from 'react'

import { MercadoPago } from './protocols'

interface Constructable<T> {
    new(key: string, options?: { locale: string }): T
}

declare global {
    interface Window {
        MercadoPago: Constructable<MercadoPago>
    }
}

const useMercadopago = (publicKey: string, options?: { locale: string }) => {
    const [mercadopago, setMercadopago] = useState<MercadoPago>()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://sdk.mercadopago.com/js/v2'

        script.addEventListener('load', () => {
            setMercadopago(new window.MercadoPago(publicKey, options))
        })

        document.body.appendChild(script)

        return () => {
            let iframe = document.body.querySelector('iframe[src*="mercadolibre"]')

            if (iframe) {
                document.body.removeChild(iframe)
            }

            document.body.removeChild(script)
        }
    }, [])

    return mercadopago
}

export default useMercadopago
