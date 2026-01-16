const mongoose = require('mongoose');
const { Schema } = mongoose;
const ApikeysSchema = new Schema({
    operatorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'operators',
                required: true
              },
    key: {
                type: String,
                trim: true,
                required: true
            },
    secret: {
                type: String,
                trim: true,
                required: true
            },       
    status: {
                type: String,
                enum: ['active', 'revoked'],
    },
    allowedDomains:{
                type: Array,
                required: true    
    },
    rateLimit:{
                type: Number,
                required: true    //  ["small","medium","large"]
    },     
    createdAt: {
                type: Date,
                default:Date.now
    },
    expiresAt: {
                type: Date,
                default: null
    },
},{ versionKey: false});

module.exports = mongoose.model('apikeys', ApikeysSchema);