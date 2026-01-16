const express = require("express");
const apikeyrouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const apikeysHandlers = require("../controllers/apikeys.controller.js");


/* -------------------------------------------------------------------------- */
/*                               API_KEYS                                  */
/* -------------------------------------------------------------------------- */


apikeyrouter.get("/apikey/list", UserDecodeJwt, apikeysHandlers.apikeysList);

apikeyrouter.post("/apikey/create", UserDecodeJwt, apikeysHandlers.createApikey);

apikeyrouter.get("/apikey/view/:id", UserDecodeJwt, apikeysHandlers.viewApikey);

apikeyrouter.put("/apikey/update/:id", UserDecodeJwt, apikeysHandlers.updateApikey);

apikeyrouter.delete("/apikey/delete/:id", UserDecodeJwt, apikeysHandlers.deleteApikey);

module.exports = apikeyrouter;