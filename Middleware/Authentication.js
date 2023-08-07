const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please Login Again");
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send("Please Login");
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = {
  authentication,
};
