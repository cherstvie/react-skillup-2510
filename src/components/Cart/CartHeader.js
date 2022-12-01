import React from 'react'
import { keys } from 'lodash'
import {
    productsArray,
    getProductsObject,
} from 'components/Products/productsArray'
import { CartTotal } from './CartTotal'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :{' '}
                    {productsInCart[productId]}
                </div>
            ))}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
