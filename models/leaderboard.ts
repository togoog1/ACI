import mongoose = require('mongoose');

let LeaderboardSchema = new mongoose.Schema({
  WebAddress: String
});

export default mongoose.model('leaderboard', LeaderboardSchema);
