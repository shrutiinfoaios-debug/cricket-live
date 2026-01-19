const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlansSchema = new Schema({
    name: {
                type: String,
                trim: true,
                required: true
            },
    billingCycle: {
                type: String,
                trim: true,
                enum: ['monthly', 'quarterly','yearly']
            },       
    price: {
                type: Number,
                required: true    
    },
    currency:{
                type: String,
                enum: ['INR','USD']    
    },
    sports:{
                type: Array,
                required: true    
    },     
    widgetSizes:{
                type: Array,
                required:true
    },
    limits:{
                type:Object,
                required: true
    },
    isActive: {
                type: Boolean,
    },
    createdAt: {
                type: Date,
                default:Date.now
    }
},{ versionKey: false});

module.exports = mongoose.model('plans', PlansSchema);