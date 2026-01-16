const operatorsService = require("../services/operators.service");
const constants = require("../utils/constants");


exports.operatorsList = async (req, res) => {
  try {
    const operators = await operatorsService.getOperatorsList();
    res.send(operators);
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.createOperator = async function (req, res) {
  try {
    const operator = await operatorsService.createOperator(req.body);
    res.json(operator);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.viewOperator = async function (req, res) {
  try {
    const operator = await operatorsService.createOperator(req.body);
    res.json(operator);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.updateOperator = async function (req, res) {
  try {
      const updatedOperator = await operatorsService.updateOperator(
        req.params.id,
        req.body
      );
  
      res.status(200).json(updatedOperator);
    } catch (e) {
      res.status(constants.HTTP_400).json({ message: e.message });
    }
};

exports.deleteOperator = async function (req, res) {
  try {
    const operator = await operatorsService.deleteOperator(req.params.id);
    if(operator)
        res.json({ message: "operator deleted succesfully" });
    else
        res.json({ message: constants.SOMETHING_WENT_WRONG });
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

