import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container>
                <ProductsList
                    addProductToCart={addProductToCart}
                ></ProductsList>
            </Container>
        </>
    )
}
