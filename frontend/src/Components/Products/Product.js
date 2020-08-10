import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Products.module.css'
import { fetchProduct } from '../../stores/Product/productAction'
import { cartAction, increaseQtyAction } from '../../stores/Cart/cartAction'

const Product = ({ product, cart, fetchProduct, cartAction, increaseQtyAction }) => {
    const [products, setProducts] = useState({})

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    useEffect(() => {
        setProducts(product)
    }, [product])

    const handleCart = (item) => {
        const data = {
            Image: item.Image,
            Product_Category: item.Product_Category,
            Product_Name: item.Product_Name,
            Product_Price: item.Product_Price,
            Product_Qty: 1,
            _id: item._id,
        }
        if (cart) {
            let index = cart.findIndex(x => x._id === item._id);
            if (index >= 0) {
                increaseQtyAction(item._id)
            } else {
                cartAction(data)
            }
        }
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.row}>
                    {
                        products && products[0] && products[0].length > 0 && products[0].map(item =>
                            <div className={styles.column} key={item._id}>
                                <div className={styles.content}>
                                    <img src={'http://localhost:3001' + item.Image} alt="Mountains" style={{ width: "200px", height: "200px" }} />
                                    <div className={styles.detailContent}>
                                        <h3>{item.Product_Name}</h3>
                                        <p>({item.Product_Category})</p>
                                        <p>₹ {item.Product_Price}</p>
                                    </div>
                                    <div className={styles.btnContent} >
                                        {
                                            item.Product_Qty <= 0 ?
                                                <button disabled className={styles.btnOutStock}>Out Of Stock</button> :
                                                <button className={styles.btnAddToCart} onClick={() => handleCart(item)}>ADD TO CART</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct()),
        cartAction: (data) => dispatch(cartAction(data)),
        increaseQtyAction: (data) => dispatch(increaseQtyAction(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)

