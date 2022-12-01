import React from 'react'
import { CartProductList } from './CartProductList'
import { CartTotal } from './CartTotal'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
