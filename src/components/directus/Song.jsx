import React from 'react'

const Song = ({ cancion }) => {
  const { name, author } = cancion

  return (
    <div className="col-lg-10 mt-2 card shadow border-dark rounded">
      <h3 className="text-info">
        {name} - <span>{author.name}</span>
      </h3>
    </div>
  )
}

export default Song
