import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'
import { Grid } from '@mui/material'

export const CartPage = ({ productsInCart, removeProductFromCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                <Grid container spacing={3}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                        removeProductFromCart={removeProductFromCart}
                    />
                </Grid>
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
