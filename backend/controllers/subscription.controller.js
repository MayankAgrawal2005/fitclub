import Subscription from "../models/Subscription.js";


// Subscribe to a plan (simulate payment)
export const subscribePlan = async (req, res) => {
const exists = await Subscription.findOne({
user: req.user.id,
plan: req.body.planId,
});


if (exists) return res.json({ message: "Already subscribed" });


const sub = await Subscription.create({
user: req.user.id,
plan: req.body.planId,
});


res.json({ message: "Subscription successful", sub });
};


// Get user subscriptions
export const mySubscriptions = async (req, res) => {
const subs = await Subscription.find({ user: req.user.id }).populate("plan");
res.json(subs);
};