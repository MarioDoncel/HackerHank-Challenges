function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0
  let orangesCount = 0
  apples.forEach(apple => (apple + a >= s) && (apple + a) <= t ? applesCount++ : '')
  oranges.forEach(orange => (orange + b) <= t && (orange + b) >= s ? orangesCount++ : '')
  console.log(applesCount)
  console.log(orangesCount)
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])