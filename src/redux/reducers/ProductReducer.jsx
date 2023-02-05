import { ActionType } from "../contents/action-type";

const initialState = {
    product : [],
    categories: [],
    filteredProduct: [],
    buyedProducts: [],
    isBasketOpen: false
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionType.SET_PRODUCTS:
            return {...state, product: payload, filteredProduct: payload};
        case ActionType.SET_CATEGORIES:
            return {...state, categories: payload};
        case ActionType.FILTER_PRODUCTS:
            return {...state, filteredProduct: payload};
        case ActionType.ADD_PRODUCT_TO_BASKET:
            return {...state, buyedProducts: [...state.buyedProducts, payload]};
        case ActionType.SET_BASKET_SHOW:
            return {...state, isBasketOpen: payload};
        default: 
            return state
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state,  ...payload};
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {};
        default: 
            return state
    }
}
