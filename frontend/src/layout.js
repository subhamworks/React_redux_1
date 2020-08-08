import React from 'react'
import { Route } from 'react-router-dom'

import Product from './Components/Products/Product'

const Layout = () => {
    return (
        <>
            <Route exact path="/" component={Product} />
        </>
    )
}

export default Layout;