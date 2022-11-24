import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = ({ setCartData }) => {
    return (
        <>
            <Container>
                <ProductsList setCartData={setCartData}></ProductsList>
            </Container>
        </>
    )
}
