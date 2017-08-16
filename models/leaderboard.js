"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var LeaderboardSchema = new mongoose.Schema({
    WebAddress: String
});
exports.default = mongoose.model('leaderboard', LeaderboardSchema);
