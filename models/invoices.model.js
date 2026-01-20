const mongoose = require('mongoose');
const { Schema } = mongoose;
const InvoicesSchema = new Schema({
    invoiceNumber: {
                    type:String,
                    required: true
    },
    operatorId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'operators',
                    required: true
    },
    subscriptionId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'subscriptions',
                    required: true
    },
    amount: {
                type: Number,
                required: true
    },
    currency: {
                type: String,
                required: true
    },
    taxAamount: {
                    type: Number,
                    required: true
    },             
    status: {
                type: String,
                trim: true,
                enum: ['paid', 'unpaid','overdue']
            },       
    billingPeriodFrom: {
                type: Date,
                required: true    
    },
    billingPeriodTo:{
                type: Date,
                required: true
    },
    pdfPath: {
                type: String,
                required:true
    },
    issuedAt:{
                type: Date,
                required: true
    }, 
    paidAt: {
                type: Date,
                required: true
    },
    createdAt:    {
                type: Date,
                default:Date.now
    }
},{ versionKey: false});

module.exports = mongoose.model('invoices', InvoicesSchema);