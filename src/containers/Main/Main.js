import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'

export const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductsList
                                addProductToCart={addProductToCart}
                            ></ProductsList>
                        }
                    />
                    <Route path="cart" element={<CartPage />} />
                    <Route
                        path="products"
                        element={
                            <ProductsList
                                addProductToCart={addProductToCart}
                            ></ProductsList>
                        }
                    />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
        </>
    )
}
