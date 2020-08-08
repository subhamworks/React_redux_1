const express = require("express");
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const url = 'mongodb://localhost:27017/Checkout';
const product = require('./Routes/product')
const order = require('./Routes/order')

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongoDb Connected")
    })

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).json({});
    }
    next();
});
app.use('/Assets', express.static(path.join(__dirname, 'Assets'), { maxAge: 864000000 }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', product)
app.use('/', order)

module.exports = app;