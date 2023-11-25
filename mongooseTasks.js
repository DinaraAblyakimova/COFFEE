var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/test1') 
var Cup = require("./models/cup").Cup

var schema = mongoose.Schema({name: String})

var cup = new Cup({
      title: "Капучино",
      nick: "kapuchino"
})

cup.save().then(() => {
      console.log(cup.title)
})

