const mongoose = require("mongoose");

const matchesSchema = new mongoose.Schema({
    id: {
                type: Number,
                required: true                        //sport monk league id
              },
    league_id : {
            type: Number,
            ref: 'leagues',
            required: true                        //sport monk country id
            },
    season_id : {
                type: Number,
                ref: 'seasons',
                required: true                        //sport monk country id
              },           
    stage_id : {
                type: Number,
                required: true                        //sport monk country id
              },                
    round: {
                type: String,
                trim: true,
                required: true
            },
    localteam_id: {
                type: Number,
                ref: 'teams',
                required: true
            },        
    visitorteam_id:{
                type: Number,
                ref: 'teams',
                required: true
            },   
    starting_at:{
                type: Date,
                required:true
            },              
    type: {
                type: String,
                trim:true,
                required: true
            },    
    live: {
                type: String,
                trim:true,
                required: true
            },            
    status: {
                type: String,
                trim:true,
                required: true
            },
    note: {
                type: String,
                trim:true,
                required: true
            },
    venue_id: {
                type: Number,
                ref: 'venues',
                required: true
    },
    toss_won_team_id: {
                type: Number,
                ref: 'teams',
                required: true
    }, 
    winner_team_id: {
                type: Number,
                ref: 'teams',
                required: true
    },
    draw_noresult: {
                type: String,
                trim: true,
                required: true
    },  
    man_of_match_id: {
                type: Number,
                ref: 'players',
                default: null
    },
    man_of_series_id: {
                type: Number,
                ref: 'players',
                default: null
    },
    total_overs_played: {
                type: Number,
                required: true
    },
    elected:{
                type: String
    },
    super_over:{
                type:Boolean,
                required: true
    },
    follow_on:{
                type:Boolean,
                required: true,
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

module.exports = mongoose.model("matches", matchesSchema);