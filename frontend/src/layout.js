import React from 'react'
import { Route } from 'react-router-dom'

import Product from './Components/Products/Product'
import Cart from './Components/Cart/cart'

const Layout = () => {
    return (
        <>
            <Route exact path="/" component={Product} />
            <Route exact path="/cart" component={Cart} />
        </>
    )
}

export default Layout;