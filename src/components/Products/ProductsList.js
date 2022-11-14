import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

export const ProductsList = () => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                className={classes.title}
            >
                Products List
            </Typography>
        </>
    )
}
