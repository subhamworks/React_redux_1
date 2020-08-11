import { combineReducers } from 'redux'

import productReducer from './Product/productReducer'
import cartReducer from './Cart/cartReducer'
import orderReducer from './Orders/ordersReducer'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
})
export default rootReducer;