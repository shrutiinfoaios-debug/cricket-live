const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema({
  playersId: Number,
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
  teamsId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'teams',
                required: true
          },
  role: {
                type:String,
                required: true
                },
  isActive: {
                type: Boolean,
                default: true
            }
});

module.exports = mongoose.model("players", playersSchema);
