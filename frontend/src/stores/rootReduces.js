import { combineReducers } from 'redux'

import productReducer from './Product/productReducer'
import cartReducer from './Cart/cartReducer'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
export default rootReducer;