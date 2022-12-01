import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'

export const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                <CartProductList productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
