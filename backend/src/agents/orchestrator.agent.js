import { ClinicalAgent } from "./clinical.agent.js";
import { RiskAgent } from "./risk.agent.js";

export const orchestrator = async (patient) => {
  const clinical = await new ClinicalAgent().execute({ patient });
  const risk = await new RiskAgent().execute({ patient });

  const readinessScore = clinical.score - risk.riskScore * 50;

  return {
    readinessScore,
    blockers: [...clinical.blockers, ...risk.blockers]
  };
};
