import express from "express";
import { subscribePlan, mySubscriptions } from "../controllers/subscription.controller.js";
import { protect } from "../middleware/auth.middleware.js";


const router = express.Router();


router.post("/", protect, subscribePlan); // subscribe to plan
router.get("/my", protect, mySubscriptions); // user's subscriptions


export default router;