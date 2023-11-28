const express = require('express');
const router = express.Router();
const Cup = require("../models/cup").Cup;

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с cups');
// });


/* Страница героев */
router.get("/:nick", async (req, res, next) => {
  try {
    const cup = await Cup.findOne({ nick: req.params.nick });
    console.log(cup);
    if (!cup) {
      throw new Error("Нет такого!");
    }
    res.render('cup', {
      title: cup.title,
      picture: cup.avatar,
      desc: cup.desc
    });
  } catch (err) {
    next(err);
  }
});





module.exports = router;