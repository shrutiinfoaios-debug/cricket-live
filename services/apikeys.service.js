const apikeysSchema = require("../models/apikeys.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    async getApikeysList() {
      return apikeysSchema.find();
    },

    async createApikey(data) {
        const newApikey = new apikeysSchema(data);
        const apikey = await newApikey.save();
        return apikey;
    },

    async updateApikey(id, updates) {
        return apikeysSchema.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
    },

    async deleteApikey(id) {
        return apikeysSchema.findByIdAndDelete(id);
    }
};