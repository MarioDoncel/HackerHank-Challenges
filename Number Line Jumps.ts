function kangaroo(x1: number, v1: number, x2: number, v2: number) {
  if (x2 > x1 && v2 >= v1) return 'NO'
  if (x2 < x1 && v2 <= v1) return 'NO'
  if (x2 > x1) {
    const distance: number = x2 - x1
    const distanceCoveredByJump: number = v1 - v2
    return distance % distanceCoveredByJump === 0 ? 'YES' : 'NO'
  }
  if (x2 < x1) {
    const distance: number = x1 - x2
    const distanceCoveredByJump: number = v2 - v1
    return distance % distanceCoveredByJump === 0 ? 'YES' : 'NO'
  }
}