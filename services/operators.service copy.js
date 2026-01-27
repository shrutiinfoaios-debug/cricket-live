const operatorsSchema = require("../models/operators.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    async getOperatorsList() {
      return operatorsSchema.find();
    },

    async createOperator(data) {
        const newOperator = new operatorsSchema(data);
        const operator = await newOperator.save();
        return operator;
    },

    async updateOperator(id, updates) {
        return operatorsSchema.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
    },

    async deleteOperator(id) {
        return operatorsSchema.findByIdAndDelete(id);
    }
};