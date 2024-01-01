var express = require('express');
var router = express.Router();
const Cup = require("../models/cup").Cup

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

 /* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Cup.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title:'Express', menu: menu, counter:req.session.counter});
  } catch (err) {
    next(err);
  }
});
module.exports = router;
