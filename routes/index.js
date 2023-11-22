var express = require('express');
var router = express.Router();


  
/* Страница с капучино. */
router.get('/kapuchino', function(req, res, next) {
  res.render('<h1>Капучино<h1>');
});

router.get('/espresso', function(req, res, next) {
  res.render('<h1>Эспрессо<h1>');
});

router.get('/latte', function(req, res, next) {
  res.render('<h1>Латте<h1>');
});

router.get('/americano', function(req, res, next) {
  res.render('<h1>Американо<h1>');
});

module.exports = router;
