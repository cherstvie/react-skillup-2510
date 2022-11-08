import React from 'react'
import { Typography } from '@mui/material'

export const ProductsList = () => {
    let uppercase = 'uppercase'
    let lowercase = 'lowercase'
    let state = true
    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                style={{
                    textTransform: state ? uppercase : lowercase,
                    margin: '30px 0',
                }}
            >
                Products List
            </Typography>
        </>
    )
}
