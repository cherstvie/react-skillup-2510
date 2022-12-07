import React from 'react'
import { connect } from 'react-redux'
import { CartProductList } from './CartProductList'
import { CartTotal } from './CartTotal'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCartState,
})

export default connect(mapStateToProps)(CartHeader)
