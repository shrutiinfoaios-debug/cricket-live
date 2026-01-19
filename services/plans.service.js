const plansSchema = require("../models/plans.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    async getPlansList() {
      return plansSchema.find();
    },

    async createPlan(data) {
        const newPlan = new plansSchema(data);
        const plan = await newPlan.save();
        return plan;
    },

    async updatePlan(id, updates) {
        return plansSchema.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
    },

    async deletePlan(id) {
        return plansSchema.findByIdAndDelete(id);
    }
};