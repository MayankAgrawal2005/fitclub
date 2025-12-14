import express from "express";
import { followTrainer, unfollowTrainer, trainerProfile } from "../controllers/trainer.controller.js";
import { protect } from "../middleware/auth.middleware.js";


const router = express.Router();


router.get("/:id", trainerProfile); // public trainer profile
router.post("/follow/:trainerId", protect, followTrainer);
router.post("/unfollow/:trainerId", protect, unfollowTrainer);


export default router;