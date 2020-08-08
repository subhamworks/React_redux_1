import { combineReducers } from 'redux'

import productReducer from './Product/productReducer'

const rootReducer = combineReducers({
    product: productReducer,
})
export default rootReducer;