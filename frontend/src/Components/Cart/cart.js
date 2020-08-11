import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import swal from "sweetalert"

import styles from './cart.module.css'
import { increaseQtyAction, decreaseQtyAction, removeItem, placeOrder } from '../../stores/Cart/cartAction';


const Cart = ({ cart, increaseQtyAction, decreaseQtyAction, removeItem, placeOrder }) => {
    const [products, setProducts] = useState(cart)
    const [mobileNo, setMobileNo] = useState("")
    let total = 0;

    products.map(item => {
        return total += item.Product_Price * item.Product_Qty
    })

    useEffect(() => {
        setProducts(cart)
    }, [cart])

    const handleMobile = (e) => {
        var patt = new RegExp(/^\d*\.?\d*$/)
        if (patt.test(e.target.value)) {
            setMobileNo(e.target.value)
        }
    }

    const orderCheckOut = () => {
        if (!mobileNo) {
            swal("Enter mobile number", "", "error")
        }
        console.log(mobileNo.length);
        const modifiedData = {
            products: products,
            totalAmmount: total,
            mobileNo: mobileNo
        }
        placeOrder(modifiedData)
    }


    return (
        <>
            <div className={styles.main}>
                <div className={styles.row}>
                    {
                        products && products && products.length > 0 ? products.map(item =>
                            <div className={styles.column} key={item._id}>
                                <div className={styles.content}>
                                    <img src={'http://localhost:3001' + item.Image} alt="Mountains" style={{ width: "200px", height: "200px" }} />
                                    <div className={styles.detailContent}>

                                        <h3>{item.Product_Name}</h3>
                                        <p>({item.Product_Category})</p>
                                        <p>₹ {item.Product_Price * item.Product_Qty}</p>
                                        <button className={styles.removeBtn} onClick={() => removeItem(item._id)}>Remove</button>

                                    </div>
                                    <div className={styles.qtyContent}>
                                        <button className={styles.qtyBtn}
                                            onClick={() => decreaseQtyAction(item._id)}
                                            disabled={item.Product_Qty > 1 ? false : true}
                                        >-</button>
                                        <h6 className={styles.qtyArea} >{item.Product_Qty}</h6>
                                        <button className={styles.qtyBtn} onClick={() => increaseQtyAction(item._id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ) : <div className={styles.emptyContent}>
                                <h3>Your cart is empty!</h3>
                                <h6>Add items to it now.</h6>
                                <button className={styles.shopBtn} onClick={() => window.location = '/'}>Shop now</button>

                            </div>
                    }
                </div>
                <div>
                    {total > 0 ? (<div className={styles.allContent}>
                        <h3>Total Amount</h3>
                        <h5>₹  {total}</h5>
                        <input type="text" value={mobileNo} placeholder="Enter Mobile Number" onChange={(e) => handleMobile(e)} />
                        <button className={styles.checkOutBtn} onClick={() => orderCheckOut()}>CheckOut</button>
                    </div>) : ""}
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increaseQtyAction: (data) => dispatch(increaseQtyAction(data)),
        decreaseQtyAction: (data) => dispatch(decreaseQtyAction(data)),
        removeItem: (data) => dispatch(removeItem(data)),
        placeOrder: (data) => dispatch(placeOrder(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
