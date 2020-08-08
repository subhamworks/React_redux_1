const mongoose = require("mongoose");

const Order = mongoose.Schema({
    Order_items: [],
    Order_Ammount: Number,
    Customer_Mobile: Number
})

const collectionName = 'Order';

module.exports = mongoose.model("Order", Order, collectionName);
