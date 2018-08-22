// Require needed node modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

// Global variables 
var app = express();
// var db = require('./models');  // dot is a indicator that this is file.

// Set and use statement; 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);

// Include any controllers/routers 
app.use('/books', require('./controllers/books')); // require = import 


// Define routes 
// get is method, that's a route... method define in the express module 
app.get('/', function(req, res){
	res.render('home');
});

// Listen on port 3000;
app.listen(3000, function(){
	console.log('You\'re listening to the "smooth" sounds of port 3000 in the morning.');
});












































