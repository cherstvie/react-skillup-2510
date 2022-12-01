import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'

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
                <div>
                    Total :{' '}
                    {keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsObject[productId].price *
                                productsInCart[productId],
                        0
                    )}
                    $
                </div>
            </div>
        </>
    )
}
