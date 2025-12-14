import express from "express";
import {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan,
} from "../controllers/plan.controller.js";import { protect } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get("/", getPlans);
router.get("/:id",  getPlanById);

router.post("/", protect, createPlan);
router.put("/:id", protect, updatePlan);
router.delete("/:id", protect, deletePlan);



export default router;