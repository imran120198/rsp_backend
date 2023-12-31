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
RecipeRouter.get("/myrecipe", authentication, async (req, res) => {
  try {
    const result = await RecipeModel.find();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error in getting data", err });
  }
});

// Post the recipe
RecipeRouter.post("/create", authentication, async (req, res) => {
  try {
    const { name, category, image, description, cookingtime } = req.body;
    const CreateRecipe = new RecipeModel({
      name,
      category,
      image,
      description,
      cookingtime,
    });
    await CreateRecipe.save();
    res.status(201).send(CreateRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something wrong with Create Data", err });
  }
});

//Patch the data
RecipeRouter.patch("/edit/:recipeId", authentication, async (req, res) => {
  const { recipeId } = req.params;
  try {
    const EditRecipe = await RecipeModel.findByIdAndUpdate(
      { _id: recipeId },
      req.body
    );
    res.status(201).send({ message: "Edit Successfully", EditRecipe });
  } catch (err) {
    res.status(500).send({ message: "Error in Edit", err });
  }
});

// Delete
RecipeRouter.delete("/delete/:recipeId", authentication, async (req, res) => {
  const { recipeId } = req.params;
  const deleteRecipe = await RecipeModel.findOneAndDelete({
    _id: recipeId,
  });
  if (deleteRecipe) {
    res.status(201).send({ msg: "deleted" });
  } else {
    res.status(500).send({ msg: "Recipe not found" });
  }
});

module.exports = {
  RecipeRouter,
};
