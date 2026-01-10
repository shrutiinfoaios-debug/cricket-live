const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
  sportsId: Number,
  key: {
                type:Number,
                required: true
                },
  name: {
                type:Number,
                required: true
                },
  sportmonksId: {
                type:Number,
                required: true
                },
  isActive: {
                type: Boolean,
                default: true
            }
});

module.exports = mongoose.model("sports", sportsSchema);
