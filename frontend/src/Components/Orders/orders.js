import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import styles from './orders.module.css'
import { fetchOrder, fetchOrderById } from '../../stores/Orders/ordersAction'

const Orders = ({ data, fetchOrder, fetchOrderById }) => {

    const [products, setProducts] = useState({})

    useEffect(() => {
        fetchOrder()
    }, [fetchOrder])

    useEffect(() => {
        setProducts(data)
    }, [data])


    return (
        <>
            <div className={styles.main}>
                <div className={styles.row}>
                    {
                        products && products.length !== 1 ?
                            products && products.length > 0 && products.map((item, index) =>
                                <div className={styles.column} key={item._id} onClick={() => { fetchOrderById(item._id) }}>

                                    <div className={styles.content2} >
                                        <h4>[{index + 1}]</h4>
                                        <h4>Total Amount :: {item.Order_Ammount}</h4>
                                        <h4 style={{ color: "tomato" }}>Mobile No :: {item.Customer_Mobile}</h4>
                                    </div>
                                </div>
                            ) : products && products.length > 0 && products.map((item, index) =>
                                <div className={styles.column} key={item._id} >
                                    <div className={styles.content} >
                                        <h3 className={styles.backArrow} onClick={() => { fetchOrder() }}>&#x21a9;</h3>
                                        {
                                            item.Order_items.map(subItem =>
                                                <div key={subItem._id} className={styles.subContent} >
                                                    <img src={'http://localhost:3001' + subItem.Image} alt="Mountains" style={{ width: "200px", height: "200px" }} />
                                                    <div key={subItem._id} className={styles.detailContent}>
                                                        <h3>{subItem.Product_Name}</h3>
                                                        <p>({subItem.Product_Category})</p>
                                                        <p>₹ {subItem.Product_Price}</p>
                                                        <p>Qty : {subItem.Product_Qty}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <br />
                                    <br />
                                    <div className={styles.content2} style={{ cursor: "unset" }} >
                                        <h4>Total Amount :: {item.Order_Ammount}</h4>
                                        <h4 style={{ color: "tomato" }}>Mobile No :: {item.Customer_Mobile}</h4>
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
        data: state.order[0]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: () => { dispatch(fetchOrder()) },
        fetchOrderById: (data) => { dispatch(fetchOrderById(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders)
