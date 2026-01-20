const mongoose = require('mongoose');
const { Schema } = mongoose;
const SubscriptionsSchema = new Schema({
    operatorId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'operators',
                    required: true
    },
    planId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'plans',
                    required: true
    },                
    status: {
                type: String,
                trim: true,
                enum: ['active', 'paused','expired']
            },       
    startDate: {
                type: Date,
                required: true    
    },
    endDate:{
                type: Date,
                required: true
    },
    nextBillingDate:{
                type: Date,
                required: true
    },
    autorenew:{
                type: Boolean,
                required: true    
    }, 
    createdAt: {
                type: Date,
                default:Date.now
    }
},{ versionKey: false});

module.exports = mongoose.model('subscriptions', SubscriptionsSchema);