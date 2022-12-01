export const productsArray = [
    {
        id: 1,
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: 128,
        type: 'phone',
        price: 500,
        image: '/images/iphone-gold.jpeg',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: 256,
        type: 'phone',
        price: 1100,
        image: '/images/iphone-silver.jpeg',
    },
    {
        id: 3,
        name: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        capacity: 64,
        type: 'phone',
        price: 400,
        image: '/images/iphone-blue.jpeg',
    },
    {
        id: 4,
        name: 'iPhone 8 Plus',
        description: 'This is iPhone 8 Plus',
        capacity: 32,
        type: 'phone',
        price: 300,
        image: '/images/iphone-black.jpeg',
    },
    {
        id: 5,
        name: 'iPhone 7 Plus',
        description: 'This is iPhone 7 Plus',
        capacity: 64,
        type: 'phone',
        price: 350,
        // image: '/images/iphone-gold.jpeg',
    },
    {
        id: 6,
        name: 'iPhone 11',
        description: 'This is iPhone 11',
        capacity: 128,
        type: 'phone',
        price: 700,
        // image: '/images/iphone-silver.jpeg',
    },
]

export const getProductsObject = (array) => {
    return array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
}
