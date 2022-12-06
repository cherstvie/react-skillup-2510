import { Card, CardContent, Grid, Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Quantity } from 'components/Quantity/Quantity'
import { connect } from 'react-redux'

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

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media} />
                </div>
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? removeLike(product.id)
                                : addLike(product.id)
                        }
                    >
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </Button>
                    <div>{product.name}</div>
                    <div>Price for one item: {product.price}$</div>
                    <div>Count: {productCount}</div>
                    <Quantity
                        onDecrementClick={() => {
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }}
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
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

const mapStateToProps = (state, { product }) => ({ isLiked: state[product.id] })

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) => dispatch({ type: 'LIKE', id }),
    removeLike: (id) => dispatch({ type: 'DISLIKE', id }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartProductListItemExtended)
