import React from 'react'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
