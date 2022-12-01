import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :{' '}
                    {productsInCart[productId]} :{' '}
                    {productsObject[productId].price}
                </div>
            ))}
        </>
    )
}
