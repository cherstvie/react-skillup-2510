import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'

export const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <>
            Total :{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[productId].price * productsInCart[productId],
                0
            )}
            $
        </>
    )
}
