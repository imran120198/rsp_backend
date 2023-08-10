const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import
const { connection } = require("./Connection/Connection");
const { UserRouter } = require("./Routes/User.routes");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Recipe Sharing Platform Server");
});

app.use("/user", UserRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error in connecting to Database");
    console.log(err);
  }
  console.log(`Listing on PORT ${process.env.PORT}`);
});
