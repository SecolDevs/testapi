import React from 'react'

const Growing = ({ color }) => {
  return (
    <div className={`spinner-grow ${color}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Growing
