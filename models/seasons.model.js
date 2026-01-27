const mongoose = require("mongoose");

const seasonsSchema = new mongoose.Schema({
    id: {
                type: Number,
                required: true                        //sport monk season id
              },
    league_id: {
                type: Number,
                required: true                        //sport monk league id
              },             
    name: {
                type: String,
                trim: true,
                required: true
            },
    code: {
                type: String,
                trim: true,
                required: true
            },          
    updated_at: {
                type: Date,
                default: null
            },        
    createdAt: {
                type: Date,
                default:Date.now
    }
},{ versionKey: false});

module.exports = mongoose.model("seasons", seasonsSchema);
