var express = require('express');
var bodyParser= require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/register", (req,res)=>{
    console.log(req.body)
})

app.listen(3001,()=>{
    console.log("Listening")
})