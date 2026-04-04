export class RiskAgent {
  async execute({ patient }) {
    const riskScore = patient.age > 65 ? 0.7 : 0.3;
    return { riskScore, blockers: riskScore > 0.6 ? ["High risk"] : [] };
  }
}
