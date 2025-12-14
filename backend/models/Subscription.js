import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" }
});


export default mongoose.model("Subscription", subscriptionSchema);