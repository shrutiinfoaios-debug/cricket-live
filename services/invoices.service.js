const invoicesSchema = require("../models/invoices.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    async getInvoicesList() {
      return invoicesSchema.find();
    },

    async createInvoice(data) {
        const newInvoice = new invoicesSchema(data);
        const invoice = await newInvoice.save();
        return invoice;
    },

    async updateInvoice(id, updates) {
        return invoicesSchema.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
    },

    async deleteInvoice(id) {
        return invoicesSchema.findByIdAndDelete(id);
    }
};