import mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String
});

export default mongoose.model('Product', ProductSchema);
