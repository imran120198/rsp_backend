const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.Atlas);

module.exports = {
  connection,
};
