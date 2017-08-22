"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    numberinstock: String
});
exports.default = mongoose.model('Product', ProductSchema);
