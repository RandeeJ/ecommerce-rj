import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from "./types";

export function signIn({email, password}) {
    console.log((email, password));
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: "Randee Johnson",
                address: "5407 Snyder Avenue",
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}


export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        
        payload: [{
            _id: 0,
            product:{
                _id: 0,
                title: "Javascript in the Browser",
                description: "some dummy text",
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: "http://via.placeholder.com/80x80"
            },
            quantity: 2
        },
        {
            _id: 1,
            product: {
                _id: 1,
            title: "Graph Database",
            description: "some dummy text",
            price: 1.99,
            belongsTo: [0, 6],
            imageUrl: "http://via.placeholder.com/80x80"
            },
            quantity: 5
            
        },
        
        ]
    })
}



export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 9.40,
                orderNumber: "A004823538943",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: "1234 West State Street"
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: "A004828765943",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Max Nelson",
                    shippingAddress: "4534 West State Street"
                }
            },
            {
                _id: 2,
                total: 29.40,
                orderNumber: "A004823587843",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Randee Johnson",
                    shippingAddress: "1544 West State Street"
                }
            },
            {
                _id: 3,
                total: 39.40,
                orderNumber: "A0048654538943",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Juliana Just Costa",
                    shippingAddress: "1276 West State Street"
                }
            },
            {
                _id: 4,
                total: 49.40,
                orderNumber: "A00482654943",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jon Yellets",
                    shippingAddress: "1243 West State Street"
                }
            },
            {
                _id: 5,
                total: 59.40,
                orderNumber: "A004823536543",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Robert Crowder",
                    shippingAddress: "1877 West State Street"
                }
            },
            {
                _id: 6,
                total: 69.40,
                orderNumber: "A005333538943",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Sasha Diamond Lenow",
                    shippingAddress: "6456 West State Street"
                }
            },
            {
                _id: 7,
                total: 79.40,
                orderNumber: "A00482353433",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Wendy Galindez",
                    shippingAddress: "7656 West State Street"
                }
            }
        ]
    })
}