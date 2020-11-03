const mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
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

var stockOut = mongoose.model('stockOut',stockSchema,'stockOut');

module.exports = stockOut;