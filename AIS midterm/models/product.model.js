const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    _id:{
        type:Number
    },name:{
        type: String
    },brand:{
        type: String
    },model:{
        type: String
    }
    ,description:{
        type: String
    },price:{
        type: Number
    },stock:{
       type:Number
    },discount:{
        type: Number
    },createdAt:{
        type: String
    },deletedAt:{
        type: Date
    },updatedAt:{
        type: Date
    }
});

var Product = mongoose.model('Product',productSchema,'stock');

module.exports = Product;