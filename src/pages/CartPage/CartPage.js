import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import { Grid } from '@mui/material'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                <Grid container spacing={3}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <CartTotal productsInCart={productsInCart} />
            </div>
            <Link to="/checkout">Proceed checkout</Link>
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCartState,
})

export default connect(mapStateToProps)(CartPage)
