const mongoose = require("mongoose");

const Product = mongoose.Schema({
    Product_Name: String,
    Product_Category: String,
    Product_Qty: Number,
    Product_Price: Number,
})

const collectionName = 'Product';
module.exports = mongoose.model("Product", Product, collectionName);