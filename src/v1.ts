import { useEffect, useState } from 'react'

import { Mercadopago } from './protocols'

declare global {
    interface Window {
        Mercadopago: Mercadopago
    }
}

const useMercadopago = (publicKey: string) => {
    const [mercadopago, setMercadopago] = useState<Mercadopago>()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'

        script.addEventListener('load', () => {
            window.Mercadopago.setPublishableKey(publicKey)

            setMercadopago(window.Mercadopago)
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
