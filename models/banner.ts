import mongoose = require('mongoose');

let BannerSchema = new mongoose.Schema({
  name: String,
  Webaddress: String,
});

export default mongoose.model('Banner', BannerSchema);
