import mongoose from "mongoose";


const planSchema = new mongoose.Schema({
title: String,
description: String,
price: Number,
duration: Number,
trainer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});


export default mongoose.model("Plan", planSchema);