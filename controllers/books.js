// Require modules 
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();   // router make routes in the different file

// Define routes - remember they are relative to /bboks
router.get('/', function(req, res){
	//res.send('stub for /books');
	//res.render('books/index');
	db.book.findAll().then(function(books){ 
		// console.log('Books found:', books);
		res.render('books/index', {books: books});
	}).catch(function(err){
		console.log('ooops', err);
		// res.send('bad things happened. OOooooops');
		res.render('404');
	});
});


router.get('/new', function(req, res){
	res.render('books/new');
});

router.post('/', function(req, res){
	//res.send(req.body);
	db.book.create(req.body).then(function(createdBook){
		console.log('book created looks like', createdBook);
		res.redirect('/books');
	}).catch(function(err){
		console.log('error happened', err);
		res.render('404');
	});
});

// : is a variable in the url 
router.get('/:id', function(req, res){
	db.book.findById(req.params.id).then(function(foundBook){
		res.send(foundBook);
	})
	.catch(function(err){
		console.log('err', err);
		res.render('404');
	});
});

router.delete('/:id', function(req, res){
	db.book.destroy({
		where: { id: req.params.id }
	}).then(function(recentlyDestroyed) {
	    console.log('deleted:', recentlyDestroyed);
		res.send('successfully deleted!');
	}).catch(function(err){
		console.log('err', err);
		res.send('sad fail');
	});
});


// Export the router - this lets other files include me
module.exports = router;














