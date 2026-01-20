const subscriptionsService = require("../services/subscriptions.service");
const constants = require("../utils/constants");


exports.subscriptionsList = async (req, res) => {
  try {
    const subscriptions = await subscriptionsService.getSubscriptionsList();
    res.send(subscriptions);
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.createSubscription = async function (req, res) {
  try {
    const subscription = await subscriptionsService.createSubscription(req.body);
    res.json(subscription);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.viewSubscription = async function (req, res) {
  try {
    const subscription = await subscriptionsService.createSubscription(req.body);
    res.json(subscription);
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

exports.updateSubscription = async function (req, res) {
  try {
      const updatedSubscription = await subscriptionsService.updateSubscription(
        req.params.id,
        req.body
      );
  
      res.status(200).json(updatedSubscription);
    } catch (e) {
      res.status(constants.HTTP_400).json({ message: e.message });
    }
};

exports.deleteSubscription = async function (req, res) {
  try {
    const subscription = await subscriptionsService.deleteSubscription(req.params.id);
    if(subscription)
        res.json({ message: "subscription deleted succesfully" });
    else
        res.json({ message: constants.SOMETHING_WENT_WRONG });
  } catch (error) {
    res.status(constants.HTTP_400).json({ message: error.message });
  }
};

