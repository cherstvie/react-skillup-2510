import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import { ProductsListItem } from 'components/Products/ProductsListItem'
import { productsArray } from './productsArray'

const useStyles = makeStyles({
    title: {
        padding: '30px 0',
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

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            name={product.name}
                            description={product.description}
                            capacity={product.capacity}
                            type={product.type}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
