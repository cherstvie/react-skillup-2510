import { Card, CardContent, Grid, Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Delete } from '@mui/icons-material'
import { Quantity } from 'components/Quantity/Quantity'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one item: {product.price}$</div>
                    <div>Count: {productCount}</div>
                    <Quantity
                        onDecrementClick={() =>
                            changeProductQuantity(product.id, productCount - 1)
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        changeProductQuantity={changeProductQuantity}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <Delete />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
