const subscriptionsSchema = require("../models/subscriptions.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    async getSubscriptionsList() {
      return subscriptionsSchema.find();
    },

    async createSubscription(data) {
        const newSubscription = new subscriptionsSchema(data);
        const subscription = await newSubscription.save();
        return subscription;
    },

    async updateSubscription(id, updates) {
        return subscriptionsSchema.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
    },

    async deleteSubscription(id) {
        return subscriptionsSchema.findByIdAndDelete(id);
    }
};