require('./models/db');

const express = require('express');
const path = require('path');
// const exphbrs = require('express-handlebars');
const bodyParser = require('body-parser')


const employeeRoutes = require('./routes/routes');

var app = express();

app.use('/public',express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'/views/'));
// app.set('view engine')
// app.set('views', 'views');
// app.engine('hbs',exphbrs({extname: 'hbs', defaultlayout:'mainLayout', layoutsDir: __dirname + '/views/layouts/'}))
app.set('view engine','hbs');

app.listen(3000, ()=>{
    console.log('Express server is running! ')
})

app.use(employeeRoutes);