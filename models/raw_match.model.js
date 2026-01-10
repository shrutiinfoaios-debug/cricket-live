const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  matchId: Number,
  league: String,
  season: String,
  localTeam: String,
  visitorTeam: String,
  status: String,
  runs: Array,
  startTime: Date,
  updatedAt: { type: Date, default: Date.now },
  provider: String,
  providerEntity: String,
  providerId: String,
  sport: String,
  payload: Object,         // EXACT API response object
  fetchedAt: Date,
  checksum: String,
  apiVersion: String,
  source: String,
  isProcessed: Boolean 

});

module.exports = mongoose.model("raw_sportmonks_match", matchSchema);
