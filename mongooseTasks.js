var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/test1') 

var Cup = require("./models/cup").Cup
var cup = new Cup({
      title: "Капучино",
      nick:"kapuchino"
})
console.log(cup)
cup.save().then(function(err, cup, affected){
    console.log(cup.title)
})