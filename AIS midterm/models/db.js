const mongoose = require('mongoose');

// function connect() {
    
// }
        mongoose.connect('mongodb://localhost:27017/Inventory',{useNewUrlParser:true,useUnifiedTopology: true}, (err)=>{
            if(!err) {console.log('Successfully Connected!')}
            else{console.log('Error in connecting database! : '+err)}
        });

require('./employee.model');
require('./product.model')

//module.exports = connect