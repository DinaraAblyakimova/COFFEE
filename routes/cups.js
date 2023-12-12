const express = require('express');
const router = express.Router();
const Cup = require("../models/cup").Cup;
var async = require("async")

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с cups');
// });


/* Страница героев */
  router.get('/:nick', async function(req, res, next) {
    try {
      const [cup, cups] = await Promise.all([
        Cup.findOne({ nick: req.params.nick }),
        Cup.find({}, { _id: 0, title: 1, nick: 1 })
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
      desc: desc,
      menu: cups
    });
  }
  
  
  
  module.exports = router;
  

// try {
//     const cup = await Cup.findOne({ nick: req.params.nick });
//     console.log(cup);
//     if (!cup) {
//       throw new Error("Нет такого!");
//     }
//     res.render('cup', {
//       title: cup.title,
//       picture: cup.avatar,
//       desc: cup.desc
//     });
//   } catch (err) {
//     next(err);
//   }
// });







