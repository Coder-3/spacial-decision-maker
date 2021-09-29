import React from 'react'

const DimensionValue = ({ dimension }) => {
  return (
    <tr>
      {dimension.map(d =>
        <td key={d}>{d}</td>
      )}
    </tr>
  )
}

const PointsTable = ({ dimensionNames, dimensionValues }) => {
  if (!dimensionNames) {
    return null
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>item name</th>
            {dimensionNames.dimensions.map(dimension =>
              <th key={dimension}>{dimension}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {dimensionValues.map(dimension =>
            <DimensionValue dimension={dimension} key={dimension} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PointsTable