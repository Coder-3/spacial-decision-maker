import React, { useState } from 'react'
import GlobalStyle from './global.styled'
import ReactRough, { Rectangle, Circle, Line } from 'react-rough';
import Decision from './components/Decision'
import DecisionValues from './components/DecisionValues'
import PointsTable from './components/PointsTable'
import calculateEuclideanDistance from './services/euclideanDistance'

const Canvas = () => {
  return (
    <ReactRough renderer="svg" width={260} height={260}>
      <Line x1={0} x2={260} y1={20} y2={20} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={40} y2={40} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={60} y2={60} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={80} y2={80} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={100} y2={100} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={120} y2={120} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={140} y2={140} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={160} y2={160} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={180} y2={180} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={200} y2={200} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={220} y2={220} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={260} y1={240} y2={240} stroke="grey" strokeWidth={0.3} />
      <Line x1={20} x2={20} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={40} x2={40} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={60} x2={60} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={80} x2={80} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={100} x2={100} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={120} x2={120} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={140} x2={140} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={160} x2={160} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={180} x2={180} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={200} x2={200} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={220} x2={220} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={240} x2={240} y1={0} y2={260} stroke="grey" strokeWidth={0.3} />
      <Circle
        diameter={20}
        fill="white"
        stroke="white"
        x={80}
        y={50}
      />
      <Circle
            hachureGap={0.5}
            x={50}
            y={80}
            stroke="white"
          />
	  </ReactRough>
  )
}

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
      <Canvas />
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
