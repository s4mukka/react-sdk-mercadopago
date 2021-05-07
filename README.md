# SDK Mercadopago V1 for React
A hook to facilitate the use of the mercadopago sdk v1

## About
I created this package because I couldn't find a way to integrate the mercado pago sdk with React. However, as there is no detailed documentation for the sdk, the methods are typed as 'any'. Over time, I update the types.

## Install
```shell
npm install --save react-sdk-mercadopago
```

## Usage
```js
import React from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago('YOUR_PUBLIC_KEY');

    return (
        // jsx
    )
}
```
