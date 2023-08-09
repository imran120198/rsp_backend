const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../Models/User.model");

const UserRouter = Router();

UserRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const result = await UserModel.findOne({email})
  
});

module.exports = {
  UserRouter,
};
