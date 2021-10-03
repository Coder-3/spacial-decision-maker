const calcBetweenTwo = (a, b) => {
  let total = 0
  let diff = 0

  for (let i = 1; i < a.length; i++) {
    diff = b[i] - a[i]
    total += diff * diff
  }

  console.log(a, b, total)
  return Math.sqrt(total)
}

const calculateEuclideanDistance = values => {
  let distances = []

  for(let i = 0; i < values.length - 1; i++) {
    for(let j = i + 1; j < values.length; j++) {
      distances.push(calcBetweenTwo(values[i], values[j]))
    }
  }

  calculateCoordinates(distances)
}

const calculateCoordinates = distances => {
  const points = []

  for(let i = 0; i < distances.length; i++) {
    if (i === 0) {
      points.push([160, 160])
    } else if (i === 1) {
      const x = 160
      let y = 0
      const a = ['a', 160, 160]
      let b = ['b', x, y]
      let AB = 0
      for(let j = 0; j < 320; j++) {
        if(AB !== Math.floor(distances[0])) {
          AB = calcBetweenTwo(a, b)
          y++
          b = ['b', x, y]
        } else {
          console.log('not a single point was found...')
          return
        }
      }
      points.push([x, y])
    } else {
      return
    }
  }

  console.log('these are the points', points)
}



export default calculateEuclideanDistance