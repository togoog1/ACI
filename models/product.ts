import mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
  numberinstock: String
});

export default mongoose.model('Product', ProductSchema);
