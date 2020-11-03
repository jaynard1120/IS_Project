const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullname:{
        type: String
    },mobile:{
        type: String
    },email:{
        type: String
    },password:{
        type: String
    },position:{
        type:String
    }
});

var Employee = mongoose.model('Employee',employeeSchema,'users');

module.exports = Employee;