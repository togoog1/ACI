"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var SignsSchema = new mongoose.Schema({
    name: String,
    address: String
});
exports.default = mongoose.model('Signs', SignsSchema);
