var mongoose = require('mongoose');
var employeeModel = require('../models/product.model')
var stockModel = require('../models/stockOut.model')
const { myName } = require('../controllers/employeeControllers');
var Product = mongoose.model('Product');
var Stock_out = mongoose.model('stockOut')
var userControllers = require('../controllers/employeeControllers');
mongoose.set('useFindAndModify', false);

var stocklist = (req,res)=>{
    Stock_out.find({},(err,products)=>{
        if(!err){
            // console.log("naa ra")
            res.render('employee/stockOut',{
                stock_list:products
            });
        }else{console.log('Error in retrieving data: '+err)}
    })
}
var separateMonitor = (req,res)=>{
    Stock_out.find({name:"Monitor"},(err,products)=>{
        if(!err){res.render('employee/stockOut',{stock_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var separateSystemUnit = (req,res)=>{
    Stock_out.find({name:"System Unit"},(err,products)=>{
        if(!err){res.render('employee/stockOut',{stock_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var keyboardAndMouse = (req,res)=>{
    Stock_out.find({name:"Keyboard and Mouse"},(err,products)=>{
        if(!err){res.render('employee/stockOut',{stock_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var laptop = (req,res)=>{
    Stock_out.find({name:"Laptop"},(err,products)=>{
        if(!err){res.render('employee/stockOut',{stock_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var viewproduct = (req,res)=>{
    Stock_out.findById(req.params._id,(err,product)=>{
        res.render('employee/stockEdit',{
            product:product
        })
    })
}

var updateproduct = (req,res)=>{
    Stock_out.findById(req.params._id,(err,product)=>{
        res.render('employee/stockEdit',{
            product:product,
            update:"edit"
        })
    })
}

var updateStockOut = (req,res) => {
    Stock_out.findByIdAndUpdate({_id:req.body._id},{$inc:{stock:req.body.add_stock},$set:{updatedAt:new Date()}},{new: true},(err,doc)=>{
        if(!err){
            res.redirect("/employee/product/Stock_Out")
            console.log('helloo')
        }else{
            console.log('Error found!'+err)
        }
    })
}
module.exports = {
    stocklist,
    separateMonitor,
    separateSystemUnit,
    keyboardAndMouse,
    laptop,
    viewproduct,
    updateproduct,
    updateStockOut
}