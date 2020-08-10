import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar({ Data }) {
    const cart = Data && Data.cart
    return (
        <nav>
            <div className="nav-wrapper" style={{ background: "#4f8a8b" }}>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Category</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/Cart">Cart  <span style={{ color: 'red' }}>{(cart && cart.length) ? cart.length : 0}</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        Data: state
    }
}

export default connect(mapStateToProps)(Navbar)