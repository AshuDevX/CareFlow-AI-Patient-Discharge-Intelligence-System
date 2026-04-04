export class ClinicalAgent {
  async execute({ patient }) {
    let score = 0;
    let blockers = [];
    if (patient.vitals.temperature < 99) score += 30;
    else blockers.push("High temp");
    return { score, blockers };
  }
}
