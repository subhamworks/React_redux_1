import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Products.module.css'
import { fetchProduct } from '../../stores/Product/productAction'

const Product = ({ product, fetchProduct }) => {
    const [products, setProducts] = useState({})

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    useEffect(() => {
        setProducts(product)
    }, [product])

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
                                    <div className={styles.btnContent}>
                                        <button >ADD TO CART</button>
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
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)

