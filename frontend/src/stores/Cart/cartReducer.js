import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_ITEM } from './cartType';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case INCREASE_QTY:

            state.map(item =>
                item._id === action.payload ?
                    item.Product_Qty += 1 : null

            )
            return [...state];

        case DECREASE_QTY:
            state.map(item =>
                item._id === action.payload ?
                    item.Product_Qty -= 1 : null
            )
            return [...state];

        case REMOVE_ITEM:
            let modifiedProduct = state
            modifiedProduct = modifiedProduct.filter(item =>
                item._id !== action.payload
            )
            return modifiedProduct

        default: return state
    }
}

export default cartReducer