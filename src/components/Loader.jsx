import React from 'react'

const Loader = ({ color }) => {
  color = color ? color : 'text-primary'
  return (
    <div className={`spinner-border ${color}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loader
