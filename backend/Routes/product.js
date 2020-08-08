const express = require("express");
const router = express.Router();

const Product = require('../Models/product')

router.get('/product', (req, res) => {
    Product.find({})
        .exec()
        .then(resData => {
            res.status(200).json({ message: "Success", data: resData })
        })
        .catch(err => {
            res.status(404).json({ error: err })
        })
})

module.exports = router