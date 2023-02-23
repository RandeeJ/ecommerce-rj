import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from "./types";


export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}


export function filterProductsWithCategoryId(_id){
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: "All"
            },
            {
                _id: 1,
                title: "JavaScript"
            },
            {
                _id: 2,
                title: "UI/UX"
            },
            {
                _id: 3,
                title: "Linux"
            },
            {
                _id: 4,
                title: "Python"
            },
            {
                _id: 5,
                title: "UML"
            },
            {
                _id: 6,
                title: "Ruby"
            }
        ]
    })
}

export function fetchShopProducts() {


    return ({
        type: SET_SHOP_PRODUCTS,
        
        payload: [{
            _id: 0,
            title: "Javascript in the Browser",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 1],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 1,
            title: "Graph Database",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 6],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 2,
            title: "FullStack Development",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 1, 4],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 3,
            title: "Javascript Development",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 1],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 4,
            title: "UI Design",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 2],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 5,
            title: "Advanced Object Oriented Programming",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 6],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        {
            _id: 6,
            title: "UX Design",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 2],
            imageUrl: "http://via.placeholder.com/80x80"

        },
        ]
    })
}