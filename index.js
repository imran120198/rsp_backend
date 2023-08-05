const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Recipe Sharing Platform Server");
});

app.listen(8080, () => {
  console.log("Listing on PORT 8080");
});
