import { Card, CardActions, CardContent, Button } from '@mui/material'
import React from 'react'
import './ProductsListItem.css'

export const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} GB
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
