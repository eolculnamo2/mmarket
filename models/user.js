var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

console.log("Models...")
var uri = "mongodb://rob:123@ds249757.mlab.com:49757/mammamarket";

//will replace with openUri() in future
mongoose.connect(uri);

//Notifies Console of Connection
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });

var User = new Schema({
    username: String,
    password: String,
    zipcode: String,
    messages: Array,
    forSale: Array,
    claimedItems: Array,
    friendsList: Array
})


User.plugin(passportLocalMongoose);

module.exports = mongoose.model("users", User);