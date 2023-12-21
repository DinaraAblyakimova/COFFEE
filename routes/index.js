var express = require('express');
var router = express.Router();
const Cup = require("../models/cup").Cup


// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Coffee' });
//   });

router.get('/', function(req, res, next) {
   res.cookie('greeting', 'Hi!!!').render('index', { 
    title: 'Express',
    menu:menu 
    }); 
  });

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Cup.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Cup',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
