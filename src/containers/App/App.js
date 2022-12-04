import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { omit } from 'lodash'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 1,
        2: 1,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => {
            return omit(prevState, [productId])
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                productsInCart={productsInCart}
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
            />
            <Footer />
        </>
    )
}
