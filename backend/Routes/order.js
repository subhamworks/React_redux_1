const express = require('express')
const router = express.Router()

const Order = require('../Models/order')

router.get('/fetchOrder', (req, res) => {
    Order.find({})
        .exec()
        .then(resData => {
            res.status(200).json({ message: "Success", data: resData })
        })
        .catch(err => {
            res.status(404).json({ error: err })
        })
})

router.get('/fetchOrderById/:Orderid', (req, res) => {

    const Orderid = req.params.Orderid

    Order.find({ _id: Orderid })
        .exec()
        .then(resData => {
            res.status(200).json({ message: "Success", data: resData })
        })
        .catch(err => {
            res.status(404).json({ error: err })
        })
})

router.post('/postOrder', (req, res) => {
    const data = {
        Order_items: req.body.products,
        Order_Ammount: req.body.totalAmmount,
        Customer_Mobile: req.body.mobileNo
    }

    Order.create(data)
        .then(resData => {
            res.status(200).json({ message: "Order Successfully Added" })
        })
        .catch(err => {
            res.status(404).json({ error: err })
        })
})
module.exports = router