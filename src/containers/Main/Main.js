import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

export const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </>
    )
}
