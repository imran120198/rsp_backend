const { Router } = require("express");
const { RecipeModel } = require("../Models/Recipe.model");
const { authentication } = require("../Middleware/Authentication");

const RecipeRouter = Router();

// All Recipe
RecipeRouter.get("/", async (req, res) => {
  try {
    const result = await RecipeModel.find();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Show Recipe Data by Id
RecipeRouter.get("/:recipeId", async (req, res) => {
  try {
    const result = await RecipeModel.findOne({ _id: req.params.recipeId });
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Authenticate User Only

// Get All the blog Data by user


module.exports = {
  RecipeRouter,
};
