"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CategorySchema = new mongoose.Schema({
    name: String,
    places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }]
});
exports.default = mongoose.model('Category', CategorySchema);
