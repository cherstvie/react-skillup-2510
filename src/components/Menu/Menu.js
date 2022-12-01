import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const setNavLinkClass = ({ isActive }) => (isActive ? 'nav-link' : 'menu-link')

export const Menu = () => {
    return (
        <>
            <NavLink to="/" className={setNavLinkClass}>
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to="products" className={setNavLinkClass}>
                <Button color="inherit">Products</Button>
            </NavLink>
            <NavLink to="payment" className={setNavLinkClass}>
                <Button color="inherit">Payment</Button>
            </NavLink>
            <NavLink to="shipping" className={setNavLinkClass}>
                <Button color="inherit">Shipping</Button>
            </NavLink>
            <NavLink to="cart" className={setNavLinkClass}>
                <Button color="inherit">Cart</Button>
            </NavLink>
        </>
    )
}
