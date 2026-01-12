const usersService = require("../services/users.service");
const constants = require("../utils/constants");


exports.profile = async (req, res) => {
  try {
    const user = await usersService.getUserProfile(req.body.user_id, req.user);
    if (!user) return res.status(401).json({ message: "Invalid token" });
    res.send(user);
  } catch (error) {
    res.status(constants.HTTP_500).json({ message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.usersList = async (req, res) => {
  try {
    const users = await usersService.getUsersList();
    res.send(users);
  } catch (error) {
    res.status(constants.HTTP_500).json({ message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await usersService.updateUser(
      req.params.id,
      req.body,
      req.user._id
    );

    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(constants.HTTP_400).json({ message: e.message });
  }
};