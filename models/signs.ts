import mongoose = require('mongoose');

let SignsSchema = new mongoose.Schema({
  name: String,
  address: String
});

export default mongoose.model('Signs', SignsSchema);
