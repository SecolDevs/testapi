import React from 'react'

const Growing = ({ color }) => {
  return (
    <div class={`spinner-grow ${color}`} role="status">
      <span class="sr-only">Loading...</span>
    </div>
  )
}

export default Growing
