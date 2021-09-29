import React, { useState } from 'react'

const Dimension = () => {
  const [name, setName] = useState('')

  return (
    <div>
      name (unit)
      <input
        type="text"
        value={name}
        onChange={(({ target }) => setName(target.value))}
        placeholder="weight (kg)"
      />
    </div>
  )
}

const Dimensions = ({ numberOfDimensions }) => {
  return (
    <div>
      {[...Array(numberOfDimensions)].map((_, i) =>
        <Dimension key={i} />
      )}
    </div>
  )
}

const Decision = ({ numberOfDimensions, submitDecision, pointName, setPointName }) => {
  return (
    <div>
      decision name
      <input
        type="text"
        value={pointName}
        onChange={({ target }) => setPointName(target.value)}
        placeholder="tastiest taco"
      />
      <form onSubmit={submitDecision}>
        <Dimensions numberOfDimensions={numberOfDimensions} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Decision