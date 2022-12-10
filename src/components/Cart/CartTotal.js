import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'components/Products/productsArray'
import { connect } from 'react-redux'

const CartTotal = ({
    productsArray,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    if (productsArray === 0) {
        return null
    } else {
        return (
            <>
                Total :{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[productId].price *
                            productsInCart[productId],
                    0
                )}
                $
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartTotal)
