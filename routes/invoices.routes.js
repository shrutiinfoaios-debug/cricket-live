const express = require("express");
const invoicerouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const invoicesHandlers = require("../controllers/invoices.controller.js");


/* -------------------------------------------------------------------------- */
/*                               INVOICES                                  */
/* -------------------------------------------------------------------------- */


invoicerouter.get("/invoice/list", UserDecodeJwt, invoicesHandlers.invoicesList);

invoicerouter.post("/invoice/create", UserDecodeJwt, invoicesHandlers.createInvoice);

invoicerouter.get("/invoice/view/:id", UserDecodeJwt, invoicesHandlers.viewInvoice);

invoicerouter.put("/invoice/update/:id", UserDecodeJwt, invoicesHandlers.updateInvoice);

invoicerouter.delete("/invoice/delete/:id", UserDecodeJwt, invoicesHandlers.deleteInvoice);

module.exports = invoicerouter;