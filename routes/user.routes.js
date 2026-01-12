const express = require("express");
const router = express.Router();

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
router.post("/auth/user_profile", UserDecodeJwt, usersHandlers.profile);

/**
 * @route GET /auth/users_list
 * @description Fetch the list of all users.
 */
router.get("/auth/users_list", UserDecodeJwt, usersHandlers.usersList);

/**
 * @route PUT /auth/change_password
 * @description Change user password.
 */
router.put("/auth/change_password", UserDecodeJwt, authController.changePassword);

/**
 * @route POST /auth/register
 * @description Register a new user.
 */
router.post("/auth/register", authController.register);

/**
 * @route POST /auth/sign_in
 * @description Authenticate user and return login token.
 */
router.post("/auth/sign_in", authController.sign_in);

/**
 * @route PUT /auth/update_user_profile/:id
 * @description Update profile information of a specific user.
 * @param {string} id - User ID
 */
router.put("/auth/update_user_profile/:id", UserDecodeJwt, usersHandlers.updateUserProfile);


/**
 * @route POST /auth/forgot_password_request
 * @description forgot password request.
 */
router.post("/auth/forgot_password_request", authController.forgotPasswordRequest);

/**
 * @route POST /auth/forgot_password
 * @description forgot password .
 */
router.post("/auth/forgot_password_reset", authController.forgotPasswordReset);

module.exports = router;