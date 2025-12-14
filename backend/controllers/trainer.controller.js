import User from "../models/User.js";
import Plan from "../models/Plan.js";



export const followTrainer = async (req, res) => {
const user = await User.findById(req.user.id);


if (user.following.includes(req.params.trainerId)) {
return res.json({ message: "Already following" });
}


user.following.push(req.params.trainerId);
await user.save();


res.json({ message: "Trainer followed" });
};



export const unfollowTrainer = async (req, res) => {
const user = await User.findById(req.user.id);
user.following = user.following.filter(
(id) => id.toString() !== req.params.trainerId
);
await user.save();


res.json({ message: "Trainer unfollowed" });
};



export const trainerProfile = async (req, res) => {
const trainer = await User.findById(req.params.id).select("name email");
const plans = await Plan.find({ trainer: req.params.id });
res.json({ trainer, plans });
};