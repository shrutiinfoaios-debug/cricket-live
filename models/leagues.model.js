const mongoose = require("mongoose");

const leaguesSchema = new mongoose.Schema({
  leaguesId: Number,
  sportsId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'sports',
                required: true
               
          },
  sportmonksId: {
                type:Number,
                required: true
                },
  name: {
                type:String,
                required: true
                },
  country: {
                type:String,
                required: true
                },
  season: {
                type:String,
                required: true
                },
  isActive: {
                type: Boolean,
                default: true
            }
});

module.exports = mongoose.model("leagues", leaguesSchema);
