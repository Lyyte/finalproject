const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for items that will be purchasable
const itemSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number },
  quantity: { type: Number, required: true },
  // Categories will go here
  description: { type: String }
})
// Creates Item model based on created schema, reference will be "Item" in routes
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;