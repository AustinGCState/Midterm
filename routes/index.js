var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Home Page For My Favorite People" });
});
//Contact Page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
//People Page
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});

module.exports = router;
