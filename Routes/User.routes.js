const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../Models/User.model");

const UserRouter = Router();

UserRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const result = await UserModel.findOne({email})
  if(result){
    res.status(201).send({message : "Email Already Exist"})
  }
  else{
    bcrypt.hash(password, 5, async (err, hash) => {
      if(err){
        res.status(500).send({message:"Something wrong with signup",err})
      }
      else{
        const newSignup = new UserModel({
          username : username,
          email : email,
          password : hash
        })
        const saveSignup = newSignup.save()
        res.status(201).send({message : "Signup Successfully", saveSignup})
      }
    })
  }
  
});

module.exports = {
  UserRouter,
};
