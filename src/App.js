import React, { useState } from 'react'
import GlobalStyle from './global.styled'
import ReactRough, { Circle, Line } from 'react-rough';
import NewDecision from './components/NewDecision';
import Decision from './components/Decision'
import DecisionValues from './components/DecisionValues'
import PointsTable from './components/PointsTable'
import calculateEuclideanDistance from './services/euclideanDistance'

const Canvas = ({ coordinates }) => {
  return (
    <ReactRough renderer="svg" width={320} height={320}>
      <Line x1={0} x2={320} y1={20} y2={20} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={40} y2={40} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={60} y2={60} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={80} y2={80} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={100} y2={100} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={120} y2={120} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={140} y2={140} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={160} y2={160} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={180} y2={180} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={200} y2={200} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={220} y2={220} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={240} y2={240} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={260} y2={260} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={280} y2={280} stroke="grey" strokeWidth={0.3} />
      <Line x1={0} x2={320} y1={300} y2={300} stroke="grey" strokeWidth={0.3} />
      <Line x1={20} x2={20} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={40} x2={40} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={60} x2={60} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={80} x2={80} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={100} x2={100} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={120} x2={120} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={140} x2={140} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={160} x2={160} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={180} x2={180} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={200} x2={200} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={220} x2={220} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={240} x2={240} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={260} x2={260} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={280} x2={280} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      <Line x1={300} x2={300} y1={0} y2={320} stroke="grey" strokeWidth={0.3} />
      {coordinates.map(c =>
        <Circle hachureGap={0.5} diameter={20} stroke="white" fill="white" x={c.x} y={c.y} key={c.x} />
      )}
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
      <Canvas coordinates={[{ x: 120, y: 60 }, { x: 50, y: 200 }]} />
      <NewDecision />
      
    </div>
  )
}

export default App;
