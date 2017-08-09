"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var BannerSchema = new mongoose.Schema({
    WebAddress: String
});
exports.default = mongoose.model('Banner', BannerSchema);
