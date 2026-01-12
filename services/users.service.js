const usersSchema = require("../models/users.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  
  async getUserProfile(requestedUserId, authUser) {
    const userId = requestedUserId || (authUser ? authUser._id : null);
    if (!userId) return null;

    return usersSchema.findOne({ _id: userId });
  },

  async getUsersList() {
    return usersSchema.find();
  },

  async updateUser(id, updates, updatedBy) {
    updated_details = {};
    updated_details.username = updates.username;
    updated_details.email = updates.email;
    updated_details.role = updates.role;
    updated_details.updatedBy = new ObjectId(updatedBy);
    return usersSchema.findByIdAndUpdate(id, updated_details, {
      new: true,
      runValidators: true,
    });
  },
};