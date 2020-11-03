var express = require('express');
var router = express.Router();
var userControllers = require('../controllers/employeeControllers');
var productsControllers = require('../controllers/productControllers');
const { stocklist } = require('../controllers/stockOutController');
var stockOutControllers = require('../controllers/stockOutController')

//For create button
router.get('/employee',userControllers.pass);

// For inserting and editing data to database
router.post('/employee',userControllers.insert_Edit)

//For get the data from database
router.post('/employee/dashboard',userControllers.login)

router.get('/employee/dashboard',userControllers.dashboard)

router.get('/employee/aboutus',userControllers.about)

// Stock In routers ♥☺☻

router.get('/employee/product/stockManagement',productsControllers.productStocks)

router.post('/employee/product/stockManagement',productsControllers.productStocks)

router.post('/employee/product/stockManagement/monitor',productsControllers.separateMonitor)

router.post('/employee/product/stockManagement/System-Unit',productsControllers.separateSystemUnit)

router.post('/employee/product/stockManagement/Keyboard-and-Mouse',productsControllers.keyboardAndMouse)

router.post('/employee/product/stockManagement/Laptop',productsControllers.laptop)

router.get('/employee/product/stockManagement/:_id/view',productsControllers.viewproduct)

router.get('/employee/product/stockManagement/:_id/update',productsControllers.updateproduct)

router.post('/employee/updated',productsControllers.updateRecord)
//For Update the form page
// router.get('/:id',userControllers.updatePage)

//For deleting the data from database
// router.get('/delete/:id',userControllers.deleteData)

// Stocks Out routers ♥☺☻

router.post('/employee/product/Stock_Out',stockOutControllers.stocklist)

router.get('/employee/product/Stock_Out',stockOutControllers.stocklist)

router.post('/employee/product/stock_Out/monitor',stockOutControllers.separateMonitor)

router.post('/employee/product/stock_Out/System-Unit',stockOutControllers.separateSystemUnit)

router.post('/employee/product/stock_Out/Keyboard-and-Mouse',stockOutControllers.keyboardAndMouse)

router.post('/employee/product/stock_Out/Laptop',stockOutControllers.laptop)

router.get('/employee/product/stock_Out/:_id/view',stockOutControllers.viewproduct)

router.get('/employee/product/stock_Out/:_id/update',stockOutControllers.updateproduct)

// router.get('/employee/product/stockOut',stockOutControllers.stocklist)

router.post('/employee/updated/stockOut',stockOutControllers.updateStockOut)

router.post('/employee/product/AvailableStocks',productsControllers.available)


router.post('/employee/product/add',productsControllers.add_now)

router.get('/employee/product/salesReport',productsControllers.sales)

router.get('/employee/product/stockManagement',productsControllers.stocks)

router.get('/employee/product/supplier',productsControllers.supplier)

//Export router
module.exports = router;