const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
    id: {
                type: Number,
                required: true                        //sport monk team id
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
    code: {
                type: String,
                trim: true,
                required: true
            },        
    image_path:{
                type: String,
                trim: true,
                default: null
            },  
    national_team:{
                type: Boolean,
                required:true
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

module.exports = mongoose.model("teams", teamsSchema);
