const express = require("express");
const subscriptionrouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const subscriptionsHandlers = require("../controllers/subscriptions.controller.js");


/* -------------------------------------------------------------------------- */
/*                               API_KEYS                                  */
/* -------------------------------------------------------------------------- */


subscriptionrouter.get("/subscription/list", UserDecodeJwt, subscriptionsHandlers.subscriptionsList);

subscriptionrouter.post("/subscription/create", UserDecodeJwt, subscriptionsHandlers.createSubscription);

subscriptionrouter.get("/subscription/view/:id", UserDecodeJwt, subscriptionsHandlers.viewSubscription);

subscriptionrouter.put("/subscription/update/:id", UserDecodeJwt, subscriptionsHandlers.updateSubscription);

subscriptionrouter.delete("/subscription/delete/:id", UserDecodeJwt, subscriptionsHandlers.deleteSubscription);

module.exports = subscriptionrouter;