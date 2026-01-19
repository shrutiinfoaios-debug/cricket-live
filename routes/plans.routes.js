const express = require("express");
const planrouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const plansHandlers = require("../controllers/plans.controller.js");


/* -------------------------------------------------------------------------- */
/*                               API_KEYS                                  */
/* -------------------------------------------------------------------------- */


planrouter.get("/plan/list", UserDecodeJwt, plansHandlers.plansList);

planrouter.post("/plan/create", UserDecodeJwt, plansHandlers.createPlan);

planrouter.get("/plan/view/:id", UserDecodeJwt, plansHandlers.viewPlan);

planrouter.put("/plan/update/:id", UserDecodeJwt, plansHandlers.updatePlan);

planrouter.delete("/plan/delete/:id", UserDecodeJwt, plansHandlers.deletePlan);

module.exports = planrouter;