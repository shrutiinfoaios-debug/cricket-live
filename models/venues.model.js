const mongoose = require("mongoose");

const venuesSchema = new mongoose.Schema({
    id: {
                type: Number,
                required: true                        //sport monk league id
              },
    country_id : {
                type: Number,
                required: true                        //sport monk country id
              },                
    name: {
                type: String,
                trim: true,
                required: true
            },
    city: {
                type: String,
                trim: true,
                required: true
            },        
    image_path:{
                type: String,
                trim: true,
                default: null
            },   
    capacity:{
                type: Number,
                required:true
            },              
    floodlight: {
                type: Boolean,
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

module.exports = mongoose.model("venues", venuesSchema);