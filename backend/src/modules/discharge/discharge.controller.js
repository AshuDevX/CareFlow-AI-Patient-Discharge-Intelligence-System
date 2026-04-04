import Patient from "../patients/patient.model.js";
import { orchestrator } from "../../agents/orchestrator.agent.js";

export const initiateDischarge = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  const result = await orchestrator(patient);

  patient.dischargeStatus = {
    readinessScore: result.readinessScore,
    blockers: result.blockers,
    status: result.readinessScore > 60 ? "READY" : "BLOCKED"
  };

  await patient.save();

  global.io.emit("discharge:update", {
    patientId: patient._id,
    status: patient.dischargeStatus
  });

  res.json(patient);
};
