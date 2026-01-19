const plansService = require("../services/plans.service");
const constants = require("../utils/constants");


exports.plansList = async (req, res) => {
  try {
    const plans = await plansService.getPlansList();
    res.send(plans);
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.createPlan = async function (req, res) {
  try {
    const plan = await plansService.createPlan(req.body);
    res.json(plan);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.viewPlan = async function (req, res) {
  try {
    const plan = await plansService.createPlan(req.body);
    res.json(plan);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.updatePlan = async function (req, res) {
  try {
      const updatedPlan = await plansService.updatePlan(
        req.params.id,
        req.body
      );
  
      res.status(200).json(updatedPlan);
    } catch (e) {
      res.status(constants.HTTP_400).json({ message: e.message });
    }
};

exports.deletePlan = async function (req, res) {
  try {
    const plan = await plansService.deletePlan(req.params.id);
    if(plan)
        res.json({ message: "plan deleted succesfully" });
    else
        res.json({ message: constants.SOMETHING_WENT_WRONG });
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

