const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const OperatorsSchema = new Schema({
    name: {
                type: String,
                trim: true,
                required: true
              },
    contactPerson: {
                type: String,
                trim: true,
                required: true
            },
    email: {
                type: String,
                trim: true,
                required: true
            },       
    phone: {
                type: String,
                trim: true,
                required: true
            },
    status: {
                type: String,
                enum: ['active', 'suspended', 'expired'],
    },
    allowedSports:{
                type: Array,
                required: true    //  ["cricket","soccer"]
    },
    allowedWidgetSizes:{
                type: Array,
                required: true    //  ["small","medium","large"]
    },     
    createdAt: {
                type: Date,
                default:Date.now
    },
    notes:{
                type: String,
                default: null
    }
},{ versionKey: false});

module.exports = mongoose.model('operators', OperatorsSchema);