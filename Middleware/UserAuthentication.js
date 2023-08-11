const { UserModel } = require("../Models/User.model");

const UserAuthentication = (req, res, next) => {
  const { username, password } = req.body;

  const user = UserModel.find(
    (elem) => elem.username === username && elem.password === password
  );
  if (!user) {
    return res.status(401).send({ message: "Invalid credentials" });
  }
  req.user = user;
  next();
};

module.exports = {
  UserAuthentication,
};
