import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 1,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart((prevState) =>
            Object.assign({}, prevState, {
                [id]: prevState[id] + count,
            })
        )
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
