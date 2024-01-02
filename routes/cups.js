const express = require('express');
const router = express.Router();
const Cup = require("../models/cup").Cup;
var async = require("async")
var checkAuth = require("./../middleware/checkAuth.js")

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с cups');
// });


/* Страница героев */
  router.get('/:nick', checkAuth, async function(req, res, next) {
    try {
      const [cup, cups] = await Promise.all([Cup.findOne({ nick: req.params.nick }), Cup.find({}, { _id: 0, title: 1, nick: 1 })
      ]);
    
      if (!cup) {
        throw new Error("Нет такого");
      }
      
      renderCup(res, cup.title, cup.avatar, cup.desc, cups);
    } catch (err) {
      next(err);
    }
  });
  
  function renderCup(res, title, picture, desc, cups) {
    console.log(cups);
  
    res.render('cup', {
      title: title,
      picture: picture,
      desc: desc
    });
  }
  
  
  
  module.exports = router;
  







