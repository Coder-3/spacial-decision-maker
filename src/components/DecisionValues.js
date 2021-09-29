import React, { useState } from 'react'

const DecisionValue = ({ dimensionName }) => {
  const [value, setValue] = useState('')

  return (
    <div>
      {dimensionName}
      <input
        type="number"
        value={value}
        onChange={(({ target }) => setValue(target.value))}
      />
    </div>
  )
}

const DecisionValues = ({ numberOfDimensions, dimensionNames, submitDecisionValues }) => {
  const [item, setItem] = useState('')

  return (
    <div>
      <form onSubmit={submitDecisionValues}>
        item name
        <input
          type="text"
          value={item}
          onChange={({ target }) => setItem(target.value)}
        />
        {[...Array(numberOfDimensions)].map((_, i) =>
          <DecisionValue key={i} dimensionName={dimensionNames.dimensions[i]} />
        )}
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default DecisionValues