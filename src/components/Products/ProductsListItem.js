import { Card, CardActions, CardContent, Button } from '@mui/material'
import { propsToClassKey } from '@mui/styles'
import React from 'react'

export const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div>Type: {type}</div>
                    <div>Capacity: {capacity} GB</div>
                    <div>{price} $</div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
