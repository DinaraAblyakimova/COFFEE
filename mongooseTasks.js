const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })
schema.methods.peculiarity = function(){ 
    console.log(this.get("name") + " с ванильным сиропом")
}
const Cup = mongoose.model('Cup', schema); 
const cup = new Cup({ name: 'Раф' })
cup.save().then(() => {
    cup.peculiarity()
})