function getTotalX(a: number[], b: number[]) {
  let betweensCount: number = 0
  for (let index = 0; index <= 100; index++) {
    let isBetween: boolean = true
    a.forEach(number => {
      if (index % number !== 0) {
        isBetween = false
        return
      }
    })
    if (!isBetween) continue
    b.forEach(number => {
      if (number % index !== 0) {
        isBetween = false
        return
      }
    })
    if (!isBetween) continue
    betweensCount++
  }
  console.log(betweensCount)
  return betweensCount
}


const sampleA: number[] = [2, 4]
const sampleb: number[] = [16, 32, 96]

getTotalX(sampleA, sampleb)