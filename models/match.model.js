const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  matchId: Number,
  sportsId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'sports',
                required: true
          },
  sportmonksId: {
                type:Number,
                required: true
                },
  leaguesId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'leagues',
                required: true
          },
  homeTeamId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'sports',
                required: true
          },
  awayTeamId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'sports',
                required: true
          },
  startTime: {
                type: Date,
                required: true
          },
  status: {
                type: String,
                required: true
          },
  venue: {
              type: String,
              required: true
  },  
  result: {
              type: String,
              required: true
  },         
  lastUdatedAt: {
                type: Date,
                default: null
          },
  isLive: {
                type: Boolean,
                default: false
  }         

});

module.exports = mongoose.model("match", matchSchema);
