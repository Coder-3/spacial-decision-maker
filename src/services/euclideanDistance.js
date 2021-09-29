const calcBetweenTwo = (a, b) => {
  let total = 0
  let diff = 0

  for (let i = 1; i < a.length; i++) {
    diff = b[i] - a[i]
    total += diff * diff
  }

  return Math.sqrt(total)
}

const calculateEuclideanDistance = (values) => {
  console.log(values)

  let subtracted = []

  for(let i = 0; i < values.length - 1; i++) {
    console.log('i from outside', i)
    for(let j = i + 1; j < values.length; j++) {
      console.log('j from inside', j)
      subtracted.push(calcBetweenTwo(values[i], values[j]))
    }
  }

  console.log('subtracted = ', subtracted)
}

export default calculateEuclideanDistance