import { results } from "../data/results";

/**
 * Calculates the best matching personality based on recorded option scores.
 * @param selectedAnswers - Array of options selected by the user for each question
 * @returns The key of the winning personality
 */
export function calculateResult(selectedAnswers: Array<{ scores: Record<string, number> }>): string {
  const finalScores: Record<string, number> = {};

  // Initialize keys with 0
  Object.keys(results).forEach((key) => {
    finalScores[key] = 0;
  });

  // Accumulate scores
  selectedAnswers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([personalityKey, weight]) => {
      if (typeof finalScores[personalityKey] !== "undefined") {
        finalScores[personalityKey] += weight;
      } else {
        finalScores[personalityKey] = weight;
      }
    });
  });

  // Find the max score
  let maxScore = -1;
  let winningKeys: string[] = [];

  Object.entries(finalScores).forEach(([key, score]) => {
    if (score > maxScore) {
      maxScore = score;
      winningKeys = [key];
    } else if (score === maxScore) {
      winningKeys.push(key);
    }
  });

  // Tie-breaker rules:
  // If there's a tie, we look at keys and prefer some specific profiles if present,
  // or simply return the first one. Let's return the first one consistently.
  if (winningKeys.length > 0) {
    return winningKeys[0];
  }

  // Fallback if everything is zero
  return "rtx4060Rational";
}
