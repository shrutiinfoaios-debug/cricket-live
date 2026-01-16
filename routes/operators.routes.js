const express = require("express");
const operatorrouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const operatorsHandlers = require("../controllers/operators.controller.js");


/* -------------------------------------------------------------------------- */
/*                               OPERATORS                                  */
/* -------------------------------------------------------------------------- */

/**
 * @route GET /operator/operators_list
 * @description Fetch the list of all operators.
 */
operatorrouter.get("/operator/list", UserDecodeJwt, operatorsHandlers.operatorsList);

operatorrouter.post("/operator/create", UserDecodeJwt, operatorsHandlers.createOperator);

operatorrouter.get("/operator/view/:id", UserDecodeJwt, operatorsHandlers.viewOperator);

operatorrouter.put("/operator/update/:id", UserDecodeJwt, operatorsHandlers.updateOperator);

operatorrouter.delete("/operator/delete/:id", UserDecodeJwt, operatorsHandlers.deleteOperator);

module.exports = operatorrouter;