import React from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/Products/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

console.log(productsObject)

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :{' '}
                    {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
