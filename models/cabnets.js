"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CabnetsSchema = new mongoose.Schema({
    name: String,
    address: String
});
exports.default = mongoose.model('Cabnets', CabnetsSchema);
