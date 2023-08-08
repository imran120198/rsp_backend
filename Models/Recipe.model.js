const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  cookingtime: { type: String },
});

const RecipeModel = mongoose.model("recipe", RecipeSchema);

module.exports = {
  RecipeModel,
};
