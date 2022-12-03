import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    media: {
        width: 100,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

export const CartProductListItemExtended = ({ product, productCount }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={4}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one item: {product.price}$</div>
                    <div>Count: {productCount}</div>
                </CardContent>
            </Card>
        </Grid>
    )
}
