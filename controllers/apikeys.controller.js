const apikeysService = require("../services/apikeys.service");
const constants = require("../utils/constants");


exports.apikeysList = async (req, res) => {
  try {
    const apikeys = await apikeysService.getApikeysList();
    res.send(apikeys);
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.createApikey = async function (req, res) {
  try {
    const apikey = await apikeysService.createApikey(req.body);
    res.json(apikey);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.viewApikey = async function (req, res) {
  try {
    const apikey = await apikeysService.createApikey(req.body);
    res.json(apikey);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.updateApikey = async function (req, res) {
  try {
      const updatedApikey = await apikeysService.updateApikey(
        req.params.id,
        req.body
      );
  
      res.status(200).json(updatedApikey);
    } catch (e) {
      res.status(constants.HTTP_400).json({ message: e.message });
    }
};

exports.deleteApikey = async function (req, res) {
  try {
    const apikey = await apikeysService.deleteApikey(req.params.id);
    if(apikey)
        res.json({ message: "apikey deleted succesfully" });
    else
        res.json({ message: constants.SOMETHING_WENT_WRONG });
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

