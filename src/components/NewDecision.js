import React, { useState } from 'react'
import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 100%;
  margin: 15px;
  padding: 5px 20px;
  border-radius: 2px;
  color: dimgray;
  border: 2px solid dimgray;
`

const NewDecision = ({ submitNewDecision }) => {
  const [numberOfVariables, setNumberOfVariables] = useState(1)
  const [inputValues, setInputValues] = useState([])

  const handleVariableChange = (value, i) => {
    if (inputValues[i] === undefined) {
      setInputValues([...inputValues, value])
    } else {
      setInputValues(inputValues.map((val, idx) => idx === i ? value : val))
    }
  }

  return (
    <div>
      <form onSubmit={submitNewDecision}>
        <p>What are you decising about?</p>
        decision name
        <input type="text" />

        <p>What variables impact your decision?</p>
        {[...Array(numberOfVariables)].map((_, i) =>
          <div key={i}>
            variable (unit)
            <input type="text" value={!inputValues[i] ? '' : inputValues[i]} onChange={({ target }) => handleVariableChange(target.value, i)} key={`${i}a`} />
          </div>
        )}
        <button onClick={() => setNumberOfVariables(numberOfVariables + 1)}>Add Variable</button>
        <button onClick={() => numberOfVariables > 0 ? setNumberOfVariables(numberOfVariables - 1) : setNumberOfVariables(numberOfVariables)}>Remove Variable</button>
        <div>
          <SubmitButton type="submit">Submit Decision</SubmitButton>
        </div>
      </form>
    </div>
  )
}

export default NewDecision