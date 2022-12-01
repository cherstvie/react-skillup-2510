import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'
import { CartTotal } from 'components/Cart/CartTotal'

export const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name} :{' '}
                        {productsInCart[productId]} :{' '}
                        {productsObject[productId].price}
                    </div>
                ))}
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
