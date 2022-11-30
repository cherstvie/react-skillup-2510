import React from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/Products/productsArray'
import { Link } from 'react-router-dom'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :{' '}
                    {productsInCart[productId]}
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
            <Link to="/cart">Show cart</Link>
        </div>
    )
}
