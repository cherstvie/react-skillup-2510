import { Card, CardActions, CardContent, Button } from '@mui/material'
import { propsToClassKey } from '@mui/styles'
import React from 'react'

export const ProductsListItem = (props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <div>Type: {props.type}</div>
                    <div>Capacity: {props.capacity} GB</div>
                    <div>{props.price} $</div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
