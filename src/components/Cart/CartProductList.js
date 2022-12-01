import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'
import { CartProductListItem } from './CartProductListItem'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                />
            ))}
        </div>
    )
}
