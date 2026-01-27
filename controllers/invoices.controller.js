const invoicesService = require("../services/invoices.service");
const constants = require("../utils/constants");


exports.invoicesList = async (req, res) => {
  try {
    const invoices = await invoicesService.getInvoicesList();
    res.send(invoices);
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.createInvoice = async function (req, res) {
  try {
    const invoice = await invoicesService.createInvoice(req.body);
    res.json(invoice);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.viewInvoice = async function (req, res) {
  try {
    const invoice = await invoicesService.createInvoice(req.body);
    res.json(invoice);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.updateInvoice = async function (req, res) {
  try {
      const updatedInvoice = await invoicesService.updateInvoice(
        req.params.id,
        req.body
      );
  
      res.status(200).json(updatedInvoice);
    } catch (e) {
      res.status(constants.HTTP_400).json({ message: e.message });
    }
};

exports.deleteInvoice = async function (req, res) {
  try {
    const invoice = await invoicesService.deleteInvoice(req.params.id);
    if(invoice)
        res.json({ message: "invoice deleted succesfully" });
    else
        res.json({ message: constants.SOMETHING_WENT_WRONG });
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};