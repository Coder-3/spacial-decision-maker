import React, { useState } from 'react'

const Thing = ({ numberOfDimensions }) => {
  return (
    <div>
      {[...Array(numberOfDimensions)].map((_, i) =>
        <input type="number" key={i} />
      )}
    </div>
  )
}

function App() {
  const [numberOfThings, setNumberOfThings] = useState(1)
  const [numberOfDimensions, setNumberOfDimensions] = useState(1)

  const handleSubmit = event => {
    event.preventDefault()

    console.log(event.target)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {[...Array(numberOfThings)].map((_, i) => 
          <Thing numberOfDimensions={numberOfDimensions} key={i} />
        )}
        <button type="submit">calculate</button>
      </form>
      <button onClick={() => setNumberOfDimensions(numberOfDimensions + 1)}>add dimension</button>
      <button onClick={() => setNumberOfThings(numberOfThings + 1)}>new thing</button>
    </div>
  )
}

export default App;
