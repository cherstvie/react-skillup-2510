import React from 'react'
import { keys } from 'lodash'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
