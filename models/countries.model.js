const mongoose = require('mongoose');
const { Schema } = mongoose;
const CountriesSchema = new Schema({
    id: {
                type: Number,
                required: true                        //sport monk country id
              },
    continent_id: {
                type: Number,
                required: true                        //sport monk continent id
              },          
    name: {
                type: String,
                trim: true,
                required: true
            },
    image_path:{
                type: String,
                trim: true,
                default: null
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

module.exports = mongoose.model('countries', CountriesSchema);