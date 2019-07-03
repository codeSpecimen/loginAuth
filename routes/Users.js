const express = require("express");
const users= express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const session = require('express-session');
const app = express();

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = 'secret'
 const expiry_twohrs = 1000 * 60 * 60 * 2;
 const {
   PORT = 5000,
   NODE_ENV = 'development',
   SESS_NAME = 'sid',
   SESS_SECRET = 'p@ssw0rd',
   SESS_LIFETIME = expiry_twohrs
 } = process.env

 const IN_PROD = NODE_ENV === 'production'


app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }  
}))

users.get('/',(req, res) => {
  if(req.session.users){

  }
  console.log("test")
  res.send("test")
})

//register
users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(!user){
      bcrypt.hash(req.body.password, 10, (error, hash) => {
        userData.password = hash
        User.create(userData)
        .then(user => {
          res.json({status: user.email + 'registered'})
        })
        .catch(error => {
          res.send('error'+ error)
        })
      })
    }else {
      res.json({error: "User already exists"})
    }
  })
  .catch(error => {
    res.send('error', error)
  })
})


//login
users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)){
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }else {
        res.json({ error: 'User does not exist'});
      }
    }else {
      res.json({ error: 'User does not exit'});
    }
  })
  .catch(error => {
    res.send('error: ' + error)
  })
})

//get users
users.get("/allusers", (req, res) => {
  User.find({}).then(user => {
    res.send(user)
  })
  
})

module.exports = users;