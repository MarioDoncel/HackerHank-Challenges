function breakingRecords(scores: number[]) {
  // Write your code here
  const initial: { min: number, max: number } = { min: scores[0], max: scores[0] }
  return scores.reduce((acc, score) => {
    if (score > initial.max) {
      initial.max = score
      acc[0]++
      return acc
    }
    if (score < initial.min) {
      initial.min = score
      acc[1]++
      return acc
    }
    return acc
  }, [0, 0])
}

const sampleScores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(sampleScores))