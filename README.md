# SDK Mercadopago js for React
A hook to facilitate the use of the mercadopago sdk js

## About
I created this package because I couldn't find a way to integrate the mercado pago sdk with React. However, as there is no detailed documentation for the sdk, the methods are typed as 'any'. Over time, I update the types. Please help me to type the project.

## Install
```shell
npm install --save react-sdk-mercadopago
```

## Usage
```js
// SDK V1
import React from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago.v1('YOUR_PUBLIC_KEY');

    return (
        // jsx
    )
}
```
```js
// SDK V2
import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago.v2('YOUR_PUBLIC_KEY', {
        locale: 'en-US'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: 'YOUR_PREFERENCE_ID'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}
```
