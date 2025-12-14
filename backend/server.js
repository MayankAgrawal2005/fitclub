import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import planRoutes from "./routes/plan.routes.js";
import trainerRoutes from "./routes/trainer.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


