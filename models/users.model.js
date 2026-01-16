const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const UsersSchema = new Schema({
    username: {
                type: String,
                trim: true,
                required: true
              },
    email: {
                type: String,
                trim: true,
                required: true
            },
    password: {
                type: String,
                trim: true,
                required: true
            },       
    hash: {
                type: String,
                trim: true,
                required: true
            },
    role: {
                type: String,
                enum: ['super_admin', 'admin', 'finance', 'support'],
    },
    isActive: {
                type: Boolean,
                default:true
    },    
    lastLoginAt: {
                type: Date,
                trim: true 
    },     
    createdAt: {
                type: Date,
                default:Date.now
    },
    createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'userroles', 
                default: null
    },
    updatedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'userroles', 
                default: null
    }
},{ versionKey: false});

UsersSchema.methods.comparePassword = function(password) {
    console.log(password, this.password);
    console.log(bcrypt.compareSync(password, this.password));
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', UsersSchema);