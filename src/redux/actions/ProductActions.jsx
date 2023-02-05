import { ActionType } from "../contents/action-type"

export const setProduct = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCT
    }
}

export const setCategories = (categories) => {
    return {
        type: ActionType.SET_CATEGORIES,
        payload: categories
    }
}

export const filterProducts = (filteredProducts) => {
    return {
        type: ActionType.FILTER_PRODUCTS,
        payload: filteredProducts
    }
}

export const addProductToBasket = (product) => {
    return {
        type: ActionType.ADD_PRODUCT_TO_BASKET,
        payload: product
    }
}

export const setBasketShow = (value) => {
    return {
        type: ActionType.SET_BASKET_SHOW,
        payload: value
    }
}