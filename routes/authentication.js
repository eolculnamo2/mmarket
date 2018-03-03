var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser')
var express = require('express');
var passport = require('passport');
var router = express.Router();
var Strategy = require('passport-local').Strategy;
var User = require("../models/user");
var vue = require('vue');
router.use(express.static('build'));

router.use(cookieSession({
  maxAge: 24*60*60*1100,
  keys: ["faewfeag43g24098gy24p98gy"]
}))

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Register New User
router.post('/newUser', (req, res)=>{
    console.log("Called.."+req.body.username)
  if(req.body.password === req.body.confirmPassword){
      console.log("pass")
    User.register(new User({ 
                                username: req.body.username,
                                zipcode: req.body.zipcode,
                                messages: [],
                                forSale: [],
                                claimedItems: [],
                                friendsList: []
                             }), req.body.password, (err, account)=>{
                                 console.log("cb")
        if (err) {
            console.log(err)
        }
        passport.authenticate('local')(req, res, ()=>{
            console.log('created')
            res.redirect('/');
        });
    });
  }
  else{
    res.send("Passwords Do Not Match");
  }
});


//Login
router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log("Login")
    res.redirect('/');
});

//Logout
router.post('/logout',(req,res)=>{
    console.log("Logout")
  req.logout();
  res.redirect('/');
});


module.exports = router;