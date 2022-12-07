import { Card, CardActions, CardContent, Button } from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'
import { Quantity } from 'components/Quantity/Quantity'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { connect } from 'react-redux'

const ProductsListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    // const likedProducts= useSelector((state) => (state))
    const [count, setCount] = useState(1)

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                    >
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </Button>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} GB
                    </div>
                    <div className="product-price">{price} $</div>
                    <Quantity
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                        count={count}
                    />
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/default.png',
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.productsLikeState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) => dispatch({ type: 'LIKE', id }),
    removeLike: (id) => dispatch({ type: 'DISLIKE', id }),
    addProductToCart: (id, count) =>
        dispatch({ type: 'ADD_PRODUCT_TO_CART', id, count }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListItem)
