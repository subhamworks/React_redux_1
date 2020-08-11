import React from 'react'
import { Route } from 'react-router-dom'

import Product from './Components/Products/Product'
import Cart from './Components/Cart/cart'
import Orders from './Components/Orders/orders'

const Layout = () => {
    return (
        <>
            <Route exact path="/" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/orders" component={Orders} />
        </>
    )
}

export default Layout;