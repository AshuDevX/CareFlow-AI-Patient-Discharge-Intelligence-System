import express from "express";
import { initiateDischarge } from "./discharge.controller.js";

const router = express.Router();
router.post("/:id/discharge/initiate", initiateDischarge);

export default router;
