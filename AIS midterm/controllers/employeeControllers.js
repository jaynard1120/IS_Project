const { Mongoose } = require('mongoose');
var employeeModel = require('../models/employee.model')
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
mongoose.set('useFindAndModify',false);


//For Displaying the main page
var pass = (req,res) =>{
    res.render("employee/userForm");
}

// Insert and Edit from Form to Database
var insert_Edit = (req,res) =>{insertRecord(req,res);}

//Insert to database
var insertRecord = (req,res) =>{
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.mobile = req.body.mobile;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.position = req.body.position;
    console.log(req.body.position);
    console.log(req.body.mobile);

    employee.save((err,doc)=>{
        if(!err){
            if(req.body.position == "Manager"){
                myName = doc.fullname;
                myPosition = doc.position;
                res.render('employee/dashboards',{
                    name: doc.fullname,
                    userPosition: doc.position
                })
                // res.send("Manager Ko ha!");
            }else if(req.body.position == "Sales Person"){
                myName = doc.fullname;
                myPosition = doc.position;
                res.render('employee/dashboards',{
                    name: doc.fullname,
                    userPosition: doc.position
                })
                // res.render('employee/dashboard')
                // res.send("Sales Person Ko!")
            }else{
                myName = doc.fullname;
                myPosition = doc.position;
                res.render('employee/dashboards',{
                    name: doc.fullname,
                    userPosition: doc.position
                })
                // res.render('employee/stocksPage');
                // res.send("Stock Person ko!")
            }
        }
        else{
            console.log(err)
            if(err.name == 'ValidationError'){
                handleValidationError(err,req.body);
                res.render("employee/userForm",{
                    //viewTitle: "Insert Employee",
                    users: req.body
                });
            }
            else
                console.log('Error find during insertion: '+ err);  
        }
    })
};

var myName = 'Dear User';
var myPosition = ''
var login =(req,res)=>{
    
    Employee.findOne({email:req.body.email},(err,doc)=>{
        if(!err){
            if(doc != null){
                if(doc.password == req.body.password && doc.position == req.body.positionlogin){
                    if(req.body.positionlogin == "Manager"){
                        myName = doc.fullname;
                        myPosition = doc.position;
                        res.render('employee/dashboards',{
                            name: doc.fullname,
                            userPosition: doc.position
                        })
                        // res.send("Manager Ko ha!");
                    }else if(req.body.positionlogin == "Sales Person"){
                        myName = doc.fullname;
                        myPosition = doc.position;
                        res.render('employee/dashboards',{
                            name: doc.fullname,
                            userPosition: doc.position
                        })
                        // res.render('employee/dashboard')
                        // res.send("Sales Person Ko!")
                    }else{
                        myName = doc.fullname;
                        myPosition = doc.position;
                        res.render('employee/dashboards',{
                            name: doc.fullname,
                            userPosition: doc.position
                        })
                        // res.render('employee/stocksPage');
                        // res.send("Stock Person ko!")
                    }
                    // res.render('employee/list',{admin:doc});
                }else{
                    res.render('employee/userForm',{
                        name:"Error"
                    })
                    // res.redirect('/employee')
                }
                    
            }else{
                res.render('employee/userForm',{
                    name:"Error",
                    error: err
                })
            }  
        }else{
            res.render('employee/userForm',{
                name:"Error",
                error: err
            })
        }
    })
}

var dashboard = (req,res)=>{
    res.render("employee/dashboards",{
        name: myName,
        userPosition: myPosition
    });
}

var about = (req,res)=>{
    res.render('employee/about')
}

var help = (req,res)=>{
    res.render('employee/help')
}

var handleValidationError = (err,body) =>{
    for (field in err.errors){
        switch (err.errors[field].path){
            case 'fullname':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
            }
    }
}

var updatePage = (req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("employee/addOrEdit",{
                viewTitle:"Update Employee",
                employee: doc
            })
        }
    })
}


module.exports = {
    pass,
    insert_Edit,
    login,
    updatePage,
    help,
    dashboard,
    myName,
    about
}