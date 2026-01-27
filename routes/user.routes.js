const express = require("express");
const userrouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const usersHandlers = require("../controllers/users.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");


/* -------------------------------------------------------------------------- */
/*                               AUTH / USERS                                  */
/* -------------------------------------------------------------------------- */

/**
 * @route POST /auth/user_profile
 * @description Get the profile of the logged-in user.
 */
userrouter.post("/auth/user_profile", UserDecodeJwt, usersHandlers.profile);

/**
 * @route GET /auth/users_list
 * @description Fetch the list of all users.
 */
userrouter.get("/auth/users_list", UserDecodeJwt, usersHandlers.usersList);

/**
 * @route PUT /auth/change_password
 * @description Change user password.
 */
userrouter.put("/auth/change_password", UserDecodeJwt, authController.changePassword);

/**
 * @route POST /auth/register
 * @description Register a new user.
 */
userrouter.post("/auth/register", authController.register);

/**
 * @route POST /auth/sign_in
 * @description Authenticate user and return login token.
 */
userrouter.post("/auth/sign_in", authController.sign_in);

/**
 * @route PUT /auth/update_user_profile/:id
 * @description Update profile information of a specific user.
 * @param {string} id - User ID
 */
userrouter.put("/auth/update_user_profile/:id", UserDecodeJwt, usersHandlers.updateUserProfile);


/**
 * @route POST /auth/forgot_password_request
 * @description forgot password request.
 */
userrouter.post("/auth/forgot_password_request", authController.forgotPasswordRequest);

/**
 * @route POST /auth/forgot_password
 * @description forgot password .
 */
userrouter.post("/auth/forgot_password_reset", authController.forgotPasswordReset);

userrouter.get("/api/sync", usersHandlers.getLiveMatches);

module.exports = userrouter;