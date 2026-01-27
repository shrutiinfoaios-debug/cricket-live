const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContinentsSchema = new Schema({
    id: {
                type: Number,
                required: true                        //sport monk continent id
              },
    name: {
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

module.exports = mongoose.model('continents', ContinentsSchema);