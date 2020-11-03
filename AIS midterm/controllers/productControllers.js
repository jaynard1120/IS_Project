var mongoose = require('mongoose');
var employeeModel = require('../models/product.model')
var stockModel = require('../models/stockOut.model')
const { myName } = require('../controllers/employeeControllers');
var Product = mongoose.model('Product');
var Stock_out = mongoose.model('stockOut')
var userControllers = require('../controllers/employeeControllers');
mongoose.set('useFindAndModify', false);
var add_now = (req,res) =>{
    add_product(req,res);
}

var add_product = (req,res) =>{
        var product = new Product();
        product._id = req.body._id;
        product.name = req.body.name;
        product.brand = req.body.brand;
        product.model = req.body.model;
        product.description = req.body.description;
        product.price = req.body.price;
        // product.stock.fourteen = req.body.stock1;
        // product.stock.twentyOne = req.body.stock2;
        // product.stock.twentyFour = req.body.stock3;
        // product.stock.twentySeven = req.body.stock4;
        // product.stock.fifthy = req.body.stock5;
        // product.stock.seventyEight = req.body.stock6;
        // product.stock.eighty = req.body.stock7;
        product.discount = req.body.discount;
        product.brand = req.body.brand;
        // product.attribute = req.body.attribute;
        product.createdAt = new Date();
        console.log(req.body.name);
        console.log(req.body.brand);
    
        product.save((err,doc)=>{
            if(!err){
                console.log("Saved");
                res.send("Patay na gyud");
                // res.redirect('employee/stockManagement');
            }else{
                console.log(err);
            }
    });


    // var product = new Product(req.body);

    // product.save()
    // .then(function(item){
    //     res.send("data saved");
    // })
    // .catch(function(err){
    //     res.status(400).send('unable to save to database');
    // })
    // product.pro_id = 1;
    // product.name = "PC";
    // product.brand = "Lenovo";
    // product.description = "Light-wieght";
    // product.price = 1000;
    // product.stock = 45;
    // product.discount = 200;
    // product.attribute = "Full Screen";
    // product.createdAt = Date.now;
}

var sales = (req,res) => {
    res.render('employee/salesReport',{
        name:myName    
    })
}
console.log(myName)
var stocks = (req,res) => {
    res.render('employee/stocksPage')
}
var supplier = (req,res)=>{
    res.render('employee/suppliers',{
        name:userControllers.myName
    })
}
var aboutUs =(req,res) => {
    res.render('employee/about')
}

var productStocks = (req,res)=>{
    Product.find({},(err,products)=>{
        if(!err){
            res.render('employee/stocksPage',{product_list:products});
        }else{console.log('Error in retrieving data: '+err)}
    })
}

var separateMonitor = (req,res)=>{
    Product.find({name:"Monitor"},(err,products)=>{
        if(!err){res.render('employee/stocksPage',{product_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var separateSystemUnit = (req,res)=>{
    Product.find({name:"System Unit"},(err,products)=>{
        if(!err){res.render('employee/stocksPage',{product_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var keyboardAndMouse = (req,res)=>{
    Product.find({name:"Keyboard and Mouse"},(err,products)=>{
        if(!err){res.render('employee/stocksPage',{product_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var laptop = (req,res)=>{
    Product.find({name:"Laptop"},(err,products)=>{
        if(!err){res.render('employee/stocksPage',{product_list:products})}
        else{console.log('Error in retrieving data: '+err)}
    })
}

var viewproduct = (req,res)=>{
    Product.findById(req.params._id,(err,product)=>{
        res.render('employee/editStock',{
            product:product
        })
    })
}

var updateproduct = (req,res)=>{
    Product.findById(req.params._id,(err,product)=>{
        res.render('employee/editStock',{
            product:product,
            update:"edit"
        })
    })
}

var updateRecord = (req,res) => {
    Stock_out.findByIdAndUpdate({_id:req.body._id},{$set:{price:req.body.update_price,discount:req.body.update_discount,updatedAt:new Date()}},{new: true},(err,doc)=>{
        if(!err){
            console.log('helloo')
        }else{
            console.log('Error found!'+err)
        }
    })
    Product.findByIdAndUpdate({_id:req.body._id},{$inc:{stock:req.body.add_stock},$set:{price:req.body.update_price,discount:req.body.update_discount,updatedAt:new Date()}},{new: true},(err,doc)=>{
        if(!err){
            res.redirect("/employee/product/stockManagement")
            console.log("hiii")}
        else{
            console.log('Error during record update! '+err)
        }
    })
}

var available = (req,res)=>{
    Product.aggregate([{$lookup:{
        from:stockOut
    }}])
}
module.exports = {
    add_now,
    sales,
    stocks,
    supplier,
    aboutUs,
    productStocks,
    separateMonitor,
    separateSystemUnit,
    keyboardAndMouse,
    laptop,
    viewproduct,
    updateproduct,
    updateRecord,
    available
}