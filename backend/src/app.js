import express from "express";
import cors from "cors";
import dischargeRoutes from "./modules/discharge/discharge.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/patients", dischargeRoutes);

export default app;
