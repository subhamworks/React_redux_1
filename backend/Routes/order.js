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

router.get('/fetchOrder/:Orderid', (req, res) => {
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

router.get('/postOrder/', (req, res) => {
    const data = req.body
    Order.create(data)
        .then(resData => {
            res.status(200).json({ message: "Order Successfully Added" })
        })
        .catch(err => {
            res.status(404).json({ error: err })
        })
})
module.exports = router