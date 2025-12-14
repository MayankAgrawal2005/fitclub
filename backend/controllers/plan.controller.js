import Plan from "../models/Plan.js";
import Subscription from "../models/Subscription.js";

/* ================================
   CREATE PLAN (TRAINER ONLY)
================================ */
export const createPlan = async (req, res) => {
  try {
    // Role check here
    if (req.user.role !== "trainer") {
      return res.status(403).json("Only trainers can create plans");
    }

    const plan = await Plan.create({
      ...req.body,
      trainer: req.user.id,
    });

    res.status(201).json(plan);
  } catch (error) {
    console.error("CREATE PLAN ERROR:", error);
    res.status(500).json("Server error");
  }
};

export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find().populate("trainer", "name", "description");
    res.json(plans);
  } catch (error) {
    res.status(500).json("Server error");
  }
};


export const getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id).populate(
      "trainer",
      "name",
      "description"
    );

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }


    if (!req.user) {
      return res.json({
        title: plan.title,
        description: plan.description,
        price: plan.price,
        trainer: plan.trainer,
      });
    }

   
    const subscribed = await Subscription.findOne({
      user: req.user.id,
      plan: plan._id,
    });

    
    if (!subscribed) {
      return res.json({
        title: plan.title,
        description: plan.description, 
        price: plan.price,
        trainer: plan.trainer,
      });
    }

   
    res.json(plan);
  } catch (error) {
    console.error("GET PLAN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const updatePlan = async (req, res) => {
  try {
    if (req.user.role !== "trainer") {
      return res.status(403).json("Only trainers can update plans");
    }

    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json("Plan not found");

    // Ownership check
    if (plan.trainer.toString() !== req.user.id) {
      return res.status(403).json("You do not own this plan");
    }

    Object.assign(plan, req.body);
    await plan.save();

    res.json(plan);
  } catch (error) {
    console.error("UPDATE PLAN ERROR:", error);
    res.status(500).json("Server error");
  }
};


export const deletePlan = async (req, res) => {
  try {
    if (req.user.role !== "trainer") {
      return res.status(403).json("Only trainers can delete plans");
    }

    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json("Plan not found");

  
    if (plan.trainer.toString() !== req.user.id) {
      return res.status(403).json("You do not own this plan");
    }

    await plan.deleteOne();
    await Subscription.deleteMany({ plan: plan._id });

    res.json("Plan deleted successfully");
  } catch (error) {
    console.error("DELETE PLAN ERROR:", error);
    res.status(500).json("Server error");
  }
};