const express = require('express');
const router = express.Router();
// const Cup = require("../models/cup").Cup;
var async = require("async")
var db = require('../mySQLConnect.js');
var checkAuth = require("./../middleware/checkAuth.js")


router.get("/:nick", checkAuth, function(req, res, next) {
  db.query(`SELECT * FROM cups WHERE cups.nick = '${req.params.nick}'`, (err,cups) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(cups.length == 0) return next(new Error("Такого напитка нет"))
        var cup = cups[0];
        res.render('cup', {
          title: cup.title,
          picture: cup.avatar,
          desc: cup.about
  })
}
})
});


// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с cups');
// });


// /* Страница героев */
//   router.get('/:nick', checkAuth, async function(req, res, next) {
//     try {
//       const [cup, cups] = await Promise.all([Cup.findOne({ nick: req.params.nick }), Cup.find({}, { _id: 0, title: 1, nick: 1 })
//       ]);
    
//       if (!cup) {
//         throw new Error("Нет такого");
//       }
      
//       renderCup(res, cup.title, cup.avatar, cup.desc, cups);
//     } catch (err) {
//       next(err);
//     }
//   });
  
//   function renderCup(res, title, picture, desc, cups) {
//     console.log(cups);
  
//     res.render('cup', {
//       title: title,
//       picture: picture,
//       desc: desc
//     });
//   }
  
  

  
  module.exports = router;
  







