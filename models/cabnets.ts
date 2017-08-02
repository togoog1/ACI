import mongoose = require('mongoose');

let CabnetsSchema = new mongoose.Schema({
  name: String,
  address: String
});

export default mongoose.model('Cabnets', CabnetsSchema);
