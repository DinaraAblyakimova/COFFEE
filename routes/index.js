var express = require('express');
var router = express.Router();
const Cup = require("../models/cup").Cup

 /* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Cup.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title:'Express', menu: menu });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
