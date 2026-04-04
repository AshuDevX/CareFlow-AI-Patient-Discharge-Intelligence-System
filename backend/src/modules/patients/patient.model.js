import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  diagnosis: String,
  vitals: { temperature: Number, heartRate: Number },
  dischargeStatus: { readinessScore: Number, blockers: [String], status: String }
});

export default mongoose.model("Patient", schema);
