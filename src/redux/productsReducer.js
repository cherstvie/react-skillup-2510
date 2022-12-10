import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('url')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
        })
}

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTS_SUCCESS':
            return action.products

        default:
            return state
    }
}
