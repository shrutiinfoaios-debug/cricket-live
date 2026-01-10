const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
  teamsId: Number,
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
  shotName: {
                type:String,
                required: true
                },              
  logo: {
                type:String,
                required: true
                },  
  country: {
                type:String,
                required: true
                },
  isActive: {
                type: Boolean,
                default: true
            }
});

module.exports = mongoose.model("teams", teamsSchema);
