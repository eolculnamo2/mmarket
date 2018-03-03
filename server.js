var express = require('express');
var bodyParser= require('body-parser');
var path = require('path')
var app = express();
var authentication = require('./routes/authentication');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use("/", authentication)

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})


app.listen(3001,()=>{
    console.log("Listening")
})