import mongoose = require('mongoose');

let BannerSchema = new mongoose.Schema({
  WebAddress: String
});

export default mongoose.model('Banner', BannerSchema);
