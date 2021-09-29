import React, { useState } from 'react'
import GlobalStyle from './global.styled'
import Decision from './components/Decision'
import DecisionValues from './components/DecisionValues'
import PointsTable from './components/PointsTable'
import calculateEuclideanDistance from './services/euclideanDistance'

function App() {
  const [dimensionNames, setDimensionNames] = useState(null)
  const [numberOfDimensions, setNumberOfDimensions] = useState(1)
  const [pointName, setPointName] = useState('')
  const [dimensionValues, setDimensionValues] = useState([])

  const submitDecision = event => {
    event.preventDefault()

    const dimensions = []

    for(let i = 0; i < event.target.length - 1; i++) {
      dimensions.push(event.target[i].value)
    }

    setDimensionNames({ name: pointName, dimensions })

    setPointName('')
  }

  const submitDecisionValues = event => {
    event.preventDefault()

    const values = []

    for(let i = 0; i < event.target.length - 1; i++) {
      values.push(event.target[i].value)
    }

    setDimensionValues(dimensionValues.concat([values]))
    if (dimensionValues.length > 1) {
      calculateEuclideanDistance(dimensionValues)
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <h2>{!dimensionNames ? null : dimensionNames.name}</h2>
      <div>
        <PointsTable dimensionNames={dimensionNames} dimensionValues={dimensionValues} />
      </div>
      {!dimensionNames ?
        <div>
          <Decision numberOfDimensions={numberOfDimensions} submitDecision={submitDecision} pointName={pointName} setPointName={setPointName} />
          <button onClick={() => setNumberOfDimensions(numberOfDimensions + 1)}>add dimension</button>
        </div>
      :
        <DecisionValues numberOfDimensions={numberOfDimensions} dimensionNames={dimensionNames} submitDecisionValues={submitDecisionValues} />
      }
    </div>
  )
}

export default App;
